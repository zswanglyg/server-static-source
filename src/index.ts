import { staticServer } from "./static-server";

staticServer.listen(8000);
staticServer.addListener("listening", () => {
  console.log("start server success !");
});
