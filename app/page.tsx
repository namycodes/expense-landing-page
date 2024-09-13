import About from "@/components/custom/about";
import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import ProjectAbout from "@/components/custom/projectAbout";
// import Image from "next/image";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<ProjectAbout />
			<About />
		</>
	);
}
