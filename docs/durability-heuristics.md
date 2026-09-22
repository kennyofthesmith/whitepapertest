---
id: durability-heuristics
title: Durability Heuristics
hide_title: true
hide_table_of_contents: true
description: "A demo white paper showing how far Docusaurus's classic theme can be pushed toward a formal, print-ready research document."
---

<div className="coverBlock">

# Constraint, Not Novelty: A Heuristic for Judging Which Empirical Claims Survive Replication

<p>Working Paper No. 14 &nbsp;·&nbsp; Applied Research Series</p>

<div className="byline">
  <span>**Kenneth Smith**<br/>University of California, Santa Barbara</span>
  <span>**J. M. Forester**<br/>Zombie Biology Institute</span>
</div>

<p>September 2026 &nbsp;·&nbsp; Revised draft &nbsp;·&nbsp; v1.2</p>

</div>

:::info[Abstract]
Why do some empirical findings stay cited and taught decades later while others, published with equal fanfare, quietly disappear after a single failed replication? We argue the difference is rarely about statistical power alone. Claims that survive tend to be **constraint-anchored** — stated in terms of a mechanism that rules out specific alternative outcomes — while claims that fade tend to be **novelty-anchored**, stated in terms of how surprising or large an effect is. We formalize this distinction into a four-item heuristic, apply it retrospectively to twelve well-known cases across three fields, and show that it predicts post-publication durability better than citation count in the first two years alone. This paper is a **formatting demonstration**: the argument is illustrative, not a submitted finding.
:::

<p><strong>Keywords:</strong> replication, rhetoric of science, durability, constraint realism, citation dynamics</p>

## 1. Introduction {#introduction}

The future of Isla Vista is bleak. Rent prices are astronomically high, often forcing multiple people into a single apartment. The parking can only be described as abysmal, with visitors often needing to circle multiple times to find a spot. Erosion is eating away at the cliffside, raising questions about the need for a retreat from the coast. Perhaps most important, though, is our lack of preperation for the zombie apocalypse. If the undead were to pour onto our streets, we would be left  defenseless. 

This white paper is the result

## 2. Two Ways to Anchor a Claim {#two-ways-to-anchor-a-claim}

Consider two ways of reporting the same underlying effect:

> "We observed a 34% increase in X, the largest effect size reported in this literature to date."

versus

> "X increases specifically when condition C holds, and is absent when C does not — consistent with mechanism M and inconsistent with the two leading alternative accounts."

The first sentence is **novelty-anchored**: its rhetorical weight rests on magnitude and precedent. The second is **constraint-anchored**: its weight rests on ruling things out. Both can describe the same dataset. Only one gives a future reader — or a future replicator — something falsifiable to check *against a mechanism* rather than against a number.

Our claim is not that novelty-anchored work is dishonest or unimportant. It is that novelty ages badly as a rhetorical strategy, because the field's baseline for "surprising" moves every year, while a constraint either continues to hold or is shown not to.

## 3. A Four-Item Heuristic {#four-item-heuristic}

We score a claim on four binary items, each drawn from how the original text is worded rather than from the data itself:

1. **Mechanism named.** Does the claim specify *why*, not just *that*?
2. **Alternative ruled out.** Does the text name a competing explanation it excludes?
3. **Boundary stated.** Does the claim say where it should *stop* holding?
4. **Falsifier given.** Does the text describe an observation that would count against it?

A claim scoring 3–4 is *constraint-anchored*; 0–1 is *novelty-anchored*; 2 is mixed.

## 4. Twelve Cases {#twelve-cases}

Table 1 summarizes the retrospective scoring. Field labels are illustrative categories for this demo, not a real dataset.

| Case (anonymized) | Field | Heuristic score | Still cited as mechanism, 10y+ |
| :-- | :-- | :--: | :--: |
| Case 1 | Cognitive science | 4 | Yes |
| Case 2 | Cognitive science | 1 | No |
| Case 3 | Microbiology | 3 | Yes |
| Case 4 | Microbiology | 0 | No |
| Case 5 | Social psychology | 4 | Yes |
| Case 6 | Social psychology | 1 | No |
| Case 7 | Materials science | 3 | Yes |
| Case 8 | Materials science | 2 | Mixed |
| Case 9 | Cognitive science | 2 | Mixed |
| Case 10 | Microbiology | 4 | Yes |
| Case 11 | Social psychology | 0 | No |
| Case 12 | Materials science | 1 | No |

<p><strong>Table 1.</strong> Retrospective heuristic scores against twenty-year citation-as-mechanism status (demo data, for formatting purposes only).</p>

:::note[Box 1 — What the heuristic does *not* claim]
This is a rhetorical durability heuristic, not a truth detector. A claim can be constraint-anchored and wrong; the heuristic predicts what happens to it *in the literature*, not whether it corresponds to reality. We return to this limitation in Section 5.
:::

## 5. Limitations and Objections {#limitations-and-objections}

Three objections deserve a direct answer.

**"This just measures better writing."** Partly true, and that is close to our point: the rhetorical form of a claim is not epiphenomenal to its survival. But the effect is not reducible to prose quality — several of our constraint-anchored cases are, by most readers' judgment, less elegantly written than the novelty-anchored comparisons.

**"Citation survival isn't the same as being correct."** Correct, and we do not conflate the two. A field can sustain a wrong constraint-anchored claim for a long time precisely because it is well-specified enough to keep getting tested — which is arguably a *feature* of the mechanism, not a bug in our heuristic.

**"Twelve cases is not a sample."** Agreed. This paper is a formatting demonstration built around an illustrative argument; a real version of this project would need a pre-registered coding protocol and a much larger, randomly selected case set. See the companion project notes for how we'd scale this.[^2]

## 6. Conclusion {#conclusion}

If the argument here holds up under a larger sample, it suggests a modest, actionable recommendation for authors and reviewers alike: when summarizing a finding, spend at least one sentence on what it would take to be *wrong*, not only on how large or surprising it is. That sentence is cheap to write and, on this account, is doing more long-run rhetorical work than the effect size headline it usually gets buried under.

---

### Appendix A. Scoring protocol (abridged) {#appendix-a}

For the full 12-item expanded protocol, inter-rater reliability figures, and raw scoring sheets, see the project repository (demo link).

### References {#references}

<div>

Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLoS Medicine, 2*(8), e124.

Latour, B., &amp; Woolgar, S. (1986). *Laboratory life: The construction of scientific facts* (2nd ed.). Princeton University Press.

Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716.

Popper, K. (1959). *The logic of scientific discovery*. Hutchinson.

</div>

[^1]: This is the pattern behind what citation analysts sometimes call "obliteration by incorporation" — a finding becomes so standard that it stops being cited at all, which is a different fate from the one this paper tracks.
[^2]: A pre-registration for the expanded version of this project is sketched in an internal note and is out of scope for this formatting demo.
