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
		dark={$themeStore.theme === "dark"}
		title="Resume"
		link="conor_barnes_resume.pdf"
		text="I'm always down to hear about freelancing opportunities! Click here to download my resume."
		flip><Languages /></Project
	>
	<Project
		id={1}
		color="#F4F6F7"
		dark={$themeStore.theme === "dark"}
		img="images/squares/80k.png"
		title="80,000 Hours"
		text="I work at 80,000 Hours as a software engineer on the job board!"
		link="https://jobs.80000hours.org/"
	/>
	<Project
		id={2}
		color={$themeStore.theme === "dark" ? "#014421" : "#5BC26A"}
		dark={$themeStore.theme === "dark"}
		img="images/squares/tree-sample.png"
		title="The Possible Worlds Tree"
		text="In July 2022, I built an existential risk visualizer."
		link="https://possibleworldstree.com/"
	/>
	<Project
		id={3}
		color={$themeStore.theme === "dark" ? "#57534e" : "#1A2D52"}
		dark
		img="images/squares/melangepic.png"
		title="Melange"
		text="From 2021 to 2022, I worked on the front-end of a betting app in React Native and NextJS."
		link="https://www.melange.io/"
	/>
	<Project
		id={4}
		color={$themeStore.theme === "dark" ? "#1e3a8a" : "#6cb6e0"}
		img="images/squares/starrynightglitchedsquare.png"
		title="Pixel Sorter"
		text="Create glitch art through pixel sorting! All processing is done in-browser."
		link="https://pixel-sorter.com/"
	/>
	<Project
		id={5}
		color={$themeStore.theme === "dark" ? "#bd93f9" : "#F5CBF3"}
		img="images/squares/tdpic.png"
		title="Tonal Distancing"
		text="This web app uses a Rust server to highlight word proximity."
		link="https://tonal-distancing-client.vercel.app/"
		bottom
	/>
</div>
