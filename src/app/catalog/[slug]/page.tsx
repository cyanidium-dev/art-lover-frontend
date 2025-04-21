import CatalogCategoryItem from "@/modules/Catalog/CatalogCategoryItem";
import categoryItems from "@/modules/categoryItems";

interface CatalogPageProps {
    params: Promise<{ slug: string }>;
}



export default async function CatalogPage({
    params,
}: CatalogPageProps) {
    const { slug } = await params;
    const category = categoryItems.find((item) => item.slug === slug);
    if (!category) {
        return <div>Category not found</div>;
    }
    const { id = "", text = "", headerImg = "" } = category;
    



    return (
        <>
            <div>
                <CatalogCategoryItem id={id} text={text} img={headerImg} slug={slug} />
              
          </div>
        </>
    );
}