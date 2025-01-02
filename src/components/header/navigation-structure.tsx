import { Book, Flame, Home, Library, LibraryBig, LucideIcon } from "lucide-react";

export const NavigationStructure: {
  title: string,
  href: string,
  icon: LucideIcon,
  items?: {
    name: string,
    href: string,
    description: string
  }[]
}[] = [
    {
      title: "Trang chủ",
      href: "/",
      icon: Home
    },
    {
      title: "Thể loại",
      href: "/docs/primitives/hover-card",
      icon: LibraryBig,
      items: [
        {
          name: 'Tiên hiệp',
          href: '',
          description:' Truyện tu tiên cổ điển'
        },
        {
          name: 'Đô thị',
          href: '',
          description:' Truyện tu tiên đô thị hiện đại'
        },
        {
          name: 'Ngôn lù',
          href: '',
          description:' Truyện tu tình cảm cơm chó các thứ'
        }
      ]
    },
    {
      title: "Truyện mới",
      href: "/docs/primitives/progress",
      icon: Book
    },
    {
      title: "Truyện hot",
      href: "/docs/primitives/scroll-area",
      icon: Flame
    },
  ]