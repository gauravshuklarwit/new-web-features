// extend JSX attributes to allow custom data-* style props
// This file is automatically included by TypeScript thanks to the "include" pattern
// in tsconfig.json (usually includes "src/**/*").

import * as React from 'react';

// provide global augmentations for React props so custom attributes are allowed

declare module 'react' {
  interface HTMLAttributes<T> {
    popover?: string;
    popoverTarget?: string;
    interestfor?: string;
    commandfor?: string;
    command?: string;
    // allow data-* props too
    [key: `data-${string}`]: any;
    // optionally permit any other custom attribute without TypeScript errors
    [key: string]: any;
  }
  // ButtonHTMLAttributes already inherits from HTMLAttributes, so the above covers buttons too
}
