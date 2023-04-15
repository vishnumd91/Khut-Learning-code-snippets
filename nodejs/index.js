const http = require("http");
const urlModule = require("url");
const fs = require("fs");
const { log } = require("console");

const PORT = 9092;

const urlParserMethod = (reqUrl) => {
  return urlModule.parse(reqUrl, true).query;
};

const server = http.createServer((req, res) => {
  const { url } = req;
  //   res.setHeader("Content-Type", "text/html");
  //   res.write(`Hello <h1>Web App</h1> running in ${PORT}`);
  if (url !== "/favicon.ico") {
    if (url.includes("/save")) {
      const data = urlParserMethod(url);
      const objectStructure = [
        {
          id: data.id,
          name: data.name,
          phone: data.phone,
        },
      ];
      if (!fs.existsSync("./employee.json")) {
        fs.appendFile(
          "employee.json",
          JSON.stringify(objectStructure) + ",",
          () => console.log("Saved")
        );
        res.write("Saved");
        res.end();
      } else {
        console.log("data", objectStructure);
        objectStructure.push({
          id: data.id,
          name: data.name,
          phone: data.phone,
        });
        // const newData = [...objectStructure];

        fs.unlink("employee.json", () => console.log("Deleted"));
        fs.appendFile("employee.json", JSON.stringify(objectStructure), () =>
          console.log("Saved")
        );
        res.write("Saved");
        res.end();
      }
    }
    if (url.includes("/fetchAll")) {
      console.log("Fetched");
      const parser = fs.readFileSync("employee.json");
      //   const contents = JSON.parse(parser);
      //   console.log(contents.name);
      const contents = JSON.parse(parser);
      console.log(contents);
      const out = contents.map((content) =>
        res.write(`<table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${content.id}</td>
                <td>${content.name}</td>
                <td>${content.phone}</td>
            </tr>
        </tbody>
      </table>`)
      );
      res.end();
    }
  }
});

server.listen(PORT, () => console.log("Server Running Successfully"));
