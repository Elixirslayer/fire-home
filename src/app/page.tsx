"use client";

import { useEffect, useState } from "react";
import { SiteData } from "./models/SiteData";
import SiteComponent from "./components/SiteComponent";
import { repoBasePath } from "./Constants";
// import Firefox from "./components/Firefox";

export default function Home() {
    const [sites, setSites] = useState<SiteData[]>([]); //test
    const isGhDeployment: boolean = process.env.NODE_ENV === "production"
    const basePath: string = repoBasePath;
    useEffect(() => {
        const sites: SiteData[] = [
            {
                ImageUrl: "/images/DeepSeek_logo_icon-3185189800.png",
                Title: "DeepSeek",
				RedirectUrl: "https://chat.deepseek.com/"
            },            
            {
                ImageUrl: "/images/physics-wallah-seeklogo.svg",
                Title: "PhysicsWallah",
				RedirectUrl: "https://pw.live/"
            },            
            {
                ImageUrl: "/images/chatgpt.png",
                Title: "ChatGPT",
				RedirectUrl: "https://chatgpt.com/"
            },
            {
                ImageUrl: "/images/github.png",
                Title: "Github",
				RedirectUrl: "https://github.com",
				Height: 150,
				Width: 224
            },
             {
                ImageUrl: "/images/telegram.png",
                Title: "Telegram",
				RedirectUrl: "https://web.telegram.org",
				Height: 150,
				Width: 224
            }           {
                ImageUrl: "/images/WhatsApp-PNG-Picture-3892070548.png",
                Title: "WhatsApp",
				RedirectUrl: "https://web.whatsapp.com",
				Height: 150,
				Width: 224
            },
       ];

        setSites(sites);
    }, []);
    return (
        <>
            <div className="h-screen w-full justify-center bg-no-repeat bg-cover bg-center flex flex-col items-center p-8" style={{backgroundImage:`url('${(isGhDeployment ? basePath : "")}/images/samurai_bebop.png')`}}>
				{/* <div className="m-2 mb-16">
					<Firefox></Firefox>
				</div> */}
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
