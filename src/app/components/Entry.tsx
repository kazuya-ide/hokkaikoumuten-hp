export default function Entry() {
  return (
    <section className="bg-[#0cccb3] py-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* 左側テキスト */}
        <div className="max-w-xl text-white">
          <h2 className="mb-2 text-5xl font-bold tracking-wide">
            Entry
          </h2>

          <p className="mb-6 text-sm font-semibold tracking-widest">
            自分を信じて突き進め
          </p>

          <p className="text-sm leading-relaxed opacity-90">
            北海工務店では、リフォーム事業だけでなく様々な新しいことに挑戦を続けています。<br />
            自分の可能性を発見し、社会で活躍をしたい。<br />
            そのような方々からのご応募をお待ちしております。
          </p>
        </div>

        {/* 右側ボタン */}
        <div>
          <a
            href="/recruit"
            className="inline-block border border-white px-10 py-4 text-white transition hover:bg-white hover:text-[#0cccb3]"
          >
            採用情報
          </a>
        </div>

      </div>
    </section>
  );
}
