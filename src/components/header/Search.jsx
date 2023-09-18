import { BiSearch } from "react-icons/bi";

const Search = () => {
    return (
        <div className="w-[267px]">
            <label className="flex items-center gap-3 p-[12px_20px] cursor-pointer rounded-lg bg-[#F6F6F6]" htmlFor="Search">
                <BiSearch className="text-[#807D7E] w-[20px] h-[20px]"/>
                <input id="Search" className="text-[#807D7E] focus:outline-none  bg-[#F6F6F6] text-[16px] " type="text" placeholder="Search" />
            </label>
        
        </div>
    )
}

export default Search;