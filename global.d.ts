declare module '@ahaui/react';
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.png';

declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'html-to-react';

declare module 'subscribe-event';
