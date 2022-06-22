# Basic Hardhat Project Template

This is a simple template of hardhat project. Template contains a lot of useful packages for
smart-contract developing. You can find all of these in the ```hardhat.config.js``` file.

You also can setting up settings of this config using .env file:
- COMPILE_VERSION: version of solc compile what you want to use. By default is "0.8.4".
- OPTIMIZER: enable (true) or disable (false) optimizer of the compliler. By default is true.
- OPTIMIZER_RUNS: amount of runs for your optimizer. By default it is 200.
- REPORT_GAS: enable (true) or disable (false) report about spended gas by your contract. This
report will be generated when running test. By default is true.
- RINKEBY_NETWORK_URI: URI of the Rinkeby RPC server. By default is empty. If you won't add this
variable, you won't be able to use this network. It's strongly recommended don't add private info
into the project files dirrectly.
- SIGNER_PRIVATE_KEY: private key of your address. By default is empty. If you won't add this
variable, you won't be able to use any additional network. It's strongly recommended don't add
private info into the project files dirrectly.

You also can use ```script/storage-layout.js``` script for checking storage layout of your smart-contract.

## How to use it?
- clone the repo directly in your working directory using
```git clone https://github.com/TsigelnikovNikita/hardhat_template .```;
- remove .git directory of this repo using ```rm -rf .git```;
- install all dependencies using ```npm i```;
