// src/app/knowledge/contents/09.tsx
import { ArticleSection, Callout, PriceTable, type PriceRow } from "../_components/article";

export default function C09() {
  const costRows: PriceRow[] = [
    {
      item: "トイレリフォーム費用（よくある目安）",
      unit: "一式",
      price: "約10万〜30万円",
      note: "内容・便器/便座機能・住宅条件で変動",
    },
    {
      item: "介護保険の補助（バリアフリー改修）",
      unit: "上限",
      price: "20万円",
      note: "要支援1〜2／要介護1〜5等の条件あり",
    },
  ];

  return (
    <article className="space-y-14">
      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>トイレリフォーム費用は内容次第だが、目安は約10万〜30万円が多い。</li>
          <li>費用差の主因は「トイレの種類」「便座/便器の機能」「追加工事（床・壁・電源等）」。</li>
          <li>費用を抑えるには、優先順位の明確化・相見積もり・便座のみ交換・補助金活用が有効。</li>
          <li>条件次第で介護保険を使った補助（上限20万円）も検討できる。</li>
        </ul>
      </Callout>

      <ArticleSection title="費用を抑えるコツ：優先順位を決める">
        <p className="leading-relaxed">
          どのような点が不便なのかを把握し、優先順位を意識することで、
          無駄な箇所にお金をかけずに済む場合もあります。
        </p>
        <p className="leading-relaxed">
          事前に、改善したい点やこだわりたい場所など、希望していることを明確にしておきましょう。
        </p>

        <Callout title="整理のしかた（例）">
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>絶対に改善したい不便（臭い／掃除しにくい／寒い／狭い など）</li>
            <li>優先したい機能（節水／温水洗浄／自動開閉／脱臭 など）</li>
            <li>できればやりたい追加工事（床・壁・収納・照明 など）</li>
          </ul>
        </Callout>
      </ArticleSection>

      <ArticleSection title="複数の会社で見積もりを出して比較する">
        <p className="leading-relaxed">
          リフォーム業者を決定する前に、複数の会社で見積もりを出してもらうのも一つの方法です。
        </p>
        <p className="leading-relaxed">
          会社によって見積もり金額が変わってくるので、より安いところに依頼をするなど、
          お客様の条件にあった会社を選ぶことができますよ。
        </p>

        <Callout title="比較するときのポイント">
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>同じ工事範囲・同等グレードで比較する</li>
            <li>処分費／養生／下地補修／電気工事など「含まれる項目」を確認</li>
            <li>工期と保証内容も合わせて比較</li>
          </ul>
        </Callout>
      </ArticleSection>

      <ArticleSection title="補助金制度を利用する">
        <p className="leading-relaxed">
          条件によっては、要支援1〜2、要介護1〜5と認定された人で、バリアフリーリフォームとして
          リフォーム（トイレの手すりの取り付け、段差の解消、滑りにくい床材への変更、
          開戸から引き戸への扉交換など）を行う場合、介護保険を使って上限20万円の補助金制度を利用することができます。
        </p>

        <Callout title="費用目安（まとめ）">
          <PriceTable rows={costRows} caption="※ 目安。制度は条件・地域・申請手順で異なる場合があります。" />
        </Callout>
      </ArticleSection>

      <ArticleSection title="トイレリフォームは納得できる費用で快適な空間にしよう">
        <p className="leading-relaxed">
          トイレリフォームでかかる費用は、リフォームの内容によって異なりますが、
          約10万〜30万円という方が多いようです。
        </p>
        <p className="leading-relaxed">
          トイレの便器の機能や、その他のリフォームの充実度により変わってきます。
          マンションと戸建では、設置環境によって選べるトイレの種類が異なるため、
          費用差が発生する場合があります。
        </p>
        <p className="leading-relaxed">
          トイレリフォームの費用の差は、トイレの種類や便座の機能にあります。
          また、和式から洋式への取り替えや、壁や床の張り替え、コンセントの増設などによって大きく変わってきます。
        </p>
        <p className="leading-relaxed">
          トイレリフォームの費用を抑えるには、あらかじめ優先順位を明確にしておくこと、
          複数の会社で見積もりを出して比較すること、便座のみの交換にする、
          補助金制度を利用する方法があります。
        </p>
        <p className="leading-relaxed">
          毎日使うトイレなので、リフォームする際は、費用を抑えられるところで抑えながらも、
          より快適な空間にしたいですね。
        </p>
      </ArticleSection>
    </article>
  );
}
