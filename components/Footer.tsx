'use client';

import { FiMail, FiGlobe, FiMessageCircle } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white text-2xl">☀️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sunny Partners</h3>
                <p className="text-sm text-white/70">サニーパートナーズ</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-sm mb-4">
              挑戦する事業者の「次のステージ」を、共に創る。
              <br />
              作って終わらず、伴走し続けるパートナー。
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-white/70">代表:豊田 光晴</p>
              <p className="text-white/70">
                営業時間:平日 9:00〜18:00
                <br />
                (土日祝 応相談)
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@sunnypartners.example"
                className="flex items-center space-x-3 text-white/80 hover:text-primary-yellow transition-colors"
              >
                <FiMail className="text-xl" />
                <span className="text-sm">info@sunnypartners.example</span>
              </a>
              <a
                href="https://sunnypartners.example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-primary-yellow transition-colors"
              >
                <FiGlobe className="text-xl" />
                <span className="text-sm">sunnypartners.example</span>
              </a>
              <a
                href="https://line.me/R/ti/p/@your-line-id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-primary-yellow transition-colors"
              >
                <FiMessageCircle className="text-xl" />
                <span className="text-sm">公式LINE</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">サイトリンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-primary-yellow transition-colors"
                >
                  サービス
                </a>
              </li>
              <li>
                <a
                  href="#reasons"
                  className="text-white/80 hover:text-primary-yellow transition-colors"
                >
                  選ばれる理由
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/80 hover:text-primary-yellow transition-colors"
                >
                  料金
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white/80 hover:text-primary-yellow transition-colors"
                >
                  よくある質問
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-white/80 hover:text-primary-yellow transition-colors"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-white/80 hover:text-primary-yellow transition-colors"
                >
                  特定商取引法に基づく表記
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-sm text-white/70">Follow Us:</span>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-yellow transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-yellow transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-yellow transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>

            <p className="text-sm text-white/70">
              © 2025 Sunny Partners. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
