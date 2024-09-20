"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarItem({
  label,
  iconSrc,
  href,
}: {
  label: string;
  iconSrc: string;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Button
      variant={isActive ? "sidebarOutline" : "sidebar"}
      asChild
      className="h-[52px] justify-start"
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          height={32}
          width={32}
          alt={label}
          className="mr-5"
        />
        {label}
      </Link>
    </Button>
  );
}
