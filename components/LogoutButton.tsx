"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteSessionCookie } from "@/lib/actions/auth.action"; // ⭐ server action import

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);          // client logout
            await deleteSessionCookie();  // ⭐ server-side cookie deletion

            toast.success("Logged out");

            router.push("/sign-in");
            router.refresh();            // 🔥 force Next.js to recheck auth
        } catch (err) {
            console.error(err);
            toast.error("Logout failed");
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="text-white/80
        hover:text-white
        transition
        font-medium
        px-4
        py-2
        rounded-lg
        border
        border-white/20
        hover:border-white/40
        backdrop-blur-sm"
        >
            Logout
        </button>
    );
}
