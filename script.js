const scenarios = [

    // ---------- LEVEL 1 (Easy) ----------
    {
        title: "Level 1: Suspicious Prize Message",
        text: `CONGRATULATIONS! You have won ₱10,000!
Click the link below to claim your prize immediately.`,
        choices: [
            {
                text: "Click the link immediately",
                correct: false,
                consequence: "redirect",
                explanation: "This is risky. Unexpected prizes and urgent links are common warning signs of scams."
            },
            {
                text: "Check the sender and verify the information first",
                correct: true,
                explanation: "Correct! Before clicking, verify who sent the message and whether the offer is legitimate."
            },
            {
                text: "Forward the message to your friends",
                correct: false,
                consequence: "spread",
                explanation: "Don't spread suspicious messages. Verify the information before sharing it."
            }
        ]
    },

    // ---------- LEVEL 2 (Easy) ----------
    {
        title: "Level 2: Suspicious Download",
        text: `You receive a message containing an unknown file.
The sender says: "Open this file. It's important!"`,
        choices: [
            {
                text: "Open the file immediately",
                correct: false,
                consequence: "malware",
                explanation: "Unknown files may contain malicious software. Avoid opening unexpected attachments."
            },
            {
                text: "Ask the sender what the file is and verify it",
                correct: true,
                explanation: "Correct! Verify unexpected files before opening or downloading them."
            },
            {
                text: "Download it and send it to other people",
                correct: false,
                consequence: "spread",
                explanation: "That could spread a malicious file to other people."
            }
        ]
    },

    // ---------- LEVEL 3 (Easy) ----------
    {
        title: "Level 3: Fake News Check",
        text: `You see a viral post claiming:
"BREAKING! Everyone will receive ₱20,000 from the government tomorrow!"
The post does not provide an official source.`,
        choices: [
            {
                text: "Share it because many people are posting it",
                correct: false,
                consequence: "misinformation",
                explanation: "Popularity does not prove that information is true."
            },
            {
                text: "Check official and reliable sources before sharing",
                correct: true,
                explanation: "Correct! Verify important claims using reliable sources before sharing them."
            },
            {
                text: "Believe it because the post has many likes",
                correct: false,
                consequence: "misinformation",
                explanation: "Likes and shares do not prove that information is accurate."
            }
        ]
    },

    // ---------- LEVEL 4 (Easy-Medium) ----------
    {
        title: "Level 4: Account Security Alert",
        text: `You receive an alert saying someone attempted
to log into your account from an unfamiliar device.`,
        choices: [
            {
                text: "Ignore the alert",
                correct: false,
                consequence: "breach",
                explanation: "Ignoring an unfamiliar login can leave your account at risk."
            },
            {
                text: "Check the account, secure it, and change your password if necessary",
                correct: true,
                explanation: "Correct! Review the activity and take appropriate steps to secure your account."
            },
            {
                text: "Send your password to a friend for help",
                correct: false,
                consequence: "leak",
                explanation: "Never share your password with other people."
            }
        ]
    },

    // ---------- LEVEL 5 (Medium) ----------
    {
        title: "Level 5: Public Wi-Fi Banking",
        text: `You're at a coffee shop. A free network called
"Free_Cafe_WiFi" has no password. You need to check
your bank balance right now.`,
        choices: [
            {
                text: "Connect and log into your bank app right away",
                correct: false,
                consequence: "wifi",
                explanation: "Open, unsecured networks make it easier for attackers to intercept your data."
            },
            {
                text: "Use your mobile data or a trusted network instead",
                correct: true,
                explanation: "Correct! Avoid sensitive logins like banking on open public Wi-Fi."
            },
            {
                text: "Connect to the Wi-Fi anyway, just to browse social media first",
                correct: false,
                consequence: "wifi",
                explanation: "Even non-banking activity on an unsecured network can expose saved logins and sessions."
            }
        ]
    },

    // ---------- LEVEL 6 (Medium) ----------
    {
        title: "Level 6: QR Code Scam",
        text: `You see a flyer taped to a pole offering a
"free parking permit" — just scan the QR code to claim it.`,
        choices: [
            {
                text: "Scan it and follow the link that opens",
                correct: false,
                consequence: "qr",
                explanation: "Unverified QR codes can lead to malicious sites or trigger harmful downloads."
            },
            {
                text: "Look up the official parking authority instead of scanning random codes",
                correct: true,
                explanation: "Correct! Go to a trusted, official source rather than an unverified QR code."
            },
            {
                text: "Scan it and enter your card details to 'verify' your identity",
                correct: false,
                consequence: "qr",
                explanation: "Never enter payment or personal details after scanning an unverified QR code."
            }
        ]
    },

    // ---------- LEVEL 7 (Medium-Hard) ----------
    {
        title: "Level 7: Fake Tech Support Call",
        text: `You get a call: "This is Microsoft Support.
Your computer has a virus. Let us remotely access
it to fix it for you."`,
        choices: [
            {
                text: "Give them remote access right away",
                correct: false,
                consequence: "techsupport",
                explanation: "Legitimate companies don't cold-call you demanding remote access to your device."
            },
            {
                text: "Hang up and contact the company directly through official channels",
                correct: true,
                explanation: "Correct! Verify through official, independently-found contact info — never the caller's."
            },
            {
                text: "Give them your antivirus login so they can 'check' it",
                correct: false,
                consequence: "techsupport",
                explanation: "Sharing account access with an unverified caller can let them take control of your system."
            }
        ]
    },

    // ---------- LEVEL 8 (Hard) ----------
    {
        title: "Level 8: Fake Job Offer",
        text: `You're offered a high-paying remote job. HR asks
you to pay a small "training fee" before you can start,
with a promise of it being refunded on your first payday.`,
        choices: [
            {
                text: "Pay the fee to secure the job",
                correct: false,
                consequence: "jobscam",
                explanation: "Legitimate employers do not ask new hires to pay money to start working."
            },
            {
                text: "Research the company and refuse to pay any upfront fee",
                correct: true,
                explanation: "Correct! Any job that requires you to pay first is a major red flag."
            },
            {
                text: "Borrow money from a friend to pay quickly since spots are 'limited'",
                correct: false,
                consequence: "jobscam",
                explanation: "Urgency and scarcity pressure are classic scam tactics — slow down and verify instead."
            }
        ]
    },

    // ---------- LEVEL 9 (Hard) ----------
    {
        title: "Level 9: Business Email Compromise",
        text: `An email appears to be from your boss, urgently asking
you to wire ₱150,000 to a "new supplier account" today.
It's marked: "Confidential — handle discreetly, don't call
to confirm."`,
        choices: [
            {
                text: "Wire the money immediately since it's urgent and from your boss",
                correct: false,
                consequence: "bec",
                explanation: "Urgency plus a request to avoid verification is a classic sign of email compromise."
            },
            {
                text: "Verify with your boss through a separate, known channel before acting",
                correct: true,
                explanation: "Correct! Always confirm unusual money requests through a channel you already trust, not the email itself."
            },
            {
                text: "Reply to the same email asking for confirmation",
                correct: false,
                consequence: "bec",
                explanation: "Replying to the same thread doesn't help — if it's compromised, the attacker controls that inbox too."
            }
        ]
    },

    // ---------- LEVEL 10 (Hardest) ----------
    {
        title: "Level 10: AI Voice Clone Scam",
        text: `You get a call that sounds exactly like your mother's
voice, crying and saying she's been in an accident and
needs you to send money to an account right now.`,
        choices: [
            {
                text: "Send the money immediately since it sounds exactly like her",
                correct: false,
                consequence: "deepfake",
                explanation: "AI voice cloning can convincingly mimic loved ones' voices to create panic and urgency."
            },
            {
                text: "Hang up and call her back directly on her known number to verify",
                correct: true,
                explanation: "Correct! Always verify through an independent, known channel before sending money — voices can be faked."
            },
            {
                text: "Stay on the call, ask a few questions, and send money if the answers sound right",
                correct: false,
                consequence: "deepfake",
                explanation: "Scammers using AI voice tools can improvise convincing answers — only independent verification is safe."
            }
        ]
    }

];


