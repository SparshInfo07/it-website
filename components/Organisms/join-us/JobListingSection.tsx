"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, ChevronDown, Check, RotateCcw, CheckCircle2, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import JobCard from "@/components/Molecules/JobCard";
import { useApplyJob } from "@/hooks/useApplyJob";
import { toast } from "sonner";
import {
  JOB_OPENINGS_DATA,
  JOB_CATEGORIES,
  JOB_TYPES,
  JOB_LOCATIONS,
  type JobOpening,
} from "@/data/join-us";

export default function JobListingSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Job Type");
  const [selectedLocation, setSelectedLocation] = useState("All Job Location");

  // Dialog state for job application
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Application form fields (matching attached image)
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formBio, setFormBio] = useState("");
  const [formFile, setFormFile] = useState<File | null>(null);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  // Integration with useApplyJob mutation hook
  const { submitApplication, isPending } = useApplyJob({
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  // Sync scroll lock with Lenis/smooth scroll when modal opens
  useEffect(() => {
    if (isApplyOpen) {
      document.body.dataset.scrollLocked = "1";
      document.body.style.overflow = "hidden";
    } else {
      delete document.body.dataset.scrollLocked;
      document.body.style.overflow = "";
    }
    return () => {
      delete document.body.dataset.scrollLocked;
      document.body.style.overflow = "";
    };
  }, [isApplyOpen]);

  const handleOpenApply = (job: JobOpening) => {
    setSelectedJob(job);
    setIsSubmitted(false);
    setIsApplyOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyOpen(false);
    setIsSubmitted(false);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormBio("");
    setFormFile(null);
    setAgreedToPolicy(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formFile) {
      toast.error("Please upload your CV/Resume (.pdf, .doc, .docx).");
      return;
    }
    if (formFile.size > 20 * 1024 * 1024) {
      toast.error("Resume file exceeds the 20MB limit. Please upload a smaller file.");
      return;
    }
    if (!selectedJob) return;

    const formData = new FormData();
    formData.append("fullName", formName);
    formData.append("email", formEmail);
    formData.append("phone", formPhone);
    formData.append("bio", formBio);
    formData.append("jobId", selectedJob.jobId);
    formData.append("jobTitle", selectedJob.title);
    formData.append("jobCategory", selectedJob.category);
    formData.append("jobLocation", selectedJob.location);
    formData.append("agreedToPolicy", String(agreedToPolicy));
    formData.append("resume", formFile);

    submitApplication(formData);
  };

  const isFiltered =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All Categories" ||
    selectedType !== "All Job Type" ||
    selectedLocation !== "All Job Location";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedType("All Job Type");
    setSelectedLocation("All Job Location");
  };

  // Filter jobs logic
  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS_DATA.filter((job) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.jobId.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.fullDetails.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All Categories" ||
        job.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesType =
        selectedType === "All Job Type" ||
        job.type.toLowerCase() === selectedType.toLowerCase();

      const matchesLocation =
        selectedLocation === "All Job Location" ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedType, selectedLocation]);

  return (
    <section id="job-openings" className="relative w-full bg-[#FCFCFD] py-14 sm:py-20 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 max-w-3xl sm:mb-12">
          <p className="tag mb-3 font-bold tracking-[0.2em] text-[#0D9488]">
            CURRENT OPENINGS
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-[42px]">
            Explore opportunities at Sparsh IT
          </h2>
          <p className="mt-3 text-sm font-medium text-[#4B5563] sm:text-base">
            Find the right role and help shape the next generation of digital and
            cloud engineering solutions.
          </p>
        </div>

        {/* Filter Bar (using shadcn Input & DropdownMenu with Brand Blue #0D9488) */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-[#061826]/90 p-4 text-white shadow-xl backdrop-blur-md sm:p-5 transition-colors hover:border-[#0D9488]/50">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Search Input using shadcn Input */}
            <div className="relative">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="h-10 w-full rounded-full border-white/20 bg-white/10 pl-4 pr-10 text-sm font-medium text-white shadow-xs placeholder:text-white/60 transition-colors focus-visible:border-[#0D9488] focus-visible:bg-white/15 focus-visible:ring-[#0D9488]/30"
              />
              <Search className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-white/70" />
            </div>

            {/* Category Dropdown using shadcn DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex h-10 w-full cursor-pointer items-center justify-between rounded-full border bg-white/10 px-4 py-2 text-sm font-medium shadow-xs outline-none transition-all hover:bg-white/15 hover:border-[#0D9488] focus-visible:border-[#0D9488] focus-visible:ring-2 focus-visible:ring-[#0D9488]/30",
                  selectedCategory !== "All Categories"
                    ? "border-[#0D9488] text-white bg-[#0D9488]/30 font-semibold"
                    : "border-white/20 text-white"
                )}
              >
                <span className="truncate">{selectedCategory}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    selectedCategory !== "All Categories" ? "text-[#38bdf8]" : "text-white/70"
                  )}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-(--anchor-width) min-w-[200px] rounded-2xl border border-white/15 bg-[#061826]/95 text-white p-1.5 shadow-2xl backdrop-blur-xl">
                {JOB_CATEGORIES.map((cat) => (
                  <DropdownMenuItem
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors outline-none",
                      selectedCategory === cat
                        ? "bg-[#0D9488]/40 text-white font-semibold"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check className="h-4 w-4 text-[#38bdf8]" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Job Type Dropdown using shadcn DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex h-10 w-full cursor-pointer items-center justify-between rounded-full border bg-white/10 px-4 py-2 text-sm font-medium shadow-xs outline-none transition-all hover:bg-white/15 hover:border-[#0D9488] focus-visible:border-[#0D9488] focus-visible:ring-2 focus-visible:ring-[#0D9488]/30",
                  selectedType !== "All Job Type"
                    ? "border-[#0D9488] text-white bg-[#0D9488]/30 font-semibold"
                    : "border-white/20 text-white"
                )}
              >
                <span className="truncate">{selectedType}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    selectedType !== "All Job Type" ? "text-[#38bdf8]" : "text-white/70"
                  )}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-(--anchor-width) min-w-[180px] rounded-2xl border border-white/15 bg-[#061826]/95 text-white p-1.5 shadow-2xl backdrop-blur-xl">
                {JOB_TYPES.map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors outline-none",
                      selectedType === type
                        ? "bg-[#0D9488]/40 text-white font-semibold"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span>{type}</span>
                    {selectedType === type && <Check className="h-4 w-4 text-[#38bdf8]" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Job Location Dropdown using shadcn DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex h-10 w-full cursor-pointer items-center justify-between rounded-full border bg-white/10 px-4 py-2 text-sm font-medium shadow-xs outline-none transition-all hover:bg-white/15 hover:border-[#0D9488] focus-visible:border-[#0D9488] focus-visible:ring-2 focus-visible:ring-[#0D9488]/30",
                  selectedLocation !== "All Job Location"
                    ? "border-[#0D9488] text-white bg-[#0D9488]/30 font-semibold"
                    : "border-white/20 text-white"
                )}
              >
                <span className="truncate">{selectedLocation}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    selectedLocation !== "All Job Location" ? "text-[#38bdf8]" : "text-white/70"
                  )}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-(--anchor-width) min-w-[180px] rounded-2xl border border-white/15 bg-[#061826]/95 text-white p-1.5 shadow-2xl backdrop-blur-xl">
                {JOB_LOCATIONS.map((loc) => (
                  <DropdownMenuItem
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors outline-none",
                      selectedLocation === loc
                        ? "bg-[#0D9488]/40 text-white font-semibold"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <span>{loc}</span>
                    {selectedLocation === loc && <Check className="h-4 w-4 text-[#38bdf8]" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Results Summary & Reset Action */}
          <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-xs text-white/80">
            <span>
              Showing <strong className="text-white font-bold">{filteredJobs.length}</strong> {filteredJobs.length === 1 ? "position" : "positions"}
            </span>

            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#38bdf8] transition-colors hover:text-white"
              >
                <RotateCcw className="h-3 w-3" />
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Jobs Accordion List */}
        {filteredJobs.length > 0 ? (
          <Accordion className="space-y-4">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleOpenApply} />
            ))}
          </Accordion>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#D1D5DB] bg-white py-14 px-6 text-center shadow-xs">
            <Briefcase className="h-10 w-10 text-[#6B7280]" />
            <h3 className="mt-3 text-base font-bold text-[#111827]">
              No positions matched your criteria
            </h3>
            <p className="mt-1 text-sm font-medium text-[#4B5563]">
              Try adjusting your search terms or clearing the active filters.
            </p>
            <div className="mt-4">
              <Button
                variant="pill"
                size="pill"
                onClick={handleResetFilters}
                className="gap-2 text-xs"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset all filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Shadcn Apply Dialog (Utilizing shadcn Input & Textarea) */}
      <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
        <DialogContent
          data-lenis-prevent
          data-scroll-locked="1"
          className="max-h-[92vh] sm:max-w-3xl overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-0 shadow-2xl flex flex-col"
        >
          {/* Pinned Modal Header */}
          <div className="border-b border-[#F3F4F6] px-6 py-5 sm:px-8 sm:py-6 shrink-0">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                {selectedJob ? `Apply: ${selectedJob.title}` : "Job Application"}
              </DialogTitle>
              {selectedJob && (
                <DialogDescription className="mt-1 text-xs sm:text-sm font-semibold text-[#0D9488]">
                  {selectedJob.category} · {selectedJob.location} · {selectedJob.type}
                </DialogDescription>
              )}
            </DialogHeader>
          </div>

          {/* Inner Scrollable Body with Minimal Inset Scrollbar */}
          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto px-6 py-5 sm:px-8 sm:py-6 [scrollbar-width:thin] [scrollbar-color:#CBD5E1_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-neutral-400"
          >
            {isSubmitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#0D9488]" />
                <h4 className="mt-4 text-xl font-bold text-[#111827]">
                  Application submitted!
                </h4>
                <p className="mt-2 text-sm font-medium text-[#374151]">
                  Thank you for applying for the{" "}
                  <span className="font-bold text-[#111827]">
                    {selectedJob?.title}
                  </span>{" "}
                  position. Our recruitment team will review your qualifications and contact you soon.
                </p>
                <div className="mt-6">
                  <Button
                    variant="pill"
                    size="pill"
                    onClick={handleCloseApply}
                  >
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                {/* Row 1: Full Name & Email using shadcn Input */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#111827]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-10 w-full rounded-full border-[#D1D5DB] bg-[#F9FAFB] px-4 text-sm font-medium text-[#111827] shadow-xs placeholder:text-[#6B7280] transition-colors focus-visible:border-[#0D9488] focus-visible:bg-white focus-visible:ring-[#0D9488]/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#111827]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="h-10 w-full rounded-full border-[#D1D5DB] bg-[#F9FAFB] px-4 text-sm font-medium text-[#111827] shadow-xs placeholder:text-[#6B7280] transition-colors focus-visible:border-[#0D9488] focus-visible:bg-white focus-visible:ring-[#0D9488]/20"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Upload CV/Resume using shadcn Input */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#111827]">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="h-10 w-full rounded-full border-[#D1D5DB] bg-[#F9FAFB] px-4 text-sm font-medium text-[#111827] shadow-xs placeholder:text-[#6B7280] transition-colors focus-visible:border-[#0D9488] focus-visible:bg-white focus-visible:ring-[#0D9488]/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#111827]">
                      Upload CV/Resume <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-2 rounded-full border border-[#D1D5DB] bg-[#F9FAFB] px-3.5 py-1.5 shadow-xs transition-colors focus-within:border-[#0D9488] focus-within:bg-white">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          if (file && file.size > 20 * 1024 * 1024) {
                            toast.error("Resume file exceeds the 20MB limit. Please choose a smaller file.");
                            e.target.value = "";
                            setFormFile(null);
                            return;
                          }
                          setFormFile(file);
                        }}
                        className="w-full text-xs font-semibold text-[#374151] file:mr-2.5 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#061826] file:px-3.5 file:py-1 file:text-xs file:font-semibold file:text-white file:transition-all hover:file:bg-[#0D9488]"
                      />
                    </div>
                    <p className="pl-1 text-[11px] font-medium text-[#4B5563]">
                      Allowed Type(s): .pdf, .doc, .docx (Max 20MB)
                    </p>
                  </div>
                </div>

                {/* Row 3: Bio using shadcn Textarea */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-[#111827]">
                    Bio <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    required
                    rows={2}
                    value={formBio}
                    onChange={(e) => setFormBio(e.target.value)}
                    placeholder="Brief summary of your background and experience"
                    className="min-h-[60px] w-full rounded-2xl border-[#D1D5DB] bg-[#F9FAFB] p-3 text-sm font-medium text-[#111827] shadow-xs transition-colors placeholder:text-[#6B7280] focus-visible:border-[#0D9488] focus-visible:bg-white focus-visible:ring-[#0D9488]/20"
                  />
                </div>

                {/* Row 4: Agreement Checkbox & Submit Button */}
                <div className="flex flex-col gap-3.5 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-2.5 max-w-lg">
                    <input
                      type="checkbox"
                      id="agreeStorage"
                      required
                      checked={agreedToPolicy}
                      onChange={(e) => setAgreedToPolicy(e.target.checked)}
                      className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[#9CA3AF] text-[#0D9488] focus:ring-[#0D9488]"
                    />
                    <label
                      htmlFor="agreeStorage"
                      className="cursor-pointer text-xs font-medium leading-relaxed text-[#374151]"
                    >
                      <span className="text-red-500">*</span>  By using this form you agree with the storage and handling of your data by this website.
                    </label>
                  </div>

                  <div className="shrink-0">
                    <Button
                      type="submit"
                      variant="pill"
                      size="pill"
                      disabled={isPending}
                      className="w-full sm:w-auto px-8 py-2.5 text-xs font-bold tracking-wider"
                    >
                      {isPending ? "SUBMITTING..." : "SUBMIT"}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
