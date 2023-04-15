import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());

const PORT = 9090;

const dbUrl = "mongodb://127.0.0.1:27017/";

app.get("/", (req, res) => res.send("This is a home controller"));

app.get("/students", (req, res) => {
  const testData = [];
  MongoClient.connect(dbUrl, () => console.log("MongoDB Connected"))
    .then((client) => {
      let db = client.db("testdb");
      db.collection("test1")
        .find()
        .forEach((item) => testData.push(item))
        .catch((err) => console.log(err))
        .finally(() => {
          res.status(200).json(testData);
          client.close();
        });
    })
    .catch((err) => console.log(err));
});

app.post("/postData", (req, res) => {
  const item = req.body;
  MongoClient.connect(dbUrl, () => console.log("MongoDB Connected"))
    .then((client) => {
      let db = client.db("testdb");
      db.collection("test1")
        .insertOne(item)
        .then((result) => res.status(201).json(result))
        .catch((err) => console.log(err))
        .finally(() => {
          client.close();
        });
    })
    .catch((err) => console.log(err));
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  MongoClient.connect(dbUrl)
    .then((client) => {
      let db = client.db("testdb");
      db.collection("test1")
        .findOne({ _id: id })
        .then((result) => {
          if (result !== null) {
            res.status(200).json(result);
          } else {
            res.status(500).json({ error: "Id not found" });
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          client.close();
        });
    })
    .catch((err) => console.log(err));
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  MongoClient.connect(dbUrl).then((client) => {
    let db = client.db("testdb");
    db.collection("test1")
      .findOne({ _id: id })
      .then((result) => {
        console.log(result);
        if (result !== null) {
          db.collection("test1").deleteOne({ _id: id });
          res.status(200).json(`Data with ${id} has been deleted`);
        } else {
          res.status(500).json({ error: "Id not found" });
        }
      });
  });
});

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  MongoClient.connect(dbUrl).then((client) => {
    let db = client.db("testdb");
    db.collection("test1")
      .findOne({ _id: id })
      .then((result) => {
        console.log(result);
        if (result !== null) {
          db.collection("test1").updateOne(
            { _id: id },
            { $set: updatedItem },
            { new: true }
          );
          res.status(200).json(updatedItem);
        } else {
          res.status(500).json({ error: "Id not found" });
        }
      });
  });
});

app.listen(PORT, () => console.log("Server running successfully"));
