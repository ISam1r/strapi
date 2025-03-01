export default [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["https://strapi-gt2u.onrender.com",], // Разрешённые домены
      methods: ["GET", "POST", "PUT", "DELETE"], // Разрешённые методы
      headers: ["Content-Type", "Authorization"], // Разрешённые заголовки
      credentials: true, // Если нужно передавать cookies
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
