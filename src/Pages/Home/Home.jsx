import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HomeCards from "./HomeCards";

export default function Home() {
    const allData = useLoaderData();
    return(
        <div>
            <Banner></Banner>
            <main className="max-w-7xl mx-auto my-44 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 md:px-7 lg:px-0">
                {
                    allData.map(data => <HomeCards data={data} key={data.id}></HomeCards>)
                }
            </main>
        </div>
    )
};
