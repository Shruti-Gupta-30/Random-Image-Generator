import { useEffect, useState } from "react";

export function useScrollPosition() {
	const [isBottom, setIsBottom] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setIsBottom(
				window.innerHeight + document.documentElement.scrollTop >=
					document.documentElement.offsetHeight - 20
			);
		});
	}, []);

	return { isBottom };
}
