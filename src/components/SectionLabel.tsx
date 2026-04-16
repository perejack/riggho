interface Props {
  icon?: string;
  text: string;
}

export default function SectionLabel({ icon, text }: Props) {
  return (
    <div className="flex items-center gap-2 text-electric text-sm font-semibold tracking-wider uppercase mb-4">
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </div>
  );
}
