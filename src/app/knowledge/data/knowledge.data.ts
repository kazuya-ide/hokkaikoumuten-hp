// src/app/knowledge/knowledge.data.ts
export type KnowledgeItem = {
  id: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10";
  title: string;
  image: string;
};

export const knowledgeList: KnowledgeItem[] = [
  { id: "01", title: "外壁のひび割れの原因と、補修の流れ", image: "/knowledge-exterior-crack.avif" },
  { id: "02", title: "金属サイディングの耐用年数は？寿命を延ばす方法や劣化のサイン", image: "/knowledge-metal-siding-blue.avif" },
  { id: "03", title: "金属サイディングの種類を詳しく！特徴・価格・選び方のポイント", image: "/knowledge-bathroom-modern.avif" },
  { id: "04", title: "お風呂リフォームにかかる期間や日数をチェック！", image: "/knowledge-bathroom.avif" },
  { id: "05", title: "玄関フードをつくるメリット・デメリットとは？種類と価格の相場も", image: "/knowledge-entrance-hood.avif" },
  { id: "06", title: "寒冷地におすすめな外壁タイルは？耐用年数やメンテナンスも", image: "/knowledge-tile.avif" },
  { id: "07", title: "窓の断熱リフォームは大事！その重要性や方法、費用についてチェック", image: "/knowledge-window.avif" },
  { id: "08", title: "外壁塗装のシリコン塗料とは？特徴や種類、メリット・デメリットも", image: "/knowledge-paint.avif" },
  { id: "09", title: "トイレリフォームでかかる費用は？全体の相場やケース別の金額もご紹介", image: "/knowledge-toilet.avif" },
  { id: "10", title: "キッチンの種類に迷う方へ！選び方のポイントを詳しくご紹介", image: "/knowledge-kitchen.avif" },
];
