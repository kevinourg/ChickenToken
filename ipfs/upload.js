const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Poulet",
      attributes: [
        {
          "trait_type": "Cuteness",
          "value": "Extremely High"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.ipfs.io/ipfs/QmVJR8cppHM3cAq7862WRjPKUL9Ap5HHXXF8v8Co2tG4Ys",
      description: "Best poulet ever"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
console.log("done");
