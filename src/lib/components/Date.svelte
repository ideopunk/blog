<script>
	export let dateString = "";
	let parsedDate = new Date(dateString);
	let date = `${parsedDate.toLocaleDateString(["en-CA"], {
		month: "short",
		day: "numeric",
		year: "numeric"
	})}`;
</script>

<time class="text-sm font-light" dateTime={dateString}>
	{date}
</time>
