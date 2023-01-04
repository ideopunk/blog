---
title: "100 Stories Reflection | Part Two: Statistics"
date: "2023-01-04"
preview: "Word length, trends, frequency!"
---

<script>
	import Scatterplot from "$lib/components/Scatterplot.svelte";
	import MultilineChart from "$lib/components/MultilineChart.svelte";
	import Treemap from "$lib/components/Treemap.svelte";
</script>

Last week I shared [general reflections](/blog/100storiesreflection) on my 100 stories project. This week I want to share stats! I wrote out metadata for each of them into a JSON file and have used D3 to visualize it below.

<!-- <Scatterplot id='wordlength' title="Word Length" trend notes={["Hover for title and word length", "Line tracks length, averaged over two-week sections"]}/> -->

I wrote my first piece on December 12, 2021 (I'm counting it!). I finished my final piece on December 27, 2022. I originally intended for these to be very short, perhaps less than 500 words. You can see that I instantly jump beyond that.

<!-- <MultilineChart id="multiline" title="Trends" notes={["The red line tracks story count, broken into two-week sections", "The blue line tracks stories that include this property, broken into two-week sections"]}/> -->

The red line tracks total stories written. As you can see, once the year began I always wrote at least two stories a week. There was one weekend in June where I wrote eleven stories, contributing to the bump in the middle.

The blue line tracks trends across various aspects of the stories and can be toggled with the options above the chart. Some things that I noticed:

- **Grammatical person**: _Second-person_ isn't used until four months in. I am a huge fan of using it with shorter pieces. In general, there's a lot you can do in short pieces that would become grating after a thousand words.
- **Tense**: _Past tense_ is constant, _Present tense_ takes over in the final quarter. I find that, like the second-person, the present tense can be grating in longer pieces, but can be poignant and striking in shorter ones.
- **Subject**: _Jobs_ are a steady topic until I begin my role at 80,000 Hours, ha ha.
- **Subject**: _Labyrinths_ come in after I read Borges in April. In general, reading Borges had a huge impact on my style.
- **Subject**: _War_ and _Nuclear bombs_ come in after Russia's invasion. This doesn't capture how often wars are happening in the background of other stories. This began as a fairly anxious interest, then a more stable fascination with our destructive capacity.
- **Subject**: _The sun_, like _War_, is a frequent figure in the background. However, it almost never quite becomes a subject. It's just a very powerful symbol (Georges Bataille, Nick Land).
- **Subject** In the first half of the year I have some protagonists who aren't ready for their quests (_Unpreparedness_). In the second half of the year they disappear entirely and make way for evil protagonists (_Villain protagonists_). I'm not sure what changed. I do quite like writing unreliable narrators\*, and evil protagonists are a great avenue for writing them.
- **Genre**: The above is accompanied by a turn to _Horror_ at the end of the year. I think writing horror stories is a great challenge because you can only speak to your own horrors for so long before you have to get creative and try to tap into what horrifies people in general. You also have to think deliberately about psychology and the effect of your writing in a way which you often accidently veer from when writing realist stories.
- **Genre**: _Science Fiction_ disappears after the summer. _Contemporary Science Fiction_ makes a few appearances but there's still a drop. I'm not sure why. It's possible that my job being kind of science fiction has satisfied that itch -- on the other hand, my job being kind of science fiction would also adequately explain a situation where I write _more_ science fiction. Given that it explains opposite situations well, it isn't good evidence for either.
- **Favourites**: Some of the first ones I wrote are still my favourites and after that I write about one favourite a month. I noticed this halfway through and was a bit worried! You'd hope that the rate of favourites would increase over time. I've made my peace with it though. This project wasn't exactly about generating stories I loved more and more frequently (to be fair, I have affection for all of my stories). It was about levelling up. I now feel that I can construct the stories I want, which is the most important thing.

### Notes on Genre

Genre is fuzzy. It's a challenge to decide how best to decide on categories: By setting? By style? By convention? Some stories involved magic but were more "literary" than some realist stories that had whackier premises. I settled on categorizing by setting and degree of realism:

- Realist - Set in our world. Nothing extraordinary happens. [Mrs. Fields](/blog/mrsfields) is an example.
- Alt realist - Set in our world. Social conventions are broken or the extremely unlikely happens but nothing strictly impossible happens. [The Boycott](/blog/boycott) is an example.
- Magic realist - Set in our world. Per [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Main/MagicRealism), the impossible "just happens". [The Code](https://themetaworker.com/2022/08/15/three-microfictions-by-conor-barnes/) is an example.
- Contemporary fantasy and Contemporary SF - Set in our world. The impossible is notable. [The Dream Eater](https://thechambermagazine.com/2022/10/07/three-works-of-flash-fiction-by-conor-barnes-the-dream-eater-the-duel-and-void/) is an example.
- Fantasy and SF - Set in other worlds or the future. The impossible is normal. [Uninstall and Reinstall](https://flashboulevard.wordpress.com/2022/12/31/conor-barnes-all-the-digital-humans-are-kind-of-buggy/) is an example.
- Surrealist - Set, at least ambiguously, in the dreams or imagination of the protagonist. [The White Stag](/blog/whitestag) is an example.

<Treemap id='subjects' readOnlyProperties={["subject_and_method"]} title="Subjects" notes={["Hover for cut-off titles and count"]}/>

These are all the themes from the stories and any methods of note! This includes chatty narrators (_Authorial instrusion_) and form of the story (_Letters_).

Some stuff surprised me. I didn't expect jobs and work to be so prominent, nor family.

Note that there are recurring themes that don't quite make it as subjects. The sun as a figure is frequently mentioned but isn't quite a subject.

<Treemap id='general' title="More Treemaps For Fun" notes={["Hover for cut-off titles and count"]}/>

#### In Sum

I hope you enjoyed my charts! A lot of it wasn't surprising for me. Love, family and friendship, and work, war, and violence, were frequent topics. There was a lot of past tense and a lot of tiny literary stories. However, some of it was neat to see, particularly the trends.

<div style="height: 24px;"/>

#### Notes

<small style="display: block">This blogpost is subject to change if I feel like visualizing or analyzing new things.

\* All narrators are unreliable.
</small>
