'use client';

import { motion } from 'framer-motion';
import { FiSearch, FiUsers, FiCpu } from 'react-icons/fi';

const SolutionSection = () => {
  const features = [
    {
      icon: <FiSearch className="text-4xl" />,
      title: '全体を見渡した設計',
      description: '部分ではなく、成長の全体像を描きます。',
    },
    {
      icon: <FiUsers className="text-4xl" />,
      title: '作って終わらず、伴走',
      description: '納品後も継続的にサポートし続けます。',
    },
    {
      icon: <FiCpu className="text-4xl" />,
      title: 'AI活用で最適解を提案',
      description: '最新技術で、スピーディーに最適な提案を実現します。',
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
          className="text-center mb-12"
        >
          <h2 className="heading-secondary">
            Sunny Partnersは、
            <br />
            事業成長の「全体設計」をサポートします
          </h2>

          <div className="max-w-3xl mx-auto mt-8 space-y-4">
            <p className="text-lg text-secondary-darkgray leading-relaxed">
              Web制作だけ。チラシ制作だけ。LINE構築だけ。
              <br />
              それでは、事業は次のステージに進めません。
            </p>
            <p className="text-lg text-secondary-darkgray leading-relaxed font-medium">
              私たちは、「部分最適」ではなく「全体最適」を提案します。
            </p>
            <p className="text-lg text-secondary-darkgray leading-relaxed">
              IT活用・集客・数字の見える化を、全体を見渡しながら設計し、
              <br className="hidden md:block" />
              あなたの事業を、確実に次のステージへ導きます。
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-8 bg-secondary-lightgray rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 gradient-bg rounded-full text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">
                {feature.title}
              </h3>
              <p className="text-secondary-darkgray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
