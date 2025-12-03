// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = {
			email: string;
			email_verified: boolean;
			display_name: string;
			role: string;

			// custom attributes
			loved_games: string[];
			played_games: string[];
			loved_apps: string[];
			played_apps: string[];
		};
		type DatabaseSessionAttributes = {};
	}
}

export {};
