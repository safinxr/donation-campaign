import { useLoaderData, useParams } from "react-router-dom"

export default function DonationConfirm() {
    const AllData = useLoaderData();
    const { cardId } = useParams();
    const newData = AllData.filter(data => data.id.includes(cardId))
    const { Picture, price, description, text_btn_color, title , card_bg_color } = newData[0];
    return (
        <div className="max-w-7xl mx-auto my-4 md:my-10 lg:my-12 px-3 md:px-7 lg:px-0">
            <div
                style={{ backgroundImage: `url(${Picture})` }}
                className="h-[200px] md:h-[400px] lg:h-[667px] bg-cover bg-no-repeat bg-blend-overlay bg-opacity-90 flex flex-col justify-end rounded-lg"
            >
                <div className="bg-black p-3 md:p-8 lg:p-10 bg-opacity-50 rounded-b-lg">
                    <button
                        style={{ backgroundColor: text_btn_color }}
                        className="text-white text-xs md:text-base px-2 md:px-3 py-1 md:py-2 rounded active:scale-95"
                    >Donate ${price}</button>
                </div>

            </div>
            <h2 className="text-2xl md:text-4xl font-bold mt-11 mb-6">{title}</h2>
            <p className="leading-7 text-sm md:text-base">{description}</p>
        </div>
    )
};
