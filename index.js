#!/usr/bin/env node

import express from 'express';
import open from 'open';
import fs from 'node:fs';

const rootExecFolderPathArr = process.env._.split('/');

rootExecFolderPathArr.pop();
rootExecFolderPathArr.pop();

const publicFolder = rootExecFolderPathArr.join('/') + '/lib/node_modules/sr2_ui/build';

const pathToConfig = publicFolder + '/config.json';

const config = JSON.parse(fs.readFileSync(pathToConfig));


let PORT = 5000;

const portFromEnv = process.argv.find(value => value.startsWith('PORT='));

if (portFromEnv) PORT = Number(portFromEnv.split('=')[1]);

const serverPortFromEnv = process.argv.find(value => value.startsWith('SERVER_PORT='));

if (serverPortFromEnv) {
  const SERVER_PORT = serverPortFromEnv.split('=')[1];
  fs.writeFileSync(pathToConfig, JSON.stringify({ ...config, SERVER_PORT }));
}

const app = express();

app.get('*', (req, res) => {
  const filePath = publicFolder + req.url;
  if (fs.existsSync(filePath)) return res.sendFile(filePath);
  res.sendFile(publicFolder + '/index.html');
});

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  open(url);
  console.log(`SR2 ui is running on port: ${PORT}`);
  console.log('URL is ' + url);
});
