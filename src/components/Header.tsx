import {HeartIcon, Search,  ShoppingBasket} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import SearchBar from "./SearchBar";

export default function Header(
    { onSearch }: { onSearch: Dispatch<SetStateAction<string>> }
){
    return(
        <header className="bg-other-background rounded-4xl flex p-1 justify-between">
            <section className="flex">
                <div className="bg-logo-background inline-block text-black p-2 rounded-3xl">
                    WSecure
                </div>
                <div className="flex justify-center items-center bg-white rounded-3xl ml-2 p-1">
                    <SearchBar onSearch={onSearch}/>
                    <div className="bg-black rounded-full inline-block p-2">
                        <Search size={20}/>
                    </div>
                    
                </div>
            </section>
            
            <section className="text-black flex justify-center items-center gap-x-2">
                <div className="bg-white p-2 rounded-full">
                    <ShoppingBasket size={20}/>
                </div>
                <div className="bg-white rounded-full inline-block p-2 ">
                    <HeartIcon fill="red" stroke="none" size={20}/>
                </div>
                <div className="bg-white rounded-full inline-block p-2 ">
                    Aayushi
                </div>
            </section>
        </header>
    )
}