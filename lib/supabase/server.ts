import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const supabase = () => {
  const cookieStore = cookies();

  return createPagesServerClient({
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
    },
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });
};
