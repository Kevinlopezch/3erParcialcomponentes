// atoms/Image.tsx
export default function Image({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="exercise" className="w-16 h-16 object-cover rounded" />
  );
}
