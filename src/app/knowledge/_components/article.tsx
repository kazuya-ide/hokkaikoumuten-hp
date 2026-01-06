// src/app/knowledge/_components/article.tsx
import type { ReactNode } from "react";

export function ArticleSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function Callout({
  title,
  children,
  tone = "neutral",
}: {
  title?: string;
  children: ReactNode;
  tone?: "neutral" | "danger";
}) {
  const base = "rounded-2xl p-8 space-y-4";
  const toneClass =
    tone === "danger" ? "bg-red-50" : "bg-gray-50";

  return (
    <section className={`${base} ${toneClass}`}>
      {title ? (
        <h3
          className={`text-xl font-bold ${
            tone === "danger" ? "text-red-700" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      ) : null}
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export type PriceRow = {
  item: string;
  unit: string;
  price: string;
  note?: string;
};

export function PriceTable({
  rows,
  caption,
}: {
  rows: PriceRow[];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-neutral-200 rounded-xl overflow-hidden text-left">
        {caption ? (
          <caption className="text-sm text-gray-600 text-left p-3">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 font-semibold border-b border-neutral-200">
              内容
            </th>
            <th className="p-3 font-semibold border-b border-neutral-200">
              単位
            </th>
            <th className="p-3 font-semibold border-b border-neutral-200">
              費用目安
            </th>
            <th className="p-3 font-semibold border-b border-neutral-200">
              補足
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={`${r.item}-${i}`}
              className="border-b last:border-b-0 border-neutral-200"
            >
              <td className="p-3 align-top">{r.item}</td>
              <td className="p-3 align-top whitespace-nowrap">{r.unit}</td>
              <td className="p-3 align-top whitespace-nowrap">{r.price}</td>
              <td className="p-3 align-top text-gray-700">
                {r.note ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}