'use client';

import { motion } from 'framer-motion';
import { FiGift, FiMail } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Catchcopy */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            挑戦する事業者の
            <br />
            <span className="text-6xl md:text-8xl">「次のステージ」</span>を、
            <br />
            共に創る
          </h1>

          {/* Sub Catchcopy */}
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
            作って終わらない。
            <br />
            あなたの事業成長に、太陽のように照らし続けます。
          </p>

          {/* Lead Text */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Web制作・販促ツール・公式LINE・AI活用・数字の見える化。
            <br className="hidden md:block" />
            全体を見渡した設計で、あなたの事業を次のステージへ導きます。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 bg-white text-primary-orange font-bold text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <FiGift className="mr-2 text-2xl" />
              無料相談＋特典をもらう
            </motion.a>

            <motion.a
              href="mailto:info@sunnypartners.example"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-primary-orange transition-all duration-300"
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
          className="text-white text-4xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
