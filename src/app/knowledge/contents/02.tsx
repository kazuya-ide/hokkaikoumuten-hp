// src/app/knowledge/contents/02.tsx
import { ArticleSection, Callout } from "../_components/article";

export default function C02() {
  return (
    <article className="space-y-14">
      <header className="space-y-3">
        <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          セメント工事
        </div>
      </header>

      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>金属サイディングの耐用年数は20〜40年ほどと言われています。</li>
          <li>ただしサビに弱いため、定期的なメンテナンスが重要です。</li>
          <li>目安は築10〜15年で点検・メンテナンス。</li>
          <li>
            劣化サイン：サビ、塗膜の剥がれ・膨れ、色やツヤなど質感の変化、チョーキング現象。
          </li>
        </ul>
      </Callout>

      <ArticleSection title="金属サイディングの耐用年数は？他の壁材との違いも">
        <p className="leading-relaxed">
          金属サイディングの耐用年数は、20年〜40年ほどと言われています。
        </p>
        <p className="leading-relaxed">
          ただしサビには弱く、耐用年数を伸ばすためには定期的なメンテナンスが必要です。
        </p>
        <p className="leading-relaxed">
          築年数が経ってくると傷によるサビや塗膜の劣化が起きてくるので、築10年〜15年を目安にメンテナンスを行いましょう。
        </p>
      </ArticleSection>

      <ArticleSection title="塗装時期の見極め：劣化のサインをチェック">
        <div className="space-y-8">
          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">サビが発生している</h3>
            <p className="leading-relaxed">
              金属サイディングは少しの損傷からでもサビが発生しやすいのがデメリット。
              ただし、発生するケースにはいくつか原因があり、気をつければ防げるものもあります。
            </p>
            <p className="leading-relaxed">
              外壁の近くに自転車や工具など金属製のものを置いてしまったことで鉄粉が付着し、
              サビが発生してしまう「もらいサビ」。
              この場合は、近くに金属製のものを置かないようにすることで防げます。
            </p>
            <p className="leading-relaxed">
              また、傷や凹みといった損傷をそのままにしておいたり、海が近くの地域の場合はサビが発生しやすいです。
              なるべく損傷は早めに修理し、塩害の可能性がある場合は定期的な洗浄で予防することも大切です。
            </p>
            <p className="leading-relaxed font-medium">
              すでにサビが発生してしまっている場合には、塗装を検討しましょう。
            </p>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">塗膜の劣化が起きている</h3>
            <p className="leading-relaxed">
              塗膜の劣化の原因には、太陽光（紫外線）や雨水・寒暖差などの自然環境によるものや、
              地震・台風などの天災によるものがあります。
            </p>
            <p className="leading-relaxed">
              サイディングの塗膜が剥がれてしまうと、雨などの水分を吸収してしまい膨れが起こったり、
              ヒビ割れなどの原因になってしまいます。
            </p>
            <p className="leading-relaxed">
              また、水分を含んでしまうとカビや苔が生えやすくなってしまうので、カビや苔を見つけた際にも注意が必要です。
            </p>
            <p className="leading-relaxed">
              剥がれや膨れが起きていなくても、塗膜が劣化してくると、色合いの変化や質感のツヤがなくなるなどの質感の変化も起きます。
              塗膜の劣化のチェックは日頃からしっかり行っておくと安心ですよ。
            </p>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 space-y-2">
            <h3 className="text-xl font-semibold">チョーキング現象が起きている</h3>
            <p className="leading-relaxed">
              チョーキング現象とは、壁の表面に白い粉のようなものが現れることです。
              「白亜化現象」とも呼ばれ、塗料の成分が劣化することで起きてしまいます。
            </p>
            <p className="leading-relaxed font-medium">
              チョーキング現象を確認した場合は、そろそろ塗り替えが必要なサイン。放置せずに塗り替えを検討しましょう。
            </p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="金属サイディングは適切なメンテナンスが耐用年数を延ばす">
        <p className="leading-relaxed">
          金属サイディングの耐用年数は30年〜40年ほどですが、定期的なメンテナンスは必要です。
        </p>
        <p className="leading-relaxed">
          金属の素材そのものは耐久性が高いものですが、その上から塗られている塗膜にはどうしても劣化が生じてしまいます。
        </p>
        <p className="leading-relaxed">
          金属サイディングの場合は、築10年〜15年ほどがメンテナンスを行う目安とされています。
        </p>

        <Callout title="放置リスクと、長持ちさせるポイント">
          <p className="leading-relaxed text-gray-700">
            劣化の主なサインはサビ、塗膜の剥がれや膨れ、質感の変化、チョーキング現象など。
            いずれも放置してしまうと劣化が進み、穴があいてしまうなど、耐用年数より早く寿命を迎えてしまいます。
          </p>
          <p className="leading-relaxed text-gray-700">
            金属サイディングは状態を日頃からチェックし、劣化の症状があった場合には塗装メンテナンスを行うようにしましょう。
            塗装のほかにも洗浄、コーキング材のメンテナンス、破損部分の補修などをこまめにしておくのも耐用年数を延ばすポイントです。
          </p>
        </Callout>
      </ArticleSection>
    </article>
  );
}
