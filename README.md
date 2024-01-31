# Name and summary of the use case
RingSig protocol is a decentralized, regulated privacy solution based on Artela.<br>
It deploys on EVM of Artela, and uses ASPECT preContractCall function to Verify whether the user come from a KYC CEX using the input TX.<br>
And utilizes ring signature proof to break the link between deposit and withdrawal addresses, which ensures asset privacy with each transaction.
<br>
# Names of team member(s) and roles
Team Leader: Kevin Lin(@0xkevinlin), responsible for the development, operation and branding of the entire project.<br>
1st prize winner, On-Chain InnovationTrack, 2023 ETH HongKong Hackathon<br>
<br>
Core Development: Arthur(@Donny1296389), solidity developer<br>
1st prize winner, On-Chain InnovationTrack, 2023 ETH HongKong Hackathon<br>
<br>
Branding & IR：Juliechen(@0xjuliechen), UPenn Graduate, prev. A&T Capital, SevenX Ventures, Ambassador of Solana Foundation

# An overview of the addressed problem and how the team intends to resolve it through the creation of this Aspect
Compliance is a key requirement for privacy protocol. This protocol ensures user compliance by verifying the transaction hash provided by the user. In the past, Ethereum generally needed to obtain certain historical transaction information off-chain. This is an asynchronous operation and will cause many other problems.<br>
<br>
To solve this problem, we handle it through Artela Aspect preContractCall function. Before the contract is called, it will verify the transaction hash provided by the user in advance. If the verification passes, the user is compliant, otherwise it will be reverted. It is a synchronous operation, very simple, and no other problems arise.

# The design process behind the project
The first time we heard that Artela is a full-chain design and could provide historical query data, we couldn't wait to start reading the documentation and developing it. The seamless communication between WASM and EVM and the strong support of the official development team make the development process extremely smooth.


# The value that this Aspect brings to the Artela Ecosystem
The full-chain design provided by as can realize synchronous full-chain query. This is the first public chain to support this function. It is a qualitative change and may directly drive the revolution of the chain.

# Disclosure
Historical hash query Our protocol was used for the first time in HongKong 2023 hackathon, which was Completely centralized. Then in Chainlink winter hackathon 2023, we used chainlink functions, which is decentralized, but this was an asynchronous query, which resulted in many secondary problems that needed to be dealt with, greatly increasing the complexity of the protocol and improving user operations.
