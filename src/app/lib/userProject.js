export const ProjectDetails = [
  {
    id: "futo-ride",
    projectName: "FUTO Ride (Campus Drive)",
    projectDetails: "An on-demand campus transit and ride-hailing mobile ecosystem connecting students with campus kekes and shuttles with live GPS fleet tracking, automated route matching, and Telegram arrival alerts.",
    projectImage: "/futoRide/photo_5992566494732160226_y.jpg",
    screenshots: [
      {
        src: "/futoRide/photo_5992566494732160226_y.jpg",
        caption: "Brand Splash Screen: 'Move better. Live better.'"
      },
      {
        src: "/futoRide/photo_5992566494732160219_y.jpg",
        caption: "Live Campus Fleet Map & Driver Radar"
      },
      {
        src: "/futoRide/photo_5992566494732160217_y.jpg",
        caption: "Route Destination & Seat Allocation Selector"
      },
      {
        src: "/futoRide/photo_5992566494732160216_y.jpg",
        caption: "Real-Time Driver Matchmaking & Queue Engine"
      },
      {
        src: "/futoRide/photo_5992566494732160235_y.jpg",
        caption: "Driver Portal: Active Trip & Turn Progression"
      },
      {
        src: "/futoRide/photo_5992566494732160218_y.jpg",
        caption: "Proximity Alerts & Telegram Bot Integration"
      }
    ],
    projectContribution: "CO-FOUNDER & LEAD ENGINEER",
    role: "Full-Stack Mobile Engineer & Co-Founder",
    projectLink: "",
    projectGitHubLink: "",
    projectLanguagesSource: ['/react.png', '/typeScript.png', '/nodeJs.png', '/tailWind.png'],
    techStack: ["React Native", "Expo", "Supabase (PostgreSQL & Realtime)", "Node.js / Express", "WebSockets / Geolocation", "Telegram Bot API"],
    overview: "A comprehensive campus-tailored transit platform engineered to streamline student commuting at Federal University of Technology Owerri (FUTO). FUTO Ride bridges the gap between students and campus commercial transit (kekes and buses) through real-time coordinate tracking, automated proximity alerts, and driver dispatch.",
    features: [
      "Interactive live vector map with real-time keke & shuttle density updates",
      "Dynamic passenger-to-driver route matchmaking between campus hostels and lecture halls",
      "Driver cockpit with Active Trip progression, destination routing, and daily earnings treasury",
      "Proximity Telegram alert webhook notifying students when rides enter their building perimeter",
      "One-tap SOS emergency alert trigger for student security and campus dispatch",
      "Multi-seat booking mechanism for solo travelers and student study groups"
    ],
    architecture: "Engineered on React Native with separated passenger and driver state machines. Backed by Supabase Realtime, PostgreSQL, and a Node.js / Express microservice managing WebSocket broadcasts for sub-second GPS coordinate latency."
  },
  {
    id: "oga-ledger",
    projectName: "OgaLedger (Sovereign Ledger)",
    projectDetails: "A resilient, offline-first mobile business ledger and debt tracking app built for merchants, retailers, and market vendors to record cash sales, track debtor balances, and automate payment reminders.",
    projectImage: "/ogaLedger/photo_5902324726422508307_y.jpg",
    screenshots: [
      {
        src: "/ogaLedger/photo_5902324726422508307_y.jpg",
        caption: "Sovereign Ledger: 'The place to handle your business... No stress'"
      },
      {
        src: "/ogaLedger/photo_5902324726422508306_y.jpg",
        caption: "Merchant Onboarding & Sovereign Shop Registration"
      },
      {
        src: "/ogaLedger/photo_5902324726422508303_y.jpg",
        caption: "Executive Dashboard: Sales, Debts & Weekly Growth"
      },
      {
        src: "/ogaLedger/photo_5902324726422508304_y.jpg",
        caption: "Rapid Transaction Logger with Receipt Photo Attachment"
      },
      {
        src: "/ogaLedger/photo_5902324726422508305_y.jpg",
        caption: "Complete Ledger Audit History with Multi-Flow Filters"
      }
    ],
    projectContribution: "LEAD ARCHITECT",
    role: "Lead Full-Stack Mobile Architect",
    projectLink: "",
    projectGitHubLink: "",
    projectLanguagesSource: ['/react.png', '/typeScript.png', '/nodeJs.png', '/mongoDb.png'],
    techStack: ["React Native", "TypeScript", "Node.js / Express", "MongoDB Atlas", "Offline-First Sync", "Local Storage"],
    overview: "OgaLedger is an intuitive bookkeeping mobile application engineered to replace error-prone paper ledgers for African retail merchants and small business owners. It provides instant visibility into daily revenue, credit sales, customer debts, and inventory movements with zero accounting complexity.",
    features: [
      "Real-time visual dashboard tracking today's sales, outstanding debts, and weekly growth metrics",
      "Dedicated Debtor Management hub with automated WhatsApp/SMS debt recovery reminders",
      "High-speed transaction logger supporting Cash Sales, Debts, Expenses, and photo receipt capture",
      "Comprehensive ledger history with instant search and multi-category cash-flow filtering",
      "Offline-first local caching allowing merchants to log sales in low-connectivity market environments",
      "Multi-store business registration and merchant profile authentication"
    ],
    architecture: "Offline-first mobile client architecture utilizing local persistent storage synced with a secured RESTful Express and Node.js API with MongoDB Atlas backend."
  },
  {
    id: "styleet",
    projectName: "Styleet",
    projectDetails: "A full-scale beauty and hair booking web platform featuring dedicated admin management suites, client self-service portals, calendar-based stylist appointment booking, and an integrated hair accessories e-commerce store.",
    projectImage: "/styleet-cover.svg",
    projectContribution: "FULL-STACK ARCHITECT",
    role: "Full-Stack Web Architect",
    projectLink: "",
    projectGitHubLink: "",
    projectLanguagesSource: ['/nextJs.png', '/typeScript.png', '/nodeJs.png', '/tailWind.png'],
    techStack: ["Next.js (App Router)", "TypeScript", "Node.js / Express", "Tailwind CSS", "Role-Based Auth (Admin & Client)", "E-Commerce Cart & Checkout", "REST APIs"],
    overview: "Styleet is an end-to-end salon management and e-commerce web platform engineered for modern beauty salons and independent stylists. It seamlessly unites client hair appointment booking, real-time schedule management, and an online retail boutique for hair accessories and beauty essentials.",
    features: [
      "Interactive booking engine with stylist selection, service catalogs, and live calendar slot validation",
      "E-commerce boutique for hair accessories, extensions, bonnets, and salon care products with shopping cart and secure checkout",
      "Dedicated Admin Portal with appointment scheduling boards, sales analytics, and staff workload management",
      "Client Self-Service Dashboard to track upcoming hair appointments, booking history, and order statuses",
      "Automated booking confirmations, reminder notifications, and invoice generation",
      "Responsive, mobile-first design ensuring flawless booking experiences across smartphones and desktops"
    ],
    architecture: "Built with Next.js App Router for optimal SEO indexing and fast server-side rendering, paired with secure role-based access control (RBAC) and modular component architecture separating public storefront, user portals, and administrative tooling."
  },
  {
    id: 1,
    projectName: "Pig Games",
    projectDetails: "A dice-rolling strategy game built with Vanilla JavaScript. Features include real-time score tracking, turn-based logic, and state management for game resets.",
    projectImage: "/PigGame.png",
    projectContribution: "AUTHOR",
    role: "Frontend Developer & Game Logic Engineer",
    projectLink: "https://pig-games2.vercel.app/",
    projectGitHubLink: "https://github.com/Joshking21/pigGames2",
    projectLanguagesSource: ['/html5.png', '/css3.png', '/js.png'],
    techStack: ["Vanilla JavaScript (ES6+)", "HTML5 Canvas/DOM", "CSS3 Keyframe Animations", "State Machine Logic"],
    overview: "Pig Games is an interactive, turn-based two-player strategy game exploring risk mitigation, deterministic probability, and state transitions. Engineered purely in vanilla JavaScript without third-party frameworks to master raw DOM rendering, event dispatching, and memory-efficient game loops.",
    features: [
      "Deterministic 2-player turn alternation with automatic player state switching",
      "Dynamic dice rolling engine with randomized value generator and graphic dice rendering",
      "Round score accumulation vs permanent bank score holding mechanism",
      "Automatic round wipeout penalty upon rolling a 1",
      "Customizable winning score threshold with celebratory winner state",
      "Instant state reset mechanism clearing all memory buffers without browser reloads"
    ],
    architecture: "Engineered with modular state management separation, keeping the game logic cleanly decoupled from DOM manipulation and rendering updates."
  },
  {
    id: 2,
    projectName: "Bankist Website",
    projectDetails: "A high-performance banking landing page. Implemented advanced DOM manipulation, lazy loading for images, and intersection observer API for smooth reveal animations.",
    projectImage: "/Bankist.png",
    projectContribution: "AUTHOR",
    role: "Lead Frontend Engineer",
    projectLink: "https://newbank-delta.vercel.app/",
    projectGitHubLink: "https://github.com/Joshking21/NewBankProject",
    projectLanguagesSource: ['/html5.png', '/css3.png', '/js.png'],
    techStack: ["JavaScript (ES6+)", "Intersection Observer API", "HTML5 Semantic Architecture", "CSS3 Flexbox/Grid"],
    overview: "A sleek, institutional marketing website for a modern digital bank. Built to showcase corporate design execution, high-performance asset delivery, lazy-loaded media pipelines, and accessible navigational UX patterns.",
    features: [
      "Hardware-accelerated sticky navigation with dynamic scroll-threshold detection",
      "Smooth progressive section reveal utilizing the browser's native Intersection Observer API",
      "Optimized lazy-loading for heavy photographic assets to maintain 95+ Google Lighthouse scores",
      "Tabbed operations component with zero layout shifts and instant tab switching",
      "Modal dialog system with keyboard trap accessibility and backdrop click dismissals",
      "Interactive customer testimonial carousel with programmatic swipe transitions"
    ],
    architecture: "Leverages event delegation on parent containers to minimize event listener overhead, resulting in buttery smooth 60fps scrolling."
  },
  {
    id: 3,
    projectName: "FUTO Event Hub",
    projectDetails: "A full-stack event management platform developed as a university project. Built using PHP for server-side logic and JavaScript for interactive UI components.",
    projectImage: "/Event.png",
    projectContribution: "AUTHOR",
    role: "Full-Stack Developer",
    projectLink: "",
    projectGitHubLink: "https://github.com/Joshking21/Cit306Webproject",
    projectLanguagesSource: ['/html5.png', '/css3.png', '/js.png', '/php.png'],
    techStack: ["PHP 8+", "MySQL", "JavaScript", "HTML5/CSS3", "REST APIs"],
    overview: "A comprehensive campus-wide event coordination and RSVP platform designed for university students, faculty, and departmental organizations. Centralizes event scheduling, ticketing validation, and attendee management.",
    features: [
      "End-to-end event lifecycle management (creation, approval, publishing, and archiving)",
      "Role-based access control (Student Attendee vs Event Organizer vs Administrator)",
      "Real-time RSVP capacity tracker preventing overbooking of university auditoriums",
      "Interactive event discovery board with filtering by department, faculty, and date",
      "Robust server-side form validations with sanitization against XSS and SQL injection",
      "Automated email confirmation generation and attendee export reports"
    ],
    architecture: "Model-View-Controller (MVC) architectural layout separating data access queries, business routing logic, and client-facing views."
  },
  {
    id: 4,
    projectName: "Hertz Solar Business",
    projectDetails: "A modern commercial website for a solar energy firm. Built with Next.js and TypeScript to ensure type safety and optimized SEO performance.",
    projectImage: "/hertz.png",
    projectContribution: "AUTHOR",
    role: "Full-Stack Web Architect",
    projectLink: "https://www.hertzrenewables.com/",
    projectGitHubLink: "https://github.com/Joshking21/Cit306Webproject",
    projectLanguagesSource: ['/nextJs.png', '/typeScript.png', '/tailWind.png'],
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Vercel Edge Deployment", "SEO Metadata"],
    overview: "A scalable enterprise web solution built for an emerging renewable energy enterprise in West Africa. Engineered to drive corporate lead conversions, showcase solar installation case studies, and educate consumers on clean power adoption.",
    features: [
      "Server-Side Rendering (SSR) and Static Site Generation (SSG) for instant page loads and maximum SEO indexing",
      "Strict TypeScript interfaces throughout component trees and API data models to eliminate runtime bugs",
      "Custom responsive design system built on utility-first Tailwind CSS tokens",
      "Interactive solar capacity calculator helping clients estimate required energy packages",
      "Direct commercial lead capture pipeline with email notification webhooks",
      "Optimized Next.js Image caching pipeline with automatic WebP/AVIF compression"
    ],
    architecture: "App Router architecture with React Server Components (RSC) to minimize client JavaScript bundle size and optimize Core Web Vitals."
  },
];

