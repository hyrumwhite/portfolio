import { normalize, extname } from "https://deno.land/std/path/mod.ts";
import { mime } from "./mime.ts";
import { getStream } from "./stream.ts";

export const getStaticFileResponse = async (url: string): Promise<Response> => {
  const { pathname } = new URL(url);
  let filePath = `./public${normalize(pathname)}`;
  if (filePath === "./public/") {
    filePath += "index.html";
  }
  const extension = extname(filePath);
  const mimeType = mime.getType(extension) || "text/html; charset=utf-8";
  const stream = await getStream();
  return new Response(stream, {
    headers: {
      "content-type": mimeType,
    },
  });
};
