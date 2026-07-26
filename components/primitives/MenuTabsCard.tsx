"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { MenuCategory } from "@/lib/menu";
import { MenuItemRow } from "./MenuItemRow";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
  },
};

export function MenuTabsCard({
  image,
  intro,
  categories,
}: {
  image?: { src: string; alt: string };
  intro?: ReactNode;
  categories: MenuCategory[];
}) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    const observer = new ResizeObserver(() => {
      setHeight(node.offsetHeight);
    });
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl bg-surface-paper">
      {image ? (
        <div className="relative aspect-[16/9] shrink-0 sm:aspect-[21/9]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="min-w-0 p-5 pb-4 sm:p-card sm:pb-4">
        {intro}

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              aria-pressed={category.id === activeId}
              className={`cursor-pointer rounded-pill px-3 py-1.5 text-caption whitespace-nowrap transition-colors duration-200 sm:px-4 sm:py-2 ${
                category.id === activeId
                  ? "bg-action text-ink"
                  : "bg-ink-on-paper/5 text-muted-on-paper hover:bg-ink-on-paper/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ height }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="min-w-0 overflow-hidden"
      >
        <div
          ref={contentRef}
          className="min-w-0 px-5 pb-5 sm:px-card sm:pb-card"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {active.items.length > 0 ? (
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                >
                  {active.items.map((item) => (
                    <MenuItemRow key={item.name} {...item} />
                  ))}
                </motion.ul>
              ) : (
                <p className="py-3 text-body-sm text-muted-on-paper">
                  {active.note}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
