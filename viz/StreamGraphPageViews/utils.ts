// TODO: improve types here
// Shoudl probably create a generic to have `group` having be union of specific strings

// Note to self: Perhaps I should use the tidy.js library?
// https://pbeshai.github.io/tidy/docs/api/pivot/

type LongDataItem = {
    date: string;
    group: string;
    value: number;
};

export type WideDataItem = {
    date: string;
} & { [key: string]: number }

export const pivotWider = (data: LongDataItem[]) => {
    const result: WideDataItem[] = [];

    data.forEach((item) => {
        const existingEntry = result.find((entry) => entry.date === item.date);

        if (existingEntry) {
            existingEntry[item.group] = item.value;
        } else {
            const newEntry = { date: item.date };
            newEntry[item.group] = item.value;
            result.push(newEntry);
        }
    });

    return result;
}