// ===================== CONSEQUENCE SIMULATION LIBRARY =====================
// Purely cosmetic sequences: text + a progress bar animate inside the page.
// No real link is opened, no file is downloaded, no data ever leaves the
// browser, and no popup windows are created. It's all one <div> animating.
// ============================================================================

const consequenceLibrary = {

    redirect: {
        icon: "🌐",
        animation: "shake",
        steps: [
            "Opening link...",
            "Redirecting to an unfamiliar site...",
            "🚨 SIMULATED: In real life, this link could lead to a fake site built to steal your info."
        ]
    },

    malware: {
        icon: "🦠",
        animation: "glitch",
        steps: [
            "Opening file...",
            "Unusual activity detected...",
            "🚨 SIMULATED: In real life, a file like this could install malware or ransomware."
        ]
    },

    spread: {
        icon: "📤",
        animation: "pulse",
        steps: [
            "Sending to your contacts...",
            "Message forwarded to more people...",
            "🚨 SIMULATED: In real life, this scam could now spread to everyone in your contact list."
        ]
    },

    misinformation: {
        icon: "📢",
        animation: "pulse",
        steps: [
            "Sharing post...",
            "Shares and comments climbing fast...",
            "🚨 SIMULATED: In real life, false claims like this can reach thousands before being corrected."
        ]
    },

    breach: {
        icon: "🔓",
        animation: "flicker",
        steps: [
            "Alert dismissed...",
            "Unfamiliar device still active...",
            "🚨 SIMULATED: In real life, an ignored login attempt can lead to your account being taken over."
        ]
    },

    leak: {
        icon: "🔑",
        animation: "flicker",
        steps: [
            "Sending password...",
            "Message delivered...",
            "🚨 SIMULATED: In real life, a shared password can be misused by anyone who sees it."
        ]
    },

    wifi: {
        icon: "📶",
        animation: "shake",
        steps: [
            "Connecting to open network...",
            "Traffic passing through an unsecured connection...",
            "🚨 SIMULATED: In real life, someone on the same public Wi-Fi could intercept your data or saved logins."
        ]
    },

    qr: {
        icon: "📷",
        animation: "glitch",
        steps: [
            "Scanning code...",
            "Opening unknown link...",
            "🚨 SIMULATED: In real life, a malicious QR code could install harmful software or steal entered details."
        ]
    },

    techsupport: {
        icon: "🖥️",
        animation: "flicker",
        steps: [
            "Granting remote access...",
            "Unknown user now controlling the screen...",
            "🚨 SIMULATED: In real life, a fake support agent could steal files, install malware, or lock you out."
        ]
    },

    jobscam: {
        icon: "💸",
        animation: "pulse",
        steps: [
            "Sending payment...",
            "Payment confirmed...",
            "🚨 SIMULATED: In real life, this fee could disappear with no job ever materializing."
        ]
    },

    bec: {
        icon: "🏦",
        animation: "shake",
        steps: [
            "Preparing wire transfer...",
            "Transfer sent...",
            "🚨 SIMULATED: In real life, this money could go straight to a scammer's account with little chance of recovery."
        ]
    },

    deepfake: {
        icon: "🎙️",
        animation: "flicker",
        steps: [
            "Verifying voice...",
            "Sending money...",
            "🚨 SIMULATED: In real life, AI-cloned voices can convincingly imitate loved ones to pressure you into sending money."
        ]
    }

};


