"use client";

import React, { useId } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AlertCircle, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  contactSchema,
  type ContactFormValues,
} from "@/validation/contact.schema";
import { useContactForm } from "@/hooks/useContactForm";

const labelClassName = "mb-2 block text-sm font-normal text-[#171717]";

export interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export default function ContactForm({
  className = "",
  onSuccess,
}: ContactFormProps) {
  const formId = useId();

  // 1. Initialize React Hook Form with onTouched mode and Yup resolver
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    mode: "onTouched",
    resolver: yupResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      referral: "",
      requirement: "",
    },
  });

  // 2. TanStack Query mutation hook
  const { submitForm, isPending, isSuccess } = useContactForm({
    reset,
    onSuccess: () => {
      onSuccess?.();
    },
  });

  // 3. Watch requirement value for character counter
  const requirementValue =
    useWatch({
      control,
      name: "requirement",
      defaultValue: "",
    }) || "";

  // 4. Keystroke-level blockers
  // Name blocker: Prevents non-alphabetic/invalid characters
  const onNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow modifier key shortcuts (Ctrl+A, Ctrl+C, Ctrl+V, Cmd+A, etc.)
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    // Allow special/control keys (Backspace, Tab, Enter, Arrows, Delete, etc.)
    if (e.key.length !== 1) return;

    // Reject non-alphabetic characters (allows unicode letters, spaces, hyphens, and apostrophes)
    if (!/^[\p{L}\s'-]$/u.test(e.key)) {
      e.preventDefault();
    }
  };

  // Phone blocker: Prevents non-phone characters (allows digits, spaces, parentheses, dashes, plus)
  const onPhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow modifier key shortcuts
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    // Allow special/control keys
    if (e.key.length !== 1) return;

    // Reject non-phone characters
    if (!/^[\d\s().+-]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onSubmit = (data: ContactFormValues) => {
    submitForm(data);
  };

  const isBusy = isSubmitting || isPending;

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${className}`}
      aria-label="Contact Us Form"
    >
      {/* Row 1: First Name & Last Name */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor={`${formId}-firstName`}>
            First name*
          </label>
          <input
            id={`${formId}-firstName`}
            type="text"
            placeholder="John"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            {...register("firstName")}
            onKeyDown={onNameKeyDown}
            className="h-12 w-full rounded-full border border-[#e8e7eb] bg-white px-5 text-sm text-[#222] shadow-xs outline-none transition focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/15 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15"
          />
          {errors.firstName && (
            <p
              role="alert"
              className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
            >
              <AlertCircle className="size-3.5 shrink-0" />
              <span>{errors.firstName.message}</span>
            </p>
          )}
        </div>

        <div>
          <label className={labelClassName} htmlFor={`${formId}-lastName`}>
            Last name*
          </label>
          <input
            id={`${formId}-lastName`}
            type="text"
            placeholder="Doe"
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            {...register("lastName")}
            onKeyDown={onNameKeyDown}
            className="h-12 w-full rounded-full border border-[#e8e7eb] bg-white px-5 text-sm text-[#222] shadow-xs outline-none transition focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/15 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15"
          />
          {errors.lastName && (
            <p
              role="alert"
              className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
            >
              <AlertCircle className="size-3.5 shrink-0" />
              <span>{errors.lastName.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email Address & Phone Number */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor={`${formId}-email`}>
            Email address*
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            placeholder="john.doe@company.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
            className="h-12 w-full rounded-full border border-[#e8e7eb] bg-white px-5 text-sm text-[#222] shadow-xs outline-none transition focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/15 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15"
          />
          {errors.email && (
            <p
              role="alert"
              className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
            >
              <AlertCircle className="size-3.5 shrink-0" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        <div>
          <label className={labelClassName} htmlFor={`${formId}-phone`}>
            Phone number*
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            placeholder="(XXX) XXX-XXXX"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
            onKeyDown={onPhoneKeyDown}
            className="h-12 w-full rounded-full border border-[#e8e7eb] bg-white px-5 text-sm text-[#222] shadow-xs outline-none transition focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/15 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15"
          />
          {errors.phone && (
            <p
              role="alert"
              className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
            >
              <AlertCircle className="size-3.5 shrink-0" />
              <span>{errors.phone.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 3: How did you hear about us? * */}
      <div>
        <label className={labelClassName} htmlFor={`${formId}-referral`}>
          How did you hear about us? <span className="text-red-500">*</span>
        </label>
        <input
          id={`${formId}-referral`}
          type="text"
          placeholder="e.g. Google, Social Media, Referral, etc."
          autoComplete="off"
          aria-invalid={Boolean(errors.referral)}
          {...register("referral")}
          className="h-12 w-full rounded-full border border-[#e8e7eb] bg-white px-5 text-sm text-[#222] shadow-xs outline-none transition focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/15 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15"
        />
        {errors.referral && (
          <p
            role="alert"
            className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
          >
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.referral.message}</span>
          </p>
        )}
      </div>

      {/* Row 4: Tell us about your requirement */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className={labelClassName} htmlFor={`${formId}-requirement`}>
            Tell us about your requirement
          </label>
          <span className="text-xs text-[#858585]">
            {requirementValue.length}/2000
          </span>
        </div>
        <Textarea
          id={`${formId}-requirement`}
          rows={3}
          placeholder="Please share any project details or questions (optional)..."
          aria-invalid={Boolean(errors.requirement)}
          {...register("requirement")}
          className="min-h-[110px] resize-y rounded-2xl border border-[#e8e7eb] bg-white px-4 py-3 text-sm text-[#222] shadow-xs outline-none transition focus-visible:border-[#0D9488] focus-visible:ring-2 focus-visible:ring-[#0D9488]/15 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15"
        />
        {errors.requirement && (
          <p
            role="alert"
            className="mt-1.5 flex items-center gap-1 text-xs text-red-600"
          >
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.requirement.message}</span>
          </p>
        )}
      </div>

      {/* Row 5: Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isBusy}
          className="h-12 w-full rounded-full bg-gradient-to-r from-[#06B6D4] via-[#0D9488] to-[#0D9488] text-[16px] font-normal text-white shadow-sm transition hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isBusy ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              <span>Sending...</span>
            </span>
          ) : (
            <span>Submit ›</span>
          )}
        </Button>
      </div>

      {/* Submission Success State */}
      {isSuccess && (
        <p role="status" className="text-center text-xs text-[#287348] mt-2">
          Your inquiry has been received. Thank you for reaching out!
        </p>
      )}
    </form>
  );
}
