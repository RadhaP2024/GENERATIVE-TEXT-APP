// Word banks for generating sentences [citation:3]
const wordBanks = {
    // Sentence starters - beginning of the answer
    starters: [
        "Today you will learn that",
        "The universe whispers that",
        "Your inner wisdom knows",
        "Consider this truth:",
        "The answer lies in",
        "Remember that",
        "Trust that",
        "Open your heart to",
        "The path forward is",
        "Your question reveals"
    ],
    
    // Subjects - who or what the sentence is about
    subjects: [
        "your patience",
        "the journey",
        "this moment",
        "your courage",
        "the silence",
        "every challenge",
        "your intuition",
        "small steps",
        "the unknown",
        "your authentic self"
    ],
    
    // Verbs - actions or states of being
    verbs: [
        "reveals",
        "holds",
        "offers",
        "becomes",
        "teaches",
        "shows",
        "brings",
        "creates",
        "nurtures",
        "transforms"
    ],
    
    // Adjectives - descriptive words
    adjectives: [
        "unexpected",
        "beautiful",
        "meaningful",
        "peaceful",
        "powerful",
        "gentle",
        "profound",
        "simple",
        "wise",
        "infinite"
    ],
    
    // Endings - concluding phrases
    endings: [
        "in due time.",
        "when you least expect it.",
        "exactly when needed.",
        "with perfect timing.",
        "beyond what you imagine.",
        "in mysterious ways.",
        "as part of your journey.",
        "if you remain open.",
        "through your own growth.",
        "and all will be well."
    ]
};

// Helper function to get random item from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate a random sentence using word banks
function generateAnswer() {
    const starter = getRandomItem(wordBanks.starters);
    const subject = getRandomItem(wordBanks.subjects);
    const verb = getRandomItem(wordBanks.verbs);
    const adjective = getRandomItem(wordBanks.adjectives);
    const ending = getRandomItem(wordBanks.endings);
    
    // Different sentence structures for variety
    const structures = [
        `${starter} ${subject} ${verb} ${adjective} ${ending}`,
        `${starter} ${subject} ${verb} ${ending}`,
        `${starter} ${adjective} ${subject} ${verb} ${ending}`,
        `${starter} ${verb} ${adjective} ${subject} ${ending}`
    ];
    
    return getRandomItem(structures);
}

// Generate longer, more poetic answer
function generatePoeticAnswer() {
    const structures = [
        {
            parts: 2,
            template: () => {
                const p1 = `${getRandomItem(wordBanks.starters)} ${getRandomItem(wordBanks.subjects)} ${getRandomItem(wordBanks.verbs)} ${getRandomItem(wordBanks.adjectives)}.`;
                const p2 = `${getRandomItem(wordBanks.subjects)} ${getRandomItem(wordBanks.verbs)} ${getRandomItem(wordBanks.endings)}`;
                return `${p1} ${p2}`;
            }
        },
        {
            parts: 3,
            template: () => {
                return `${getRandomItem(wordBanks.starters)} ${getRandomItem(wordBanks.subjects)} ${getRandomItem(wordBanks.verbs)} ${getRandomItem(wordBanks.adjectives)}. ${getRandomItem(wordBanks.subjects)} ${getRandomItem(wordBanks.verbs)} ${getRandomItem(wordBanks.endings)}`;
            }
        }
    ];
    
    const selected = getRandomItem(structures);
    return selected.template();
}

// DOM elements
const answerText = document.getElementById('answerText');
const generateBtn = document.getElementById('generateBtn');

// Event listener for button click
generateBtn.addEventListener('click', () => {
    // Add a small animation class
    answerText.style.animation = 'none';
    answerText.offsetHeight; // Trigger reflow
    answerText.style.animation = 'fadeIn 1s ease';
    
    // Randomly choose between simple and poetic answers
    const usePoetic = Math.random() > 0.5;
    const answer = usePoetic ? generatePoeticAnswer() : generateAnswer();
    
    answerText.textContent = answer;
});

// Optional: Generate an answer when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        answerText.textContent = generateAnswer();
    }, 500);
});

// Bonus: Add keyboard support (press space for new answer)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.repeat) {
        e.preventDefault();
        generateBtn.click();
    }
});