let currentScenario = 0;
let score = 0;


function startGame() {

    currentScenario = 0;
    score = 0;

    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");

    document.getElementById("game-screen").classList.remove("hidden");

    showScenario();
}


function showScenario() {

    const scenario = scenarios[currentScenario];

    document.getElementById("scenario-number").textContent =
        "Level " + (currentScenario + 1) +
        " of " + scenarios.length;

    document.getElementById("score").textContent =
        "Score: " + score;

    document.getElementById("scenario-title").textContent =
        scenario.title;

    document.getElementById("scenario-text").textContent =
        scenario.text;

    const choicesContainer =
        document.getElementById("choices");

    choicesContainer.innerHTML = "";

    document.getElementById("feedback").classList.add("hidden");
    document.getElementById("feedback").classList.remove("wrong");
    document.getElementById("consequence-overlay").classList.add("hidden");


    scenario.choices.forEach((choice, index) => {

        const button = document.createElement("button");

        button.textContent =
            String.fromCharCode(65 + index) + ". " + choice.text;

        button.classList.add("choice");

        button.onclick = function () {

            selectAnswer(choice);

        };

        choicesContainer.appendChild(button);

    });
}


function selectAnswer(choice) {

    const buttons =
        document.querySelectorAll(".choice");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (choice.correct) {

        score++;

        document.getElementById("score").textContent =
            "Score: " + score;

        revealFeedback(choice, "✅ Good Choice!", "continue");

    } else {

        // Wrong choice: play a short, clearly-labeled simulation first,
        // then let the player try the same level again.
        playConsequence(choice.consequence, function () {

            revealFeedback(choice, "⚠️ Think Again", "retry");

        });
    }
}


