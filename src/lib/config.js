// Size
export const CreatureSize = 40;
export const CreaturePerRow = 12;
export const TotalPotRow = 12;
export const MaxGameScreenWidth = CreatureSize * CreaturePerRow;
export const MaxGameScreenHeight = CreatureSize * TotalPotRow;

// Creature Type
export const CreatureRareList = {
    Tier4: Array.from({length: 10}, (_, i) => 41 + i),
    Tier3: Array.from({length: 10}, (_, i) => 31 + i),
    Tier2: Array.from({length: 10}, (_, i) => 21 + i),
    Tier1: Array.from({length: 10}, (_, i) => 11 + i),
    Tier0: Array.from({length: 10}, (_, i) => 1 + i),
}