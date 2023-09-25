export default function HomeCards({ data }) {
    const { id, title, category, description, Picture, category_bg_color, text_btn_color, card_bg_color } = data
    console.log(text_btn_color);
    return (
        <div className={`bg-[${card_bg_color}]`}>
            <img src={Picture} alt="" />
            <div className="p-4">
                <p className= {`bg-[${category_bg_color}] text-[${text_btn_color}] text-sm px-2 inline-block py-0.5 rounded font-medium`}>{category}</p>
                <h3 className={`text-[${text_btn_color}] mt-2 text-xl font-bold`}>{title}</h3>
            </div>

        </div>
    )
};
