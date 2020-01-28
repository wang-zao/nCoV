import * as express from 'express';
import { Case } from '@ncov/api-interfaces';
import cases from './cases.json';

const app = express();

app.get('/api/cases', (req, res) => {
  res.send(cases);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/cases');
});
server.on('error', console.error);
