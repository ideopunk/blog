<script>
	import Languages from "../lib/components/Languages.svelte";
	import themeStore, { setTheme } from "svelte-themes";

	import Project from "../lib/components/Project.svelte";
</script>

<svelte:head>
	<title>Work | Conor Barnes</title>
	<meta name="description" content="Projects" />
	<meta property="og:title" content="Work | Conor Barnes" />
	<meta property="og:description" content="Projects" />
</svelte:head>

<div>
	<Project
		id={0}
		title="Resume"
		link="conor_barnes_resume.pdf"
		text="I'm currently job hunting! Click here to download my resume."
		flip><Languages /></Project
	>
	<!-- <Project
		id={1}
		color={$themeStore.theme === "light" ? "#5BC26A" : "#014421"}
		img="images/squares/tree-sample.png"
		title="The X-Risk Tree"
		text="In July 2022, I built an existential risk visualizer."
		link="https://x-risk-tree.com/"
	/> -->
	<Project
		id={1}
		color={$themeStore.theme === "light" ? "#1A2D52" : "#57534e"}
		dark
		img="images/squares/melangepic.png"
		title="Melange"
		text="From 2021 to 2022, I worked on the front-end of a betting app in React Native and NextJS."
		link="https://www.melange.io/"
	/>
	<Project
		id={2}
		color={$themeStore.theme === "light" ? "#6cb6e0" : "#1e3a8a"}
		dark
		img="images/squares/starrynightglitchedsquare.png"
		title="Pixel Sorter"
		text="Create glitch art through pixel sorting! All processing is done in-browser."
		link="https://pixel-sorter.com/"
	/>
	<Project
		id={3}
		color={$themeStore.theme === "light" ? "#F5CBF3" : "#bd93f9"}
		img="images/squares/tdpic.png"
		title="Tonal Distancing"
		text="This web app uses a Rust server to highlight word proximity."
		link="https://tonal-distancing-client.vercel.app/"
		bottom
	/>
</div>
