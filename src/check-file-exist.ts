import { accessSync, constants } from "fs";

export const checkFileExist: (path: string) => boolean = (path: string) => {
  try {
    accessSync(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
