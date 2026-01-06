import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* =================================================
          企業理念（背景画像＋大見出し）
      ================================================= */}
      <section className="relative flex h-[70vh] items-center justify-center">
        <Image
          src="/about-philosophy.jpg"
          alt="企業理念"
          fill
          priority
          className="object-cover"
        />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold tracking-[0.3em] text-white">
          企業理念
        </h1>
      </section>

      {/* =================================================
          理念5項目（左：キーワード / 右：説明文）
      ================================================= */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-6xl space-y-20">
          {[
            {
              title: "信頼",
              text: "札幌市の皆様に貢献し、孫の代まで繋がる住まいづくりを目指します。",
            },
            {
              title: "安全",
              text: "衛生・安全面を整え、自然災害にも耐える安心の住まいと、過ごしやすい環境づくりをサポートします。",
            },
            {
              title: "技術",
              text: "職人の技に磨きをかけ、後世まで伝わる匠の仕事を大切にします。",
            },
            {
              title: "規律",
              text: "法令遵守のもと、企業人として・社会人として、モラルとマナーを守り誠実な言動に徹します。",
            },
            {
              title: "夢",
              text: "子供たちが素直に夢を語れる社会づくりに貢献します。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 items-start"
            >
              <h3 className="text-4xl font-bold text-sky-500 tracking-wider">
                {item.title}
              </h3>
              <p className="text-lg leading-loose text-gray-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================
          ABOUT US（階段画像＋帯）
      ================================================= */}
      <section className="relative flex h-[80vh] items-center justify-center px-6">
        <Image
          src="/about-stairs.avif"
          alt="ABOUT US"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-3xl text-center text-white">
          <p className="mb-3 text-sm tracking-[0.3em]">ABOUT&nbsp;US</p>
          <h2 className="mb-10 text-4xl font-bold">弊社について</h2>
          <p className="text-base leading-loose">
            私たちは札幌市を拠点に、住まいに関わるあらゆる工事を通じて、
            人々の暮らしと安全を支えています。
            <br /><br />
            目先の工事ではなく、
            長く安心して住み続けられる環境づくりを、
            何よりも大切にしています。
          </p>
        </div>
      </section>

      {/* =================================================
          会社概要
      ================================================= */}
      <section className="bg-white py-32 px-6">
        <div className="mx-auto max-w-5xl">

          <div className="mb-20 text-center">
            <div className="inline-block bg-[#0cccb3] px-12 py-4 text-xl font-bold text-white">
              会社概要
            </div>
          </div>

          <div className="space-y-14">

            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 border-t border-gray-300 pt-10">
              <div className="font-bold tracking-widest">運営会社</div>
              <div>合同会社LIT</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 border-t border-gray-300 pt-10">
              <div className="font-bold tracking-widest">電話</div>
              <div>070-2039-0011</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 border-t border-gray-300 pt-10">
              <div className="font-bold tracking-widest">本社所在地</div>
              <div className="leading-loose">
                〒063-0061<br />
                北海道札幌市西区西町北14丁目<br />
                1-15 ホクシンビル 3F
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 border-t border-b border-gray-300 py-10">
              <div className="font-bold tracking-widest">事業内容</div>
              <ul className="space-y-2 leading-loose">
                <li>解体工事</li>
                <li>各種テナント工事</li>
                <li>各種リフォーム工事</li>
                <li>外構エクステリア工事</li>
                <li>その他工事</li>
                <li>除雪・排雪、住宅の屋根雪下ろし</li>
                <li>緊急対応</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
