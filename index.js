import app from "./app.js";
import config from "./config/index.js";
import colors from "colors";

app.listen(config.port, () => {
	console.log(`Server listening on ${config.port}`.yellow.underline);
});
