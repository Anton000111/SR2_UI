#!/usr/bin/env node

import express from 'express';
import open from 'open';
import fs from 'node:fs';

const PORT = 5000;

const rootExecFolderPathArr = process.env._.split('/');

rootExecFolderPathArr.pop();
rootExecFolderPathArr.pop();

const publicFolder = rootExecFolderPathArr.join('/') + '/lib/node_modules/sr2_ui/build';

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
