import { pacifico } from "@/app/assets/fonts/fonts";
import { LucideBookOpen, LucideUsers } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<header
			className={`p-3 justify-between flex items-center fixed bg-white w-full backdrop-blur-lg transition duration-300 backdrop-filter bg-opacity-20 border-b border-gray-200 `}
		>
			<div className="flex items-center">
				<h1
					className={`${pacifico.className} bg-gradient-to-tr bg-clip-text text-transparent  from-blue-500 to-blue-500 p-3 text-2xl`}
				>
					Budget Bliss
				</h1>
				<LucideBookOpen className="text-blue-500" />
			</div>
			<div className="flex gap-5">
				<Button className="gap-2 from-blue-400 to-blue-500 bg-gradient-to-l">
					Team <LucideUsers size={18} />
				</Button>
				<Button variant={"outline"}>About</Button>
			</div>
		</header>
	);
}