function revealFeedback(choice, title, mode) {

    const feedback = document.getElementById("feedback");
    const feedbackButton = document.getElementById("feedback-button");

    document.getElementById("feedback-title").textContent = title;

    document.getElementById("feedback-text").textContent =
        choice.explanation;

    if (mode === "retry") {

        feedback.classList.add("wrong");
        feedbackButton.textContent = "Try Again";
        feedbackButton.onclick = retryScenario;

    } else {

        feedback.classList.remove("wrong");
        feedbackButton.textContent = "Continue";
        feedbackButton.onclick = nextScenario;

    }

    feedback.classList.remove("hidden");
}


function retryScenario() {

    // Same level, same scenario — just re-enable the choices so
    // the player can pick again. Nothing advances until they get it right.
    document.getElementById("feedback").classList.add("hidden");
    document.getElementById("feedback").classList.remove("wrong");

    const buttons = document.querySelectorAll(".choice");

    buttons.forEach(button => {
        button.disabled = false;
    });
}


function playConsequence(type, onComplete) {

    const data = consequenceLibrary[type];

    // Safety net: if a choice has no matching consequence, skip straight
    // to the explanation instead of breaking the game.
    if (!data) {
        onComplete();
        return;
    }

    const overlay = document.getElementById("consequence-overlay");
    const icon = document.getElementById("consequence-icon");
    const line = document.getElementById("consequence-line");
    const barFill = document.querySelector(".consequence-bar-fill");

    overlay.className = "consequence-overlay " + data.animation;
    icon.textContent = data.icon;
    barFill.style.width = "0%";
    line.textContent = data.steps[0];

    overlay.classList.remove("hidden");

    let step = 0;
    const totalSteps = data.steps.length;

    const interval = setInterval(function () {

        step++;

        barFill.style.width = Math.min((step / totalSteps) * 100, 100) + "%";

        if (step < totalSteps) {
            line.textContent = data.steps[step];
        }

        if (step >= totalSteps) {

            clearInterval(interval);

            setTimeout(function () {

                overlay.classList.add("hidden");
                onComplete();

            }, 1100);
        }

    }, 950);
}


function nextScenario() {

    // Only reached when the current level was answered correctly.
    currentScenario++;

    if (currentScenario < scenarios.length) {

        showScenario();

    } else {

        showResults();

    }
}


function showResults() {

    document.getElementById("game-screen").classList.add("hidden");

    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("final-score").textContent =
        score + " / " + scenarios.length;


    let message;

    if (score === scenarios.length) {

        message =
            "Excellent! You demonstrated strong digital safety awareness.";

    } else if (score >= 6) {

        message =
            "Good job! You have a good understanding of digital safety.";

    } else {

        message =
            "Keep practicing! Digital safety skills improve with practice.";

    }

    document.getElementById("result-message").textContent =
        message;
}


function restartGame() {

    document.getElementById("result-screen").classList.add("hidden");

    document.getElementById("home-screen").classList.remove("hidden");

}
