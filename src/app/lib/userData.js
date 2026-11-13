// Content for the About section: staff ID badge, memo and services quote sheet.

// Real name, shown alongside the "JayBobo" brand name
export const FullName = "Oduoma Joshua Ogorchukwu";

// One place for contact details (used by the hero, contact section and form)
export const ContactDetails = {
  email: "joshuaoduoma@gmail.com",
  phoneDisplay: "+234 913 117 0107",
  phoneTel: "tel:+2349131170107",
  whatsapp: "https://wa.me/2349131170107",
  replyTime: "within 24 hours",
};

// Staff ID badge (front + back)
export const BadgeDetails = {
  name: "JayBobo",
  role: "Full-Stack Developer",
  idNumber: "JB-2026",
  photo: "/badge-photo-round.jpg", // real photo, background removed, shown in a circle
  available: true, // shows "Open to new projects"
  back: [
    ["FULL NAME", "Oduoma Joshua Ogorchukwu"],
    ["BASED IN", "Nigeria"],
    ["WORKS", "Remotely, worldwide"],
    ["TIMEZONE", "WAT (UTC+1)"],
    ["LANGUAGE", "English"],
    ["EDUCATION", "B.Tech Computer Science, FUTO (2026), 4.2 CGPA"],
    ["EXPERIENCE", "2+ years"],
    ["AGE", "21"],
  ],
};

// The bio, written as a memo
export const AboutMemo = {
  to: "Whoever's building something",
  from: "JayBobo",
  re: "Why work with me",
  paragraphs: [
    "I'm Oduoma Joshua Ogorchukwu (JayBobo to most people), a full-stack developer from Nigeria with 2+ years of building real products. I build for clients at BunchBay and Nexa Digital, I co-founded PypeLyne and Campus Drive (FUTO Ride), and I'm finishing my Computer Science degree at FUTO this December.",
    "I build websites, web apps and mobile apps: everything from the screen people tap on to the server and database behind it. My go-to tools are Next.js, React Native, TypeScript, Node.js, PostgreSQL with Supabase, and Redis.",
    "I work remotely with clients anywhere. You get clear updates, honest timelines, and a product that's fast, works on every screen and is easy to grow. I'm open to new projects right now.",
  ],
  // Handwritten sticky notes around the memo
  notes: ["Off duty: snooker & video games", "Always has music on"],
};

// What clients can hire me for, each with real proof from the portfolio
export const Services = [
  {
    title: "Business websites",
    desc: "A fast, good-looking website that brings in customers and shows up on Google.",
    proof: ["Hertz Renewables"],
  },
  {
    title: "Web & mobile apps",
    desc: "From first version to launch: apps people enjoy using, on the web, iPhone and Android.",
    proof: ["PlayPick", "PypeLyne", "FUTO Ride"],
  },
  {
    title: "Dashboards & admin tools",
    desc: "Admin panels where your team manages orders, users, payments and reports in one place.",
    proof: ["Styleet admin"],
  },
  {
    title: "Ongoing support",
    desc: "Updates, fixes and new features after launch, so your product keeps getting better.",
    proof: [],
  },
];
