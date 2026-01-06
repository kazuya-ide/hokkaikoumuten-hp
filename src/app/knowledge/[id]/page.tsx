// src/app/knowledge/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { KnowledgeItem } from "../data/knowledge.data";
import { knowledgeList } from "../data/knowledge.data";

import C01 from "../contents/01";
import C02 from "../contents/02";
import C03 from "../contents/03";
import C04 from "../contents/04";
import C05 from "../contents/05";
import C06 from "../contents/06";
import C07 from "../contents/07";
import C08 from "../contents/08";
import C09 from "../contents/09";
import C10 from "../contents/10";

type Id = KnowledgeItem["id"];
type Props = { params: Promise<{ id: Id }> };

const contentRegistry: Record<Id, React.ComponentType> = {
  "01": C01,
  "02": C02,
  "03": C03,
  "04": C04,
  "05": C05,
  "06": C06,
  "07": C07,
  "08": C08,
  "09": C09,
  "10": C10,
};

export const dynamicParams = false;

export function generateStaticParams(): { id: Id }[] {
  return knowledgeList.map((k) => ({ id: k.id }));
}

function getPrevNext(id: Id) {
  const index = knowledgeList.findIndex((k) => k.id === id);
  if (index === -1) return { prev: null, next: null, index: -1 };
  const prev = index > 0 ? knowledgeList[index - 1] : null;
  const next = index < knowledgeList.length - 1 ? knowledgeList[index + 1] : null;
  return { prev, next, index };
}

export default async function KnowledgeDetailPage({ params }: Props) {
  const { id } = await params;

  const item = knowledgeList.find((k) => k.id === id);
  if (!item) notFound();

  const Content = contentRegistry[id];
  if (!Content) notFound();

  const { prev, next, index } = getPrevNext(id);

  const otherArticles = knowledgeList.filter((k) => k.id !== id);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <Link className="underline" href="/knowledge">
            基礎知識
          </Link>
          <span>/</span>
          <span>
            {item.id}（{index + 1}/{knowledgeList.length}）
          </span>
        </div>

        <h1 className="text-3xl font-bold">{item.title}</h1>

        <Image
          src={item.image}
          alt={item.title}
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl object-cover"
          priority
        />
      </header>

      {/* Body */}
      <Content />

      {/* Nav: prev/next + back to list */}
      <section className="pt-8 border-t border-neutral-200 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <Link className="underline text-sm" href="/knowledge">
            ← 一覧へ戻る
          </Link>

          <div className="text-sm text-gray-500">
            {item.id} / {knowledgeList.length}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/knowledge/${prev.id}`}
              className="group rounded-2xl border border-neutral-200 p-5 hover:opacity-90 transition"
            >
              <div className="text-xs text-gray-500 mb-2">← 前の記事</div>
              <div className="font-semibold leading-relaxed">
                {prev.id}. {prev.title}
              </div>
            </Link>
          ) : (
            <div className="rounded-2xl border border-neutral-200 p-5 text-sm text-gray-400">
              ← 前の記事はありません
            </div>
          )}

          {next ? (
            <Link
              href={`/knowledge/${next.id}`}
              className="group rounded-2xl border border-neutral-200 p-5 hover:opacity-90 transition"
            >
              <div className="text-xs text-gray-500 mb-2 text-right">次の記事 →</div>
              <div className="font-semibold leading-relaxed text-right">
                {next.id}. {next.title}
              </div>
            </Link>
          ) : (
            <div className="rounded-2xl border border-neutral-200 p-5 text-sm text-gray-400 text-right">
              次の記事はありません →
            </div>
          )}
        </div>
      </section>

      {/* Other articles */}
      <section className="pt-4 space-y-4">
        <h2 className="text-xl font-bold">他の記事</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {otherArticles.map((a) => (
            <Link
              key={a.id}
              href={`/knowledge/${a.id}`}
              className="rounded-2xl border border-neutral-200 p-4 hover:opacity-90 transition"
            >
              <div className="text-sm text-gray-500 mb-1">{a.id}</div>
              <div className="font-semibold leading-relaxed">{a.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
