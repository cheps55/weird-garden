<script>
    import langMap from '$lib/language/langMap.json';
    import { langFlag, statistics, isStatisticsPopUpOpen } from '$lib/stores.js'; 

    import PopUpModel from './PopUpModel.svelte';

    console.log($statistics)
    const onClose = () => $isStatisticsPopUpOpen = false;
</script>

<PopUpModel 
    isOpen={$isStatisticsPopUpOpen} onClose={onClose}
    isFullScreen={false}
>
    <h2>{langMap['MainMenu.statistics']?.[$langFlag]}</h2>
    <div class=statList>
        <div></div>
        <div>{langMap['MainMenu.statistics.spawn']?.[$langFlag]}</div>
        <div>{langMap['MainMenu.statistics.collect']?.[$langFlag]}</div>
        {#each Object.keys($statistics) as key}
            <div>{key}: </div>
            <div>{$statistics[key].spawn}</div>
            <div>{$statistics[key].collect}</div>
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
        grid-template-columns: 1fr 1fr 1fr;
    }
    .statList > div {
        text-align: center;
    }
</style>