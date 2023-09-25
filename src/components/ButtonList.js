import { Button } from "./Button";

const ButtonList = () => {
	return (
		<div className="flex">
			<Button name="All" />
			<Button name="Gaming" />
			<Button name="Songs" />
			<Button name="Live" />
			<Button name="Soccer" />
			<Button name="Cricket" />
		</div>
	);
};

export default ButtonList;
