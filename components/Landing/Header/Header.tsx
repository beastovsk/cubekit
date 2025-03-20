"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
	const router = useRouter();

	return (
		<header className="p-6">
			<div className="flex justify-between items-center">
				<Image
					src="/full-logo.png"
					alt="logo"
					width={150}
					height={80}
				/>
				<nav className="hidden sm:block">
					<ul className="flex space-x-6">
						<li>
							<Link href="#about" className="hover:text-gray-400">
								How it works
							</Link>
						</li>
						<li>
							<Link
								href="#pricing"
								className="hover:text-gray-400"
							>
								Pricing
							</Link>
						</li>
					</ul>
				</nav>
				<div className="flex items-center gap-3">
					<span>
						<Button onClick={() => router.push("/sign-in")}>
							Sign In
						</Button>
					</span>
					<span>
						<Button variant='outline' onClick={() => router.push("/sign-in")}>
							Sign Up
						</Button>
					</span>
				</div>
			</div>
		</header>
	);
};
