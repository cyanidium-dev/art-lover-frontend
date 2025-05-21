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

export const allNewProductsQuery = `*[_type == "product"] | order(publishedAt desc)[0...20]{
_id,
  "title": title[$lang],
  price,
  discountedPrice,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categorySlug": category->slug.current,
  "categoryTitle": category->title,
  "subcategorySlug": subcategory->slug.current
}`;

export const allDiscountedProductsQuery = `*[_type == "product" && defined(discountedPrice)]{
  _id,
  "title": title[$lang],
  price,
  discountedPrice,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categorySlug": category->slug.current,
  "subcategorySlug": subcategory->slug.current
}`;

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

export const allReviewsQuery = `*[_type == "product" && defined(reviews)]{
  reviews[] {
    ...,
    "productTitle": ^.title[$lang],
    "productSlug": ^.slug.current,
    "productMainImage": ^.mainImage.asset->url,
    "productCategorySlug": ^.category->slug.current,
    "createdAt": ^._createdAt
  }
}.reviews[]
`;
