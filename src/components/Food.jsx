import React, { useState } from "react";
import { data } from "../data/data";

export default function Food() {
	const [foods, setFoods] = useState(data);

	// Filter type burgers/pizza/etc
	const filterType = (category) => {
		setFoods(
			data.filter((item) => {
				return item.category === category;
			})
		);
	};

	// Filter by price
	const filterPrice = (price) => {
		setFoods(
			data.filter((item) => {
				return item.price === price;
			})
		);
	};

	return (
		<div className="foodSection max-w-[1640px] m-auto px-4 py-12">
			<h1 className="text-orange-600 font-bold text-3xl sm:text-4xl text-center mb-4">Top Rated Menu Items</h1>

			{/* Filter Row */}
			<div className="foodFilterRow flex flex-col lg:flex-row justify-between">
				{/* 1. Filter type */}
				<div>
					<p className="font-bold text-gray-700">Filter Type</p>
					<div className="flex justify-between flex-wrap">
						<button onClick={() => setFoods(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							All
						</button>
						<button onClick={() => filterType("burger")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							Burgers
						</button>
						<button onClick={() => filterType("pizza")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							Pizzas
						</button>
						<button onClick={() => filterType("salad")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							Salads
						</button>
						<button onClick={() => filterType("chicken")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							Chickens
						</button>
					</div>
				</div>

				{/* 2. Filter price */}
				<div>
					<p className="foodFilterPrice font-bold text-gray-700">Filter Price</p>
					<div className="flex justify-between max-w-[390px] w-full">
						<button onClick={() => filterPrice("$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							$
						</button>
						<button onClick={() => filterPrice("$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							$$
						</button>
						<button onClick={() => filterPrice("$$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							$$$
						</button>
						<button onClick={() => filterPrice("$$$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
							$$$$
						</button>
					</div>
				</div>
			</div>

			{/* Display Foods */}
			<div className="foodDisplay grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
				{foods.map((item) => (
					<div key={item.id} className="border shadow-lg rounded-lg hover:scale-105 cursor-pointer duration-300">
						<img src={item.image} alt={item.name} className="w-full h-[150px] sm:h-[200px] object-cover rounded-t-lg" />
						<div className="flex justify-between px-2 py-4">
							<p className="font-bold">{item.name}</p>
							<p>
								<span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
