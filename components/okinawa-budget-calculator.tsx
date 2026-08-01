"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type TravelStyle = "budget" | "standard" | "comfortable";
type TransportMode = "car" | "public";

type CalculatorState = {
  adults: number;
  children: number;
  days: number;
  style: TravelStyle;
  transport: TransportMode;
  airfare: number;
};

type BreakdownItem = {
  key: string;
  label: string;
  amount: number;
  note: string;
};

const styleOptions: Array<{ value: TravelStyle; label: string; description: string }> = [
  { value: "budget", label: "省錢型", description: "簡單住宿、平價餐食" },
  { value: "standard", label: "一般型", description: "家庭房、正常用餐" },
  { value: "comfortable", label: "舒適型", description: "較寬鬆住宿與餐飲" }
];

const assumptions = {
  budget: {
    roomNight: 2800,
    adultMealDay: 850,
    adultActivityDay: 450,
    adultPublicDay: 350,
    carDay: 2500,
    carExtraDay: 500,
    adultMiscDay: 250
  },
  standard: {
    roomNight: 4600,
    adultMealDay: 1500,
    adultActivityDay: 900,
    adultPublicDay: 550,
    carDay: 3200,
    carExtraDay: 750,
    adultMiscDay: 400
  },
  comfortable: {
    roomNight: 7600,
    adultMealDay: 2600,
    adultActivityDay: 1800,
    adultPublicDay: 900,
    carDay: 4700,
    carExtraDay: 1200,
    adultMiscDay: 700
  }
} as const;

const defaultState: CalculatorState = {
  adults: 2,
  children: 1,
  days: 5,
  style: "standard",
  transport: "car",
  airfare: 0
};

function clampNumber(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function formatTwd(value: number) {
  return `NT$${new Intl.NumberFormat("zh-TW", {
    maximumFractionDigits: 0
  }).format(Math.round(value))}`;
}

function sendEvent(name: string, parameters: Record<string, string | number>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, parameters);
  }
}

function buildEstimate(state: CalculatorState) {
  const selected = assumptions[state.style];
  const travelers = state.adults + state.children;
  const nights = Math.max(1, state.days - 1);
  const rooms = travelers <= 4 ? 1 : Math.ceil(travelers / 4);
  const activityDays = Math.max(1, state.days - 2);
  const cars = travelers <= 5 ? 1 : Math.ceil(travelers / 5);
  const childFactor = 0.6;

  const lodging = selected.roomNight * nights * rooms;
  const meals = selected.adultMealDay * state.days * (state.adults + state.children * childFactor);
  const activities = selected.adultActivityDay * activityDays * (state.adults + state.children * childFactor);
  const transport =
    state.transport === "car"
      ? (selected.carDay + selected.carExtraDay) * state.days * cars
      : selected.adultPublicDay * state.days * (state.adults + state.children * 0.5);
  const connectivity = Math.max(1, state.adults) * 650;
  const misc = selected.adultMiscDay * state.days * (state.adults + state.children * childFactor);
  const beforeReserve = lodging + meals + activities + transport + connectivity + misc + state.airfare;
  const reserve = beforeReserve * 0.1;
  const total = beforeReserve + reserve;

  const breakdown: BreakdownItem[] = [
    {
      key: "airfare",
      label: "來回機票",
      amount: state.airfare,
      note: state.airfare ? "使用你輸入的全家總價" : "尚未加入"
    },
    { key: "lodging", label: "住宿", amount: lodging, note: `${nights} 晚、約 ${rooms} 間房` },
    { key: "meals", label: "餐飲", amount: meals, note: `${state.days} 天的家庭餐費` },
    {
      key: "transport",
      label: state.transport === "car" ? "租車、油資與停車" : "當地大眾交通",
      amount: transport,
      note: state.transport === "car" ? `約 ${cars} 輛車` : "市區移動的規劃值"
    },
    { key: "activities", label: "景點與體驗", amount: activities, note: `以 ${activityDays} 個主要遊玩日估算` },
    { key: "connectivity", label: "網路", amount: connectivity, note: "以成人裝置數估算" },
    { key: "misc", label: "零星支出", amount: misc, note: "飲水、小額採買等" },
    { key: "reserve", label: "備用金", amount: reserve, note: "預留 10%" }
  ];

  return {
    low: beforeReserve * 1.05,
    high: beforeReserve * 1.2,
    perPerson: total / Math.max(1, travelers),
    breakdown
  };
}

