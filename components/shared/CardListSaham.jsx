import Image from "next/image"
import { Card, CardDescription, CardTitle } from "../ui/card"
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function CardListSaham({ item }) {
    return (
        <Card className="bg-gradient-card-learning p-4 rounded-[20px] border-gray-500 border-2">
            <div className="flex items-start justify-between mb-[15px]">
                <div className="flex items-start gap-[10px]">
                    <Image
                        src={item.icon}
                        alt="bitcoin"
                    />
                    <div className="flex flex-col">
                        <CardTitle className="drop-shadow-2xl">
                            <p className="text-white font-general-sans-semibold md:text-lg text-sm">
                                {item.title}
                            </p>
                        </CardTitle>
                        <CardDescription className="text-[#ffffff60] font-general-sans-medium text-xs">{item.subtitle}</CardDescription>
                    </div>
                </div>
                <div className="flex items-center">
                    {item.down === true ? (
                        <>
                            <RiArrowDownSFill size={40} color="#FF4141" />
                            <span className="font-general-sans-semibold md:text-lg text-sm text-[#FF4141]">{item.numberSaham}</span>
                        </>
                    ) : (
                        <>
                            <RiArrowUpSFill size={40} color="#41FF54" />
                            <span className="font-general-sans-semibold md:text-lg text-sm text-[#41FF54]">{item.numberSaham}</span>
                        </>

                    )}
                </div>
            </div>
            <span className="font-general-sans-semibold md:text-[22px] text-base text-white">{item.price}</span>
        </Card>
    )
}

export default CardListSaham