import { Product } from '@/types/product';

const productTemplate = {
  id: '1',
  category: 'gifts',
  subcategory: '',
  slug: 'string-art-portrait-kit',
  title: 'String Art Portrait Kit',
  available: true,
  description:
    'Custom Thread Portrait Kit, DIY Wall Decor, Personalized String Art Portrait Gift, Handmade Unique Gift, Creative Art Kit, Wall Art Gift',
  fullDescription:
    'Create a masterpiece with our Custom Thread Portrait Kit, perfect for DIY wall decor. This personalized string art portrait gift offers a unique and creative way to express your artistic side. Each kit includes everything you need to craft a handmade, one-of-a-kind piece of wall art, making it an ideal gift for art enthusiasts and those who appreciate personalized decor. Whether for yourself or as a special gift, this creative art kit promises to add a touch of elegance and individuality to any space.',
  delivery:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo massa, rhoncus eget nibh sit amet, lacinia condimentum odio. Fusce tellus justo, facilisis et risus id, gravida molestie sem. Maecenas faucibus, lectus at suscipit viverra, lorem ante molestie erat, a convallis ex velit et mi.',
  price: 85.74,
  addons: [
    { title: 'Бобіна з нитками', price: 100 },
    { title: 'Підставка для схеми', price: 200 },
  ],
  mainImage: '/images/mockedData/productImageOne.webp',
  images: [
    '/images/mockedData/productImageTwo.webp',
    '/images/mockedData/productImageThree.webp',
    '/images/mockedData/productImageFour.webp',
    '/images/mockedData/productImageFive.webp',
    '/images/mockedData/productImageSix.webp',
  ],
  characteristics: [
    { title: 'Вага:', description: '500 г' },
    { title: 'Розмір:', description: '30 x 40 см' },
    {
      title: 'Матеріали:',
      description:
        "дерев'яна основа (МДФ або фанера), цвяхи, нитки з бавовни або поліестеру",
    },
    { title: 'Виробник:', description: 'ArtLine, Україна' },
    {
      title: 'Що входить у набір:',
      description: [
        "Дерев'яна основа з нанесеною схемою",
        'Комплект цвяхів',
        'Нитки для створення портрета',
        'Молоточок (опціонально, залежно від комплекту)',
        'Інструкція з покроковим керівництвом',
        'Шаблон з дизайном для натягування ниток',
      ],
    },
    { title: 'Артикул:', description: '10987656' },
  ],
  idealFor: [
    'Розвитку моторики',
    'Антистрес-терапії',
    'Заняття на вечір',
    'Хобі для дозвілля',
    'Релаксу та медитації',
    'Розвитку моторики',
    'Хобі для дозвілля',
  ],
  benefits: [
    {
      icon: '/images/mockedData/productBenefitOne.svg',
      description: 'Швидка доставка',
    },
    {
      icon: '/images/mockedData/productBenefitTwo.svg',
      description: 'Висока якість',
    },
    {
      icon: '/images/mockedData/productBenefitThree.svg',
      description: 'Відмінний подарунок',
    },
  ],
  colors: [
    { title: 'бежевий', hex: '#D88164' },
    { title: 'чорний', hex: '#545454' },
  ],
};

const createProducts = (template: Product, count: number): Product[] => {
  return Array.from({ length: count }, (_, i) => {
    const product: Product = {
      ...template,
      id: `${i + 1}`,
      title: `${template.title} #${i + 1}`,
      slug: `${template.slug}-${i + 1}`,
    };

    if ((i + 1) % 4 === 0) {
      product.bestseller = true;
    } else if ((i + 1) % 4 === 1) {
      product.newProduct = true;
    } else if ((i + 1) % 4 === 2) {
      product.discountedPrice = 70;
    }

    return product;
  });
};

export const productsList = createProducts(productTemplate, 100);
