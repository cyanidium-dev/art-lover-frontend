'use client';

import SliderControllers from '@/shared/components/SliderControllers/SliderControllers';
import { BlogPostItem } from '@/types/blogPostItem';
import { ArrowRight, Clock1 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



type Props = {
    posts: BlogPostItem[];
};

const BlogList = ({ posts }: Props) => {
    return (

        <div>


        <div className="flex flex-col gap-4">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md flex flex-col gap-2 border-transparent p-3"
                >
                    <div className='h-[116px] w-full overflow-hidden rounded-md bg-[var(--main-light-color)]' >
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                            height={116}
                            className="rounded-md object-cover w-full"
                        />
                    </div>

                    <h3 className="text-[14px] font-medium text-[var(--main-orange)] leading-tight line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-[12px]  line-clamp-2">{post.excerpt}</p>

                    <div className="flex justify-between gap-3 items-center text-[12px] ">

                        <div className=' border rounded-full w-full flex gap-1 items-center justify-center py-2 px-3 text-[var(--main-dark-color)]'>
                            <span className="text-[var(--main-dark-color)] mr-3 "><Clock1 width={20} height={20} /></span>
                            <span className="text-[var(--main-dark-color)] ">{post.readTime} чв читання</span>
                        </div>


                        <Link
                            href={`/blog/${post.id}`}
                            className="bg-[var(--main-orange)] px-1.5 text-white text-[12px] rounded-lg w-[44px] h-[44px] inline-flex items-center justify-center transition hover:bg-orange-600"
                        >
                            <ArrowRight width={28} height={28} />
                        </Link>
                    </div>
                </div>
            ))}
            </div>
            <SliderControllers />
        </div>
    );
};

export default BlogList;
