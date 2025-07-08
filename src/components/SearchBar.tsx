import { Dispatch, SetStateAction } from 'react';
export default function SearchBar(
    { onSearch }: { onSearch: Dispatch<SetStateAction<string>> }
)
{
    return (
        <input 
        type="text" 
        placeholder="Search Products..."
        className="placeholder:text-black placeholder:text-[15px] p-1 focus:border-none focus:outline-none"
        onChange={(e)=>onSearch(e.target.value)}
        aria-label='Search Products'
        />
    )
}