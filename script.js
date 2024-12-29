
import { narrativeData } from './data.js';

let player;
let particles = [];
const PARTICLE_COUNT = 50;
let currentState = {
    screen: 'opening',
    path: null,
    scene: null,
    character: {
        name: null,
        age: null,
        pronouns: null
    },
    attributes: null,
    storyPath: []
};

// YouTube API setup
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupInitialScreen();
});

function createParticles() {
    const container = document.createElement('div');
    container.className = 'ambient-particles';
    document.body.appendChild(container);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(particle);
        particles.push(particle);
    }
}

function transitionToScreen(screenId, duration = 800) {
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    document.body.appendChild(overlay);

    setTimeout(() => overlay.classList.add('active'), 0);
    
    setTimeout(() => {
        showScreen(screenId);
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 800);
    }, duration);
}

function typewriterEffect(element, text, speed = 50) {
    const originalText = text || element.textContent;
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < originalText.length) {
            element.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': ''
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    setupAudioControls();
}

function onPlayerStateChange(event) {
    updatePlayPauseButton(event.data === YT.PlayerState.PLAYING);
}

function setupAudioControls() {
    const volumeSlider = document.getElementById('volume-slider');
    const toggleButton = document.getElementById('toggle-audio');
    
    volumeSlider.addEventListener('input', (e) => {
        player.setVolume(e.target.value);
    });

    toggleButton.addEventListener('click', () => {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });
}

function updatePlayPauseButton(isPlaying) {
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    if (isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

function setupInitialScreen() {
    const openingText = document.querySelector('#opening-screen .typewriter-text');
    typewriterEffect(openingText, narrativeData.opening.text);
    
    document.querySelector('.next-button').addEventListener('click', () => {
        transitionToScreen('character');
    });

    setupCharacterForm();
}

function setupCharacterForm() {
    const form = document.getElementById('character-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        currentState.character = {
            name: document.getElementById('char-name').value,
            age: document.getElementById('char-age').value,
            pronouns: document.getElementById('char-pronouns').value
        };
        
        transitionToScreen('category');
        setTimeout(populateCategories, 800);
    });
}

function populateCategories() {
    const container = document.getElementById('category-choices');
    const descriptionText = document.querySelector('#category-screen .description-text');
    const promptText = document.querySelector('#category-screen .typewriter-text');
    typewriterEffect(promptText, narrativeData.deathCategories.prompt);
    
    container.innerHTML = '';
    
    narrativeData.deathCategories.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.setAttribute('data-category', choice.id);
        button.setAttribute('data-youtube-id', choice.youtubeId);
        button.textContent = choice.text;
        button.style.opacity = '0';
        button.style.transform = 'translateX(-20px)';
        
        button.addEventListener('click', handleCategoryChoice);
        button.addEventListener('mouseenter', () => {
            descriptionText.textContent = choice.description;
            descriptionText.style.opacity = '1';
        });
        button.addEventListener('mouseleave', () => {
            descriptionText.style.opacity = '0';
        });
        
        container.appendChild(button);
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

function handleCategoryChoice(event) {
    const choice = event.target;
    const categoryId = choice.getAttribute('data-category');
    const youtubeId = choice.getAttribute('data-youtube-id');

    currentState.path = categoryId;
    currentState.storyPath.push({
        type: 'category',
        text: choice.textContent
    });
    
    player.loadVideoById({
        videoId: youtubeId,
        startSeconds: 0,
        suggestedQuality: 'small'
    });
    player.setVolume(30);
    player.playVideo();
    
    document.querySelectorAll('.choice').forEach(btn => {
        btn.classList.add('fade-out');
    });
    
    setTimeout(() => {
        showDeathPath(categoryId);
    }, 800);
}

function showDeathPath(categoryId) {
    if (categoryId === 'violence') {
        transitionToScreen('path');
        setTimeout(() => {
            const pathScreen = document.getElementById('path-screen');
            const promptText = pathScreen.querySelector('.typewriter-text');
            typewriterEffect(promptText, narrativeData.violencePath.prompt);
            
            const choicesContainer = document.getElementById('path-choices');
            const descriptionText = document.querySelector('#path-screen .description-text');
            choicesContainer.innerHTML = '';
            
            narrativeData.violencePath.choices.forEach((choice, index) => {
                const button = document.createElement('button');
                button.className = 'choice';
                button.setAttribute('data-path', choice.id);
                button.textContent = choice.text;
                button.style.opacity = '0';
                button.style.transform = 'translateX(-20px)';
                
                button.addEventListener('click', handlePathChoice);
                button.addEventListener('mouseenter', () => {
                    descriptionText.textContent = choice.details;
                    descriptionText.style.opacity = '1';
                });
                button.addEventListener('mouseleave', () => {
                    descriptionText.style.opacity = '0';
                });
                
                choicesContainer.appendChild(button);
                
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'translateX(0)';
                }, index * 200);
            });
        }, 800);
    } else if (categoryId === 'accident') {
        transitionToScreen('path');
        setTimeout(() => {
            const pathScreen = document.getElementById('path-screen');
            const promptText = pathScreen.querySelector('.typewriter-text');
            typewriterEffect(promptText, narrativeData.accidentPath.prompt);
            
            const choicesContainer = document.getElementById('path-choices');
            const descriptionText = document.querySelector('#path-screen .description-text');
            choicesContainer.innerHTML = '';
            
            narrativeData.accidentPath.choices.forEach((choice, index) => {
                const button = document.createElement('button');
                button.className = 'choice';
                button.setAttribute('data-path', choice.id);
                button.textContent = choice.text;
                button.style.opacity = '0';
                button.style.transform = 'translateX(-20px)';
                
                button.addEventListener('click', handlePathChoice);
                button.addEventListener('mouseenter', () => {
                    descriptionText.textContent = choice.details;
                    descriptionText.style.opacity = '1';
                });
                button.addEventListener('mouseleave', () => {
                    descriptionText.style.opacity = '0';
                });
                
                choicesContainer.appendChild(button);
                
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'translateX(0)';
                }, index * 200);
            });
        }, 800);
    }
}

