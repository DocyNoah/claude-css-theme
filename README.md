# Claude CSS Theme

27종의 카드 컴포넌트를 3가지 CSS 테마로 보여주는 쇼케이스 프로젝트.

## 테마

| 테마 | 파일 | 특징 |
|------|------|------|
| **Border-Left** | `showcase-border-left.html` | 좌측 컬러 보더로 카드를 구분하는 미니멀 스타일 |
| **Glassmorphism** | `showcase-glassmorphism.html` | 반투명 배경과 블러 효과의 글래스모피즘 스타일 |
| **Gradient Border** | `showcase-gradient-border.html` | 그라데이션 보더로 강조하는 스타일 |

## 카드 컴포넌트 (27종)

Info, KPI, Timeline, Accordion, Flip, Flip (Inverted), Ribbon, Comparison, Numbered Steps, Quote & Callout, Image Overlay, Hover Reveal, Radar Chart, Tier / Pricing, Kanban Board, Chat Bubble, Terminal / Code, Donut Chart, Stacked Bar Chart, Tabbed, Notification / Toast, Horizontal Scroll, Breadcrumb Flow, Heatmap Table, Testimonial, Floating Label, Split Color, Polaroid

## 프로젝트 구조

```
claude-css-theme/
├── showcase-border-left.html      # Border-Left 테마 쇼케이스
├── showcase-glassmorphism.html    # Glassmorphism 테마 쇼케이스
├── showcase-gradient-border.html  # Gradient Border 테마 쇼케이스
├── css/
│   ├── base.css                   # 공통 기본 스타일
│   ├── theme-border-left.css      # Border-Left 테마
│   ├── theme-glassmorphism.css    # Glassmorphism 테마
│   └── theme-gradient-border.css  # Gradient Border 테마
├── js/
│   └── showcase.js                # 인터랙션 (아코디언, 탭, 카운터 애니메이션 등)
└── assets/
    └── Flow Matching for ...pdf   # 콘텐츠 원본 논문
```

## 사용 방법

별도 빌드 없이 HTML 파일을 브라우저에서 열면 됩니다. 상단 네비게이션 바에서 테마를 전환할 수 있습니다.

## 기술 스택

- **HTML5** / **CSS3** (CSS Custom Properties, Grid, Flexbox)
- **Vanilla JavaScript** (IntersectionObserver 기반 애니메이션)
- **Google Fonts** (Inter, Courier Prime)
- **Font Awesome 6.5** (아이콘)
