import { Review } from '@/types/review';

const reviewTemplate = {
  id: '1',
  title: 'String Art Portrait Kit',
  images: [{ url: '/images/mockedData/productImageOne.webp', alt: '' }],
  rating: 4.5,
  author: 'Анна Ховавко',
  text: 'Замовляла тут фарби та пензлі – якість просто чудова! Кольори яскраві, а матеріали зручні у використанні. Доставка швидка, і все було добре запаковано. Тепер це мій улюблений магазин!',
  createdAt: '2025-04-03 17:08:27.429+00',
};

const createReviews = (template: Review, count: number): Review[] => {
  return Array.from({ length: count }, (_, i) => {
    const review: Review = {
      ...template,
      id: `${i + 1}`,
      title: `${template.title} #${i + 1}`,
    };

    return review;
  });
};

export const reviewsList = createReviews(reviewTemplate, 100);
