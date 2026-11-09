import Script from "next/script";
import { lpwaConfig } from "../config";
import { PixelRouteTracker } from "./PixelRouteTracker";

// IDs are validated before being written into inline scripts.
const PIXEL_RE = /^\d{8,20}$/;
const GA4_RE = /^G-[A-Z0-9]{4,16}$/;
const GTM_RE = /^GTM-[A-Z0-9]{4,12}$/;

function valid(id: string, pattern: RegExp, name: string): string {
  if (!id) return "";
  if (pattern.test(id)) return id;
  console.warn(`[ppdb] Ignoring invalid ${name}: "${id}"`);
  return "";
}

/**
 * Loads Meta Pixel / GA4 / GTM only when their IDs are configured.
 * If Kalyca's site already loads GA4 or the Pixel globally (it currently loads
 * GA4), leave that ID empty here to avoid double page views — the CTA events
 * in lib/tracking.ts use whatever `fbq` / `gtag` / `dataLayer` is on the page.
 */
export function TrackingScripts() {
  const pixelId = valid(lpwaConfig.tracking.metaPixelId, PIXEL_RE, "Meta Pixel ID");
  const ga4Id = valid(lpwaConfig.tracking.ga4Id, GA4_RE, "GA4 ID");
  const gtmId = valid(lpwaConfig.tracking.gtmId, GTM_RE, "GTM ID");

  return (
    <>
      {gtmId ? (
        <>
          <Script id="ppdb-gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              title="Google Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      ) : null}

      {ga4Id ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
          <Script id="ppdb-ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('js',new Date());gtag('config','${ga4Id}');`}
          </Script>
        </>
      ) : null}

      {pixelId ? (
        <>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          />
        </noscript>
        <PixelRouteTracker />
        <Script id="ppdb-meta-pixel" strategy="afterInteractive">
          {`if(!window.__ppdbPixel){window.__ppdbPixel=1;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');}`}
        </Script>
        </>
      ) : null}
    </>
  );
}
