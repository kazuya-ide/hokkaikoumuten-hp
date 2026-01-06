import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* ロゴ・会社情報 */}
          <div>
            <Image
              src="/logo.jpg" // public/logo.png
              alt="北海工務店"
              width={160}
              height={40}
            />

            <address className="mt-6 not-italic text-sm leading-relaxed">
              <p>〒063-0061</p>
              <p>北海道札幌市西区西町北14丁目</p>
              <p>1-15 ホクシンビル 3F</p>
              <p className="mt-2">
                TEL：
                <a
                  href="tel:0112156432"
                  className="hover:underline"
                >
                  011-215-6432
                </a>
              </p>
            </address>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="mb-4 text-sm font-bold">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">ホーム</Link></li>
              <li><Link href="/about">私たちについて</Link></li>
              <li><Link href="/company">会社概要</Link></li>
              <li><Link href="/flow">施工の流れ</Link></li>
              <li><Link href="/faq">よくある質問</Link></li>
              <li><Link href="/knowledge">現代リフォームの基礎知識</Link></li>
              <li><Link href="/recruit">採用情報</Link></li>
            </ul>
          </div>

          {/* ポリシー */}
          <div>
            <h4 className="mb-4 text-sm font-bold">ポリシー</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">プライバシーポリシー</Link></li>
              <li><Link href="/disclaimer">免責事項</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-sm font-bold">お問い合わせ</h4>
            <Link
              href="/contact"
              className="inline-block rounded bg-[#0cccb3] px-6 py-3 text-sm text-white hover:opacity-80"
            >
              無料相談はこちら
            </Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-16 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} 北海工務店 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
