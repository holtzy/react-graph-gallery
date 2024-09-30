export const data = {
    "nodes": [
        { id: "bob" },
        { id: "alice" },
        { id: "carol" },
        { id: "mel" },
        { id: "yan" }
    ],
    "links": [
        { source: "bob", target: "carol", value: 4 },
        { source: "alice", target: "carol", value: 3 },
        { source: "alice", target: "yan", value: 1 },
        { source: "carol", target: "mel", value: 6 },
        { source: "carol", target: "yan", value: 1 },
    ]
}
