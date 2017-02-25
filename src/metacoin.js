import Contract from 'truffle-contract';
import MetaCoinArtifact from '../contracts/MetaCoin.sol';
import { provider } from './web3';
const MetaCoin = Contract(MetaCoinArtifact);
MetaCoin.setProvider(provider);
export default MetaCoin.deployed();
