<script>
    import { fade } from 'svelte/transition';
    
    export let isOpen = false;
    export let isFullScreen = true;
    // top left section of top bar
    export let topLeft = '';

    // action taken when close button on click
    export let onClose;
    // If not full screen, close pop up when click outside area
    export let onOuterClose = true;

    // Animation when open and close
    export let openAnimation = fade;
    export let closeAnimation = fade;

    export let onCloseIntercept = (e) => {
        if ((!onOuterClose && e.target !== wrapper) && e.target !== closeBtn) return;
        if (typeof onClose === 'function') onClose();
    }

    let wrapper;
    let closeBtn;
</script>

{#if isOpen === true}
    <div 
        class={isFullScreen ? 'fullScreenWrapper' : 'wrapper'}
        on:click={onOuterClose ? onCloseIntercept : null}
        in:openAnimation out:closeAnimation
        bind:this={wrapper}
    >
        <div class='container'>
            <div class='topBar'>
                <div>{topLeft}</div>
                <div class='close' on:click={onCloseIntercept} bind:this={closeBtn}>
                    <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83865 5.83865C6.3758 5.30166 7.10423 5 7.86376 5C8.62329 5 9.35172 5.30166 9.88887 5.83865L20.0173 15.9671L30.1457 5.83865C30.6859 5.31688 31.4095 5.02817 32.1605 5.03469C32.9115 5.04122 33.63 5.34246 34.161 5.87354C34.6921 6.40462 34.9934 7.12304 34.9999 7.87407C35.0064 8.6251 34.7177 9.34865 34.1959 9.88887L24.0675 20.0173L34.1959 30.1457C34.7177 30.6859 35.0064 31.4095 34.9999 32.1605C34.9934 32.9115 34.6921 33.63 34.161 34.161C33.63 34.6921 32.9115 34.9934 32.1605 34.9999C31.4095 35.0064 30.6859 34.7177 30.1457 34.1959L20.0173 24.0675L9.88887 34.1959C9.34865 34.7177 8.6251 35.0064 7.87407 34.9999C7.12304 34.9934 6.40462 34.6921 5.87354 34.161C5.34246 33.63 5.04122 32.9115 5.03469 32.1605C5.02817 31.4095 5.31688 30.6859 5.83865 30.1457L15.9671 20.0173L5.83865 9.88887C5.30166 9.35172 5 8.62329 5 7.86376C5 7.10423 5.30166 6.3758 5.83865 5.83865V5.83865Z" fill="currentColor"/>
                    </svg> 
                </div>
            </div>
            <div class='content'>
                <slot />
            </div>
        </div>
    </div>
{/if}

<style>
    .fullScreenWrapper {
        position: absolute;
        top: 0;
        left: 0;
        heighT: 100vh;
        width: 100vw;
    }
    .fullScreenWrapper > .container {
        width: inherit;
        heighT: inherit;
    }

    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        heighT: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        background: var(--main-background);
        min-width: 300px;
    }

    .topBar {
        display: flex;
        justify-content: space-between;
    }

    .close {
        width: 40px;
        cursor: pointer;
    }
    .close:hover {
        color: red;
    }
    .close > svg {
        pointer-events: none
    }

    .content {
        padding: 14px;
    }
</style>