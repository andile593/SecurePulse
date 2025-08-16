import { BADGE_STYLES } from "@/constants/statusStyles";

function normalizeStatus(value?: string) {
  return value ? value.replace(/\s+/g, "").toLowerCase() : "";
}

export function StatusBadge({ status }: { status?: string }) {
  const style = BADGE_STYLES[normalizeStatus(status)];

  if (!style) return <div className="text-gray-400 italic text-sm">—</div>;

  return (
    <div
      style={{
        color: style.textColor,
        backgroundColor: style.bgColor,
        width: style.width,
        height: style.height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        fontWeight: 600,
        fontSize: 12,
      }}
    >
      {status}
    </div>
  );
}
