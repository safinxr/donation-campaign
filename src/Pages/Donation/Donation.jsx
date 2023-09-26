import { useLoaderData } from "react-router-dom"
import { getLS } from "../../utility/LocalStorage"

export default function Donation() {
    const allData = useLoaderData()
    const lSId = getLS('donation')
    const pageData = [];
    for (const id of lSId) {
        const newData = allData.find(data => data.id === id.id)
        pageData.push(newData)
    }
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                pageData.map(data => <Card data={data} key={data.id}></Card>)
            }
        </div>
    )
};

const Card = ({ data }) => {
    const { title, category, Picture, category_bg_color, text_btn_color, card_bg_color, price } = data

    return (
        <div
            style={{ backgroundColor: card_bg_color }}
            className=" rounded-lg flex shadow-lg">
            <img className="rounded-s-lg w-[40%]" src={Picture} alt="" />
            <div>
                <div className="px-4 py-2 flex h-full flex-col justify-between">
                    <div>
                        <p
                            style={{ backgroundColor: category_bg_color, color: text_btn_color }} className="text-sm px-2 inline-block py-0.5 rounded font-medium">
                            {category}
                        </p>

                        <h3
                            className="mt-1 text-xl font-bold">
                            {title}
                        </h3>
                        <p
                            style={{ color: text_btn_color }}
                            className=" font-semibold "> $
                            {price}
                        </p>

                    </div>
                    <div >
                        <button
                            style={{ backgroundColor: text_btn_color }}
                            className="px-6 py-1.5 rounded text-white font-semibold my-2"

                        >View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}