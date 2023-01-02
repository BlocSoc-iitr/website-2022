import wagbi from './projects/wagbi.png';
import starkpay from './projects/starkpay.png';
import nft from './projects/nft.jpg';
import uniorders from './projects/uniorders.jpeg';
import refinext from './projects/refinext.png';
import crosschain from './projects/blockchains.png';

var Project_List = [
    {   
        sl:1,
        heading:"wagbi.",
        label:["DeFi","Polygon","Kronos"],
        desc:"​WAGBI is a money market protocol that solves the current On-Chain Lending problems using the several new technologies and primitives.​",
        link:"https://github.com/pradyuman-verma/WAGBI",
        image:wagbi,
    },
    {   
        sl:1,
        heading:"StarkPay",
        label:["Starknet"],
        desc:"Stream seamless recurring crypto payments! Automate salaries by streaming them - so employees can withdraw whenever they want.",
        link:"https://github.com/chirag-bgh/starkpayv1",
        image:starkpay,
    },
    {   
        sl:2,
        heading:"Quantum NFT bridge",
        label:["Bridge", "NFTs", "Ethereum"],
        desc:"Quantum is a Decentralised NFT cross-chain bridging platform that supports the transfer of NFT minted using Quantum NFT manager.",
        link:"https://github.com/BlocSoc-iitr/Quantum-NFT-Bridge",
        image: nft,
    },
    {   
        sl:3,
        heading:"Cross Chain payments",
        label:["Cross-chain", "axelar", "Ethereum", "DeFi", "Dapp"],
        desc:"Cross chain payments is an interface through which a user with assets on one chain can easily perform cross-chain payments, without the necessity of owning assets on other-chains. We also deployed it on skynet so that a merchant doesn't have to worry about the payment infra going down if centralized services like AWS go down.",
        link:"https://devpost.com/software/cross-chain-payments",
        image: crosschain
    },
    {   
        sl:4,
        heading:"UniOrders",
        label:["range-order", "uniswap", "DeFi"],
        desc:"The app automates the complete process from placing the limit order and removing the liquidity after processing it in a limit order on UniswapV3.",
        link:"https://devfolio.co/projects/easyorders-0700",
        image: uniorders,
    },
    {   
        sl:4,
        heading:"Refi-next",
        label:[" Connext", "Cross-chain", "Refinance", "DeFi"],
        desc:"The dapp aims to help people to transfer there position from one protocol on a chain to another protocol in a different chain in a single click and gas efficiently sparing user from needing to clear his position from one chain manually and then bridge the tokens on a different chain.",
        link:" https://devfolio.co/projects/refinext-6247",
        image: refinext,
    }
]


export default {Project_List};