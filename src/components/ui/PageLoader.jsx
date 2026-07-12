import React from "react";

export default function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-navy-100 border-t-navy-700" />
        <p className="text-sm text-ink-light">Loading...</p>
      </div>
    </div>
  );
}
