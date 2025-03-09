// async function main() {
//     const Voting = await ethers.getContractFactory("Voting");

//     // Start deployment, returning a promise that resolves to a contract object
//     const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 10);
//     console.log("Contract address:", Voting_.address);
  
  
//   }
  
//   main()
//    .then(() => process.exit(0))
//    .catch(error => {
//      console.error(error);
//      process.exit(1);
//    });



   const hre = require("hardhat");
   async function main() {
    
   const Voting = await hre.ethers.getContractFactory("Voting");
   const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 10);

   await Voting_.deployed();
   console.log(
    `Contract address: ${Voting_.address}`
   );
   }
   // We recommend this pattern to be able to use async/await everywhere
   // and properly handle errors.
   main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
   });