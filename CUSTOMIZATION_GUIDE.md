# 🎨 Sunny Partners カスタマイズガイド

このガイドでは、ランディングページを簡単にカスタマイズする方法を説明します。

## 📝 基本情報の変更

### 1. 代表者名を変更する

以下の3つのファイルで `[お名前]` を実際の名前に変更してください。

#### ファイル: `components/StorySection.tsx`
```tsx
// 156行目あたり
<p className="text-2xl font-bold mt-2">豊田 太郎</p>
```

#### ファイル: `components/ProfileSection.tsx`
```tsx
// 40行目あたり
<h3 className="text-3xl font-bold text-primary-navy mb-2">
  代表 豊田 太郎
</h3>
<p className="text-xl text-gray-600 font-montserrat">
  Toyoda Taro
</p>
```

#### ファイル: `components/Footer.tsx`
```tsx
// 33行目あたり
<p className="text-white/70">代表:豊田 太郎</p>
```

### 2. 連絡先情報を変更する

#### メールアドレスの変更

**変更対象ファイル:**
- `components/HeroSection.tsx` (62行目あたり)
- `components/CTASection.tsx` (139行目あたり)
- `components/Footer.tsx` (50行目あたり)

```tsx
// 変更前
href="mailto:info@sunnypartners.example"

// 変更後（例）
href="mailto:contact@sunnypartners.jp"
```

#### 公式LINEのURLを変更

**変更対象ファイル:**
- `components/HeroSection.tsx` (48行目あたり)
- `components/CTASection.tsx` (125行目あたり)
- `components/Footer.tsx` (64行目あたり)

```tsx
// 変更前
href="https://line.me/R/ti/p/@your-line-id"

// 変更後（例）
href="https://line.me/R/ti/p/@123abcde"
```

公式LINEのURLは、LINE公式アカウントの管理画面で確認できます。

#### WebサイトURLを変更

**変更対象ファイル:**
- `app/layout.tsx` (メタデータ)
- `components/Footer.tsx` (55行目あたり)

```tsx
// 変更後（例）
href="https://sunnypartners.jp"
```

### 3. 営業時間を変更する

**ファイル:** `components/Footer.tsx`

```tsx
// 35行目あたり
<p className="text-white/70">
  営業時間:平日 9:00〜18:00
  <br />
  (土日祝 応相談)
</p>
```

## 🎨 デザインのカスタマイズ

### カラーパレットの変更

**ファイル:** `tailwind.config.ts`

```typescript
colors: {
  primary: {
    orange: '#FF6B35',  // メインオレンジ
    yellow: '#FFB627',  // メインイエロー
    navy: '#1B3A6D',    // ネイビー
  },
  secondary: {
    white: '#FFFFFF',
    lightgray: '#F5F5F5',
    darkgray: '#333333',
    black: '#000000',
  }
}
```

色を変更したら、ブラウザを更新すると自動的に反映されます。

### フォントの変更

**ファイル:** `app/globals.css`

```css
/* 1行目で変更 */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');
```

Google Fontsで好きなフォントを選び、URLを変更してください。

## 📸 画像の追加

### 1. 代表者の写真を追加

1. `public/` フォルダに `profile.jpg` を配置
2. `components/ProfileSection.tsx` を編集

```tsx
// 変更前（27-31行目）
<div className="aspect-square bg-gradient-to-br from-primary-orange to-primary-yellow rounded-lg overflow-hidden shadow-xl">
  <div className="w-full h-full flex items-center justify-center text-white text-8xl">
    👤
  </div>
</div>

// 変更後
<div className="aspect-square bg-gradient-to-br from-primary-orange to-primary-yellow rounded-lg overflow-hidden shadow-xl">
  <img 
    src="/profile.jpg" 
    alt="代表 豊田 太郎" 
    className="w-full h-full object-cover"
  />
</div>
```

### 2. ロゴ画像を追加

1. `public/` フォルダに `logo.png` を配置
2. `components/Header.tsx` を編集

