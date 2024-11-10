import Image from "next/image";

export default function ValuesSection() {
	return (
		<div className="grid grid-cols-3 w-[75%] mx-auto gap-4 py-12">
			<div className="grid grid-cols-6">
				<div className="relative col-span-1">
					<Image
						src={"/stack.svg"}
						width={40}
						height={40}
						alt="Stack image"
					/>
				</div>
				<div className="space-y-2 col-span-4">
					<h1 className="font-[700] text-[20px]">
						Community-Centered Vision
					</h1>
					<p className="text-[#130D3A] font-[300]">
						We are committed to empowering Rwanda’s urban migrants
						with skills, support, and opportunity, working
						hand-in-hand with communities to create lasting impact.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-6">
				<div className="relative col-span-1">
					<Image
						src={"/stack.svg"}
						width={40}
						height={40}
						alt="Stack image"
					/>
				</div>
				<div className="space-y-2 col-span-4">
					<h1 className="font-[700] text-[20px]">
						Driven by Compassion
					</h1>
					<p className="text-[#130D3A] font-[300]">
						Our team believes in uplifting lives and understands the
						unique challenges rural-urban migrants face. We bring
						empathy and dedication to every step of our work.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-6">
				<div className="relative col-span-1">
					<Image
						src={"/stack.svg"}
						width={40}
						height={40}
						alt="Stack image"
					/>
				</div>
				<div className="space-y-2 col-span-4">
					<h1 className="font-[700] text-[20px]">
						Sustainable Impact
					</h1>
					<p className="text-[#130D3A] font-[300]">
						We focus on long-term solutions that empower individuals
						to thrive independently, creating a sustainable path to
						income, education, and opportunity.
					</p>
				</div>
			</div>
		</div>
	);
}
