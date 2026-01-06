// src/app/knowledge/contents/07.tsx
import { ArticleSection, Callout, PriceTable, type PriceRow } from "../_components/article";

export default function C07() {
  const costRows: PriceRow[] = [
    {
      item: "サッシ枠の交換（サッシ交換）",
      unit: "一式",
      price: "約5万円",
      note: "条件・窓種で変動",
    },
    {
      item: "窓周りの壁も施工する場合",
      unit: "一式",
      price: "約25〜60万円",
      note: "範囲・納まりで変動",
    },
    {
      item: "内窓の後付け（二重窓）",
      unit: "一式",
      price: "約5〜15万円",
      note: "腰高窓：約4〜6万円／小窓：約3〜5万円",
    },
    {
      item: "窓を丸ごと交換",
      unit: "一式",
      price: "約10〜50万円",
      note: "高断熱ガラス等で上がる",
    },
  ];

  return (
    <article className="space-y-14">
      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>単板ガラスから複層ガラスに変えると断熱効果が上がる。</li>
          <li>複層ガラスは「一般複層ガラス」「Low-E複層ガラス」がある。</li>
          <li>内窓（二重窓）は空気層で断熱UP。防音・防犯にも有効で施工も比較的簡単。</li>
          <li>工法によって費用が大きく違う。補助金・助成金・減税も要チェック。</li>
          <li>結露/防音など目的に合う仕様選びと、施工管理がしっかりした業者選びが重要。</li>
        </ul>
      </Callout>

      <ArticleSection title="窓ガラスの交換で断熱性能を上げる">
        <p className="leading-relaxed">
          効果は低い「単板ガラス」を採用することが多いです。
        </p>
        <p className="leading-relaxed">
          単板ガラスは一枚板のガラスですが、これを「複層ガラス（通称ペアガラス）」に変えることで断熱効果が高まります。
        </p>

        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold">複層ガラスの種類</h3>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed text-gray-700">
            <li>一般複層ガラス</li>
            <li>Low-E複層ガラス</li>
          </ul>
          <p className="leading-relaxed">
            2枚のガラスと中空層からなる「一般複層ガラス」は、中空層の働きで熱がガラス面を通り抜ける量を少なくします。
            そのため、室内側のガラス面が冷えにくくなり、ガラスの結露を抑える効果もあります。
          </p>
        </div>

        <Callout title="注意：交換方法は事前に確認">
          <p className="leading-relaxed text-gray-700">
            窓ガラスの交換はサッシの種類によってはガラスだけの交換ができず、
            サッシごと交換になるケースもあるため、交換方法は事前に確認しましょう。
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection title="内窓を取り付ける（二重窓）">
        <p className="leading-relaxed">
          既存の窓の室内側に、断熱効果の高い樹脂サッシなどの内窓を追加する方法。寒冷地では当たり前となっている方法です。
        </p>
        <p className="leading-relaxed">
          窓が二重になるため2つの窓の間に空気層が生まれ、この空気層が熱を伝えにくくして断熱効果を高めます。
        </p>
        <p className="leading-relaxed">
          窓を二重にすると、断熱だけではなく防音や防犯対策にも有効ですよ。
        </p>
        <p className="leading-relaxed">
          内窓の取り付けは、既存の窓の内側に窓を設置するため、施工が簡単に済むという特徴もあります。
        </p>
      </ArticleSection>

      <ArticleSection title="窓の断熱リフォームの費用目安は？補助金・助成金もチェック">
        <Callout title="費用目安（まとめ）">
          <PriceTable rows={costRows} caption="※ 目安。窓サイズ・仕様・現場条件で変動します。" />
        </Callout>

        <p className="leading-relaxed">
          高断熱のガラスなど機能性をアップさせると、価格はさらに上がります。
        </p>
        <p className="leading-relaxed">
          断熱リフォームを検討する際に気になるのが費用面ですが、窓や断熱材などを用いて行う工事には、
          お得にリフォームを行うことができる補助金制度や減税措置などがあります。
        </p>
      </ArticleSection>

      <ArticleSection title="窓の断熱リフォームを行うデメリットや注意点もある？">
        <p className="leading-relaxed">
          窓の断熱リフォームは、工事内容によっては高額な費用が発生するため、注意点を知ったうえで施工することが大切です。
        </p>
        <p className="leading-relaxed">
          結露対策や防音性を高めたい場合は、それに合わせた工法や窓ガラスの種類を選ぶ必要があります。
          また、サイズによっても費用が異なるため、事前に確認しましょう。
        </p>

        <Callout title="業者選びも重要">
          <p className="leading-relaxed text-gray-700">
            断熱リフォームにおいては、業者選びも非常に重要です。
            断熱リフォーム工事の実績や提案力をはじめ、作業工程や安全対策、品質など施工管理がしっかりとしている業者を選びましょう。
          </p>
          <p className="leading-relaxed text-gray-700">
            費用や工事の方法も、業者によって大きく異なります。
            複数の業者に見積もりを依頼し、比較検討することもおすすめ致します。
          </p>
        </Callout>
      </ArticleSection>
    </article>
  );
}
