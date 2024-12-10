function createUniformSentence(text, wordDelay = 180) {
    return text.split(' ').map(word => ({
        text: word,
        delay: (word.includes('.') || word.includes(',')) ? 500 : wordDelay
    }));
}

const storyContent = {
    stats: {
        aspects: {
            star: 0,
            blade: 0,
            edge: 0,
            spider: 0,
            trail: 0,
            seeker: 0,
            mask: 0
        },
        characterAppearance: [],
        patronAppearance: [],
        characterName: ''
    },


       

    scenes: {
        'start': {
            narrative: [
                { text: '"Breathe.', delay: 4000 },
                { text: "Keep", delay: 1000 },
                { text: "breathing.", delay: 2000 },
                { text: "There", delay: 300 },
                { text: "you", delay: 300 },
                { text: "go.", delay: 2000 },
                { text: "Can", delay: 300 },
                { text: "you", delay: 300 },
                { text: "tell", delay: 300 },
                { text: "me", delay: 300 },
                { text: "what", delay: 300 },
                { text: "you", delay: 300 },
                { text: 'remember?"', delay: 300 }
            ],
            choices: [
                {
                    text: "I was walking home from work.",
                    nextScene: 'walking',
                    effects: {
                    }
                },
                {
                    text: "I'd just left the subway.",
                    nextScene: 'subway',
                    effects: {
                    }
                },
                {
                    text: "I was just leaving the bar.",
                    nextScene: 'bar',
                    effects: {
                    }
                },
                { 
                    text: "I was going to meet a friend.",
                    nextScene: 'friend',
                    effects: {
                    }
                },
                { 
                    text: "I was meeting a client.",
                    nextScene: 'client',
                    effects: {
                    }
                },
            ],
        },
        'walking': {
            narrative: createUniformSentence('"That\'s right. You were walking home from work. It\'s not a long walk, but you went into the alleyway anyway. You never did before, but you did tonight. Can you tell me why?"'),
            choices: [
                {
                    text: "I was looking for a shortcut.",
                    nextScene: 'alley',
                    effects: { 
                        edge: 1,
                    }
                },
                {
                    text: "I thought I heard someone in trouble.",
                    nextScene: 'alley',
                    effects: {
                        star: 1,
                    }
                }
            ]
        }
    }
}