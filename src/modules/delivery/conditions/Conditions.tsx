import * as motion from 'motion/react-client';
import { listVariants } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import ConditionItem from './ConditionItem';
import ConditionImages from './ConditionImages';

export default function Conditions() {
  const conditionsList = [
    'Ми здійснюємо доставку по всій Україні та за кордон, щоб ви могли отримати улюблені товари для творчості незалежно від вашого місцезнаходження.',
    'Всі замовлення обробляються та відправляються протягом 1-2 робочих днів після підтвердження оплати. ',
    'Доставка здійснюється з понеділка по суботу згідно з графіком роботи вибраної служби доставки. ',
    'Вартість міжнародної доставки залежить від країни отримувача, ваги та габаритів посилки. Замовлення може підлягати митним платежам відповідно до законодавства вашої країни. Термін міжнародної доставки зазвичай складає 7-21 день, але може змінюватися залежно від поштової служби.',
    'Після відправки ви отримаєте номер ТТН, за яким можна відстежити статус доставки на сайті перевізника.',
  ];
  return (
    <section className="pt-8 xl:pt-20">
      <Container className="relative">
        <ConditionImages />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.4 }}
          variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
          className="flex flex-col md:flex-wrap gap-y-6 xl:gap-y-10 gap-x-20 md:h-[216px] lg:h-[166px] xl:h-[332px]"
        >
          {conditionsList.map((condition, idx) => (
            <ConditionItem key={idx} condition={condition} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
