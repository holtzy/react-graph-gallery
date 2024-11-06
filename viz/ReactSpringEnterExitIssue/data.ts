export const data1 = [
    { x: 10, y: 10, name: "Mark" }, // This one just update = its position change
    { x: 200, y: 20, name: "Elise" }, // This one just update = its position change
    { x: 100, y: 100, name: "Brendan" }, // This one must exit = it is NOT avail in the other dataset
    { x: 10, y: 200, name: "Shuntaro" }, // This one does not change
]

export const data2 = [
    { x: 50, y: 10, name: "Mark" }, // update
    { x: 120, y: 20, name: "Elise" }, // update
    { x: 10, y: 200, name: "Shuntaro" }, // stable
    { x: 200, y: 200, name: "Lucas" }, // This one ENTER = avail in data2 only
]
