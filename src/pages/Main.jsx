import Header from "@/components/header/Header.jsx";
import MainSlider from "@/components/mainPage/MainSlider";
import ItemsSlider from "@/components/mainPage/ItemsSlider";
import ItemsList from "@/components/mainPage/ItemsList.jsx";
import Discounts from "@/components/discounts/discounts.jsx";
import banners from "@/data/banners/banners";
import DiscountsItem from "@/components/discounts/DiscountsItem.jsx";
import category from "@/data/product/product"
import DiscountsTotalBlock from "@/components/discounts/DiscountsTotalBlock.jsx"
import bannersTotalBlock from "@/data/banners/TotalBlockBanners"

const categoriesForMan = category.categories.slice(0, 8);
const categoriesForWoman = category.categories.slice(0, 4);

const Main = () => {
  return (
    <div>
      <div className="max-w-[1230px] m-auto">
        <Header/>
      </div>
      <MainSlider />
      <div className="max-w-[1230px] m-auto">
          <Discounts >
            {banners.bannersData.map(el => <DiscountsItem item={el} key={`Banner_${el.id}`}/>)}
          </Discounts>
          <ItemsSlider itemsType="New Arrival" itemsCategories={category.categories} />
          <DiscountsTotalBlock bannersTotalBlock={bannersTotalBlock.totalBlockBanner}/>
          <ItemsList itemsCategories={categoriesForMan} itemsType="Categories For Man" />
          <ItemsList itemsCategories={categoriesForWoman} itemsType="Categories For Woman" />
      </div>
      
     
      
    </div>
  );
};

export default Main;
