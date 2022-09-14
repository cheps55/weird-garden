<script>
    import langMap from '$lib/language/langMap.json';
    import { langFlag, statistics, isStatisticsPopUpOpen } from '$lib/stores.js'; 
    import { CreatureSpawnRate } from '$lib/config.js';
    import PopUpModel from './PopUpModel.svelte';

    const onClose = () => $isStatisticsPopUpOpen = false;

    let tierList = {
        Tier4: { spawn: 0, collect: 0 },
        Tier3: { spawn: 0, collect: 0 },
        Tier2: { spawn: 0, collect: 0 },
        Tier1: { spawn: 0, collect: 0 },
        Tier0: { spawn: 0, collect: 0 },
    }
    let totalSpawn = 0;

    $: Object.values($statistics).forEach((item) => {
        let tierStat = tierList.Tier0;
        if (item.no > 40) tierStat = tierList.Tier4;
        else if (item.no > 30) tierStat = tierList.Tier3;
        else if (item.no > 20) tierStat = tierList.Tier2;
        else if (item.no > 10) tierStat = tierList.Tier1;
        
        totalSpawn += item.spawn;
        tierStat.spawn += item.spawn;
        tierStat.collect += item.collect;
    })

    
</script>

<PopUpModel 
    isOpen={$isStatisticsPopUpOpen} onClose={onClose}
    isFullScreen={false}
>
    <h2>{langMap['MainMenu.statistics']?.[$langFlag]}</h2>
    <div class=statList>
        <div></div>
        <div>{langMap['MainMenu.statistics.spawn']?.[$langFlag]} %</div>
        <div>{langMap['MainMenu.statistics.spawn']?.[$langFlag]}</div>
        <div>{langMap['MainMenu.statistics.collect']?.[$langFlag]}</div>
        {#each Object.keys(tierList) as key}
            {#if key !== 'record'}
                <div>{key}: </div>
                <div>{CreatureSpawnRate[key]} ({Math.round(tierList[key].spawn / totalSpawn * 100)})</div>
                <div>{tierList[key].spawn}</div>
                <div>{tierList[key].collect}</div>
            {/if}
        {/each}
    </div>
   
</PopUpModel>


<style>
    h2 {
        text-align: center;
        margin-top: 0px;
    }

    .statList {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .statList > div {
        text-align: center;
    }
</style>