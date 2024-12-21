//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/YourContract.sol";
import "./DeployHelpers.s.sol";

contract DeployYourContract is ScaffoldETHDeploy {
  // use `deployer` from `ScaffoldETHDeploy`
  function run() external ScaffoldEthDeployerRunner {
    YourContract nftContract = new YourContract("QUT Blockchain Member", "QUTBC", 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
    console.logString(
      string.concat(
        "QUT Blockchain Membership NFT deployed at: ", vm.toString(address(nftContract))
      )
    );
  }
}
