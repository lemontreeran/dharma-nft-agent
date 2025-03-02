require('@nomicfoundation/hardhat-toolbox'); // or '@nomiclabs/hardhat-ethers' etc.
require("dotenv").config();

module.exports = {
    solidity: "0.8.20",
    networks: {
        dharma: {
            url: 'https://rpc-0x4e454177.aurora-cloud.dev',
            chainId: 1313161591,
            gasPrice: 1000000000,
            accounts: [
                // 这里填你的私钥，如 "0xabcd1234xxxx..."
                // 也可使用dotenv从 .env 中读取
                process.env.PRIVATE_KEY || "0xYOUR_PRIVATE_KEY_HERE"
            ]
        },
        // ... 其他网络配置
    },
    etherscan: {
        // 如果有自己的区块浏览器并支持类似Etherscan的验证API，可在此配置
        apiKey: {
            dharma: "any-key-if-needed"
        },
        customChains: [
            {
                network: "dharma",
                chainId: 1313161591,
                urls: {
                    apiURL: "https://explorer.0x4e454177.aurora-cloud.dev/api",    // 如果你有 Explorer API
                    browserURL: "https://explorer.0x4e454177.aurora-cloud.dev"     // 浏览器前端
                }
            }
        ]
    }
};
