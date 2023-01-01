import react from "react";

// function Popup(props){
//     return(props.trigger) ? (
//         <div className='popup'>
//         <div className='popup-inner'>
//             <button className="close-btn">close</button>
//             {props.children}
//         </div>
//       </div>
//     ) : "";
// }

// export default Popup

const Modal = () => {

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-gray-900 py-12 px-24 border-4 border-sky-500 rounded-xl ">

                    <div className="flex  text-lg  text-zinc-600   mb-10" >
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install <span className='text-teal-500'>Metamask</span>, a virtual Ethereum wallet, in your
                        browser.
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal

