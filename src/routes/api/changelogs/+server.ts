import { json } from '@sveltejs/kit'
import type { Changelog } from '$lib/types'

async function getChangelogs() {
	let changelogs: Changelog[] = []

	const paths = import.meta.glob('/src/changelogs/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Changelog, 'slug'>
			const changelog = { ...metadata, slug } satisfies Changelog
			changelog.published && changelogs.push(changelog)
		}
	}

	changelogs = changelogs.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return changelogs
}

export async function GET() {
	const changelogs = await getChangelogs()
	return json(changelogs)
}
