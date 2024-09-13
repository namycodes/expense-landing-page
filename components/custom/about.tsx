import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Globe, Linkedin, LucideGithub } from "lucide-react";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import ZambiaFlag from "@/app/assets/images/zambia.png";
import NigeriaFlag from "@/app/assets/images/nigeria.png";
import Image from "next/image";
import { pacifico } from "@/app/assets/fonts/fonts";
import { Button } from "../ui/button";
export default function About() {
	const team = [
		{
			id: 1,
			name: "Namy Mubila",
			flag: ZambiaFlag,
			website: "https://namycodes.vercel.app",
			avatar: "https://github.com/namycodes.png",
			githubuser: {
				username: "namycodes",
				link: "https://github.com/namycodes",
			},
			twitter: {
				username: "namycodes",
				link: "https://twitter.com/namycodes",
			},
			linkedin: {
				username: "namycodes",
				link: "https://linkedin.com/in/namycodes",
			},
		},
		{
			id: 2,
			avatar: "https://github.com/Emmalywebcreator.png",
			name: "Emmanuel Ohwoka",
			flag: NigeriaFlag,
			website: "",
			githubuser: {
				username: "Emmalywebcreator",
				link: "https://github.com/Emmalywebcreator",
			},
			twitter: {
				username: "",
				link: "https://twitter.com/",
			},
			linkedin: {
				username: "",
				link: "https://linkedin.com/in/",
			},
		},
		{
			id: 3,
			name: "Christy Odumor",
			flag: NigeriaFlag,
			website: "",
			avatar: "https://github.com/christyTam.png",
			githubuser: {
				username: "christyTam",
				link: "https://github.com/christyTam",
			},
			twitter: {
				username: "",
				link: "https://twitter.com/",
			},
			linkedin: {
				username: "",
				link: "https://linkedin.com/in/",
			},
		},
	];
	return (
		<div className="p-10 flex flex-col gap-3">
			<h1 className="text-4xl">About Us</h1>
			<div className="border-b border-blue-400 p-1 h-2" />
			<div className="flex">
				<Card className="flex-1 flex flex-col gap-3">
					<CardHeader>
						<CardTitle>
							<h1 className={`${pacifico.className} text-2xl`}>
								Background Story
							</h1>
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-3">
						<p className="text-pretty text-justify text-gray-600">
							<cite>
								The inspiration for this project came from a deeply personal
								experience that unfolded over the span of a year. A few years
								ago, I found myself struggling to keep track of my finances
								while juggling multiple freelance gigs and daily expenses. I was
								overwhelmed by a cluttered mess of receipts and bank statements,
								and the traditional spreadsheets just weren{"’"}t cutting it.
								One evening, as I sat surrounded by a pile of crumpled receipts,
								I realized there had to be a better way to manage my money.
								Driven by the frustration of sifting through disorganized
								financial records, I envisioned creating a tool that would
								simplify expense tracking and provide clarity. Over the next
								year, I immersed myself in developing this project, aiming to
								build a solution that would make expense management as
								effortless and insightful as possible. What started as a
								personal challenge evolved into a comprehensive tool designed to
								help others who face the same struggles I once did. - Namy
								Mubila
							</cite>
						</p>
						<Link href={"https://github.com/namycodes/expense-landing-page"}>
							<Button variant={"outline"} className="border border-blue-300">
								View Source Code
							</Button>
						</Link>
					</CardContent>
				</Card>
				<div className="px-10">
					<h1 className="text-2xl">Our Team</h1>
					<div className="grid grid-cols-2 gap-3 p-3 flex-1">
						{team.map((member) => (
							<Card key={member.id}>
								<CardHeader className="flex  justify-between">
									<div className="flex w-full items-center gap-3">
										<Avatar>
											<AvatarImage src={member.avatar} />
										</Avatar>
										<div>
											<h1>{member.name}</h1>
											<Image
												alt="flag"
												src={member.flag}
												width={20}
												height={20}
											/>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex items-center">
										<div className="">
											<Link
												className="flex gap-2 text-[12px] items-center"
												href={member.githubuser.link}
												target="_blank"
											>
												<LucideGithub size={18} />
												{member.githubuser.username}
											</Link>
											<Link
												className="flex gap-2 text-[12px] items-center"
												href={member.linkedin.link}
												target="_blank"
											>
												<Linkedin color="blue" size={18} />
												{member.linkedin.username}
											</Link>
											<Link
												className="flex gap-2 text-[12px] items-center"
												href={member.githubuser.link}
												target="_blank"
											>
												<TwitterLogoIcon />
												{member.twitter.username}
											</Link>
											<Link
												className="flex gap-2 text-[12px] items-center"
												href={member.website}
												target="_blank"
											>
												<Globe size={18} />
												<h1>Personal Website</h1>
											</Link>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
