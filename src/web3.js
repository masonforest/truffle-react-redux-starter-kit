import Web3 from 'web3';
import truffleConfig from '../truffle.js'

var provider;

if (typeof window.web3 !== 'undefined') {
  provider = window.web3.currentProvider;
} else {
  provider = new Web3.providers.HttpProvider(`http://${truffleConfig.networks.development.host}:${truffleConfig.networks.development.port}`)
};

export { provider };

export default new Web3(provider);
