export const allCategoriesQuery = (lang: string) => `
  *[_type == "category"]{
    _id,
    "title": title["${lang}"],
    "slug": slug.current,
    "icon": icon.asset->url,
    subcategories
  }
`;
