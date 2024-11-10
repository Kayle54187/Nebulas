import Image from "next/image";

export default function HeroSection() {
	return (
		<div className="relative py-12 w-full h-[90vh] mb-8 bg-[rgb(22,28,45)] text-white">
			<div className="absolute w-screen left-0 bottom-0 right-0 h-[10vh] z-30">
				<Image
					src="/Wave.svg"
					layout="fill"
					objectFit="cover"
					alt="Wave background"
				/>
			</div>
			<div className="relative w-[70%] mx-auto space-y-8 flex flex-col items-start justify-center h-full">
				<div className="grid grid-cols-4 items-center">
					<div className="space-y-4 col-span-2">
						<h1 className="font-[600] text-[50px]">
							Build Skills. Transform Lives.
						</h1>
						<p className="font-[200] text-white text-[20px]">
							Empowering Rwanda’s urban migrants with access to
							skills and opportunities for a brighter, more
							sustainable future.
						</p>
						<p className="text-[#68D585] text-[20px] font-[300]">
							Understand Our Solution
						</p>
					</div>
					<div className="relative col-span-2">
						<div className="rounded-xl z-10 relative">
							<Image
								src={"/team.JPG"}
								width={500}
								height={500}
								alt="Team picture"
                                className="rounded-xl"
							/>
						</div>
						<div className="absolute -top-6 right-20">
							<Image
								src={"/Dots.svg"}
								width={200}
								height={200}
								alt="Dots"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start space-y-4">
					<h1 className="font-[700] text-[24px]">Our Mission</h1>
					<p className="text-[18px] font-[200]">
						Our mission is to empower rural-urban migrants by
						raising awareness of accessible learning hubs and
						skills-building opportunities in Rwanda. We also aim to
						raise funds to support those who need help paying for
						these courses, so they can earn money and support their
						lives in urban areas.
					</p>
				</div>
			</div>
		</div>
	);
}
