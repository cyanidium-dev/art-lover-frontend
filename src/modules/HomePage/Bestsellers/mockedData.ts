type Product = typeof productTemplate & {
  bestseller?: boolean;
  newProduct?: boolean;
  discounted?: boolean;
};

const productTemplate = {
  id: '1',
  slug: 'string-art-portrait-kit',
  title: 'String Art Portrait Kit',
  price: 85.74,
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
      product.discounted = true;
    }

    return product;
  });
};

export const productsList = createProducts(productTemplate, 100);