export function OkinawaBudgetCalculator() {
  const [state, setState] = useState<CalculatorState>(defaultState);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const [interestRecorded, setInterestRecorded] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const estimate = useMemo(() => buildEstimate(state), [state]);
  const maxBreakdown = Math.max(...estimate.breakdown.map((item) => item.amount), 1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("d")) return;

    const style = params.get("s");
    const transport = params.get("t");
    setState({
      adults: clampNumber(Number(params.get("a")), 1, 6),
      children: clampNumber(Number(params.get("c")), 0, 4),
      days: clampNumber(Number(params.get("d")), 3, 10),
      style: style === "budget" || style === "comfortable" ? style : "standard",
      transport: transport === "public" ? "public" : "car",
      airfare: clampNumber(Number(params.get("f")), 0, 1000000)
    });
    setHasCalculated(true);
  }, []);

  function markStarted() {
    if (startedRef.current) return;
    startedRef.current = true;
    sendEvent("budget_calculator_start", { calculator: "okinawa_family" });
  }

  function changeCount(field: "adults" | "children", amount: number) {
    markStarted();
    setState((current) => ({
      ...current,
      [field]: clampNumber(current[field] + amount, field === "adults" ? 1 : 0, field === "adults" ? 6 : 4)
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasCalculated(true);
    sendEvent("budget_calculator_complete", {
      adults: state.adults,
      children: state.children,
      days: state.days,
      travel_style: state.style,
      transport_mode: state.transport,
      airfare_included: state.airfare > 0 ? 1 : 0
    });
    window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
  }

  function createShareUrl() {
    const url = new URL(window.location.href);
    url.search = new URLSearchParams({
      a: String(state.adults),
      c: String(state.children),
      d: String(state.days),
      s: state.style,
      t: state.transport,
      f: String(state.airfare)
    }).toString();
    return url.toString();
  }

  async function handleShare() {
    const url = createShareUrl();
    sendEvent("budget_calculator_share", { calculator: "okinawa_family" });
    setShareMessage("");

    try {
      if (navigator.share) {
        await navigator.share({ title: "沖繩親子旅費估算", text: "這是我們目前的沖繩旅行預算估算。", url });
        setShareMessage("分享選單已開啟");
        return;
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("分享連結已複製");
    } catch {
      setShareMessage("目前無法自動複製，請直接複製網址列連結");
    }
  }

  function recordPremiumInterest() {
    setInterestRecorded(true);
    sendEvent("budget_premium_interest", { calculator: "okinawa_family", planned_price: 149 });
  }

  return (
    <div>
      <form
        className="rounded-xl border border-[#e2d4bf] bg-white p-5 sm:p-7"
        onFocusCapture={markStarted}
        onSubmit={handleSubmit}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#34302b]">先輸入旅行條件</h2>
            <p className="mt-2 text-sm leading-7 text-[#756e65]">不用填日期，也不需要留下聯絡資料。</p>
          </div>
          <span className="shrink-0 rounded-full bg-[#f6efe4] px-3 py-1 text-xs font-semibold text-[#694624]">5 個步驟</span>
        </div>

        <div className="mt-7 space-y-7">
          <fieldset>
            <legend className="text-base font-bold text-[#34302b]">1. 幾位大人、小孩？</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Counter
                label="成人"
                max={6}
                min={1}
                onDecrease={() => changeCount("adults", -1)}
                onIncrease={() => changeCount("adults", 1)}
                value={state.adults}
              />
              <Counter
                label="兒童"
                max={4}
                min={0}
                onDecrease={() => changeCount("children", -1)}
                onIncrease={() => changeCount("children", 1)}
                value={state.children}
              />
            </div>
            <p className="mt-2 text-xs leading-6 text-[#756e65]">兒童先以約 3～11 歲的一般支出估算；幼兒需求可先算入兒童人數。</p>
          </fieldset>

          <div>
            <label className="text-base font-bold text-[#34302b]" htmlFor="trip-days">
              2. 玩幾天？
            </label>
            <select
              className="mt-3 min-h-12 w-full cursor-pointer rounded-lg border border-[#cdbb9f] bg-white px-4 text-base text-[#34302b] outline-none transition focus:border-[#694624] focus:ring-2 focus:ring-[#d7c7af]"
              id="trip-days"
              onChange={(event) => setState((current) => ({ ...current, days: Number(event.target.value) }))}
              value={state.days}
            >
              {Array.from({ length: 8 }, (_, index) => index + 3).map((days) => (
                <option key={days} value={days}>
                  {days} 天 {days - 1} 夜
                </option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className="text-base font-bold text-[#34302b]">3. 旅行方式接近哪一種？</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {styleOptions.map((option) => (
                <label
                  className={`min-h-24 cursor-pointer rounded-lg border p-4 transition-colors ${
                    state.style === option.value
                      ? "border-[#694624] bg-[#fbf6ee]"
                      : "border-[#dfd2bf] bg-white hover:bg-[#fffaf2]"
                  }`}
                  key={option.value}
                >
                  <input
                    checked={state.style === option.value}
                    className="sr-only"
                    name="travel-style"
                    onChange={() => setState((current) => ({ ...current, style: option.value }))}
                    type="radio"
                    value={option.value}
                  />
                  <span className="block font-bold text-[#34302b]">{option.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-[#756e65]">{option.description}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-[#34302b]">4. 主要怎麼移動？</legend>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { value: "car" as const, label: "租車自駕" },
                { value: "public" as const, label: "大眾運輸" }
              ].map((option) => (
                <label
                  className={`flex min-h-12 cursor-pointer items-center justify-center rounded-lg border px-3 text-center text-sm font-bold transition-colors sm:text-base ${
                    state.transport === option.value
                      ? "border-[#694624] bg-[#694624] text-white"
                      : "border-[#cdbb9f] bg-white text-[#694624] hover:bg-[#fbf6ee]"
                  }`}
                  key={option.value}
                >
                  <input
                    checked={state.transport === option.value}
                    className="sr-only"
                    name="transport"
                    onChange={() => setState((current) => ({ ...current, transport: option.value }))}
                    type="radio"
                    value={option.value}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="text-base font-bold text-[#34302b]" htmlFor="airfare-total">
              5. 全家來回機票總價
            </label>
            <p className="mt-1 text-sm leading-6 text-[#756e65]">還不知道可以留白，結果會清楚標示未包含機票。</p>
            <div className="relative mt-3">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm font-semibold text-[#756e65]">NT$</span>
              <input
                className="min-h-12 w-full rounded-lg border border-[#cdbb9f] bg-white py-3 pl-14 pr-4 text-base text-[#34302b] outline-none transition focus:border-[#694624] focus:ring-2 focus:ring-[#d7c7af]"
                id="airfare-total"
                inputMode="numeric"
                min="0"
                onChange={(event) =>
                  setState((current) => ({ ...current, airfare: clampNumber(Number(event.target.value), 0, 1000000) }))
                }
                placeholder="例如 36000"
                type="number"
                value={state.airfare || ""}
              />
            </div>
          </div>
        </div>

        <button
          className="mt-8 min-h-12 w-full cursor-pointer rounded-lg bg-[#694624] px-5 py-3 text-base font-bold text-white transition-colors hover:bg-[#543719] focus:outline-none focus:ring-2 focus:ring-[#694624] focus:ring-offset-2"
          type="submit"
        >
          算出全家預算
        </button>
      </form>

      {hasCalculated ? (
        <div className="scroll-mt-24 pt-8" ref={resultRef} tabIndex={-1}>
          <section aria-live="polite" className="overflow-hidden rounded-xl border border-[#d5e2de] bg-[#f2f8f6]">
            <div className="border-b border-[#d5e2de] p-5 sm:p-7">
              <p className="text-sm font-semibold text-[#376a62]">初步規劃範圍</p>
              <p className="mt-2 text-3xl font-bold leading-tight text-[#244e47] sm:text-4xl">
                {formatTwd(estimate.low)}～{formatTwd(estimate.high)}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#4f5f5b]">
                約每人 {formatTwd(estimate.perPerson)}。{state.airfare ? "已包含你輸入的全家機票總價。" : "目前不包含來回機票。"}
              </p>
            </div>

            <div className="bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold text-[#34302b]">費用怎麼分配？</h2>
              <div className="mt-5 space-y-5">
                {estimate.breakdown.map((item) => (
                  <div key={item.key}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-[#34302b]">{item.label}</p>
                        <p className="mt-0.5 text-xs leading-5 text-[#756e65]">{item.note}</p>
                      </div>
                      <p className="shrink-0 font-semibold text-[#34302b]">{item.amount ? formatTwd(item.amount) : "未包含"}</p>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#f0e9de]" role="presentation">
                      <div
                        className="h-full rounded-full bg-[#9a6b43]"
                        style={{ width: item.amount ? `${Math.max(4, (item.amount / maxBreakdown) * 100)}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-lg border border-[#eadfce] bg-[#fffaf2] p-4 text-sm leading-7 text-[#5f594f]">
                這是前期規劃值，不是即時報價。旺季、連假、房型與孩子實際年齡都可能讓結果改變，建議用預算上緣做準備。
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  className="min-h-12 cursor-pointer rounded-lg border border-[#694624] bg-white px-4 py-3 text-sm font-bold text-[#694624] transition-colors hover:bg-[#fbf6ee] focus:outline-none focus:ring-2 focus:ring-[#694624] focus:ring-offset-2"
                  onClick={handleShare}
                  type="button"
                >
                  分享這份估算
                </button>
                <Link
                  className="flex min-h-12 items-center justify-center rounded-lg bg-[#694624] px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#543719] focus:outline-none focus:ring-2 focus:ring-[#694624] focus:ring-offset-2"
                  href="/okinawa-family-trip-booking"
                  onClick={() => sendEvent("budget_booking_click", { calculator: "okinawa_family" })}
                >
                  接著比較住宿與交通
                </Link>
              </div>
              {shareMessage ? (
                <p className="mt-3 text-center text-sm text-[#4f5f5b]" role="status">
                  {shareMessage}
                </p>
              ) : null}
            </div>
          </section>

          <section className="mt-6 rounded-xl border border-[#eadfce] bg-white p-5 sm:p-7">
            <p className="text-sm font-semibold text-[#9a6b43]">功能意見</p>
            <h2 className="mt-2 text-xl font-bold text-[#34302b]">想要下載報告、比較兩套行程嗎？</h2>
            <p className="mt-3 text-sm leading-7 text-[#5f594f]">
              進階版預計加入自訂單價、方案比較與下載報告，暫定單次 NT$149。現在不會收費，只記錄大家是否需要。
            </p>
            <button
              className="mt-5 min-h-11 cursor-pointer rounded-lg border border-[#cdbb9f] px-4 py-2 text-sm font-bold text-[#694624] transition-colors hover:bg-[#fbf6ee] focus:outline-none focus:ring-2 focus:ring-[#694624] focus:ring-offset-2 disabled:cursor-default disabled:bg-[#f6efe4]"
              disabled={interestRecorded}
              onClick={recordPremiumInterest}
              type="button"
            >
              {interestRecorded ? "已記錄，謝謝你" : "我會想試用進階版"}
            </button>
          </section>
        </div>
      ) : null}
    </div>
  );
}

type CounterProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

function Counter({ label, value, min, max, onDecrease, onIncrease }: CounterProps) {
  return (
    <div className="flex min-h-14 items-center justify-between rounded-lg border border-[#dfd2bf] bg-[#fffaf2] px-3">
      <span className="font-semibold text-[#34302b]">{label}</span>
      <div className="flex items-center gap-2">
        <button
          aria-label={`減少${label}人數`}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#cdbb9f] bg-white text-xl font-bold text-[#694624] transition-colors hover:bg-[#f6efe4] focus:outline-none focus:ring-2 focus:ring-[#694624] disabled:cursor-default disabled:opacity-40"
          disabled={value <= min}
          onClick={onDecrease}
          type="button"
        >
          −
        </button>
        <output aria-label={`${label}人數`} className="min-w-9 text-center text-lg font-bold text-[#34302b]">
          {value}
        </output>
        <button
          aria-label={`增加${label}人數`}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#cdbb9f] bg-white text-xl font-bold text-[#694624] transition-colors hover:bg-[#f6efe4] focus:outline-none focus:ring-2 focus:ring-[#694624] disabled:cursor-default disabled:opacity-40"
          disabled={value >= max}
          onClick={onIncrease}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}
