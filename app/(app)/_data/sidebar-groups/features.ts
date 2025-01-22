import { SidebarGroup } from "../../_types/sidebar";

export const featuresgroup: SidebarGroup = {
  label: "Features",
  items: [
    {
      icon: "MessageSquare",
      label: "Start a new chat",
      href: "/chat",
    },
    {
      icon: "TrendingUp",
      label: "Trending",
      href: "/trending",
    },
    {
      icon: "ChartCandlestick",
      label: "Trading(Coming Soon)",
    },
  ],
};
