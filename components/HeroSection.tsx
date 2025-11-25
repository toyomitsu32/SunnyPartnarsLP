'use client';

import { motion } from 'framer-motion';
import { FiGift, FiMail } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-50">
      {/* Background Pattern - 落ち着いたパターン */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 182, 39, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Subtle Decorative Circles - 控えめな装飾 */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-primary-yellow to-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Grid Pattern - プロフェッショナルな印象 */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Accent Sun Rays - 太陽の光線（控えめ） */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-[0.05]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-1/2 w-1 h-1/3 bg-gradient-to-b from-primary-orange to-transparent transform -translate-x-1/2 rotate-12"></div>
          <div className="absolute top-0 left-1/2 w-1 h-1/3 bg-gradient-to-b from-primary-yellow to-transparent transform -translate-x-1/2 -rotate-12"></div>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Sun Icon - 太陽のアイコン（控えめ） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 inline-block"
          >
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-5xl">☀️</span>
              </div>
            </div>
          </motion.div>

          {/* Main Catchcopy */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-navy mb-6 leading-tight drop-shadow-sm">
            挑戦する事業者の
            <br />
            <span className="text-6xl md:text-8xl bg-gradient-to-r from-primary-orange to-primary-yellow bg-clip-text text-transparent">
              「次のステージ」
            </span>
            を、
            <br />
            共に創る
          </h1>

          {/* Sub Catchcopy */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
            作って終わらない。
            <br />
            <span className="text-primary-orange">あなたの事業成長に、太陽のように照らし続けます。</span>
          </p>

          {/* Lead Text */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Web制作・販促ツール・公式LINE・AI活用・数字の見える化。
            <br className="hidden md:block" />
            全体を見渡した設計で、あなたの事業を次のステージへ導きます。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <FiGift className="mr-2 text-2xl" />
              無料相談＋特典をもらう
            </motion.a>

            <motion.a
              href="mailto:info@sunnypartners.example"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 bg-white border-2 border-primary-navy text-primary-navy font-bold text-lg rounded-xl shadow-md hover:bg-primary-navy hover:text-white transition-all duration-300"
            >
              <FiMail className="mr-2 text-2xl" />
              メールで相談する
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-gray-500 mb-2 font-medium tracking-wider">SCROLL</span>
          <div className="w-6 h-10 border-2 border-primary-orange rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary-orange rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
