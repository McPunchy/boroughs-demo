
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('toggleAudio').onclick = () => {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    };
    
    document.getElementById('volumeControl').oninput = (e) => {
        player.setVolume(e.target.value);
    };
}

class StoryStateManager {
    constructor() {
        this.stats = JSON.parse(JSON.stringify(storyContent.stats)); // Deep copy initial stats
        this.currentScene = 'start';
    }

    updateAspect(aspect, value) {
        if (this.stats.aspects.hasOwnProperty(aspect)) {
            this.stats.aspects[aspect] += value;
        }
    }

    addCharacterAppearance(detail) {
        this.stats.characterAppearance.push(detail);
    }

    addPatronAppearance(detail) {
        this.stats.patronAppearance.push(detail);
    }

    setCharacterName(name) {
        this.stats.characterName = name;
    }
}

class StoryTeller {
    constructor() {
        this.narrativeElement = document.getElementById('narrative-text');
        this.choicesElement = document.getElementById('choices');
        this.stateManager = new StoryStateManager();
        
        this.defaultDelay = 300;
    }

    async displayWord(word, delay = this.defaultDelay) {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        wordSpan.textContent = word + ' ';
        this.narrativeElement.appendChild(wordSpan);

        await new Promise(resolve => setTimeout(resolve, delay));
        wordSpan.style.opacity = '1';
    }

    async tellStory(narrative) {
        for (const segment of narrative) {
            await this.displayWord(segment.text, segment.delay);
        }
    }


    displayChoices(choices) {
        choices.forEach((choice, index) => {
            setTimeout(() => {
                const choiceDiv = document.createElement('div');
                choiceDiv.className = 'choice';
                choiceDiv.textContent = choice.text;
                choiceDiv.onclick = () => this.handleChoice(choice);
                this.choicesElement.appendChild(choiceDiv);
                
                setTimeout(() => {
                    choiceDiv.style.opacity = '1';
                }, 50);
            }, index * 500);
        });
    }

    async handleChoice(choice) {
        // Apply effects
        if (choice.effects) {
            if (choice.effects.aspects) {
                Object.entries(choice.effects.aspects).forEach(([aspect, value]) => 
                    this.stateManager.updateAspect(aspect, value));
            }
            if (choice.effects.characterAppearance) {
                choice.effects.characterAppearance.forEach(detail => 
                    this.stateManager.addCharacterAppearance(detail));
            }
            if (choice.effects.patronAppearance) {
                choice.effects.patronAppearance.forEach(detail => 
                    this.stateManager.addPatronAppearance(detail));
            }
        }

        // Clear current content
        this.narrativeElement.innerHTML = '';
        this.choicesElement.innerHTML = '';

        // Load next scene
        const nextScene = storyContent.scenes[choice.nextScene];
        if (nextScene) {
            await this.tellStory(nextScene.narrative);
            this.displayChoices(nextScene.choices);
        } else {
            console.error(`Scene '${choice.nextScene}' not found`);
        }
    }
}

const story = new StoryTeller();

window.onload = async () => {
    document.getElementById('narrative-text').classList.add('hidden');
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('toggleAudio').parentElement.classList.add('hidden');
    
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.style.opacity = '1';
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    const startButtons = document.getElementById('start-buttons');
    startButtons.classList.remove('hidden');
    startButtons.style.opacity = '1';
    
    document.getElementById('start-no-music').onclick = startStory;
    document.getElementById('start-with-music').onclick = startStoryWithMusic;
};

async function startStory() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('narrative-text').classList.remove('hidden');
    document.getElementById('choices').classList.remove('hidden');
    document.getElementById('toggleAudio').parentElement.classList.remove('hidden');
    
    const firstScene = storyContent.scenes['start'];
    await story.tellStory(firstScene.narrative);
    story.displayChoices(firstScene.choices);
}

async function startStoryWithMusic() {
    player.playVideo();
    startStory();
}
