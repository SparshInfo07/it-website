import { isMeaningfulText } from "@/lib/isMeaningfulText";
import {
  isValidName,
  isValidEmailAddress,
  isValidPhoneNumber,
} from "@/validation/rules";
import * as yup from "yup";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referral: string;
  requirement?: string;
  // Optional / backward-compatible fields
  description?: string;
  country?: string;
  designation?: string;
  service?: string;
  agreeToMarketing?: boolean;
}

export const contactSchema: yup.ObjectSchema<ContactFormValues> = yup.object({
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .test(
      "valid-first-name",
      "Please enter a valid first name",
      (val) => !val || isValidName(val, 2),
    ),

  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .min(1, "Last name must be at least 1 character")
    .max(50, "Last name must not exceed 50 characters")
    .test(
      "valid-last-name",
      "Please enter a valid last name",
      (val) => !val || isValidName(val, 1),
    ),

  email: yup
    .string()
    .trim()
    .required("Email address is required")
    .email("Please enter a valid email address")
    .test(
      "valid-email",
      "Please enter a valid email address",
      (val) => !val || isValidEmailAddress(val),
    ),

  phone: yup
    .string()
    .trim()
    .required("Phone number is required")
    .test(
      "valid-phone",
      "Please enter a valid phone number (7-15 digits)",
      (val) => !val || isValidPhoneNumber(val),
    ),

  referral: yup
    .string()
    .trim()
    .required("Please tell us how you heard about us"),

  requirement: yup
    .string()
    .trim()
    .optional()
    .max(2000, "Requirement must not exceed 2000 characters")
    .test(
      "meaningful-requirement",
      "Please provide a meaningful requirement message",
      (value) => !value || value.length < 10 || isMeaningfulText(value),
    ),

  description: yup.string().optional(),
  country: yup.string().optional(),
  designation: yup.string().optional(),
  service: yup.string().optional(),
  agreeToMarketing: yup.boolean().optional(),
});
