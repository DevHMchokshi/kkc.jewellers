# 📘 Brand Bible Skill — Personal Brand Edition

## Overview

This skill guides Claude in creating a **comprehensive Personal Brand Bible** in Markdown format. The output should be deeply detailed (6+ pages), covering all core brand pillars. Claude must **always interview the user first** before writing anything, using the structured question flow below.

---

## ✅ When to Use This Skill

Trigger this skill when the user says things like:
- "Create my brand guidelines"
- "Build my brand bible"
- "Help me define my personal brand"
- "Write my brand guidelines document"
- "I need a style guide for my personal brand"

---

## 🔄 Step 1: Interview the User First

Before writing a single line of the Brand Bible, Claude must ask the user the following questions across **three phases**. Ask each phase as a grouped set — do not ask all at once.

---

### Phase 1 — Identity & Foundation

Ask these questions together:

```
1. What is your full name and/or personal brand name? (e.g. "Jane Doe" or "The Wellness Edit")
2. What do you do? Describe your work, expertise, or creative practice in 1–3 sentences.
3. What is your brand mission? (Why do you do what you do?)
4. What are your top 3–5 core values? (e.g. authenticity, boldness, clarity)
5. Who is your target audience? Describe them in detail — age range, lifestyle, struggles, aspirations.
6. What makes you different from others in your space? What is your unique edge or point of view?
```

---

### Phase 2 — Visual Identity

Ask these questions together:

```
7. Do you have a logo? If yes, describe it (shape, icon, wordmark, style). If no, describe your ideal logo concept.
8. What is your primary color palette? List hex codes if known, or describe colors (e.g. "warm terracotta, cream, deep green").
9. What are your secondary/accent colors, if any?
10. What fonts or typefaces do you use or love? (e.g. "a clean sans-serif for body, a serif for headings")
11. How would you describe your overall visual aesthetic? (e.g. minimal, editorial, maximalist, earthy, luxury, playful)
12. Do you have any visual references, mood board inspiration, or brands you admire aesthetically?
```

---

### Phase 3 — Voice, Content & Platform

Ask these questions together:

```
13. How would you describe your brand voice in 3–5 adjectives? (e.g. warm, bold, witty, authoritative, conversational)
14. What topics or themes do you consistently talk about or create content around?
15. Which platforms are you active on or plan to use? (e.g. Instagram, LinkedIn, TikTok, newsletter, podcast)
16. What types of content do you create? (e.g. educational posts, behind-the-scenes, long-form essays, short video)
17. What is your photography/imagery style? (e.g. bright and airy, dark and moody, candid, high-fashion editorial)
18. Are there any topics, aesthetics, or types of content you want to AVOID?
```

---

## 📝 Step 2: Generate the Brand Bible

Once the user has answered all three phases, generate the Brand Bible using the structure below. Write in **flowing, professional prose** — avoid excessive bullet points. Use markdown headers, dividers, and formatting for readability.

---

## 📄 Brand Bible Output Structure

Use this exact structure for the output document:

---

