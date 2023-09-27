import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const [suggestions, setSuggestions] = useState([]);

	const [showSuggestions, setShowSuggestions] = useState(false);

	const searchCache = useSelector((store) => store.search);

	const dispatch = useDispatch();

	useEffect(() => {
		// Make an API Call after every Key Press
		// But if the difference between 2 API Calls is < 200ms
		// Decline the API Call

		/**
		 * Key - i
		 * 	-	Render the Component
		 * 	-	useEffect();
		 * 	-	Start Timer -> Makes an API Call after 200ms
		 *
		 * Key - ip
		 * 	-	Destroys the Component(using useEffect return method)
		 * 	-	Re-render the Component
		 * 	-	useEffect();
		 * 	-	Start Timer -> Makes an API Call after 200ms
		 */

		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);
		return () => {
			clearTimeout(timer);
		};

		//eslint-disable-next-line
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

		const json = await data.json();

		setSuggestions(json[1]);

		dispatch(
			cacheResults({
				[searchQuery]: json[1],
			})
		);
	};

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img
					onClick={toggleMenuHandler}
					className="h-6 cursor-pointer"
					alt="menu icon"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCXVajWnfvQV05h-_7WEdiLuNPLckMyuW3nz66WhhdkvIv1PPjQ-mQQd0DbXlhpv7uss&usqp=CAU"
				/>
				<img
					className="h-8 mx-2"
					alt="youtube logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lDm-P3cFiP6a-0idy0b5L-KsVdIs0S5jTA&usqp=CAU"
				/>
			</div>
			<div className="col-span-10">
				<div>
					<input
						type="text"
						className="w-1/2 border border-gray-800 p-2 rounded-l-full px-5"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button className="border border-gray-800 p-2 rounded-r-full bg-gray-300">
						Search
					</button>
				</div>
				{showSuggestions && searchQuery && (
					<div className="absolute bg-white py-2 px-2 w-[32.5rem] shadow-lg rounded-lg border border-gray-400">
						<ul>
							{suggestions.map((s) => (
								<li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-300">
									{s}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="col-span-1 px-10">
				<img
					className="h-8"
					alt="user icon"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnpYj8EpsmZKmZNYfRVvQxQN01Eh1Xj5woA&usqp=CAU"
				/>
			</div>
		</div>
	);
};

export default Header;
