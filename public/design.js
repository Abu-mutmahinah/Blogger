const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "../MarkdownPart/designTools");
let designPostlist = [];

const getDesignPosts = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory" + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${directoryPath}/${file}`, "utf8", (arr, contents) => {
        const getMetadataInds = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };

        const parseMetadata = ({ lines, metadataIndes }) => {
          if (metadataIndes.length > 0) {
            let metadata = lines.slice(metadataIndes[0] + 1, metadataIndes[1]);
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };

        const parseContent = ({ lines, metadataIndes }) => {
          if (metadataIndes.length > 0) {
            lines = lines.slice(metadataIndes[1] + 1, lines.length);
          }
          return lines.join("\n");
        };

        const lines = contents.split("\n");
        const metadataIndes = lines.reduce(getMetadataInds, []);
        const metedata = parseMetadata({ lines, metadataIndes });
        const content = parseContent({ lines, metadataIndes });

        post = {
          id: i + 1,
          title: metedata.title ? metedata.title : "no title given",
          date: metedata.date ? metedata.date : "no date given",
          heading: metedata.heading ? metedata.heading : "no heading given",
          content: content ? content : "no content given",
          image: metedata.image ? metedata.image : "no image given",
        };
        designPostlist.push(post);
        if (i === files.length - 1) {
          let data = JSON.stringify(designPostlist);
          fs.writeFileSync("src/designPost.json", data);
        }
      });
    });
  });
  return;
};

getDesignPosts();
