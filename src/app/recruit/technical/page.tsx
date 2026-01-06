// src/app/recruit/technical/page.tsx
import Image from "next/image";
import Link from "next/link";

type SpecRow = { label: string; value: string | string[] };

const specs: SpecRow[] = [
  { label: "雇用形態", value: "正社員" },
  {
    label: "勤務地",
    value: ["北海工務店", "〒063ー0061 北海道札幌市西区西町北14丁目1-15ホクシンビル3A"],
  },
  { label: "勤務時間", value: "8:00～18:00（休憩2時間）" },
  {
    label: "給与",
    value: [
      "未経験者初任給：月給230,000～",
      "実務経験社初任給：月給280,000～350,000円",
      "※経験・能力に応じ優遇します",
      "※固定残業分、45～55時間分、75,000～94,000円分含、超過分は法令に基づき追加支給",
      "※勤務時間は8:00時〜18:00時(内休憩2時間)のため、8時間勤務となり残業は発生してませんが、技術職は週休1日のため、週間法定労働が40時間と定められてることから、足りない時間分として固定で時間外手当を支給してます。",
      "そのため、実質的な残業は、毎日でみるとほとんどなく、毎週月曜日の全体会議の際に1時間〜1時間半程度発生してる程度です。",
      "※試用期間6か月",
    ],
  },
  { label: "賞与・昇給", value: "昇給有、賞与年2回" },
  {
    label: "休日休暇",
    value: ["日曜、祝日", "年末年始・夏季·GW、有給休暇、慶弔休暇"],
  },
  {
    label: "待遇・福利厚生・社内制度",
    value: ["各種社会保険完備", "交通費全額支給", "社用車貸与あり", "試用期間6カ月／同条件"],
  },
];

function ArrowItem({ text }: { text: string }) {
  return (
    <div className="flex gap-4 items-start min-w-0">
      <span className="mt-1 text-2xl leading-none shrink-0">▶</span>
      <p className="leading-relaxed break-words">{text}</p>
    </div>
  );
}

function SpecValue({ value }: { value: SpecRow["value"] }) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-2">
        {value.map((v, i) => (
          <li key={`${v}-${i}`} className="leading-relaxed break-words">
            {v}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="leading-relaxed break-words">{value}</p>;
}

export default function RecruitTechnicalPage() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      {/* HERO (スマホ: 画像 → TECHNICAL → …) */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* 画像：スマホで先頭 */}
          <div className="relative h-[320px] md:h-[560px] order-1 md:order-2">
            <Image
              src="/flow-04.avif"
              alt="技術職"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* テキスト：スマホで後 */}
          <div className="bg-[#1e3a9a] text-white px-6 md:px-14 py-12 md:py-20 flex items-center order-2 md:order-1 min-w-0">
            <div className="w-full min-w-0">
              <div className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] break-words tracking-[0.12em] sm:tracking-[0.16em] md:tracking-widest">
                TECHNICAL
                <br />
                WORKER
              </div>

              <p className="mt-8 text-sm md:text-base leading-relaxed text-white/95 break-words">
                自分のしたいことを仕事にする。
                <br />
                目標を作り達成するまでの道をサポートします！
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/recruit" className="underline underline-offset-4 text-white/90">
                  ← 採用情報へ戻る
                </Link>
                <Link
                  href="#recruitment"
                  className="inline-flex items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 transition px-6 sm:px-8 py-3 font-semibold border border-white/25"
                >
                  募集要項を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 悩み/キャリア block（スマホ: 画像 → 現場の〜） */}
      <section className="bg-[#1e3a9a] text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* image */}
          <div className="relative min-h-[360px] md:min-h-[820px] order-1">
            <Image
              src="/recruit-overhead.avif"
              alt="職場イメージ"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* content */}
          <div className="px-6 md:px-14 py-12 md:py-20 space-y-10 order-2 min-w-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-relaxed break-words">
              現場、こんな悩みを抱えている方は
              <br />
              当社で一緒に働きませんか？
            </h2>

            <div className="border-2 border-white/80 p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 font-semibold min-w-0">
                <ArrowItem text="作業範囲が狭く、今後のステップアップが期待できない" />
                <ArrowItem text="キャリアアップの制度がなく、同じ業務の繰り返しで将来が不安" />
                <ArrowItem text="自分の技術力を発揮する場所がほしい" />
                <ArrowItem text="残業時間が長く土日も出勤で仕事以外の時間をとることができない" />
              </div>
            </div>

            <div className="bg-black/75 p-8 sm:p-10 md:p-12 min-w-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold break-words">
                当社のキャリアアップシステム
              </h3>

              <div className="mt-8 space-y-6 text-white/95 font-semibold">
                <div className="border-t border-white/40 pt-6 break-words">
                  ・基礎的な技術力から臨機応変な対応力まで技術を効率よく伸ばせる
                </div>
                <div className="border-t border-white/40 pt-6 break-words">
                  ・充実した研修制度で成長をしっかりサポート
                </div>
                <div className="border-t border-white/40 pt-6 break-words">
                  ・現場共有とレビューで改善が早い
                </div>
                <div className="border-t border-white/40 pt-6 border-b border-white/40 pb-6 break-words">
                  ・評価基準が明確で、努力がキャリアに反映される
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECRUITMENT */}
      <section id="recruitment" className="bg-white">
        <header className="py-16 sm:py-24 text-center px-6">
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sky-500 break-words tracking-[0.12em] sm:tracking-[0.16em] md:tracking-widest">
            RECRUITMENT
          </div>
          <div className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-sky-500 break-words">
            募集要項（技術職）
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <div className="grid md:grid-cols-3 bg-gray-50 border-b border-neutral-200">
              <div className="p-4 font-semibold text-gray-700">項目</div>
              <div className="p-4 font-semibold text-gray-700 md:col-span-2">内容</div>
            </div>

            {specs.map((row) => (
              <div key={row.label} className="grid md:grid-cols-3 border-b last:border-b-0 border-neutral-200">
                <div className="p-4 bg-white font-semibold text-gray-800 break-words">{row.label}</div>
                <div className="p-4 bg-white md:col-span-2 text-gray-800 min-w-0">
                  <SpecValue value={row.value} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-neutral-200 bg-white hover:opacity-80 transition"
            >
              応募・お問い合わせ
            </Link>
            <Link href="/recruit" className="underline underline-offset-4">
              ← 採用情報へ戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
