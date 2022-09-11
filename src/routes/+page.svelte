<script>
    import { page } from '$app/stores';

    import { isStatisticsPopUpOpen } from '$lib/stores.js';
    import Navigate from '$lib/navigate/Navigate.svelte';
    
</script>

<svelte:head>
	<title>Weird Garden</title>
	<meta name="description" content="Game that grow weird stuff" />
</svelte:head>

<section>
    <Navigate title='MainMenu.start_game' href='/game' />
    <Navigate title='MainMenu.statistics' on:click={() => $isStatisticsPopUpOpen = true} />
    <!-- <Navigate title='MainMenu.import_pokedex' />
    <Navigate title='MainMenu.view_pokedex' /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
