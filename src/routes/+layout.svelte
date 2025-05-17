<script lang="ts">
	import '../app.css'
	import Header from '$components/header.svelte'
	import Footer from '$components/footer.svelte'

	interface Props {
		children?: any
	}

	let { children }: Props = $props()
</script>

<div class="container">
	<Header />
	<main>
		{@render children?.()}
	</main>

	<Footer />
</div>

<style>
	main {
		flex: 1;
	}
	:global(body) {
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			'Noto Sans',
			sans-serif,
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji';
		padding: 0 1rem 0rem 1rem;
		max-width: 768px;
		margin: 0 auto;
		background: #fff;
		color: #333;
	}
	:global(li),
	:global(p) {
		line-height: 1.5rem;
	}
	:global(a) {
		font-weight: 500;
	}
	:global(hr) {
		border: 1px solid #ddd;
	}
	:global(iframe) {
		background: #ccc;
		border: 1px solid #ccc;
		height: 10rem;
		width: 100%;
		border-radius: 0.5rem;
		filter: invert(1);
	}
	.container {
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: stretch;
	}
</style>
