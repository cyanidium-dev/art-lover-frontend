export const allCategoriesQuery = (lang: string) => `
  *[_type == "category"]{
    _id,
    "title": title["${lang}"],
    "slug": slug.current,
    "icon": icon.asset->url,
    subcategories
  }
`;

export const allPostsQuery = (lang: string) => `
  *[_type == "post"]{
    _id,
    "title": title["${lang}"],
    "slug": slug.current,
    "photos": photos[].asset->url,
    "seoTitle": seo.title["${lang}"],
    "seoDescription": seo.description["${lang}"],
    "seoImage": seo.image.asset->url
  }
`;

export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    "title": title[$lang],
    "slug": slug.current,
    "photos": photos[].asset->url,
    "seoTitle": seo.title[$lang],
    "seoDescription": seo.description[$lang],
    "seoImage": seo.image.asset->url
  }
`;
