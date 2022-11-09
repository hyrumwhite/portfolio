import { join } from "https://deno.land/std@0.155.0/path/mod.ts";

export const getPaths = async (parentPath = "pages"): Promise<string[]> => {
  let paths: string[] = [];
  for await (const dirEntry of Deno.readDir(parentPath)) {
    if (dirEntry.isDirectory) {
      const subPaths = await getPaths(join(parentPath, dirEntry.name));
      paths = paths.concat(subPaths);
    } else {
      paths.push(join(parentPath, dirEntry.name));
    }
  }
  return paths;
};
const parsePaths = (paths: string[]): RegExp[] => {
  const matchers: RegExp[] = [];
  for (const path of paths) {
    matchers.push(
      new RegExp(
        path
          .replaceAll("\\", "\\\\")
          .replaceAll(".", "\\.")
          .replace(/(\[[\w.-]+\])/g, "[\\w.-]+"),
        "g"
      )
    );
  }
  return matchers;
};

const paths = await getPaths();
export const matchers = parsePaths(paths);
