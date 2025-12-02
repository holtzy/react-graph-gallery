export type MultiSeries = Record<string, Record<string, number>>;

export type Series = {
    name: string;
    values: { x: number; y: number }[];
};

export const data = {
    "End Relationship": {
        "2010": 31,
        "2011": 33,
        "2012": 34,
        "2013": 32,
        "2014": 35,
        "2015": 37,
        "2016": 39,
        "2017": 41,
        "2018": 40,
        "2019": 38,
        "2020": 39,
        "2021": 40,
        "2022": 42,
        "2023": 46,
        "2024": 49,
        "2025": 50
    },
    "Communicate": {
        "2010": 25,
        "2011": 24,
        "2012": 23,
        "2013": 22,
        "2014": 21,
        "2015": 21,
        "2016": 20,
        "2017": 19,
        "2018": 19,
        "2019": 18,
        "2020": 18,
        "2021": 17,
        "2022": 16,
        "2023": 15,
        "2024": 14,
        "2025": 13
    },
    "Give Space / Time": {
        "2010": 19,
        "2011": 18,
        "2012": 18,
        "2013": 17,
        "2014": 17,
        "2015": 17,
        "2016": 16,
        "2017": 16,
        "2018": 15,
        "2019": 15,
        "2020": 15,
        "2021": 15,
        "2022": 14,
        "2023": 13,
        "2024": 12,
        "2025": 11
    },
    "Set / Respect Boundaries": {
        "2010": 12,
        "2011": 12,
        "2012": 11,
        "2013": 11,
        "2014": 12,
        "2015": 12,
        "2016": 12,
        "2017": 12,
        "2018": 12,
        "2019": 13,
        "2020": 13,
        "2021": 13,
        "2022": 14,
        "2023": 14,
        "2024": 15,
        "2025": 15
    },
    "Seek Therapy / Counselling": {
        "2010": 6,
        "2011": 6,
        "2012": 6,
        "2013": 7,
        "2014": 7,
        "2015": 7,
        "2016": 8,
        "2017": 8,
        "2018": 9,
        "2019": 9,
        "2020": 10,
        "2021": 10,
        "2022": 10,
        "2023": 11,
        "2024": 11,
        "2025": 11
    },
    "Compromise": {
        "2010": 7,
        "2011": 7,
        "2012": 7,
        "2013": 6,
        "2014": 6,
        "2015": 6,
        "2016": 6,
        "2017": 6,
        "2018": 6,
        "2019": 5,
        "2020": 5,
        "2021": 5,
        "2022": 4,
        "2023": 4,
        "2024": 4,
        "2025": 4
    },
    "Other": {
        "2010": 3,
        "2010.25": 3,
        "2010.5": 3,
        "2010.75": 3,

        "2011": 3,
        "2011.25": 3,
        "2011.5": 3,
        "2011.75": 3,

        "2012": 3,
        "2012.25": 3,
        "2012.5": 3,
        "2012.75": 3,

        "2013": 3,
        "2013.25": 3,
        "2013.5": 3,
        "2013.75": 3,

        "2014": 3,
        "2014.25": 3,
        "2014.5": 3,
        "2014.75": 3,

        "2015": 3,
        "2015.25": 3,
        "2015.5": 3,
        "2015.75": 3,

        "2016": 3,
        "2016.25": 3,
        "2016.5": 3,
        "2016.75": 3,

        "2017": 3,
        "2017.25": 3,
        "2017.5": 3,
        "2017.75": 3,

        "2018": 3,
        "2018.25": 3,
        "2018.5": 3,
        "2018.75": 3,

        "2019": 3,
        "2019.25": 3,
        "2019.5": 3,
        "2019.75": 3,

        "2020": 3,
        "2020.25": 3,
        "2020.5": 3,
        "2020.75": 3,

        "2021": 3,
        "2021.25": 3,
        "2021.5": 3,
        "2021.75": 3,

        "2022": 3,
        "2022.25": 3,
        "2022.5": 3,
        "2022.75": 3,

        "2023": 3,
        "2023.25": 3,
        "2023.5": 3,
        "2023.75": 3,

        "2024": 3,
        "2024.25": 3,
        "2024.5": 3,
        "2024.75": 3,

        "2025": 3
    }

}

export function addQuarterlyNoise(data: MultiSeries, noiseAmount = 1): MultiSeries {
    const newData: MultiSeries = {};

    for (const seriesName in data) {
        const series = data[seriesName];
        const newSeries: Record<string, number> = {};

        // Collect all points first
        const points: [number, number][] = [];

        for (const yearStr in series) {
            const year = parseFloat(yearStr);
            const value = series[yearStr];

            points.push([year, value]);

            // Skip fractional years if they already exist
            if (yearStr.includes('.')) continue;

            // Add quarters
            for (let q = 0.25; q < 1; q += 0.25) {
                const quarterYear = year + q;
                const noisyValue = value + (Math.random() * noiseAmount * 2 - noiseAmount);
                points.push([parseFloat(quarterYear.toFixed(2)), parseFloat(noisyValue.toFixed(2))]);
            }
        }

        // Sort by year
        points.sort((a, b) => a[0] - b[0]);

        // Build newSeries object
        for (const [year, value] of points) {
            newSeries[year.toFixed(2)] = value;
        }

        newData[seriesName] = newSeries;
    }

    return newData
}
