"use client";

import React from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { JobOpening } from "@/data/join-us/jobs.data";
import { MapPin, Briefcase, GraduationCap, ChevronDown } from "lucide-react";

export interface JobCardProps {
  job: JobOpening;
  onApply: (job: JobOpening) => void;
}

export default function JobCard({ job, onApply }: JobCardProps) {
  return (
    <AccordionItem
      value={job.id}
      className="rounded-2xl border border-[#E5E7EB] bg-white shadow-xs transition-all duration-200 hover:shadow-sm hover:border-[#0D9488]/40 not-last:border-b not-last:border-[#E5E7EB] overflow-hidden group"
    >
      {/* Clicking anywhere on this header expands/collapses the accordion */}
      <AccordionTrigger
        nativeButton={false}
        render={<div role="button" tabIndex={0} />}
        className="w-full cursor-pointer p-5 sm:p-6 lg:p-7 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden focus-visible:ring-0 text-left"
      >
        <div className="flex items-start justify-between gap-4 w-full">
          {/* Left side: Job preview details and Apply button below */}
          <div className="flex flex-1 flex-col items-start gap-1">
            <h3 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl text-left transition-colors group-hover:text-[#0D9488]">
              {job.title}
            </h3>
            {job.postedDate && (
              <p className="text-xs text-[#6B7280]">
                By {job.author || "webo"} / {job.postedDate}
              </p>
            )}
            <p className="text-sm font-semibold text-[#374151]">
              {job.category}
            </p>
            <p className="text-sm font-medium text-[#4B5563]">
              {job.location}
            </p>

            {/* Apply button on left side below category and location */}
            <div
              className="mt-3.5"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Button
                variant="pill"
                size="pill"
                onClick={(e) => {
                  e.stopPropagation();
                  onApply(job);
                }}
                className="px-6 py-2.5 text-sm"
              >
                Apply
              </Button>
            </div>
          </div>

          {/* Right side: Chevron down button with outline circle */}
          <div className="shrink-0 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#D1D5DB] text-[#374151] shadow-xs transition-all hover:border-[#0D9488] hover:text-[#0D9488] hover:bg-[#0D9488]/5 group-aria-expanded/accordion-trigger:rotate-180 group-aria-expanded/accordion-trigger:border-[#0D9488] group-aria-expanded/accordion-trigger:text-[#0D9488]">
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200" />
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="border-t border-[#F3F4F6] px-5 pt-5 pb-6 sm:px-6 sm:pb-7 lg:px-7">
        <div className="space-y-5">
          {/* Prominent Position overview */}
          <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 sm:p-6 shadow-xs">
            <div className="mb-2.5 flex items-center gap-2">
              <div className="h-4 w-1.5 rounded-full bg-[#0D9488]" />
              <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111827]">
                Position Overview
              </h4>
            </div>
            <p className="whitespace-pre-line text-sm sm:text-[15px] font-normal leading-relaxed text-[#1F2937]">
              {job.fullDetails}
            </p>
          </div>

          {/* Only 3 required details with brand blue accent icons */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-xs">
              <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-[#0D9488]" />
              <div>
                <p className="text-xs font-semibold text-[#4B5563]">Job Category & Type</p>
                <p className="mt-0.5 text-sm font-bold text-[#111827]">
                  {job.category} · {job.type}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-xs">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0D9488]" />
              <div>
                <p className="text-xs font-semibold text-[#4B5563]">Job Location</p>
                <p className="mt-0.5 text-sm font-bold text-[#111827]">
                  {job.location}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-xs sm:col-span-2 lg:col-span-1">
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#0D9488]" />
              <div>
                <p className="text-xs font-semibold text-[#4B5563]">Education / Requirements</p>
                <p className="mt-0.5 text-sm font-bold text-[#111827]">
                  {job.education}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
