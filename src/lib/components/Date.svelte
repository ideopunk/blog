<script>
	export let dateString = "";
	let parsedDate = new Date(dateString);
	let date = `${parsedDate.toLocaleDateString(["en-CA"], {
		month: "short",
		day: "numeric",
		year: "numeric"
	})}`;

	$: {
		console.log(date);
	}
</script>

<time class="text-sm md:text-base font-light" dateTime={dateString}>
	{date}
</time>
