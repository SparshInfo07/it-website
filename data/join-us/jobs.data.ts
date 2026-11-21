export interface JobOpening {
  id: string;
  title: string;
  jobId: string;
  category: string;
  type: string;
  location: string;
  education: string;
  description: string;
  fullDetails: string;
  workSite?: string;
  mailAddress?: string;
  postedDate?: string;
  author?: string;
}

export const JOB_OPENINGS_DATA: JobOpening[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    jobId: "FD25",
    author: "webo",
    postedDate: "February 19, 2025",
    category: "Development",
    type: "Full Time",
    location: "India, U.S.",
    education:
      "Bachelor’s Degree in Computer Science or related field or equivalent experience",
    description:
      "• Bachelor’s Degree in Computer Science or related field or equivalent experience• 4+ years of experience developing code in JavaScript and familiarity with Vue/React/Angular• Understanding of development best practices• Experience with HTML Markup standards and CSS• Awareness of coding with accessibility in mind",
    fullDetails:
      "• Bachelor’s Degree in Computer Science or related field or equivalent experience\n• 4+ years of experience developing code in JavaScript and familiarity with Vue/React/Angular\n• Understanding of development best practices\n• Experience with HTML Markup standards and CSS\n• Awareness of coding with accessibility in mind",
    mailAddress: "F-405, Oxy Homez, Sahibabad, Ghaziabad, UP 201005",
  },
  {
    id: "OQE24",
    title: "Automation Engineer (OQE24)",
    jobId: "OQE24",
    author: "webo",
    postedDate: "November 5, 2024",
    category: "Quality Engineering",
    type: "Full Time",
    location: "India, U.S.",
    education: "Master’s only/equiv. Foreign equiv. accepted.",
    description:
      "Sparsh IT Inc. has multiple openings for the following position:Master’s only/equiv.: QA Engineer (OQE24): Produce test plans covering functional, acceptance, and performance test domains. Mail resume with job ID # to F-405, Oxy Homez, Sahibabad, Ghaziabad, UP 201005. Reference job ID # OQE24. Unanticipated work site locations throughout U.S. Foreign equiv. accepted.",
    fullDetails:
      "Sparsh IT Inc. has multiple openings for the following position:Master’s only/equiv.: QA Engineer (OQE24): Produce test plans covering functional, acceptance, and performance test domains. Mail resume with job ID # to F-405, Oxy Homez, Sahibabad, Ghaziabad, UP 201005. Reference job ID # OQE24. Unanticipated work site locations throughout U.S. Foreign equiv. accepted.",
    workSite: "Unanticipated work site locations throughout U.S.",
    mailAddress: "F-405, Oxy Homez, Sahibabad, Ghaziabad, UP 201005",
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    jobId: "SE23",
    author: "webo",
    postedDate: "April 28, 2023",
    category: "DevOps",
    type: "Full Time",
    location: "U.S., Bangalore, Hyderabad",
    education:
      "5 years of progressive experience in enterprise software development using Java, J2EE, Spring, Spring Boot, Spring integration, Oracle, Hibernate, Struts, XML/XSLT/JAXB, SOAP and REST web services preferred.",
    description:
      "• Knowledge of Service Oriented Architecture, Complex Event Processing or Micro services and APIs preferred• Strong understanding of architectural principles, design patterns and common methodologies across a variety of technologies preferred.• Build experience including Jenkins, Gradle, GIT, BitBucket, and Stash preferred.• 5 years of progressive experience in enterprise software development using Java, J2EE, Spring, Spring Boot, Spring integration, Oracle, Hibernate, Struts, XML/XSLT/JAXB, SOAP and REST web services preferred.• Experience with Azure Cloud, Elastic, Kotlin• Experience with Java and related technologies preferred.• Experience working with or building applications using Micro services architecture",
    fullDetails:
      "• Knowledge of Service Oriented Architecture, Complex Event Processing or Micro services and APIs preferred\n• Strong understanding of architectural principles, design patterns and common methodologies across a variety of technologies preferred.\n• Build experience including Jenkins, Gradle, GIT, BitBucket, and Stash preferred.\n• 5 years of progressive experience in enterprise software development using Java, J2EE, Spring, Spring Boot, Spring integration, Oracle, Hibernate, Struts, XML/XSLT/JAXB, SOAP and REST web services preferred.\n• Experience with Azure Cloud, Elastic, Kotlin\n• Experience with Java and related technologies preferred.\n• Experience working with or building applications using Micro services architecture",
    mailAddress: "F-405, Oxy Homez, Sahibabad, Ghaziabad, UP 201005",
  },
];

export const JOB_CATEGORIES = [
  "All Categories",
  "Development",
  "Quality Engineering",
  "DevOps",
];

export const JOB_TYPES = ["All Job Type", "Full Time"];

export const JOB_LOCATIONS = [
  "All Job Location",
  "India, U.S.",
  "U.S., Bangalore, Hyderabad",
];
