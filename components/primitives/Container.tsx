export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8 wide:px-8 ${className}`}>
      {children}
    </div>
  );
}
