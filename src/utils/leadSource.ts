// Captures where a visitor first landed and what referred them, so contact
// form submissions can be traced back to a page and traffic source (e.g. a
// ChatGPT citation link, Google search, or a tagged campaign URL).

const STORAGE_KEY = "als_lead_source";

type StoredLeadSource = {
  landingPage: string;
  landingReferrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

const readStored = (): StoredLeadSource | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredLeadSource) : null;
  } catch {
    return null;
  }
};

/**
 * Records the first-touch landing page, referrer and UTM params for this
 * browser session. Safe to call on every page load — only writes once per
 * session so later internal navigation doesn't overwrite the original entry.
 */
export const captureLeadSource = (): void => {
  try {
    if (readStored()) return;

    const params = new URLSearchParams(window.location.search);
    const data: StoredLeadSource = {
      landingPage: window.location.pathname,
      landingReferrer: document.referrer || "",
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable (e.g. private browsing) — nothing to do.
  }
};

/**
 * Returns the captured first-touch data plus the page the form is being
 * submitted from, ready to append to a FormData submission. Always returns
 * a complete object with empty-string fallbacks so the caller never has to
 * check for missing data.
 */
export const getLeadSourceFields = (): Record<string, string> => {
  const stored = readStored();

  return {
    landingPage: stored?.landingPage || "",
    landingReferrer: stored?.landingReferrer || "",
    utmSource: stored?.utmSource || "",
    utmMedium: stored?.utmMedium || "",
    utmCampaign: stored?.utmCampaign || "",
    submittedFromPage: window.location.pathname,
  };
};
