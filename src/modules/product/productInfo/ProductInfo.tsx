import Container from '@/shared/components/container/Container';
import ImagePicker from './ImagePicker';
import Characteristics from './Characteristics';
import Benefits from './Benefits';
import IdealFor from './IdealFor';

export default function ProductInfo() {
  return (
    <section className="pb-20 xl:pb-30">
      <Container>
        <ImagePicker />
        <Benefits />
        <IdealFor />
        <Characteristics />
      </Container>
    </section>
  );
}
