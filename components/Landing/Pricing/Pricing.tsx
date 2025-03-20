import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Pricing = () => {
	return (
		<section id="pricing" className="py-20 px-3 sm:px-0">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-semibold">Choose Your Plan</h2>
				<p className="mt-4 text-lg w-full text-gray-600 mb-10">
					Title plan
				</p>
				<div className="mt-10">
					<Link
						href="/dashboard"
						className=""
					>
						<Button>Get Started</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};
