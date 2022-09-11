<script>
    import { page } from '$app/stores';

    import langMap from '$lib/language/langMap.json';
    import { langFlag } from '$lib/stores.js'; 
    
    import LanguageSeletor from '$lib/language/LanguageSeletor.svelte';
</script>

<header>
    <div>
        {#if $page.url.pathname === '/'}
            <div>{langMap['Game.name'][$langFlag]}</div>
        {:else}
            <a class='backBtn' href='/'>
                <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20ZM3.20179 20C3.20179 29.2774 10.7226 36.7982 20 36.7982C29.2774 36.7982 36.7982 29.2774 36.7982 20C36.7982 10.7226 29.2774 3.20179 20 3.20179C10.7226 3.20179 3.20179 10.7226 3.20179 20Z" fill="currentColor"/>
                    <path d="M7.98095 18.981C7.41815 19.5438 7.41815 20.4562 7.98095 21.019L17.1524 30.1905C17.7152 30.7533 18.6277 30.7533 19.1905 30.1905C19.7533 29.6277 19.7533 28.7152 19.1905 28.1524L11.0381 20L19.1905 11.8476C19.7533 11.2848 19.7533 10.3723 19.1905 9.80951C18.6277 9.2467 17.7152 9.2467 17.1524 9.80951L7.98095 18.981ZM33 18.5588L9 18.5588V21.4412L33 21.4412V18.5588Z" fill="currentColor"/>
                </svg>                    
            </a>
        {/if}
    </div>

	<div class="corner">
        {#if $page.url.pathname === '/'}
            <LanguageSeletor />
        {/if}
	</div>
</header>

<style>
	header {
		display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 14px;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	div {
		display: flex;
		justify-content: center;
    }
    
    .backBtn {
        width: 40px;
        color: black;
        cursor: pointer;
    }
    .backBtn:hover {
        color: red;
    }
</style>
