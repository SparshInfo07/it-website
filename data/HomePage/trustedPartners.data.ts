import { ASSETS } from "@/constants/images.constants";

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  heightClass?: string;
}

export interface TrustedPartnersData {
  title: string;
  partners: PartnerItem[];
}

export const HOMEPAGE_TRUSTED_PARTNERS_DATA: TrustedPartnersData = {
  title: "Technology Partners",
  partners: [
    { id: "asana", name: "Asana", logo: ASSETS.TRUSTED_PARTNER_ASANA },
    { id: "aws", name: "AWS", logo: ASSETS.TRUSTED_PARTNER_AWS },
    { id: "datarobot", name: "DataRobot", logo: ASSETS.TRUSTED_PARTNER_DATAROBOT },
    { id: "terraform", name: "HashiCorp Terraform", logo: ASSETS.TRUSTED_PARTNER_TERRAFORM },
    { id: "opencv", name: "OpenCV", logo: ASSETS.TRUSTED_PARTNER_OPENCV },
    { id: "slack", name: "Slack", logo: ASSETS.TRUSTED_PARTNER_SLACK },
    { id: "stripe", name: "Stripe", logo: ASSETS.TRUSTED_PARTNER_STRIPE },
    { id: "wrike", name: "Wrike", logo: ASSETS.TRUSTED_PARTNER_WRIKE },
  ],
};

export const TRUSTED_PARTNERS_DATA = HOMEPAGE_TRUSTED_PARTNERS_DATA;
export const trustedPartnersData = HOMEPAGE_TRUSTED_PARTNERS_DATA;
