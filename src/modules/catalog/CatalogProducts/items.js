const productTemplate = {
  id: '1',
  slug: 'string-art-portrait-kit',
  title: 'String Art Portrait Kit',
  price: 85.74,
  images: [{ url: '/images/mockedData/productImageOne.webp', alt: '' }],
};

const createProducts = (template, count) => {
  return Array.from({ length: count }, (_, i) => {
    const product = {
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

export const productsList = createProducts(productTemplate, 12);
