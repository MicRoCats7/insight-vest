import Image from "next/image"
import { Card, CardDescription, CardTitle } from "../ui/card"
import bitcoin from '@/public/assets/home/icon_saham/bitcoin.svg'
import { RiArrowDownSFill } from "react-icons/ri";

function CardListSaham() {
    return (
        <Card className="my-[60px] bg-gradient-card-learning p-4 rounded-[20px] border-gray-500 border-2">
            <div className="flex items-start justify-between mb-[15px]">
                <div className="flex items-start gap-[10px]">
                    <Image
                        src={bitcoin}
                        alt="bitcoin"
                    />
                    <div className="flex flex-col">
                        <CardTitle className="drop-shadow-2xl">
                            <p className="text-white font-general-sans-semibold text-lg">
                                BTC/IDR
                            </p>
                        </CardTitle>
                        <CardDescription className="text-white font-general-sans-medium text-xs">Bitcoin</CardDescription>
                    </div>
                </div>
                <div className="flex items-center">
                    <RiArrowDownSFill size={40} color="FF4141" />
                    <span className="font-general-sans-semibold text-lg text-[#FF4141]">0.75%</span>
                </div>
            </div>
            <span className="font-general-sans-semibold text-[22px] text-white">Rp 876.000.000</span>
        </Card>
    )
}

export default CardListSaham