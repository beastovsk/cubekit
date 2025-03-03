import Link from "next/link";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
// import { toast } from "sonner";

const Prices = () => {
	const plans: any[] = [
		{
			name: "Free",
			posts: "3 posts/week",
			integration: (
				<div className="flex justify-center">
					<img className="w-12" src="/x-logo.png" />
				</div>
			),
			projects: "1 project",
			improvement: "No",
			analysis: "Yes",
			price: <p className="text-bold">$0.00</p>,
		},
		{
			name: "Premium",
			posts: "15 posts/day",
			integration: (
				<div className="flex justify-center gap-2">
					<img className="w-12" src="/x-logo.png" />
					<img className="w-12" src="/reddit-logo.png" />
				</div>
			),
			projects: "5 projects",
			improvement: "Yes",
			analysis: "Yes",
			price: <p className="text-bold">$14.00</p>,
		},
		{
			name: "Creator",
			posts: "100 posts/day",
			integration: (
				<div className="flex justify-center gap-2">
					<img className="w-12" src="/x-logo.png" />
					<img className="w-12" src="/reddit-logo.png" />
				</div>
			),
			projects: "10 projects",
			improvement: "Yes",
			analysis: "Yes",
			price: <p className="text-bold">$49.00</p>,
		},
	];

	return (
		<div className="flex flex-col items-center z-50">
			<h1 className="heading lg:max-w-[45vw]">
				<span className="text-purple">Pricing</span>
			</h1>
			<p className="text-white-200 md:mt-10 my-5 text-center">
				no hidden fees | no credit card retention | full transparency
			</p>

			<div className="w-full">
				{/* Таблица для больших экранов */}
				<div className="hidden sm:block overflow-x-auto">
					<table className="w-full border-collapse border border-gray-200 min-w-[600px]">
						<thead>
							<tr className="text-left">
								<th className="p-3 border">Features</th>
								{plans.map((plan, index) => (
									<th
										key={index}
										className="p-3 border text-center"
									>
										{plan.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{Object.keys(plans[0])
								.slice(1)
								.map((feature, index) => (
									<tr key={index} className="border">
										<td className="p-3 border font-medium">
											{feature[0].toUpperCase()}
											{feature
												.replace(/_/g, " ")
												.slice(1)}
										</td>
										{plans.map((plan, i) => (
											<td
												key={i}
												className="p-5 border text-center"
											>
												{plan[feature] === "Yes"
													? "✔️"
													: plan[feature] === "No"
													? "❌"
													: plan[feature]}
											</td>
										))}
									</tr>
								))}
						</tbody>
					</table>
				</div>

				{/* Карточки для мобильных (≤ 640px) */}
				<div className="sm:hidden flex flex-col gap-4 mb-5">
					{plans.map((plan, index) => (
						<div
							key={index}
							style={{
								//   add these two
								//   you can generate the color from here https://cssgradient.io/
								background: "rgb(4,7,29)",
								backgroundColor:
									"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
								// add this border radius to make it more rounded so that the moving border is more realistic
								borderRadius: `calc(1.75rem* 0.96)`,
							}}
							// remove bg-white dark:bg-slate-900
							className="flex-1 text-black dark:text-white border-neutral-200 p-4 dark:border-slate-800"
						>
							<h3 className="text-lg font-semibold text-center">
								{plan.name}
							</h3>
							<ul className="mt-2 space-y-2">
								{Object.keys(plan)
									.slice(1)
									.map((feature, i) => (
										<li
											key={i}
											className="flex justify-between border-b py-1 text-sm"
										>
											<span>
												{feature.replace(/_/g, " ")}
											</span>
											<span>
												{plan[feature] === "Yes"
													? "✔️"
													: plan[feature] === "No"
													? "❌"
													: plan[feature]}
											</span>
										</li>
									))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="z-[999999]">
				<MagicButton
					handleClick={() =>
						// toast("I apologize", {
						// 	description: "Improving the service right now",
						// })
						alert("Improving the service right now")
					}
					icon={<FaLocationArrow className="mr-2" />}
					title="Test Your Content Now"
					position=""
				/>
			</div>
		</div>
	);
};

export default Prices;
