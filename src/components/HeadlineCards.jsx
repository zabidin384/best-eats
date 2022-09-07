import React from "react";

export default function HeadlineCards() {
	return (
		<div className="headlineCardsSection max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
			{/* Card */}
			<div className="headlineCards1 rounded-xl relative">
				{/* Overlay */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
					<p className="px-2">Through 8/26</p>
					<button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white">Order Now</button>
				</div>
				<img
					className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
			</div>
			{/* Card */}
			<div className="headlineCards2 rounded-xl relative">
				{/* Overlay */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
					<p className="px-2">Added Daily</p>
					<button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white">Order Now</button>
				</div>
				<img
					className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
			</div>
			{/* Card */}
			<div className="headlineCards3 rounded-xl relative">
				{/* Overlay */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
					<p className="px-2">Tasty Treats</p>
					<button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white">Order Now</button>
				</div>
				<img
					className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
			</div>
		</div>
	);
}
