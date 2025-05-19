import * as motion from 'motion/react-client';
import { listVariants } from '@/shared/utils/animationVariants';
import DeliveryItem from '../ukraineDelivery/DeliveryItem';

export default function DeliveryList() {
  const deliveryList = [
    {
      title: 'Nova Poshta Global',
      description:
        'Безкоштовна доставка при замовленні від 1000 грн. Для замовлень на суму до 1000 грн вартість доставки розраховується за тарифами перевізника. Термін доставки 5–12 робочих днів. Для отримання потрібно мати документ, що підтверджує особу.',
      image: {
        url: '/images/deliveryPage/icons/novaPost.svg',
        alt: 'nova poshta',
      },
    },
    {
      title: 'Укрпошта',
      description:
        'Безкоштовна доставка при замовленні від 800 грн. Для замовлень на суму до 800 грн вартість доставки залежить від тарифів перевізника. Термін доставки 10–30 робочих днів. Отримати посилку можна у відділенні, пред’явивши документ, що підтверджує особу.',
      image: {
        url: '/images/deliveryPage/icons/ukrPost.svg',
        alt: 'ukrposhta',
      },
    },
    {
      title: 'Meest',
      description:
        'Безкоштовна доставка при замовленні від 1200 грн. Для замовлень на суму до 1200 грн вартість доставки визначається тарифами перевізника. Термін доставки 7–14 робочих днів. Отримання можливе у відділенні або через кур’єра за наявності документа, що підтверджує особу.',
      image: {
        url: '/images/deliveryPage/icons/meest.svg',
        alt: 'meest',
      },
    },
    {
      title: 'DHL',
      description:
        'Вартість доставки розраховується індивідуально залежно від ваги та країни призначення. Термін доставки 2–7 робочих днів. Для отримання необхідно мати документ, що підтверджує особу.',
      image: {
        url: '/images/deliveryPage/icons/dhl.svg',
        alt: 'dhl',
      },
    },
    {
      title: 'FedEx',
      description:
        'Ціна доставки залежить від тарифів перевізника та вибраного типу доставки. Термін доставки 1–5 робочих днів (експрес) або 7–12 днів (стандарт). Отримати посилку можна у відділенні або через кур’єра, пред’явивши документ, що підтверджує особу.',
      image: {
        url: '/images/deliveryPage/icons/fedex.svg',
        alt: 'fedex',
      },
    },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
      className="flex flex-col md:flex-row md:flex-wrap gap-y-6 md:gap-5"
    >
      {deliveryList.map((deliveryItem, idx) => (
        <DeliveryItem key={idx} deliveryItem={deliveryItem} />
      ))}
    </motion.ul>
  );
}
