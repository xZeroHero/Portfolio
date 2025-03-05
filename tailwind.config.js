/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/main/resources/templates/index.{html,js})"],
  theme: {
    extend: {},
  },
  plugins: [],
}
console.log('Scanning files:', module.exports.content)
