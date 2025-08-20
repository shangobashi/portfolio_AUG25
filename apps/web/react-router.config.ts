import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: false, // Build as a client-side rendered app for static hosting
	prerender: false, // Disable prerendering for static build
} satisfies Config;
