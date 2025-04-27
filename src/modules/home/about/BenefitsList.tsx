import BenefitItem from './BenefitItem';

export default function BenefitsList() {
  const benefitsList = [
    { value: '1000+', description: 'Нових клієнтів' },
    { value: '900+', description: 'Задоволених клієнтів' },
    { value: '1200+', description: 'Прийнятих замовлень' },
  ];

  return (
    <ul className="flex gap-x-4">
      {benefitsList.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} />
      ))}
    </ul>
  );
}
