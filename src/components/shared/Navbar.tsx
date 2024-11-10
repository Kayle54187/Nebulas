"use client";

export default function NavBar() {
	return (
		<div className="fixed bg-[#161C2D] p-4 w-full z-50">
			<div className="w-[70%] mx-auto grid grid-cols-4 items-center">
				<h1 className="text-[#F4F7FA] font-[700] text-[24px] col-span-1">
					The Nebulas
				</h1>
				<nav className="col-span-3 w-full grid grid-cols-6 items-center text-[15px] text-[#F4F7FA]">
					<div className="col-span-4 w-full grid grid-cols-4 items-center">
						<div className="text-[15px] font-[300]">
							<a href="#">Home</a>
						</div>
						<div className="text-[15px] font-[300]">
							<a href="#solution">Our Solution</a>
						</div>
						<div className="text-[15px] font-[300]">
							<a href="#team">Our Team</a>
						</div>
						<div className="text-[15px] font-[300]">
							<a href="#journey">E-Lab Journey</a>
						</div>
					</div>
					<div className="col-span-2 w-full">
						<button className="bg-[#407BFF] py-3 px-4 rounded-lg font-[300]">
							<a>Understand Our Solution</a>
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
}
