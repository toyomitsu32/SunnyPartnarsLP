'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiHeart } from 'react-icons/fi';

const ProfileSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary">代表プロフィール</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-orange to-primary-yellow rounded-lg overflow-hidden shadow-xl">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center text-white text-8xl">
                    👤
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-bg rounded-full flex items-center justify-center text-white text-4xl shadow-lg">
                  ☀️
                </div>
              </div>
            </motion.div>

            {/* Profile Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-primary-navy mb-2">
                  代表 豊田 [お名前]
                </h3>
                <p className="text-xl text-gray-600 font-montserrat">
                  Toyoda [Name]
                </p>
              </div>

              <div className="space-y-6">
                {/* Career */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white">
                    <FiBriefcase className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-2">経歴</h4>
                    <p className="text-secondary-darkgray leading-relaxed">
                      製造業で15年間、生産管理・品質管理を経験。
                      「品質・コスト・納期(QCD)」を守り抜く現場で、
                      日々、お客様の信頼に応える仕事を続けてきました。
                      <br /><br />
                      その後、IT企業に転職し、PM(プロジェクトマネージャー)として、
                      システム開発プロジェクトを多数手掛ける。
                      <br /><br />
                      「現場とシステム、両方を知る実務家」として、
                      事業者の成長を全体設計の視点からサポートしています。
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white">
                    <FiAward className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-2">資格・スキル</h4>
                    <ul className="space-y-2 text-secondary-darkgray">
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">✓</span>
                        プロジェクトマネジメント経験(製造業・IT業界)
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">✓</span>
                        AI活用(ChatGPT、Gemini等)
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">✓</span>
                        Web制作、デザインツール活用
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">✓</span>
                        スプレッドシート、データ分析
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Passion */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white">
                    <FiHeart className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-2">想い</h4>
                    <p className="text-secondary-darkgray leading-relaxed">
                      挑戦する事業者の皆さんが、次のステージに進むために。
                      太陽のように、明るく照らし続けるパートナーでありたい。
                      そんな想いで、Sunny Partnersを運営しています。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
