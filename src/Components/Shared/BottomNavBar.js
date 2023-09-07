import React from 'react';
import home from '../../Assets/Shared/home.png'
import wallet from '../../Assets/Shared/wallet.png'
import watchList from '../../Assets/Shared/watchList.png'
import search from '../../Assets/Shared/search.png'

const BottomNavBar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-between z-50 px-4">
            <button className="flex flex-col items-center p-4 gap-2 text-[#34908E] font-semibold border-t-2 border-[#34908E]">
                <img src={home} alt="" />
                Home
            </button>
            <button className="flex flex-col items-center text-[#3C3C4399] p-4 font-semibold gap-2">
                <img src={watchList} alt="" />
                Watchlist
            </button>
            <button className="flex flex-col items-center text-[#3C3C4399] p-4 font-semibold gap-2">
                <img src={wallet} alt="" />
                Wallet
            </button>
            <button className="flex flex-col items-center text-[#3C3C4399] p-4 font-semibold gap-2">
                <img src={search} alt="" />
                Search
            </button>
        </nav>
    );
};

export default BottomNavBar;
