import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Le Paddock"
      width={183}
      height={50}
      priority
      className={`h-9 w-auto ${className}`}
    />
  );
}
