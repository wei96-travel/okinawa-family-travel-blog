import Link from "next/link";

type AffiliateDisclosureNoticeProps = {
  scope: "article" | "page";
};

export function AffiliateDisclosureNotice({ scope }: AffiliateDisclosureNoticeProps) {
  return (
    <p className="text-sm leading-7 text-[#756e65]">
      {scope === "article" ? "本文" : "本頁"}含合作連結
      <span aria-hidden="true">｜</span>
      <Link
        className="font-semibold text-[#694624] underline decoration-[#d7c7af] underline-offset-4"
        href="/affiliate-disclosure"
      >
        合作說明
      </Link>
    </p>
  );
}
