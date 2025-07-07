// app/(fullpages)/login/page.tsx
"use client";

import signInWithGoogle from "@/app/(fullpages)/auth/actions";
import { useEffect } from "react";

export default function SignIn() {
  useEffect(() => {
    signInWithGoogle();
  }, []);
  return (
    // <form action={signInWithGoogle}>
    //   <button type="submit">Continue with Google</button>
    // </form>
    <></>
  );
}
