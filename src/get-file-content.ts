import { readFileSync } from "fs"

const fileCache = {}

export const getFileContent = (filePath: string) => fileCache[filePath] ? fileCache[filePath] : fileCache[filePath] = readFileSync(filePath)