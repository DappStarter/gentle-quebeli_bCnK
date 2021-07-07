require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reward stereo proof grace globe equal gas'; 
let testAccounts = [
"0xc15e534a3ee7958f5d23e0a9b28675583e669deee1c4e854b177d8162b3949eb",
"0xdda32bad7b932fa779693ec75de669991d27764acad731e81cdaba0d60ec16cb",
"0x4cf84151ae80cb23a5e8ee83f09f51acef7a9b7945e3b15a05fab96fe1c631bc",
"0xa5953728a3cd9a1311e30da1b157f86bcc94865764bf1e6144d11a2b9ae0de98",
"0x87db3202524ed8de4593577294a3e295d5f8621d0e4e7999080d57b823f08beb",
"0x5a46cf01f13d6c02609fef9eb594f8c0597083840411383b950f17a37dcbd8cc",
"0xcabc7e7d7808167b6bbdcec6042315b580791a24141508404d0be773ec35fe1a",
"0xe1179fd7c116e3c7b22f4a791dfae1027ceb6aa2024e7fd763551b5bae604f0a",
"0x52d48ca8c3ee87fbeb3844da2a74841a2db8b73ea3a64c8da9af9a5837e5ada6",
"0xc4386a5be9f6bce72053d730376b3fafff09af1eab872b4f3f6d82ff31442671"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

