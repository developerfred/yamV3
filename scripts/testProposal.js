var Web3 = require('web3');
var assert = require('assert');
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv-flow').config();
let p = new HDWalletProvider(
  [process.env.DEPLOYER_PRIVATE_KEY],
  'https://mainnet.infura.io/v3/731a2b3d28e445b7ac56f23507614fea',//'https://fee7372b6e224441b747bf1fde15b2bd.eth.rpc.rivet.cloud',
  0,
  1,
);

var gp = Number(process.env.GAS_PRICE);
var web3 = new Web3(p);
let governor = new web3.eth.Contract([{"inputs": [{"internalType": "address", "name": "timelock_", "type": "address"}, {"internalType": "address", "name": "yam_", "type": "address"}], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}], "name": "ProposalCanceled", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}, {"indexed": false, "internalType": "address", "name": "proposer", "type": "address"}, {"indexed": false, "internalType": "address[]", "name": "targets", "type": "address[]"}, {"indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]"}, {"indexed": false, "internalType": "string[]", "name": "signatures", "type": "string[]"}, {"indexed": false, "internalType": "bytes[]", "name": "calldatas", "type": "bytes[]"}, {"indexed": false, "internalType": "uint256", "name": "startBlock", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "endBlock", "type": "uint256"}, {"indexed": false, "internalType": "string", "name": "description", "type": "string"}], "name": "ProposalCreated", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}], "name": "ProposalExecuted", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "eta", "type": "uint256"}], "name": "ProposalQueued", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "address", "name": "voter", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "proposalId", "type": "uint256"}, {"indexed": false, "internalType": "bool", "name": "support", "type": "bool"}, {"indexed": false, "internalType": "uint256", "name": "votes", "type": "uint256"}], "name": "VoteCast", "type": "event"}, {"constant": true, "inputs": [], "name": "BALLOT_TYPEHASH", "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "DOMAIN_TYPEHASH", "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "guardian", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "latestProposalIds", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "name", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "proposalCount", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "name": "proposals", "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}, {"internalType": "address", "name": "proposer", "type": "address"}, {"internalType": "uint256", "name": "eta", "type": "uint256"}, {"internalType": "uint256", "name": "startBlock", "type": "uint256"}, {"internalType": "uint256", "name": "endBlock", "type": "uint256"}, {"internalType": "uint256", "name": "forVotes", "type": "uint256"}, {"internalType": "uint256", "name": "againstVotes", "type": "uint256"}, {"internalType": "bool", "name": "canceled", "type": "bool"}, {"internalType": "bool", "name": "executed", "type": "bool"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "timelock", "outputs": [{"internalType": "contract TimelockInterface", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "yam", "outputs": [{"internalType": "contract YAMInterface", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "quorumVotes", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "proposalThreshold", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "proposalMaxOperations", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "pure", "type": "function"}, {"constant": true, "inputs": [], "name": "votingDelay", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "pure", "type": "function"}, {"constant": true, "inputs": [], "name": "votingPeriod", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "pure", "type": "function"}, {"constant": false, "inputs": [{"internalType": "address[]", "name": "targets", "type": "address[]"}, {"internalType": "uint256[]", "name": "values", "type": "uint256[]"}, {"internalType": "string[]", "name": "signatures", "type": "string[]"}, {"internalType": "bytes[]", "name": "calldatas", "type": "bytes[]"}, {"internalType": "string", "name": "description", "type": "string"}], "name": "propose", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"internalType": "uint256", "name": "proposalId", "type": "uint256"}], "name": "queue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"internalType": "uint256", "name": "proposalId", "type": "uint256"}], "name": "execute", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"internalType": "uint256", "name": "proposalId", "type": "uint256"}], "name": "cancel", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"internalType": "uint256", "name": "proposalId", "type": "uint256"}], "name": "getActions", "outputs": [{"internalType": "address[]", "name": "targets", "type": "address[]"}, {"internalType": "uint256[]", "name": "values", "type": "uint256[]"}, {"internalType": "string[]", "name": "signatures", "type": "string[]"}, {"internalType": "bytes[]", "name": "calldatas", "type": "bytes[]"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"internalType": "uint256", "name": "proposalId", "type": "uint256"}, {"internalType": "address", "name": "voter", "type": "address"}], "name": "getReceipt", "outputs": [{"components": [{"internalType": "bool", "name": "hasVoted", "type": "bool"}, {"internalType": "bool", "name": "support", "type": "bool"}, {"internalType": "uint256", "name": "votes", "type": "uint256"}], "internalType": "struct GovernorAlpha.Receipt", "name": "", "type": "tuple"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"internalType": "uint256", "name": "proposalId", "type": "uint256"}], "name": "state", "outputs": [{"internalType": "enum GovernorAlpha.ProposalState", "name": "", "type": "uint8"}], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"internalType": "uint256", "name": "proposalId", "type": "uint256"}, {"internalType": "bool", "name": "support", "type": "bool"}], "name": "castVote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"internalType": "uint256", "name": "proposalId", "type": "uint256"}, {"internalType": "bool", "name": "support", "type": "bool"}, {"internalType": "uint8", "name": "v", "type": "uint8"}, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {"internalType": "bytes32", "name": "s", "type": "bytes32"}], "name": "castVoteBySig", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "__acceptAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "__abdicate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"internalType": "address", "name": "newPendingAdmin", "type": "address"}, {"internalType": "uint256", "name": "eta", "type": "uint256"}], "name": "__queueSetTimelockPendingAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"internalType": "address", "name": "newPendingAdmin", "type": "address"}, {"internalType": "uint256", "name": "eta", "type": "uint256"}], "name": "__executeSetTimelockPendingAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}], "0x62702387C2a26C903985e9D078d18C45ACaE0908")

async function a() {
  let accounts = await web3.eth.getAccounts();
  let targets = ["0x8b4f1616751117c38a0f84f9a146cca191ea3ec5"]; // rebaser
  let values = [0]; // dont send eth
  let signatures = ["setPendingAdmin(address)"]; //function to call
  let calldatas = ["0x00000000000000000000000078bdd33e95ecbcac16745fb28db0ffb703344026"]; // [[[uniToAdd],[balToAdd]]]
  let description = "Reinstate guardian with reduced functionality (cancel only)";
  console.log("proposing");
  await governor.methods.propose(
    targets,
    values,
    signatures,
    calldatas,
    description
  ).send({from: accounts[0], gas: 800000, gasPrice: gp});
  let latest = await governor.methods.getActions(2).call();
  console.log(latest)

  //   if (i == 3) {
  //
  //   }
  //   await web3.currentProvider.sendAsync({
  //     jsonrpc: "2.0",
  //     method: "evm_mine",
  //     id: new Date().getTime()
  //   },
  //   (err, _) => {
  //         if (err) {
  //           return "bad";
  //         }
  //         // const newBlockHash = web3.eth.getBlock("latest").hash;
  //
  //         return "done";
  //       });
  // }
  // latest = await web3.eth.getBlock("latest");
  // console.log(latest)
}

a()
