import web3 from './web3';
const address ='0x002062Da5176aeBa699C75E410D21808B3A204D3';
//0x1c6b656E0b37880CD03514166EfC4Ed5dC3f4a04
const abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "batchNo",
          "type": "string"
        }
      ],
      "name": "BatchAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "batchNo",
          "type": "string"
        }
      ],
      "name": "DoneCertification",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "batchNo",
          "type": "string"
        }
      ],
      "name": "DoneCultivation",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "batchNo",
          "type": "string"
        }
      ],
      "name": "DoneDistribution",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "batchNo",
          "type": "string"
        }
      ],
      "name": "DoneLab",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "batchNo",
          "type": "string"
        }
      ],
      "name": "DoneProcessing",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "userType",
          "type": "string"
        }
      ],
      "name": "UserAdded",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUserRole",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "batchNo",
          "type": "string"
        }
      ],
      "name": "getNextAction",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_userType",
          "type": "string"
        }
      ],
      "name": "setUser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUser",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "userType",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_crop",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_variety",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_sourceQuantity",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_Date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Owner",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_plotno",
          "type": "uint256"
        }
      ],
      "name": "setBatchDetails",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        }
      ],
      "name": "getBatchDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "_crop",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_variety",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_sourceQuantity",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_Date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Owner",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_plotno",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        }
      ],
      "name": "setSeedGrower",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        }
      ],
      "name": "getSeedGrower",
      "outputs": [
        {
          "internalType": "string",
          "name": "date",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        }
      ],
      "name": "setProcessor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        }
      ],
      "name": "getProcessor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "setLab",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        }
      ],
      "name": "getLab",
      "outputs": [
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_certifacateNo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_validity",
          "type": "uint256"
        }
      ],
      "name": "setCertification",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        }
      ],
      "name": "getCertification",
      "outputs": [
        {
          "internalType": "string",
          "name": "_certifacateNo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_validity",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_storeHouse",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Date",
          "type": "string"
        }
      ],
      "name": "setDistribution",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        }
      ],
      "name": "getDistribution",
      "outputs": [
        {
          "internalType": "string",
          "name": "_storeHouse",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Date",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        }
      ],
      "name": "consumer",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "batchId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "crop",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "variety",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "sourceQuantity",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "Date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Owner",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "plotno",
              "type": "uint256"
            }
          ],
          "internalType": "struct seed.BatchDetails",
          "name": "bcon",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            }
          ],
          "internalType": "struct seed.seedGrower",
          "name": "scon",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "batchId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            }
          ],
          "internalType": "struct seed.processor",
          "name": "spcon",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "batchId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "result",
              "type": "string"
            }
          ],
          "internalType": "struct seed.lab",
          "name": "lcon",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "batchId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "certifacateNo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "validity",
              "type": "uint256"
            }
          ],
          "internalType": "struct seed.certification",
          "name": "ccon",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "batchId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "storeHouse",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Date",
              "type": "string"
            }
          ],
          "internalType": "struct seed.distribution",
          "name": "dcon",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
export default new web3.eth.Contract(abi,address);

