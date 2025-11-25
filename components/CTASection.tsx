'use client';

import { motion } from 'framer-motion';
import { FiGift, FiMail, FiCheckCircle } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section id="cta" className="section-padding gradient-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            あなたの「次のステージ」を、
            <br />
            共に創りましょう
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            まずは無料相談から。
            <br />
            お悩みをお聞かせください。
          </p>
        </motion.div>

        {/* Special Benefits Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12 bg-white rounded-lg p-8 shadow-2xl"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-full mb-4">
              <FiGift className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary-navy mb-2">
              LINE登録で、今すぐもらえる!
            </h3>
            <p className="text-primary-orange font-bold text-lg">
              無料プレゼント
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start p-4 bg-secondary-lightgray rounded-lg">
              <FiCheckCircle className="text-primary-orange text-2xl mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-primary-navy mb-1">
                  集客導線チェックシート
                </h4>
                <p className="text-sm text-secondary-darkgray">
                  お客様がどこで迷っているか、すぐに分かる!
                </p>
              </div>
            </div>

            <div className="text-center text-primary-navy font-bold">または</div>

            <div className="flex items-start p-4 bg-secondary-lightgray rounded-lg">
              <FiCheckCircle className="text-primary-orange text-2xl mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-primary-navy mb-1">
                  売上管理かんたんテンプレート
                </h4>
                <p className="text-sm text-secondary-darkgray">
                  数字が苦手でも大丈夫!コピーして使えるテンプレート
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto"
        >
          <motion.a
            href="https://line.me/R/ti/p/@your-line-id"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-6 bg-white text-primary-orange font-bold text-xl rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <FiGift className="mr-3 text-3xl" />
            <div className="text-left">
              <div className="text-sm opacity-80">公式LINEで</div>
              <div>無料相談＋特典をもらう</div>
            </div>
          </motion.a>

          <motion.a
            href="mailto:info@sunnypartners.example"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-6 bg-transparent border-2 border-white text-white font-bold text-xl rounded-lg hover:bg-white hover:text-primary-orange transition-all duration-300"
          >
            <FiMail className="mr-3 text-3xl" />
            メールで相談する
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/80 mt-8 text-sm"
        >
          ※無料相談は、オンライン・対面どちらでも対応可能です
          <br />
          ※しつこい営業は一切ございません
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
