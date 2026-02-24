# Portfolio Style Guide
*Minh Nguyen — minhnguyendesign.com*

---

## Colors

| Role | Hex | Tailwind |
|---|---|---|
| Logo / Brand Red | `#A62020` | — |
| Tag Background | `#ffdfdf` | `bg-[#ffdfdf]` |
| Tag Text | `#cd0000` | `text-[#cd0000]` |
| Project 1 Card (Blue) | `#87a7cc` | `bg-[#87a7cc]` |
| Project 2 Card (Green) | `#a9d89e` | `bg-[#a9d89e]` |
| Outcome Card Background | `#e0ffda` | `bg-[#e0ffda]` |
| Outcome Card Text | `#2f9119` | `text-[#2f9119]` |
| Reflection Background | `#f0f0f0` | `bg-[#f0f0f0]` |
| Reflection Text | `#8f8f8f` | `text-[#8f8f8f]` |
| Divider / Accent Gray | `#d9d9d9` | `bg-[#d9d9d9]` |
| Sidebar Accent Gray | `#b1b1b1` | `bg-[#b1b1b1]` |
| Purple Accent (Story) | `#a162c9` | `bg-[#a162c9]` |
| Green Accent (Story) | `#1e8e05` | `bg-[#1e8e05]` |
| Base Background | `#ffffff` | `bg-white` |
| Base Text | `#000000` | `text-black` |

---

## Typography

### Fonts
- **Headings:** `Noto Serif` — class: `font-noto-serif`
- **Body / UI:** `Inter` — class: `font-inter`

Both fonts are loaded via Google Fonts in `global.css`.

### Scale

| Element | Font | Size | Weight | Class Example |
|---|---|---|---|---|
| Page / Section Title | Noto Serif | 40px | 500 | `font-noto-serif text-[40px] font-medium` |
| Project Title (card) | Noto Serif | 32px | — | `font-noto-serif text-[32px]` |
| Feature Heading | Noto Serif | 24px | — | `font-noto-serif text-2xl` |
| Nav Links | Noto Serif | 20px | — | `font-noto-serif text-xl` |
| Body / About | Inter | 20px | — | `font-inter text-xl` |
| Project Description | Inter | 16px | — | `font-inter text-base` |
| Outcome Card Title | Inter | 16px | 600 | `font-inter text-base font-semibold` |
| Outcome Card Body | Inter | 12px | — | `font-inter text-xs` |
| Meta Labels | Inter | 12px | — | `font-inter text-xs uppercase` |
| User Story Quote | Inter | 16px | 300 italic | `font-inter text-base font-light italic` |

---

## Layout & Spacing

### Page Structure
- **Homepage padding:** `px-[14.29%]`
- **Project page padding:** `px-[8%]`
- **Max content width (homepage):** `max-w-[926px]`
- **Max content width (project page):** `max-w-[800px]`, `max-w-[600px]`, `max-w-[539px]`
- **Global max width:** `max-w-[1400px]`
- **Body:** `bg-white w-full min-h-screen`

### Section Spacing (Margin Bottom)
- Major sections: `mb-40`
- Standard sections: `mb-32`, `mb-20`
- Sub-sections / features: `mb-16`, `mb-12`

### Internal Gaps
| Context | Class |
|---|---|
| Metadata label → value | `gap-2` |
| Feature text stack | `gap-4` |
| Section element stack | `gap-6` |
| Large section groupings | `gap-10` |
| Nav links | `gap-10` |
| Hero row | `gap-24` (flex columns) |

---

## Components

### Navigation Header
```
flex items-center justify-between
px-[14.29%] pt-32 pb-16
```
- Logo left, nav links right
- Nav links: `font-noto-serif text-xl text-black hover:opacity-70 transition-opacity`

### Section Divider with Title
```jsx
<div className="flex items-center gap-4 mb-12">
  <h2 className="font-noto-serif text-[40px] font-medium text-black whitespace-nowrap">
    Section Title
  </h2>
  <div className="flex-1 h-[2px] bg-[#d9d9d9]"></div>
</div>
```

