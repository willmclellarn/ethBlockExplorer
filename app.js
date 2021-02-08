var app = require('express')();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(8080, () => { console.log("Server online on http://localhost:8080"); });


ROPSTEN_ENDPOINT = "https://ropsten.infura.io/v3/52b953df5f6b4a6492692cfebee33c34";

const ethers = require("ethers");
const axios = require('axios').default;

;(async () => {
  response = await axios({
    url: ROPSTEN_ENDPOINT,
    method: 'post',
    data: {
      "jsonrpc":"2.0",
      "method":"eth_getBlockByNumber",
      "params": ["latest", false],
      "id":1
    }
  })
  console.log('here comes the block by number');
  console.log(response.data.result);
  let difficulty = JSON.stringify(response.data.result.difficulty);
  let obj = JSON.stringify(response.data.result);

  // find it at http://localhost:8080/

  app.get("/", (req, res) => { res.render("index", { difficulty: difficulty, obj: obj });});

})()

console.log('starting');


// let promise = axios({
//   method: 'post',
//   url: ROPSTEN_ENDPOINT,
//   data: {
//     "jsonrpc":"2.0",
//     "method":"eth_blockNumber",
//     "params": [],
//     "id":1
//   }
// });


// const ethers = require('ethers');
// const { Wallet, utils } = ethers;
// const { wallet1 } = require('./wallets');
//
// // TODO: replace all undefined values
// const signaturePromise = wallet1.signTransaction({
//     value: utils.parseUnits('1.0', 'ether'),
//     to: "0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92",
//     gasLimit: 21000,
//     gasPrice: utils.parseUnits('2', 'gwei'),
// });
//
// module.exports = signaturePromise;


// const { Wallet, utils, providers } = require('ethers');
// const { ganacheProvider, PRIVATE_KEY } = require('./config');
//
// // TODO: replace undefined with a new web3 provider
// const provider = new providers.Web3Provider(ganacheProvider);;
//
// const wallet = new Wallet(PRIVATE_KEY);
//
// async function sendEther({ value, to }) {
//     const rawTxHash = await wallet.signTransaction({
//         value, to,
//         gasLimit: 0x5208,
//         gasPrice: 0x3b9aca00
//     });
//     return provider.sendTransaction(rawTxHash);
//     // TODO: send the transaction and return the transaction promise
// }
//
// module.exports = sendEther;


// let currentBlockNumber = 0;
//
// ;(async () => {
//   const response = await axios({
//     url: ROPSTEN_ENDPOINT,
//     method: 'post',
//     data: {
//       "jsonrpc":"2.0",
//       "method":"eth_blockNumber",
//       "params": [],
//       "id":1
//     }
//   })
//   console.log(parseInt(response.data.result, 16));
//   console.log('got the block number');
//   currentBlockNumber = parseInt(response.data.result, 16);
// })()
