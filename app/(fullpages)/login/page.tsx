// app/(fullpages)/login/page.tsx
"use client";

import signInWithGoogle from "@/app/(fullpages)/login/actions"

export default function SignIn() {
  return (
    <form action={signInWithGoogle}>
      <button type="submit">Continue with Google</button>
    </form>
  );
}