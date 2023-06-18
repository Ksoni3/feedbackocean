import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className=" hidden rounded  lg:flex items-center gap-3 border px-3">
      <AiOutlineSearch className="text-lg font-bold text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="p-1 w-40 outline-none"
      />
    </div>
  );
};

export default SearchBar;
