export const items = [
    {
        id: 1,
        text: "html",
        content:
            "html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, html-ի մասին, ",
    },
    {
        id: 2,
        text: "css",
        content:
            "css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, css-ի մասին, ",
    },
    {
        id: 3,
        text: "js",
        content:
            "js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, js-ի մասին, ",
    },
    {
        id: 4,
        text: "react",
        content:
            "react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, react-ի մասին, ",
    },
    {
        id: 5,
        text: "next",
        content:
            "next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, next-ի մասին, ",
    },
];

export const teamMembers = [
    { name: "Արման", role: "մասնագիտություն", img: "/staff/Arman.jpeg" },
    { name: "Նարինե", role: "մասնագիտություն", img: "/staff/Narine.jpeg" },
    { name: "Գևորգ", role: "մասնագիտություն ", img: "/staff/Gevorg.jpg" },
    { name: "Հերմինե", role: "մասնագիտություն", img: "/staff/Hermine.jpg" }
];

export const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

