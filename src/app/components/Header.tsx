// src/components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  variant?: "primary";
};

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/", label: "ホーム" },
      { href: "/about", label: "私たちについて" },
      { href: "/flow", label: "施工の流れ" },
      { href: "/faq", label: "よくある質問" },
      { href: "/recruit", label: "採用情報" },
      { href: "/contact", label: "お問合せ", variant: "primary" },
    ],
    []
  );

  const openMenu = () => {
    lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    requestAnimationFrame(() => lastActiveElementRef.current?.focus?.());
  };

  // ルート変わったら閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // 開いてる間は背景スクロール禁止
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Escで閉じる + 初期フォーカス
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => closeBtnRef.current?.focus());
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // 簡易フォーカストラップ
  useEffect(() => {
    if (!isOpen) return;

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;

      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm border-b border-neutral-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* ロゴ */}
        <Link href="/" className="flex items-center h-full shrink-0" aria-label="北海工務店 ホームへ">
          <div className="relative h-12 w-[180px] sm:h-14 sm:w-[220px]">
            <Image src="/logo.jpg" alt="北海工務店" fill priority className="object-contain" />
          </div>
        </Link>

        {/* PCナビ */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems
            .filter((i) => i.variant !== "primary")
            .map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#0cccb3] transition">
                {item.label}
              </Link>
            ))}

          <Link
            href="/contact"
            className="rounded bg-[#0cccb3] px-5 py-2 text-white hover:opacity-80 transition"
          >
            お問合せ
          </Link>
        </nav>

        {/* スマホ：ハンバーガー */}
        <button
          type="button"
          onClick={openMenu}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-sm hover:opacity-80 transition"
          aria-label="メニューを開く"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* スマホ：オーバーレイ + 右50%ドロワー */}
      <div
        className={[
          "md:hidden",
          "fixed inset-0 z-[60]",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        {/* オーバーレイ（背景ぼかし無し） */}
        <button
          type="button"
          className={[
            "absolute inset-0",
            "bg-black/45",
            "transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={closeMenu}
          aria-label="メニューを閉じる"
          tabIndex={isOpen ? 0 : -1}
        />

        {/* ドロワー：右50% */}
        <div
          id="mobile-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          className={[
            "absolute right-0 top-0 h-full",
            "w-1/2 min-w-[220px]", // 右50%（小さすぎ防止で最低幅だけ）
            "bg-white shadow-2xl",
            "transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full",
            "flex flex-col",
          ].join(" ")}
        >
          {/* ヘッダー */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200">
            <div className="leading-tight">
              <div className="text-[11px] tracking-widest text-neutral-500">MENU</div>
              <div className="font-bold text-neutral-900">北海工務店</div>
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 hover:opacity-80 transition"
              aria-label="閉じる"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* メニュー本体（縦に長く / スクロール可） */}
          <div className="px-4 py-4 flex-1 overflow-y-auto">
            <div className="space-y-2">
              {navItems
                .filter((i) => i.variant !== "primary")
                .map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={[
                        "flex items-center justify-between rounded-2xl px-4 py-4",
                        "border border-neutral-200 bg-white",
                        "hover:bg-neutral-50 transition",
                        isActive ? "ring-2 ring-[#0cccb3]/35 border-[#0cccb3]/35" : "",
                      ].join(" ")}
                    >
                      <span className="font-semibold text-neutral-900">{item.label}</span>
                      <span className="text-neutral-400" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
            </div>

            {/* CTA（必要なら残す。要らないならこのブロックごと消してOK） */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#0cccb3] px-4 py-4 font-semibold text-white hover:opacity-80 transition"
            >
              お問合せする
            </Link>
          </div>

          {/* ✅ フッター（営業時間など）は削除 */}
        </div>
      </div>
    </header>
  );
}
