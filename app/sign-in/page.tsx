import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/Forms/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md">
            {/* <GalleryVerticalEnd className="size-4" /> */}
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </div>
          Smart Pitch
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
