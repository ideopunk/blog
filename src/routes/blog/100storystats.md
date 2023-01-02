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

Last week I shared general reflections on my 100 stories project. This week I want to share stats! I wrote out metadata for each of them into [a JSON file](/data.json) and have used D3 to visualize it below.

<Scatterplot id='wordlength' title="Word Length" trend/>

I wrote my first piece on December 12th, 2021 (I'm counting it!). I wrote my last piece on November 30. I originally intended for these to be very short, perhaps less than 500 words. You can see that I instantly violate that rule.

<!-- <StoryChart id='wordlengthtrend' trend/> -->

<Treemap id='subjects' readOnlyProperties={["subject_and_method"]} title="Subjects"/>

These are the themes from the stories! Hover to see the cut-off ones.

Some stuff surprised me. I didn't expect jobs and work to be such a prominent theme, nor family.

Note that there are recurring themes that don't quite make it as subject. The sun as a figure is frequently mentioned, but isn't quite a subject.

<Treemap id='general'  title="More"/>

<MultilineChart id="multiline" title="Trends"/>
