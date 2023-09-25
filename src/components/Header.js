import { useDispatch } from "react-redux";

import { toggleMenu } from "../utils/appSlice";

const Header = () => {
	const dispatch = useDispatch();

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
				<input
					type="text"
					className="w-1/2 border border-gray-800 p-2 rounded-l-full"
				/>
				<button className="border border-gray-800 p-2 rounded-r-full bg-gray-300">
					Search
				</button>
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
