import { useEffect, useState } from "react";
import {
  CANONICAL_PHONE,
  CANONICAL_PHONE_LOCAL,
  CANONICAL_PHONE_TEL,
  PHONE_DISPLAY_ENABLED,
  PHONE_TRACKING_ENABLED,
  TRACKING_PHONE_LOCAL,
  TRACKING_PHONE_TEL,
  formatTrackingPhoneDisplay,
} from "@/utils/phoneTracking";

export const usePhoneTracking = () => {
  const [telHref, setTelHref] = useState(`tel:${CANONICAL_PHONE_TEL}`);
  const [displayPhone, setDisplayPhone] = useState(CANONICAL_PHONE);
  const [displayPhoneLocal, setDisplayPhoneLocal] = useState(CANONICAL_PHONE_LOCAL);

  useEffect(() => {
    if (!PHONE_TRACKING_ENABLED || typeof window === "undefined") return;
    setTelHref(`tel:${TRACKING_PHONE_TEL}`);
    setDisplayPhone(formatTrackingPhoneDisplay());
    setDisplayPhoneLocal(TRACKING_PHONE_LOCAL);
  }, []);

  return { telHref, displayPhone, displayPhoneLocal, phoneEnabled: PHONE_DISPLAY_ENABLED };
};
