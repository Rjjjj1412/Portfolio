export const projects = [
  {
    id: "online-bookstore",
    title: "Online Bookstore Web Application",
    tagline:
      "Full-stack retail system with an admin panel, catalog, cart, and order management backed by MongoDB Atlas.",
    videoUrl: "https://drive.google.com/file/d/1zgnKwM54j7-qLpjP4-y86gxd8aWYuQF8/preview", 
    videoType: "iframe",
    bullets: [
      "RESTful API endpoints built with Node.js and Express for catalog queries, shopping carts, and transactional order operations.",
      "MongoDB Atlas collections (adminusers, categories, customers, inventories, orderdetails, orders, products, suppliers) modeled with Mongoose.",
      "Administrative routes with request payload validation via Postman to reject malformed or unauthorized catalog edits.",
    ],
    stack: ["Node.js", "Express", "MongoDB Atlas", "React", "Mongoose", "Postman"],
    repoUrl: "https://github.com/Rjjjj1412/Web-Programming-Final-Project",
  },
  {
    id: "soft-horizon",
    title: "The Soft Horizon Travel Blog Platform",
    tagline:
      "Laravel MVC travel blog with search and filtering, categories, tags, authentication, and threaded comments.",
    videoUrl:
      "https://drive.google.com/file/d/1LURL9ekdQdq1eqzquX34hxdxHfDX0o9q/preview",
    videoType: "iframe",
    bullets: [
      "MVC backend in Laravel 12 with SQLite handling post creation, category tagging, search filters, and nested comment threads.",
      "Eloquent ORM relationships across User, Post, Category, Tag, Comment, Media, and Role, with built-in authentication.",
      "Blade templates with Alpine.js and Tailwind CSS for a lightweight, dynamic UI.",
    ],
    stack: ["Laravel 12", "PHP", "SQLite", "Blade", "Tailwind CSS", "Alpine.js"],
    repoUrl: "https://github.com/Rjjjj1412/Dynamic-Web-Final-Project",
  },
  {
    id: "kidsbank",
    title: "KidsBank Mobile Application",
    tagline:
      "Android family banking app where chore-based rewards unlock funds synced in real time through Firebase.",
    videoUrl: "https://drive.google.com/file/d/1GxaJ9NZey1JaAmLiGlu_AOSAdElBEHDp/preview",
    videoType: "iframe",
    bullets: [
      "Firestore schema for chore assignments, fund unlocking, and parent-child ledger balances.",
      "Real-time Firestore listeners drive chore approvals and instant notifications across parent and child dashboards.",
      "Flutter UI with Firebase Authentication; family accounts designed for up to two parents and ten child profiles (prototype limited to one parent and five children).",
    ],
    stack: ["Flutter", "Firebase Firestore", "Firebase Auth", "Dart", "Android"],
    repoUrl: "https://github.com/Michael679089/CS319_wFinals_KidsBank",
  },
];

export default projects;
