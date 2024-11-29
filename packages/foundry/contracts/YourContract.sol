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
contract YourContract is ERC721, Ownable {
    
    // should be managed by elected committee
    // payments should be transferred to the owner (Safe treasury)

    bool private transferable = false;
    uint256 public membershipFee = 0; 

    mapping(uint256 => bool) private mintedStudentNumbers; // student number => taken boolean
    mapping(uint256 => uint256) private membershipExpirations; // tokenId => timestamp

    constructor(string memory _name, string memory _symbol, address _owner)
        ERC721(_name, _symbol) Ownable(_owner) {}

    function setMembershipFee(uint256 newFee) public onlyOwner {
        membershipFee = newFee;
    }

    function mintMembership(address _memberAddress, uint256 _studentNumber) public { // , address _paymentToken
        // determine whether _paymentToken is an accepted currency and then transfer a mapped fee amount to the contract
        // check if the student number is already taken
        require(!mintedStudentNumbers[_studentNumber], "Student number already taken.");
        // <payment logic here>
        _mint(_memberAddress, _studentNumber);
        mintedStudentNumbers[_studentNumber] = true;
    }

    function renewMembership(uint256 _studentNumber) public payable {
        require(ownerOf(_studentNumber) == msg.sender, "Not the owner of the membership.");
        // <payment logic here>
        membershipExpirations[_studentNumber] = block.timestamp + 365 days; // e.g., 1-year renewal
    }

    function revokeMembership(uint256 _studentNumber) public onlyOwner {
        // revoke membership in case account is compromised to prevent malicious voting on snapshot
        require(_exists(_studentNumber), "Membership does not exist."); // Ensure token exists
        _burn(_studentNumber); // Burn the NFT
        mintedStudentNumbers[_studentNumber] = false; // Reset student number mapping
    }

}
