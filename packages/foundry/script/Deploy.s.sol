//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./DeployHelpers.s.sol";
// default
import { DeployYourContract } from "./DeployYourContract.s.sol";
import { DeployMembershipContract } from "./DeployMembershipNFT.s.sol";


contract DeployScript is ScaffoldETHDeploy {
  function run() external {
    // default
    DeployYourContract deployYourContract = new DeployYourContract();
    deployYourContract.run();

    // deploy more contracts here
    // DeployMyContract deployMyContract = new DeployMyContract();
    // deployMyContract.run();

    //DeployMembershipContract deployMembership = new DeployMembershipContract();
    //deployMembership.run();
  }
}
