export default {
  mode: "universal",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/ir.png" }]
  },
  loading: { color: "#FFEB3B" },
  css: ["~/assets/css/main.scss"],
  plugins: [],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxtjs/dotenv"],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
};
