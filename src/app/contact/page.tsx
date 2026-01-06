// =============================================
// src/app/contact/page.tsx
// =============================================
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
  company?: string;
  website?: string;
  _hp?: string; // honeypot
};

const PHONE_DISPLAY = "011-215-6432";
const PHONE_TEL = "0112156432";
const EMAIL = "happyyise0703@gmail.com";

const ADDRESS_LINES = [
  "北海工務店",
  "〒063-0061 北海道札幌市西区西町北14丁目1-15 ホクシンビル3A",
];

function isEmailLike(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    phone: "",
    subject: "お問い合わせ",
    message: "",
    consent: false,
    company: "",
    website: "",
    _hp: "",
  });

  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "success"; message: string }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const errors = useMemo(() => {
    const e: Partial<Record<keyof ContactPayload, string>> = {};
    if (!form.name.trim()) e.name = "お名前は必須です。";
    if (!form.email.trim()) e.email = "メールアドレスは必須です。";
    else if (!isEmailLike(form.email.trim())) e.email = "メールアドレスの形式が正しくありません。";
    if (!form.phone.trim()) e.phone = "電話番号は必須です。";
    if (!form.message.trim()) e.message = "お問い合わせ内容は必須です。";
    if (!form.consent) e.consent = "プライバシーポリシーへの同意が必要です。";
    return e;
  }, [form]);

  const canSubmit = useMemo(() => Object.keys(errors).length === 0, [errors]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) {
      setStatus({ state: "error", message: "入力内容をご確認ください。" });
      return;
    }

    setStatus({ state: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => null)) as null | { ok?: boolean; message?: string };
      if (!res.ok) {
        setStatus({ state: "error", message: data?.message ?? "送信に失敗しました。" });
        return;
      }

      setStatus({ state: "success", message: data?.message ?? "送信しました。担当よりご連絡いたします。" });
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "お問い合わせ",
        message: "",
        consent: false,
        company: "",
        website: "",
        _hp: "",
      });
    } catch {
      setStatus({ state: "error", message: "通信に失敗しました。時間を置いて再度お試しください。" });
    }
  }

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl py-16 sm:py-20">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-widest text-[#0cccb3] break-words">
              CONTACT
            </div>
            <h1 className="mt-4 text-xl sm:text-2xl font-bold">お問い合わせ</h1>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              メール・お電話・フォームよりお問い合わせいただけます。<br />
              内容を確認後、担当者より折り返しご連絡いたします。
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: Contact info */}
          <aside className="lg:col-span-5 space-y-6 min-w-0">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-bold">お電話</h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                お急ぎの方はお電話をご利用ください。
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-4 inline-flex items-center justify-center rounded-2xl bg-[#0cccb3] px-5 py-3 font-semibold text-white hover:opacity-80 transition w-full"
              >
                {PHONE_DISPLAY}
              </a>
            
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-bold">メール</h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                メールでのお問い合わせはこちら。
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-4 inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 font-semibold hover:opacity-80 transition w-full break-words"
              >
                {EMAIL}
              </a>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-bold">所在地</h2>
              <div className="mt-3 space-y-1 text-gray-700 text-sm leading-relaxed">
                {ADDRESS_LINES.map((l) => (
                  <div key={l} className="break-words">
                    {l}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 font-semibold text-white hover:opacity-80 transition w-full"
                >
                  Google マップで開く
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7 min-w-0">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-bold">フォームでお問い合わせ</h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                必須項目をご入力のうえ送信してください。
              </p>

              {status.state === "success" && (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 text-sm">
                  {status.message}
                </div>
              )}
              {status.state === "error" && (
                <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800 text-sm">
                  {status.message}
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-5">
                <div className="hidden">
                  <label>
                    website
                    <input
                      value={form._hp ?? ""}
                      onChange={(e) => setForm((p) => ({ ...p, _hp: e.target.value }))}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="お名前（必須）"
                    value={form.name}
                    onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    label="会社名（任意）"
                    value={form.company ?? ""}
                    onChange={(v) => setForm((p) => ({ ...p, company: v }))}
                    autoComplete="organization"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="メールアドレス（必須）"
                    value={form.email}
                    onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                    error={errors.email}
                    autoComplete="email"
                    inputMode="email"
                  />
                  <Field
                    label="電話番号（必須）"
                    value={form.phone}
                    onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                    error={errors.phone}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <SelectField
                  label="お問い合わせ種別"
                  value={form.subject}
                  onChange={(v) => setForm((p) => ({ ...p, subject: v }))}
                  options={[
                    "お問い合わせ",
                    "お見積もり依頼",
                    "採用について",
                    "その他",
                  ]}
                />

                <TextAreaField
                  label="お問い合わせ内容（必須）"
                  value={form.message}
                  onChange={(v) => setForm((p) => ({ ...p, message: v }))}
                  error={errors.message}
                />

                <div className="rounded-2xl border border-neutral-200 p-4">
                  <label className="flex gap-3 items-start">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4"
                      checked={form.consent}
                      onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      <Link href="/privacy" className="underline underline-offset-4">
                        プライバシーポリシー
                      </Link>
                      に同意します（必須）
                      {errors.consent && <span className="block mt-1 text-rose-600">{errors.consent}</span>}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status.state === "submitting"}
                  className={[
                    "w-full rounded-2xl px-6 py-4 font-semibold text-white transition",
                    "bg-[#0cccb3] hover:opacity-80",
                    status.state === "submitting" ? "opacity-60 cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {status.state === "submitting" ? "送信中..." : "送信する"}
                </button>

                <div className="text-xs text-gray-500 leading-relaxed">
                  ※内容によっては返信にお時間をいただく場合があります。<br />
                  ※営業目的のご連絡はご遠慮ください。
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className="min-w-0">
      <div className="text-sm font-semibold text-gray-800">{props.label}</div>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        autoComplete={props.autoComplete}
        inputMode={props.inputMode}
        className={[
          "mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none",
          "border-neutral-200 focus:border-[#0cccb3]",
        ].join(" ")}
      />
      {props.error && <div className="mt-2 text-xs text-rose-600">{props.error}</div>}
    </div>
  );
}

function SelectField(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="min-w-0">
      <div className="text-sm font-semibold text-gray-800">{props.label}</div>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-[#0cccb3]"
      >
        {props.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div className="min-w-0">
      <div className="text-sm font-semibold text-gray-800">{props.label}</div>
      <textarea
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        rows={7}
        className={[
          "mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none",
          "border-neutral-200 focus:border-[#0cccb3]",
        ].join(" ")}
      />
      {props.error && <div className="mt-2 text-xs text-rose-600">{props.error}</div>}
    </div>
  );
}
