import React from "react";
import SEO from "../../components/layout/SEO.jsx";
import { useAuth } from "../../auth/AuthContext.jsx";
import { Icon } from "../../components/ui/Icon.jsx";
import { Section, Eyebrow, Card } from "../../components/ui/Primitives.jsx";

// Each panel below is real UI architecture wired to placeholder data.
// Replace the `data` arrays with real API calls once the Client Dashboard
// backend exists (see docs/FUTURE_EXPANSION_GUIDE.md — "Client Dashboard").
function DashboardPanel({ icon, title, children }) {
  return (
    <Card>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <h2 className="text-lg">{title}</h2>
      </div>
      {children}
    </Card>
  );
}

function EmptyState({ message }) {
  return <p className="rounded-lg bg-surface-muted p-4 text-sm text-ink-light">{message}</p>;
}

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <>
      <SEO title="Client Dashboard" path="/portal/dashboard" noindex />
      <Section className="bg-navy-900 text-white">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <Eyebrow dark>Client Portal</Eyebrow>
            <h1 className="text-3xl text-white">Welcome back{user?.email ? `, ${user.email}` : ""}</h1>
          </div>
          <button onClick={logout} className="btn-secondary border-white text-white hover:bg-white hover:text-navy-900">
            Sign Out
          </button>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DashboardPanel icon="bar-chart" title="Visibility Score">
            <EmptyState message="Your Visibility Score will appear here once your first Business Visibility Audit is complete." />
          </DashboardPanel>

          <DashboardPanel icon="search" title="Audit History">
            <EmptyState message="No audits recorded yet." />
          </DashboardPanel>

          <DashboardPanel icon="workflow" title="Project Progress">
            <EmptyState message="Your onboarding and project milestones will be tracked here." />
          </DashboardPanel>

          <DashboardPanel icon="bar-chart" title="Monthly Reports">
            <EmptyState message="Monthly performance reports will be listed here as they're published." />
          </DashboardPanel>

          <DashboardPanel icon="check" title="Recommendations">
            <EmptyState message="Prioritised recommendations from your latest audit will appear here." />
          </DashboardPanel>

          <DashboardPanel icon="message-circle" title="Messages">
            <EmptyState message="Messages between you and your KAME account manager will appear here." />
          </DashboardPanel>

          <DashboardPanel icon="monitor" title="Downloads">
            <EmptyState message="Reports, proposals, and brand assets shared with you will be downloadable here." />
          </DashboardPanel>

          <DashboardPanel icon="bar-chart" title="Invoices">
            <EmptyState message="Invoice history and payment status will appear here once billing is connected." />
          </DashboardPanel>
        </div>
      </Section>
    </>
  );
}
