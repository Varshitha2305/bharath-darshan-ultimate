import { useState } from "react";

export function FAQ({ items, id = "faq" }: { items: { q: string; a: string }[]; id?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="bd-faq" id={id}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`bd-faq-item ${isOpen ? "open" : ""}`}>
            <button
              className="bd-faq-q"
              aria-expanded={isOpen}
              aria-controls={`${id}-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <i className="bi bi-plus-lg" aria-hidden="true"></i>
            </button>
            <div className="bd-faq-a" id={`${id}-panel-${i}`} role="region">
              <div className="bd-faq-a-inner">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
