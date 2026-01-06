// src/app/knowledge/contents/05.tsx
import { ArticleSection, Callout, PriceTable, type PriceRow } from "../_components/article";

export default function C05() {
  const priceRows: PriceRow[] = [
    {
      item: "I型",
      unit: "一式",
      price: "10〜15万円",
      note: "奥まったタイプの玄関に合う。4種類の中でも価格が安い傾向。",
    },
    {
      item: "外付けI型",
      unit: "一式",
      price: "20万円前後",
      note: "玄関とドアが外壁と水平の形状向け。後付け箇所が増えI型より高め。",
    },
    {
      item: "L型",
      unit: "一式",
      price: "20〜30万円",
      note: "玄関が家の門にあり、さらに奥まった形状向け。直角2面で高めになりやすい。",
    },
    {
      item: "C型",
      unit: "一式",
      price: "25〜30万円以上",
      note: "玄関が家の角＋奥まった形状向け。壁面＋正面フードで工事多く高め。",
    },
  ];

  return (
    <article className="space-y-14">
      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>玄関フード（風除室）は寒さ・雪・雨風対策に有効（北海道などで定番）。</li>
          <li>メリット：濡れ防止、ドアの劣化防止、悪天候でも落ち着いて施錠、収納・飾り棚にも。</li>
          <li>デメリット：夏に熱がこもりやすい／温度差で結露が出る場合がある。</li>
          <li>形状は4種類（I型／外付けI型／L型／C型）。形状により価格と工事量が変わる。</li>
        </ul>
      </Callout>

      <ArticleSection title="玄関フードのメリット・デメリット">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">メリット</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>ドアが雪や雨風にさらされて劣化することを防ぐ</li>
              <li>玄関や郵便受け、宅配ボックスが雨や雪で濡れるのを防ぐ</li>
              <li>悪天候の場合も慌てずに玄関の鍵の開け閉めができる</li>
              <li>
                雪かき道具やベビーカーなど、すぐ使いたい道具や大きな荷物の収納場所としても活用できる
              </li>
              <li>
                植木鉢や雑貨を置くなど、雨風を気にせず玄関周りのインテリアを楽しめる
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">デメリット</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>夏は玄関フード内に熱がこもりやすいため、蒸し暑くなる</li>
              <li>外気温と室内の温度差から結露が発生する場合がある</li>
            </ul>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="玄関フードの種類と価格の相場をご紹介">
        <p className="leading-relaxed">
          玄関フードには、形状が異なる4つの種類があります。それぞれの価格の相場も見ていきましょう。
        </p>

        <Callout title="価格相場（目安）">
          <PriceTable rows={priceRows} caption="※ 目安。形状・納まり・工事量で変動します。" />
        </Callout>

        <div className="space-y-8">
          <div className="bg-gray-50 rounded-xl p-6 space-y-2">
            <h3 className="text-lg font-semibold">I型（10〜15万円）</h3>
            <p className="leading-relaxed">
              奥まったタイプの玄関に合う玄関フードです。両側が壁になっており、玄関を覆う外壁にフィットするように設置します。
              4種類の中でももっともリフォーム価格が安い傾向です。
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-2">
            <h3 className="text-lg font-semibold">外付けI型（20万円前後）</h3>
            <p className="leading-relaxed">
              玄関とドアが外壁と水平に設置されている形状にフィットするタイプ。
              天井や横の壁面など後付け工事の箇所が増えるため、I型よりも価格が高くなります。
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-2">
            <h3 className="text-lg font-semibold">L型（20〜30万円）</h3>
            <p className="leading-relaxed">
              玄関が家の門にあり、さらに奥まった形状の場合にフィットするタイプです。
              直角する2面のフードを設置する必要があるため、価格も高い傾向があります。
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-2">
            <h3 className="text-lg font-semibold">C型（25〜30万円以上）</h3>
            <p className="leading-relaxed">
              もっとも価格が高いC型は、玄関が家の角にあり、さらに玄関も壁面も奥まった位置にある形状にフィットするタイプです。
              壁面と正面の両方のフードを設置する必要があるため、価格が高くなります。
              設置工事が多い分工事価格は高くなります。
            </p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="玄関フードのメリット・デメリットを知って寒さ＆雪対策を">
        <p className="leading-relaxed">
          玄関周りの設備である「玄関フード」は「風除室」ともいい、
          北海道など寒い地方の一戸建てではおなじみの光景となっています。
        </p>
        <p className="leading-relaxed">
          玄関フードを設置することで、積雪でドアが開かなかったり、
          ドアの隙間から雪が吹き込んだりといった雪のお悩みを解決する役割もあります。
        </p>
        <p className="leading-relaxed">
          玄関フードには、奥まったタイプの玄関に合う「I型」、
          玄関とドアが外壁と水平に設置されている形状にフィットする「外付けI型」、
          玄関が家の門にあり、さらに奥まった形状の場合にフィットする「L型」、
          玄関が家の角にあり、さらに玄関も壁面も奥まった位置にある形状にフィットする「C型」の4つのタイプがあります。
        </p>
        <p className="leading-relaxed">
          玄関フードは寒さ対策や玄関の積雪対策などさまざまなメリットがあるので、
          お悩みの方は玄関リフォームを検討してみてはいかがでしょうか。
        </p>
      </ArticleSection>
    </article>
  );
}
