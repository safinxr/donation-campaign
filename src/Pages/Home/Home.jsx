import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HomeCards from "./HomeCards";
import { useEffect, useState } from "react";

export default function Home() {
    const [finalData, setFinalData] = useState([])
    const allData = useLoaderData();
    const searchFun =(key)=>{
        const newKey = key.toLowerCase();
        const newData = allData.filter(data => data.category.toLowerCase().includes(newKey))
        setFinalData(newData);
    }
    useEffect(()=>{
        searchFun('')
    },[])

    
    return(
        <div>
            <Banner searchFun={searchFun}></Banner>
            <main className="max-w-7xl mx-auto my-6 md:my-20 lg:my-40 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 md:px-7 lg:px-0">
                {
                    finalData.map(data => <HomeCards data={data} key={data.id}></HomeCards>)
                }
            </main>
        </div>
    )
};
