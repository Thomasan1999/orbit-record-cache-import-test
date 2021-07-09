import express from 'express';
import * as http from 'http';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const basePath = path.join(__dirname, 'dist');
app.use(express.static(basePath));
http.createServer({}, app).listen(3000);
//# sourceMappingURL=server.js.map