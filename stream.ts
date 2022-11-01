export const getStream = () => {
	let file: Deno.FsFile;
	let didRead: number | null = null;
	let fileIndex = 0;

	const files = [
		"./public/start.html",
		"./public/main.html",
		"./public/end.html",
	];

	return new ReadableStream({
		async pull(controller) {
			const buffer = new Uint8Array(10);
			const filePath = files[fileIndex];
			if (didRead === null && filePath) {
				file = await Deno.open(filePath, { read: true });
			}
			didRead = await file.read(buffer);
			if (didRead !== null) {
				controller.enqueue(buffer);
			} else {
				file.close();
				fileIndex += 1;
			}
			if (!filePath) {
				controller.close();
			}
		},
	});
};
