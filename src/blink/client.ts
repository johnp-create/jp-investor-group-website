import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'jp-investor-website-4h5lpht4',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_M9J-t8MmAKnS379NmqEcHmYm3H29IJYi',
  authRequired: false,
  auth: { mode: 'managed' },
})