export const WorkExperienceDetails = [
  {
    ExperienceName: "Co-Founder - Campus Drive",
    ExperienceTime: "June 2026 - Present",
    ExperiencePlace: "Nigeria",
    ExperienceDetails: "Co-founded Campus Drive, delivering cutting-edge transport software solutions. Spearheading product architecture and frontend engineering to streamline commuter transit, fleet management, and mobility logistics.",
  },
  {
    ExperienceName: "Frontend Engineer - BunchBay Technological Solutions Limited",
    ExperienceTime: "December 2025 - Present",
    ExperiencePlace: "Lagos, Nigeria",
    ExperienceDetails: "Leading frontend development for production-ready applications, building scalable and maintainable user interfaces. Implementing API integrations, optimizing performance, and enhancing user experience across multiple platforms.",
  },
  {
    ExperienceName: "Frontend Developer Intern - BunchBay Technological Solutions Limited",
    ExperienceTime: "May 2025 - December 2025",
    ExperiencePlace: "Lagos, Nigeria",
    ExperienceDetails: "Contributed to the development of responsive web interfaces using modern frontend technologies. Collaborated with designers and backend developers to implement user-focused features and improve application performance.",
  },
  {
    ExperienceName: "Bachelor of Technology, Computer Science - Federal University of Technology Owerri",
    ExperienceTime: "January 2022 - December 2026",
    ExperiencePlace: "Owerri, Nigeria",
    ExperienceDetails: "Pursuing a comprehensive curriculum that blends theoretical foundations with hands-on software development, building strong problem-solving and engineering skills.",
  },
];