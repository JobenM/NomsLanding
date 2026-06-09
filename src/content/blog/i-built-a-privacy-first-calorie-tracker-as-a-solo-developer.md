---
title: "I Built a Privacy-First Calorie Tracker as a Solo Developer — Here's Why"
description: "Why I quit using MyFitnessPal, got frustrated with every alternative, and spent months building NomsAI — a calorie tracker that keeps your food diary entirely on your device."
pubDate: 2026-06-06
tags: ["solo developer", "indie app", "privacy", "calorie tracker", "AI", "NomsAI"]
---

## The App I Couldn't Find

A couple of years ago I was trying to get back into tracking my food. Nothing dramatic — just wanted to be more aware of what I was eating, hit a protein target, maybe lose a few kilos.

I opened MyFitnessPal. Within 30 seconds I'd been asked to create an account, confirm my email, and share my date of birth. Before I'd logged a single meal, the app already knew who I was.

I tried a few alternatives. Same story, different logo. Every calorie tracker on the market treats your food diary as a database asset — something to be stored, analysed, and ultimately monetised. Your eating habits, weight fluctuations, and health goals sitting on someone else's server, subject to their privacy policy, their data breaches, their acquisition by a larger company.

But the privacy issue wasn't even the thing that made me fall off tracking every time. It was the database.

Scan a barcode — item not found. Search manually — find six conflicting entries, all user-submitted, none of them quite right. Pick one, hope for the best, wonder why your calorie count feels off. Or worse: spend five minutes trying to find a reasonable entry for a homemade meal that doesn't exist in any database because nobody has ever logged *your* mum's chicken curry before.

I kept quitting. Not because I stopped caring, but because I was essentially doing unpaid data entry for someone else's product every time I opened the app. Contributing to a database I didn't control, correcting entries I hadn't broken, building an asset that belonged to a company — not to me.

I wanted something that didn't require a crowd-sourced database at all. Where the answer to "what's in this?" was handled by AI on the fly, not dependent on whether some anonymous user had correctly entered the macros for Tesco own-brand pasta three years ago.

That app didn't exist. So I built it.

## What I Actually Wanted

The requirements felt simple when I wrote them down:

- **No account.** Open the app and start logging. No email, no date of birth, no password.
- **No cloud sync.** My food diary lives on my phone. Not a server I don't control.
- **No database to fight.** Type what I ate in plain English and get an answer. No barcode scanning, no searching a database of 47 conflicting entries for "banana," no contributing to someone else's crowdsourced mess.
- **Real macros.** Calories, protein, carbs, fat. Not 200 micronutrients I'll never look at.

The "fast input" requirement is what led me to AI. I'd been watching large language models get genuinely good at understanding natural language — and food descriptions are exactly the kind of messy, context-dependent text they excel at. *"A bowl of porridge with a banana and some honey"* is trivially hard for a database lookup and trivially easy for an LLM.

## Building It Solo

I'm one person. I work on NomsAI in the evenings and weekends around a full-time job. That constraint shapes every decision.

No features I can't maintain. No infrastructure I can't understand end to end. No complexity that will collapse the moment I'm away for two weeks.

This means the architecture is deliberately minimal. The server stores almost nothing — a random device ID and a credit balance. That's it. Your food logs, workouts, weight entries, and goals live in local storage on your device. The server can't tell you what you ate last Tuesday because it genuinely doesn't know.

This isn't a privacy marketing claim. It's the actual technical reality. When you delete the app, that data is gone. There's no "are you sure you want to delete your account" screen because there is no account.

## The AI Question

The obvious concern with AI-estimated macros is accuracy. Is it good enough?

I think this question is framed wrong. The goal of food tracking isn't laboratory precision — it's building awareness. Knowing that you've had roughly 1,800 calories today, that your protein is low, that you've eaten more carbs than usual. That kind of pattern recognition doesn't require accuracy to the gram.

What it does require is consistency. And consistency requires low friction. An app you actually use every day with 85% accurate estimates will give you better insight than an app you abandon after two weeks because logging a homemade curry took twelve steps.

The AI handles the messy real-world stuff that database apps struggle with. Restaurant meals. Home cooking. Multi-ingredient dishes. Foods that don't have barcodes. It parses natural language — the way you'd actually describe food to another person — and returns a macro breakdown in a couple of seconds.

## Launching in Four Countries

NomsAI is available in the UK, US, Canada, and Ireland. As a solo developer, that normally sounds like a logistical nightmare — different app store territories, different pricing, different legal requirements.

In practice, the AI handles most of the internationalisation automatically. It understands regional food references without me having to build separate food databases for each market. Ask it about a Greggs sausage roll or a Chipotle burrito bowl and it knows what you're talking about.

The legal side was more work. The UK and EU have meaningfully different privacy frameworks post-Brexit, Canada has PIPEDA and Quebec's Law 25, and the US has a patchwork of state laws. I spent time getting the privacy policy right — not because a regulator is watching a small indie app, but because the whole point of NomsAI is that I take privacy seriously. It would be embarrassing to have a vague privacy policy on a privacy-first app.

## What I've Learned

Building a consumer app solo is humbling in specific ways. You have to make every decision yourself — product, design, backend, mobile, legal, marketing, pricing — and you'll get some of them wrong. The feedback loop is slow. You ship something, wait to see if anyone cares, adjust.

A few things I'd tell myself at the start:

**Constraints are features.** "No account required" started as a technical shortcut — one less thing to build. It became the most-mentioned thing in reviews. The limitation shaped the product in a way that turned out to be the right call.

**Privacy is a product decision, not just a legal one.** When your data model doesn't include personal information, a whole category of security vulnerabilities simply doesn't exist. You can't breach data you don't have.

**The free tier matters more than the paid tier.** Most people who download NomsAI will never pay for it. That's fine. The app is genuinely useful with 5 free logs a day. The paid tier exists for people who want more — not as a barrier to the core experience.

## Where It's Going

NomsAI is small and that's intentional. I'm not trying to build the next MyFitnessPal. I'm trying to build the app I wanted to exist — one that respects the people using it, works quickly, and doesn't require you to hand over your personal data to track your lunch.

If that sounds like something you'd find useful, it's free to download. No account required.

---

*NomsAI is available on the [App Store](https://apps.apple.com/app/nomsai-ai-calorie-counter/id6771914399) and [Google Play](https://play.google.com/store/apps/details?id=app.nomsai). The app is built and maintained by a solo developer based in the United Kingdom.*
