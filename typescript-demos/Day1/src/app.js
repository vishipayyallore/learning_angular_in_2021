"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const indexHtml = 'src/index.html';
const greeterHtml = 'src/greeter.html';
const webApplication = http_1.default.createServer((request, response) => {
    if (request.url === '/home' || request.url === '/') {
        readFileContents(indexHtml, response);
    }
    else if (request.url === '/greeter') {
        readFileContents(greeterHtml, response);
    }
    else {
        readFileContents(indexHtml, response);
    }
});
function readFileContents(fileName, response) {
    fs_1.default.readFile(fileName, 'utf8', (err, contents) => {
        if (err) {
            console.log(err);
            response.statusCode = 404;
            response.write(`File not found`);
        }
        else {
            response.statusCode = 200;
            response.write(contents);
        }
        response.end();
    });
}
var port = process.env.PORT || 3090;
webApplication.listen(port, () => {
    console.log(`process.env.PORT: ${process.env.PORT}`);
    console.log(`Web Application is listening on ${port}. Click http://localhost:${port} to view the application.`);
});
//# sourceMappingURL=app.js.map