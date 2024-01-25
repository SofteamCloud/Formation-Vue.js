const express = require('express')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors({
  origin: '*'
}))

const db = new sqlite3.Database('./db/sqlite.db',  (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to database...')
});

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/todos', (req, res) => {
  try {
    db.all('SELECT * FROM todos', (err, rows) => {
      if (err) {
        return res.json({status: 300, success: false, err})
      }
      return res.json({ status: 200, success: true, data: rows })
    })
    
  } catch(e) {
    return res.json({ status: 500, success: false })
  }
})

app.get('/api/todos/:id', (req, res) => {
  try {
    db.get('SELECT * FROM todos WHERE ID = $id', {
      $id: req.params.id
    }, (err, rows) => {
      if (err) {
        return res.json({status: 300, success: false, err})
      }
      if (!rows) {
        return res.json({status: 300, success: false, error: "no match."})
      }
      return res.json({ status: 200, success: true, data: rows })
    })
    
  } catch(e) {
    return res.json({ status: 500, success: false })
  }
})

app.delete('/api/todos/:id', (req, res) => {
  try {
    db.run("DELETE FROM todos WHERE ID = $id", {
      $id: req.params.id,
    }, function(err) {
      if (err) {
        return res.json({ status: 300, success: false, err })
      }
      return res.json({ status: 200, success: true })
    });
    
  } catch(e) {
    return res.json({ status: 500, success: false })
  }
})

app.delete('/api/todos', (req, res) => {
  try {
    db.run("DELETE FROM todos", function(err) {
      if (err) {
        return res.json({ status: 300, success: false, err })
      }
      return res.json({ status: 200, success: true })
    });
    
  } catch(e) {
    return res.json({ status: 500, success: false })
  }
})


app.post('/api/todos', (req, res) => {
  try {
    const body = req.body;
    db.run("INSERT INTO todos VALUES ($id, $todo, $created_at)", {
      $id: body.id,
      $todo: body.todo,
      $created_at: Date.now().toString()
    }, function(err) {
      if (err) {
        return res.json({ status: 300, success: false, err })
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
      return res.json({ status: 200, success: true })
    });
    
  } catch(e) {
    return res.json({ status: 500, success: false })
  }
})


app.post('/api/todos/search', (req, res) => {
  try {
    const body = req.body;
    db.all("SELECT * FROM todos WHERE todo LIKE ?",
      ['%' + body.q + '%'], 
      function(err, rows) {
        if (err) {
          return res.json({ status: 300, success: false, err })
        }
      return res.json({ status: 200, success: true, data: rows })
    });
    
  } catch(e) {
    return res.json({ status: 500, success: false })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
