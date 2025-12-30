import type { Config } from '@react-router/dev/config';
import { env } from 'process';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  ...(env.APP_HTTP_BASE
    ? {
      basename: env.APP_HTTP_BASE,
    }
    : {}
  )
} satisfies Config;
