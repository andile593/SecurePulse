export type BadgeStyle = {
  textColor: string;
  bgColor: string;
  width: number;
  height: number;
};

export const BADGE_STYLES: Record<string, BadgeStyle> = {
  // Call statuses
  nocall: { textColor: "#FCB050", bgColor: "#FFE7B4", width: 105, height: 30 },
  codeconfirmed: { textColor: "#2BFF00", bgColor: "#C7FFBB", width: 150, height: 30 },
  noanswer: { textColor: "#FF0000", bgColor: "#FFB4B4", width: 105, height: 30 },

  // AI decisions
  dispatched: { textColor: "#1C48CD", bgColor: "#B4B8FF", width: 120, height: 30 },
  falsealarm: { textColor: "#FF0000", bgColor: "#FFB4B4", width: 120, height: 30 },
  noaction: { textColor: "#454545", bgColor: "#D9D9D9", width: 120, height: 30 },
};
