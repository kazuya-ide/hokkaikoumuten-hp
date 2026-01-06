import Image from "next/image";

const steps = [
  {
    no: "1.",
    title: "お問い合わせ・ご相談",
    text: `リフォームをお考えの際は、まずはお電話かお問い合わせフォームよりご連絡ください。
ご連絡いただいた後、当社スタッフがお客様のご要望やお悩みをお伺いします。`,
    image: "/flow-01.jpg",
  },
  {
    no: "2.",
    title: "お打ち合わせ・現地調査",
    text: `お住いの問題点やご要望に合わせ、リフォームのプランニングを行います。
その後、実際にリフォームする現場を調査・点検・チェックいたします。
専門スタッフが丁寧に調査いたしますのでご安心ください。`,
    image: "/flow-02.jpg",
  },
  {
    no: "3.",
    title: "お見積もり",
    text: `全体計画がほぼ終了した時点で、リフォームのお見積りを作成します。
ご検討いただき、内容にご納得いただけましたら次のステップへ進みます。`,
    image: "/flow-03.jpg",
  },
  {
    no: "4.",
    title: "着工",
    text: `ご希望によりリフォーム工事中の仮住まいのご手配等も承ります。
ご近所への気配りも徹底し、安心・安全な工事を行います。`,
    image: "/flow-04.avif",
  },
  {
    no: "5.",
    title: "お引き渡し",
    text: `工事完了後、お客様立会いのもと最終確認を行います。
アフターフォローも万全。万が一の不具合がございましたら迅速に対応いたします。`,
    image: "/flow-06.jpg",
  },
];

export default function FlowPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* =========================
          タイトル
      ========================= */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="flex items-center gap-6 text-5xl font-bold text-[#0cccb3]">
            Flow
            <span className="h-\[3px] w-full bg-[#0cccb3]" />
          </h1>
          <p className="mt-4 text-[#0cccb3]">
            施工の流れについて
          </p>
        </div>
      </section>

      {/* =========================
          フロー本体
      ========================= */}
      <section className="pb-32 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16">

          {steps.map((step, index) => {
            const isLast = index === 4;

            return (
              <div
                key={step.no}
                className={`relative ${isLast ? "md:col-span-2" : ""}`}
              >
                {/* 画像 */}
                <div
                  className={`relative w-full ${
                    isLast ? "h-[520px]" : "h-[420px]"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* テキストボックス */}
                <div
                  className={`
                    absolute bottom-0
                    ${isLast ? "left-1/2 -translate-x-1/2" : index % 2 === 0 ? "left-0" : "right-0"}
                    bg-white/90 p-10
                    ${isLast ? "w-[70%] text-center" : "w-[85%]"}
                  `}
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-blue-600">
                      {step.no}
                    </span>
                    <h2 className="text-2xl font-bold">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

    </main>
  );
}
