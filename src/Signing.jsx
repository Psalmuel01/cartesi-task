import { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";

const Signing = () => {
  const { isConnected } = useAccount();

  const [signature, setSignature] = useState("");
  const { data, error, isError, isLoading, isSuccess, signMessageAsync } =
    useSignMessage({
      message: "You are signing this message for Cartesi masterclass",
    });

  return (
    <div>
      {isConnected && (
        <div>
          <h1>Sign Message</h1>
          <p>You are about to sign a message</p>
          <button onClick={() => signMessageAsync()}>
            {isLoading ? "Signing..." : "Sign Message"}
          </button>
          {isSuccess && (
            <div>
              <p>Success!</p>
              <button onClick={() => setSignature(data)}>View signature</button>
              <p>Signature: {signature}</p>
            </div>
          )}
          {isError && <p>Error: {error.message}</p>}
        </div>
      )}
    </div>
  );
};

export default Signing;
