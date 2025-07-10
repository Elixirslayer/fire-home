import Image from "next/image";
import React, { useState } from "react";
import { repoBasePath } from "../constants/Constants";
import { tools } from "../constants/ToolDataConstants";
import { Dialog } from "primereact/dialog";
import GetToolByTitle from "./tools/GetToolByTitle";

export default function ToolsWrapper() {
	const [visible, setVisible] = useState<boolean>(false);
  const [selectedToolName, setSelectedToolName] = useState<string>("");
	const isGhDeployment: boolean = process.env.NODE_ENV === "production";
	const basePath: string = repoBasePath;

	function selectTool(tool: string) {
    setSelectedToolName(tool);
		setVisible(true);
	}

	return (
		<div>
			{tools.map((toolData) => {
				return (
					<button onClick={() => selectTool(toolData.Title)} key={`tool-${toolData.Title}`} className="flex flex-col items-center hover:cursor-pointer">
						<div className="rounded-xl border w-56 h-56 p-5 hover:p-1 bg-black bg-opacity-50 transition-all duration-300 overflow-hidden flex">
							<Image className="my-auto rounded-xl" src={(isGhDeployment ? basePath : "") + toolData.ImageUrl} alt={toolData.Title} width={toolData.Width ?? 224} height={toolData.Height ?? 224} objectFit="cover" />
						</div>
						<div className="font-bold text-xl my-4">{toolData.Title}</div>
					</button>
				);
			})}
			<Dialog visible={visible} onHide={() => setVisible(false)} resizable={true} style={{ minWidth: "50vw" }}>
				<div className="flex w-full justify-center items-center mb-8">
          {<GetToolByTitle title={selectedToolName}/>}
        </div>
			</Dialog>
		</div>
	);
}
