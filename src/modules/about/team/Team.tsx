import Container from '@/shared/components/container/Container';
import TeamList from './TeamList';
import { Suspense } from 'react';
import Loader from '@/shared/components/loader/Loader';

export default function Team() {
  return (
    <section className="pt-8 xl:pt-14">
      <Container>
        <h2 className="mb-6 xl:mb-10 text-[18px] xl:text-[32px] font-semibold xl:font-medium leading-[140%] uppercase">
          Наша творча команда
        </h2>
        <Suspense fallback={<Loader />}>
          <TeamList />
        </Suspense>
      </Container>
    </section>
  );
}
