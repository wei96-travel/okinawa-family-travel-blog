import { NextResponse } from "next/server";

// Kit 的表單提交端點。表單編號與端點都會出現在 Kit 給的公開嵌入碼裡，不是密鑰，
// 所以直接寫在這裡；改用其他表單時換掉這個編號即可。
const KIT_FORM_ID = "9801697";
const KIT_ENDPOINT = `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`;

// 從瀏覽器直接打 Kit 會遇到跨網域限制，而且讀者會被帶離站外。
// 由伺服器代送，讀者留在原頁面，也不需要在前端放任何金鑰。
export async function POST(request: Request) {
  let email: unknown;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: "格式錯誤" }, { status: 400 });
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ error: "請輸入正確的 Email" }, { status: 400 });
  }

  try {
    const response = await fetch(KIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      },
      body: new URLSearchParams({ email_address: email.trim() }),
      // Kit 成功時會回 302 導向自家的感謝頁，這裡不需要跟著跳轉。
      redirect: "manual"
    });

    const ok = response.status >= 200 && response.status < 400;

    if (!ok) {
      return NextResponse.json({ error: "訂閱失敗，請稍後再試" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "訂閱失敗，請稍後再試" }, { status: 502 });
  }
}
