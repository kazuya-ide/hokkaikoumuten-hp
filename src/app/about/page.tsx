import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* =================================================
          HERO：私たちのリフォームに対するこだわり
      ================================================= */}
      <section className="relative flex h-[70vh] items-center justify-center px-6">
        <Image
          src="/philosophy-hero.avif"
          alt="私たちのリフォームに対するこだわり"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-3xl text-center text-white">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight">
            私たちの<br />
            リフォームに対するこだわり
          </h1>
         
        </div>
      </section>

      {/* =================================================
          想い：建築業である前にサービス業
      ================================================= */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-3xl font-bold">
           リフォームで、新たな快適な暮らしを
          </h2>

          <p className="text-lg leading-loose">
             「建築業である前にサービス業」<br/>
            私たちは、この想いを事業展開の軸にしながら、<br />
            お客様とのよりよい関係づくりに力を注いでいます。
            <br /><br />
            高い技術力と低価格の両立に挑み、<br />
            わかりやすい説明に強くこだわるのは、<br />
            お客様に安心感と満足感をお届けするため。
            <br /><br />
            サービス業として、人として、どうありたいか。<br />
            その視点で心を尽くし、日々の事業に向き合っています。
          </p>
        </div>
      </section>
{/* =================================================
    Vision：お客さまの満足が第一（交互レイアウト）
================================================= */}
<section className="bg-gray-50 py-32 px-6">
  <div className="mx-auto max-w-6xl space-y-32">

    {/* 見出し */}
    <div className="text-center">
      <p className="mb-4 text-sm tracking-[0.3em] text-gray-500">
        Vision
      </p>
      <h2 className="text-4xl font-bold">
        お客さまの満足が第一
      </h2>
    </div>

    {/* ===== 01 ===== */}
    <div className="flex flex-col md:flex-row items-center gap-16">
      {/* テキスト */}
      <div className="md:w-1/2">
        <div className="mb-6 text-5xl font-bold text-sky-500">01</div>
        <h3 className="mb-4 text-2xl font-bold">
          あなたらしく
        </h3>
        <p className="mb-4 text-lg font-medium">
          あなたのご自宅を、より快適に、より安全に、上質に
        </p>
        <p className="leading-loose">
          快適な暮らしの追求。<br />
          お客様一人ひとりの LIFE STYLE を大切にし、<br />
          自分らしさが溢れ出る空間づくりを目指します。
        </p>
      </div>

      {/* 画像 */}
      <div className="md:w-1/2">
        <Image
          src="/vision-01.jpg"
          alt="お客様との打ち合わせ"
          width={800}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>
    </div>

    {/* ===== 02（左右反転）===== */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-16">
      {/* テキスト */}
      <div className="md:w-1/2">
        <div className="mb-6 text-5xl font-bold text-sky-500">02</div>
        <h3 className="mb-4 text-2xl font-bold">
          安全管理の大前提、来世へと繋げる住宅
        </h3>
        <p className="leading-loose">
          悲しいですが物騒な事件も増えてきた昨今。<br />
          世界各地では今も戦争が行われています。
          <br /><br />
          そして自然災害は時に我々に牙を剥きます。<br />
          想像し得る様々な脅威からご家族を守るため、<br />
          専門家が数字を根拠にした提案を行います。
        </p>
      </div>

      {/* 画像 */}
      <div className="md:w-1/2">
        <Image
          src="/vision-02.jpg"
          alt="安全管理と施工現場"
          width={800}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>
    </div>

    {/* ===== 03 ===== */}
    <div className="flex flex-col md:flex-row items-center gap-16">
      {/* テキスト */}
      <div className="md:w-1/2">
        <div className="mb-6 text-5xl font-bold text-sky-500">03</div>
        <h3 className="mb-4 text-2xl font-bold">
          ワンランク上の暮らし
        </h3>
        <p className="leading-loose">
          心躍る生活を送るために。<br />
          お客様の一日一日に、豊かさをご提供します。
          <br /><br />
          やるからには徹底的に。<br />
          妥協を許さず、納得のいくまで向き合います。
        </p>
      </div>

      {/* 画像 */}
      <div className="md:w-1/2">
        <Image
          src="/vision-03.jpg"
          alt="上質な暮らしのイメージ"
          width={800}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>
    </div>

  </div>
</section>

    </main>
  );
}
