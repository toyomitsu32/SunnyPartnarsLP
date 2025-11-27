'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'ITやAIに詳しくなくても、大丈夫ですか?',
      a: 'もちろんです!専門用語を使わず、分かりやすく説明します。「ITは苦手」という方こそ、安心してご相談ください。',
    },
    {
      q: '予算が限られているのですが…',
      a: 'ご予算に応じて、優先順位をつけた提案をいたします。「今やるべきこと」「後回しでもいいこと」を明確にし、段階的に進めることも可能です。',
    },
    {
      q: 'どれくらいの期間がかかりますか?',
      a: '内容により異なりますが、例えばランディングページ制作なら2〜4週間程度が目安です。お急ぎの場合は、スケジュール調整も可能ですので、ご相談ください。',
    },
    {
      q: '遠方でも対応可能ですか?',
      a: 'はい、オンラインでの打ち合わせも対応しております。Zoom・Google Meet等で、全国どこからでもご相談いただけます。',
    },
    {
      q: 'AI活用支援だけでも、お願いできますか?',
      a: 'はい、もちろんです!AI活用支援プランを単体でご依頼いただけます。ChatGPT等の業務活用を、実践的にサポートいたします。',
    },
    {
      q: '作った後のサポートは、どのような内容ですか?',
      a: '定期的な打ち合わせ(月1回程度)、改善提案、運用相談、トラブル対応など、継続的にサポートいたします。「困ったときに相談できるパートナー」として、ご活用ください。',
    },
    {
      q: 'デザインのイメージがないのですが…',
      a: 'ご安心ください。ヒアリングを通じて、お客様のイメージを引き出します。参考サイトやデザイン案を複数提示し、一緒に作り上げていきます。',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-secondary-lightgray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary">よくある質問</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary-lightgray transition-colors"
              >
                <span className="font-bold text-primary-navy pr-4">
                  Q: {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FiChevronDown className="text-2xl text-primary-orange" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-secondary-darkgray leading-relaxed border-t border-gray-200 pt-4">
                      <span className="font-bold text-primary-orange">A: </span>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
