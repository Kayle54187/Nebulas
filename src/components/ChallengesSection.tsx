import Image from "next/image";

export default function ChallengesSection() {
	return (
		<div>
			<h1 className="text-[#130D3A] text-[60px] font-[700] text-center mb-8">
				Our E-Lab Challenges
			</h1>
			<div className="h-[50vh] grid grid-cols-5">
				<div className="col-span-3">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/wtOOtyriclQ"
						title="Challenge 1 - Meet the Nebulas"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div className="col-span-2 bg-[#ECF2F7] p-8 space-y-4">
					<h1 className="font-[700] text-[30px]">Challenge 1</h1>
					<p className="font-[300] text-[14px] text-[#161C2D]">
						Meet The Nebulas
					</p>
				</div>
			</div>
			<div className="h-[50vh] grid grid-cols-5">
				<div className="col-span-2 bg-[#473BF0] p-8 space-y-4">
					<h1 className="font-[700] text-[30px] text-white">
						Challenge 2
					</h1>
					<p className="font-[300] text-[14px] text-white">
						Let's Talk About The Maasai
					</p>
                    <Image
						src={"/Stars.svg"}
						alt="Starts"
						width={100}
						height={40}
					/>
				</div>
				<div className="col-span-3">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/BrZSDkGjopc"
						title="Challenge 2 - Let&#39;s talk about Maasai"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</div>
			<div className="h-[50vh] grid grid-cols-5">
				<div className="col-span-3">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/lIfmGpwvdfc"
						title="Challenge 3 - A true local hero"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div className="col-span-2 bg-[#20283E] p-8 space-y-4">
					<h1 className="font-[700] text-[30px] text-white">
						Challenge 3
					</h1>
					<p className="font-[300] text-[14px] text-white">
						A True Local Hero
					</p>
                    <Image
						src={"/Stars.svg"}
						alt="Starts"
						width={100}
						height={40}
					/>
				</div>
			</div>
			<div className="h-[50vh] grid grid-cols-5">
				<div className="col-span-2 bg-[#68D585] p-8 space-y-4">
					<h1 className="font-[700] text-[30px]">Challenge 4</h1>
					<p className="font-[300] text-[14px] text-[#161C2D]">
						An Interview With Google Developer Group
					</p>
					<Image
						src={"/Stars.svg"}
						alt="Starts"
						width={100}
						height={40}
					/>
				</div>
				<div className="col-span-3">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/UCeVk2h3_3M"
						title="Challenge 4 - An interview with Google Developers Group"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</div>
			<div className="h-[50vh] grid grid-cols-5">
				<div className="col-span-3">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/RUpfOoAynhw"
						title="Challenge 5  - Launching our mission!"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div className="col-span-2 bg-[#7B11F9] p-8 space-y-4">
					<h1 className="font-[700] text-[30px] text-white">
						Challenge 5
					</h1>
					<p className="font-[300] text-[14px] text-white">
						Launching Our Mission
					</p>
                    <Image
						src={"/Stars.svg"}
						alt="Starts"
						width={100}
						height={40}
					/>
				</div>
			</div>
		</div>
	);
}
