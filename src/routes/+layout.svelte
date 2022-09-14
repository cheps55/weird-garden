<script>
    import { MaxGameScreenWidth, MaxGameScreenHeight } from '$lib/config.js';
    import { isStatisticsPopUpOpen } from '$lib/stores.js';
    import Header from '$lib/header/Header.svelte';
    import StatisticsPopUp from '$lib/popUp/StatisticsPopUp.svelte';

    import '../app.css';
    
</script>

<Header />

<main
    style='max-width: {MaxGameScreenWidth + 20}px; min-height: {MaxGameScreenHeight}px'
>
    <slot />
</main>

<footer>
	<p>Created by Cheps at 2022/09</p>
</footer>

{#if $isStatisticsPopUpOpen === true}
    <StatisticsPopUp />
{/if}

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
