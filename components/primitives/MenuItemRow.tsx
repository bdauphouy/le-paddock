"use client";

import { motion } from "motion/react";
import type { MenuLine } from "@/lib/menu";

export const menuItemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export function MenuItemRow({
  name,
  description,
  origin,
  price,
  tiers,
}: MenuLine) {
  return (
    <motion.li
      variants={menuItemVariants}
      className="flex items-baseline justify-between gap-4 border-b border-hairline-paper/70 py-3 last:border-none"
    >
      <div>
        <p className="text-title-sm text-ink-on-paper">{name}</p>
        {description ? (
          <p className="text-body-sm text-muted-on-paper mt-0.5">
            {description}
          </p>
        ) : null}
        {origin ? (
          <p className="text-caption text-muted-on-paper mt-0.5">{origin}</p>
        ) : null}
      </div>
      {tiers ? (
        <div className="flex shrink-0 flex-col items-end gap-0.5">
          {tiers.map((tier) => (
            <span
              key={tier.label}
              className="text-body-sm text-ink-on-paper whitespace-nowrap"
            >
              <span className="text-muted-on-paper">{tier.label}</span>{" "}
              {tier.value}
            </span>
          ))}
        </div>
      ) : price ? (
        <span className="text-title-sm text-ink-on-paper whitespace-nowrap shrink-0">
          {price}
        </span>
      ) : null}
    </motion.li>
  );
}
