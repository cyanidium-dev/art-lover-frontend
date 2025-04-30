'use client';
import { Suspense } from 'react';
import { articlesList } from './mockedData';
import Loader from '@/shared/components/loader/Loader';
import Pagination from '@/shared/components/pagination/Pagination';
import BlogCard from './BlogCard';
import Container from '@/shared/components/container/Container';

const SECTION_ID = 'blog-page-blog-list';

const ITEMS_PER_PAGE = 4;

export default function BlogList() {
  return (
    <section id={SECTION_ID} className="pt-8 xl:pt-[59px]">
      <Container>
        <Suspense fallback={<Loader />}>
          <Pagination
            items={articlesList}
            scrollTargetId={SECTION_ID}
            useItemsPerPage={() => ITEMS_PER_PAGE}
            renderItems={currentItems => (
              <ul id={SECTION_ID} className="flex flex-col gap-6">
                {currentItems.map(article => (
                  <li key={article?.id}>
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
