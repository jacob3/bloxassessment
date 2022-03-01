export type CoinType = {
    shortName: string;
    longName: string;
    priceChangePercentage: number;
    price: PriceType;
    icon: string;
};

export type PriceType = {
    unit: string;
    amount: number;
};
