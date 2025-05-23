export const allCategoriesQuery = `
  *[_type == "category"] | order(_createdAt asc) {
  "id": _id,
  "title": title[$lang],
  "subtitle": subtitle[$lang],
  "slug": slug.current,
  icon,
  "subcategories": subcategories[]->{
    "id": _id,
    "title": title[$lang],
    "slug": slug.current
  }
}
`;

export const allProductsByCategoryQuery = `*[_type == "category" && slug.current == $categorySlug] {
  "categoryTitle": title[$lang],
  "categorySubtitle": subtitle[$lang],
  "categorySlug": slug.current,
  "subcategories": subcategories[]->{
    "subcategoryTitle": title[$lang],
    "subcategorySlug": slug.current,
    "products": *[
      _type == "product" && references(^._id)
    ]{
      "title": title[$lang],
      "slug": slug.current,
      price,
      discountedPrice,
      "mainImage": mainImage.asset->url,
       "colors": colors[] {
      "title": name,
      "hex": value.hex
    },
    }
  },
  "products": *[
    _type == "product" && references(^._id)
  ]{
    "title": title[$lang],
    "slug": slug.current,
    price,
    discountedPrice,
    "mainImage": mainImage.asset->url,
     "colors": colors[] {
      "title": name,
      "hex": value.hex
    },
  }
}[0]
`;

export const allBestsellersQuery = `*[_type == "product" && isBestseller == true]{
  _id,
  "title": title[$lang],
  price,
  discountedPrice,
  "colors": colors[] {
      "title": name,
      "hex": value.hex
    },
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categorySlug": category->slug.current,
  "subcategorySlug": subcategory->slug.current
}`;

export const allNewProductsQuery = `*[_type == "product"] | order(publishedAt desc)[0...20]{
_id,
  "title": title[$lang],
  price,
  discountedPrice,
  "colors": colors[] {
      "title": name,
      "hex": value.hex
    },
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
  "colors": colors[] {
      "title": name,
      "hex": value.hex
    },
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categorySlug": category->slug.current,
  "subcategorySlug": subcategory->slug.current
}`;

export const allGiftsQuery = `*[_type == "product" && isGift == true]{
  _id,
  "title": title[$lang],
  price,
  discountedPrice,
  "colors": colors[] {
      "title": name,
      "hex": value.hex
    },
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categorySlug": category->slug.current,
  "subcategorySlug": subcategory->slug.current
}`;

export const singleProductQuery = `
*[_type == "product" && slug.current == $slug][0]{
    "id": _id,
    "slug": slug.current,
    "title": title[$lang],
    "description": description[$lang],
    "fullDescription": fullDescription[$lang][][_type == "block"].children[].text,
    "mainImage": mainImage.asset->url,
    "images": images[].asset->url,
    "categorySlug": category->slug.current,
    "categoryTitle": category->title[$lang],
    "subcategorySlug": subcategory->slug.current,
    "subcategoryTitle": subcategory->title[$lang],
    "gender": gender,
    "price": price,
    "discountedPrice": discountedPrice,
    "inStock": inStock,
    
    "characteristics": {"weight": weight,
    "dimensions": {
      "width": dimensions.width,
      "height": dimensions.height,
      "length": dimensions.length
    },
    "materials": materials[$lang],
    "manufacturer": manufacturer[$lang],
    "kitContents": kitContents[$lang],
    "article": sku},
      "idealFor": tags[].[$lang],
    "colors": colors[] {
      "title": name,
      "hex": value.hex
    },
    "addons": additions[] {
      "title": name[$lang],
      "price": price
    },
    "professions": professions[]-> {
      "id": _id,
      "title": title[$lang],
      "slug": slug.current
    },
    "ageRange": ageRange,
    "isGift": isGift,
    "seoTitle": seo.title[$lang],
    "seoDescription": seo.description[$lang],
    "seoImage": seo.image.asset->url,
    "reviews": reviews[] {
      author,
      rating,
      text
    }
  }
`;

export const allSimilarProductsQuery = `*[_type == "product" 
  && category->slug.current == $categorySlug 
  && slug.current != $excludeSlug
]{
  "title": title[$lang],
  price,
  discountedPrice,
  "colors": colors[] {
      "title": name,
      "hex": value.hex
    },
  "slug": slug.current,
  "categorySlug": category->slug.current,
  "mainImage": mainImage.asset->url,
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
