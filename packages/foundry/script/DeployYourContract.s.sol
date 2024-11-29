//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/YourContract.sol";
import "./DeployHelpers.s.sol";

contract DeployYourContract is ScaffoldETHDeploy {
  // use `deployer` from `ScaffoldETHDeploy`
  function run() external ScaffoldEthDeployerRunner {
    YourContract nftContract = new YourContract("QUT Blockchain Member", "QUTBC", 0x4a1FaCE93C284D96C206A264461BCB5a5e9F823B);
    console.logString(
      string.concat(
        "QUT Blockchain Membership NFT deployed at: ", vm.toString(address(nftContract))
      )
    );
  }
}
