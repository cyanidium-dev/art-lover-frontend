import { Product } from '@/types/product';

const productTemplate = {
  id: '1',
  category: { slug: 'gifts', title: 'Подарунки', description: '' },
  slug: 'string-art-portrait-kit',
  title: 'String Art Portrait Kit',
  price: 85.74,
  images: [{ url: '/images/mockedData/productImageOne.webp', alt: '' }],
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
    'Творчого часу з родиною',
    'Антистрес-терапії',
    'Заняття на вечір',
    'Хобі для дозвілля',
    'Релаксу та медитації',
    'Розвитку моторики',
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
