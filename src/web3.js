import Web3 from 'web3';
import truffleConfig from '../truffle.js'

var web3;

if (typeof window.web3 !== 'undefined') {
  // eslint-disable-next-line
  web3 = new Web3(window.web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider(`http://${truffleConfig.rpc.host}:${truffleConfig.rpc.port}`))
};

export default web3;
