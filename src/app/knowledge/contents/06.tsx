// src/app/knowledge/contents/06.tsx
import { ArticleSection, Callout, PriceTable, type PriceRow } from "../_components/article";

export default function C06() {
  const costRows: PriceRow[] = [
    {
      item: "メンテナンス費用（目安）",
      unit: "一式",
      price: "30〜50万円",
      note: "大掛かりな補修が少ない前提。状態・範囲で変動。",
    },
  ];

  return (
    <article className="space-y-14">
      <header className="space-y-3">
        <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          タイル
        </div>
      </header>

      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>寒冷地では「水に強く耐久性が高いタイル」を選ぶのが重要。</li>
          <li>タイルは高温で焼き固めた素材で、傷や変色に強く耐久性が高い。</li>
          <li>耐用年数は素材・施工方法によるが、20年または30年以上が目安。</li>
          <li>10年に一度は専門業者による点検・メンテナンスがおすすめ。</li>
          <li>大掛かりなメンテは少なく、ランニングコストを抑えたい人にも向く。</li>
        </ul>
      </Callout>

      <ArticleSection title="寒冷地におすすめな外壁タイルは？（概要）">
        <p className="leading-relaxed">
          外壁材にはさまざまな種類がありますが、高級感のある見た目で人気なのが「タイル」による外壁リフォーム。
        </p>
        <p className="leading-relaxed">
          しかし、タイルには特徴や耐久性が異なる多彩なタイプがあります。寒冷地にお住まいの場合は、
          水に強く耐久性の高い素材のタイルを選ぶことが大切です。
        </p>
        <p className="leading-relaxed">
          そこで今回は、寒冷地におすすめな外壁タイルについて。外壁タイルの種類や耐用年数、
          メンテナンスなどもあわせてご紹介します。
        </p>
      </ArticleSection>

      <ArticleSection title="外壁タイルの耐用年数を知ろう">
        <p className="leading-relaxed">
          タイルにはさまざまな種類がありますが、どのタイルも高温で焼き固めた素材のため非常に固く、
          傷や変色に強い素材です。
        </p>
        <p className="leading-relaxed">
          ほかの外壁材にくらべても耐久性が高い素材であるタイルは、素材や施工方法によっても異なりますが、
          耐用年数は20年もしくは30年以上となります。
        </p>
        <p className="leading-relaxed">
          丈夫で長持ちする外壁タイルですが、工法によっては目地の劣化や外壁の汚れが発生することもありますので、
          10年に一度は専門業者によるメンテナンスを行うのがおすすめです。
        </p>
        <p className="leading-relaxed">
          ただし、耐久性のある外壁タイルは大きなダメージを受けることはほぼないので、
          メンテナンス時のコスト（補修、張り替え、塗装など）は、ほかの外壁材に比べてかからないでしょう。
        </p>
      </ArticleSection>

      <ArticleSection title="外壁タイルのメンテナンス方法や費用の目安は？">
        <Callout title="主なメンテナンス内容">
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold">タイルの剥がれや浮きなどの部分補修：</span>
              タイルの接着が悪くタイルが浮いてしまったり剥がれてしまったりした場合は、タイルの部分補修を行います。
            </li>
            <li>
              <span className="font-semibold">目地コーキングの打ち直し：</span>
              外壁タイルの目地にコーキングを使用している場合は、劣化してしまうため、定期的にコーキングを打ち直す必要があります。
            </li>
            <li>
              <span className="font-semibold">外壁タイルの洗浄：</span>
              タイルに汚れが付着してしまった場合は、タイルの洗浄を行います。
            </li>
          </ul>
        </Callout>

        <p className="leading-relaxed">
          このように、耐久性に優れている外壁タイルは、大掛かりなメンテナンスはほぼ必要ありません。
        </p>
        <p className="leading-relaxed">
          そのためメンテナンス費用の目安も30〜50万円ほどなので、ランニングコストを抑えたい方にもおすすめです。
        </p>

        <Callout title="費用目安（まとめ）">
          <PriceTable rows={costRows} caption="※ 目安。現場状況・範囲・劣化状態で変動します。" />
        </Callout>
      </ArticleSection>

      <ArticleSection title="寒冷地では雪や寒さに強い外壁タイルを選びましょう！">
        <p className="leading-relaxed">
          外壁材にはさまざまな種類がありますが、高級感のある見た目で人気なのが「タイル」による外壁リフォーム。
        </p>
        <p className="leading-relaxed">
          外壁タイルには寒冷地の使用に適した「磁器質タイル」や「せっ器質タイル」、
          変色にしくい「陶器質タイル」など、特徴や耐久性が異なる多彩なタイプがあります。
        </p>
        <p className="leading-relaxed">
          ほかの外壁材にくらべて耐久性が高い素材であるタイルは、素材や施工方法によっても異なりますが、
          耐用年数は20年もしくは30年以上。
          大掛かりなメンテナンスは必要ないので、ランニングコストを抑えたい方におすすめの外壁材です。
        </p>
      </ArticleSection>
    </article>
  );
}
