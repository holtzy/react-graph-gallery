export const dataBarplot = [
    { name: "Mark", value: 90 },
    { name: "Robert", value: 12 },
    { name: "Emily", value: 34 },
    { name: "Marion", value: 53 },

]

export const groups = ["Mark", "Robert", "Emily", "Marion"] as const;
export type Group = typeof groups[number];

export type DataItem = {
    x: number;
} & Record<Group, number>;


export const dataStreamgraph: DataItem[] = [
    {
        x: 1,
        Mark: 38,
        Robert: 19,
        Emily: 9,
        Marion: 4,
    },
    {
        x: 2,
        Mark: 16,
        Robert: 14,
        Emily: 96,
        Marion: 40,
    },
    {
        x: 3,
        Mark: 164,
        Robert: 96,
        Emily: 64,
        Marion: 40,
    },
    {
        x: 4,
        Mark: 32,
        Robert: 65,
        Emily: 64,
        Marion: 40,
    },
    {
        x: 5,
        Mark: 12,
        Robert: 80,
        Emily: 14,
        Marion: 10,
    },
    {
        x: 6,
        Mark: 12,
        Robert: 180,
        Emily: 14,
        Marion: 10,
    },
    {
        x: 7,
        Mark: 12,
        Robert: 70,
        Emily: 14,
        Marion: 10,
    },
    {
        x: 8,
        Mark: 12,
        Robert: 30,
        Emily: 24,
        Marion: 10,
    },
    {
        x: 9,
        Mark: 190,
        Robert: 18,
        Emily: 34,
        Marion: 10,
    },
    {
        x: 10,
        Mark: 10,
        Robert: 18,
        Emily: 4,
        Marion: 10,
    },
];
