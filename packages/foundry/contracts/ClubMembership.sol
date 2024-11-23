//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "forge-std/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * A smart contract that mints a non-transferable club membership NFT,
*  with an adjustable membershipFee in a currency tbd.
 * @author csmit863
 */
contract ClubMembershipNFT is ERC721, Ownable {

    bool private transferable = false;
    uint256 public membershipFee = 0; 

    constructor(string memory _name, string memory _symbol, address _owner)
        ERC721(_name, _symbol) Ownable(_owner) {}

    function setMembershipFee(uint256 newFee) public onlyOwner {
        membershipFee = newFee;
    }
}
