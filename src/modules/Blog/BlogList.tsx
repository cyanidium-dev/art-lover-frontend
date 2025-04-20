'use client';

import Image from 'next/image';
import Link from 'next/link';

type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
};

type Props = {
    posts: BlogPost[];
};

const BlogList = ({ posts }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="bg-white rounded-lg p-4 shadow-md flex flex-col gap-2"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={180}
                        className="rounded-md object-cover w-full h-[180px]"
                    />

                    <h3 className="text-[14px] font-semibold text-[var(--main-dark-color)] leading-tight">
                        {post.title}
                    </h3>

                    <p className="text-[12px] text-gray-500">{post.excerpt}</p>

                    <div className="flex justify-between items-center text-[11px] text-gray-400">
                        <span>{post.readTime} хв читання</span>
                        <Link
                            href={`/blog/${post.id}`}
                            className="bg-[var(--main-orange)] text-white text-[12px] rounded-full px-3 py-1"
                        >
                            →
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
