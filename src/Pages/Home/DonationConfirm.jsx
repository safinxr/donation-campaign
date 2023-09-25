import { useLoaderData, useParams } from "react-router-dom"

export default function DonationConfirm() {
    const AllData = useLoaderData();
    const { cardId } = useParams();
    const newData = AllData.filter(data => data.id.includes(cardId))
    const { Picture, price, description, text_btn_color, title , card_bg_color } = newData[0];
    console.log(Picture);
    return (
        <div className="max-w-7xl mx-auto my-12">
            <div
                style={{ backgroundImage: `url(${Picture})` }}
                className="h-[667px] bg-cover bg-no-repeat bg-blend-overlay bg-opacity-90 flex flex-col justify-end rounded-lg"
            >
                <div className="bg-black p-10 bg-opacity-50 rounded-b-lg">
                    <button
                        style={{ backgroundColor: text_btn_color }}
                        className="text-white px-4 py-2 rounded active:scale-95"
                    >Donate ${price}</button>
                </div>

            </div>
            <h2 className="text-4xl font-bold mt-11 mb-6">{title}</h2>
            <p className="leading-7">{description}</p>
        </div>
    )
};
