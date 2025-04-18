'use client';

import Image, { StaticImageData } from 'next/image';

type Props = {
    src: StaticImageData | string;
    alt?: string;
};

const CategoryBanner = ({ src, alt = 'Category banner' }: Props) => {
    return (
        <div className="mb-6">
            <Image
                src={src}
                alt={alt}
                priority
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
            />
        </div>
    );
};

export default CategoryBanner;
