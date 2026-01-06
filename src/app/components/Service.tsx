import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function Service() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="Service" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <ServiceCard
          title="施工までの流れ"
          image="/service1.jpg"
          text="お問い合わせから引き渡しまでの流れをご紹介します"
          href="/flow"
        />
        <ServiceCard
          title="リフォームの豆知識"
          image="/service2.jpg"
          text="知っておきたいポイントをわかりやすく解説します"
          href="/knowledge"
        />
        <ServiceCard
          title="よくある質問"
          image="/service3.jpg"
          text="お客様から寄せられる質問にお答えします"
          href="/faq"
        />
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  image,
  text,
  href,
}: {
  title: string;
  image: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold transition-colors duration-300 group-hover:text-[#0cccb3]">
        {title}
      </h3>

      <p className="mt-2 text-base text-gray-600">
        {text}
      </p>
    </Link>
  );
}
