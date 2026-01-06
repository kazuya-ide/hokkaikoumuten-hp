// src/app/knowledge/contents/01.tsx
import { ArticleSection, Callout, PriceTable, type PriceRow } from "../_components/article";

export default function C01() {
  const summaryRows: PriceRow[] = [
    {
      item: "弾性塗料で塗装（クラックを埋めるように塗装）",
      unit: "1㎡",
      price: "1,700〜2,500円",
      note: "軽度〜中程度のクラックで検討されることが多い",
    },
    {
      item: "シーリング補修（亀裂をシーリングで埋める）",
      unit: "1m",
      price: "500〜900円",
      note: "比較的軽度の場合の選択肢",
    },
    {
      item: "カット工法（周辺をカット→樹脂充填）",
      unit: "1m",
      price: "1,500〜3,000円",
      note: "ひび割れ幅0.3mm以上の目安",
    },
    {
      item: "サイディング張り替え",
      unit: "一式",
      price: "150万〜270万円",
      note: "外壁材までひび割れしている場合",
    },
    {
      item: "重ね張り（カバー工法）",
      unit: "一式",
      price: "110万〜220万円",
      note: "既存サイディングの上に重ね張り",
    },
  ];

  return (
    <article className="space-y-14">
      {/* 要点まとめ（費用レンジ表） */}
      <Callout title="要点まとめ（費用目安）">
        <p className="leading-relaxed text-gray-700">
          ひび割れの幅や深さ、補修規模、足場の有無で総額は大きく変わります。
          まずは「どの補修が必要な状態か」を切り分けるのが近道です。
        </p>
        <PriceTable rows={summaryRows} caption="※ 目安。現場状況・施工範囲・足場の有無で変動します。" />
      </Callout>

      <ArticleSection title="軽度の場合（塗装・シーリング）">
        <p className="leading-relaxed">
          クラックを埋めるように塗装する外壁塗装です。
        </p>
        <p className="leading-relaxed">
          費用相場は、1㎡あたり1,700円〜2,500円ほどとなっています。
        </p>

        <div className="bg-gray-50 rounded-xl p-6 space-y-3">
          <h3 className="text-lg font-semibold">シーリングで亀裂を埋める方法</h3>
          <p className="leading-relaxed">
            また、比較的軽度の場合は、シーリングで亀裂を埋める方法もあります。
          </p>
          <p className="leading-relaxed">
            費用相場は、1mあたり500円〜900円ほどが目安です。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            なお、補修する規模や足場の有無によっても、全体の費用は大きく異なります。
          </p>
        </div>
      </ArticleSection>

      <ArticleSection title="ひび割れが0.3mm以上の場合">
        <p className="leading-relaxed">
          0.3mm以上のひび割れにはカット工法が適しています。
        </p>
        <p className="leading-relaxed">
          カット工法とは、ひび割れの周辺をカットして接着面を広げてから、
          樹脂を充填する補修方法のこと。
        </p>
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="leading-relaxed">
            費用相場は、1mあたり1,500円〜3,000円ほどが目安です。
          </p>
        </div>
      </ArticleSection>

      <ArticleSection title="外壁材もひび割れしている場合">
        <p className="leading-relaxed">
          外壁材までひび割れしている場合は、外壁材の補修やサイディングの張り替えなどが必要となります。
        </p>

        <div className="bg-gray-50 rounded-xl p-6 space-y-3">
          <p className="leading-relaxed">
            サイディングの張り替えの費用相場は、サイディングの種類や施工面積、
            依頼する業者によって変わりますが、150万円〜270万円ほどが目安。
          </p>
          <p className="leading-relaxed">
            既存のサイディングの上に新しいサイディングを重ね張りをする
            重ね張り工法（カバー工法）の場合は、110万〜220万円ほどが相場と言われています。
          </p>
        </div>
      </ArticleSection>

      <Callout title="外壁のひび割れは放置すると危険！" tone="danger">
        <p className="leading-relaxed">
          外壁のひび割れ幅が0.3mm以上の場合は雨水が侵入し、雨漏りやカビ、シロアリ、
          建物内部の腐食へと進行してしまう場合もあります。
        </p>
        <p className="leading-relaxed">
          放置しておくと、家自体の強度も低下してしまうので、できるだけ早急に対処することが必要です。
        </p>
        <p className="leading-relaxed">
          定期的なメンテナンスも大きなひび割れの予防となります。
        </p>
        <p className="leading-relaxed">
          小さいクラックが発生した場合も、基本的には経過観察で良いものとされていますが、
          1mm以下のクラックでも構造クラックである場合があります。
        </p>
        <p className="leading-relaxed">
          シーリングなどで自分で処置ができる場合もありますが、外壁のひび割れは、
          早期発見と適切な補修が大切です。
        </p>
        <p className="leading-relaxed font-medium">
          処置が必要かどうかの判断は、できるだけプロに任せた方が安心でしょう。
        </p>
      </Callout>
    </article>
  );
}
