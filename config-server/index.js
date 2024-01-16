const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');

app.get('/plugins', function(req, res){
    const filePath = path.join(__dirname, 'config/plugins.json');
    var plugins = fs.createReadStream(filePath);
    plugins.pipe(res);
});

app.get('/workspaces', function(req, res){
    const filePath = path.join(__dirname, 'config/workspaces.json');
    var plugins = fs.createReadStream(filePath);
    plugins.pipe(res);
});

//NOTE: This is a very naive implementation. It does not consider multiple user interactions, concurrency issues, auth, or the fact that the client has access to override the entire configuration. Only for for demo purposes
app.post('/plugins', async (req, res) => {
    try {
      const data = req.body;
      const filePath = path.join(__dirname, 'config/plugins.json');
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
      res.status(201).json({ message: 'Success' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error writing workspaces to disk' });
    }
  });

  app.post('/workspaces', async (req, res) => {
    try {
      const data = req.body;
      const filePath = path.join(__dirname, 'config/workspaces.json');
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
      res.status(201).json({ message: 'Success' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error writing workspaces to disk' });
    }
  });

app.listen(3000)
