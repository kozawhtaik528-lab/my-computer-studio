// import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// export const supabase = () => {
//   const cookieStore = cookies();

//   return createPagesServerClient({
//     cookies: {
//       get(name: string) {
//         return cookieStore.get(name)?.value;
//       },
//     },
//     supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//   });
// };

import { headers } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function supabase() {
  const h = await headers(); // 👈 FIX: force TS to treat as awaited

  const cookieHeader = h.get("cookie") || "";

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieHeader.match(new RegExp(`${name}=([^;]+)`))?.[1] ?? "";
        },
        set() {},
        remove() {}
      }
    }
  );
}
