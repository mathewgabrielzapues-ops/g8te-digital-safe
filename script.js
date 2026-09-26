const scenarios = [

    // ============================================================
    // EASY — Levels 1-15
    // ============================================================
    {
        title: "Level 1: Suspicious Prize Message",
        difficulty: "easy",
        text: `CONGRATULATIONS! You have won ₱10,000!
Click the link below to claim your prize immediately.`,
        choices: [
            { text: "Click the link immediately", correct: false, consequence: "redirect",
              explanation: "This is risky. Unexpected prizes and urgent links are common warning signs of scams." },
            { text: "Check the sender and verify the information first", correct: true,
              explanation: "Correct! Before clicking, verify who sent the message and whether the offer is legitimate." },
            { text: "Forward the message to your friends", correct: false, consequence: "spread",
              explanation: "Don't spread suspicious messages. Verify the information before sharing it." }
        ]
    },
    {
        title: "Level 2: Suspicious Download",
        difficulty: "easy",
        text: `You receive a message containing an unknown file.
The sender says: "Open this file. It's important!"`,
        choices: [
            { text: "Open the file immediately", correct: false, consequence: "malware",
              explanation: "Unknown files may contain malicious software. Avoid opening unexpected attachments." },
            { text: "Ask the sender what the file is and verify it", correct: true,
              explanation: "Correct! Verify unexpected files before opening or downloading them." },
            { text: "Download it and send it to other people", correct: false, consequence: "spread",
              explanation: "That could spread a malicious file to other people." }
        ]
    },
    {
        title: "Level 3: Fake News Check",
        difficulty: "easy",
        text: `You see a viral post claiming:
"BREAKING! Everyone will receive ₱20,000 from the government tomorrow!"
The post does not provide an official source.`,
        choices: [
            { text: "Share it because many people are posting it", correct: false, consequence: "misinformation",
              explanation: "Popularity does not prove that information is true." },
            { text: "Check official and reliable sources before sharing", correct: true,
              explanation: "Correct! Verify important claims using reliable sources before sharing them." },
            { text: "Believe it because the post has many likes", correct: false, consequence: "misinformation",
              explanation: "Likes and shares do not prove that information is accurate." }
        ]
    },
    {
        title: "Level 4: Account Security Alert",
        difficulty: "easy",
        text: `You receive an alert saying someone attempted
to log into your account from an unfamiliar device.`,
        choices: [
            { text: "Ignore the alert", correct: false, consequence: "breach",
              explanation: "Ignoring an unfamiliar login can leave your account at risk." },
            { text: "Check the account, secure it, and change your password if necessary", correct: true,
              explanation: "Correct! Review the activity and take appropriate steps to secure your account." },
            { text: "Send your password to a friend for help", correct: false, consequence: "leak",
              explanation: "Never share your password with other people." }
        ]
    },
    {
        title: "Level 5: \"Update Your Password\" Email",
        difficulty: "easy",
        text: `You get an email with a generic greeting: "Dear User,
your password has expired. Click here to update it now."`,
        choices: [
            { text: "Click the link and type in your current password", correct: false, consequence: "redirect",
              explanation: "Generic greetings and urgent password links are classic phishing signs." },
            { text: "Reply to the email with your current password to confirm your identity", correct: false, consequence: "leak",
              explanation: "Never send your password through email, even to 'confirm' something." },
            { text: "Go directly to the real site through your browser or app, not the email link", correct: true,
              explanation: "Correct! Type the address yourself or use the official app instead of clicking email links." }
        ]
    },
    {
        title: "Level 6: Fake Delivery Text",
        difficulty: "easy",
        text: `You get a text: "Your package could not be delivered.
Click here to reschedule: [link]" — but you're not expecting anything.`,
        choices: [
            { text: "Click the link to see what's going on", correct: false, consequence: "redirect",
              explanation: "Unexpected delivery texts with links are a common smishing (SMS phishing) tactic." },
            { text: "Check tracking directly through the courier's official app or website", correct: true,
              explanation: "Correct! Go straight to the official courier app instead of trusting a random text link." },
            { text: "Reply with your address to 'confirm' delivery", correct: false, consequence: "leak",
              explanation: "Replying with personal details to an unverified text can expose your information." }
        ]
    },
    {
        title: "Level 7: Fake Virus Pop-up",
        difficulty: "easy",
        text: `A pop-up appears while browsing: "WARNING! Your device
has 5 viruses! Click here to remove them now!"`,
        choices: [
            { text: "Click the pop-up to clean your device", correct: false, consequence: "malware",
              explanation: "Scary pop-ups from random websites are almost always fake and lead to malware." },
            { text: "Close the tab and run a scan with your own trusted antivirus if worried", correct: true,
              explanation: "Correct! Never trust security warnings from a random webpage — use your own tools instead." },
            { text: "Call the phone number shown in the pop-up", correct: false, consequence: "techsupport",
              explanation: "Numbers in scare-pop-ups usually connect to scammers, not real support." }
        ]
    },
    {
        title: "Level 8: Friend Suddenly Needs Money",
        difficulty: "easy",
        text: `A close friend messages you out of nowhere: "Hey, I'm in
trouble, can you send ₱2,000 to this number right now?"`,
        choices: [
            { text: "Send the money right away since it's your friend", correct: false, consequence: "leak",
              explanation: "Accounts get hacked often — attackers use them to message a victim's contacts for money." },
            { text: "Call or video call your friend directly to confirm before sending anything", correct: true,
              explanation: "Correct! Verify through a different channel — a hacked account can message anyone." },
            { text: "Reply asking for the account details and send it via chat", correct: false, consequence: "leak",
              explanation: "Sending money based only on a chat message, without verifying, is risky." }
        ]
    },
    {
        title: "Level 9: \"Confirm\" Your OTP by Replying",
        difficulty: "easy",
        text: `You receive a one-time PIN (OTP) you didn't request, followed
by a text: "This is [Bank]. Please reply with the code to cancel the transaction."`,
        choices: [
            { text: "Reply with the OTP to cancel the transaction", correct: false, consequence: "otp",
              explanation: "Banks never ask you to send back your OTP. Doing so hands over access to your account." },
            { text: "Ignore the request and contact your bank directly using their official hotline", correct: true,
              explanation: "Correct! Never share an OTP with anyone — contact your bank through official channels instead." },
            { text: "Forward the OTP to the number that texted you 'to be safe'", correct: false, consequence: "otp",
              explanation: "Forwarding an OTP gives an attacker exactly what they need to access your account." }
        ]
    },
    {
        title: "Level 10: The \"Which Character Are You?\" Quiz",
        difficulty: "easy",
        text: `A fun-looking quiz app asks for your full name, birthdate,
and your mother's maiden name to reveal "your personality type."`,
        choices: [
            { text: "Fill it out completely — it's just for fun", correct: false, consequence: "misinformation",
              explanation: "Those exact details are commonly used as security-question answers by real banks and services." },
            { text: "Skip it or only give information that isn't sensitive", correct: true,
              explanation: "Correct! Be cautious with quizzes asking for personal details used in security questions." },
            { text: "Share the quiz link with your family so they can also enter their details", correct: false, consequence: "spread",
              explanation: "Spreading data-harvesting quizzes puts other people's information at risk too." }
        ]
    },
    {
        title: "Level 11: Caller Asking for Your PIN",
        difficulty: "easy",
        text: `Someone calls claiming to be from your bank: "We just need to
verify your card PIN to secure your account."`,
        choices: [
            { text: "Give them your PIN since they said they're from the bank", correct: false, consequence: "otp",
              explanation: "Banks never need your PIN over the phone — this is always a scam attempt." },
            { text: "Refuse, hang up, and call the bank's official number yourself", correct: true,
              explanation: "Correct! No legitimate bank employee will ever ask for your PIN over a call." },
            { text: "Give them the first two digits only, thinking that's safer", correct: false, consequence: "otp",
              explanation: "Even partial PIN or password information should never be shared over the phone." }
        ]
    },
    {
        title: "Level 12: The invoice.exe Attachment",
        difficulty: "easy",
        text: `You get an email from an unfamiliar address with the subject
"Overdue Invoice" and an attachment named invoice.exe.`,
        choices: [
            { text: "Open the attachment to check the invoice", correct: false, consequence: "malware",
              explanation: "A .exe file is a program, not a document — opening it can install malware instantly." },
            { text: "Delete the email and don't open the attachment", correct: true,
              explanation: "Correct! Executable attachments from unknown senders should never be opened." },
            { text: "Forward it to a coworker to open instead", correct: false, consequence: "spread",
              explanation: "Passing a suspicious file to someone else just spreads the risk." }
        ]
    },
    {
        title: "Level 13: Free Followers, Just Log In",
        difficulty: "easy",
        text: `An ad promises: "Get 10,000 free followers instantly!
Just enter your social media username and password here."`,
        choices: [
            { text: "Enter your login details to get free followers", correct: false, consequence: "leak",
              explanation: "Third-party sites asking for your password are almost always designed to steal your account." },
            { text: "Ignore it — no legitimate service needs your password to grow followers", correct: true,
              explanation: "Correct! Real platforms never require you to hand over your password to another site." },
            { text: "Enter a similar-looking password instead of your real one", correct: false, consequence: "leak",
              explanation: "Even a 'fake' password attempt teaches you to trust the scam — best to avoid the site entirely." }
        ]
    },
    {
        title: "Level 14: Pay This \"Customs Fee\" to Release Your Item",
        difficulty: "easy",
        text: `A text says: "Your international package is held at customs.
Pay a ₱150 release fee here: [link]" You weren't expecting a package.`,
        choices: [
            { text: "Pay the small fee through the link — it's not much money", correct: false, consequence: "redirect",
              explanation: "Small, urgent payment requests through random links are a common scam pattern." },
            { text: "Ignore it and check directly with the courier if you're expecting anything", correct: true,
              explanation: "Correct! Verify independently rather than paying through an unsolicited link." },
            { text: "Click the link just to see the details first", correct: false, consequence: "redirect",
              explanation: "Even 'just looking' can lead to a fake site designed to steal your card details." }
        ]
    },
    {
        title: "Level 15: The Pop-up That Wants Two Things",
        difficulty: "easy",
        text: `While reading an article, a pop-up appears: "Allow notifications
to continue reading" and also prompts a file download in the background.`,
        choices: [
            { text: "Click Allow and let the download continue", correct: false, consequence: "malware",
              explanation: "Sites that pair notification prompts with sneaky downloads are usually pushing unwanted software." },
            { text: "Close the tab without clicking anything", correct: true,
              explanation: "Correct! When a site pressures you with pop-ups and surprise downloads, leave immediately." },
            { text: "Allow notifications but cancel the download", correct: false, consequence: "malware",
              explanation: "Allowing notifications from an untrustworthy site can still lead to spammy or malicious alerts later." }
        ]
    },

    // ============================================================
    // MEDIUM — Levels 16-30
    // ============================================================
    {
        title: "Level 16: Public Wi-Fi Banking",
        difficulty: "medium",
        text: `You're at a coffee shop. A free network called
"Free_Cafe_WiFi" has no password. You need to check
your bank balance right now.`,
        choices: [
            { text: "Connect and log into your bank app right away", correct: false, consequence: "wifi",
              explanation: "Open, unsecured networks make it easier for attackers to intercept your data." },
            { text: "Use your mobile data or a trusted network instead", correct: true,
              explanation: "Correct! Avoid sensitive logins like banking on open public Wi-Fi." },
            { text: "Connect to the Wi-Fi anyway, just to browse social media first", correct: false, consequence: "wifi",
              explanation: "Even non-banking activity on an unsecured network can expose saved logins and sessions." }
        ]
    },
    {
        title: "Level 17: QR Code Scam",
        difficulty: "medium",
        text: `You see a flyer taped to a pole offering a
"free parking permit" — just scan the QR code to claim it.`,
        choices: [
            { text: "Scan it and follow the link that opens", correct: false, consequence: "qr",
              explanation: "Unverified QR codes can lead to malicious sites or trigger harmful downloads." },
            { text: "Look up the official parking authority instead of scanning random codes", correct: true,
              explanation: "Correct! Go to a trusted, official source rather than an unverified QR code." },
            { text: "Scan it and enter your card details to 'verify' your identity", correct: false, consequence: "qr",
              explanation: "Never enter payment or personal details after scanning an unverified QR code." }
        ]
    },
    {
        title: "Level 18: The Sponsored Bank Link",
        difficulty: "medium",
        text: `You search for your bank online and click the top "Sponsored"
result. The page looks identical to your bank's real site.`,
        choices: [
            { text: "Log in normally since it looks exactly the same", correct: false, consequence: "redirect",
              explanation: "Sponsored/ad links can be bought by scammers using a lookalike domain — appearance isn't proof." },
            { text: "Check the URL carefully or type the bank's address in yourself", correct: true,
              explanation: "Correct! Always verify the actual domain, or better, navigate directly instead of clicking ads." },
            { text: "Log in, and if it fails, just try again", correct: false, consequence: "redirect",
              explanation: "Entering your credentials at all on an unverified page can hand them straight to an attacker." }
        ]
    },
    {
        title: "Level 19: Online Partner Needs Emergency Funds",
        difficulty: "medium",
        text: `You've been chatting for weeks with someone you met online.
You've never video-called. They suddenly say they're stranded
and need ₱15,000 urgently to come see you.`,
        choices: [
            { text: "Send the money — they clearly need help", correct: false, consequence: "romance",
              explanation: "Requests for money from someone you've never verified in person or on video are a classic romance scam pattern." },
            { text: "Ask to video call first and decline sending money until you can verify who they really are", correct: true,
              explanation: "Correct! Verify identity independently and be cautious of anyone online who asks for money before meeting." },
            { text: "Send a smaller amount to help, just in case it's real", correct: false, consequence: "romance",
              explanation: "Even 'smaller' amounts sent to an unverified online contact can be the start of repeated requests." }
        ]
    },
    {
        title: "Level 20: The Scary Antivirus Scan",
        difficulty: "medium",
        text: `A downloaded "free antivirus" app scans your phone and reports
"47 infections found!" then asks you to buy the full version immediately.`,
        choices: [
            { text: "Buy the full version right away to fix the infections", correct: false, consequence: "malware",
              explanation: "Fake antivirus apps often invent alarming results to pressure you into paying for nothing." },
            { text: "Uninstall the app and check reviews or use a reputable, well-known antivirus instead", correct: true,
              explanation: "Correct! Be skeptical of dramatic scan results and only use verified, reputable security tools." },
            { text: "Enter your card details to unlock 'premium protection'", correct: false, consequence: "malware",
              explanation: "Entering payment details into an unverified app can lead to fraudulent charges." }
        ]
    },
    {
        title: "Level 21: The USB Drive in the Parking Lot",
        difficulty: "medium",
        text: `You find a USB drive labeled "Salary Info 2026" in the office
parking lot. You're curious what's on it.`,
        choices: [
            { text: "Plug it into your work computer to see what's inside", correct: false, consequence: "malware",
              explanation: "Dropped USB drives are a known attack method — plugging one in can silently install malware." },
            { text: "Hand it to your IT or security team without plugging it in", correct: true,
              explanation: "Correct! Unknown USB drives should be handed to security professionals, never plugged in directly." },
            { text: "Plug it into a personal laptop instead, just to be safe", correct: false, consequence: "malware",
              explanation: "The device itself can be malicious regardless of which computer it's plugged into." }
        ]
    },
    {
        title: "Level 22: \"IT\" Calls Asking for Your Password",
        difficulty: "medium",
        text: `Someone calls saying: "This is IT support. We're fixing an
issue with your account, we just need your current password to proceed."`,
        choices: [
            { text: "Give them your password so they can fix the issue", correct: false, consequence: "techsupport",
              explanation: "Legitimate IT departments never need your actual password to troubleshoot an account." },
            { text: "Decline and verify the request through official internal channels", correct: true,
              explanation: "Correct! Verify any password request independently — real IT staff have other ways to help." },
            { text: "Give them a hint about your password instead of the full thing", correct: false, consequence: "techsupport",
              explanation: "Even partial hints can help an attacker guess or reset your password." }
        ]
    },
    {
        title: "Level 23: Charity Text After a Disaster",
        difficulty: "medium",
        text: `Right after a major typhoon hits the news, you get a text:
"Help typhoon victims now! Donate via GCash to this number." with a
donation link.`,
        choices: [
            { text: "Donate right away through the link since the need is urgent", correct: false, consequence: "donation",
              explanation: "Scammers move fast after disasters, creating fake donation drives before real ones are even set up." },
            { text: "Donate through a verified, well-known relief organization instead", correct: true,
              explanation: "Correct! Give through official, verifiable organizations rather than unsolicited links or numbers." },
            { text: "Forward the donation link to friends so they can help too", correct: false, consequence: "spread",
              explanation: "Sharing an unverified donation link can spread the scam to people who trust you." }
        ]
    },
    {
        title: "Level 24: The Too-Good Marketplace Deal",
        difficulty: "medium",
        text: `An online seller offers a brand-new phone at half the market
price but insists on payment only through a personal wallet transfer,
with no buyer protection or meet-up option.`,
        choices: [
            { text: "Pay the full amount upfront through the wallet transfer", correct: false, consequence: "investment",
              explanation: "Deals that avoid any buyer protection and demand upfront wallet transfers are a common resale scam." },
            { text: "Insist on a protected payment method or a safe, in-person meet-up", correct: true,
              explanation: "Correct! Use payment methods with buyer protection, and be wary of deals that avoid them." },
            { text: "Send half the payment first to 'build trust'", correct: false, consequence: "investment",
              explanation: "Partial payments to an unverified seller can still be lost entirely with nothing to show for it." }
        ]
    },
    {
        title: "Level 25: \"Your SIM Will Be Replaced\"",
        difficulty: "medium",
        text: `You get a text from your telecom provider: "Your SIM
replacement request has been received. Reply YES to confirm."
You never requested a SIM replacement.`,
        choices: [
            { text: "Reply YES, thinking it might be a mistake that needs confirming", correct: false, consequence: "simswap",
              explanation: "Confirming a SIM swap you didn't request can let an attacker take over your phone number." },
            { text: "Reply NO or contact your provider directly to report the unauthorized request", correct: true,
              explanation: "Correct! Report unrequested SIM swap attempts immediately — they're often used to hijack your accounts." },
            { text: "Ignore it completely and assume it will resolve itself", correct: false, consequence: "simswap",
              explanation: "Ignoring an active SIM swap attempt gives the attacker time to complete the takeover." }
        ]
    },
    {
        title: "Level 26: OTP for \"Customer Service\"",
        difficulty: "medium",
        text: `You contacted an online shop's "customer service" about a
refund. They ask you to read them the OTP that was just sent to your
phone "to process the refund."`,
        choices: [
            { text: "Read them the OTP so they can process your refund", correct: false, consequence: "otp",
              explanation: "No refund process legitimately requires your OTP — this is a takeover attempt disguised as support." },
            { text: "Refuse and contact the shop through its official, verified support channel", correct: true,
              explanation: "Correct! Never share an OTP, even with someone claiming to help you get a refund." },
            { text: "Share only the last two digits of the OTP", correct: false, consequence: "otp",
              explanation: "Partial OTP sharing can still be combined with other information to complete an attack." }
        ]
    },
    {
        title: "Level 27: Guaranteed 20% Weekly Returns",
        difficulty: "medium",
        text: `A group chat promotes an "exclusive investment club" promising
guaranteed 20% returns every week, and rewards you for recruiting
new investors.`,
        choices: [
            { text: "Invest a starting amount since the returns sound great", correct: false, consequence: "investment",
              explanation: "Guaranteed high returns with recruitment rewards are hallmarks of a pyramid or Ponzi scheme." },
            { text: "Research the company's legitimacy and avoid schemes that rely on recruiting others", correct: true,
              explanation: "Correct! Legitimate investments never guarantee returns or depend on recruiting new members." },
            { text: "Invest a small 'test' amount first to see if it's real", correct: false, consequence: "investment",
              explanation: "Scammers often pay out small early 'returns' specifically to build trust before bigger losses." }
        ]
    },
    {
        title: "Level 28: Send Your ID Before the Interview",
        difficulty: "medium",
        text: `An "employer" messages you about a job and asks you to send
a copy of your government ID and a screenshot of your bank account
before scheduling any interview.`,
        choices: [
            { text: "Send the documents since you want the job", correct: false, consequence: "jobscam",
              explanation: "Legitimate employers don't need your ID and bank details before even interviewing you." },
            { text: "Decline and ask to proceed with a normal interview process first", correct: true,
              explanation: "Correct! Sensitive documents should only be shared later in a verified hiring process, if at all." },
            { text: "Send the ID but blur out some of the numbers", correct: false, consequence: "jobscam",
              explanation: "Even partially obscured ID documents can provide more information than necessary to an unverified party." }
        ]
    },
    {
        title: "Level 29: A Cloned Profile Asks for Help",
        difficulty: "medium",
        text: `A social media account identical to your cousin's — same
photos, same name — messages you: "I'm stuck abroad, please send
₱5,000 to this account, I'll explain later."`,
        choices: [
            { text: "Send the money quickly since it looks exactly like your cousin", correct: false, consequence: "romance",
              explanation: "Cloned profiles copy photos and names perfectly — appearance alone doesn't confirm identity." },
            { text: "Contact your cousin directly through a known number or in person to verify", correct: true,
              explanation: "Correct! Always verify urgent money requests through an independent, trusted channel." },
            { text: "Ask the account a personal question to test them, then send money if they answer well", correct: false, consequence: "romance",
              explanation: "Attackers can gather personal details from public profiles to answer 'test' questions convincingly." }
        ]
    },
    {
        title: "Level 30: The Coupon Extension",
        difficulty: "medium",
        text: `You install a browser extension promising automatic coupons
at checkout. Afterward, your homepage and search engine change on
their own, and ads appear everywhere.`,
        choices: [
            { text: "Keep using it since the coupons are convenient", correct: false, consequence: "extension",
              explanation: "Extensions that hijack your browser settings are often harvesting your browsing data or injecting ads." },
            { text: "Remove the extension and reset your browser settings", correct: true,
              explanation: "Correct! Uninstall extensions that behave suspiciously and restore your original settings." },
            { text: "Just change the settings back manually and keep the extension installed", correct: false, consequence: "extension",
              explanation: "The extension can keep changing settings back or collecting data even if you reset it once." }
        ]
    },

    // ============================================================
    // HARD — Levels 31-50
    // ============================================================
    {
        title: "Level 31: Fake Tech Support Call",
        difficulty: "hard",
        text: `You get a call: "This is Microsoft Support.
Your computer has a virus. Let us remotely access
it to fix it for you."`,
        choices: [
            { text: "Give them remote access right away", correct: false, consequence: "techsupport",
              explanation: "Legitimate companies don't cold-call you demanding remote access to your device." },
            { text: "Hang up and contact the company directly through official channels", correct: true,
              explanation: "Correct! Verify through official, independently-found contact info — never the caller's." },
            { text: "Give them your antivirus login so they can 'check' it", correct: false, consequence: "techsupport",
              explanation: "Sharing account access with an unverified caller can let them take control of your system." }
        ]
    },
    {
        title: "Level 32: Fake Job Offer",
        difficulty: "hard",
        text: `You're offered a high-paying remote job. HR asks
you to pay a small "training fee" before you can start,
with a promise of it being refunded on your first payday.`,
        choices: [
            { text: "Pay the fee to secure the job", correct: false, consequence: "jobscam",
              explanation: "Legitimate employers do not ask new hires to pay money to start working." },
            { text: "Research the company and refuse to pay any upfront fee", correct: true,
              explanation: "Correct! Any job that requires you to pay first is a major red flag." },
            { text: "Borrow money from a friend to pay quickly since spots are 'limited'", correct: false, consequence: "jobscam",
              explanation: "Urgency and scarcity pressure are classic scam tactics — slow down and verify instead." }
        ]
    },
    {
        title: "Level 33: Business Email Compromise",
        difficulty: "hard",
        text: `An email appears to be from your boss, urgently asking
you to wire ₱150,000 to a "new supplier account" today.
It's marked: "Confidential — handle discreetly, don't call
to confirm."`,
        choices: [
            { text: "Wire the money immediately since it's urgent and from your boss", correct: false, consequence: "bec",
              explanation: "Urgency plus a request to avoid verification is a classic sign of email compromise." },
            { text: "Verify with your boss through a separate, known channel before acting", correct: true,
              explanation: "Correct! Always confirm unusual money requests through a channel you already trust, not the email itself." },
            { text: "Reply to the same email asking for confirmation", correct: false, consequence: "bec",
              explanation: "Replying to the same thread doesn't help — if it's compromised, the attacker controls that inbox too." }
        ]
    },
    {
        title: "Level 34: AI Voice Clone Scam",
        difficulty: "hard",
        text: `You get a call that sounds exactly like your mother's
voice, crying and saying she's been in an accident and
needs you to send money to an account right now.`,
        choices: [
            { text: "Send the money immediately since it sounds exactly like her", correct: false, consequence: "deepfake",
              explanation: "AI voice cloning can convincingly mimic loved ones' voices to create panic and urgency." },
            { text: "Hang up and call her back directly on her known number to verify", correct: true,
              explanation: "Correct! Always verify through an independent, known channel before sending money — voices can be faked." },
            { text: "Stay on the call, ask a few questions, and send money if the answers sound right", correct: false, consequence: "deepfake",
              explanation: "Scammers using AI voice tools can improvise convincing answers — only independent verification is safe." }
        ]
    },
    {
        title: "Level 35: The Deepfake CEO Video Call",
        difficulty: "hard",
        text: `During a video call that looks and sounds exactly like your
CEO, you're told to urgently process a ₱500,000 payment to a new
account before the call abruptly ends: "I have another meeting, just
handle it."`,
        choices: [
            { text: "Process the payment immediately since you saw and heard the CEO", correct: false, consequence: "deepfake",
              explanation: "Real-time deepfake video and audio can convincingly impersonate executives on live calls." },
            { text: "Pause the payment and verify the request through a separate, known channel", correct: true,
              explanation: "Correct! High-value, urgent requests should always be verified independently, even from a face you recognize." },
            { text: "Ask the caller one verification question, then proceed if they answer correctly", correct: false, consequence: "deepfake",
              explanation: "Attackers can research executives well enough to answer casual verification questions convincingly." }
        ]
    },
    {
        title: "Level 36: \"This is the Police\" Threat Call",
        difficulty: "hard",
        text: `A caller claims to be a police officer: "There's a warrant
for your arrest due to unpaid fines. Pay ₱30,000 now via transfer or
officers will arrive at your home."`,
        choices: [
            { text: "Pay immediately to avoid arrest", correct: false, consequence: "impersonation",
              explanation: "Real law enforcement never demands instant payment over the phone to avoid arrest." },
            { text: "Hang up and verify by calling the police department directly through an official number", correct: true,
              explanation: "Correct! Fear-based demands for immediate payment are a hallmark of impersonation scams — verify independently." },
            { text: "Negotiate the amount down and pay a smaller sum to be safe", correct: false, consequence: "impersonation",
              explanation: "Negotiating still confirms to the scammer that the pressure tactic is working." }
        ]
    },
    {
        title: "Level 37: The Pixel-Perfect Bank Clone",
        difficulty: "hard",
        text: `You click a link and land on a page that looks identical to
your bank, complete with a padlock icon, but the address is
"yourbank-secure-login.com" instead of your bank's real domain.`,
        choices: [
            { text: "Log in since the page looks exactly right and shows a padlock", correct: false, consequence: "redirect",
              explanation: "A padlock only means the connection is encrypted — it says nothing about whether the site itself is genuine." },
            { text: "Check the exact domain name carefully and navigate to the real site directly instead", correct: true,
              explanation: "Correct! Always verify the exact domain — convincing clones rely on subtle URL differences going unnoticed." },
            { text: "Log in, and if something seems off afterward, change your password then", correct: false, consequence: "redirect",
              explanation: "By the time you notice something is wrong, your credentials may already be captured." }
        ]
    },
    {
        title: "Level 38: Ransomware From a \"Resume\"",
        difficulty: "hard",
        text: `As an HR staff member, you open an applicant's "resume"
attachment. Moments later, files across your computer become
unreadable and a message demands payment to restore them.`,
        choices: [
            { text: "Pay the ransom quickly to get the files back", correct: false, consequence: "ransomware",
              explanation: "Paying a ransom doesn't guarantee file recovery and funds further attacks." },
            { text: "Disconnect from the network immediately and report it to IT/security", correct: true,
              explanation: "Correct! Isolate the device and involve security professionals right away rather than paying or continuing to use it." },
            { text: "Keep working on other files while deciding what to do", correct: false, consequence: "ransomware",
              explanation: "Continuing to use a compromised device can let ransomware spread further across connected systems." }
        ]
    },
    {
        title: "Level 39: The Helpdesk That Knows Your Details",
        difficulty: "hard",
        text: `Someone calls claiming to be your company's IT helpdesk, and
they already know your full name, department, and manager's name
(likely gathered from LinkedIn). They ask you to reset your password
and read them the new one "to sync your account."`,
        choices: [
            { text: "Reset it and read them the new password since they clearly know your details", correct: false, consequence: "techsupport",
              explanation: "Publicly available details like your name or manager don't prove someone is really from IT." },
            { text: "Decline and verify the request through your company's official IT contact process", correct: true,
              explanation: "Correct! Knowing personal details isn't proof of identity — always verify through official channels." },
            { text: "Reset the password but don't tell them, just to be cautious", correct: false, consequence: "techsupport",
              explanation: "Continuing to engage and act on the request, even partially, keeps the attacker's plan moving forward." }
        ]
    },
    {
        title: "Level 40: The \"Data Compliance\" Email",
        difficulty: "hard",
        text: `An email from what looks like your company's domain says:
"Privacy compliance update: verify your data within 24 hours or your
account will be suspended," and links to a form asking for your ID,
address, and bank details.`,
        choices: [
            { text: "Fill out the form quickly to avoid account suspension", correct: false, consequence: "bec",
              explanation: "Legitimate compliance requests never demand your bank details through a rushed, threatening email." },
            { text: "Verify the email's authenticity with your IT/security team before clicking anything", correct: true,
              explanation: "Correct! Check sender domains carefully and confirm with IT before acting on urgent compliance emails." },
            { text: "Fill in some fields but leave the bank details blank", correct: false, consequence: "bec",
              explanation: "Submitting any personal information through an unverified form still puts you at risk." }
        ]
    },
    {
        title: "Level 41: The Certificate Warning You Almost Ignored",
        difficulty: "hard",
        text: `Visiting a site you use often, your browser suddenly shows:
"Your connection is not private — certificate error." You're in a
hurry to log in.`,
        choices: [
            { text: "Click 'Proceed anyway' since you use this site all the time", correct: false, consequence: "mitm",
              explanation: "A sudden certificate warning on a familiar site can signal your connection is being intercepted." },
            { text: "Stop, close the page, and try again later or through a different network", correct: true,
              explanation: "Correct! Certificate warnings should never be dismissed, especially on sites you normally trust." },
            { text: "Proceed anyway, but avoid entering your password", correct: false, consequence: "mitm",
              explanation: "Even browsing without logging in can still expose other data if the connection is compromised." }
        ]
    },
    {
        title: "Level 42: Buy Your Own \"Company-Approved\" Equipment",
        difficulty: "hard",
        text: `A new remote job asks you to purchase a laptop through a
specific link they provide, promising full reimbursement once you
start — the link is not the official retailer's site.`,
        choices: [
            { text: "Buy it through their link since it's for the new job", correct: false, consequence: "jobscam",
              explanation: "Being directed to buy equipment through a non-official link is a common tactic to steal payment or money outright." },
            { text: "Decline and ask if the company can provide equipment directly through normal channels", correct: true,
              explanation: "Correct! Legitimate employers provide or reimburse equipment through verifiable, normal purchasing processes." },
            { text: "Buy a cheaper version through the link to minimize risk", correct: false, consequence: "jobscam",
              explanation: "Any purchase through an unverified link set up by the 'employer' carries the same underlying risk." }
        ]
    },
    {
        title: "Level 43: The Swapped Restaurant QR Code",
        difficulty: "hard",
        text: `At a restaurant, you scan the QR code on your table to view
the menu, but it leads to a payment page asking for your card details
before showing any menu — unusual for this restaurant.`,
        choices: [
            { text: "Enter your card details since it's a QR code from the restaurant table", correct: false, consequence: "qr",
              explanation: "Physical QR codes can be covered with a sticker by attackers, redirecting to a fake payment page." },
            { text: "Ask staff for a physical menu or verify the restaurant's official ordering system", correct: true,
              explanation: "Correct! An unusual request for payment before even seeing a menu is a red flag — verify with staff directly." },
            { text: "Scan it again to see if the same page appears, then decide", correct: false, consequence: "qr",
              explanation: "Rescanning doesn't verify legitimacy — a tampered QR sticker will lead to the same fake page every time." }
        ]
    },
    {
        title: "Level 44: The Old Password Still Works Somewhere",
        difficulty: "hard",
        text: `You get an alert that someone tried logging into a shopping
account using a password you used years ago on a different, now-breached
site.`,
        choices: [
            { text: "Ignore it since that old account doesn't matter anymore", correct: false, consequence: "breach",
              explanation: "Attackers reuse leaked passwords across many sites (credential stuffing) — reused passwords put current accounts at risk too." },
            { text: "Change that password everywhere it's still used and enable two-factor authentication", correct: true,
              explanation: "Correct! Update reused passwords immediately and add 2FA wherever possible to block credential-stuffing attempts." },
            { text: "Just change the password on the one account that got the alert", correct: false, consequence: "breach",
              explanation: "If the same old password is reused elsewhere, those other accounts remain just as vulnerable." }
        ]
    },
    {
        title: "Level 45: The Update That Asks You to Disable Antivirus",
        difficulty: "hard",
        text: `A pop-up claims a critical update is needed for your work
software, but instructs you to first disable your antivirus "for
compatibility" before installing.`,
        choices: [
            { text: "Disable your antivirus and install the update as instructed", correct: false, consequence: "malware",
              explanation: "Legitimate updates never require disabling your security software first — that's a way to sneak in malware undetected." },
            { text: "Refuse, and verify the update through your official software vendor or IT department", correct: true,
              explanation: "Correct! Confirm updates through official sources, and never disable security tools on request from a pop-up." },
            { text: "Disable antivirus temporarily, install it, then turn antivirus back on right after", correct: false, consequence: "malware",
              explanation: "Even a brief window with antivirus disabled is enough time for malware to install and hide itself." }
        ]
    },
    {
        title: "Level 46: Vendor Says to Update Banking Details",
        difficulty: "hard",
        text: `An email from your long-time supplier's real account (which
was actually compromised) says: "We've changed banks — please update
our account number for all future invoice payments."`,
        choices: [
            { text: "Update the banking details as requested since it's from their real email", correct: false, consequence: "bec",
              explanation: "A genuine email account can still be compromised — the source alone doesn't guarantee the request is legitimate." },
            { text: "Call the supplier directly using a known phone number to confirm the change", correct: true,
              explanation: "Correct! Always verify banking-detail changes by phone through a previously known contact, not through email alone." },
            { text: "Update the details but only for the next payment, to be cautious", correct: false, consequence: "bec",
              explanation: "Even one payment sent to a fraudulent account can result in a significant, often unrecoverable, loss." }
        ]
    },
    {
        title: "Level 47: The Realistic \"Security Team\" Email",
        difficulty: "hard",
        text: `An email with your company's exact logo and formatting says:
"Security Team: Verify your credentials via the link below within 2
hours or lose access," matching the style of past legitimate emails.`,
        choices: [
            { text: "Click the link and verify your credentials before the deadline", correct: false, consequence: "bec",
              explanation: "Convincing branding and urgency are exactly what makes sophisticated phishing emails effective." },
            { text: "Check the sender's actual email address and confirm with IT before clicking anything", correct: true,
              explanation: "Correct! Verify the real sender address and confirm through IT — visual accuracy alone doesn't prove legitimacy." },
            { text: "Forward it to coworkers to ask if they got the same email, then click it", correct: false, consequence: "bec",
              explanation: "Asking around is good instinct, but clicking the link afterward still carries the same risk." }
        ]
    },
    {
        title: "Level 48: The Caller Who Knows Your Recent Purchase",
        difficulty: "hard",
        text: `A caller claiming to be from your bank already knows your
name, the last 4 digits of your card, and your most recent purchase.
They ask for the OTP to "reverse a fraudulent charge."`,
        choices: [
            { text: "Give them the OTP since they clearly have real account information", correct: false, consequence: "otp",
              explanation: "Attackers can obtain partial account details from data leaks — knowing some details doesn't make a caller legitimate." },
            { text: "Hang up and call your bank back using the number on your card", correct: true,
              explanation: "Correct! Always call back using a number you already trust — never continue with an unsolicited caller, however convincing." },
            { text: "Ask them to verify more details first, then give the OTP if they get it right", correct: false, consequence: "otp",
              explanation: "An attacker with leaked account data can often pass additional verification questions too." }
        ]
    },
    {
        title: "Level 49: The Cloned Charity Crowdfunding Page",
        difficulty: "hard",
        text: `You find a crowdfunding page using the exact name, logo, and
photos of a real, well-known charity, but the donation account details
are slightly different from the charity's official ones.`,
        choices: [
            { text: "Donate through the page since the branding matches the real charity", correct: false, consequence: "donation",
              explanation: "Cloned pages can copy branding perfectly while routing donations to a completely different, fraudulent account." },
            { text: "Go to the charity's official website directly to confirm and donate there", correct: true,
              explanation: "Correct! Always donate through a charity's verified official channels rather than a page found elsewhere." },
            { text: "Donate a small amount to test if it reaches the charity", correct: false, consequence: "donation",
              explanation: "Any amount sent to an unverified account is simply lost — there's no safe way to 'test' a fraudulent donation page." }
        ]
    },
    {
        title: "Level 50: \"Just Borrow Your Badge for Five Minutes\"",
        difficulty: "hard",
        text: `A coworker under pressure asks to borrow your access badge
and login "just for five minutes" to finish an urgent report using
your access level, since theirs was recently restricted.`,
        choices: [
            { text: "Lend your badge and login since it's a coworker and it's urgent", correct: false, consequence: "insider",
              explanation: "Sharing access credentials, even with a trusted coworker, breaks accountability and can enable serious insider misuse." },
            { text: "Decline and suggest they get proper access restored through official channels", correct: true,
              explanation: "Correct! Never share access badges or logins — legitimate access issues should go through official processes." },
            { text: "Let them use your badge but stay and watch what they do", correct: false, consequence: "insider",
              explanation: "Supervising doesn't remove the risk — the access is still being used outside of its intended owner and audit trail." }
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
        icon: "🌐", animation: "shake",
        steps: [ "Opening link...", "Redirecting to an unfamiliar site...",
            "🚨 SIMULATED: In real life, this link could lead to a fake site built to steal your info." ]
    },
    malware: {
        icon: "🦠", animation: "glitch",
        steps: [ "Opening file...", "Unusual activity detected...",
            "🚨 SIMULATED: In real life, a file like this could install malware or ransomware." ]
    },
    spread: {
        icon: "📤", animation: "pulse",
        steps: [ "Sending to your contacts...", "Message forwarded to more people...",
            "🚨 SIMULATED: In real life, this scam could now spread to everyone in your contact list." ]
    },
    misinformation: {
        icon: "📢", animation: "pulse",
        steps: [ "Sharing post...", "Shares and comments climbing fast...",
            "🚨 SIMULATED: In real life, false claims like this can reach thousands before being corrected." ]
    },
    breach: {
        icon: "🔓", animation: "flicker",
        steps: [ "Alert dismissed...", "Unfamiliar device still active...",
            "🚨 SIMULATED: In real life, an ignored login attempt can lead to your account being taken over." ]
    },
    leak: {
        icon: "🔑", animation: "flicker",
        steps: [ "Sending password...", "Message delivered...",
            "🚨 SIMULATED: In real life, a shared password can be misused by anyone who sees it." ]
    },
    wifi: {
        icon: "📶", animation: "shake",
        steps: [ "Connecting to open network...", "Traffic passing through an unsecured connection...",
            "🚨 SIMULATED: In real life, someone on the same public Wi-Fi could intercept your data or saved logins." ]
    },
    qr: {
        icon: "📷", animation: "glitch",
        steps: [ "Scanning code...", "Opening unknown link...",
            "🚨 SIMULATED: In real life, a malicious QR code could install harmful software or steal entered details." ]
    },
    techsupport: {
        icon: "🖥️", animation: "flicker",
        steps: [ "Granting remote access...", "Unknown user now controlling the screen...",
            "🚨 SIMULATED: In real life, a fake support agent could steal files, install malware, or lock you out." ]
    },
    jobscam: {
        icon: "💸", animation: "pulse",
        steps: [ "Sending payment...", "Payment confirmed...",
            "🚨 SIMULATED: In real life, this fee could disappear with no job ever materializing." ]
    },
    bec: {
        icon: "🏦", animation: "shake",
        steps: [ "Preparing wire transfer...", "Transfer sent...",
            "🚨 SIMULATED: In real life, this money could go straight to a scammer's account with little chance of recovery." ]
    },
    deepfake: {
        icon: "🎙️", animation: "flicker",
        steps: [ "Verifying voice...", "Sending money...",
            "🚨 SIMULATED: In real life, AI-cloned voices and videos can convincingly imitate real people to pressure you into sending money." ]
    },
    otp: {
        icon: "🔢", animation: "flicker",
        steps: [ "Sending the code...", "Code used to access account...",
            "🚨 SIMULATED: In real life, an OTP is like a master key — sharing it can let attackers in even with 2FA enabled." ]
    },
    romance: {
        icon: "💔", animation: "pulse",
        steps: [ "Sending money...", "Contact goes silent...",
            "🚨 SIMULATED: In real life, online-only relationships that suddenly ask for money are a leading cause of financial scam losses." ]
    },
    investment: {
        icon: "📉", animation: "shake",
        steps: [ "Transferring funds...", "'Returns' displayed on a fake dashboard...",
            "🚨 SIMULATED: In real life, the scheme collapses and invested money is rarely, if ever, recovered." ]
    },
    simswap: {
        icon: "📱", animation: "glitch",
        steps: [ "Confirming SIM change...", "Phone number transferred...",
            "🚨 SIMULATED: In real life, a hijacked SIM can be used to intercept OTPs and take over your other accounts." ]
    },
    impersonation: {
        icon: "🚔", animation: "shake",
        steps: [ "Sending payment...", "Caller disconnects...",
            "🚨 SIMULATED: In real life, this money would be gone, sent to a scammer impersonating an authority to create fear." ]
    },
    donation: {
        icon: "❤️", animation: "pulse",
        steps: [ "Processing donation...", "Payment confirmed...",
            "🚨 SIMULATED: In real life, this donation would go to a scammer's account instead of helping anyone in need." ]
    },
    insider: {
        icon: "🪪", animation: "flicker",
        steps: [ "Access granted...", "Activity logged under your account...",
            "🚨 SIMULATED: In real life, anything done with your badge or login is tracked as YOUR action, whoever actually did it." ]
    },
    ransomware: {
        icon: "🔒", animation: "glitch",
        steps: [ "Encrypting files...", "Ransom note displayed...",
            "🚨 SIMULATED: In real life, files could become permanently locked, with no guarantee that paying restores them." ]
    },
    extension: {
        icon: "🧩", animation: "flicker",
        steps: [ "Installing extension...", "Browser settings changed...",
            "🚨 SIMULATED: In real life, a malicious extension can track your browsing and inject ads or malware into every page you visit." ]
    },
    mitm: {
        icon: "🕵️", animation: "glitch",
        steps: [ "Bypassing warning...", "Connection intercepted...",
            "🚨 SIMULATED: In real life, ignoring this warning could let an attacker read everything you send, including passwords." ]
    }

};


let currentScenario = 0;
let score = 0;
let playerName = "Player";
const PASSING_SCORE = Math.ceil(scenarios.length * 0.7); // 70% to pass


function shuffleArray(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}


function startGame() {

    const nameInput = document.getElementById("player-name");
    playerName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "Player";

    currentScenario = 0;
    score = 0;

    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("certificate-screen").classList.add("hidden");

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

    const badge = document.getElementById("difficulty-badge");
    badge.textContent = scenario.difficulty.toUpperCase();
    badge.className = "badge badge-" + scenario.difficulty;

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

    // Shuffle so the correct answer isn't always in the same position.
    const shuffledChoices = shuffleArray(scenario.choices);

    shuffledChoices.forEach((choice, index) => {

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
    const certificateBtn = document.getElementById("certificate-btn");

    if (score === scenarios.length) {

        message = "Excellent! You demonstrated strong digital safety awareness.";

    } else if (score >= PASSING_SCORE) {

        message = "Good job! You have a solid understanding of digital safety.";

    } else {

        message = "Keep practicing! You need " + PASSING_SCORE + "/" + scenarios.length +
            " correct to earn a certificate. Digital safety skills improve with practice.";
    }

    document.getElementById("result-message").textContent = message;

    if (score >= PASSING_SCORE) {
        certificateBtn.classList.remove("hidden");
    } else {
        certificateBtn.classList.add("hidden");
    }
}


function restartGame() {

    document.getElementById("result-screen").classList.add("hidden");

    document.getElementById("home-screen").classList.remove("hidden");

}


// ===================== CERTIFICATE =====================

function goToCertificate() {

    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("certificate-screen").classList.remove("hidden");

    drawCertificate();
}


function drawCertificate() {

    const canvas = document.getElementById("certificate-canvas");
    const ctx = canvas.getContext("2d");

    const W = canvas.width;
    const H = canvas.height;

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);

    // Outer border
    ctx.strokeStyle = "#173f5f";
    ctx.lineWidth = 14;
    ctx.strokeRect(20, 20, W - 40, H - 40);

    // Inner border
    ctx.strokeStyle = "#e63946";
    ctx.lineWidth = 3;
    ctx.strokeRect(45, 45, W - 90, H - 90);

    ctx.textAlign = "center";

    // Header
    ctx.fillStyle = "#173f5f";
    ctx.font = "bold 26px Arial";
    ctx.fillText("G8TE DIGITAL SAFE", W / 2, 110);

    // Title
    ctx.font = "bold 48px Georgia";
    ctx.fillStyle = "#173f5f";
    ctx.fillText("Certificate of Completion", W / 2, 175);

    // "This certifies that"
    ctx.font = "20px Arial";
    ctx.fillStyle = "#444";
    ctx.fillText("This certifies that", W / 2, 240);

    // Name
    ctx.font = "italic bold 42px Georgia";
    ctx.fillStyle = "#e63946";
    ctx.fillText(playerName, W / 2, 300);

    // Underline for name
    const nameWidth = ctx.measureText(playerName).width;
    ctx.strokeStyle = "#173f5f";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2 - nameWidth / 2 - 20, 315);
    ctx.lineTo(W / 2 + nameWidth / 2 + 20, 315);
    ctx.stroke();

    // Body
    ctx.font = "20px Arial";
    ctx.fillStyle = "#444";
    ctx.fillText("has successfully completed the Digital Safety Simulator,", W / 2, 360);
    ctx.fillText("demonstrating the ability to recognize scams, misinformation,", W / 2, 388);
    ctx.fillText("malware, and other digital threats.", W / 2, 416);

    // Score
    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "#173f5f";
    const percent = Math.round((score / scenarios.length) * 100);
    ctx.fillText("Final Score: " + score + " / " + scenarios.length + " (" + percent + "%)", W / 2, 465);

    // Date
    const dateStr = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    ctx.font = "16px Arial";
    ctx.fillStyle = "#666";
    ctx.fillText("Date: " + dateStr, W / 2, 510);

    // Footer
    ctx.font = "14px Arial";
    ctx.fillStyle = "#888";
    ctx.fillText("G8TE Digital Safe | Community Digital Safety Initiative", W / 2, H - 60);
}


function downloadCertificate() {

    const canvas = document.getElementById("certificate-canvas");
    const link = document.createElement("a");

    link.download = "G8TE_Digital_Safe_Certificate_" + playerName.replace(/\s+/g, "_") + ".png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}


function backToHomeFromCertificate() {

    document.getElementById("certificate-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
}