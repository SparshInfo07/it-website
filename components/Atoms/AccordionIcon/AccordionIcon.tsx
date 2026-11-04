"use client";

import React from "react";
import Image from "next/image";
import {
  Landmark,
  CreditCard,
  ShieldCheck,
  Briefcase,
  FileText,
  BarChart3,
  Smartphone,
  GitBranch,
  Code2,
  Boxes,
  CheckCircle2,
  FileCheck2,
  KeyRound,
  Activity,
  RotateCcw,
  Cpu,
  Layers,
  Database,
  ShoppingBag,
  Store,
  Truck,
  Users,
  PackageCheck,
  HeartPulse,
  Stethoscope,
  FileHeart,
  Plane,
  Calendar,
  Ticket,
  Wrench,
  Hotel,
  TrendingUp,
  UtensilsCrossed,
  GraduationCap,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export interface AccordionIconProps {
  name?: string;
  className?: string;
  iconClassName?: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  // Banking / Finance
  "core-banking": Landmark,
  bank: Landmark,
  landmark: Landmark,
  payment: CreditCard,
  "credit-card": CreditCard,
  risk: ShieldCheck,
  "risk-management": ShieldCheck,
  shield: ShieldCheck,
  wealth: Briefcase,
  "wealth-management": Briefcase,
  wallet: Briefcase,
  loan: FileText,
  "loan-management": FileText,
  analytics: BarChart3,
  "financial-analytics": BarChart3,
  chart: BarChart3,
  regulatory: FileText,
  "regulatory-reporting": FileText,
  mobile: Smartphone,
  "mobile-banking": Smartphone,

  // DevSecOps / Cloud / Engineering
  pipeline: GitBranch,
  "ci-cd": GitBranch,
  git: GitBranch,
  security: ShieldCheck,
  iac: Code2,
  code: Code2,
  kubernetes: Boxes,
  containers: Boxes,
  testing: CheckCircle2,
  qa: CheckCircle2,
  quality: CheckCircle2,
  compliance: FileCheck2,
  audit: FileCheck2,
  secrets: KeyRound,
  auth: KeyRound,
  identity: KeyRound,
  observability: Activity,
  telemetry: Activity,
  monitoring: Activity,
  incident: RotateCcw,
  recovery: RotateCcw,
  rollback: RotateCcw,
  cpu: Cpu,
  ai: Cpu,
  automation: Cpu,
  database: Database,
  data: Database,
  strategy: Layers,
  performance: Activity,
  resilience: Activity,

  // Retail / E-Commerce
  commerce: ShoppingBag,
  retail: ShoppingBag,
  shop: ShoppingBag,
  store: Store,
  storefront: Store,
  omnichannel: Layers,
  customer: Users,
  inventory: Boxes,
  order: PackageCheck,
  fulfillment: Truck,

  // Healthcare & Life Sciences
  healthcare: HeartPulse,
  health: HeartPulse,
  telehealth: HeartPulse,
  clinical: Stethoscope,
  doctor: Stethoscope,
  patient: FileHeart,
  medical: HeartPulse,

  // Travel & Transportation
  fleet: Truck,
  transportation: Truck,
  transit: Truck,
  logistics: Boxes,
  routing: GitBranch,
  reservation: Ticket,
  booking: Calendar,
  travel: Plane,
  aviation: Plane,
  maintenance: Wrench,
  passenger: Users,

  // Hospitality & Leisure
  hospitality: Hotel,
  hotel: Hotel,
  property: Hotel,
  resort: Hotel,
  guest: Users,
  revenue: TrendingUp,
  dining: UtensilsCrossed,
  restaurant: UtensilsCrossed,

  // Education & Learning
  education: GraduationCap,
  learning: BookOpen,
  academic: GraduationCap,
  lms: BookOpen,
  classroom: BookOpen,
  assessment: FileCheck2,
  student: Users,
};

export default function AccordionIcon({
  name = "default",
  className = "",
  iconClassName = "w-4 h-4 sm:w-5 sm:h-5",
}: AccordionIconProps) {
  const isCustomPath =
    typeof name === "string" &&
    (name.startsWith("/") ||
      name.startsWith("http") ||
      name.endsWith(".svg") ||
      name.endsWith(".png") ||
      name.endsWith(".webp"));

  if (isCustomPath) {
    return (
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] bg-[#EBF3FE] flex items-center justify-center shrink-0 transition-colors duration-200 select-none overflow-hidden p-1.5 ${className}`}
        aria-hidden="true"
      >
        <Image
          src={name}
          alt=""
          width={28}
          height={28}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  const normalizedKey = (name || "").toLowerCase().trim();
  const IconComponent: LucideIcon = ICON_MAP[normalizedKey] || Layers || Cpu;

  return (
    <div
      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[12px] bg-[#EBF3FE] text-[#1E70BF] flex items-center justify-center shrink-0 transition-colors duration-200 select-none ${className}`}
      aria-hidden="true"
    >
      <IconComponent className={`${iconClassName} stroke-[2]`} />
    </div>
  );
}