```tsx
// 変更前（45-47行目）
<div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
  <span className="text-white text-2xl">☀️</span>
</div>

// 変更後
<div className="w-10 h-10">
  <img src="/logo.png" alt="Sunny Partners" className="w-full h-full object-contain" />
</div>
```

同様に `components/Footer.tsx` のロゴも変更してください（14-16行目）。

### 3. ヒーローセクションの背景画像を追加

**ファイル:** `components/HeroSection.tsx`

```tsx
// 7行目あたりに追加
<section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
  {/* 背景画像を追加 */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/hero-bg.jpg" 
      alt="" 
      className="w-full h-full object-cover opacity-30"
    />
  </div>
  
  {/* 既存の装飾要素 */}
  <div className="absolute inset-0 opacity-10">
    ...
```

## 📄 コンテンツの変更

### サービス内容を追加・変更する

**ファイル:** `components/ServicesSection.tsx`

```tsx
// 8行目あたりの services 配列を編集
const services = [
  {
    emoji: '🌐',
    title: 'Web制作',
    description: 'ここに説明文を記載',
    forWhom: [
      'こんな方におすすめ1',
      'こんな方におすすめ2',
      'こんな方におすすめ3',
    ],
  },
  // 新しいサービスを追加する場合は、ここにコピー&ペースト
];
```

### 料金プランを変更する

**ファイル:** `components/PricingSection.tsx`

```tsx
// 8行目あたりの plans 配列を編集
const plans = [
  {
    name: 'スタートプラン',
    price: '¥150,000〜',
    features: [
      'ランディングページ制作',
      '公式LINE基本設定',
    ],
    recommended: 'こんな方におすすめ',
    color: 'from-blue-400 to-blue-600',
    featured: false, // おすすめバッジを表示する場合は true
  },
  // プランを追加する場合は、ここにコピー&ペースト
];
```

### FAQを追加・変更する

**ファイル:** `components/FAQSection.tsx`

```tsx
// 11行目あたりの faqs 配列を編集
const faqs = [
  {
    q: '質問内容',
    a: '回答内容',
  },
  // 新しい質問を追加する場合は、ここにコピー&ペースト
];
```

## 🎁 特典の変更

**ファイル:** `components/CTASection.tsx`

```tsx
// 34-66行目あたりで特典内容を変更
<div className="flex items-start p-4 bg-secondary-lightgray rounded-lg">
  <FiCheckCircle className="text-primary-orange text-2xl mr-4 flex-shrink-0 mt-1" />
  <div>
    <h4 className="font-bold text-primary-navy mb-1">
      集客導線チェックシート
    </h4>
    <p className="text-sm text-secondary-darkgray">
      お客様がどこで迷っているか、すぐに分かる!
    </p>
  </div>
</div>
```

## 🔗 SNSリンクの追加

**ファイル:** `components/Footer.tsx`

```tsx
// 108-140行目あたり
<a
  href="https://instagram.com/yourprofile"  // ← ここを変更
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/70 hover:text-primary-yellow transition-colors"
  aria-label="Instagram"
>
  <FaInstagram className="text-2xl" />
</a>
```

Instagram、Twitter（X）、Facebookのプロフィールリンクを設定してください。

## 🚀 変更を確認する

1. ファイルを保存
2. ブラウザを更新（開発サーバーは自動リロードします）
3. 変更が反映されているか確認

## 💡 Tips

### エラーが出たら

1. **保存を忘れずに**: ファイルを編集したら必ず保存してください
2. **タグの閉じ忘れ**: `<div>` を開いたら必ず `</div>` で閉じる
3. **カンマの忘れ**: 配列の要素を追加したら、前の要素の最後にカンマ `,` を追加

### バックアップを取る

重要な変更をする前に、ファイルのバックアップを取ることをおすすめします。

```bash
# プロジェクト全体をコピー
cp -r sunny-partners sunny-partners-backup
```

## 📞 困ったときは

わからないことがあれば、各ファイルのコメントを参考にしてください。
または、開発者にお問い合わせください。

---

Happy Customizing! 🎨✨
