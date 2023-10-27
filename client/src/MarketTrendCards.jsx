import chart from "../assets/chart.png"

export default function MarketTrendCards({crypto}){
    return(
        <div className="flex px-[20px] py-[18px] flex-col shadow-lg  gap-4 flex-1 rounded-xl border border-[#EAEAEA] bg-[#FFF]">
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                    <img className="w-[50px] h-[50px]" src={crypto.image} alt="Bitcoin Logo"/>
                    <p className="font-semibold">{crypto.symbol}</p>
                    <div className="flex py-1 px-1.5 items-center rounded-md bg-opacity-40 bg-gray-400">
                    <p className="font-bold text-xs text-black">{crypto.name}</p>
                    </div>
                   
                    </div>
                <div>
                <button>click</button>
                </div>
                </div>
                <div className="w-258 h-1 opacity-5 bg-[#11011E]"></div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0">
                        <p className="text-black font-semibold text-lg">$ {crypto.current_price}</p>
                        <p className="text-[#808080] text-sm">{crypto.price_change_percentage_24h}%</p>
                    </div>
                    <img src={chart}/>
                </div>
            </div>
    )
}