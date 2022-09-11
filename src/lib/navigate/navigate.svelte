<script>
    import langMap from '$lib/language/langMap.json';
    import { langFlag } from '$lib/stores.js'; 

    export let href = '';
    export let title = '';
</script>

<a on:click {href}>
    {langMap[title]?.[$langFlag] ?? title}
</a>

<style>
    a {
        border: 1px solid black;
        border-radius: 15px;
        padding: 7px;
        background: none;
        cursor: pointer;
    }
    a:link {
        color:black;
        text-decoration:none;
    }
    a:visited {
        color:black;
        text-decoration:none;
    }
    a:active {
        color:black;
        text-decoration:none;
    }
    a:hover {
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