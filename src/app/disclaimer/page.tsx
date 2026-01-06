// src/app/disclaimer/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免責事項 | 北海工務店",
  description:
    "当サイトにおける免責事項（掲載情報・施工情報・損害責任・外部リンク・著作権・内容変更）について記載しています。",
};

type Section = {
  title: string;
  body: Array<{ kind: "p"; text: string } | { kind: "ul"; items: string[] }>;
};

const sections: Section[] = [
  {
    title: "【1. 掲載情報について】",
    body: [
      {
        kind: "p",
        text:
          "当サイトに掲載している情報は、正確かつ最新の内容を提供するよう努めておりますが、その正確性・完全性・安全性を保証するものではありません。",
      },
    ],
  },
  {
    title: "【2. サービス・施工情報について】",
    body: [
      {
        kind: "p",
        text:
          "当サイトに掲載されている施工事例、工事内容、価格、工期、その他の情報はあくまで参考情報であり、実際の内容を保証するものではありません。",
      },
      {
        kind: "p",
        text: "具体的な工事内容や条件については、必ず個別にご相談ください。",
      },
    ],
  },
  {
    title: "【3. 損害等の責任について】",
    body: [
      {
        kind: "p",
        text:
          "当サイトの情報を利用したことにより生じたいかなる損害についても、当サイトは一切の責任を負いません。",
      },
    ],
  },
  {
    title: "【4. 外部リンクについて】",
    body: [
      {
        kind: "p",
        text:
          "当サイトには外部サイトへのリンクが含まれる場合がありますが、リンク先の内容やサービスについて当サイトは一切の責任を負いません。",
      },
    ],
  },
  {
    title: "【5. 著作権について】",
    body: [
      {
        kind: "p",
        text:
          "当サイトに掲載されている文章、画像、デザイン、その他のコンテンツの著作権は、当サイトまたは正当な権利者に帰属します。",
      },
      { kind: "p", text: "無断転載・無断使用を禁止します。" },
    ],
  },
  {
    title: "【6. 内容の変更・削除について】",
    body: [
      {
        kind: "p",
        text: "当サイトに掲載されている内容は、予告なく変更または削除される場合があります。",
      },
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <section className="px-6">
        <header className="py-20 md:py-24 text-center">
          <div className="text-4xl md:text-6xl font-extrabold tracking-widest text-sky-500">
            DISCLAIMER
          </div>
          <div className="mt-4 text-xl md:text-3xl font-bold text-sky-500">
            免責事項
          </div>
        </header>
      </section>

      {/* Body */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
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
                    <ul
                      key={idx}
                      className="list-disc pl-6 space-y-2 text-gray-800"
                    >
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

          <div className="text-right text-gray-700 pt-6">以上</div>
        </div>
      </section>
    </main>
  );
}
