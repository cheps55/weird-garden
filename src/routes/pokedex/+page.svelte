<script>
    import langMap from '$lib/language/langMap.json';
    import { langFlag, statistics } from '$lib/stores.js'; 
    import { CreatureSize } from '$lib/config.js';

</script>

<h1>{langMap['MainMenu.view_pokedex']?.[$langFlag]}</h1>

<div 
    class='grid'
    style='grid-template-columns: repeat(5, minmax({CreatureSize}px, 1fr));'
>
    {#each $statistics as { no, spawn, collect }}
        <div class='column'>
            <span class='index'>No:{no}</span>
            {#if collect > 0}
                <img src={`creature/${no}.svg`} alt='' on:click={() => {}} />
            {:else}
                <div style='min-height: {CreatureSize}px; aspect-ratio: 1/1; background: rgba(0,0,0,0.3);' />
            {/if}
            
            <span class='data'>{collect} ({spawn})</span>
        </div>
    {/each}
</div>

<style>
    h1 {
        margin-top: 0;
        text-align: center;
    }

	.grid {
        display: grid;
        justify-content: center;
        overflow-y: scroll;
        height: 500px;
    }

    .column {
        display: flex;
        flex-direction: column;
        padding: 7px;
    }

    .index {
        text-align: center;
        text-decoration: underline;
    }

    .data {
        padding-top: 7px;
        text-align: center;
    }
</style>
