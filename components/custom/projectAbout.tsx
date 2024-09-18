import Image from "next/image";
import AboutProjectImage from "@/app/assets/images/hero.jpg";
import { nunito_sans } from "@/app/assets/fonts/fonts";
import { Button } from "../ui/button";
export default function ProjectAbout() {
	return (
		<div className="flex justify-around px-5 w-full" id="projectAbout">
			<div className="flex-1 w-full">
				<Image
					quality={100}
					priority
					width={700}
					height={700}
					alt="about-project"
					src={AboutProjectImage}
				/>
			</div>
			<div className="py-24 flex flex-col gap-3 flex-1">
				<h1 className={`text-4xl ${nunito_sans.className} font-[500]`}>
					Easy Expense Tracking!
				</h1>
				<div className="border-b border-blue-400 p-1 h-2" />
				<p className="text-pretty text-sm text-gray-600 leading-5">
					Easy expense tracking revolutionizes the way you manage your finances
					by simplifying the process of monitoring and analyzing your spending.
					With user-friendly interfaces and intuitive design, these tools allow
					you to effortlessly log and categorize expenses, often with automated
					syncing from your bank accounts or credit cards. Features like receipt
					scanning, customizable budgets, and real-time alerts ensure that you
					stay informed about your financial habits without the hassle of manual
					entry. By providing clear, actionable insights and easy-to-read
					reports, easy expense tracking helps you gain control over your
					finances, making budgeting and saving not just manageable, but
					genuinely straightforward and stress-free.
				</p>
				<div>
					<Button className="p-6">Learn More</Button>
				</div>
			</div>
		</div>
	);
}
