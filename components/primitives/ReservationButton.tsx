"use client";

import {
  getButtonClasses,
  type ButtonVariant,
} from "@/components/primitives/Button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function ReservationButton({
  calLink,
  variant = "primary",
  className = "",
  children,
}: {
  calLink: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { layout: "month_view" });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-link={calLink}
      className={getButtonClasses(variant, className)}
    >
      {children}
    </button>
  );
}
