import React from 'react';
import { useConnect } from 'wagmi';

export function ConnectWalletButton() {
    const { connect, connectors, error, isLoading } = useConnect();

    return (
        <div>
          {connectors.map((connector) => (
              <button key={connector.id} onClick={() => connect({ connector })}>
                Connect with {connector.name}
              </button>
          ))}
          {isLoading && <p>Connecting...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        </div>
    );
}
