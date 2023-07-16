module.exports = {
    content: ["./src/**/*.{svelte,js,ts}"],
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: ["synthwave","light", "dark", "cupcake", "dracula"],
    },
};
