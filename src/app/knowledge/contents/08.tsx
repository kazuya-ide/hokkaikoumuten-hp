// src/app/knowledge/contents/08.tsx
import { ArticleSection, Callout, PriceTable, type PriceRow } from "../_components/article";

export default function C08() {
  const costRows: PriceRow[] = [
    {
      item: "シリコン塗料（3回塗り：下塗り/中塗り/上塗り）",
      unit: "1㎡",
      price: "2,200〜3,500円",
      note: "水性/油性で差。油性の方がやや高め。",
    },
    {
      item: "アクリル塗料",
      unit: "1㎡",
      price: "1,000〜1,600円",
      note: "比較的安価",
    },
    {
      item: "ウレタン塗料",
      unit: "1㎡",
      price: "1,700〜2,200円",
      note: "比較的安価",
    },
    {
      item: "フッ素系塗料",
      unit: "1㎡",
      price: "3,500〜4,800円",
      note: "シリコンより高め",
    },
    {
      item: "高性能（セラミックシリコン等）",
      unit: "1㎡",
      price: "一般的なシリコンの約2倍になることも",
      note: "製品グレードによる",
    },
  ];

  return (
    <article className="space-y-14">
      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>シリコン塗料は「耐用年数と価格のバランス」が良くコスパが高い。</li>
          <li>タイプは主に「1液型」「2液型」。2液は混合が必要で技術が要るが、持ちがよく素材適用も広い。</li>
          <li>メリット：ツヤ/汚れにくい/撥水/耐熱/耐UV。</li>
          <li>デメリット：ひび割れしやすい/アクリル・ウレタンより高い/フッ素より短命/重ね塗り不向き/技術が必要。</li>
          <li>寒冷地などでは塗装だけが最適でない場合もあり、カバー工法や張り替えも検討。</li>
        </ul>
      </Callout>

      <ArticleSection title="シリコン塗料のタイプ（1液型・2液型）">
        <p className="leading-relaxed">
          すべての素材に対応しているわけではなく、塗装できない素材もあります。
        </p>

        <div className="space-y-8">
          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">2液型</h3>
            <p className="leading-relaxed">
              塗料液（主剤）と硬化剤の2缶で構成。
            </p>
            <p className="leading-relaxed">
              正確な比率で2缶を混ぜ合わせる必要があるなど、塗装には知識の技術が必要です。
              ただし、1液型にくらべて持ちがよく、さまざまな素材に塗装できます。
            </p>
            <p className="leading-relaxed">
              さまざまなメーカーがシリコン塗料を出していますが、
              例えば「水性1液型」「溶液2液型」というようにタイプが表示されています。
            </p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="外壁塗装のシリコン塗料のメリット・デメリット">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">メリット</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>ツヤ感があり仕上がりがきれい</li>
              <li>汚れがつきにくい</li>
              <li>撥水性がある</li>
              <li>熱に強い</li>
              <li>紫外線による劣化への抵抗力が高い</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">デメリット</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>ひび割れが起こりやすい</li>
              <li>アクリル塗料とウレタン塗料にくらべて施工費用が高い</li>
              <li>フッ素塗料にくらべて長持ちしない</li>
              <li>重ね塗りに向かない</li>
              <li>塗装には知識と技術が必要</li>
            </ul>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="外壁塗装のシリコン塗料の費用相場は？">
        <Callout title="費用相場（塗料別）">
          <PriceTable rows={costRows} caption="※ 目安。仕様・現場条件・塗料グレードで変動します。" />
        </Callout>

        <p className="leading-relaxed">
          シリコン塗料を用いて外壁塗装を行う場合の費用は、1㎡あたりの単価で見ると
          2,200～3,500円/㎡程度（下塗り・中塗り・上塗りの3回塗りの場合）が目安です。
          水性・油性で見ると、油性のほうが少し高くなります。
        </p>

        <p className="leading-relaxed">
          また、高性能なセラミックシリコンなどを使ったグレードの高い塗料であれば、
          一般的なシリコン塗料によりも約2倍の価格になることもあります。
        </p>

        <p className="leading-relaxed">
          シリコン塗料はアクリル塗料やウレタン塗料にくらべて施工価格は高いですが、
          耐用年数が長いため、1㎡あたりの施工単価を耐用年数で割るとコストパフォーマンスは高いでしょう。
        </p>

        <Callout title="費用に含まれないことが多い項目">
          <p className="leading-relaxed text-gray-700">
            塗料代のほかに足場代・下地処理代・業者諸経費などが別途かかります。
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection title="外壁塗装をする前に：張り替えが最適な場合も">
        <p className="leading-relaxed">
          今回ご紹介した通り、シリコン塗料は耐用年数と価格のバランスが良く、
          コストパフォーマンスに優れた塗料と言えます。
        </p>

        <p className="leading-relaxed">
          しかし、外壁塗装を行った家でも結局は塗装だけだと長く持たなかったり、
          寒冷地では凍害を完全に防ぐことができなかったりするケースもあります。
        </p>

        <p className="leading-relaxed">
          そのため、コスト的に抑えられるサイディング重ね張り（カバー工法）や下地からやり直す、
          張り替えを行った方がよい場合もあります。
        </p>

        <p className="leading-relaxed">
          とくに北海道など寒冷地の場合は、金属サイディングはひび割れや凍害の心配がなく断熱性のあるため、
          おすすめの外壁材の1つです。
        </p>

        <p className="leading-relaxed">
          どの外壁材が良いかはお住まいの地域などによっても異なりますので、
          まずは業者に相談してみてくださいね。
        </p>
      </ArticleSection>
    </article>
  );
}
