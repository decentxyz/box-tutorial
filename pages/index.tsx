import { GridBackdrop } from "@/components/GridBackdrop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Body } from "@/components/Body";
import "@decent.xyz/the-box/dist/the-box-base.css";
import { useAccount, useSigner } from "wagmi";
import { TheBox } from "@decent.xyz/the-box";
import { ethers } from "ethers";

export default function BoxSplashPage() {
  const { address } = useAccount();
  const { data: signer } = useSigner();

  const nftParams = {
    address: "0xf7d3ddffae7ec2576c9a6d95fe7d0f79c480c721",
    chainId: 137,
    mintParams: {
      abi: "function mint(address to,uint256 numberOfTokens) payable",
      params: [address, 1],
      cost: ethers.utils.parseEther("0.1"),
    },
    displayCost: "0.1 Matic",
    title: "REALLY SICK NFT!!!!🚀",
  };

  return (
    <Body>
      <GridBackdrop>
        <Nav />
        {signer ? (
          <TheBox
            className="rounded-lg border shadow-md bg-white"
            signer={signer}
            nftParams={nftParams}
            apiKey={process.env.NEXT_PUBLIC_DECENT_API_KEY!}
            options={{
              allowPrimary: true,
              allowSwapping: true,
              allowBridging: true,
              allowSecondary: true,
            }}
          />
        ) : (
          <p>please connect your wallet</p>
        )}
        <Footer />
      </GridBackdrop>
    </Body>
  );
}
