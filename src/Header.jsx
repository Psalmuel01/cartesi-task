import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <>
      <div>
        <h2 className="logo">Cartesi Task</h2>
      </div>
      <div>
        <ConnectButton showBalance />
      </div>
    </>
  );
};

export default Header;
