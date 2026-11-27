"use client";

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import type { ContactFormValues } from "@/validation/contact.schema";
import type { ProjectBriefValues } from "@/validation/projectBrief.schema";

/**
 * TanStack Query mutations for the website's forms, without UI side effects,
 * so callers that own their own status UI (the curated homepage and inner
 * pages, which wire the form from DOM listeners) can await them directly.
 *
 * Every request goes to this site's own /api route, which proxies to
 * sparsh-backend; the browser never talks to the backend.
 */

export interface WebsiteFormResponse {
  success: boolean;
  message: string;
}

type ApiError = AxiosError<{ error?: string; message?: string }>;

/** The page a form was submitted from, recorded with the submission. */
export function currentPagePath(): string {
  return typeof window === "undefined" ? "" : window.location.pathname;
}

/** A message the visitor can act on, from any error the mutations throw. */
export function websiteFormErrorMessage(err: unknown, fallback: string): string {
  const e = err as ApiError;
  return e?.response?.data?.error || e?.response?.data?.message || fallback;
}

export function useSubmitEnquiry() {
  return useMutation<WebsiteFormResponse, ApiError, ContactFormValues>({
    mutationKey: ["website", "enquiry"],
    mutationFn: async (payload) => {
      const res = await axios.post<WebsiteFormResponse>("/api/contact-form", {
        ...payload,
        sourcePage: payload.sourcePage || currentPagePath(),
      });
      return res.data;
    },
  });
}

export function useSubmitProjectBrief() {
  return useMutation<WebsiteFormResponse, ApiError, ProjectBriefValues>({
    mutationKey: ["website", "project-brief"],
    mutationFn: async (payload) => {
      const res = await axios.post<WebsiteFormResponse>("/api/project-brief", {
        ...payload,
        sourcePage: payload.sourcePage || currentPagePath(),
      });
      return res.data;
    },
  });
}
