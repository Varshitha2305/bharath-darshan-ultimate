import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type Crumb = { label: string; to?: string };

export function PageHead({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: Crumb[];
}) {
  return (
    <header className="bd-pagehead">
      <div className="container">
        <nav aria-label="Breadcrumb" className="bd-crumbs mb-3">
          {crumbs.map((c, i) => (
            <span key={i}>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span className="bd-current">{c.label}</span>}
              {i < crumbs.length - 1 && <span className="bd-sep">/</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <div className="bd-eyebrow mb-3">{eyebrow}</div>}
        <h1 className="bd-display" style={{ maxWidth: "18ch" }}>
          {title}
        </h1>
        {intro && <p className="bd-lead mt-3" style={{ color: "rgba(255,255,255,0.85)" }}>{intro}</p>}
      </div>
    </header>
  );
}
