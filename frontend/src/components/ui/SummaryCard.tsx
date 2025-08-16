import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export function SummaryCard({
  title,
  value,
  color,
  percentageChange,
}: {
  title: string;
  value: number;
  color: string;
  percentageChange?: number;
}) {
  const isPositive = (percentageChange ?? 0) > 0;
  const isNegative = (percentageChange ?? 0) < 0;

  return (
    <div className={`p-6 rounded-lg text-white shadow ${color}`}>
      <p className="text-base mb-2">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
      
      {percentageChange !== undefined && percentageChange !== 0 && (
        <p className="mt-2 text-xs flex items-center gap-1">
          {isPositive && <FaArrowUp className="text-green-500" />}
          {isNegative && <FaArrowDown className="text-red-500" />}
          <span>
            {Math.abs(percentageChange).toFixed(1)}% {isPositive ? "increase" : "decrease"} from previous
          </span>
        </p>
      )}

      {percentageChange === 0 && (
        <p className="mt-2 text-xs text-gray-200">No change from previous</p>
      )}
    </div>
  );
}
