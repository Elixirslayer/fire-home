"use client";

import { useEffect, useState } from "react";
import SiteComponent from "./components/SiteComponent";
import Firefox from "./components/Firefox";
import { repoBasePath, sites } from "./Constants";

export default function Home() {
    const isGhDeployment: boolean = process.env.NODE_ENV === "production";
    const basePath: string = repoBasePath;

    const [isAnime, setIsAnime] = useState<boolean>(false);
    const [translateX, setTranslateX] = useState<string>("0px");
    // const [buttonImage, setButtonImage] = useState("");

    // function getButtonImage(): string{
    //     // const imageBaseUrl: string = "/images/ichigo.png";
    //     // console.log("here");
        
    //     // if(isGhDeployment){
    //     //     console.log(`bg-[url('${basePath + imageBaseUrl}')]`);
    //     //     return `bg-[url('${basePath + imageBaseUrl}')]`;
    //     // }
    //     // console.log(`bg-[url('${imageBaseUrl}')]`);
    //     // return `bg-[url('${imageBaseUrl}')]`;

    //     return "/images/ichigo.png";
    // }


    function changeTheme() {
        console.log(!isAnime ? "2.5rem" : "0px");
        setTranslateX(!isAnime ? "2.5rem" : "0px");
        setIsAnime(!isAnime);
    }

    // useEffect(()=>{
    //     setButtonImage(getButtonImage());
    // }, [])

    return (
        <>
            <div className="w-full flex flex-col items-center p-8">
                <div className="m-2 mb-16 w-full flex justify-evenly">
                    <div className="w-1/3"></div>

                    <div className="w-1/3 flex justify-center">
                        <Firefox></Firefox>
                    </div>

                    <div className="flex w-1/3 items-center justify-end px-12">
                        <button className="rounded-full bg-zinc-50 text-black p-1 w-[5.5rem]" onClick={changeTheme}>
                            <div className={`rounded-[5rem] w-10 h-10 transition-all duration-150 `} style={{ transform: `translateX(${translateX})` }}>

                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex max-w-screen-2xl flex-wrap justify-center">
                    {sites.map((site) => {
                        return (
                            <div key={site.Title} className="m-4">
                                <SiteComponent siteData={site}></SiteComponent>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
