import * as yup from "yup";

/** Project Explorer wizard submission (homepage + inner pages). */
export interface ProjectBriefValues {
  company: string;
  email: string;
  package?: string;
  industry?: string;
  capabilities?: string[];
  timeline?: string;
  brief?: string;
  sourcePage?: string;
  /** Honeypot. */
  website?: string;
}

export const projectBriefSchema: yup.ObjectSchema<ProjectBriefValues> = yup.object({
  company: yup.string().trim().required("Company name is required").max(255),
  email: yup
    .string()
    .trim()
    .lowercase()
    .required("Email address is required")
    .email("Please enter a valid email address")
    .max(255),
  package: yup.string().trim().max(120).optional(),
  industry: yup.string().trim().max(120).optional(),
  capabilities: yup.array(yup.string().trim().max(120).required()).max(30).optional(),
  timeline: yup.string().trim().max(120).optional(),
  brief: yup.string().trim().max(5000).optional(),
  sourcePage: yup.string().trim().max(255).optional(),
  website: yup.string().optional(),
});
