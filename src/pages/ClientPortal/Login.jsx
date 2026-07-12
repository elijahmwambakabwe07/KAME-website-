import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import SEO from "../../components/layout/SEO.jsx";
import { useAuth } from "../../auth/AuthContext.jsx";
import { NotConfiguredError } from "../../auth/authService.js";
import { Icon } from "../../components/ui/Icon.jsx";
import { Section } from "../../components/ui/Primitives.jsx";

export default function Login() {
  const { login, isConfigured } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const from = location.state?.from?.pathname || "/portal/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof NotConfiguredError ? err.message : "Sign-in failed. Check your email and password and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO title="Client Portal Login" path="/portal/login" noindex />
      <Section className="flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-md rounded-xl2 border border-navy-50 bg-white p-8 shadow-elevated">
          <div className="mb-6 text-center">
            <img src="/assets/brand/kame-logo-192.png" alt="KAME logo" className="mx-auto h-16 w-16" width="64" height="64" />
            <h1 className="mt-4 text-2xl">Client Portal</h1>
            <p className="mt-1 text-sm text-ink-light">Sign in to view your dashboard.</p>
          </div>

          {!isConfigured && (
            <div className="mb-6 flex gap-3 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
              <Icon name="alert" className="h-5 w-5 flex-shrink-0" />
              <p>
                Authentication is architected but not yet connected to a live provider. See{" "}
                <code className="rounded bg-amber-100 px-1">docs/API_INTEGRATION_GUIDE.md</code> to
                connect Firebase, Supabase, or Auth0 — no page rebuild required once configured.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="mb-1 block text-sm font-semibold">Email</label>
              <input
                id="login-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="mb-1 block text-sm font-semibold">Password</label>
              <input
                id="login-password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:border-navy-700 focus:outline-none"
              />
            </div>
            {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
              {submitting ? "Signing in..." : "Sign In"}
              <Icon name="login" className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-light">
            Not a client yet? <Link to="/contact" className="font-semibold text-navy-700 hover:underline">Get in touch</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
