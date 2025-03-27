import { yellow, green, bold} from "@std/fmt/colors"
import { app } from "./app/app.ts";
const port = Deno.env.get("PORT") || "8070";

app.addEventListener("listen", ({ hostname, port, serverType }) => {
  console.log(
    bold("Start listening on ") + yellow(`${hostname}:${port}`),
  );
  console.log(bold("  using HTTP server: " + yellow(serverType)));
});

try {
  console.log(yellow('Listening on port:'),green(port));
  if(Deno.env.get("DENO_ENV") == "Development"){
    await app.listen({
      hostname:"localhost",
      port:parseInt(port),
      secure:true,
      cert: Deno.readTextFileSync("./tls/localhost.crt"),
      key: Deno.readTextFileSync("./tls/localhost.key")
    })
  } else {
    await app.listen({
      port:parseInt(port)
    })
  }
  
  console.log(bold("Finished"))

} catch (error) {
  console.log("Error",error)
}
