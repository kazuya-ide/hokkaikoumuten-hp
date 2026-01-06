// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 北海工務店",
  description:
    "札幌Builder（当サイト）のプライバシーポリシーです。個人情報の取得・利用目的・管理・Cookie・アクセス解析などについて記載しています。",
};

type Section = {
  title: string;
  body: Array<
    | { kind: "p"; text: string }
    | { kind: "ul"; items: string[] }
  >;
};

const sections: Section[] = [
  {
    title: "【1. 個人情報の定義】",
    body: [
      {
        kind: "p",
        text:
          "本プライバシーポリシーにおける個人情報とは、氏名、住所、電話番号、メールアドレス等、特定の個人を識別できる情報を指します。",
      },
    ],
  },
  {
    title: "【2. 個人情報の取得方法】",
    body: [
      {
        kind: "p",
        text:
          "当サイトでは、お問い合わせフォームやメールでのお問い合わせ等を通じて、お客様の個人情報をご提供いただく場合があります。",
      },
    ],
  },
  {
    title: "【3. 個人情報の利用目的】",
    body: [
      { kind: "p", text: "取得した個人情報は、以下の目的の範囲内で利用いたします。" },
      {
        kind: "ul",
        items: [
          "お問い合わせへの対応",
          "サービスや業務内容に関するご連絡",
          "必要に応じた資料送付",
          "その他、上記利用目的に付随する業務",
        ],
      },
    ],
  },
  {
    title: "【4. 個人情報の第三者提供】",
    body: [
      {
        kind: "p",
        text:
          "当サイトは、法令に基づく場合を除き、取得した個人情報を本人の同意なく第三者に提供することはありません。",
      },
    ],
  },
  {
    title: "【5. 個人情報の管理】",
    body: [
      {
        kind: "p",
        text:
          "当サイトは、個人情報の漏えい、滅失、毀損、不正アクセス等を防止するため、必要かつ適切な安全管理措置を講じます。",
      },
    ],
  },
  {
    title: "【6. 個人情報の開示・訂正・削除】",
    body: [
      {
        kind: "p",
        text:
          "ご本人から自己の個人情報について、開示・訂正・削除等の請求があった場合には、法令に従い速やかに対応いたします。",
      },
    ],
  },
  {
    title: "【7. Cookie（クッキー）について】",
    body: [
      {
        kind: "p",
        text:
          "当サイトでは、利用状況の把握や利便性向上のため、Cookieを使用する場合があります。",
      },
      {
        kind: "p",
        text:
          "Cookieにより収集される情報には、個人を特定できる情報は含まれません。",
      },
      {
        kind: "p",
        text:
          "なお、ブラウザの設定によりCookieの使用を拒否することも可能ですが、その場合一部機能が正常に動作しないことがあります。",
      },
    ],
  },
  {
    title: "【8. アクセス解析ツールについて】",
    body: [
      {
        kind: "p",
        text:
          "当サイトでは、サイト改善・サービス向上の目的で、Google Analytics等のアクセス解析ツールを利用する場合があります。",
      },
      {
        kind: "p",
        text:
          "これらのツールはCookieを利用してトラフィックデータを収集しますが、個人を特定するものではありません。",
      },
    ],
  },
  {
    title: "【9. プライバシーポリシーの変更】",
    body: [
      {
        kind: "p",
        text:
          "本ポリシーの内容は、法令の改正や運営方針の変更等により、予告なく改定されることがあります。",
      },
      {
        kind: "p",
        text: "最新の内容は当サイト上にて常に開示いたします。",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <section className="px-6">
        <header className="py-20 md:py-24 text-center">
          <div className="text-4xl md:text-6xl font-extrabold tracking-widest text-sky-500">
            PRIVACY POLICY
          </div>
          <div className="mt-4 text-xl md:text-3xl font-bold text-sky-500">
            プライバシーポリシー
          </div>
        </header>
      </section>

      {/* Body */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-10">
            <p className="leading-relaxed text-gray-800">
              札幌Builder（以下「当サイト」）は、当サイトをご利用いただくお客様の個人情報の重要性を認識し、
              個人情報保護に関する法令を遵守するとともに、以下の方針に基づき適切な取り扱いと保護に努めます。
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((s) => (
              <section
                key={s.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-10"
              >
                <h2 className="text-lg md:text-xl font-bold">{s.title}</h2>

                <div className="mt-4 space-y-3">
                  {s.body.map((b, idx) => {
                    if (b.kind === "p") {
                      return (
                        <p key={idx} className="leading-relaxed text-gray-800">
                          {b.text}
                        </p>
                      );
                    }
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-800">
                        {b.items.map((item) => (
                          <li key={item} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <footer className="pt-6 text-right text-gray-700 space-y-2">
            <div>制定日：2025年12月28日</div>
            <div className="font-semibold">北海工務店</div>
          </footer>
        </div>
      </section>
    </main>
  );
}
