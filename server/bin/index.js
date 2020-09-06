import http from "http";
import app from "../app";
const port = process.env.PORT || 8081;
http.createServer(app).listen(port);
