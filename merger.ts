const { readFile } = Deno;
const start = await readFile("./public/start.html");
const main = await readFile("./public/main.html");
const end = new TextEncoder().encode(`</body></html>`);

const mergeIndex = (body: Uint8Array): Uint8Array => {
  const combinedFile = new Uint8Array(start.length + body.length + end.length);
  combinedFile.set(start, 0);
  combinedFile.set(body, start.length);
  combinedFile.set(end, body.length + start.length);
  return combinedFile;
};
const combinedFile = mergeIndex(main);
const fileString = new TextDecoder().decode(combinedFile);
console.log(fileString);

let currentFile = Deno.open("./index.html");
export const getStream = (): ReadableStream => {
  const stream = new ReadableStream({
    async pull(controller) {
      const read = await currentFile;
      if (read) {
        controller.enqueue(read);
      } else {
        currentFile = Deno.open("./body.html");
        controller.enqueue(await currentFile);
      }
    },
  });
  return stream;
};