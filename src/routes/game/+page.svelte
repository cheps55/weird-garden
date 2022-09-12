<script>
    import { onDestroy, onMount } from 'svelte';
    import { CreatureSize, CreaturePerRow, TotalPotRow, CreatureRareList, CreatureSpawnRate } from '$lib/config.js';
    import { statistics, isStatisticsPopUpOpen } from '$lib/stores.js';
    
    import Button from '$lib/button/Button.svelte';

    let gardenArray = Array.from({length: CreaturePerRow * TotalPotRow}, (_, i) => ({ i: i, no: 0 }))
    let spawnTimer;
    const spawnInterval = 100;

    const openStatPopUp = () => {
        $isStatisticsPopUpOpen = true;
    }

    const getRandom = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    const spawnCreature = () => {
        let list = gardenArray.filter((item, i) => item.no === 0);
        if (list.length === 0) return;

        let creatureNo = 1;
        let randomPot = getRandom(0, list.length - 1);
        let spawnProb = getRandom(0, 100);
        let rareList = CreatureRareList.Tier0; // 50%
        if (spawnProb > 100 - CreatureSpawnRate.Tier4) rareList = CreatureRareList.Tier4; // 5%
        else if (spawnProb > 100 - CreatureSpawnRate.Tier3) rareList = CreatureRareList.Tier3; // 10%
        else if (spawnProb > 100 - CreatureSpawnRate.Tier2) rareList = CreatureRareList.Tier2; // 15%
        else if (spawnProb > 100 - CreatureSpawnRate.Tier1) rareList = CreatureRareList.Tier1; // 20%

        creatureNo = getRandom(rareList[0], rareList[9]);

        let record = $statistics.find(x => x.no === creatureNo);
        if (record) record.spawn += 1;

        gardenArray[list[randomPot].i].no = creatureNo;
    }

    const collectCreature = (no, i) => {
        // Update pot
        gardenArray[i].no = 0;

        // Update record
        let record = $statistics.find(x => x.no === no);
        if (record) record.collect += 1;
        console.log($statistics)
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
    {#each gardenArray as { no, i }}
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
