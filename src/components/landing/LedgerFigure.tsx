import { cn } from "@/lib/utils";

interface LedgerFigureProps {
  value: string;
  tone?: "navy" | "brass";
  chip?: boolean;
  className?: string;
}

/**
 * The signature "ledger figure" element (§5.4): a standalone numeral rendered
 * in the monospace numerals face, in Ink Navy or Brass, optionally inside a
 * thin 1px bordered chip.
 */
export default function LedgerFigure({
  value,
  tone = "navy",
  chip = false,
  className,
}: LedgerFigureProps) {
  const toneClass = tone === "brass" ? "text-brass" : "text-ink";
  return (
    <span className={cn(toneClass, className)}>
      {chip ? (
        <span className="ledger-chip">{value}</span>
      ) : (
        <span className="ledger-figure">{value}</span>
      )}
    </span>
  );
}