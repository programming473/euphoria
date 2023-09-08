import Title from "./Title";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ItemsList = ({ itemsCategories, itemsType }) => {
  return (
    <div className="max-w-[1230px] mx-auto my-[100px]">
      <Title itemsType={itemsType} marginBottom="70px" />
      <div className="flex flex-row flex-wrap gap-[50px] basis-3/12">
        {itemsCategories.map((item) => {
          const { id, title, img, link } = item;
          return (
            <Link to={link} className=" w-[270px] hover-effect " key={id}>
              <img
                className="h-[390px] w-[270px] object-cover rounded-xl"
                src={img}
                alt={title}
              />
              <div className="flex justify-between mt-[15px] ">
                <div className=" ">
                  <h2 className="text-[17px] text-[#2A2F2F] font-bold">
                    {title}
                  </h2>
                  <p className="text-[13px] text-[#7F7F7F]">Explore Now!</p>
                </div>
                <div className="flex justify-center items-center">
                  <BsArrowRight className="  text-[#797979]" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
