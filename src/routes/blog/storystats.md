---
title: "100 Stories Reflection | Part Two: Statistics"
date: "2022-12-29"
preview: ""
---

<script>
	import StoryChart from "$lib/components/StoryChart.svelte";
</script>

Last week I shared general reflections on my 100 stories project. This week I want to share stats!

<StoryChart id='wordlength'/>

I wrote my first piece on December 12th, 2021 (I'm counting it!). I wrote my last piece on November 30. I originally intended for these to be very short, perhaps less than 500 words. You can see that I instantly violate that rule.

<!-- <StoryChart id='wordlengthtrend' trend/> -->

<StoryChart id='subjects' type="treemap" readOnlyProperties={["subject_tags"]}/>

<StoryChart id='general' type="treemap"/>
