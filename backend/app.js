const express = require('express');
const fs = require('fs');
const { RpcProvider, Contract, json } = require("starknet");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const alchemyKey = process.env.ALCHEMY_KEY;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const providerRPC = new RpcProvider({
    nodeUrl: "https://starknet-goerli.g.alchemy.com/v2/" + alchemyKey,
  });

const factoryAddress = "0x0359c2c9a3465b57cb973db044dc3b1be31c7469e209e1deed9037f4b44ea405"
const compiled = json.parse(fs.readFileSync("../blockend/target/dev/gameasset_GameFactory.contract_class.json").toString("ascii"))

// const contract = new Contract(compiled.abi, factoryAddress, providerRPC)

app.get('/', (req, res) => {
    
    res.json({
        success: true,
        message: 'Hello World!'
    })}
);

app.get('/user-games' , async (req, res) => {
    const { address, from_block, to_block } = req.body;
    const lastBlock = await providerRPC.getBlock('latest');
    const eventsList = await providerRPC.getEvents({
      address : factoryAddress, // 0x02350c15be788e9bd0ca53cfcd9674298012b64f9e41e57ad4474184c66f11c1
      from_block: { block_number:  lastBlock.block_number - 999 }, // 927400
      to_block: { block_number: lastBlock.block_number }, // 933230
      keys: [[]],
      chunk_size: 999,
    }); 
    const events = []
    eventsList.events.map((event) => {
        events.push({
            gameAddress : event.data[0],
            owner : event.data[1],
        })
    })
    res.json({
        success: true,
        data: events
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})