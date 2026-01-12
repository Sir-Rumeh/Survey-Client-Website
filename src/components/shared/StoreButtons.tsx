import Image from "next/image";
import GoogleStore from "@/assets/images/GoogleStore.png";
import AppleStore from "@/assets/images/AppleStore.png";

const StoreButtons = () => {
	return (
		<>
			<div className="rounded-xl flex items-center gap-3 shadow-lg cursor-pointer hover:scale-105 transition-transform scale-75">
				<Image src={GoogleStore} alt="GoogleStore" className="" />
			</div>

			<div className="rounded-xl flex items-center gap-3 shadow-lg cursor-pointer hover:scale-105 transition-transform scale-75">
				<Image src={AppleStore} alt="AppleStore" className="" />
			</div>
		</>
	);
};

export default StoreButtons;
