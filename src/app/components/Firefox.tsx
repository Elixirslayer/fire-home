import Image from "next/image";

function Firefox() {
    return ( 
        <>
            <div className="flex">
                <div className="m-2">
                    <Image src="/images/firefox.png" alt="firefox" height={150} width={150}></Image>
                </div>
                <div className="m-2 flex items-center">
                    <h1 className="text-5xl font-bold">Firefox</h1>
                </div>
            </div>
        </>
     );
}

export default Firefox;