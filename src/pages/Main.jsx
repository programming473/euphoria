import Header from "../components/header/Header.jsx";
import MainSlider from "../components/mainPage/MainSlider";
import ItemsSlider from "../components/mainPage/ItemsSlider";
import ItemsList from "../components/mainPage/ItemsList.jsx";
import Discounts from "../components/discounts/discounts.jsx";
import { bannersData } from "@/data/banners/banners";
import DiscountsItem from "@/components/discounts/DiscountsItem.jsx";

const itemsCategories = [
  {
    id: 1,
    title: "Full sleeve",
    img: "https://images.pexels.com/photos/6500170/pexels-photo-6500170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
  },
  {
    id: 2,
    title: "Active T-Shirts",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
  {
    id: 3,
    title: "Urban Shirts",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
  {
    id: 4,
    title: "Knitted Joggers",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
  {
    id: 5,
    title: "Casual Hoodies",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
  {
    id: 6,
    title: "Denim Jeans",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
  {
    id: 7,
    title: "Leather Jackets",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
  {
    id: 8,
    title: "Formal Suits",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
  {
    id: 9,
    title: "Formal Suits",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
  {
    id: 10,
    title: "Formal Suits",
    img: "https://i.ibb.co/1snqZfn/Rectangle-28-1.png",
    link: "#",
  },
];
const categoriesForMan = itemsCategories.slice(0, 8);
const categoriesForWoman = itemsCategories.slice(0, 4);

const Main = () => {
  return (
    <div>
      <div className="max-w-[1230px] m-auto">
        <Header/>
      </div>
      <MainSlider />
      <div className="max-w-[1230px] m-auto">
          <Discounts >
            {bannersData.map(el => <DiscountsItem item={el} key={`Banner_${el.id}`}/>)}
          </Discounts>
      </div>
      <ItemsSlider itemsType="New Arrival" itemsCategories={itemsCategories} />
      <ItemsList itemsCategories={categoriesForMan} itemsType="Categories For Man" />
      <ItemsList itemsCategories={categoriesForWoman} itemsType="Categories For Woman" />
    </div>
  );
};

export default Main;
