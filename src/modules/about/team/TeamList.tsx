import * as motion from 'motion/react-client';
import { listVariants } from '@/shared/utils/animationVariants';
import { teamList } from './mockedData';
import TeamCard from './TeamCard';

export default function TeamList() {
  if (!teamList || !teamList.length) return null;

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
      className="flex flex-col md:flex-row gap-6 md:gap-4 xl:gap-5"
    >
      {teamList.slice(0, 3).map((teammate, idx) => (
        <TeamCard key={idx} teammate={teammate} />
      ))}
    </motion.ul>
  );
}
