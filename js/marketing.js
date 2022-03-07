const MarketAnalytics = function ({
    productMarket,
    geography,
    competition,
    averagePrice,
    quantitySKU,
} = {}) {
        const categories = {
            cosmetics: { faceCare: 2, hairCare: 2.3, mouthCare: 1.8, makeUp: 1.7, bodyCare: 2.2 },
            cloth: 1.7,
            glass: 1.6,
            furniture: 3,
            lights: 2.8,
            supplement: { foodSupplement: 1.8, vitamins: 2.6 },
        };

        const getMarketMultiplierByCategory = (categories, productMarket) => {
            return categories.find((category) => Object.values(category) === productMarket);
        };
        console.log(getMarketMultiplierByCategory(categories, faceCare));
            
        const locations = {
            USA: 5,
            DE: 2.5,
            FR: 3,
            UK: 3.3,
            IT: 2.8,
            ES: 2.9,
        };

        const getMarketMultiplierByLocation = (locations, geography) => {
                return locations.find((location) => Object.values(location) === geography);
        }
    
        const 
    // this.marketingBudget =
    // this.profitabilityTiming =     
} 
