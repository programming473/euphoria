import Title from "./Title";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ItemsList = (props) => {
  const findGender = props.itemsCategories.find(item => item.gender);
  return (
    <div className="my-[100px] causten-font">
     {findGender ? <Title title="Categories For Men"/> : <Title title="Categories For Women"/>}
      <div className="flex flex-row flex-wrap gap-[50px] basis-3/12">
        {props.itemsCategories.map((item) => {
          return (
            <Link to={item.link} className=" w-[270px] hover-effect " key={`Product_${item.id}`}>
              <img
                className="h-[390px] w-[270px] object-cover rounded-xl"
                src={item.img}
                alt={item.title}
              />
              <div className="flex justify-between mt-[15px]">
                <div>
                  <h3 className="text-[17px] text-[#2A2F2F] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[13px]  text-[#7F7F7F]">Explore Now!</p>
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
