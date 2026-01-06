type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold text-[#0cccb3]">
          {title}
        </h2>

        {/* 横線 */}
        <div className="h-1 w-full bg-[#0cccb3]" />
      </div>

      {/* サブタイトル */}
      {subtitle && (
        <p className="mt-2 text-sm text-[#0cccb3]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
