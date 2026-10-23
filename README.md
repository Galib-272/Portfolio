<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=500&color=A855F7&center=true&vCenter=true&width=600&lines=SYED+AHMAD+GALIB;MERN+STACK+DEVELOPER;Crafting+Digital+Experiences" alt="Typing SVG" />

  <p>
    <a href="https://portfolio-galib272.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/LIVE_DEMO-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/Galib-272/Portfolio.git" target="_blank">
      <img src="https://img.shields.io/badge/GITHUB_REPO-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" />
    <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion 12" />
  </p>

  <h3>✨ A modern developer portfolio with glass-style design, glowing indigo–violet gradients and smooth animations ✨</h3>

</div>

---

## 🚀 Live Showcase & Preview

- **Live Link:** [portfolio-galib272.vercel.app](https://portfolio-galib272.vercel.app)
- **Status:** 🟢 Active / Available for Part-time, Hybrid & Full-time opportunities.

---

## ✨ Features

- **⏳ Animated Loading Screen:** Tech logos join an orbit around the "G" badge one by one while a glowing progress ring fills up, the name builds letter by letter, then everything fades into the site.
- **🛸 Tech Orbit Around the Profile Photo:** Eight real technology logos (React, Next.js, Node.js, Express, MongoDB, PostgreSQL, JavaScript, TypeScript) circle the hero photo. The logos always stay upright as the ring turns.
- **♾️ Scrolling Skills Marquee:** Frontend and backend skills shown with their official logos in two endless rows moving in opposite directions. Edges fade out, and a row pauses when you hover over it.
- **🧭 Smart Navbar:** A floating glass navbar with a glowing underline that follows the section you are reading and jumps straight to the link you click.
- **🌌 Glass & Glow Design:** Soft aurora background glow, glass cards with gradient edges, and buttons that light up with a purple gradient on hover.
- **📱 Fully Responsive:** Layouts adapt from small phones to large monitors. The photo orbit scales down to fit mobile screens.
- **♿ Accessible by Default:** Visible keyboard focus, and animations calm down for visitors who turn on "reduce motion" on their device.
- **📬 Working Contact Form:** Sends messages through the **Web3Forms API**, with success and error toast notifications.

---

## 🛠 Tech Stack

### Core Architecture

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19 (with the React Compiler enabled)
- **Styling Engine:** Tailwind CSS 4

### Graphics & Utilities

- **Motion Graphics:** Framer Motion
- **Icons:** Lucide React for interface icons; official technology logos from [Devicon](https://devicon.dev) and [Simple Icons](https://simpleicons.org)
- **Fonts:** Bricolage Grotesque (headings) and Manrope (body), self-hosted with `next/font/local`
- **Media Handling:** `next/image`

---

## 📂 Project Architecture Grid

```text
├── public/
│   ├── icons/               # Technology logos (SVG) for the orbit, skills & footer
│   ├── IMG.jpg              # Profile photo
│   └── *.png                # Project screenshots
└── src/
    ├── app/
    │   ├── layout.js        # Root layout, fonts & page-wide background glow
    │   ├── page.js          # Home page: loading screen + all sections
    │   └── globals.css      # Design tokens, glass cards, buttons, marquee styles
    ├── fonts/               # Self-hosted font files
    └── components/
        ├── LoadingScreen.jsx # Logo-orbit loader with progress ring
        ├── Navbar.jsx       # Floating navbar with active-section underline
        ├── Hero.jsx         # Profile photo and rotating tech orbit
        ├── About.jsx        # Background, strengths & skill bars
        ├── Skills.jsx       # Scrolling logo marquee
        ├── Education.jsx    # Education timeline & experience card
        ├── Projects.jsx     # Project cards with live demo & GitHub links
        ├── Contact.jsx      # Contact details, form & toast notifications
        └── Footer.jsx       # Footer with stack logos & social links
```

## ⚙️ Getting Started

Follow these steps to spin up a local development copy of this portfolio website:

**Prerequisite:** Node.js 20.9 or newer.

1. Clone the Workspace

```bash
git clone https://github.com/Galib-272/Portfolio.git
cd Portfolio
```

2. Install Project Dependencies

```bash
npm install
```

3. Setup Your Environment Configurations (.env.local)

Create a `.env.local` file in the root folder and add your Web3Forms access key:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY="your-web3forms-access-key-here"
```

4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Other Commands

```bash
npm run build   # Create a production build
npm run start   # Run the production build locally
npm run lint    # Check the code with ESLint
```

## 🤝 Let's Connect!

If you like my work, feel free to reach out to me! I am always open to discussing new software development roles, contract positions, and open-source collaborations.

- 📧 **Email:** [ahmedgalib6677@gmail.com](mailto:ahmedgalib6677@gmail.com)
- 💼 **LinkedIn:** [Syed Ahmad Galib](https://www.linkedin.com/in/galib272/)
- 🐙 **GitHub:** [@Galib-272](https://github.com/Galib-272)
- 📞 **Contact:** [+8801920376677](tel:+8801920376677)
- 📍 **Location:** Dhaka, Bangladesh
