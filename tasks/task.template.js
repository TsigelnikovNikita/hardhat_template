require("dotenv").config();

task("task template", "Description of the task")
    .addParam("ParamName", "This is a mandatory param")
    .addOptionalParam("ParamName", "This is not a mandatory param")
    .setAction(async (taskArgs) => {
        const ContractFactory = await ethers.getContractFactory("ContractName");
        const contract = await ContractFactory.attach(process.env.CONTRACT_ADDRESS);
    });
