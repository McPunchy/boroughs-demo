
let player;

// Initialize YouTube API
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

class StoryTeller {
    constructor() {
        this.narrativeElement = document.getElementById('narrative-text');
        this.choicesElement = document.getElementById('choices');
        
        // Word timing configurations
        this.defaultDelay = 100;  // Default delay between words
        this.shortPause = 500;    // Short pause
        this.mediumPause = 1000;  // Medium pause
        this.longPause = 2000;    // Long pause
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
                choiceDiv.textContent = choice;
                choiceDiv.onclick = () => this.handleChoice(index);
                this.choicesElement.appendChild(choiceDiv);
                
                setTimeout(() => {
                    choiceDiv.style.opacity = '1';
                }, 50);
            }, index * 500);
        });
    }

    handleChoice(index) {
        // Handle choice selection here
        console.log(`Choice ${index + 1} selected`);
    }
}

// Usage example
const story = new StoryTeller();

const openingNarrative = [
    { text: "Breathe.", delay: 2000 },
    { text: "Keep", delay: 1000 },
    { text: "breathing.", delay: 2000 },
    { text: "There", delay: 300 },
    { text: "you", delay: 300 },
    { text: "go.", delay: 500 },
    { text: "Can", delay: 300 },
    { text: "you", delay: 300 },
    { text: "tell", delay: 300 },
    { text: "me", delay: 300 },
    { text: "what", delay: 300 },
    { text: "you", delay: 300 },
    { text: "remember?", delay: 300 }
];

const choices = [
    "I don't remember much. I was driving.",
    "I was walking home from work.",
    "I'd just left the subway."
];

window.onload = async () => {
    // Hide main content initially
    document.getElementById('narrative-text').classList.add('hidden');
    document.getElementById('choices').classList.add('hidden');
    document.getElementById('toggleAudio').parentElement.classList.add('hidden');
    
    // Fade in welcome text
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.style.opacity = '1';
    
    // Wait 2 seconds, then show buttons
    await new Promise(resolve => setTimeout(resolve, 2000));
    const startButtons = document.getElementById('start-buttons');
    startButtons.classList.remove('hidden');
    startButtons.style.opacity = '1';
    
    // Add button listeners
    document.getElementById('start-no-music').onclick = startStory;
    document.getElementById('start-with-music').onclick = startStoryWithMusic;
};

async function startStory() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('narrative-text').classList.remove('hidden');
    document.getElementById('choices').classList.remove('hidden');
    document.getElementById('toggleAudio').parentElement.classList.remove('hidden');
    
    await story.tellStory(openingNarrative);
    story.displayChoices(choices);
}

async function startStoryWithMusic() {
    player.playVideo();
    startStory();
}
