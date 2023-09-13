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
import Footer from "../components/footer/Footer.jsx";
import categories from "../data/product/product.js"

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
          <ItemsList itemsCategories={category.categories.filter(item => item.gender).slice(0, 8)} />
          <ItemsList itemsCategories={category.categories.filter(item => !item.gender).slice(0, 4)}/>
      </div>
       <Footer/>
      
    </div>
  );
};

export default Main;
