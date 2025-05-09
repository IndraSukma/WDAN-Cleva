/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    ...(process.env.NODE_ENV === "production"
      ? { cssnano: { preset: "default" } }
      : {}),
  },
};
