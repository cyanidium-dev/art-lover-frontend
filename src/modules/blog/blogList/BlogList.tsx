'use client';
import { Suspense } from 'react';
import { articlesList } from './mockedData';
import Loader from '@/shared/components/loader/Loader';
import Pagination from '@/shared/components/pagination/Pagination';
import BlogCard from './BlogCard';
import Container from '@/shared/components/container/Container';
import BlogListImages from './BlogListImages';

const SECTION_ID = 'blog-page-blog-list';

const ITEMS_PER_PAGE = 4;

export default function BlogList() {
  return (
    <section id={SECTION_ID} className="pt-8 xl:pt-[59px] pb-20 xl:pb-[140px]">
      <Container className="relative">
        <BlogListImages />
        <Suspense fallback={<Loader />}>
          <Pagination
            items={articlesList}
            scrollTargetId={SECTION_ID}
            useItemsPerPage={() => ITEMS_PER_PAGE}
            renderItems={currentItems => (
              <ul
                id={SECTION_ID}
                className="flex flex-col sm:flex-row sm:flex-wrap gap-6 md:gap-y-12"
              >
                {currentItems.map(article => (
                  <li
                    key={article?.id}
                    className="h-full sm:w-[calc(50%-12px)]"
                  >
                    <BlogCard article={article} />
                  </li>
                ))}
              </ul>
            )}
          />
        </Suspense>
      </Container>
    </section>
  );
}
