import Image from "next/image";

export default function ProblemSection() {
	return (
		<div className="w-[75%] mx-auto py-12 grid grid-cols-2 gap-4 items-center mb-12" id="problem">
			<div className="relative">
                <Image width={500} height={500} alt="Problem" src={"/problem.jpeg"} className="object-cover rounded-xl"/>
            </div>
			<div className="space-y-4">
				<h1 className="text-[#130D3A] font-[700] text-[60px]">
					The Problem
				</h1>
				<p className="text-[20px] font-[300] text-[#161C2D]">
                According to World Bank data, 38% of Rwanda&apos;s urban population lives in slums. A large portion of these residents are rural-urban migrants who move to cities seeking better opportunities. However, many arrive without the skills or resources needed to secure stable incomes, and the high cost of living in urban areas makes it even harder for them to survive.						
                </p>
			</div>
		</div>
	);
}
