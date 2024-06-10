"use client"
import { createClient } from "@/utils/supabase/client"
import { Auth } from "@supabase/auth-ui-react"

export default function Login() {
  const supabase = createClient()

  return (
    <div className="flex-1 px-8   gap-2 flex items-center justify-center ">
      <Auth
        supabaseClient={supabase}
        providers={["google"]}
        redirectTo="http://localhost:3000/auth/callback"
      />
    </div>
  )
}
