"use client";

import { useEffect, useState } from "react";
import SiteComponent from "./components/SiteComponent";
import Firefox from "./components/Firefox";
import { sites } from "./Constants";

export default function Home() {
    const [isAnime, setIsAnime] = useState<boolean>(false);
    const [translateX, setTranslateX] = useState<string>("0px");
    const isGhDeployment: boolean = process.env.NODE_ENV === "production";
    const buttonImage = getSliderImage();
    const backgroundImage = getBackgroundImage();

    function changeTheme() {
        localStorage.setItem("isAnime", JSON.stringify(!isAnime));
        setTranslateX(!isAnime ? "2.5rem" : "0px");
        setIsAnime(!isAnime);
    }

    function getSliderImage(): string {
        if (isGhDeployment)
            return "bg-[url(/fire-home/images/ichigo.jpg)]";
        return "bg-[url(/images/ichigo.jpg)]";
    }

    function getBackgroundImage(): string {
        if (isGhDeployment)
            return "bg-[url(/fire-home/images/ichigo.jpg)]";
        return "bg-[url(/images/gotei-4k.jpg)]";
    }

    useEffect(() => {
        const persistThemeStr = localStorage.getItem("isAnime");
        if (persistThemeStr) {
            const persistTheme = JSON.parse(persistThemeStr);
            console.log(persistTheme);
            
            if (persistTheme) {
                setIsAnime(true);
                setTranslateX('2.5rem');
            }
            else {
                setIsAnime(false);
                setTranslateX('0px');
            }
        }
    }, [])

    return (
        <div className={`w-full flex flex-col items-center p-8 bg-cover bg-center ${isAnime ? backgroundImage : "bg-black"}`}>
            <div className="m-2 mb-16 w-full flex justify-evenly">
                <div className="w-1/3"></div>

                <div className="w-1/3 flex justify-center">
                    <Firefox></Firefox>
                </div>

                <div className="flex w-1/3 items-center justify-end px-12">
                    <button className="rounded-full bg-zinc-50 text-black p-1 w-[5.5rem]" onClick={changeTheme}>
                        <div className={`rounded-[5rem] w-10 h-10 transition-all duration-150 bg-cover bg-center ${isAnime ? buttonImage : "bg-black"}`} style={{ transform: `translateX(${translateX})` }}>

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
    );
}
