# 🌞 Sunny Partners - ランディングページ

挑戦する事業者の「次のステージ」を、共に創る

## 🎉 完成しました！

ランディングページが完成し、デプロイされています。

### 🔗 公開URL
**https://3000-ia6rdgefnsldmiaa25xvw-2e1b9533.sandbox.novita.ai**

## 📋 実装内容

### ✅ 実装済み機能

1. **11セクション完全実装**
   - ヒーローセクション（ファーストビュー）
   - お悩みセクション（共感）
   - ソリューション提示
   - サービス詳細（6つのサービス）
   - 選ばれる理由（4つの強み）
   - 創業の思い（ストーリー）
   - サービスプラン・料金（4つのプラン）
   - ご相談の流れ（4ステップ）
   - よくある質問（FAQ・アコーディオン式）
   - 代表プロフィール
   - CTA（最終アクション・特典付き）

2. **デザイン仕様**
   - カラーパレット：オレンジ(#FF6B35)、イエロー(#FFB627)、ネイビー(#1B3A6D)
   - グラデーション効果
   - 太陽モチーフのアイコン・デザイン
   - レスポンシブ対応（PC/タブレット/スマホ）

3. **UX機能**
   - 固定ヘッダー（スクロール時に透明→白）
   - スムーズスクロール（アンカーリンク）
   - アニメーション（Framer Motion）
   - FAQアコーディオン（開閉式）
   - モバイルメニュー

4. **SEO最適化**
   - メタタグ完備
   - OGP設定
   - セマンティックHTML
   - パフォーマンス最適化

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: React Icons

## 📝 カスタマイズ方法

### 1. 基本情報の変更

以下のファイルで基本情報を変更できます：

#### 代表者名の変更
- `components/StorySection.tsx` - 最後の署名部分
- `components/ProfileSection.tsx` - プロフィール部分
- `components/Footer.tsx` - フッター部分

```tsx
// 変更箇所の例
<p className="text-2xl font-bold mt-2">豊田 太郎</p>
```

#### 連絡先情報の変更
- `components/HeroSection.tsx` - ヒーローのCTAボタン
- `components/CTASection.tsx` - 最終CTAボタン
- `components/Footer.tsx` - フッターの連絡先

```tsx
// メールアドレスの変更
href="mailto:info@sunnypartners.jp"

// 公式LINEのURLの変更
href="https://line.me/R/ti/p/@your-line-id"
```

### 2. カラーの変更

`tailwind.config.ts` でカラーパレットを変更：

```typescript
colors: {
  primary: {
    orange: '#FF6B35',  // メインオレンジ
    yellow: '#FFB627',  // メインイエロー
    navy: '#1B3A6D',    // ネイビー
  },
}
```

### 3. テキスト内容の変更

各セクションのコンポーネントファイルで直接編集：

- `components/HeroSection.tsx` - キャッチコピー
- `components/ProblemsSection.tsx` - お悩みリスト
- `components/ServicesSection.tsx` - サービス内容
- など

### 4. 画像の追加

現在は絵文字とプレースホルダーを使用していますが、実際の画像に変更できます：

#### ロゴ画像
```tsx
// components/Header.tsx
<img src="/logo.png" alt="Sunny Partners" />
```

#### 代表者写真
```tsx
// components/ProfileSection.tsx
<img src="/profile.jpg" alt="代表 豊田" />
```

画像は `public/` フォルダに配置してください。

## 🚀 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド（本番用）
npm run build

# 本番サーバー起動
npm run start

# Lint実行
npm run lint
```

## 📦 本番デプロイ

### Vercel（推奨）

1. GitHubにコードをプッシュ
2. [Vercel](https://vercel.com)でインポート
3. 自動デプロイ完了！

### その他のホスティング

- **Netlify**: 同様に簡単デプロイ
- **レンタルサーバー**: ビルド後の `.next` フォルダをアップロード

## 📄 必要な追加ページ

以下のページを追加することを推奨します：

1. **プライバシーポリシー** (`app/privacy/page.tsx`)
2. **特定商取引法に基づく表記** (`app/terms/page.tsx`)

これらはフッターにリンクが設置されています。

## 🎨 デザインのポイント

- **太陽モチーフ**: Sunny Partnersの理念を表現
- **オレンジ×イエロー**: 温かみと前向きさ
- **ネイビー**: 信頼感とプロフェッショナル
- **グラデーション**: 成長と変化を象徴

## 📱 レスポンシブ対応

- **PC**: 1200px以上
- **タブレット**: 768px～1199px
- **スマホ**: ～767px

全てのセクションで最適化されています。

## 🔧 トラブルシューティング

### ビルドエラーが出る場合

```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
```

### 型エラーが出る場合

```bash
# TypeScriptの型チェック
npx tsc --noEmit
```

## 📞 サポート

ご不明な点がございましたら、お気軽にお問い合わせください。

---

**Sunny Partners**
代表: 豊田 [お名前]

🌐 https://sunnypartners.example
📧 info@sunnypartners.example
💬 [公式LINE]

---

© 2025 Sunny Partners. All Rights Reserved.
