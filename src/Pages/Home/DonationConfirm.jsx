import { useLoaderData, useParams } from "react-router-dom"
import { alreadyExists, getLS, setLS } from "../../utility/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

export default function DonationConfirm() {
    const [donateBtn, setDonateBtn] = useState(false)
    const AllData = useLoaderData();
    const { cardId } = useParams();
    const newData = AllData.filter(data => data.id.includes(cardId))
    const {id, Picture, price, description, text_btn_color, title, card_bg_color } = newData[0];

    useEffect(()=>{
        const oldData = alreadyExists(id, 'donation')
        if(oldData){
            setDonateBtn(true)
        }

    },[])

    const notify = (error) => toast.success(error, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const donationClink = (id) => {
        
        const res =setLS(id, 'donation');
        if(res === 'ok'){
            notify('Donation Success')
            setDonateBtn(true);

        }
    }

    

    return (
        <div className="max-w-7xl mx-auto my-4 md:my-10 lg:my-12 px-3 md:px-7 lg:px-0">
            <div
                style={{ backgroundImage: `url(${Picture})` }}
                className="h-[200px] md:h-[400px] lg:h-[667px] bg-cover bg-no-repeat bg-blend-overlay bg-opacity-90 flex flex-col justify-end rounded-lg"
            >
                <div className="bg-black p-3 md:p-8 lg:p-10 bg-opacity-50 rounded-b-lg">
                    <button
                        disabled={donateBtn}
                        onClick={() => donationClink(cardId)}
                        style={{ backgroundColor: text_btn_color }}
                        className="text-white text-xs md:text-base px-2 md:px-3 py-1 md:py-2 rounded active:scale-95 disabled:opacity-80 disabled:active:scale-[1]"
                    >{donateBtn?"Donation done ✅ " : `Donate $${price}`}</button>
                </div>

            </div>
            <h2 className="text-2xl md:text-4xl font-bold mt-11 mb-6">{title}</h2>
            <p className="leading-7 text-sm md:text-base">{description}</p>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
};
