import { SvelteKitAuth } from '@auth/sveltekit'
import Discord from '@auth/sveltekit/providers/discord'
import { env } from '$env/dynamic/private'
import NeonAdapter from '@auth/neon-adapter'
import { Pool } from '@neondatabase/serverless'

export const { handle, signIn, signOut } = SvelteKitAuth(() => {
	// Create a `Pool` inside the request handler.
	const pool = new Pool({ connectionString: env.DATABASE_URL })
	return {
		adapter: NeonAdapter(pool),
		providers: [Discord],
	}
})
