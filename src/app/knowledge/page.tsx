// src/app/knowledge/page.tsx
import Link from "next/link";
import Image from "next/image";
import { knowledgeList } from "./data/knowledge.data";

export default function KnowledgePage() {
  return (
    <main>
      <section className="relative h-\[360px]">
        <Image
          src="/knowledge-hero.avif"
          alt="現代リフォームの基礎知識"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">現代リフォームの基礎知識</h1>
        </div>
      </section>

      <section className="text-center py-20 px-6">
        <p className="text-lg text-gray-600 mb-4">知ってお得、知らなきゃ損</p>
        <h2 className="text-3xl md:text-4xl font-bold">現代リフォームの基礎知識</h2>
      </section>

      <section className="max-w-5xl mx-auto px-6">
        {knowledgeList.map((item) => (
          <Link
            key={item.id}
            href={`/knowledge/${item.id}`}
            className="flex gap-8 items-center py-12 border-b border-neutral-200 hover:opacity-80 transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={240}
              height={160}
              className="object-cover"
            />
            <div>
              <div className="text-teal-500 text-xl font-bold mb-2">{item.id}</div>
              <h3 className="text-xl font-semibold leading-relaxed">{item.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}