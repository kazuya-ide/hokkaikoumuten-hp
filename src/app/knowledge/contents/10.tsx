// src/app/knowledge/contents/10.tsx
import { ArticleSection, Callout } from "../_components/article";

export default function C10() {
  return (
    <article className="space-y-14">
      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>キッチン選びは「掃除のしやすさ」「デザイン」「サイズ（幅/奥行き/高さ）」が重要。</li>
          <li>掃除重視ならIH、天板/シンクはステンレスや人工大理石が人気。</li>
          <li>サイズ目安：幅2,100〜2,550mm／奥行600〜700mm／高さは身長÷2+5cm。</li>
          <li>失敗しがち：間取りバランス、動線の悪さ、収納不足、コストダウンしすぎ。</li>
          <li>収納量と優先順位を整理して、施工会社と相談しながら決めるのが安全。</li>
        </ul>
      </Callout>

      <ArticleSection title="キッチン選びで重視したいポイント">
        <div className="space-y-8">
          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">掃除のしやすさ</h3>
            <p className="leading-relaxed">
              掃除のしやすさも、キッチンを考えるうえで大切です。
            </p>
            <p className="leading-relaxed">
              例えば、油で汚れやすいコンロの周辺。掃除のしやすさで考えるなら、
              ガスコンロよりもIHを採用したほうが良いでしょう。
            </p>
            <p className="leading-relaxed">
              また、ワークトップ（天板）やシンクの素材も掃除のしやすさを左右します。
              ステンレス製のものや人工大理石はお手入れしやすいので人気です。
            </p>
            <p className="leading-relaxed">
              他にも、レンジフードや収納内の掃除のしやすさも選ぶ際のポイントです。
            </p>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">デザインの良さ</h3>
            <p className="leading-relaxed">
              毎日キッチンに立つ人にとって、キッチンのデザインは調理のモチベーションアップにつながります。
            </p>
            <p className="leading-relaxed">
              例えば、普通のキッチンは継ぎ目や段差があることで隙間ができてしまいますが、
              システムキッチンはワークトップの天板でつながっていて継ぎ目がないのでフラットで見た目がきれいです。
            </p>
            <p className="leading-relaxed">
              また、シンクやコンロ、収納までが全て一体となった形で売られているので、
              統一感のあるデザインになることも魅力です。
            </p>
            <p className="leading-relaxed">
              あとは居室のインテリアや壁・床の色に合う色・素材を選ぶことも重要です。
            </p>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">キッチンのサイズ</h3>
            <p className="leading-relaxed">
              キッチンのサイズは「横幅」「奥行き」「ワークトップの高さ」を確認する必要があります。
            </p>
            <p className="leading-relaxed">
              キッチンの「横幅」は、シンク・コンロ・作業スペースを合わせた幅で考えます。
              だいたい2,100〜2,550㎜が一般的です。
            </p>
            <p className="leading-relaxed">
              「奥行き」の一般的な長さは600㎜〜700㎜です。
            </p>

            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <h4 className="font-semibold">高さの目安</h4>
              <p className="leading-relaxed text-gray-700">
                「ワークトップの高さ」は「身長÷2+5㎝」が適した高さです。
              </p>
            </div>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="キッチンの選び方で失敗しないポイントは？">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">失敗しがちなポイント</h3>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <h4 className="font-semibold">間取りの失敗</h4>
                <p className="leading-relaxed">
                  広いキッチンは憧れの対象ですが、キッチンに意識を集中するあまり居室に意識が向かず、
                  リビング・ダイニングが狭くなってしまった、というケースも多く見られます。
                </p>
                <p className="leading-relaxed">
                  理想とするレイアウトがあっても、リビングなどの居室とキッチンとのバランスをよく考えましょう。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <h4 className="font-semibold">使い勝手が悪い（動線）</h4>
                <p className="leading-relaxed">
                  シンプルに「使い勝手が悪い」というケースもありえます。
                  こういった後悔は、キッチンを使うときの動線をよく考えなかった場合に起こりがちです。
                </p>
                <p className="leading-relaxed">
                  冷蔵庫や電子レンジの配置場所、ワークトップの大きさなどは、
                  あらかじめ動きやすさを熟考しておく必要があります。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <h4 className="font-semibold">収納スペースに不満がある</h4>
                <p className="leading-relaxed">
                  収納スペースの問題は、キッチンの使い勝手に大きく影響を及ぼします。
                  収納容量の少なさや、収納の設置場所などに問題があると、
                  キッチンを使う度にストレスが溜まってしまいます。
                </p>
                <p className="leading-relaxed">
                  今ある収納したいものや、これから収納したいものをリストアップし、
                  広さや場所を決めると失敗が少ないです。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <h4 className="font-semibold">コストダウンに専念しすぎた</h4>
                <p className="leading-relaxed">
                  キッチンは安い商品ではなく、むしろ高い買い物といえます。
                  しかし、できるだけ出費を抑えたいのはもっともですが、
                  コストダウンに気持ちを割きすぎて安っぽいキッチンになってしまい、
                  後悔しているという声もよく聞きます。
                </p>
                <p className="leading-relaxed">
                  こだわりたい部分と抑えてもOKな部分の優先順位をつけておくこと、
                  選んでいくと失敗が少ないでしょう。
                </p>
                <p className="leading-relaxed">
                  また、たとえば光熱費も初期費用もかかるので食洗機はつけないと決めても、
                  意外と食洗機で一気に洗ったほうが水道代が安かったり、
                  将来家族が増えることを想定すると時短が必要だったりもします。
                  長い目で見てコストを考えることも大事です。
                </p>
              </div>
            </div>
          </div>

          <Callout title="結論：種類が豊富だからこそ、順番を決めて検討しよう">
            <p className="leading-relaxed text-gray-700">
              キッチンの間取りはリビングやダイニングなど居室とのつながりや、壁面との接し方で考えられます。
            </p>
            <p className="leading-relaxed text-gray-700">
              レイアウトはキッチンのスタイルを決めてから、調理をする人の動線に合った種類を選ぶようにしましょう。
            </p>
            <p className="leading-relaxed text-gray-700">
              キッチンレイアウトの選び方のポイントは、収納から考えたり、掃除のしやすさから順番に考えると、混乱せずに済みます。
            </p>
            <p className="leading-relaxed text-gray-700">
              選び方で失敗しないために、失敗しがちなポイントをあらかじめ知っておくほうが安心です。
            </p>
            <p className="leading-relaxed text-gray-700">
              キッチンに収めたい収納物の量や種類、キッチンに求める優先順位も考えておき、
              施工会社と相談しながらじっくり検討してくださいね。
            </p>
          </Callout>
        </div>
      </ArticleSection>
    </article>
  );
}
