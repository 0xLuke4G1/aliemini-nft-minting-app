export const contractAddress = "0x59EEdCf7cCB566eC1001A8A43C6F609B80e6f661";
export const contractAbi = [
	{
		inputs: [
			{ internalType: "uint64", name: "_price", type: "uint64" },
			{ internalType: "uint64", name: "_totalSupply", type: "uint64" },
			{ internalType: "uint8", name: "_maxMintsPerAddress", type: "uint8" },
			{ internalType: "uint8", name: "_devFee", type: "uint8" },
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{ inputs: [], name: "AlieMINICollection__AlreadyInThisState", type: "error" },
	{ inputs: [], name: "AlieMINICollection__CantWithdrawZero", type: "error" },
	{ inputs: [], name: "AlieMINICollection__DevTransferFailed", type: "error" },
	{ inputs: [], name: "AlieMINICollection__ExceedsTotalSupply", type: "error" },
	{ inputs: [], name: "AlieMINICollection__InsufficientAmount", type: "error" },
	{
		inputs: [],
		name: "AlieMINICollection__MaxQuantityMintableExceeded",
		type: "error",
	},
	{
		inputs: [],
		name: "AlieMINICollection__MintLimitCanOnlyBeIncreased",
		type: "error",
	},
	{ inputs: [], name: "AlieMINICollection__NotAllowedToMint", type: "error" },
	{ inputs: [], name: "AlieMINICollection__NullValue", type: "error" },
	{ inputs: [], name: "AlieMINICollection__WithdrawalFailed", type: "error" },
	{ inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
	{ inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
	{ inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
	{ inputs: [], name: "MintERC2309QuantityExceedsLimit", type: "error" },
	{ inputs: [], name: "MintToZeroAddress", type: "error" },
	{ inputs: [], name: "MintZeroQuantity", type: "error" },
	{ inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
	{ inputs: [], name: "OwnershipNotInitializedForExtraData", type: "error" },
	{ inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
	{ inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
	{ inputs: [], name: "TransferToNonERC721ReceiverImplementer", type: "error" },
	{ inputs: [], name: "TransferToZeroAddress", type: "error" },
	{ inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "AirdroppedMINI",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{ indexed: false, internalType: "bool", name: "approved", type: "bool" },
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{ anonymous: false, inputs: [], name: "BaseURIChanged", type: "event" },
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "fromTokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "toTokenId",
				type: "uint256",
			},
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
		],
		name: "ConsecutiveTransfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "MintedMINI",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint64",
				name: "newPrice",
				type: "uint64",
			},
		],
		name: "PriceChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{ anonymous: false, inputs: [], name: "WithdrawnSuccessful", type: "event" },
	{
		inputs: [{ internalType: "address", name: "receiver", type: "address" }],
		name: "airdropMINI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "changeMintState",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "getApproved",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getMaxMintsPerAddress",
		outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "getNumberOfTokensMintend",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getPrice",
		outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTotalMinted",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTotalSupply",
		outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
		],
		name: "isApprovedForAll",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isMintOpen",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "mintMINI",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "s_collectionInfo",
		outputs: [
			{ internalType: "uint64", name: "price", type: "uint64" },
			{ internalType: "uint64", name: "totalSupply", type: "uint64" },
			{ internalType: "uint8", name: "maxMintsPerAddress", type: "uint8" },
			{ internalType: "uint8", name: "devFee", type: "uint8" },
			{ internalType: "bool", name: "isMintOpen", type: "bool" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
			{ internalType: "bytes", name: "_data", type: "bytes" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "string", name: "_newBaseURI", type: "string" }],
		name: "setBaseURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint8", name: "_newLimit", type: "uint8" }],
		name: "setMaxMintsPerAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint64", name: "_newPrice", type: "uint64" }],
		name: "setPrice",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "tokenURI",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
