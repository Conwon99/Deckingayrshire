import { business } from "@/data/business";

/** False when no real phone number has been published yet (pre-launch, form-only site). */
export const PHONE_DISPLAY_ENABLED = business.phone.trim().length > 0;

export const CANONICAL_PHONE = business.phone;
export const CANONICAL_PHONE_TEL = business.phone.replace(/\s/g, "");
export const CANONICAL_PHONE_LOCAL = business.phoneLocal;

export const TRACKING_PHONE = business.trackingPhone ?? business.phone;
export const TRACKING_PHONE_TEL = (business.trackingPhone ?? business.phone).replace(/\s/g, "");
export const TRACKING_PHONE_LOCAL = business.trackingPhoneLocal ?? business.phoneLocal;

export const PHONE_TRACKING_ENABLED = PHONE_DISPLAY_ENABLED && business.trackingPhone !== null;

export const formatPhoneDisplay = (phone: string): string => {
  if (phone.startsWith("+44")) {
    const cleaned = phone.replace("+44", "").replace(/\s/g, "");
    if (cleaned.length === 10) {
      return `+44 ${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
    }
    return `+44 ${cleaned}`;
  }
  return phone;
};

export const formatTrackingPhoneDisplay = (): string => formatPhoneDisplay(TRACKING_PHONE);
