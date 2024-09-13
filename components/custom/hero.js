"use client";
import Image from "next/image";
import HeroImage from "@/app/assets/images/app.png";
import { Button } from "../ui/button";
import { LucideArrowDown, LucideArrowRight } from "lucide-react";
import { nunito_sans } from "@/app/assets/fonts/fonts";
import GridLines from 'react-gridlines'
export default function Hero() {
	return (
		<GridLines className="grid-area py-40" strokeWidth={2} cellWidth2={22}>
		<main className="flex flex-col w-full   h-screen">
			<div className="flex justify-center items-center w-full h-screen">
				<div className="flex flex-col gap-5">
					<h1 className={`${nunito_sans.className} font-[600] text-5xl`}>
						BudgetBliss{" "}
						<b className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-200">
							Expense Tracker
						</b>
					</h1>
					<h1 className="text-center text-2xl">
						Access the Expense Tracker below
					</h1>
					<div className="p-4 flex justify-center">
						<button className="h-8 w-8 shadow-lg flex border-blue-300 border justify-center items-center rounded-[2.25rem]">
							<LucideArrowDown size={19} className=" animate-bounce  " />
						</button>
					</div>

					<div className="gap-5 justify-center flex">
						<Button className="p-6">
							Web App
							<LucideArrowRight className="animate-pulse" />
						</Button>
						<Button
							className=" border-blue-500 p-6 text-blue-500"
							variant={"outline"}
						>
							Mobile App
							<LucideArrowRight className="animate-pulse" />
						</Button>
					</div>
					<h1 className="text-center">
						<b>Expense Tracking?</b>. We got you covered!
					</h1>
				</div>
			</div>
			<div className="flex  justify-center py-5">
				<Image
					className="border border-blue-500 rounded-lg"
					src={HeroImage}
					priority
					quality={100}
					alt="hero-image"
					width={800}
					height={800}
				/>
			</div>
		</main>
		</GridLines>
	);
}
