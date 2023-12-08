import Header from "./Header";
import Signing from "./Signing";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: "Zi_F-3fTztPtozvm58nBdd21noBes10h" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Colour Board",
  projectId: "082cc0ea987ee9c208e2e9946db7184b",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode chains={chains}>
        <Header />
        <Signing />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
