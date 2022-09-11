<script>
    import { onDestroy, onMount } from 'svelte';
    import { CreatureSize, CreaturePerRow, TotalPotRow, CreatureRareList } from '$lib/config.js';
    import { statistics, isStatisticsPopUpOpen } from '$lib/stores.js';
    
    import Button from '$lib/button/Button.svelte';

    let array = Array.from({length: CreaturePerRow * TotalPotRow}, (_, i) => ({ i: i, no: 0 }))
    let spawnTimer;
    const spawnInterval = 5000;

    const openStatPopUp = () => {
        $isStatisticsPopUpOpen = true;
    }

    const getRandom = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    const spawnCreature = () => {
        let list = array.filter((item, i) => item.no === 0);
        if (list.length === 0) return;

        let creatureNo = 1;
        let randomPot = getRandom(0, list.length - 1);
        let spawnProb = getRandom(0, 100);
        let rareList = CreatureRareList.Tier0;

        if (spawnProb > 95) { // 5%
            rareList = CreatureRareList.Tier4;
            $statistics.Tier4.spawn += 1;
        } else if (spawnProb > 85) { // 10%
            rareList = CreatureRareList.Tier3;
            $statistics.Tier3.spawn += 1;
        } else if (spawnProb > 70) { // 15%
            rareList = CreatureRareList.Tier2;
            $statistics.Tier2.spawn += 1;
        } else if (spawnProb > 50) { // 20%
            rareList = CreatureRareList.Tier1;
            $statistics.Tier1.spawn += 1;
        } else {
            $statistics.Tier0.spawn += 1;
        }

        creatureNo = getRandom(rareList[0], rareList[9]);
        array[list[randomPot].i].no = creatureNo;
    }

    const collectCreature = (no, i) => {
        console.log(no, i)
    }

    onMount(() => {
        spawnTimer = setInterval(() => {
            spawnCreature()
        }, spawnInterval);
    })
    
    onDestroy(() => {
        clearInterval(spawnTimer);
    })
</script>

<Button title='MainMenu.statistics' on:click={openStatPopUp} />

<div 
    class='potContainer'
    style='grid-template-columns: repeat({CreaturePerRow}, minmax({CreatureSize}px, 1fr));'
>
    {#each array as { no }, i}
        {#if no > 0}
            <img src={`creature/${no}.svg`} alt='' on:click={() => collectCreature(no, i)} />
        {:else}
            <div style='height: {CreatureSize}px' />
        {/if}
    {/each}
</div>

<style>
	.potContainer {
        display: grid;
        justify-content: center;
    }
</style>
