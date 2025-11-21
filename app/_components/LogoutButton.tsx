"use client"
import { useRouter } from 'next/navigation'; // For App Router

import { authClient } from "@/lib/auth-client";
import { Button } from "@mui/material";

export function LogoutButton() {
    const router = useRouter()

    const signOut = () => {
        authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.refresh()
                }
            }
        })
    }
    return <Button onClick={signOut} className="hover:text-blue-800">Log Out</Button>
}