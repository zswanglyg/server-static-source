import * as http from "http";
import { getLocalPath } from "./get-local-path";
import { getFileContent } from "./get-file-content";
import { getFullUrlPath } from "./get-full-url-path";
import { contentType } from "./content-type";
import { isRegExpMatchArray } from "./utils/isRegExpMatchArray";
import { checkFileExist } from "./check-file-exist";

export const staticServer = http.createServer((req, res) => {
  try {
    const localPath = getLocalPath(getFullUrlPath(req.url || "/"));
    if (checkFileExist(localPath)) {
      const matchResult = localPath.match(/(?<=\.)[^\.]+$/);
      if (isRegExpMatchArray(matchResult)) {
        res.writeHead(200, {
          "Content-Type": contentType[matchResult[0]],
        });
        res.end(getFileContent(localPath));
      } else {
        res.writeHead(500);
        res.end("server error");
      }
    } else {
      res.writeHead(404);
      res.end("not fund");
    }
  } catch (e) {
    res.writeHead(500);
    res.end("server error");
    console.log(e)
  }
});
