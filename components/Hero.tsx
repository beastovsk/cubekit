import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import Image from "next/image";
// import { toast } from "sonner";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			{/* UI: Spotlights for decorative background */}
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight
					className="left-80 top-28 h-[80vh] w-[50vw]"
					fill="blue"
				/>
			</div>

			{/* UI: Background grid with dark mode adjustments */}
			<div
				className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
			>
				{/* Radial gradient for a subtle fade effect */}
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<Image
						className="w-32 absolute left-[0%] md:left-[20%] md:bottom-[10%] opacity-30 rotate-3 bottom-[-40%]"
						src="/reddit-logo.png"
						alt="rdt"
						width={100}
						height={100}
					/>
					<Image
						className="w-32 absolute right-[0%] md:right-[20%]  md:bottom-[15%] bottom-[-40%] opacity-30 rotate-2"
						src="/x-logo.png"
						alt="x"
						width={100}
						height={100}
					/>
					<p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
						Publishing blind is a risk. Let’s check first.
					</p>
					{/* Dynamic text generation effect */}
					<TextGenerateEffect
						words="Know Before You Post – Test, Improve, Publish with Confidence"
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
					/>
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Validate your posts with your audience before going
						live. Minimize risks, maximize engagement.
					</p>
					<div className="flex gap-2 items-center">
						{/* <Link href="#" target="_blank"> */}
						<MagicButton
							handleClick={() =>
								// toast("I apologize", {
								// 	description:
								// 		"Improving the service right now",
								// })
								alert("Improving the service right now")
							}
							icon={<FaLocationArrow className="mr-2" />}
							title="Test Your Content Now"
							position=""
						/>
						{/* </Link> */}
					</div>

					<div className="text-center flex items-center mt-10 gap-4">
						<div className="w-48">
							<img src="/review.png" alt="review" />
						</div>
						<div className="flex flex-col ">
							<img
								className="w-28"
								src="/stars.png"
								alt="stars"
							/>
							<p className="text-gray-300 text-start">
								Loved by Solopreneurs
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
