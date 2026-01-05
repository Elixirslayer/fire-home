"use client";

import { useEffect, useState } from "react";
import SiteComponent from "./components/SiteComponent";
import { ViewType } from "./models/ViewType";
import ToolsWrapper from "./components/ToolsWrapper";
import Image from "next/image";
import { sites } from "./constants/SiteDataConstants";
import { splitInHalf } from "./Utils/common";

export default function Home() {
	const [leftSites, rightSites] = splitInHalf(sites);
	const [currentView, setCurrentView] = useState<ViewType>("shortcuts");
	const [minScreenHeight, setMinScreenHeight] = useState<number>(0);
	const [isAnime, setIsAnime] = useState<boolean>(false);
	const [isSplitLayout, setIsSplitLayout] = useState<boolean>(true);
	const [translateX, setTranslateX] = useState<string>("0px");
	const [layoutTranslateX, setLayoutTranslateX] = useState<string>("0px");
	const buttonImage = getSliderImage();
	const layoutButtonImage = getLayoutSliderImage();
	const backgroundImage = getBackgroundImage();

	function changeTheme() {
		localStorage.setItem("isAnime", JSON.stringify(!isAnime));
		setTranslateX(!isAnime ? "2.5rem" : "0px");
		setIsAnime(!isAnime);
	}

	function getSliderImage(): string {
		return "bg-[url(/images/ichigo.jpg)]";
	}

	function getLayoutSliderImage(): string {
		return "bg-[url(/images/captain-shinsui-kyoraku.png)]";
	}


	function getBackgroundImage(): string {
		return "bg-[url(/images/gotei-4k.jpg)]";
	}

	function changeCurrentView(view: ViewType) {
		setCurrentView(view);
	}

	function toggleLayout() {
		localStorage.setItem("isSplitLayout", JSON.stringify(!isSplitLayout));
		setLayoutTranslateX(!isSplitLayout ? "2.5rem" : "0px");
		setIsSplitLayout(!isSplitLayout);
	}

	function monitorMinScreenSize(){
		const div = document.getElementById('content-div');
		if (div) {
			const height = div.offsetHeight;
			if(height > minScreenHeight){
				setMinScreenHeight(height);
			}
		}
	}

	useEffect(() => {
		const persistThemeStr = localStorage.getItem("isAnime");
		if (persistThemeStr) {
			const persistTheme = JSON.parse(persistThemeStr);
			console.log(persistTheme);

			if (persistTheme) {
				setIsAnime(true);
				setTranslateX("2.5rem");
			} else {
				setIsAnime(false);
				setTranslateX("0px");
			}
		}
	}, []);

	useEffect(() => {
		const persisted = localStorage.getItem("isSplitLayout");
		if (persisted) {
			const parsed = JSON.parse(persisted);
			setIsSplitLayout(parsed);
			setLayoutTranslateX(parsed ? "2.5rem" : "0px");
		}
	}, []);

	useEffect(monitorMinScreenSize, [currentView])

	return (
		<div className={`w-full min-h-svh flex flex-col items-center p-8 bg-cover bg-center ${isAnime ? backgroundImage : "bg-black"}`}>
		<div className="w-full h-full overflow-y-scroll overflow-x-clip flex flex-col items-center p-8">
		<div className="gap-x-4 md:gap-0 m-2 mb-16 w-full flex items-center flex-wrap md:flex-nowrap justify-between px-6 md:px-0">

		<div className="flex w-full md:w-max justify-between md:justify-normal">
		<div className="flex items-center">
		<div className="flex gap-x-0.5 rounded-3xl overflow-clip">
		<button onClick={() => changeCurrentView("tools")} className={`w-10 bg-indigo-200 p-2 border-black ${currentView == "tools" ? "opacity-100" : "opacity-70"}`}>
		<Image width={32} height={32} src="/images/tools.svg" alt="Tools" />
		</button>
		<button onClick={() => changeCurrentView("shortcuts")} className={`w-10 bg-indigo-200 p-2 ${currentView == "shortcuts" ? "opacity-100" : "opacity-70"}`}>
		<Image width={32} height={32} src="/images/web.svg" alt="Web" />
		</button>
		</div>
		</div>
		</div>

		<div className="flex items-center justify-end md:px-12">
<div className="flex flex-col items-end md:px-12 leading-none">
  <button
    className="rounded-full bg-zinc-50 text-black p-1 w-[5.5rem] h-[3rem]"
    onClick={toggleLayout}
  >
    <div
      className={`rounded-[5rem] w-10 h-10 transition-all duration-150 bg-cover bg-center ${layoutButtonImage}`}
      style={{ transform: `translateX(${layoutTranslateX})` }}
    ></div>
  </button>

  <button
    className="rounded-full bg-zinc-50 text-black p-1 w-[5.5rem] h-[3rem]"
    onClick={changeTheme}
  >
    <div
      className={`rounded-[5rem] w-10 h-10 transition-all duration-150 bg-cover bg-center ${isAnime ? buttonImage : "bg-black"}`}
      style={{ transform: `translateX(${translateX})` }}
    ></div>
  </button>
</div>
		</div>
		</div>

		{isSplitLayout ? (
			<div className="w-full flex flex-col md:flex-row md:items-center min-h-[60vh]">
			<div id="left-content-div" className="flex max-w-screen-2xl flex-wrap justify-center items-center">
			{currentView == "shortcuts" &&
				leftSites.map(site => (
					<div key={site.Title} className="m-4">
					<SiteComponent siteData={site} />
					</div>
			))}
			{currentView == "tools" && <ToolsWrapper />}
			</div>

			<div className="hidden md:block w-1/3"></div>

			<div id="right-content-div" className="flex max-w-screen-2xl flex-wrap justify-center items-center">
			{currentView == "shortcuts" &&
				rightSites.map(site => (
					<div key={site.Title} className="m-4">
					<SiteComponent siteData={site} />
					</div>
			))}
			{currentView == "tools" && <ToolsWrapper />}
			</div>
			</div>
		) : (
		<div className="w-full flex justify-center">
		<div id="content-div" className="mx-auto flex w-full max-w-screen-2xl flex-wrap justify-center">
		{currentView == "shortcuts" &&
			sites.map(site => (
				<div key={site.Title} className="m-4">
				<SiteComponent siteData={site} />
				</div>
		))}
		{currentView == "tools" && <ToolsWrapper />}
		</div>
		</div>
		)}

		</div>
		</div>
	);
}
