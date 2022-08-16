import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { normalize, extname } from "https://deno.land/std/path/mod.ts";
import { extensionContentTypeMap } from "./ExtensionContentTypeMap.ts";

async function handleRequest(request: Request): Promise<Response> {
	const { pathname } = new URL(request.url);
	let filePath = `./public${normalize(pathname)}`;
	if (filePath === "./public/") {
		filePath += "index.html";
	}
	const extension = extname(filePath);
	try {
		const file = await Deno.readFile(filePath);
		return new Response(file, {
			headers: {
				"content-type": extensionContentTypeMap[extension] || "text/plain",
			},
		});
	} catch (e) {
		if (extension.length === 0) {
		}
		return new Response("File not found", { status: 404 });
	}
}

serve(handleRequest, { port: 3443 });
