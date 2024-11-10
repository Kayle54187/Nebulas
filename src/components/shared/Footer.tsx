export default function Footer() {
	return (
		<div className="w-[80%] mx-auto grid grid-cols-5 py-12 items-center">
			<div className="space-y-4 col-span-2">
				<h1 className="text-[#130D3A] font-[500] text-[60px]">
					Get in Touch
				</h1>
				<p className="font-[300] text-[20px]">
					Ping us, if you don’t hear from us in the next 24 hours,
					consider us a scam!
				</p>
				<div className="mt-4 flex flex-col items-start space-y-4">
					<a
						href="mailTo:c.ingabire2@alustudent.com"
						className="text-[#473BF0]"
					>
						c.ingabire2@alustudent.com
					</a>
					<a href="tel:+250791692189" className="text-[#473BF0]">
						+250-791-692-189
					</a>
				</div>
			</div>
			<div className="col-span-3 text-center">
				<h1 className="text-[#130D3A] font-[700] text-[100px]">
					<span className="text-[#68D585]">N</span>
					eb
					<span className="text-[#473BF0]">u</span>
					la
					<span className="text-[#7B11F9]">s</span>
				</h1>
			</div>
		</div>
	);
}
