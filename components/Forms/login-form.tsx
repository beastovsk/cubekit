
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SignInGoogle } from "./SignInGoogle";
import { CredentialsForm } from "./CredentialsForm";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Welcome back</CardTitle>
					<CardDescription>
						{/* Login with your Google account */}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-6">
						{/* <div className="flex flex-col gap-4">
							<SignInGoogle />
						</div>
						<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
							<span className="bg-card text-muted-foreground relative z-10 px-2">
								Or continue with
							</span>
						</div> */}
						<CredentialsForm />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
