'use client';
import { init, Engage } from '@sitecore/engage';

// Define an interface for the configuration object
interface InitConfig {
  clientKey: string;
  targetURL: string;
  pointOfSale: string;
  cookieDomain: string;
  cookieExpiryDays: number;
  forceServerCookieMode: boolean;
  includeUTMParameters: boolean;
  webPersonalization: boolean | object;
}

let engage: Engage | undefined;

const loadEngage = async (): Promise<void> => {
  const config: InitConfig = {
    clientKey: process.env.NEXT_PUBLIC_CDP_CLIENT_KEY || '',
    targetURL: process.env.NEXT_PUBLIC_CDP_TARGET_URL || '',
    pointOfSale: process.env.NEXT_PUBLIC_CDP_POINTOFSALE || '',
    cookieDomain: window.location.hostname.replace(/^www\./, ''),
    cookieExpiryDays: 365,
    forceServerCookieMode: false,
    includeUTMParameters: true,
    webPersonalization: true,
  };

  engage = await init(config);

  // Assuming `window.Engage` is an existing property or you have extended the Window interface to include it
  (window as any).Engage.exposedFunctions = engage;
};

loadEngage();

export { engage, loadEngage };
