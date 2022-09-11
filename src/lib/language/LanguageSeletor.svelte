<script>
    import { langFlag } from '$lib/stores.js';

    let supportLang = [
        { key: 'en', name: 'EN' },
        { key: 'cht', name: '繁' }, 
    ];

    const switchLang = (e) => {
        langFlag.set(e.target.value);
    }
</script>

<div 
    class='container-selector'
    style='grid-template-columns: repeat({supportLang.length}, 1fr)'
>
    {#each supportLang as { key, name }}
        <button 
            class='selector'
            class:selected="{$langFlag === key}"
            on:click={switchLang} value={key}
        >
            {name}
        </button>
    {/each}
</div>

<style>
    .container-selector {
        display: grid;
    }

    .selected {
        font-weight: bold;
    }

    .selector {
        outline: none;
        background: none;
        border: none;
        cursor: pointer;
    }
    .selector:hover {
        background: grey;
    }
</style>