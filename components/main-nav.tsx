"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/explore`,
      label: "Explore",
      active: pathname === `/explore`,
    },
    {
      href: `/about`,
      label: "About",
      active: pathname === `/about`,
    },
    {
      href: `/reviews`,
      label: "Reviews",
      active: pathname === `/reviews`,
    }
  ];

  return (
    <nav className={cn("flex items-center font-medium text-sm space-x-4 lg:space-x-6 font-sans", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "transition-colors hover:text-primary",
            // route.active
            //   ? "text-black"
            //   : "text-gray-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}