export type GiftItem = {
    id: number;
    img: string;
    name: string;
    price: string;
    hit: boolean;
    new: boolean;
    discount: boolean;
    category: string;
    gender: 'male' | 'female';
    profession: 'Дизайнер' | 'Програміст' | 'Вчитель' | 'Маркетолог' | 'Майстер краси';
};

const giftItems: GiftItem[] = [
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
        profession: "Дизайнер"
    },
    {
        id: 2,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "19.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: "female",
        profession: "Маркетолог"
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
        profession: "Програміст"
    },
    {
        id: 4,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "89.99",
        hit: false,
        new: false,
        discount: true,
        category: "String Art",
        gender: 'female',
        profession: "Вчитель"
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
        profession: "Вчитель"
    },
    {
        id: 6,
        img: "/products/productC.png",
        name: "String Art Portrait Kit",
        price: "29.99",
        hit: false,
        new: false,
        discount: false,
        category: "String Art",
        gender: 'female',
        profession: "Вчитель"
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
        gender: "male",
        profession: "Дизайнер"
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
        gender: "male",
        profession: "Дизайнер"
    },
];

export default giftItems;
