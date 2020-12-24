import http from 'http';
import fs from 'fs';

const indexHtml = 'src/index.html';
const greeterHtml = 'src/greeter.html';

const webApplication = http.createServer((request, response) => {
    if (request.url === '/home' || request.url === '/') {
        readFileContents(indexHtml, response);
    } else if (request.url === '/greeter') {
        readFileContents(greeterHtml, response);
    } else {
        readFileContents(indexHtml, response);
    }
});

function readFileContents(fileName: string, response: http.ServerResponse) {
    fs.readFile(fileName, 'utf8', (err, contents) => {
        if (err) {
            console.log(err);
            response.statusCode = 404;
            response.write(`File not found`);
        } else {
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
