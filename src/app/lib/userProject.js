export const ProjectDetails = [
  {
    id: "playpick",
    featured: true, // shown first, and the only ones visible on phones until expanded
    tagline: "A football prediction app built for a client: fans predict live matches, join tournaments and climb leaderboards.",
    projectName: "PlayPick",
    projectDetails: "A football prediction and fantasy platform built for a client during my time at BunchBay. Fans predict live match outcomes, join global tournaments and compete on leaderboards.",
    projectImage: "/projects/playpick.jpg",
    gallery: [
      { src: "/projects/playpick.jpg", caption: "Homepage", kind: "web" },
      { src: "/projects/playpick-mobile.jpg", caption: "On mobile", kind: "phone" },
    ],
    note: "Built for a client at BunchBay. 1,000+ users",
    projectContribution: "LEAD FRONTEND DEVELOPER & DESIGNER",
    role: "Lead Frontend Developer & UI Designer",
    projectLink: "https://playpick.app",
    projectGitHubLink: "",
    projectLanguagesSource: ['/nextJs.png', '/tailWind.png', '/stack/framer.svg'],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Axios", "REST API Integration"],
    overview: "PlayPick is a football prediction and fantasy platform built for a client while I was at BunchBay Technological Solutions. Fans sign up, join tournaments and competitions, predict match outcomes and earn points to climb a global leaderboard. It now has over 1,000 users. I led the frontend and the UI design, turning the product into a fast, animated web experience wired to the client's backend APIs.",
    features: [
      "Match prediction flow: pick the outcome of each game and earn points for every correct call",
      "Global tournaments, plus custom competitions you can create and play with friends",
      "Global leaderboard and rankings, with Player of the Week and Player of the Month",
      "Fantasy-style team formation views for top-performing players",
      "Sign-up and login connected to the client's backend",
      "Marketing site with app store download links for the mobile apps"
    ],
    architecture: "Next.js frontend styled with Tailwind CSS and animated with Framer Motion. All data comes from the client's backend through REST APIs, called with Axios."
  },
  {
    id: "pypelyne",
    featured: true, // shown first, and the only ones visible on phones until expanded
    tagline: "Our AI-powered social media manager: write one post, and it's formatted, scheduled and published to every platform.",
    projectName: "PypeLyne",
    projectDetails: "A social media management platform I co-founded, built with Nexa Digital. Businesses schedule, format and publish content across platforms from one dashboard, with AI helping to optimise each post.",
    projectImage: "/projects/pypelyne.jpg",
    gallery: [
      { src: "/projects/pypelyne.jpg", caption: "Homepage", kind: "web" },
      { src: "/projects/pypelyne-dashboard.jpg", caption: "The dashboard", kind: "web" },
    ],
    note: "Live, with 50+ users",
    projectContribution: "CO-FOUNDER & LEAD DEVELOPER",
    role: "Co-Founder & Lead Technical Developer",
    projectLink: "https://www.pype-lyne.com/",
    projectGitHubLink: "",
    projectLanguagesSource: ['/stack/react.png', '/stack/vite.svg', '/stack/supabase.svg', '/stack/postgresql.svg', '/tailWind.png'],
    techStack: ["React + Vite", "TypeScript", "Supabase (PostgreSQL, Auth, Edge Functions, pg_cron)", "Korapay payments", "Tailwind CSS", "Framer Motion", "Google Gemini AI"],
    overview: "PypeLyne is a social media management platform I co-founded and lead technical development on, built with Nexa Digital. Businesses connect their social accounts, write one post, and PypeLyne formats it for each platform, schedules it on a visual calendar and publishes it automatically, with AI suggesting improvements along the way. It's live, with over 50 users on board.",
    features: [
      "Publish to 17 platforms from one dashboard, including Facebook, Instagram, LinkedIn, X, TikTok, YouTube and Pinterest",
      "One post in, every platform out: content is formatted automatically for each network",
      "AI suggestions for formatting, hashtags and the best time to post",
      "Visual drag-and-drop calendar for scheduling, including recurring posts",
      "Approvals and team workspaces, so whole teams can work in one place",
      "Automatic publishing at the scheduled time, run by a cron-driven scheduler",
      "Paid plans billed through Korapay, with signature-verified payment webhooks and receipts",
      "Security built in: row-level security on every table, two-factor login (MFA), automatic session expiry, and billing fields locked so no one can upgrade themselves for free"
    ],
    architecture: "React + Vite + TypeScript frontend on Supabase: PostgreSQL with row-level security for data, Supabase Auth with MFA for accounts, and Edge Functions for publishing, social token refresh, Korapay checkout and webhooks, and workspace invites. Postgres cron jobs run the publishing scheduler every minute, plus billing reminders and session expiry. The AI features use Google Gemini."
  },
  {
    id: "futo-ride",
    featured: true, // shown first, and the only ones visible on phones until expanded
    tagline: "A ride-hailing app that gets students to a campus keke or shuttle fast, with live tracking and arrival alerts.",
    projectName: "FUTO Ride (Campus Drive)",
    projectDetails: "A campus ride-pooling app that connects FUTO students with kekes and shuttles: live map, seat-aware matching, naira payments settled in USDC on Solana, Telegram arrival alerts and AI-triaged safety reports.",
    projectImage: "/futoRide/photo_5992566494732160226_y.jpg",
    screenshots: [
      {
        src: "/futoRide/photo_5992566494732160226_y.jpg",
        caption: "Splash screen: 'Move better. Live better.'"
      },
      {
        src: "/futoRide/photo_5992566494732160219_y.jpg",
        caption: "Live campus map with nearby drivers"
      },
      {
        src: "/futoRide/photo_5992566494732160217_y.jpg",
        caption: "Choosing a destination and seats"
      },
      {
        src: "/futoRide/photo_5992566494732160216_y.jpg",
        caption: "Matching you with a driver"
      },
      {
        src: "/futoRide/photo_5992566494732160235_y.jpg",
        caption: "Driver app: the current trip"
      },
      {
        src: "/futoRide/photo_5992566494732160218_y.jpg",
        caption: "Arrival alerts on Telegram"
      }
    ],
    projectContribution: "CO-FOUNDER & LEAD ENGINEER",
    role: "Full-Stack Mobile Engineer & Co-Founder",
    projectLink: "",
    projectGitHubLink: "https://github.com/Joshking21/futo-ride",
    projectLanguagesSource: ['/react.png', '/typeScript.png', '/nodeJs.png', '/tailWind.png'],
    techStack: ["React Native (Expo)", "TypeScript", "Fastify + Zod", "Firebase (Firestore, Auth, FCM)", "PAJ / Partna payments", "Solana (Anchor, USDC)", "Google Gemini", "Telegram Bot API"],
    overview: "FUTO Ride is a ride-hailing app for students at the Federal University of Technology Owerri (FUTO). It connects students with the campus kekes and shuttles they already use: they can watch rides move on a live map, book a seat, and get an alert when their ride is close. Drivers get their own side of the app, and trips are sent to them automatically.",
    features: [
      "Live campus map of nearby kekes and shuttles; drivers who stop sending a heartbeat are dropped, so students never get matched to a 'ghost' keke",
      "Seat-aware matching that pools students heading the same way into one keke, and re-matches automatically if a driver cancels",
      "Naira bank-transfer payments through PAJ or Partna behind one provider interface, with verified webhooks, settled into a USDC treasury on Solana",
      "On-time Telegram alerts when a ride is close, plus incident alerts sent straight to campus security",
      "AI incident triage: Gemini rates each safety report's severity and suggests an action, with its answer schema-checked before anyone sees it",
      "One-tap SOS, plus QR codes and completion PINs to confirm each trip"
    ],
    architecture: "Expo / React Native apps for riders and drivers, backed by a Fastify + Zod API on Firebase (Firestore, Auth and push notifications). Payments arrive as naira bank transfers through PAJ or Partna, verified by signed webhooks, and settle into a USDC treasury run by an Anchor program on Solana. Google Gemini triages safety incidents and checks driver repair-claim photos, with a human always approving any payout."
  },
  {
    id: "oga-ledger",
    tagline: "A bookkeeping app that lets market traders track sales, debts and reminders, even without internet.",
    projectName: "OgaLedger (Sovereign Ledger)",
    projectDetails: "A bookkeeping app for traders and shop owners: it records cash sales, tracks who owes what, sends payment reminders, and keeps working without internet.",
    projectImage: "/ogaLedger/photo_5902324726422508307_y.jpg",
    screenshots: [
      {
        src: "/ogaLedger/photo_5902324726422508307_y.jpg",
        caption: "Welcome: 'The place to handle your business... No stress'"
      },
      {
        src: "/ogaLedger/photo_5902324726422508306_y.jpg",
        caption: "Signing up and registering a shop"
      },
      {
        src: "/ogaLedger/photo_5902324726422508303_y.jpg",
        caption: "Dashboard: sales, debts and weekly growth"
      },
      {
        src: "/ogaLedger/photo_5902324726422508304_y.jpg",
        caption: "Logging a sale with a receipt photo"
      },
      {
        src: "/ogaLedger/photo_5902324726422508305_y.jpg",
        caption: "Every transaction, with filters"
      }
    ],
    projectContribution: "LEAD ARCHITECT",
    role: "Lead Full-Stack Mobile Architect",
    projectLink: "",
    projectGitHubLink: "",
    projectLanguagesSource: ['/react.png', '/typeScript.png', '/nodeJs.png', '/mongoDb.png'],
    techStack: ["React Native", "TypeScript", "Node.js / Express", "MongoDB Atlas", "Offline sync", "On-device storage"],
    overview: "OgaLedger replaces the paper notebooks many African traders and small business owners use to keep their accounts, where mistakes are easy to make. In one app they can see the day's sales, credit sales, who owes them money and how their stock is moving, with no accounting knowledge needed.",
    features: [
      "Dashboard showing today's sales, money owed to you, and how the week is growing",
      "A debtors page that sends automatic WhatsApp or SMS reminders to customers who owe",
      "Quick logging of cash sales, debts and expenses, with a photo of the receipt",
      "Full history of every transaction, searchable and filterable by type",
      "Works offline, so traders can record sales in markets with poor signal",
      "Register more than one shop, each with a secure merchant login"
    ],
    architecture: "The app saves everything on the phone first, then syncs it to a secure Node.js / Express server with a MongoDB Atlas database whenever there's a connection."
  },
  {
    id: "styleet",
    tagline: "A beauty app for booking stylists at home or in the salon. I built its landing page and the admin web app the team runs it on.",
    projectName: "Styleet",
    projectDetails: "A haircut and styling app that connects customers with professional hairstylists and barbers, at home or in the salon. I built the landing page and the admin web app the Styleet team uses to run the business.",
    projectImage: "/projects/styleet.jpg",
    gallery: [
      { src: "/projects/styleet.jpg", caption: "Landing page", kind: "web" },
      { src: "/projects/styleet-mobile.jpg", caption: "On mobile", kind: "phone" },
    ],
    status: "In development",
    note: "Launching soon",
    projectContribution: "LANDING PAGE & ADMIN WEB APP",
    role: "Frontend Developer: Landing Page & Admin Web App",
    projectLink: "https://styleet-landing-page-staging.up.railway.app/",
    projectGitHubLink: "",
    projectLanguagesSource: ['/nextJs.png', '/typeScript.png', '/tailWind.png', '/stack/framer.svg'],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "TanStack Query & Table", "Zustand", "Recharts", "React Hook Form + Zod", "Sentry & Amplitude"],
    overview: "Styleet makes hair care easy to book. Customers find a verified hairstylist or barber, choose a service, and have it done at home or in the salon. In the same app they can buy hair products, book wig revamps or aso-oke tying, and track orders in real time. I built two of its pieces: the landing page that introduces the app and collects sign-ups before launch, and the admin web app the Styleet team uses to run the whole business.",
    features: [
      "Landing page that explains the app, with a waitlist, a launch countdown and a contact form",
      "Admin dashboard with the key business numbers and reports at a glance",
      "Stylist verification (KYC), so only checked professionals can take bookings",
      "Tools to manage orders, payments, disputes and customer support tickets",
      "Staff accounts with roles and permissions, activity logs and two-factor login",
      "Promotions and broadcast notifications sent out to app users"
    ],
    architecture: "Both are built with Next.js, TypeScript and Tailwind CSS. On the landing page, forms are checked with React Hook Form and Zod. The admin app uses TanStack Query and Table for fast, searchable data tables, Zustand to manage app state, Recharts for the reports, and Sentry plus Amplitude to catch errors and see how the tools are used."
  },
  {
    id: 3,
    tagline: "A campus events platform where students discover events, RSVP, and organisers manage attendee lists.",
    projectName: "FUTO Event Hub",
    projectDetails: "A university project: a complete campus events platform, built with PHP on the server and JavaScript in the browser.",
    projectImage: "/event.png",
    projectContribution: "AUTHOR",
    role: "Full-Stack Developer",
    projectLink: "",
    projectGitHubLink: "https://github.com/Joshking21/Cit306Webproject",
    projectLanguagesSource: ['/html5.png', '/css3.png', '/js.png', '/php.png'],
    techStack: ["PHP 8+", "MySQL", "JavaScript", "HTML5/CSS3", "REST APIs"],
    overview: "FUTO Event Hub gives students, lecturers and departments one place to run campus events. Organisers create and schedule events, students find them and RSVP, and tickets and guest lists are handled for them.",
    features: [
      "Every step of an event: create it, get it approved, publish it, then archive it",
      "Separate access for students, event organisers and admins",
      "Live RSVP counter that stops halls from being overbooked",
      "Event board students can filter by department, faculty and date",
      "Forms checked on the server and protected against common hacking attacks",
      "Automatic confirmation emails, and guest lists organisers can export"
    ],
    architecture: "Organised in the MVC pattern: database code, page logic and what users see are kept in separate layers, so each part is easier to change."
  },
  {
    id: 4,
    tagline: "The company website for a West African solar firm, built to turn visitors into sales leads.",
    projectName: "Hertz Renewables",
    projectDetails: "A modern business website for a solar energy company, built with Next.js and TypeScript so it's fast, reliable and easy to find on Google.",
    projectImage: "/hertz.png",
    projectContribution: "AUTHOR",
    role: "Full-Stack Web Architect",
    projectLink: "https://www.hertzrenewables.com/",
    projectGitHubLink: "",
    projectLanguagesSource: ['/nextJs.png', '/typeScript.png', '/tailWind.png'],
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Vercel hosting", "SEO setup"],
    overview: "Hertz Renewables is a growing solar energy company in West Africa. I built their website to win new business: it turns visitors into sales enquiries, shows off past solar installations, and explains to customers why switching to clean power makes sense.",
    features: [
      "Pages are prepared ahead of time, so they load instantly and rank well on Google",
      "Written in TypeScript throughout, to catch bugs before they reach visitors",
      "A custom design that works on every screen size, built with Tailwind CSS",
      "Solar calculator that helps customers work out what size of system they need",
      "Enquiry forms that email new leads straight to the sales team",
      "Images are compressed into modern formats automatically, so pages stay fast"
    ],
    architecture: "Uses Next.js server components, so less code is sent to the visitor's browser and the site scores well on Google's speed checks (Core Web Vitals)."
  },
  {
    id: "lagos-foosball",
    featured: true, // shown first, and the only ones visible on phones until expanded
    tagline: "A 3D table-football game for two: play a real person online, a bot, or a friend with a private room code.",
    projectName: "Lagos Foosball",
    projectDetails: "A real-time multiplayer 3D foosball game built at JFT Games for the Lagos Life game API. Two players face off live online over WebSockets, or play solo against a bot.",
    projectImage: "/projects/foosball.jpg",
    gallery: [
      { src: "/projects/foosball.jpg", caption: "Main menu & 3D table", kind: "web" },
      { src: "/projects/foosball-mobile.jpg", caption: "On mobile", kind: "phone" },
    ],
    note: "Real-time: two players, one table",
    projectContribution: "LEAD FRONTEND DEVELOPER",
    role: "Lead Frontend Developer (JFT Games)",
    projectLink: "https://foosball-two.vercel.app/",
    projectGitHubLink: "",
    projectLanguagesSource: ['/stack/threejs.svg', '/typeScript.png', '/nodeJs.png', '/stack/redis.svg'],
    techStack: ["Three.js", "TypeScript", "Vite", "Node.js", "WebSockets", "Redis"],
    overview: "Lagos Foosball is a browser-based 3D table-football game made by JFT Games, a small team of game producers, for use with the Lagos Life game API. Two people can play each other live online, or play solo against a bot. I was the main frontend developer, building the 3D table, the controls and the game interface.",
    features: [
      "Play Online: quick match against a real player",
      "VS Bot: solo play with three difficulty levels",
      "Play a Friend: invite someone with a private room code",
      "Mouse controls to slide and tilt the rods and kick, keys 1 to 4 to switch rods, plus an auto-rod mode",
      "First-to-3 matches on a 3-minute clock with a live scoreboard",
      "Sound and buzz (vibration) toggles"
    ],
    architecture: "Three.js renders the 3D table in the browser, built with Vite and TypeScript. A Node.js server opens a live WebSocket room between the two players, with Redis behind the multiplayer sessions."
  },
];

