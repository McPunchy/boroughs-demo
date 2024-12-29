
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
            },
            {
                id: "accident",
                text: "It was an accident",
                youtubeId: "SNss3bcWeYE",
                description: "One moment of inattention. That's all it took."
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
                                            resolve: { attune: 0, command: 0, consort: 2 }
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
            },   
            {
                id: "police",
                text: "The police were involved",
                details: "Badge numbers disappeared under black tape.",
                branches: [
                    {
                        id: "bystander",
                        text: "You were just walking home",
                        details: "Wrong place. Wrong time. Wrong street.",
                        outcomes: [
                            {
                                id: "freeze",
                                text: "You stopped when ordered",
                                details: "Compliance wasn't enough.",
                                endings: [
                                    {
                                        text: "Six warning shots. All in your back.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "'Stop resisting' echoed as their boots came down.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The taser triggered your heart condition.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "question",
                                text: "You asked why",
                                details: "Questions were seen as resistance.",
                                endings: [
                                    {
                                        text: "Your legal knowledge earned their special attention.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They answered with nightsticks instead of words.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your phone recorded your final questions.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "panic",
                                text: "Fear took over",
                                details: "They saw your terror as guilt.",
                                endings: [
                                    {
                                        text: "The chase ended at the subway entrance.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 2, skirmish: 1 },
                                            resolve: { attune: 2, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your stumble was labeled 'aggressive movement.'",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The K-9 unit caught your scent.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 2, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "mistaken",
                        text: "They thought you were someone else",
                        details: "The description was vague enough to be deadly.",
                        outcomes: [
                            {
                                id: "explain",
                                text: "You tried to explain",
                                details: "Your ID was in your pocket. They saw you reach.",
                                endings: [
                                    {
                                        text: "Twenty-seven shots fired. Six hit you.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 1, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "Your wallet fell next to your body.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The body cam footage was corrupted.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "prove",
                                text: "You had witnesses",
                                details: "They cleared the street.",
                                endings: [
                                    {
                                        text: "No one remained to see the truth.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your neighbors watched from behind closed blinds.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "The security cameras mysteriously malfunctioned.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "call",
                                text: "You called for help",
                                details: "More sirens approached.",
                                endings: [
                                    {
                                        text: "Backup arrived. The violence multiplied.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 2, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your 911 call recorded everything.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They took turns with their batons.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "demonstration",
                        text: "The protest was peaceful",
                        details: "Until the riot gear came out.",
                        outcomes: [
                            {
                                id: "frontline",
                                text: "You held the line",
                                details: "Your sign became a target.",
                                endings: [
                                    {
                                        text: "The rubber bullets weren't rubber.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Tear gas canister. Point blank range.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The cavalry charge crushed you against the wall.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "document",
                                text: "You recorded everything",
                                details: "Your lens caught their attention.",
                                endings: [
                                    {
                                        text: "The livestream captured your last breath.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They made sure no footage survived.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your camera became a weapon against you.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 2 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "help",
                                text: "You aided the injured",
                                details: "The medic cross made you a target.",
                                endings: [
                                    {
                                        text: "Your supplies were used to treat your own wounds.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 1 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "They blocked the ambulance access.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 1 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your red cross became a bullseye.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 1 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "bar",
                text: "It started at the bar",
                details: "Neon reflected off broken glass.",
                branches: [
                    {
                        id: "words",
                        text: "You said the wrong thing",
                        details: "Your voice carried across the wrong crowd.",
                        outcomes: [
                            {
                                id: "apologize",
                                text: "You tried to take it back",
                                details: "Pride wouldn't let them accept.",
                                endings: [
                                    {
                                        text: "Your head hit the bar rail. Then their boots did.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They made sure you'd never speak again.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your last words were 'I'm sorry.'",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 1 },
                                            resolve: { attune: 0, command: 1, consort: 2 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "stand",
                                text: "You stood your ground",
                                details: "Words escalated to fists.",
                                endings: [
                                    {
                                        text: "The broken bottle opened your throat.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 2, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Their friends made it six against one.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "The pool cue snapped across your skull.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "leave",
                                text: "You tried to walk away",
                                details: "They followed you outside.",
                                endings: [
                                    {
                                        text: "The parking lot gravel filled your mouth.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They caught you at your car.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 2, skirmish: 1 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The alley had no exit.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 2, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "spilled",
                        text: "The drink spilled",
                        details: "Whiskey stained their leather jacket.",
                        outcomes: [
                            {
                                id: "offer",
                                text: "You offered to buy another",
                                details: "Money wouldn't fix this.",
                                endings: [
                                    {
                                        text: "They used your cash to wipe your blood.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 1, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "Your wallet became a reason to search your corpse.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "They took the money. Then took your life.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 1 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "clean",
                                text: "You tried to help clean up",
                                details: "Your hands shook as you reached out.",
                                endings: [
                                    {
                                        text: "They broke every finger you extended.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 2 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The bar rag became a garrote.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 1 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your helpful gesture was your last mistake.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 1 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "run",
                                text: "You made a break for it",
                                details: "The crowd parted too slowly.",
                                endings: [
                                    {
                                        text: "They caught you at the emergency exit.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 2, skirmish: 1 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The bathroom window was too small to escape.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The bouncer pushed you back inside.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 2, skirmish: 0 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "others",
                        text: "Someone else's fight found you",
                        details: "The bottle meant for them hit you.",
                        outcomes: [
                            {
                                id: "duck",
                                text: "You tried to stay low",
                                details: "The chaos swept you up anyway.",
                                endings: [
                                    {
                                        text: "The stampede left you crushed on the floor.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Someone's boot found your temple.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The falling mirror wall buried you in glass.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "protect",
                                text: "You shielded someone else",
                                details: "Your good deed was punished.",
                                endings: [
                                    {
                                        text: "They escaped. You didn't.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your sacrifice bought them seconds to live.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 1 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Both sides decided you were the enemy.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "join",
                                text: "You picked a side",
                                details: "You chose wrong.",
                                endings: [
                                    {
                                        text: "Your new allies turned on you first.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The other side made you an example.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Everyone decided you were the real threat.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "revenge",
                text: "Your past caught up",
                details: "They remembered. They waited. They found you.",
                branches: [
                    {
                        id: "debt",
                        text: "The money was never yours",
                        details: "Interest paid in blood.",
                        outcomes: [
                            {
                                id: "pay",
                                text: "You offered everything",
                                details: "They wanted more than money.",
                                endings: [
                                    {
                                        text: "Your wallet emptied. Your veins followed.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "They took the cash. Then took their time.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Each finger broke for each missed payment.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "explain",
                                text: "You tried reasoning",
                                details: "Logic met vengeance.",
                                endings: [
                                    {
                                        text: "Your excuses died in your throat.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They had years to practice this moment.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your last words were lost in their rage.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "flee",
                                text: "You ran from the past",
                                details: "The past ran faster.",
                                endings: [
                                    {
                                        text: "They knew your escape routes better than you.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your car was already sabotaged.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 2, skirmish: 1 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The dead end was their plan all along.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 2, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "survivor",
                        text: "They survived what you did",
                        details: "Your victim's family never forgot.",
                        outcomes: [
                            {
                                id: "beg",
                                text: "You begged forgiveness",
                                details: "Mercy died with their loved one.",
                                endings: [
                                    {
                                        text: "They recreated the original crime. Slowly.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your pleas echoed their victim's last words.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They made you feel everything their child felt.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 1 },
                                            resolve: { attune: 0, command: 1, consort: 2 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "fight",
                                text: "You fought back",
                                details: "Their hatred was stronger.",
                                endings: [
                                    {
                                        text: "Your struggle gave them more satisfaction.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "They'd trained years for this moment.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your resistance made the revenge sweeter.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 2, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "accept",
                                text: "You accepted judgment",
                                details: "They had planned this for years.",
                                endings: [
                                    {
                                        text: "Your surrender didn't make it quick.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "They took their time. All night.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 1, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "Your last breath was their closure.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "betrayal",
                        text: "The ones you betrayed returned",
                        details: "Loyalty bought in blood must be repaid.",
                        outcomes: [
                            {
                                id: "deny",
                                text: "You claimed innocence",
                                details: "They brought proof.",
                                endings: [
                                    {
                                        text: "Each lie cost another finger.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They made you confess everything.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your denials became screams.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "bargain",
                                text: "You offered new betrayals",
                                details: "They'd heard enough lies.",
                                endings: [
                                    {
                                        text: "Your tongue was the first thing to go.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Each name you gave bought another cut.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 1 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your final betrayal was trying to save yourself.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "truth",
                                text: "You told them everything",
                                details: "Honesty came too late.",
                                endings: [
                                    {
                                        text: "The truth only fueled their rage.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your confession became your eulogy.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "They made sure you lived long enough to finish.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 2 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }                        
            
        ]
    },
    
    accidentPath: {
        prompt: "The accident was quick, but you remember every detail. How did it happen?",
        choices: [
            {
                id: "construction",
                text: "The construction site wasn't secure",
                details: "Safety regulations existed for a reason.",
                branches: [
                    {
                        id: "fall",
                        text: "You fell",
                        details: "The harness was frayed.",
                        outcomes: [
                            {
                                id: "reach",
                                text: "You tried to grab something",
                                details: "Your fingers brushed the scaffolding.",
                                endings: [
                                    {
                                        text: "The steel beam slipped through your grasp.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "The safety net had holes. You found one.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your hardhat came loose first. You followed.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 2 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "warning",
                                text: "You shouted a warning",
                                details: "Others would live because of you.",
                                endings: [
                                    {
                                        text: "Your last act saved three lives. Cost you yours.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 2, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "They heard you in time. You weren't so lucky.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your voice echoed. Then silence.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "accept",
                                text: "You knew it was over",
                                details: "Gravity always wins.",
                                endings: [
                                    {
                                        text: "The world spun beautifully on your way down.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "You counted the floors as they passed.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Time slowed. The ground didn't.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 2, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "collapse",
                        text: "The structure gave way",
                        details: "Concrete and steel became a tomb.",
                        outcomes: [
                            {
                                id: "run",
                                text: "You ran for the exit",
                                details: "The path crumbled behind you.",
                                endings: [
                                    {
                                        text: "The doorway collapsed as you reached it.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 2, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 2 }
                                        }
                                    },
                                    {
                                        text: "Your shortcut became a dead end.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The floor disappeared beneath your feet.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 1 },
                                            prowess: { finesse: 2, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "brace",
                                text: "You tried to brace yourself",
                                details: "Physics had other plans.",
                                endings: [
                                    {
                                        text: "The support beam pinned you like a butterfly.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 2 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 1, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "Your shelter became your coffin.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "The weight of three floors said hello.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 1, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "help",
                                text: "You helped others escape",
                                details: "Someone had to be last out.",
                                endings: [
                                    {
                                        text: "You held the beam long enough for them.",
                                        skills: {
                                            insight: { study: 0, survey: 0, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 2 },
                                            resolve: { attune: 1, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your boost saved their lives. Cost yours.",
                                        skills: {
                                            insight: { study: 1, survey: 0, tinker: 0 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 1 },
                                            resolve: { attune: 0, command: 2, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The last one out should've been faster.",
                                        skills: {
                                            insight: { study: 0, survey: 1, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 1, skirmish: 1 },
                                            resolve: { attune: 1, command: 1, consort: 1 }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "equipment",
                        text: "The machinery malfunctioned",
                        details: "Metal doesn't care about human flesh.",
                        outcomes: [
                            {
                                id: "dodge",
                                text: "You tried to dodge",
                                details: "The space was too tight.",
                                endings: [
                                    {
                                        text: "The crane's cable wrapped around your ankle.",
                                        skills: {
                                            insight: { study: 0, survey: 2, tinker: 1 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "The drill bit caught your sleeve first.",
                                        skills: {
                                            insight: { study: 1, survey: 1, tinker: 2 },
                                            prowess: { finesse: 1, prowl: 1, skirmish: 0 },
                                            resolve: { attune: 0, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "The hydraulics burst. You didn't move fast enough.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 1 },
                                            prowess: { finesse: 2, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "fix",
                                text: "You knew how to fix it",
                                details: "Knowledge couldn't outrun momentum.",
                                endings: [
                                    {
                                        text: "The emergency stop was just out of reach.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 2 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "You found the fault. It found your jugular.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 2 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 0, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "The manual didn't cover this scenario.",
                                        skills: {
                                            insight: { study: 2, survey: 0, tinker: 2 },
                                            prowess: { finesse: 1, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 1, consort: 0 }
                                        }
                                    }
                                ]
                            },
                            {
                                id: "warn",
                                text: "You had to warn others",
                                details: "The warning signs were clear to you.",
                                endings: [
                                    {
                                        text: "The chain reaction started with you.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 2, consort: 0 }
                                        }
                                    },
                                    {
                                        text: "They escaped the blast radius. You didn't.",
                                        skills: {
                                            insight: { study: 1, survey: 2, tinker: 0 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 1, command: 1, consort: 1 }
                                        }
                                    },
                                    {
                                        text: "Your expertise saved everyone but yourself.",
                                        skills: {
                                            insight: { study: 2, survey: 1, tinker: 1 },
                                            prowess: { finesse: 0, prowl: 0, skirmish: 0 },
                                            resolve: { attune: 0, command: 1, consort: 1 }
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
