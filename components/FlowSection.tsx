'use client';

import { motion } from 'framer-motion';
import { FiMessageCircle, FiFileText, FiPlay, FiTrendingUp } from 'react-icons/fi';

const FlowSection = () => {
  const steps = [
    {
      step: 'STEP 1',
      icon: <FiMessageCircle className="text-5xl" />,
      title: '無料相談(60分)',
      description:
        'まずは、お悩みや目標をお聞かせください。オンライン・対面、どちらでも対応可能です。この段階では、費用は一切かかりません。',
    },
    {
      step: 'STEP 2',
      icon: <FiFileText className="text-5xl" />,
      title: '提案・お見積り',
      description:
        'お悩みをお聞きした上で、全体設計を踏まえた提案書を作成します。お見積りも同時に提示し、ご納得いただけるまで調整します。',
    },
    {
      step: 'STEP 3',
      icon: <FiPlay className="text-5xl" />,
      title: 'ご契約・制作開始',
      description:
        '提案内容にご納得いただけたら、ご契約。制作・実行を開始します。定期的に進捗をご報告しながら、一緒に進めていきます。',
    },
    {
      step: 'STEP 4',
      icon: <FiTrendingUp className="text-5xl" />,
      title: '納品・運用開始・継続伴走',
      description:
        '成果物を納品し、運用を開始します。「作って終わり」ではなく、その後も継続的にサポート。改善提案や運用支援を通じて、共に成長していきます。',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary">ご相談の流れ</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-orange to-primary-yellow transform -translate-x-1/2"></div>

          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className="w-full md:w-5/12 p-6 bg-secondary-lightgray rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-sm font-bold text-primary-orange mb-2">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-primary-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-secondary-darkgray leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Center Icon */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-24 h-24 gradient-bg rounded-full items-center justify-center text-white shadow-xl">
                {item.icon}
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