export const WorkExperienceDetails = [
  {
    ExperienceName: "Software Developer (Contract) - Nexa Digital Ltd",
    ExperienceTime: "September 2026 - Present",
    ExperiencePlace: "Nigeria",
    ExperienceDetails: "Contract role building digital products for clients. Co-founder and lead technical developer of PypeLyne, an AI social media manager built with Nexa Digital, now live with 50+ users.",
  },
  {
    ExperienceName: "Co-Founder & Lead Engineer - Campus Drive (FUTO Ride)",
    ExperienceTime: "June 2026 - Present",
    ExperiencePlace: "Nigeria",
    ExperienceDetails: "Co-founded Campus Drive and built its first product, FUTO Ride: a React Native ride-pooling app that connects FUTO students with campus kekes and shuttles. I built its payment infrastructure (naira bank transfers settled in USDC on Solana), the live driver map, the seat-aware matching system and on-time Telegram alerts.",
  },
  {
    ExperienceName: "Frontend Engineer (Freelance) - BunchBay Technological Solutions Limited",
    ExperienceTime: "December 2025 - Present",
    ExperiencePlace: "Lagos, Nigeria",
    ExperienceDetails: "Freelance work after my internship. Led the frontend and UI design of PlayPick, a football prediction platform built for a client that now has over 1,000 users, using Next.js, Tailwind CSS and Framer Motion on the client's REST APIs.",
  },
  {
    ExperienceName: "Frontend Developer Intern - BunchBay Technological Solutions Limited",
    ExperienceTime: "May 2025 - December 2025",
    ExperiencePlace: "Lagos, Nigeria",
    ExperienceDetails: "Built responsive interfaces for client products alongside designers and backend developers, then moved on to freelance work with the team.",
  },
  {
    ExperienceName: "Freelance Web Developer - Self-employed",
    ExperienceTime: "2024 - September 2025",
    ExperiencePlace: "Remote",
    ExperienceDetails: "Built websites and web apps for clients. Highlight: the admin dashboard for iRent, a house-listing platform that helps University of Benin (UNIBEN) students find houses near campus and routes house agents to them, with user management, payment tracking and finance summaries (React, Vite).",
  },
  {
    ExperienceName: "Bachelor of Technology, Computer Science - Federal University of Technology Owerri",
    ExperienceTime: "January 2022 - December 2026",
    ExperiencePlace: "Owerri, Nigeria",
    ExperienceDetails: "CGPA 4.2 / 5.0, Second Class Upper (made official at convocation in December 2026). Final-year project: a deep learning model (CNN-LSTM) that predicts epileptic seizures from EEG signals.",
  },
];