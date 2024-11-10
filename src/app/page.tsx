import HeroSection from "@/components/HeroSection";
import InstagramBanner from "@/components/InstagramBanner";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ValuesSection from "@/components/ValuesSection";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<ProblemSection />
			<SolutionSection />
			<ValuesSection />

			<InstagramBanner />
		</div>
	);
}
