import { Pacifico, Nunito_Sans } from "next/font/google";

export const pacifico = Pacifico({
	subsets: ["cyrillic-ext"],
	weight: ["400"],
});

export const nunito_sans = Nunito_Sans({
	subsets: ["latin"],
	weight: ["800", "600", "200", "500"],
});
