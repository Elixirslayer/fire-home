'use client'
import { SiteData } from "@/app/models/SiteData";
import Image from "next/image";
import { repoBasePath } from "../Constants";

function SiteComponent({ siteData }: { siteData: SiteData }) {
    const isGhDeployment: boolean = process.env.NODE_ENV === "production";
    const basePath: string = repoBasePath;
    function redirect() {
        window.open(siteData.RedirectUrl, '_blank');
    }

    return (
        <div className="flex flex-col items-center hover:cursor-pointer" onClick={redirect}>
            <div className="rounded-xl border w-56 h-56 p-5 hover:p-1 bg-black bg-opacity-50 transition-all duration-300 overflow-hidden flex">
                <Image className="my-auto rounded-xl" src={((isGhDeployment ? basePath : "") + siteData.ImageUrl)} alt={siteData.Title} width={siteData.Width ?? 224} height={siteData.Height ?? 224} objectFit="cover" />
            </div>
            <div className="font-bold text-xl my-4">
                {siteData.Title}
            </div>
        </div>
    );
}

export default SiteComponent;