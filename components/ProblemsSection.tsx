'use client';

import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const ProblemsSection = () => {
  const problems = [
    'ホームページやLPを作りたいけど、どこから手をつければいいか分からない',
    'チラシや動画を作りたいが、デザインのセンスに自信がない',
    '公式LINEを活用したいが、設定や運用が難しそう',
    'AIを使って業務効率化したいが、何から始めればいいか分からない',
    '売上や集客の数字を、どう管理すればいいか悩んでいる',
    '外注したら「作って終わり」で、その後のサポートがなかった',
    'IT・集客・数字管理…バラバラに依頼していて、全体が見えない',
  ];

  return (
    <section className="section-padding bg-secondary-lightgray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary">
            こんなお悩み、ありませんか?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <FiX className="text-red-500 text-2xl flex-shrink-0 mt-1" />
              <p className="text-lg text-secondary-darkgray">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-primary-orange">
            → 1つでも当てはまる方へ。
            <br className="md:hidden" />
            <span className="text-primary-navy">Sunny Partners</span>が、あなたの悩みを解決します。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;
