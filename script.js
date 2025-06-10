window.addEventListener("load", () => {
	const video = document.getElementById("delayed");

	if (!video) return;

	let hasPlayed = false;

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (
					!hasPlayed &&
					entry.isIntersecting &&
					entry.intersectionRatio >= 0.6
				) {
					video.play();
					hasPlayed = true;
					observer.unobserve(entry.target); // Stop observing after play
				}
			});
		},
		{
			threshold: [0, 0.6, 1.0], // Triggers when visibility crosses 60%
		}
	);

	observer.observe(video);
});
