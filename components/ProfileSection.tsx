'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiHeart } from 'react-icons/fi';
import Image from 'next/image';

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
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-xl relative">
                  {/* Placeholder for profile image - Replace with actual image */}
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop"
                    alt="代表プロフィール写真"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                  {/* Replace above src with: /images/profile.jpg */}
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-orange to-primary-yellow rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <FiAward className="text-3xl text-white" />
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
                      東京理科大学 理工学部 経営工学科を卒業後、大手製造メーカーに入社。
                      半導体製造装置の市場サポート部門で、VBAとデータベーススキルを掛け合わせた業務改善により、入社2年目で事業部長賞を受賞。
                      <br /><br />
                      その後、技術支援・プロジェクトマネジメントに従事。
                      特に印象的だったのは、大手電機メーカーとの3年間の共同プロジェクト。
                      装置の故障ゼロを目指し、アジャイル体制で開発チームを率い、100社が集う報告会で最優秀賞を受賞。
                      この経験が、今の「全体を見渡した設計力」の原点です。
                      <br /><br />
                      その後、ITベンチャーに転職。インフラ構築を経験し、現在は企業でマネージャーとして、コンサル支援やプロジェクト推進を担当。
                      <br /><br />
                      大手企業での15年、ベンチャーでの挑戦。両方を経験したからこそ、「窮屈なルールに縛られず、スピード感を持って成果を出す」ことの大切さを実感しています。
                      そして今、この経験を活かし、挑戦する事業者の皆様を全力でサポートしたいと考えています。
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white">
                    <FiAward className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-3">保有資格</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-secondary-darkgray mb-4">
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2 font-bold">✓</span>
                        データベーススペシャリスト
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2 font-bold">✓</span>
                        ネットワークスペシャリスト
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2 font-bold">✓</span>
                        Google Cloud Associate
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2 font-bold">✓</span>
                        日商簿記2級
                      </li>
                    </ul>
                    <h4 className="font-bold text-primary-navy mb-3 mt-4">主なスキル・経験</h4>
                    <ul className="space-y-2 text-secondary-darkgray">
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">•</span>
                        プロジェクトマネジメント（製造業・IT業界で15年以上）
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">•</span>
                        クラウドインフラ設計・構築（Google Cloud Platform）
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">•</span>
                        データベース設計・最適化、ネットワーク構築
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">•</span>
                        AI活用支援（ChatGPT、Gemini等の業務導入）
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary-orange mr-2">•</span>
                        Web制作・デザインツール、データ分析・可視化
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
