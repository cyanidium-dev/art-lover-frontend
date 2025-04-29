import { teamList } from './mockedData';
import TeamCard from './TeamCard';

export default function TeamList() {
  if (!teamList || !teamList.length) return null;

  return (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-4 xl:gap-5">
      {teamList.map((teammate, idx) => (
        <TeamCard key={idx} teammate={teammate} />
      ))}
    </ul>
  );
}
