export const data = {
    nodes: [
        { id: "Myriel", group: 'team1' },
        { id: "Anne", group: 'team1' },
        { id: "Gabriel", group: 'team1' },
        { id: "Mel", group: 'team1' },
        { id: "Yan", group: 'team2' },
        { id: "Tom", group: 'team2' },
        { id: "Cyril", group: 'team2' },
        { id: "Tuck", group: 'team2' },
        { id: "Antoine", group: 'team3' },
        { id: "Rob", group: 'team3' }
    ],
    links: [
        { source: "Anne", target: "Myriel", value: 1 },
        { source: "Napoleon", target: "Myriel", value: 1 },
        { source: "Gabriel", target: "Myriel", value: 1 },
        { source: "Mel", target: "Myriel", value: 1 },
        { source: "Yan", target: "Tom", value: 1 },
        { source: "Tom", target: "Cyril", value: 1 },
        { source: "Tuck", target: "Myriel", value: 1 },
        { source: "Tuck", target: "Mel", value: 1 },
        { source: "Tuck", target: "Myriel", value: 1 },
        { source: "Mel", target: "Myriel", value: 1 },
        { source: "Rob", target: "Antoine", value: 1 }
    ]
}
