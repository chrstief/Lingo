type Props = {
  children: React.ReactNode;
};

export default function LessonLayout({ children }: Props) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  );
}
