// ============================================================
// KAME AUTH SERVICE — pluggable authentication interface
// ============================================================
// This file defines the CONTRACT every real auth provider must satisfy.
// No fake login exists here — until a real provider is wired up below,
// every method returns an explicit "not configured" result rather than
// pretending to succeed.
//
// To go live, pick ONE provider and implement the three methods:
//   1. Firebase Authentication (recommended for fastest setup)
//   2. Supabase Auth (recommended if already using Supabase for data)
//   3. Auth0 (recommended for enterprise SSO needs later)
//
// Set AUTH_PROVIDER in your environment (see .env.example) once chosen.
// See docs/API_INTEGRATION_GUIDE.md for step-by-step setup of each.
// ============================================================

const AUTH_PROVIDER = import.meta.env.VITE_AUTH_PROVIDER || "none";

class NotConfiguredError extends Error {
  constructor() {
    super(
      "Authentication is not yet configured. Set VITE_AUTH_PROVIDER in your environment " +
        "and implement the corresponding provider in src/auth/authService.js. " +
        "See docs/API_INTEGRATION_GUIDE.md."
    );
    this.name = "NotConfiguredError";
    this.code = "AUTH_NOT_CONFIGURED";
  }
}

async function signIn(_email, _password) {
  if (AUTH_PROVIDER === "none") {
    throw new NotConfiguredError();
  }
  // --- Firebase example (uncomment once firebase is installed & configured) ---
  // import { signInWithEmailAndPassword } from "firebase/auth";
  // import { firebaseAuth } from "./providers/firebase.js";
  // const cred = await signInWithEmailAndPassword(firebaseAuth, _email, _password);
  // return { id: cred.user.uid, email: cred.user.email };

  // --- Supabase example ---
  // import { supabase } from "./providers/supabase.js";
  // const { data, error } = await supabase.auth.signInWithPassword({ email: _email, password: _password });
  // if (error) throw error;
  // return { id: data.user.id, email: data.user.email };

  throw new NotConfiguredError();
}

async function signOut() {
  if (AUTH_PROVIDER === "none") return;
  // Provider-specific sign-out goes here once configured.
}

async function getCurrentUser() {
  if (AUTH_PROVIDER === "none") return null;
  // Provider-specific session check goes here once configured.
  return null;
}

export const authService = { signIn, signOut, getCurrentUser, isConfigured: AUTH_PROVIDER !== "none" };
export { NotConfiguredError };
export default authService;
