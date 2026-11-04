import { ASSETS } from "@/constants/images.constants";
import type { WhyBusinessesChooseData } from "@/data/about";

export const AI_WHY_CHOOSE_DATA: WhyBusinessesChooseData = {
  heading: "Architecting Modern Enterprise Data Ecosystems.",
  subheading: "",
  cards: [
    {
      id: "data-architecture-modelling",
      number: "01",
      title: "Enterprise Data Architecture & Modelling",
      description:
        "Define scalable information architectures, logical data structures, and governed data foundations aligned with enterprise analytical requirements.",
      icon: ASSETS.DATA_ENG_WHY_ARCHITECTURE,
    },
    {
      id: "etl-elt-pipeline-orchestration",
      number: "02",
      title: "Etl/Elt & Pipeline Orchestration",
      description:
        "Engineer reliable extraction, transformation, validation, and orchestration workflows across heterogeneous enterprise data sources.",
      icon: ASSETS.DATA_ENG_WHY_ETL,
    },
    {
      id: "lakehouse-distributed-data-engineering",
      number: "03",
      title: "Lakehouse & Distributed Data Engineering",
      description:
        "Establish contemporary lakehouse and warehouse architectures using appropriate distributed processing frameworks and cloud data technologies.",
      icon: ASSETS.DATA_ENG_WHY_LAKEHOUSE,
    },
    {
      id: "real-time-streaming-event-processing",
      number: "04",
      title: "Real-Time Streaming & Event Processing",
      description:
        "Design streaming pipelines and event-driven processing capabilities that support timely information availability and operational responsiveness.",
      icon: ASSETS.DATA_ENG_WHY_STREAMING,
    },
    {
      id: "data-governance-quality-observability",
      number: "05",
      title: "Data Governance, Quality & Observability",
      description:
        "Integrate data lineage, quality controls, reconciliation practices, and monitoring to strengthen information integrity across processing environments.",
      icon: ASSETS.DATA_ENG_WHY_GOVERNANCE,
    },
    {
      id: "data-performance-platform-modernization",
      number: "06",
      title: "Data Performance & Platform Modernization",
      description:
        "Optimize processing workloads, architectural efficiency, and platform utilization while enabling the evolution of legacy data environments.",
      icon: ASSETS.DATA_ENG_WHY_PERFORMANCE,
    },
  ],
};

export const aiWhyChooseData = AI_WHY_CHOOSE_DATA;
export const DATA_ENGINEERING_WHY_CHOOSE_DATA = AI_WHY_CHOOSE_DATA;