```markdown
# [Brand Name] — Brand Bible
### Personal Brand Guidelines

---

## 01. Brand Overview

A 2–3 paragraph narrative introducing the brand. Synthesize the user's answers about who they are, what they do, and why it matters. Write this as if introducing the brand to a new collaborator or designer.

---

## 02. Mission & Vision

**Mission Statement:**
A single, powerful sentence stating why the brand exists and who it serves.

**Vision Statement:**
A forward-looking sentence about where the brand is headed or the impact it aims to create.

---

## 03. Core Values

List 3–5 values. For each value, write:
- **Value Name** — A 2–3 sentence explanation of what this value means *specifically* for this brand and how it shows up in work and decisions.

---

## 04. Target Audience

### Primary Persona
Give the persona a name (e.g. "Ambitious Amara"). Then describe:
- **Demographics:** Age range, location, occupation
- **Psychographics:** Values, lifestyle, interests
- **Pain Points:** What they struggle with
- **Aspirations:** What they want to achieve
- **Why They Follow [Brand Name]:** What draws them to this brand specifically

Include a secondary persona if the user's audience is broad enough to warrant one.

---

## 05. Brand Voice & Tone

### Voice Pillars
Define 3–4 voice pillars. For each:
- **Pillar Name** (e.g. "Warm but Direct")
- What it means
- What it sounds like in practice
- What it does NOT sound like (the opposite to avoid)

### Tone Variations by Context
Explain how tone shifts across contexts:
- **Educational content:** [describe]
- **Personal/storytelling content:** [describe]
- **Sales/promotional content:** [describe]
- **Replies & engagement:** [describe]

### Writing Style Notes
Cover: sentence length preferences, use of humor, use of slang or formality, use of questions, how to open and close posts/articles.

---

## 06. Visual Identity

### Logo
Describe the logo, its variations (primary, secondary, icon-only), and when to use each. Include clear-space and minimum-size guidelines if relevant.

### Color Palette

| Role | Color Name | Hex Code | Usage |
|------|-----------|----------|-------|
| Primary | [name] | [hex] | Main backgrounds, headlines |
| Secondary | [name] | [hex] | Accents, CTAs |
| Neutral | [name] | [hex] | Body text, backgrounds |
| Accent | [name] | [hex] | Highlights, icons |

Include a short paragraph on the emotional intention behind the palette.

### Typography

| Role | Font Name | Style | Usage |
|------|-----------|-------|-------|
| Display / Headline | [font] | Bold | Hero text, titles |
| Body | [font] | Regular | Long-form, captions |
| Accent | [font] | Italic or Light | Quotes, callouts |

Include guidance on font pairing, sizing hierarchy, and line spacing tone.

### Overall Aesthetic
A paragraph describing the visual world of this brand — textures, shapes, layout preferences, whitespace, and general design sensibility.

---

## 07. Photography & Imagery Style

### Photography Direction
Describe the visual mood: lighting preferences (bright, moody, natural), color grading (warm, cool, desaturated), setting/environment preferences, subject framing.

### People & Lifestyle
Guidance on how people should appear in brand imagery — candid vs. posed, approachable vs. aspirational, diversity/representation intent.

### Graphic & Illustration Style
If applicable, describe any illustration, icon, or graphic overlay style.

### Imagery to Avoid
List clearly what does NOT fit the brand visually — overly stock-photo looks, clashing aesthetics, visual clichés to steer clear of.

---

## 08. Social Media Guidelines

### Platform Presence

For each active platform, include:
- **Platform Name**
- **Role of this platform** in the brand ecosystem (e.g. "Primary community-building," "Long-form thought leadership")
- **Content pillars** for this platform (3–4 recurring content themes)
- **Posting cadence** recommendation
- **Tone notes** specific to this platform
- **Format preferences** (e.g. carousels, Reels, text posts, newsletters)

### Hashtag Strategy
Guidance on hashtag use: branded hashtags, niche community hashtags, volume (how many), placement (in caption vs. comments).

### Engagement Voice
How to respond to comments, DMs, and mentions. What level of personality, warmth, and professionalism to bring to interactions.

---

## 09. Usage Rules — Do's & Don'ts

### ✅ Always Do
List 6–8 specific, actionable do's grounded in the brand's voice, values, and visual identity.

### ❌ Never Do
List 6–8 specific, clear prohibitions — visual, verbal, behavioral — that would feel off-brand.

### Brand Red Flags
A short paragraph describing scenarios or decisions that should trigger a gut-check against the brand guidelines.

---

## 10. Brand Glossary

List 5–10 words or phrases that are distinctly on-brand (words the brand uses and owns), and 5–10 words or phrases that feel off-brand and should be avoided in copy.

| ✅ On-Brand Language | ❌ Off-Brand Language |
|---------------------|----------------------|
| [word/phrase] | [word/phrase] |

---

*This Brand Bible is a living document. Review and update it as the brand evolves.*
*Last updated: [Month Year]*
```

---

## 🎨 Formatting Rules for Output

- Output the full Brand Bible as a single `.md` file
- Use `##` for main sections with numeric prefixes (01, 02, etc.)
- Use `###` for subsections
- Use `---` horizontal rules between major sections
- Use tables for color palette, typography, and glossary
- Write all prose in **complete sentences and paragraphs** — no bare bullet lists in narrative sections
- Aim for **1,500–2,500 words** of substantive content (excluding headers and tables)
- Tone of the document itself should be: **professional, clear, inspiring**

---

## ⚠️ Important Rules

1. **Never skip the interview phase.** Do not generate the Brand Bible without first collecting answers from all three phases.
2. **Do not hallucinate brand details.** Only use information the user has provided. If something is unclear, ask a follow-up question.
3. **If the user hasn't defined colors or fonts**, write descriptive guidance based on the aesthetic they described instead of inventing hex codes.
4. **Keep the document cohesive.** Each section should feel like it belongs to the same brand. Use the user's actual language and words where possible — this builds authenticity.
5. **The final file should be saved as** `[BrandName]_Brand_Bible.md` and presented to the user for download.

---

## 💡 Example Trigger Prompts That Activate This Skill

- "I want to create my brand guidelines"
- "Help me build a brand bible for my personal brand"
- "I'm a [profession] and need a brand style guide"
- "Create my brand identity document"
