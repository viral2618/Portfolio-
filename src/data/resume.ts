export const personalInfo = {
  name: 'Viral Makwana',
  title: 'Full Stack Developer',
  tagline: 'Next.js · React · TypeScript · Node.js',
  summary:
    'Full Stack Developer with hands-on experience building and deploying scalable web applications using Next.js, React.js, TypeScript, Node.js, MongoDB, and Socket.IO. Skilled in REST API development, real-time systems, authentication, WebRTC, and cloud deployment with Docker, CI/CD, and Railway. Proven track record of delivering 3+ production-ready applications independently.',
  email: 'viralmak32@gmail.com',
  phone: '+91 86573 30457',
  location: 'Mumbai, Maharashtra',
  github: 'https://github.com/viral2618',
  linkedin: 'https://www.linkedin.com/in/viral-makwana-26s18v/',
}

export const skills = [
  {
    category: 'Frontend',
    icon: 'Palette',
    items: ['Next.js', 'React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Redux', 'React Hook Form', 'Zod'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'REST API', 'NextAuth.js', 'JWT Auth', 'Bcrypt', 'Nodemailer', 'Socket.IO', 'WebRTC'],
  },
  {
    category: 'Database',
    icon: 'Database',
    items: ['MongoDB', 'Mongoose', 'Firebase Firestore', 'Prisma ORM', 'Redis', 'Supabase (PostgreSQL)', 'MeiliSearch'],
  },
  {
    category: 'Cloud & Tools',
    icon: 'Cloud',
    items: ['AWS S3', 'Cloudflare R2', 'Firebase', 'Vercel', 'Railway', 'Docker', 'Nginx', 'GitHub Actions', 'Kubernetes', 'Git', 'Postman', 'Figma'],
  },
  {
    category: 'Concepts',
    icon: 'Lightbulb',
    items: ['Agile', 'CI/CD', 'PWA', 'Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Code Review'],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Za-charity Feed Foundation',
    period: 'Nov 2025 – Present',
    type: 'Full-time',
    points: [
      'Built and deployed a full-stack Progressive Web App using Next.js 15, TypeScript, and Redux Toolkit; implemented JWT-based authentication with NextAuth.js.',
      'Designed location-based search using Leaflet.js and GPS integration; modelled database schemas with Prisma ORM on MongoDB.',
      'Implemented offline support, push notifications via Firebase Cloud Messaging, and background sync; enabled installable PWA on mobile and desktop.',
      'Developed RESTful API layer to support a Flutter mobile client; implemented Redis caching reducing database load significantly.',
      'Integrated Firebase Admin SDK, Cloudflare R2, MeiliSearch, and Hostinger SMTP; built responsive UI with Tailwind CSS, shadcn/ui, and dark mode.',
    ],
    stack: ['Next.js 15', 'TypeScript', 'MongoDB', 'Prisma ORM', 'NextAuth.js', 'Redux Toolkit', 'Firebase', 'Leaflet.js', 'MeiliSearch', 'Redis', 'Cloudflare R2', 'Tailwind CSS'],
  },
]

export const projects = [
  {
    title: 'Couple Connect',
    subtitle: 'Real-Time Couples Platform',
    period: '2024 – 2025',
    link: 'https://coupleconnect2618.up.railway.app/',
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
    icon: 'Heart',
    points: [
      'Built a full-stack real-time couples platform with private chat, video calling, and multiplayer games using Next.js 14, Node.js, Socket.IO, and MongoDB Atlas.',
      'Implemented WebRTC-based video calling using MediaSoup SFU with DTLS-SRTP encryption, deployed on Railway.',
      'Developed real-time messaging with Socket.IO supporting reactions, reply threads, read receipts, and full-text search via MeiliSearch.',
      'Designed secure auth with JWT, OTP email verification, device fingerprinting, rate limiting, and session management.',
    ],
    stack: ['Next.js 14', 'TypeScript', 'Node.js', 'Socket.IO', 'MediaSoup', 'MongoDB Atlas', 'Prisma ORM', 'MeiliSearch', 'Docker', 'Nginx', 'Railway', 'GitHub Actions'],
  },
  {
    title: 'TiffinBox',
    subtitle: 'Home Food Delivery Platform',
    period: '2024 – 2025',
    link: '#',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    icon: 'UtensilsCrossed',
    points: [
      'Built a full-stack home food delivery platform enabling local home cooks to list daily meals and accept nearby orders.',
      'Implemented real-time order tracking with Socket.IO and role-based authentication (Cook / Customer) using JWT.',
      'Integrated Razorpay payment gateway and Cloudinary for food photo uploads with optimized delivery.',
      'Designed location-based cook discovery using pincode and GPS filtering for hyperlocal food ordering.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Razorpay', 'Cloudinary', 'JWT', 'Vercel', 'Render'],
  },
  {
    title: 'CricketLive',
    subtitle: 'Real-Time Cricket Streaming Platform',
    period: '2023 – 2024',
    link: 'https://local-cricket-live-tournament-web.vercel.app/',
    gradient: 'from-green-500 via-teal-500 to-cyan-500',
    icon: 'Radio',
    points: [
      'Developed a real-time cricket streaming platform supporting live HLS and YouTube streams with multi-camera switching.',
      'Engineered real-time scoring using WebSockets delivering ball-by-ball updates with automatic CRR/RRR calculations.',
      'Implemented JWT auth with email verification, Google OAuth, bcrypt hashing, and rate limiting.',
      'Deployed on Railway with CI/CD via GitHub Actions and Kubernetes-based scalable architecture for monorepo.',
    ],
    stack: ['Next.js 14', 'TypeScript', 'Node.js', 'Socket.IO', 'Supabase', 'Tailwind CSS', 'Railway', 'Kubernetes', 'GitHub Actions'],
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology (Bsc-IT)',
  university: 'University of Mumbai',
  location: 'Mumbai, Maharashtra',
  period: '2021 – 2024',
  cgpa: '8.6 / 10',
}
