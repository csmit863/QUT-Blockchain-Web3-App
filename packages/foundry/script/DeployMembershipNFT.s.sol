//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/ClubMembership.sol";
import "./DeployHelpers.s.sol";

contract DeployMembershipContract is ScaffoldETHDeploy {
  // use `deployer` from `ScaffoldETHDeploy`
  function run() external ScaffoldEthDeployerRunner {
    ClubMembershipNFT nftContract = new ClubMembershipNFT("QUT Blockchain Member", "QUTBC", deployer);
    console.logString(
      string.concat(
        "QUT Blockchain Membership NFT deployed at: ", vm.toString(address(nftContract))
      )
    );
  }
}
