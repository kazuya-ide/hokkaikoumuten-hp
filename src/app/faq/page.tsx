export default function FaqPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* =========================
          HERO（FAQヘッダー）
      ========================= */}
      <section className="bg-[#0cccb3] py-24 px-6 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-wider">
            QUESTION
          </h1>
          <p className="mb-6 text-lg">
            よくある質問
          </p>
          <p className="text-sm leading-loose">
            リフォームに関するよくある質問をまとめました。<br />
            そのほかにもご不明点がありましたらお気軽にご連絡下さい。
          </p>
        </div>
      </section>

      {/* =========================
          FAQ 本体
      ========================= */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* FAQ ITEM */}
          <FaqItem
            question="見積もりは無料ですか？"
            answer="どのような工事でも、無料にてお見積り致します。お客様と十分に打ち合わせを行い、お見積書を提出します。"
          />

          <FaqItem
            question="工期はどれくらい？"
            answer={`トイレ1～2日、ユニットバス3～4日、キッチン2～3日、外壁・金属サイディング・乾式タイルは、
お客様の住宅の大きさや形状、使用する外壁材などにより前後いたしますが、約2～4週間が目安となります。
工期も大事ですが、何よりも仕上がりを第一優先していきます。`}
          />

          <FaqItem
            question="他社でもらった見積もりは適正なのか教えてもらえますか？"
            answer={`「他社で雨漏り修理や防水工事費用の見積りをもらったけど、高い気がする」
「適切な金額なのか分からないので、別の目線で見積りを取りたい」
このような、見積もりに関する不安や心配ごとのご相談もお受け致しております。`}
          />

          <FaqItem
            question="予算の範囲内でプランを出してもらえる？"
            answer="もちろんです。あらかじめ予算をお伝え下さい。定価制プランもございますので、不明確な追加費用の心配もせず、リフォームをお考えいただけます。"
          />

          <FaqItem
            question="契約後や施工中にちょっとした変更でも追加料金がかかりますか？"
            answer={`当社では、お客様がご納得いくまでお打合せを行った上で、ご契約書を交わします。
基本的にはお客様からの変更や追加のご要望がない限り、追加料金はいただきません。
ただし、施工開始後に判明する見えない部分の補修等は別工事となる場合がございます。
その際は改めてお見積りを行い、ご了解のうえで工事を進めますのでご安心ください。`}
          />

          <FaqItem
            question="アフターサービスや保証制度について知りたい"
            answer={`安心の保証つきでございます。
施工内容によりますが最長10年の保証ができます。
アフターフォローや施工後のサポートも万全なのでお任せください。`}
          />

          <FaqItem
            question="火災保険の適用で見積もりができますか？"
            answer={`「台風による強風や落雷」「自然災害によって破損された雨漏り」
このような場合、火災保険が適用される可能性もございます。
当社でも適用実績は多数ございますので、まずはお気軽にご相談ください。`}
          />

          <FaqItem
            question="緊急時の対応はすぐにしていただけますか？"
            answer="勿論で御座います。雨漏りや排水管のつまり、自然災害など緊急の場合は、できる限り早く対応させていただきます。"
          />

          <FaqItem
            question="すごく簡単な内容でもお願いできますか？"
            answer="どんなに些細なことでもしっかり対応させて頂きますのでご安心ください。"
          />

        </div>
      </section>

    </main>
  );
}

/* =========================
    FAQパーツ
========================= */
function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="group border-t border-[#0cccb3] pt-10 transition-all duration-500">

      {/* Q + 質問 */}
      <div className="flex items-center gap-6 mb-6">
        {/* Q */}
        <span
          className="
            flex h-10 w-10 items-center justify-center
            text-2xl font-bold text-blue-600
            transition-transform duration-300
            group-hover:-translate-y-1
          "
        >
          Q
        </span>

        {/* 質問文 */}
        <h3
          className="
            text-xl font-bold text-blue-600
            transition-colors duration-300
            group-hover:text-[#0cccb3]
          "
        >
          {question}
        </h3>
      </div>

      {/* 回答 */}
      <p
        className="
          ml-[64px]
          text-sm leading-loose whitespace-pre-line
          text-gray-700
          transition-all duration-500
          group-hover:translate-x-1
          group-hover:opacity-90
        "
      >
        {answer}
      </p>
    </div>
  );
}
