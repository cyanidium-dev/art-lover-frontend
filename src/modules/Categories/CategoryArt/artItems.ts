export type GiftItem = {
    id: number;
    img: string;
    name: string;
    price: string;
    hit: boolean;
    new: boolean;
    discount: boolean;
    category: string;
    type?: string;
    gender: 'male' | 'female';
    profession: 'Дизайнер' | 'Програміст' | 'Вчитель' | 'Маркетолог' | 'Майстер краси';
};

const artItems: GiftItem[] = [
    {
        id: 1,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "male",
        profession: "Дизайнер",
        type: "StringArt картини нитками"
    },
    {
        id: 2,
        img: "/products/productC.png",
        name: "Картина за номерами",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "female",
        profession: "Маркетолог",
        type: "Картина за номерами"
    },
    {
        id: 3,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "female",
        profession: "Програміст",
        type: "String Art"
    },
    {
        id: 4,
        img: "/products/productC.png",
        name: "Aлмазна мозаїка",
        price: "89.99",
        hit: false,
        new: false,
        discount: true,
        category: "String Art",
        gender: 'female',
        profession: "Вчитель",
        type: "алмазна мозаїка"
    },
    {
        id: 5,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "39.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: 'female',
        profession: "Вчитель",
        type: "інші"
    },
    {
        id: 6,
        img: "/products/productC.png",
        name: "Набір для вишивання",
        price: "29.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: 'female',
        profession: "Вчитель",
        type: "вишивання"
    },
    {
        id: 7,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "female",
        profession: "Програміст",
        type: "String Art"
    },
    {
        id: 8,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "female",
        profession: "Програміст",
        type: "String Art"
    },
    {
        id: 9,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "female",
        profession: "Програміст",
        type: "String Art"
    },
    {
        id: 10,
        img: "/products/productC.png",
        name: "Картина за номерами",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "female",
        profession: "Маркетолог",
        type: "Картина за номерами"
    },
    {
        id: 11,
        img: "/products/productC.png",
        name: "Картина за номерами",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "female",
        profession: "Маркетолог",
        type: "Картина за номерами"
    },
    {
        id: 13,
        img: "/products/productC.png",
        name: "Картини з бісеру ",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "male",
        profession: "Дизайнер",
        type: "Картини з бісеру"
    },
];

export default artItems;
