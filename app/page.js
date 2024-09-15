"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <motion.div
        animate={{ x: 100 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Button>Click me</Button>
      </motion.div>
    </div>
  );
}
