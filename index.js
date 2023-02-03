const searchBar = document.querySelector(".search-bar");
const search = document.querySelector(".search");
const keyword = document.querySelector(".keyword");
const img = document.querySelector("img");

async function handleGIF() {
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=UrbD4m6kVRvnpdqaMw2LzqBgVsojJHxq&s=${searchBar.value}`,
			{ mode: "cors" }
		);
		const gifData = await response.json();
		img.src = gifData.data.images.original.url;
		keyword.textContent = searchBar.value;
		img.classList.add("active");
	} catch {
		console.error("GIF not found");
		keyword.textContent = `No GIFS found for "${searchBar.value}"`;
		img.src = "";
		img.classList.remove("active");
	}
}

search.addEventListener("click", handleGIF);

searchBar.addEventListener("keydown", (e) => {
	if (e.code === "Enter") handleGIF();
});
