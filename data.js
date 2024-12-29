
const narrativeData = {
    opening: {
        text: "Everyone dies. This is how you died."
    },

    deathCategories: {
        prompt: "How did it happen?",
        choices: [
            {
                id: "violence",
                text: "It was violent",
                youtubeId: "rgUWkQlsRKg",
                description: "The streetlight flickers above your body. Your blood looks black against the wet asphalt."
            }
        ]
    },

    violencePath: {
        prompt: "The violence was quick, but you remember every detail. How did it happen?",
        choices: [
            {
                id: "mugging",
                text: "They wanted your wallet",
                details: "You refused to give up your mother's photo. It was the last thing you had of her.",
                branches: [
                    {
                        id: "resist",
                        text: "You fought back",
                        details: "The knife glinted in the streetlight.",
                        outcomes: [
                            {
                                id: "martial_arts",
                                text: "Your training kicked in",
                                details: "Years of practice weren't enough against three attackers.",
                                endings: [
                                    {
                                        text: "You took two down before the third got you. The photo survived.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 1, skirmish: 1 },
                                            resolve: { attune: 0, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your sensei would have been proud. Your mother would have called you foolish.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "The police report noted your defensive wounds. Professional technique.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "street_smart",
                                text: "You knew these streets",
                                details: "But they knew them better.",
                                endings: [
                                    {
                                        text: "The alley was a dead end. Literally.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 2, skirmish: 1 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your shortcut became their trap.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 2, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "The neighborhood watched. Nobody helped.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 2 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "desperate",
                                text: "Pure desperation",
                                details: "Fear makes animals of us all.",
                                endings: [
                                    {
                                        text: "Your nails left scars. They'll remember you.",
                                        skills: {
                                            insight: { study: 0, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 2, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "You bit through someone's thumb. They didn't expect that.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 2, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your screams brought attention. Too late, but they ran.",
                                        skills: {
                                            insight: { study: 0, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 2 },
                                            resolve: { attune: 1, command: 2, consort: 0 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "comply",
                        text: "You handed over everything",
                        details: "Except the photo. That was non-negotiable.",
                        outcomes: [
                            {
                                id: "witness",
                                text: "You saw their faces",
                                details: "They couldn't let that slide.",
                                endings: [
                                    {
                                        text: "You could identify their tattoos. That sealed your fate.",
                                        skills: {
                                            insight: { study: 2, survey: 2, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "You recognized one of them. They saw it in your eyes.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "The streetlight revealed too much. Of them. Of you.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "photo_discovery",
                                text: "They found the photo anyway",
                                details: "Hidden in your shoe wasn't enough.",
                                endings: [
                                    {
                                        text: "They laughed as they tore it up. You couldn't let that stand.",
                                        skills: {
                                            insight: { study: 0, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your mother's smile scattered in pieces on the wet ground.",
                                        skills: {
                                            insight: { study: 0, survey: 0, tinker: 1 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 2, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "They knew its value. That made it worse.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 2 },
                                            resolve: { attune: 0, command: 2, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "cruel_twist",
                                text: "They were going to let you go",
                                details: "Until their leader arrived.",
                                endings: [
                                    {
                                        text: "He knew your father. Old debts came due.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "Wrong place, wrong time, wrong family history.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "Your mother's photo revealed too much about who you really were.",
                                        skills: {
                                            insight: { study: 2, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "negotiate",
                        text: "You tried to reason with them",
                        details: "Words were always your strength.",
                        outcomes: [
                            {
                                id: "empathy",
                                text: "You connected with one of them",
                                details: "But their partners weren't as understanding.",
                                endings: [
                                    {
                                        text: "He tried to help you escape. They killed you both.",
                                        skills: {
                                            insight: { study: 0, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 2, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "Your words reached him too late. His hesitation cost you everything.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 2, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "You reminded him of his sister. That made the others angry.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 2 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "revelation",
                                text: "You knew too much",
                                details: "Your knowledge became your curse.",
                                endings: [
                                    {
                                        text: "You recognized their gang colors. They saw the recognition.",
                                        skills: {
                                            insight: { study: 2, survey: 2, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your street knowledge impressed them. Then frightened them.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 2, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "You mentioned the right names. The wrong names.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 2 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "bargain",
                                text: "You offered something better",
                                details: "A deal with devils never ends well.",
                                endings: [
                                    {
                                        text: "Your promise of future payment became your death sentence.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "They accepted your offer. Then decided to take it all anyway.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 2, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your negotiation skills impressed the wrong person.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 2, consort: 0 }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

export { narrativeData }
