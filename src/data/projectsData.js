export const projects = [
  {
    id: "online-bookstore",
    title: "Online Bookstore Web Application",
    tagline:
      "Full-stack retail system with catalog, shopping cart, and transactional order operations backed by MongoDB Atlas.",
    videoUrl: "https://drive.google.com/file/d/1zgnKwM54j7-qLpjP4-y86gxd8aWYuQF8/preview",
    videoType: "iframe",
    bullets: [
      "Developed RESTful APIs using Node.js and Express.js to support product catalog queries, shopping cart functionality, and order transactions.",
      "Designed MongoDB Atlas collections and Mongoose models for products, orders, and inventory records to organize application data.",
      "Implemented administrative API routes and request validation, using Postman to test request payloads and endpoint behavior.",
      "Integrated backend API responses with a React (Vite) interface to support catalog browsing and inventory management.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB Atlas", "React (Vite)", "Mongoose", "Postman"],
    repoUrl: "https://github.com/Rjjjj1412/Web-Programming-Final-Project",
  },
  {
    id: "soft-horizon",
    title: "The Soft Horizon Travel Blog Platform",
    tagline:
      "MVC-based travel blog with dynamic category filtering, authentication, and threaded comments built with Laravel.",
    videoUrl: "https://drive.google.com/file/d/1LURL9ekdQdq1eqzquX34hxdxHfDX0o9q/preview",
    videoType: "iframe",
    bullets: [
      "Developed an MVC-based travel blog platform using Laravel and SQLite, supporting blog creation, category tagging, and dynamic content filtering.",
      "Implemented user authentication and relational database models using Laravel Eloquent ORM to manage users, posts, and threaded comments.",
      "Built dynamic interface components using Blade templates, Alpine.js, and Tailwind CSS to support content browsing and user interaction.",
    ],
    stack: ["Laravel", "PHP", "SQLite", "Eloquent ORM", "Blade", "Tailwind CSS", "Alpine.js"],
    repoUrl: "https://github.com/Rjjjj1412/Dynamic-Web-Final-Project",
  },
  {
    id: "kidsbank",
    title: "KidsBank Mobile Application",
    tagline:
      "Mobile family financial app with chore approval workflows and real-time ledger balance synchronization.",
    videoUrl: "https://drive.google.com/file/d/1GxaJ9NZey1JaAmLiGlu_AOSAdElBEHDp/preview",
    videoType: "iframe",
    bullets: [
      "Designed a Firebase Firestore database structure to manage chore assignments, fund unlocking, and parent-child ledger balances.",
      "Implemented real-time Firestore listeners to synchronize transaction updates and chore approval statuses between parent and child dashboards.",
      "Integrated Flutter application workflows with Firebase Authentication and Firestore to support user sessions and data management.",
    ],
    stack: ["Flutter", "Firebase Firestore", "Firebase Auth", "Dart"],
    repoUrl: "https://github.com/Michael679089/CS319_wFinals_KidsBank",
  },
  {
    id: "ciit-hackathon",
    title: "MaskOff: Anonymous Social Support App (CIIT 2-Day Hackathon)",
    tagline:
      "Rapid prototype built in 48 hours using Flutter and Firebase Firestore with a mask-based zero-login privacy architecture.",
    videoUrl: null,
    videoType: "placeholder",
    bullets: [
      "Collaborated on the development of an anonymous social support mobile application during a 48-hour hackathon sprint using Flutter and Firebase Firestore.",
      "Designed a zero-login data flow using a mask-based model, allowing users to share thoughts without conventional account registration.",
      "Implemented Firestore real-time listeners to synchronize application data across concurrent testers during the hackathon.",
    ],
    stack: ["Flutter", "Firebase Firestore", "Dart", "Rapid Prototyping"],
    repoUrl: "https://github.com/yuyuyu-226/MaskOff",
  },
];

export default projects;
