<script>
    import langMap from '$lib/language/langMap.json';
    import { langFlag } from '$lib/stores.js'; 

    export let title = '';
</script>

<button class="button"
    on:click
>
    {langMap[title]?.[$langFlag] ?? title}
</button>

<style>
    .button {
        border: 1px solid black;
        border-radius: 15px;
        padding: 7px;
        background: none;
        cursor: pointer;
    }
    .button:hover {
        animation: 10s hover infinite;
    }
    @keyframes hover {
        from {
            background: red;
        }
        to {
            background: blue;
        }
    }
</style>