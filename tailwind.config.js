/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                bodyImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.75)),url('https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg')", // Replace '/path/to/your/image.jpg' with your image path
            }),
        },
    },

    plugins: [],
};
