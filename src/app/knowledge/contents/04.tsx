// src/app/knowledge/contents/04.tsx
import { ArticleSection, Callout } from "../_components/article";

export default function C04() {
  return (
    <article className="space-y-14">
      <Callout title="要点まとめ">
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            サイズ変更などがなければ、工期は基本4〜5日で完了するケースが多い。
          </li>
          <li>
            ただし最低でも3日間は浴室が使えない前提で、代替手段を準備しておく。
          </li>
          <li>
            見積もりは「内容の違い」が工期・費用差につながるため、項目を丁寧に比較する。
          </li>
          <li>
            オプション（ミストサウナ／浴室乾燥）や窓サッシ、断熱工事の有無などがポイント。
          </li>
        </ul>
      </Callout>

      <ArticleSection title="工事期間中にお風呂が使えない場合の過ごし方">
        <p className="leading-relaxed">
          ちなみに、札幌工務店ではサイズの変更などがなければ基本的には4〜5日間でリフォームが完了しますが、
          最低でも3日間は浴室をご使用いただけません。
        </p>

        <div className="bg-gray-50 rounded-xl p-6 space-y-3">
          <h3 className="text-lg font-semibold">代替手段の例</h3>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed text-gray-700">
            <li>近くの銭湯に通う</li>
            <li>親しい親戚や友人の家でお風呂を借りる</li>
            <li>
              工事終了後〜翌朝までホテルで過ごし、翌日工事開始前に帰宅する
            </li>
          </ul>
        </div>

        <p className="leading-relaxed">
          自宅の浴室が使用できない期間には近くの銭湯に通ったり、
          親しい親戚や友人の家でお風呂を借りるといった方法があります。
        </p>
        <p className="leading-relaxed">
          または、その日の工事終了後、工事業者が不在の時間は思い切ってホテルなどで過ごし、
          翌日、工事が始まる前に家に戻るというのも良いかもしれませんね。
        </p>
      </ArticleSection>

      <ArticleSection title="リフォームの内容を検討する（見積もりの見方）">
        <p className="leading-relaxed">
          見積もりに記載された内容をよく見ながら、リフォームの内容を吟味することが大切です。
        </p>
        <p className="leading-relaxed">
          複数社から見積もりを取った場合、内容が少しずつ異なっていることもあります。
        </p>

        <Callout title="見積もりで差が出やすいポイント">
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>ミストサウナ・浴室乾燥などのオプション機能の有無</li>
            <li>浴室の窓サッシを新しくするかどうか</li>
            <li>断熱工事をするかどうか</li>
          </ul>
        </Callout>

        <p className="leading-relaxed">
          一言にお風呂リフォームといっても選択肢はたくさん。
          これらの内容の違いが工期や費用の違いになることも多いので、
          提案されたリフォームの内容をよく確認してみましょう。
        </p>
      </ArticleSection>
    </article>
  );
}
