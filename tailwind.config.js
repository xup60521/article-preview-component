/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Very_Dark_Grayish_Blue: "hsl(217, 19%, 35%)",
                c_Desaturated_Dark_Blue: "hsl(214, 17%, 51%)",
                c_Grayish_Blue: "hsl(212, 23%, 69%)",
                c_Light_Grayish_Blue: "hsl(210, 46%, 95%)",
            },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"]
            }
        },
    },
    plugins: [],
}

