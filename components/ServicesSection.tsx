'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiTrendingUp, FiMessageCircle, FiBarChart2, FiCpu, FiHeart } from 'react-icons/fi';

const ServicesSection = () => {
  const services = [
    {
      icon: <FiGlobe className="text-5xl" />,
      emoji: '🌐',
      title: 'Web制作',
      description:
        'ランディングページ(LP)・ホームページを制作します。デザインだけでなく、「誰に」「何を」「どう伝えるか」を設計し、成果につながるWebサイトを作ります。',
      forWhom: [
        '初めてWebサイトを作る方',
        '既存サイトのリニューアルを検討中の方',
        '「見た目」だけでなく「成果」を重視したい方',
      ],
    },
    {
      icon: <FiTrendingUp className="text-5xl" />,
      emoji: '📢',
      title: '販促ツール制作',
      description:
        'チラシ・パンフレット・動画など、集客のためのツールを制作します。ターゲットに響くデザインとメッセージで、確実に成果を生み出します。',
      forWhom: [
        'イベントや交流会で配布する資料が欲しい方',
        '店舗やサービスの認知を広げたい方',
        '動画で商品・サービスを分かりやすく伝えたい方',
      ],
    },
    {
      icon: <FiMessageCircle className="text-5xl" />,
      emoji: '💬',
      title: '公式LINE構築',
      description:
        'お客様との関係づくりに欠かせない、公式LINEを構築します。自動応答・リッチメニュー・ステップ配信など、運用しやすい設計でサポートします。',
      forWhom: [
        'お客様との継続的な関係を作りたい方',
        '予約や問い合わせをLINEで受け付けたい方',
        '定期的な情報発信で、リピーターを増やしたい方',
      ],
    },
    {
      icon: <FiBarChart2 className="text-5xl" />,
      emoji: '📊',
      title: '数字の見える化',
      description:
        '売上・集客・KPIなど、事業の数字をスプレッドシートで管理できるよう支援します。「何の数字を、どう見ればいいか」を分かりやすく設計します。',
      forWhom: [
        '売上や集客の数字を、どう管理すればいいか分からない方',
        'Excel・スプレッドシートを活用したい方',
        'データをもとに、改善策を考えたい方',
      ],
    },
    {
      icon: <FiCpu className="text-5xl" />,
      emoji: '🤖',
      title: 'AI活用支援・教育',
      description:
        'ChatGPT・Gemini等のAIツールを、業務に活用する方法を支援します。社内向けの教育・研修から、継続的なフォローアップまで対応します。',
      forWhom: [
        'AIを使ってみたいが、何から始めればいいか分からない方',
        'スタッフにAIを使ってほしいが、教え方が分からない方',
        '業務効率化のために、AIを本格導入したい方',
      ],
    },
    {
      icon: <FiHeart className="text-5xl" />,
      emoji: '🤝',
      title: '運用伴走サポート',
      description:
        '「作って終わり」ではありません。納品後も定期的にサポートし、改善提案や運用支援を継続します。',
      forWhom: [
        '作った後も、継続的にサポートしてほしい方',
        '定期的に改善提案を受けたい方',
        '「相談できるパートナー」が欲しい方',
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary-lightgray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary">
            Sunny Partnersが提供する
            <br />
            6つのサービス
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{service.emoji}</div>
                <h3 className="text-2xl font-bold text-primary-navy">
                  {service.title}
                </h3>
              </div>

              <p className="text-secondary-darkgray leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm font-bold text-primary-orange mb-3">
                  こんな方におすすめ
                </p>
                <ul className="space-y-2">
                  {service.forWhom.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-orange mr-2 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-sm text-secondary-darkgray">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
