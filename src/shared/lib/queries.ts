export const allCategoriesQuery = `
  *[_type == "category"] | order(_createdAt asc) {
  "id": _id,
  "title": title[$lang],
  "slug": slug.current,
  icon,
  "subcategories": subcategories[]->{
    "id": _id,
    "title": title[$lang],
    "slug": slug.current
  }
}
`;

export const allPostsQuery = `
  *[_type == "post"]  | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "description": description[$lang],
    "text": text[$lang],
    "images": images[].asset->url,
    "seoTitle": seo.title[$lang],
    "seoDescription": seo.description[$lang],
  }
`;

export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    "id": _id,
    "slug": slug.current,
    "title": title[$lang],
    "subtitle": subtitle[$lang],
    "description": description[$lang],
    "text": text[$lang],
    "images": images[].asset->url,
    "seoTitle": seo.title[$lang],
    "seoDescription": seo.description[$lang],
    }
`;

export const allReviewsQuery = `*[_type == "product" && defined(reviews)][].reviews[]`;