### Skill / Feature Tag
```jsx
<span className="bg-[#ffdfdf] text-[#cd0000] text-base px-2 py-2 rounded-lg">
  TAG NAME
</span>
```
Tags wrap in `flex flex-wrap gap-2.5`.

### Project Card (Homepage)
- Container: `flex flex-col gap-4`
- Image area: fixed height `h-[501px]`, `rounded-lg`, `shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]`, `relative overflow-hidden`
- Project 1 background: `bg-[#87a7cc]`
- Project 2 background: `bg-[#a9d89e]`
- Hover: `hover:opacity-90 transition-opacity`
- Title: `font-noto-serif text-[32px] text-black`
- Description: `font-inter text-base text-black`

### Project Card Images (positioned absolutely inside card)
```
absolute rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] object-cover
```
Two overlapping images per card at different positions/sizes for visual depth.

### Vertical Accent Bar (Project Page Sidebar)
```jsx
<div className="w-[5px] h-[108px] bg-[#b1b1b1] rounded"></div>
```
Used to separate hero metadata columns on the project page.

### User Story Card
```jsx
<div className="flex gap-5 items-start">
  <div className="w-[5px] min-h-full bg-[#a162c9] rounded flex-shrink-0"></div>
  <div className="flex flex-col gap-2">
    <h3 className="font-inter text-base font-semibold text-black">Story Title</h3>
    <p className="font-inter text-base font-light italic text-black">"Quote..."</p>
  </div>
</div>
```
Color varies by story role: `#a162c9` (Partner Manager), `#1e8e05` (Executive).

### Outcome Card (Success)
```jsx
<div className="bg-[#e0ffda] rounded-lg p-4 flex flex-col gap-2">
  <h3 className="font-inter text-base font-semibold text-[#2f9119]">Title</h3>
  <p className="font-inter text-xs text-[#2f9119]">Description</p>
</div>
```

### Reflection Block
```jsx
<div className="bg-[#f0f0f0] rounded-lg px-4 py-6 flex flex-col gap-4">
  <h2 className="font-noto-serif text-[32px] font-medium text-black text-center">Reflection</h2>
  <div className="font-inter text-base text-[#8f8f8f] space-y-4">
    <p>...</p>
  </div>
</div>
```

### Project Page Metadata Block
```jsx
<div className="flex flex-col gap-2">
  <span className="font-inter text-xs text-[#b1b1b1] uppercase">LABEL</span>
  <span className="font-inter text-base text-black">Value</span>
</div>
```
Columns use `flex gap-24 flex-wrap`, separated by the vertical accent bar.

### Logo
- SVG-based wordmark in `#A62020`
- Homepage size: `w-[386px] h-[61.157px]`
- Project page size: `w-[250px] h-auto`
- Hover: `hover:opacity-80 transition-opacity`

### Back Link (Project Pages)
```jsx
<Link className="font-inter text-base text-gray-600 hover:text-[#A62020] transition-colors mb-8">
  ← Back to Projects
</Link>
```

---

## Global CSS Notes

```css
body {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #000000;
}

html {
  scroll-behavior: smooth;
}
```

Fonts loaded via `@font-face` referencing Google Fonts CDN for Noto Serif (400, 500, 600) and Inter (300, 400, 600, 700).

---

## Design Principles

1. **Clean whitespace** — generous padding and margin keep content breathable.
2. **Serif for personality, sans-serif for readability** — Noto Serif anchors headings; Inter handles all UI and body copy.
3. **Color is purposeful** — the brand red (`#A62020`) appears only on the logo and tags. Section cards each have a distinct hue (blue/green) for visual variety without clutter.
4. **Layered card images** — two absolutely-positioned, overlapping screenshots inside each project card create depth and visual interest.
5. **Human-in-the-loop narrative** — reflection and outcome sections follow every project to communicate judgment, not just technical skill.
6. **Consistent tag system** — all technology/feature labels share the same `#ffdfdf` / `#cd0000` tag style regardless of section.