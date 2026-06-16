---
title: "Why NomsAI Doesn't Have Meal Photo Tracking"
description: "A lot of other AI calorie trackers let you snap a photo of your plate. I deliberately chose not to. Here's why — and why I think the feature is, quietly, a bit of a con."
pubDate: 2026-06-16
tags: ["AI", "calorie tracker", "privacy", "honesty", "product decisions", "NomsAI"]
---

## The Feature I Get Asked About Most

If you've looked at AI calorie trackers in the last year, you've seen the demo. Someone holds up a phone, snaps a photo of a plate of pasta, and the app spits back "650 calories, 30g protein." It looks magical. It looks like the future. It looks like exactly what an AI calorie tracker should do.

NomsAI doesn't do this. You type or say what you ate. The key word being *you* — not a model guessing from a picture.

This is the single most common piece of feedback I get from people trying the app: *why no photo?* It's a fair question, and the answer is that I considered it carefully, built a prototype, and decided not to ship it. Two reasons. The first is about honesty. The second is about your data.

## Reason One: A Photo Doesn't Contain the Information

This isn't really an AI problem. It's a photo problem. A human chef staring at the same picture would have the same issue.

Take mince. A bolognese made with 5% fat mince and one made with 30% fat mince look identical in a photo. Same colour, same texture, same shape on the plate. The calorie difference between them is enormous — easily 200-300 calories per portion. Hand that photo to a Michelin-starred chef and they couldn't tell you either, because the information genuinely isn't in the picture. The fat is invisible. AI can't extract what isn't there to extract.

The same problem hits half the food anyone eats. Full-fat versus reduced-fat cheese. Whole milk versus skimmed in a coffee. Olive oil versus a heavy pour of olive oil in a salad. Greek yoghurt versus 0% Greek yoghurt. The visible bits of a meal — the chicken, the rice, the broccoli — are the easy part. The bits that make the actual calorie difference are usually the bits you can't see: the oil it was cooked in, the butter that finished the sauce, the dressing that's tossed through it.

Restaurants and home kitchens make this worse, not better. A pub burger isn't a single dish; it's a category of dishes that vary wildly depending on who's cooking it. A photo of "spaghetti carbonara" might be 500 calories or 1,200 calories depending on whether the cook used the traditional egg-and-cheese ratio, added cream, added bacon fat. The photo looks the same. The macros don't.

So the question becomes — what's the point of taking the photo? Even with a perfect oracle behind it, you'd still need to tell the app the things the photo can't show: the type of mince, the fat content of the cheese, the dressing on the salad. At which case you've done the typing anyway, with extra steps.

I think photo-based calorie tracking is, charitably, a UX gimmick that demos well. Uncharitably, it's a feature that gives people confidently wrong numbers based on inputs that physically can't carry the answer. People want tracking that actually tells them something useful. A button that produces plausible-looking guesses from incomplete information isn't that.

## Why Other Apps Ship It Anyway

It demos beautifully. "Point your camera at lunch" is the kind of feature that gets screenshots in App Store listings, mentions in tech press, and reactions on TikTok. It's a hook.

It also masks the work the user is doing. Most photo-based trackers I've tried follow a pattern: take a photo, get an instant guess, then immediately surface a screen full of editable fields where you adjust the portion size, swap the food, correct the macros. The photo isn't actually doing the work. The user is. The photo is doing the marketing.

I'm not in a position to do that. NomsAI is a one-person operation. I'm not going to ship something that looks impressive in a screenshot but quietly forces every user to do the same correcting they would have done with text input — only with extra steps and worse accuracy.

If I'm going to ask you to spend your time using my app, the time spent has to actually translate into a useful number at the end. Photo recognition doesn't pass that test.

## Reason Two: I Don't Want Your Photos

The second reason is the one I care about even more. To do AI photo recognition, you have to send the photo somewhere. There's no on-device vision model good enough to handle food today. It goes to an AI provider — OpenAI, Google, Anthropic — over the network, gets processed on someone else's servers, and a response comes back.

That means your photo of your lunch — taken in your kitchen, your office, your bedroom, a restaurant with other people visible at nearby tables — has been transmitted off your device. Sometimes stored. Sometimes used as training data, depending on the contract terms in force on the day you took it.

This is fine for some apps and some users. It's not fine for an app I'm building, because NomsAI's entire premise is that your data stays on your device. Your food log lives in local storage. The server stores a random device ID and a credit balance, and nothing else. The whole architecture exists so I can honestly say I don't know what you ate yesterday — because I genuinely don't.

The moment I add photo recognition, that breaks. Even if I never store the image on my server, it's been transmitted through a third party. Photos contain more than food. They contain backgrounds, faces, locations, screens, paperwork, the inside of someone's home. A meal-photo feature is, in practice, a permission to upload pictures from inside your life to AI training pipelines you have no control over.

I could write a privacy policy that handles this. Other apps do. But "we don't keep your photos" and "your photos never leave your device" are very different promises. I want to be able to make the second one. Adding photo recognition means I can only make the first.

## What I Built Instead

Typing what you ate has problems too. It's slower than a photo on first glance. It requires you to know roughly what you ate — which sometimes you don't.

But text input has a property that photo input doesn't: it forces you to engage with what you've eaten. The act of writing *"two slices of sourdough with butter and a poached egg"* makes you notice the butter. The act of writing *"chicken curry from the takeaway, about a portion and a half"* makes you notice the portion size. You can't accidentally undercount food you've explicitly written down.

That noticing is, in my opinion, most of what calorie tracking is actually for. Not the precise number — the awareness. People who track consistently for a few months don't keep doing it because they need the numbers. They do it because the noticing has become a habit, and the habit changes what they eat.

A photo bypasses the noticing. You point, you tap, you move on. The app does the work — or pretends to. The number lands without you having had to think about what produced it.

I think the noticing is the feature. The AI is there to remove the friction of looking things up, not the friction of paying attention.

## When I'd Reconsider

I try to hold opinions loosely on this kind of thing. If on-device vision models get good enough that food recognition can happen without sending anything to a server, the privacy half of this argument goes away — and I'd reconsider photo as a quick way to *start* an entry, not finish one. Snap the plate, get a first guess at the visible ingredients, then fill in the bits the photo can't tell you. That's an honest version of the feature.

What I won't do is ship a one-tap "photo in, calories out" button. The photo doesn't carry the calories. No amount of model improvement changes that.

For now, the answer is no. NomsAI is a typing app. That's a deliberate constraint, not a missing feature.

If you've used a photo-based tracker before and want something that takes your privacy seriously and is honest with you about what the numbers mean — try typing. You'll be surprised how fast it actually is, and how much more you notice.

---

*NomsAI is available on the [App Store](https://apps.apple.com/app/nomsai-ai-calorie-counter/id6771914399) and [Google Play](https://play.google.com/store/apps/details?id=app.nomsai). The app is built and maintained by a solo developer based in the United Kingdom.*
