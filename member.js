function skillsMember() {
    return {
        name: "skillsMember",
        description: "A member with skills",
        type: "object",
        properties: {
            id: {
                type: "string",
                description: "The ID of the member"
            },
            name: {
                type: "string",
                description: "The name of the member"
            },
            skills: {
                type: "array",
                items: {
                    type: "string"
                },
                description: "The skills of the member"
            }
        },
        required: ["id", "name"]
    };
}