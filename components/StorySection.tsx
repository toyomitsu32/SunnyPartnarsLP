'use client';

import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-navy to-blue-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">創業の思い</h2>
          <p className="text-xl text-white/80">
            〜なぜ、Sunny Partnersを始めたのか〜
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 space-y-6 leading-relaxed text-lg">
            <p>
              私は、製造業で15年間働いてきました。
              生産管理・品質管理の現場で、毎日、納期に追われ、
              品質を守り、コストを管理する日々を過ごしていました。
            </p>

            <p>
              その後、IT企業に転職し、PM(プロジェクトマネージャー)として、
              システム開発プロジェクトに携わるようになりました。
            </p>

            <p className="font-bold text-primary-yellow">
              そこで気づいたことがあります。
            </p>

            <div className="pl-6 border-l-4 border-primary-orange space-y-2">
              <p className="font-bold text-xl">
                「現場を知らないシステムは、使われない」
              </p>
              <p className="font-bold text-xl">
                「全体を見ずに作られたツールは、成果につながらない」
              </p>
            </div>

            <p>
              多くの事業者が、ホームページを作り、チラシを作り、LINEを始める。
              でも、それぞれが「バラバラ」で、全体が見えていない。
              だから、成果につながらない。
            </p>

            <p>
              そして、外注先は「作って終わり」。
              その後のサポートがなく、困っている事業者をたくさん見てきました。
            </p>

            <div className="pl-6 border-l-4 border-primary-yellow space-y-2">
              <p className="font-bold text-xl">
                「もっと、事業者に寄り添い、全体を見渡した支援ができないか」
              </p>
              <p className="font-bold text-xl">
                「作って終わりではなく、伴走し続けるパートナーになれないか」
              </p>
            </div>

            <p>
              そんな思いから、Sunny Partnersを立ち上げました。
            </p>

            <div className="bg-white/20 rounded-lg p-6 my-8">
              <p className="text-2xl font-bold mb-4 text-primary-yellow">
                Sunny Partnersの「Sunny」は、太陽。
              </p>
              <p className="text-lg">
                太陽のように、あなたの事業を明るく照らし続けたい。
                <br />
                そして、「次のステージ」へと導きたい。
              </p>
              <p className="text-lg mt-4">
                そんな想いを込めて、この屋号をつけました。
              </p>
            </div>

            <p className="text-xl font-bold text-center">
              挑戦する事業者の皆さんが、次のステージに進むために。
              <br />
              私たちは、全力でサポートし続けます。
            </p>

            <p className="text-xl font-bold text-center">
              共に、歩んでいきましょう。
            </p>

            <div className="text-right mt-8 pt-8 border-t border-white/30">
              <p className="text-xl font-bold">Sunny Partners 代表</p>
              <p className="text-2xl font-bold mt-2">豊田 [お名前]</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
