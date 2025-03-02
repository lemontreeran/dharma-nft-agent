import React from 'react';
import { WagmiConfig, useAccount } from 'wagmi';
import { config } from './wagmiConfig';
import MintPanelWithAIAgent from './components/MintPanelWithAIAgent';
import { ConnectWalletButton } from './components/ConnectWalletButton';

function AppContent() {
    const { isConnected } = useAccount();

    return (
            <div className="App">
            <h1>AI NFT on DharmaChain</h1>
            {isConnected ? (
                    <MintPanelWithAIAgent />
            ) : (
                    <ConnectWalletButton />
            )}
        </div>
    );
}

function App() {
    return (
            <WagmiConfig config={config}>
            <AppContent />
            </WagmiConfig>
    );
}

export default App;
