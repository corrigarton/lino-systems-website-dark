# Plan: Rewrite Philosophy bio copy

## Context
The bio copy was recently revised but the new version feels too abrupt ("My background is Information Systems..."). Corrina prefers the warmth and conversational tone of the original (image-15.png) but without any em dashes or hyphens used as punctuation. She also wants a clearer narrative arc: robotics class first, then UW degree, then PMRF job, then Lino Systems.

## New copy (minimal changes: reorder + remove dashes, otherwise verbatim)

**Paragraph 1** — robotics leads, degree follows naturally:
> I first got into coding through robotics. It felt like solving a sudoku puzzle, except the answer actually did something. Math that moved things in the real world. I went on to study Information Systems at the Foster School of Business at UW.

**Paragraph 2** — dashes replaced with commas, otherwise word-for-word original:
> Since then I've been building systems at the Pacific Missile Range Facility on Kauai, automating processes, designing data workflows, and turning fragmented information into something people can actually act on. I started Lino Systems because the same problems I solve for large institutions exist in every local business. And the solutions don't have to be expensive or complicated.

Changes from original: sentences 1+2 in para 1 are swapped, degree sentence moved to end of para 1, em dashes replaced with commas.

## File to modify
- `src/app/components/Philosophy.tsx` — replace the two `<p>` bio paragraphs only

## Verification
- Confirm narrative order: robotics → UW → PMRF → Lino Systems
- Confirm no dashes of any kind appear in the rendered text
- No other copy or layout changed
