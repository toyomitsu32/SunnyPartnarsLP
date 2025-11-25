'use client';

import { motion } from 'framer-motion';

const ReasonsSection = () => {
  const reasons = [
    {
      number: '1',
      title: '全体を見渡した提案',
      description:
        'Web制作、集客ツール、LINE、数字管理…バラバラに依頼していませんか？\n\nSunny Partnersは、「部分最適」ではなく「全体最適」を提案します。事業成長の全体像を描き、今やるべきことの優先順位を明確にします。',
    },
    {
      number: '2',
      title: 'AI活用で提案を高速化',
      description:
        'ChatGPT等のAIツールを活用し、提案資料の作成や情報収集を高速化。お客様のご相談に、スピーディーに対応します。\n\nまた、AI活用支援サービスでは、お客様自身がAIを活用できるよう、実践的な支援を提供します。',
    },
    {
      number: '3',
      title: '製造業15年 × IT企業PM経験',
      description:
        '代表の豊田は、製造業で15年間、生産管理・品質管理を経験。その後、IT企業でPM(プロジェクトマネージャー)として、システム開発プロジェクトを多数手掛けてきました。\n\n「現場」と「システム」、両方を知る実務家だからこそ、現実的で、実現可能な提案ができます。',
    },
    {
      number: '4',
      title: '品質・コスト・納期を守り抜く',
      description:
        '製造業で培った「品質・コスト・納期(QCD)」の考え方を、すべてのプロジェクトで徹底します。\n\n約束したことは、必ず守る。それが、Sunny Partnersの「確実実行」です。',
    },
  ];

  return (
    <section id="reasons" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary">
            Sunny Partnersが
            <br />
            選ばれる4つの理由
          </h2>
        </motion.div>

        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 p-8 bg-secondary-lightgray rounded-lg`}
            >
              <div className="flex-shrink-0">
                <div className="w-32 h-32 gradient-bg rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">
                    {reason.number}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                  {reason.title}
                </h3>
                <p className="text-secondary-darkgray leading-relaxed whitespace-pre-line">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
