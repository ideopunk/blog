---
title: "100 Stories Reflection | Part Two: Statistics"
date: "2023-01-03"
preview: ""
---

<script>
	import Scatterplot from "$lib/components/Scatterplot.svelte";
	import MultilineChart from "$lib/components/MultilineChart.svelte";
	import Treemap from "$lib/components/Treemap.svelte";
</script>

Last week I shared general reflections on my 100 stories project. This week I want to share stats! I wrote out metadata for each of them into a JSON file and have used D3 to visualize it below.

<Scatterplot id='wordlength' title="Word Length" trend notes={["Hover for title and word length", "Line tracks two-week average length"]}/>

I wrote my first piece on December 12, 2021 (I'm counting it!). I finished my final piece on December 27, 2022. I originally intended for these to be very short, perhaps less than 500 words. You can see that I instantly violate that rule.

<MultilineChart id="multiline" title="Trends" notes={["Line tracks two-week story count"]}/>

The red line tracks total stories written. As you can see, once the year began I always wrote at least two stories a week. There was one weekend in June where I wrote eleven stories, contributing to the bump in the middle.

The blue line tracks trends across various aspects of the stories and can be toggled with the options above the chart. Some things that I noticed:

- **Grammatical person**: _Second-person_ isn't used until four months in.
- **Tense**: _Past tense_ is constant, _Present tense_ takes over in the final quarter.
- **Subject**: _Jobs_ are a steady topic until I begin my role at 80,000 Hours.
- **Subject**: _Labyrinths_ come in after I read Borges in April.
- **Subject**: _War_ and _Nuclear bombs_ come in after Russia's invasion.
- **Subject** In the first half of the year I have some protagonists who aren't ready for their quests (_Unpreparedness_). In the second half of the year they disappear entirely and make way for evil protagonists (_Villain protagonists_).
- **Genre**: The above is accompanied by a turn to _Horror_ at the end of the year.
- **Genre**: _Science Fiction_ disappears after the summer. _Contemporary Science Fiction_ makes a few appearances, but there's still a drop.
- **Favourites**: Some of the first ones I wrote are still my favourites, after that I write about one favourite a month.

### Notes on Genre

Genre is fuzzy. It's a challenge to decide how best to decide on categories: By setting? By style? By convention? Some stories involved magic, but were more "literary" than some realist stories that had whackier premises. I settled on categorizing by setting and degree of realism:

- Realist - Set in our world, no laws are broken. [Mrs. Fields](/blog/mrsfields) is an example.
- Alt realist - Set in our world. Social conventions broken or the extremely unlikely happens, but nothing strictly impossible. [The Boycott](/blog/boycott) is an example.
- Magic realist - Set in our world. Per [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Main/MagicRealism), the impossible "just happens". [The Code](https://themetaworker.com/2022/08/15/three-microfictions-by-conor-barnes/) is an example.
- Contemporary fantasy and Contemporary SF - Set in our world. The impossible is notable. [The Dream Eater](https://thechambermagazine.com/2022/10/07/three-works-of-flash-fiction-by-conor-barnes-the-dream-eater-the-duel-and-void/) is an example.
- Fantasy and SF - Set in other worlds or the future. The impossible is normal. [Uninstall and Reinstall](https://flashboulevard.wordpress.com/2022/12/31/conor-barnes-all-the-digital-humans-are-kind-of-buggy/) is an example.
- Surrealist - Set, at least ambiguously, in the dreams or imagination of the protagonist. [The White Stag](/blog/whitestag) is an example.

<Treemap id='subjects' readOnlyProperties={["subject_and_method"]} title="Subjects" notes={["Hover for cut-off titles and count"]}/>

These are all the themes from the stories and any methods of note! This includes chatty narrators (_Authorial instrusion_) and form of the story (_Letters_).

Some stuff surprised me. I didn't expect jobs and work to be so prominent, nor family.

Note that there are recurring themes that don't quite make it as subject. The sun as a figure is frequently mentioned, but isn't quite a subject.

<Treemap id='general' title="More Treemaps For Fun" notes={["Hover for cut-off titles and count"]}/>

I hope you enjoyed my charts!
