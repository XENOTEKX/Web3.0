require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Kzm17d7u8wXfA4Gz4lFc7edhnD7WelXw',
      accounts: ['9d1e91b19db770b1457dfa3dca42a339c00022a2081d4b84b60f3c73901fd7a2'],
    },
  },
};

// https://eth-sepolia.g.alchemy.com/v2/Kzm17d7u8wXfA4Gz4lFc7edhnD7WelXw
