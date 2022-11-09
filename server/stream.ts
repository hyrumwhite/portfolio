export const getStream = async () => {
	let fileIndex = 0;

	const files = [
		"./public/start.html",
		"./public/main.html",
		"./public/end.html",
	];

	const promises = [];
	for (const file of files) {
		promises.push(Deno.open(file, { read: true }));
	}
	const fileHandles = await Promise.all(promises);

	return new ReadableStream({
		async pull(controller) {
			const buffer = new Uint8Array(64 * 1024);
			const file = fileHandles[fileIndex];
			const didRead = await file.read(buffer);
			if (didRead !== null) {
				controller.enqueue(buffer);
			} else {
				file.close();
				fileIndex += 1;
			}
			if (!file) {
				controller.close();
			}
		},
	});
};
