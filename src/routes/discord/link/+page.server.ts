// Redirect url
const REDIRECT_URL: string = 'https://discord.com/servers/kazchat-785577600219086881' 

// Redirect with 304
import { redirect } from "@sveltejs/kit"


export async function load() {
	throw redirect(302, REDIRECT_URL)	
}