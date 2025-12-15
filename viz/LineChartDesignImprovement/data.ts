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
    "Set / Respect Boundar.": {
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
    "Seek Therapy": {
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
        "2011": 2,
        "2012": 3.5,
        "2013": 2,
        "2014": 3,
        "2015": 3.5,
        "2016": 3,
        "2017": 4,
        "2018": 4,
        "2019": 3,
        "2020": 2,
        "2021": 2,
        "2022": 3,
        "2023": 3,
        "2024": 4,
        "2025": 5
    }
}

// Tiny deterministic RNG
function mulberry32(seed: number) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

export function addQuarterlyNoise(
    data: MultiSeries,
    noiseAmount = 1,
    seed = 1
): MultiSeries {
    const rand = mulberry32(seed);
    const newData: MultiSeries = {};

    for (const seriesName in data) {
        const series = data[seriesName];
        const points: [number, number][] = [];

        for (const yearStr in series) {
            const year = parseFloat(yearStr);
            const value = series[yearStr];

            points.push([year, value]);

            if (yearStr.includes('.')) continue;

            // Add quarters
            for (let q = 0.25; q < 1; q += 0.25) {
                const quarterYear = year + q;
                const noisyValue =
                    value + (rand() * noiseAmount * 2 - noiseAmount);
                points.push([
                    parseFloat(quarterYear.toFixed(2)),
                    parseFloat(noisyValue.toFixed(2)),
                ]);
            }
        }

        // Sort
        points.sort((a, b) => a[0] - b[0]);

        // Build object
        const obj: Record<string, number> = {};
        for (const [year, value] of points) {
            obj[year.toFixed(2)] = value;
        }

        newData[seriesName] = obj;
    }

    return newData;
}
