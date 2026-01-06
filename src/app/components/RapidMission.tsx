"use client";

import { motion } from "framer-motion";

export default function RapidMission() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* 背景 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/kitchen.jpg)" }}
      />
      <div className="absolute inset-0 bg-white/80" />

      {/* タイトル（固定） */}
      <div className="sticky top-0 z-20 bg-[#0cccb3]/80 py-12">
        <h2 className="text-center text-4xl font-bold text-white tracking-wide">
          Rapid &amp; Mission
        </h2>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-40 space-y-64">

        {/* 上：左 */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl rounded-[48px] border-4 border-gray-500 bg-white/90 p-12"
        >
          <h3 className="mb-6 text-xl font-bold">地域密着型</h3>
          <p className="text-sm leading-relaxed">
            札幌市を中心に活動を行っているため迅速な対応を可能とします。
            緊急時には被害箇所をより早く修理補修する事により二次災害を防ぎます。
            職人は札幌の四季を熟知しているため様々なケースにも対応できます。
          </p>
        </motion.div>

        {/* 下：右 */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl rounded-[48px] border-4 border-gray-500 bg-white/90 p-12 ml-auto"
        >
          <h3 className="mb-6 text-xl font-bold">2050問題</h3>
          <p className="text-sm leading-relaxed">
            温暖化が進むと2050年には破滅的な環境汚染や自然災害が起こると予測されています。
            私たちは来世に繋ぐ未来をスローガンに温暖化防止対策を目標に日々の活動を行っています。
          </p>
        </motion.div>

      </div>
    </section>
  );
}
