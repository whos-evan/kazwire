// Redirect url
const REDIRECT_URL: string = 'https://discord.gg/FEkFSWRFM9' 

// Redirect with 304
import { redirect } from "@sveltejs/kit"


export async function load() {
	throw redirect(302, REDIRECT_URL)	
}