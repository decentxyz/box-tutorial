## Integration docs

### TheBox spec
```
type TheBox = {
    signer: Signer | null,        // needed to execute trade
    nftParams: {
        address: string,          // the nft address
        chainId: number,          // the chain the nft is on
        paymentToken?: string,    // required if payment token != native chain
        mintParams?: {            // required unless allowPrimary = false
          abi: string | array,    // an accepted ethers abi input
          params: array,          // params for abi input
          cost: BigNumberish,     // price of primary
          endSupply?: {           // needed to trigger secondary sales
            maxCap?: number,
            saleEndBlock?: number
          }
        }
    }
    options?: {                   // all default to true
        allowSecondary: boolean,
        allowPrimary: boolean,
        allowBridging: boolean,
        allowSwapping: boolean
    }
}
```

### example implementation:

`$ npm i @decent.xyz/sdk`

```
import {TheBox} from 'decent-sdk'

...
...

return (
  <div>
    your fancy code here
    <TheBox 
      signer={signer || null} 
      nftParams={{
        address: "0xf7d3DDFfaE7ec2576C9a6d95Fe7D0F79C480C721",
        chainId: 137,
        paymentToken: ethers.constants.AddressZero,
        mintParams: {
          abi: "function mint(address to,uint256 numberOfTokens) payable",
          params: [wallet, 1],
          cost: ethers.utils.parseEther("0.1"),
          recipient: wallet
        },
      }}
      options={{
        allowSecondary: false,
      }}
    />
  </div>
)
```
