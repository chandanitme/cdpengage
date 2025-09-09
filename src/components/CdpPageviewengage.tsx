
'use client';
import { useEffect } from 'react';
import { engage, loadEngage } from '../engage';
import { JSX } from 'react';

const CdpPageviewengage = (): JSX.Element => {

  /**
   * Determines if the page view events should be turned off.
   * IMPORTANT: You should implement based on your cookie consent management solution of choice.
   * By default it is disabled in development mode
   */
  // Function to load Engage data

  useEffect(() => {
  
   // const scope = process.env.NEXT_PUBLIC_PERSONALIZE_SCOPE;
 

    

    engage?.pageView({
      channel: 'WEB',
      currency: 'USD',
      page: window.location.pathname,
      language: 'en'
    });

    engage?.identity({
      channel: 'WEB',
      currency: 'USD',
      firstName: 'ChandanCDPEngage',
      lastName: 'Kumar',
      email: 'chandan12.engageupdated@gmail.com',
      identifiers: [
        {
          provider: 'Email',
          id: 'chandan.itmeengage@gmail.com"',
        },
      ],
    })
      .catch((e) => console.debug(e));
  }, []);

  return <></>;
};

export default CdpPageviewengage;


