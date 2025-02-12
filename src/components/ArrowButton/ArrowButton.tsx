import { FC, MouseEvent } from "react";
import { MdArrowForwardIos } from "react-icons/md";

type ArrowButtonProps = {
	direction: "top" | "bottom" | "right" | "left";
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	variant: "faq" | "carousel";
	disabled?: boolean;
};
const ArrowButton: FC<ArrowButtonProps> = ({
	direction = "right",
	variant = "faq",
	disabled = "false",
	onClick,
}) => {
	const arrowStyle = {
		top: "transform rotate-[270deg]",
		bottom: "transform rotate-90",
		left: "transform rotate-180",
		right: "transform rotate-0",
	};

	const buttonStyle = {
		faq: {
			active:
				"w-[32px] h-[32px] arrow-btn bg-black hover:bg-yellow100 active:bg-yellow50 cursor-pointer",
			disable:
				"w-8 h-8 arrow-btn bg-grey50 hover:bg-yellow100 active:bg-yellow50 pointer-events-none",
		},
		carousel: {
			active:
				"w-12 h-12 arrow-btn bg-black hover:bg-yellow100 active:bg-yellow50 cursor-pointer",
			disable:
				"w-12 h-12 arrow-btn bg-grey50 hover:bg-yellow100 active:bg-yellow50 pointer-events-none",
		},
	};
	let variantStyle = "";
	if (disabled) {
		variantStyle = buttonStyle[variant].disable;
	} else {
		variantStyle = buttonStyle[variant].active;
	}

	return (
		<button onClick={onClick} className={variantStyle}>
			<MdArrowForwardIos
				color={"white"}
				size={variant === "faq" ? 20 : 30}
				className={arrowStyle[direction]}
			/>
		</button>
	);
};

export default ArrowButton;
