import { LucideIcon, BellIcon, UserIcon, LogInIcon } from "lucide-react";

// Định nghĩa kiểu cho các mục con
interface NavigationSubItem {
  name: string;
  href: string;
}

// Định nghĩa kiểu cho cấu trúc chính
interface NavigationItem {
  icon: LucideIcon;
  items?: NavigationSubItem[];
}

// NavigationStructureUser sử dụng kiểu đã định nghĩa
export const NavigationStructureUser: NavigationItem[] = [
  {
    icon: BellIcon,
  },
  {
    icon: UserIcon,
    items: [
      { name: "Thông tin tài khoản", href: "/user/account-infomation" },
      { name: "Settings", href: "" },
      { name: "Đăng xuất", href: "" },
    ],
  },
];
