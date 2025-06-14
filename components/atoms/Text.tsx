// atoms/Text.tsx
export default function Text({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-white ${className}`}>{children}</p>;
}
