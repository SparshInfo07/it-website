"use client";

import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { currentPagePath } from "@/hooks/useWebsiteForms";

export interface ApplyJobPayload {
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  jobId: string;
  jobTitle: string;
  jobCategory?: string;
  jobLocation?: string;
  agreedToPolicy: boolean;
  resume: File;
}

export interface ApplyJobResponse {
  success: boolean;
  message: string;
}

export interface ApplyJobErrorResponse {
  error?: string;
  message?: string;
}

export interface UseApplyJobOptions {
  onSuccess?: (data: ApplyJobResponse) => void;
  onError?: (error: AxiosError<ApplyJobErrorResponse>) => void;
}

/**
 * Direct API function to submit job application with multipart FormData.
 */
export async function applyJobApi(
  payload: ApplyJobPayload | FormData,
): Promise<ApplyJobResponse> {
  let formData: FormData;

  if (payload instanceof FormData) {
    formData = payload;
  } else {
    formData = new FormData();
    formData.append("fullName", payload.fullName);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("bio", payload.bio);
    formData.append("jobId", payload.jobId);
    formData.append("jobTitle", payload.jobTitle);
    if (payload.jobCategory) formData.append("jobCategory", payload.jobCategory);
    if (payload.jobLocation) formData.append("jobLocation", payload.jobLocation);
    formData.append("agreedToPolicy", String(payload.agreedToPolicy));
    if (payload.resume) formData.append("resume", payload.resume);
  }
  if (!formData.has("sourcePage")) formData.append("sourcePage", currentPagePath());

  const response = await axios.post<ApplyJobResponse>(
    "/api/apply-job",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
}

/**
 * Custom hook leveraging TanStack Query's useMutation and Axios
 * to submit job application to /api/apply-job.
 */
export function useApplyJob(options?: UseApplyJobOptions) {
  const mutation = useMutation<
    ApplyJobResponse,
    AxiosError<ApplyJobErrorResponse>,
    ApplyJobPayload | FormData
  >({
    mutationFn: applyJobApi,
    onSuccess: (data) => {
      toast.success(
        data.message || "Your application has been submitted successfully!",
      );
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred while submitting your application. Please try again.";
      toast.error(errorMessage);
      options?.onError?.(error);
    },
  });

  return {
    ...mutation,
    isPending: mutation.isPending,
    submitApplication: mutation.mutate,
    submitApplicationAsync: mutation.mutateAsync,
  };
}

