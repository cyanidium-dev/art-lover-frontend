 export const sortingOptions = [
     'За рейтингом',
    'За зростанням ціни',
    'За зменшенням ціни',
    'За популярністю',
    'За знижкою',
    'За наявністю',
] as const;

export type Option = typeof sortingOptions[number];