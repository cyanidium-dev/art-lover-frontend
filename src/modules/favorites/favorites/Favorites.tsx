import { productsList } from '@/modules/home/bestsellers/mockedData';
import Container from '@/shared/components/container/Container';
import NoItems from './NoItems';
import FavoritesList from './FavoritesList';
import FavoritesImages from './FavoritesImages';

const SECTION_ID = 'favorites-page-list';

export default function Favorites() {
  return (
    <section id={SECTION_ID} className="pt-8 xl:pt-20 pb-20 xl:pb-[140px]">
      <Container className="relative">
        <FavoritesImages />
        {!productsList || !productsList.length ? (
          <NoItems />
        ) : (
          <FavoritesList favoritesList={productsList} />
        )}
      </Container>
    </section>
  );
}
