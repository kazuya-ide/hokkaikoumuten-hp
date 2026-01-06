// src/app/knowledge/contents/03.tsx
import { ArticleSection, Callout } from "../_components/article";

export default function C03() {
  return (
    <article className="space-y-14">
      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            住宅で使われやすい金属サイディングは「ガルバリウム鋼板」と「アルミニウム合金塗装板」。
          </li>
          <li>
            選ぶポイントは、予算・厚み（見栄え）・断熱/遮音・デザイン・汚れにくさ・保証・施工費用。
          </li>
          <li>
            メリット：断熱性が高い／軽量で耐震性に寄与／耐久性がある／メンテ回数が少なめ。
          </li>
          <li>
            デメリット：傷がつきやすい／傷から錆びることがある（塩害にも注意）。
          </li>
        </ul>
      </Callout>

      <ArticleSection title="金属サイディングの主な種類（住宅で多い2つ）">
        <div className="space-y-8">
          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">ガルバリウム鋼板</h3>
            <p className="leading-relaxed">
              ガルバリウム鋼板は、アルミニウムと亜鉛合金めっき鋼板をあわせた素材。
            </p>
            <p className="leading-relaxed">耐用年数は20〜40年程度です。</p>
            <p className="leading-relaxed">
              耐久性が高く、亜鉛の犠牲防食作用により錆びにくい特徴があります。
              金属質でスタイリッシュな質感のため、モダンなデザインが好きな方に人気です。
            </p>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">アルミニウム合金塗装板</h3>
            <p className="leading-relaxed">
              アルミニウム合金塗装板は、鋼板にアルミニウムが使用された外壁材です。
            </p>
            <p className="leading-relaxed">耐用年数は40年〜50年ほど。</p>
            <p className="leading-relaxed">
              軽量で建物に負担が少ないため耐震性があり、錆びにも強いという特徴があります。
              ガルバリウム鋼板よりも施工費用が高いことが多いですが、
              メンテナンスが少なくて済む点がメリットです。
            </p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="金属サイディングの選び方もチェック！">
        <div className="space-y-6">
          <p className="leading-relaxed">
            金属サイディングを選ぶ際には、予算やデザイン、耐久性などを考えて選びましょう。
          </p>

          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            <h3 className="text-lg font-semibold">予算で選ぶ</h3>
            <p className="leading-relaxed">
              素材によって金額が変わってきます。1㎡の価格の差はわずかでも、
              使う範囲が広いと合計金額の差も大きくなります。
            </p>
            <p className="leading-relaxed">
              金属サイディングの場合は厚みを増すごとに金額が上がりますが、
              見栄えが良く美しい外見に仕上げるには15mm以上がおすすめです。
            </p>
            <p className="leading-relaxed">
              厚みが14mm以下のものは安価ですが、釘で壁面に打ち付ける必要があるため、
              釘部分が錆びてしまうなど、早めのメンテナンスが必要になります。
            </p>
            <p className="leading-relaxed">
              また、予算で選ぶ際は、断熱性や遮音性がどの程度かの確認も大切。
              あまり価格が安すぎるものは断熱性・遮音性に欠けてしまうこともあるので、
              注意が必要です。
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            <h3 className="text-lg font-semibold">デザイン性で選ぶ</h3>
            <p className="leading-relaxed">
              金属ならではのクールな印象のものだけでなく、温かみのあるものなども増えています。
              近年は色のバリエーションも豊富で、木目やタイル調など見た目は金属に見えないような加工がされているものも多いです。
            </p>
            <p className="leading-relaxed">
              汚れを雨水で落ちやすくする加工がされている「セルフクリーニング機能」がついている製品もありますよ。
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            <h3 className="text-lg font-semibold">施工費用・保証も合わせて確認</h3>
            <p className="leading-relaxed">
              サイディングそのものだけでなく、施工業者によって施工費用も様々です。
              メーカー保証内容もそれぞれなので、決める前に合わせて確認・比較しておくと安心ですね。
            </p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="金属サイディングのメリット・デメリットも紹介">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">メリット</h3>
            <ul className="list-disc pl-6 space-y-3 leading-relaxed">
              <li>
                <span className="font-semibold">断熱性が高い：</span>
                金属サイディングは断熱材と一体となっており、熱伝導率が低い素材です。
                暑さ・寒さを遮断する効果がしっかりとあります。
              </li>
              <li>
                <span className="font-semibold">軽量である：</span>
                比較的軽い素材のため建物への負担が少なく、地震などの揺れの影響も受けづらく耐震性が高い素材といえます。
              </li>
              <li>
                <span className="font-semibold">耐久性がある：</span>
                窯業サイディングなどと比べ、ひび割れなどが起きにくく劣化が目立ちにくいです。
                また水分を吸収する素材ではないため、寒冷地での凍結による内部劣化の心配も少ないとされています。
              </li>
              <li>
                <span className="font-semibold">メンテナンスが少なく済む：</span>
                窯業サイディングは7〜10年ごとに塗装が必要なものが多い一方、
                金属サイディングは10〜15年ごとの塗装でOKなことが多く、費用を抑えやすいです。
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">デメリット</h3>
            <ul className="list-disc pl-6 space-y-3 leading-relaxed">
              <li>
                <span className="font-semibold">傷がつきやすい：</span>
                外からの衝撃では傷がついてしまうので注意が必要です。
                家の周りに倒れやすいものを置かないなど、できる範囲で対策しておくと防ぎやすくなります。
              </li>
              <li>
                <span className="font-semibold">錆びてしまうことがある：</span>
                錆に強い素材とはいえ、少しの傷から錆びてしまうこともあるので、
                定期的に錆びがないか確認しておくことも大切です。
                海の近くでは潮風などの影響による塩害にも注意が必要です。
              </li>
            </ul>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="金属サイディングの特徴を知って種類を選ぼう">
        <p className="leading-relaxed">
          サイディングには「金属系」「窯業系」「木材系」「樹脂系」の4種類あります。
        </p>
        <p className="leading-relaxed">
          金属系の中でも、ガルバリウム鋼板、塗装溶融亜鉛めっき銅板、アルミニウム合金塗板、ステンレス鋼板の大きく4つの種類があり、
          住宅では「ガルバリウム鋼板」と「アルミニウム合金塗板」が使われることが多いです。
        </p>
        <p className="leading-relaxed">
          金属サイディングは比較的軽いため、「カバー工法」という既存の外壁の上から取り付ける方法が可能です。
          今あるサイディングを外す必要がないため、施工期間も短く済ませることができます。
        </p>

        <Callout title="選ぶときの比較ポイント（チェックリスト）">
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>予算（素材・厚み・施工範囲で総額が変わる）</li>
            <li>厚み（見栄え重視なら15mm以上）</li>
            <li>断熱性・遮音性（安価すぎる製品は要確認）</li>
            <li>デザイン（色・木目/タイル調・質感）</li>
            <li>汚れにくさ（セルフクリーニング機能など）</li>
            <li>施工費用・施工品質（業者で差が出る）</li>
            <li>メーカー保証（内容を比較）</li>
          </ul>
        </Callout>

        <p className="leading-relaxed">
          金属サイディングのメリットは、遮熱性が高い、軽量である、耐久性がある、メンテナンスが少なく済むこと。
          デメリットは、衝撃などにより傷がつきやすいこと、錆には注意が必要なことが挙げられます。
        </p>
        <p className="leading-relaxed">
          それぞれの特徴をふまえて、理想に合ったサイディングを選べると良いですね！
        </p>
      </ArticleSection>
    </article>
  );
}
