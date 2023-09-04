import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <div className="w-[267px]">
            <label className="flex items-center gap-3 p-[12px_20px] rounded-lg focus:outline-none bg-[#F6F6F6]" htmlFor="Search">
                <BsSearch/>
                <input id="Search" className="text-[#807D7E] bg-[#F6F6F6] text-[16px] " type="text" placeholder="Search" />
            </label>
        
        </div>
    )
}

export default Search;