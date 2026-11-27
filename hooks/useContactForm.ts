"use client";

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import type { UseFormReset } from "react-hook-form";
import type { ContactFormValues } from "@/validation/contact.schema";
import { currentPagePath } from "@/hooks/useWebsiteForms";

interface ApiResponse {
  success: boolean;
  message: string;
}

interface ApiErrorResponse {
  error?: string;
  message?: string;
}

interface UseContactFormOptions {
  reset?: UseFormReset<ContactFormValues>;
  onSuccess?: (data: ApiResponse) => void;
  onError?: (error: AxiosError<ApiErrorResponse>) => void;
}

/**
 * Custom hook leveraging TanStack Query's useMutation and Axios
 * to submit contact form data to /api/contact-form.
 */
export function useContactForm(options?: UseContactFormOptions) {
  const mutation = useMutation<
    ApiResponse,
    AxiosError<ApiErrorResponse>,
    ContactFormValues
  >({
    mutationFn: async (payload: ContactFormValues) => {
      const response = await axios.post<ApiResponse>(
        "/api/contact-form",
        { ...payload, sourcePage: payload.sourcePage || currentPagePath() },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(
        data.message || "Your message has been submitted successfully!",
      );
      if (options?.reset) {
        options.reset();
      }
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred while sending your message. Please try again.";
      toast.error(errorMessage);
      options?.onError?.(error);
    },
  });

  return {
    ...mutation,
    isPending: mutation.isPending,
    submitForm: mutation.mutate,
    submitFormAsync: mutation.mutateAsync,
  };
}

