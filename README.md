# Claude CSS Theme

27종의 카드 컴포넌트를 8가지 테마로 보여주는 쇼케이스 프로젝트. 순수 CSS 테마 6종과 Tailwind CSS / shadcn 기반 테마 2종을 포함합니다.

## 테마

### 순수 CSS 테마 (6종)

| 테마 | 파일 | 특징 |
|------|------|------|
| **Border-Left** | `showcase-border-left.html` | 좌측 컬러 보더로 카드를 구분하는 미니멀 스타일 |
| **Glassmorphism** | `showcase-glassmorphism.html` | 반투명 배경과 블러 효과의 글래스모피즘 스타일 |
| **Gradient Border** | `showcase-gradient-border.html` | 그라데이션 보더로 강조하는 스타일 |
| **Neubrutalism** | `showcase-neubrutalism.html` | 굵은 검정 보더와 하드 오프셋 그림자의 뉴브루탈리즘 스타일 |
| **Neon Dark** | `showcase-neon-dark.html` | 어두운 배경 위 네온 글로우 효과의 사이버펑크 스타일 |
| **Aurora** | `showcase-aurora.html` | 애니메이션 오로라 그라데이션 배경 + 반투명 카드 |

### Tailwind CSS 기반 테마 (2종)

| 테마 | 파일 | 특징 |
|------|------|------|
| **Tailwind** | `showcase-tailwind.html` | Tailwind CSS CDN + `@apply` 디렉티브로 스타일링. Tailwind 기본 컬러 팔레트 사용 |
| **shadcn** | `showcase-shadcn.html` | Tailwind CSS + shadcn/ui HSL 변수 시스템. 모노크로매틱 미니멀 디자인 |

## 카드 컴포넌트 (27종)

Info, KPI, Timeline, Accordion, Flip, Flip (Inverted), Ribbon, Comparison, Numbered Steps, Quote & Callout, Image Overlay, Hover Reveal, Radar Chart, Tier / Pricing, Kanban Board, Chat Bubble, Terminal / Code, Donut Chart, Stacked Bar Chart, Tabbed, Notification / Toast, Horizontal Scroll, Breadcrumb Flow, Heatmap Table, Testimonial, Floating Label, Split Color, Polaroid

## 프로젝트 구조

```
claude-css-theme/
├── showcase-border-left.html      # Border-Left 테마
├── showcase-glassmorphism.html    # Glassmorphism 테마
├── showcase-gradient-border.html  # Gradient Border 테마
├── showcase-neubrutalism.html     # Neubrutalism 테마
├── showcase-neon-dark.html        # Neon Dark 테마
├── showcase-aurora.html           # Aurora 테마
├── showcase-tailwind.html         # Tailwind 테마 (CDN 인라인)
├── showcase-shadcn.html           # shadcn 테마 (CDN 인라인)
├── css/
│   ├── base.css                   # 공통 기본 스타일 (레이아웃, 그리드, 변수)
│   ├── theme-border-left.css      # Border-Left 테마
│   ├── theme-glassmorphism.css    # Glassmorphism 테마
│   ├── theme-gradient-border.css  # Gradient Border 테마
│   ├── theme-neubrutalism.css     # Neubrutalism 테마
│   ├── theme-neon-dark.css        # Neon Dark 테마
│   └── theme-aurora.css           # Aurora 테마
└── js/
    └── showcase.js                # 인터랙션 (아코디언, 탭, 카운터 애니메이션 등)
```

> Tailwind / shadcn 테마는 외부 CSS 파일 없이 HTML 내 `<style type="text/tailwindcss">` 블록에 스타일이 인라인으로 포함되어 있습니다.

## 사용 방법

별도 빌드 없이 HTML 파일을 브라우저에서 열면 됩니다. 상단 네비게이션 바에서 8가지 테마를 전환할 수 있습니다.

> Tailwind / shadcn 테마는 CDN에서 Tailwind CSS를 로드하므로 인터넷 연결이 필요합니다.

## 기술 스택

- **HTML5** / **CSS3** (CSS Custom Properties, Grid, Flexbox, `backdrop-filter`, `@keyframes`)
- **Tailwind CSS** (CDN, `@apply` 디렉티브)
- **Vanilla JavaScript** (IntersectionObserver 기반 애니메이션)
- **Google Fonts** (Inter, Courier Prime)
- **Font Awesome 6.5** (아이콘)
