import { PrivatizationCtaForm } from "@/components/sections/PrivatizationCtaForm";
import { getHomepage } from "@/sanity/lib/fetch";
import type { SiteSettings } from "@/sanity/lib/types";

export async function PrivatizationCta({
  settings,
}: {
  settings: SiteSettings;
}) {
  const { privatization } = await getHomepage();

  return <PrivatizationCtaForm settings={settings} content={privatization} />;
}