function handlePathChoice(event) {
    const pathId = event.target.getAttribute('data-path');
    const pathData = {
        'violence': narrativeData.violencePath,
        'accident': narrativeData.accidentPath
        // Ready for more paths
    };
    
    const path = pathData[currentState.path].choices.find(c => c.id === pathId);
    
    currentState.storyPath.push({
        type: 'path',
        text: path.text,
        details: path.details
    });
    
    document.querySelectorAll('.choice').forEach(btn => {
        btn.classList.add('fade-out');
    });
    
    setTimeout(() => {
        showBranches(path);
    }, 800);
}

function showBranches(path) {
    const choicesContainer = document.getElementById('path-choices');
    const descriptionText = document.querySelector('#path-screen .description-text');
    choicesContainer.innerHTML = '';
    
    path.branches.forEach((branch, index) => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.setAttribute('data-branch', branch.id);
        button.textContent = branch.text;
        button.style.opacity = '0';
        button.style.transform = 'translateX(-20px)';
        
        button.addEventListener('click', () => handleBranchChoice(branch));
        button.addEventListener('mouseenter', () => {
            descriptionText.textContent = branch.details;
            descriptionText.style.opacity = '1';
        });
        button.addEventListener('mouseleave', () => {
            descriptionText.style.opacity = '0';
        });
        
        choicesContainer.appendChild(button);
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

function handleBranchChoice(branch) {
    currentState.storyPath.push({
        type: 'branch',
        text: branch.text,
        details: branch.details
    });
    
    document.querySelectorAll('.choice').forEach(btn => {
        btn.classList.add('fade-out');
    });
    
    setTimeout(() => {
        showOutcomes(branch);
    }, 800);
}

document.getElementById('restart-button').addEventListener('click', () => {
    // Stop and reset YouTube player if it exists
    if (player && typeof player.stopVideo === 'function') {
        player.stopVideo();
    }
    
    // Reset audio controls
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');

    currentState = {
        screen: 'opening',
        path: null,
        scene: null,
        character: {
            name: null,
            age: null,
            pronouns: null
        },
        attributes: null,
        storyPath: []
    };
    
    // Reset screens
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById('opening-screen').classList.add('active');
});


function showOutcomes(branch) {
    const choicesContainer = document.getElementById('path-choices');
    const descriptionText = document.querySelector('#path-screen .description-text');
    choicesContainer.innerHTML = '';
    
    branch.outcomes.forEach((outcome, index) => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.setAttribute('data-outcome', outcome.id);
        button.textContent = outcome.text;
        button.style.opacity = '0';
        button.style.transform = 'translateX(-20px)';
        
        button.addEventListener('click', () => handleOutcomeChoice(outcome));
        button.addEventListener('mouseenter', () => {
            descriptionText.textContent = outcome.details;
            descriptionText.style.opacity = '1';
        });
        button.addEventListener('mouseleave', () => {
            descriptionText.style.opacity = '0';
        });
        
        choicesContainer.appendChild(button);
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

function handleOutcomeChoice(outcome) {
    currentState.storyPath.push({
        type: 'outcome',
        text: outcome.text,
        details: outcome.details
    });
    
    document.querySelectorAll('.choice').forEach(btn => {
        btn.classList.add('fade-out');
    });
    
    setTimeout(() => {
        showEndings(outcome);
    }, 800);
}

function showEndings(outcome) {
    const choicesContainer = document.getElementById('path-choices');
    choicesContainer.innerHTML = '';
    
    outcome.endings.forEach((ending, index) => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = ending.text;
        button.style.opacity = '0';
        button.style.transform = 'translateX(-20px)';
        
        button.addEventListener('click', () => showFinalCharacterSheet(ending));
        
        choicesContainer.appendChild(button);
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

function showFinalCharacterSheet(ending) {
    currentState.storyPath.push({
        type: 'ending',
        text: ending.text
    });
    
    currentState.attributes = ending.skills;
    transitionToScreen('sheet');
    
    setTimeout(() => {
        const characterSheet = document.querySelector('.character-sheet');
        characterSheet.innerHTML = generateCharacterSheetHTML();
    }, 800);
}

function generateCharacterSheetHTML() {
    const characterInfo = `
        <div class="character-info">
            <h2>${currentState.character.name}</h2>
            <p>Age: ${currentState.character.age}</p>
            <p>Pronouns: ${currentState.character.pronouns}</p>
        </div>
    `;
    
    const storyPath = `
        <div class="story-path">
            <h3>Your Death</h3>
            ${currentState.storyPath.map(step => `
                <div class="path-step">
                    <p>${step.text}</p>
                    ${step.details ? `<p class="details">${step.details}</p>` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    const attributes = `
        <div class="attributes">
            ${Object.entries(currentState.attributes).map(([category, skills]) => `
                <div class="attribute-category">
                    <h3>${category}</h3>
                    ${Object.entries(skills).map(([skill, value]) => `
                        <div class="skill-row">
                            <span class="skill-name">${skill}</span>
                            <div class="skill-dots">
                                ${Array(4).fill(0).map((_, i) => 
                                    `<span class="dot ${i < value ? 'filled' : ''}"></span>`
                                ).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>
    `;
    
    return characterInfo + storyPath + attributes;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const newScreen = document.getElementById(`${screenId}-screen`);
    newScreen.classList.add('active');
    currentState.screen = screenId;
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
