'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGift, FiMail, FiArrowRight, FiTrendingUp, FiTarget, FiAward } from 'react-icons/fi';
import { useRef } from 'react';
import Image from 'next/image';

const HeroSectionAward = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-yellow-50/30">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255, 107, 53, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ 
          background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)',
          y: y
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ 
          background: 'radial-gradient(circle, #FFB627 0%, transparent 70%)',
          y: y
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-orange rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container-custom relative z-10 pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-navy mb-6 leading-[1.15] tracking-tight">
                挑戦する事業者の
                <span className="block mt-3 text-shimmer">
                  「次のステージ」
                </span>
                <span className="block mt-3">
                  を、共に創る
                </span>
              </h1>

              {/* Sub Heading */}
              <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
                作って終わらない。
              </p>
              <p className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-primary-orange to-primary-yellow bg-clip-text text-transparent font-bold">
                あなたの事業成長に、太陽のように照らし続けます。
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3 mb-12">
                {['Web制作', '販促ツール', '公式LINE', 'AI活用', '数字の見える化'].map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-navy shadow-md"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#cta"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-yellow to-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <FiGift className="mr-2 text-2xl relative z-10" />
                  <span className="relative z-10">無料相談＋特典をもらう</span>
                  <FiArrowRight className="ml-2 text-xl relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="mailto:info@sunnypartners.example"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-5 bg-white border-2 border-primary-navy text-primary-navy font-bold text-lg rounded-2xl shadow-lg hover:bg-primary-navy hover:text-white transition-all duration-500"
                >
                  <FiMail className="mr-2 text-2xl" />
                  メールで相談する
                </motion.a>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {/* 3D Card Stack */}
              <div className="relative h-[600px]">
                {[
                  {
                    id: 3,
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                    alt: 'データ分析ダッシュボード'
                  },
                  {
                    id: 2,
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                    alt: 'グラフとデータビジュアライゼーション'
                  },
                  {
                    id: 1,
                    image: null,
                    alt: 'メインカード'
                  }
                ].map((card) => (
                  <motion.div
                    key={card.id}
                    className="absolute inset-0 glass-card overflow-hidden"
                    style={{
                      transform: `translateY(${(3 - card.id) * 20}px) translateX(${(3 - card.id) * 20}px)`,
                      zIndex: card.id
                    }}
                    animate={{
                      y: [(3 - card.id) * 20, (3 - card.id) * 20 + 10, (3 - card.id) * 20],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: card.id * 0.3
                    }}
                  >
                    {card.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={card.image}
                          alt={card.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover opacity-60"
                          priority={card.id === 1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-primary-yellow/10"></div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col justify-between p-8">
                        <div>
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-orange to-primary-yellow flex items-center justify-center mb-6 shadow-xl">
                            <FiTrendingUp className="text-4xl text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-navy mb-4">
                            全体を見渡した設計
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            IT活用・集客・数字の見える化を、全体を見渡しながら設計し、あなたの事業を次のステージへ。
                          </p>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                          {[
                            { label: '実績', value: '100+', icon: FiAward },
                            { label: '満足度', value: '99%', icon: FiTarget },
                            { label: '継続率', value: '95%', icon: FiTrendingUp }
                          ].map((stat) => (
                            <div key={stat.label} className="text-center">
                              <div className="text-3xl font-black bg-gradient-to-r from-primary-orange to-primary-yellow bg-clip-text text-transparent">
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                                <stat.icon className="w-3 h-3" />
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs text-gray-500 mb-2 font-semibold tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-primary-orange rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-2 bg-primary-orange rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSectionAward;
