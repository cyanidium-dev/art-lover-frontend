import * as motion from 'motion/react-client';
import { listVariants } from '@/shared/utils/animationVariants';
import DeliveryItem from './DeliveryItem';

export default function DeliveryList() {
  const deliveryList = [
    {
      title: "Кур'єром ArtLover",
      description:
        'Безкоштовна доставка при замовленні від 500 грн. Для замовлень на суму до 500 грн вартість доставки складає 50 грн. Доставка здійснюється протягом 1-3 робочих днів.',
      image: { url: '/images/deliveryPage/icons/courier.svg', alt: 'courier' },
    },
    {
      title: 'Нова Пошта (Самовивіз)',
      description:
        'Безкоштовна доставка при замовленні від 600 грн. Для замовлень на суму до 600 грн вартість доставки розраховується за тарифами перевізника. Термін доставки 1-3 робочі дні. Для отримання потрібно мати документ, що підтверджує особу.',
      image: {
        url: '/images/deliveryPage/icons/novaPost.svg',
        alt: 'nova poshta',
      },
    },
    {
      title: 'Нова Пошта (Поштомат)',
      description:
        'Безкоштовна доставка при замовленні від 300 грн. Для замовлень до 300 грн вартість доставки розраховується за тарифами перевізника. Термін доставки 1-3 робочі дні. Отримання здійснюється через SMS-код або у додатку "Нова Пошта". Замовлення зберігається у поштоматі до 4 днів.',
      image: {
        url: '/images/deliveryPage/icons/novaPost.svg',
        alt: 'nova poshta',
      },
    },
    {
      title: "Нова Пошта (Кур'єром)",
      description:
        "Безкоштовна доставка при замовленні від 500 грн. Для замовлень на суму до 500 грн вартість доставки розраховується за тарифами перевізника. Термін доставки залежить від регіону та складає від 1 до 3 робочих днів. Кур'єр зв'яжеться з вами для уточнення часу доставки.",
      image: {
        url: '/images/deliveryPage/icons/novaPost.svg',
        alt: 'nova poshta',
      },
    },
    {
      title: 'Укрпошта (Самовивіз)',
      description:
        'Безкоштовна доставка при замовленні від 500 грн. Для замовлень на суму до 500 грн вартість доставки розраховується за тарифами перевізника. Термін доставки залежить від регіону і складає від 3 до 7 робочих днів. ',
      image: {
        url: '/images/deliveryPage/icons/ukrPost.svg',
        alt: 'ukrposhta',
      },
    },
    {
      title: 'Укрпошта (Поштомат)',
      description:
        'Безкоштовна доставка при замовленні від 500 грн. Для замовлень на суму до 500 грн вартість доставки розраховується за тарифами перевізника. Термін доставки складає 3-7 робочих днів. Для отримання скористайтесь кодом, який ви отримаєте через SMS або в додатку Укрпошти.',
      image: {
        url: '/images/deliveryPage/icons/ukrPost.svg',
        alt: 'ukrposhta',
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
