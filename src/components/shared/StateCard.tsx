import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import { icons } from "@/constants/icons.constant";
import type { StatCard } from "@/types/shared.types";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function StatCard({ title, value, description, icon, link }: StatCard) {
  const Icon = icons[icon] || Search;

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      <Link to={link || "#"}>
        <Card className="rounded-sm bg-linear-to-tl from-primary/10 to-transparent transition-shadow duration-300 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium tracking-normal text-muted-foreground">
              {title}
            </CardTitle>

            <span className="rounded-md bg-primary/10 p-1.5 text-primary">
              <Icon className="size-4" />
            </span>
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold tracking-tight">{value}</div>
            <p className="mt-2 text-xs text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
