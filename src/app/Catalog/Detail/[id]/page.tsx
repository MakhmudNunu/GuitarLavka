import CatalogWidget from "@/pages/Catalog/Detail/CatalogWidget/CatalogWidget"
import LikeIt from "@/pages/Catalog/Detail/LikeIt/LikeIt"
import ProductView from "@/pages/Catalog/Detail/ProductView/ProductView"
import Tabs from "@/pages/Catalog/Detail/Tabs/Tabs"


const DetailPage = () => {
    return (
        <>
            <ProductView />
            <Tabs />
            <CatalogWidget />
            <LikeIt />
        </>
    )
}

export default DetailPage
