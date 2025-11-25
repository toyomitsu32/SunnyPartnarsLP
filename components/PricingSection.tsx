'use client';

import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const PricingSection = () => {
  const plans = [
    {
      name: 'スタートプラン',
      price: '¥150,000〜',
      features: [
        'ランディングページ制作',
        '公式LINE基本設定',
      ],
      recommended: 'まずは小さく始めたい方、初めてWebツールを導入する方',
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'スタンダードプラン',
      price: '¥300,000〜',
      features: [
        'ランディングページ制作',
        '公式LINE構築(リッチメニュー・自動応答含む)',
        'チラシ制作',
        '数字の見える化(スプレッドシート設計)',
      ],
      recommended: 'しっかりとした基盤を作りたい方、複数のツールを連携させたい方',
      color: 'from-primary-orange to-primary-yellow',
      featured: true,
    },
    {
      name: '伴走プラン',
      price: '¥450,000〜',
      features: [
        'スタンダードプランの全内容',
        '3ヶ月間の運用サポート',
        'AI活用支援(ChatGPT等の業務活用支援)',
        '月次レポート・改善提案',
      ],
      recommended: '継続的にサポートしてほしい方、運用まで安心して任せたい方',
      color: 'from-purple-400 to-purple-600',
    },
    {
      name: 'AI活用支援プラン',
      price: '¥100,000〜',
      features: [
        'ChatGPT等のAIツール導入支援',
        '業務活用のための研修・ワークショップ',
        '社内向けマニュアル作成',
        '継続的なフォローアップ',
      ],
      recommended: 'AI活用を学びたい方、社内でAIを本格導入したい方',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary-lightgray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary">サービスプラン・料金</h2>
          <p className="text-lg text-secondary-darkgray mt-4 max-w-3xl mx-auto">
            ご予算や状況に応じて、柔軟にカスタマイズ可能です。
            <br />
            まずは無料相談で、お悩みをお聞かせください。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.featured ? 'ring-4 ring-primary-orange' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-orange to-primary-yellow text-white px-6 py-2 text-sm font-bold">
                  おすすめ
                </div>
              )}

              <div className={`h-3 bg-gradient-to-r ${plan.color}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary-navy mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold gradient-bg bg-clip-text text-transparent mb-6">
                  {plan.price}
                </p>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <FiCheck className="text-primary-orange text-xl mr-3 flex-shrink-0 mt-1" />
                      <span className="text-secondary-darkgray">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-bold text-primary-orange mb-2">
                    こんな方におすすめ
                  </p>
                  <p className="text-sm text-secondary-darkgray">
                    {plan.recommended}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-6 rounded-lg text-center space-y-2"
        >
          <p className="text-sm text-secondary-darkgray">
            ※上記は目安料金です。お客様の状況に応じて、柔軟に対応いたします。
          </p>
          <p className="text-sm text-secondary-darkgray">
            ※分割払いのご相談も承ります。
          </p>
          <p className="text-sm text-secondary-darkgray">
            ※単体サービス(Web制作のみ、チラシ制作のみ等)のご依頼も可能です。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
