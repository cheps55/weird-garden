import { writable } from 'svelte/store';

export const langFlag = writable('en');

// Statistics
export const statistics = writable({
    Tier4:{spawn: 0, collect: 0},
    Tier3:{spawn: 0, collect: 0},
    Tier2:{spawn: 0, collect: 0},
    Tier1:{spawn: 0, collect: 0},
    Tier0:{spawn: 0, collect: 0},
});
export const isStatisticsPopUpOpen = writable(false);