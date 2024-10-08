"use client";

import { useEffect, useState } from "react";
import { SiteData } from "./models/SiteData";
import SiteComponent from "./components/SiteComponent";
import Firefox from "./components/Firefox";

export default function Home() {
    const [sites, setSites] = useState<SiteData[]>([]);

    useEffect(() => {
        const sites: SiteData[] = [
            {
                ImageUrl: "/images/chatgpt.png",
                Title: "ChatGPT",
				RedirectUrl: "https://chatgpt.com/"
            },
            {
                ImageUrl: "/images/gitlab-logo-500.png",
                Title: "Gitlab",
				RedirectUrl: "https://gitlab.com/"
            },
            {
                ImageUrl: "/images/jira.png",
                Title: "Jira",
				RedirectUrl: "https://zentrumhub.atlassian.net/jira/software/c/projects/NEX/boards/1"
            },
            {
                ImageUrl: "/images/slack.png",
                Title: "Slack",
				RedirectUrl: "https://app.slack.com/client/T02MPHCTU21/C02NG7KGUHW"
            },
			{
                ImageUrl: "/images/Amplify.png",
                Title: "Amplify",
				RedirectUrl: "https://ap-south-1.console.aws.amazon.com/amplify/apps"
            },
			{
                ImageUrl: "/images/DynamoDB.png",
                Title: "DynamoDB",
				RedirectUrl: "https://ap-south-1.console.aws.amazon.com/dynamodbv2/home?region=ap-south-1#dashboard"
            },
			{
                ImageUrl: "/images/SimpleStorageService.png",
                Title: "S3 Bucket",
				RedirectUrl: "https://ap-south-1.console.aws.amazon.com/s3/home?region=ap-south-1#"
            },
			{
                ImageUrl: "/images/jenkins.png",
                Title: "Jenkins",
				RedirectUrl: "http://jenkins-dev.api.zentrumhub.com",
            },
			{
                ImageUrl: "/images/elasticsearch.png",
                Title: "Kibana Logs",
				RedirectUrl: "https://logs.us.prod.zentrumhub.com/app/discover#/view/c30375c0-e8b2-11ed-992b-43a80f092509"
            },
			{
                ImageUrl: "/images/youtube.png",
                Title: "Youtube",
				RedirectUrl: "https://youtube.com",
				Height: 150,
				Width: 224
            },
			{
                ImageUrl: "/images/youtube-music.png",
                Title: "Youtube Music",
				RedirectUrl: "https://music.youtube.com",
            },
			{
                ImageUrl: "/images/github-mark-white.png",
                Title: "GitHub",
				RedirectUrl: "https://github.com",
            },
        ];

        setSites(sites);
    }, []);
    return (
        <>
            <div className="w-full flex flex-col items-center p-8">
				<div className="m-2 mb-16">
					<Firefox></Firefox>
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
