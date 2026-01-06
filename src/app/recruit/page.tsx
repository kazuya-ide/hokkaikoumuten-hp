

// =============================================
// src/app/recruit/page.tsx
// （あなたのコードを “横幅が動かない” ように調整）
// =============================================
import Image from "next/image";
import Link from "next/link";

type Role = {
  href: string;
  title: string;
  lead: string;
  image: string;
  panelClassName: string;
};

type SpecRow = {
  label: string;
  value: string | string[];
};

const workplacePoints = [
  "スタッフ一人一人が働きやすい環境づくり",
  "活躍の場が広がるキャリアアップ制度",
  "充実した福利厚生、研修制度",
] as const;

const roles: Role[] = [
  {
    href: "/recruit/technical",
    title: "技術職",
    lead:
      "職人としての技術・こだわりを深めながら､サービス業としての意識を高め､お客様にトータルでいかにご満足いただけるかを考え､実践しています｡",
    image: "/flow-04.avif",
    panelClassName: "bg-sky-500",
  },
  {
    href: "/recruit/sales",
    title: "営業職・リフォームプランナー",
    lead:
      "お客様の数だけあるご要望をしっかりヒアリングして､最適なプランを作成｡「ありがとう」と喜んでいただくことで､大きなやりがいを感じられます｡",
    image: "/recruit-sales.avif",
    panelClassName: "bg-teal-500",
  },
];

const recruitmentSpecs: SpecRow[] = [
  { label: "雇用形態", value: "正社員" },
  {
    label: "勤務地",
    value: [
      "北海工務店",
      "〒063ー0061 北海道札幌市西区西町北14丁目１－１５ホクシンビル３A",
    ],
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

function SpecValue({ value }: { value: SpecRow["value"] }) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-2">
        {value.map((v, i) => (
          <li key={`${v}-${i}`} className="leading-relaxed text-gray-800 break-words">
            {v}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="leading-relaxed text-gray-800 break-words">{value}</p>;
}

function JobRow({ role, reverse }: { role: Role; reverse: boolean }) {
  return (
    <section aria-label={role.title}>
      <div
        className={[
          "grid grid-cols-1 md:grid-cols-2",
          "rounded-3xl overflow-hidden",
          "bg-white shadow-sm border border-neutral-200",
          reverse ? "md:[&>div:first-child]:order-2" : "",
        ].join(" ")}
      >
        <div className="relative h-[300px] md:h-[420px]">
          <Image src={role.image} alt={role.title} fill className="object-cover" />
        </div>

        <div
          className={[
            "relative min-w-0",
            role.panelClassName,
            "text-white",
            "h-auto md:h-[420px]",
            "flex items-center justify-center",
            "px-6 py-10 md:px-14", // モバイルの横はみ出しを減らす
          ].join(" ")}
        >
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 18px)",
            }}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md text-center space-y-6 min-w-0">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide break-words">
              {role.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/95 break-words">
              {role.lead}
            </p>

            <div className="pt-4">
              <Link
                href={role.href}
                className="inline-flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 transition px-8 sm:px-10 py-3 font-semibold border border-white/30"
              >
                採用ページ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RecruitPage() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
          <Image src="/recruit-hero.avif" alt="採用情報" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="w-full max-w-[680px] bg-black/40 backdrop-blur-sm px-6 sm:px-10 py-10 md:px-14 md:py-12 text-center">
              <h1
                className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold break-words tracking-[0.18em] sm:tracking-widest"
                style={{ textShadow: "0 6px 18px rgba(0,0,0,0.35)" }}
              >
                RECRUIT
              </h1>
              <p className="mt-4 text-white/95 text-lg sm:text-xl md:text-2xl font-semibold">
                採用情報
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKPLACE */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #0cccb3 0, #0cccb3 1px, transparent 1px, transparent 18px)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20 min-w-0">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-[#0cccb3] break-words">
              WORKPLACE
            </h2>
            <span className="h-[3px] flex-1 bg-[#0cccb3] min-w-0" />
          </div>

          <ul className="mt-8 space-y-4 text-[#0cccb3] font-semibold">
            {workplacePoints.map((p) => (
              <li key={p} className="flex gap-3 items-start min-w-0">
                <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#0cccb3] shrink-0" />
                <span className="leading-relaxed break-words">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* JOBS */}
      <section className="bg-slate-50/60 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-10 md:space-y-14">
          <JobRow role={roles[0]} reverse={false} />
          <JobRow role={roles[1]} reverse />
        </div>
      </section>

      {/* 募集要項 */}
      <section id="recruitment" className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <header className="py-16 sm:py-24 text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold break-words tracking-[0.18em] sm:tracking-widest text-sky-500">
            RECRUITMENT
          </div>
          <div className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-sky-500">
            募集要項
          </div>
        </header>

        <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
          <div className="grid md:grid-cols-3 bg-gray-50 border-b border-neutral-200">
            <div className="p-4 font-semibold text-gray-700">項目</div>
            <div className="p-4 font-semibold text-gray-700 md:col-span-2">内容</div>
          </div>

          {recruitmentSpecs.map((row) => (
            <div key={row.label} className="grid md:grid-cols-3 border-b last:border-b-0 border-neutral-200">
              <div className="p-4 bg-white font-semibold text-gray-800 break-words">
                {row.label}
              </div>
              <div className="p-4 bg-white md:col-span-2 min-w-0">
                <SpecValue value={row.value} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
