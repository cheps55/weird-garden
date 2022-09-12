import { writable } from 'svelte/store';

export const langFlag = writable('en');

// Statistics
export const statistics = writable(
    Array.from({length: 50}, (_, i) => ({
        no: i + 1, spawn: 0, collect: 0
    }))
);
export const isStatisticsPopUpOpen = writable(false);