

export default function HomeCards({ data }) {
    const {id, title, category, Picture, category_bg_color, text_btn_color, card_bg_color } = data
    
    const cardClick =(ids)=>{
        console.log(ids);
    }



    return (
        <div 
        onClick={()=>cardClick(id)}
        style={{backgroundColor:card_bg_color}} 
        className="lg:h-[323px] rounded-lg shadow-lg duration-300 active:scale-[0.96]">
            <img className="rounded-t-lg" src={Picture} alt="" />
            <div className="p-4">
                <p 
                style={{backgroundColor:category_bg_color, color:text_btn_color}} className="text-sm px-2 inline-block py-0.5 rounded font-medium">
                    {category}
                </p>

                <h3 
                style={{color:text_btn_color}}
                className="mt-2 text-xl font-bold">
                    {title}
                </h3>
            </div>

        </div>
    )
};
