const blockchain = require('./blockchain');
const bitcoin = new blockchain();

const blockchain1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1680507226376,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1680507459282,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1680507472695,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "cc4fae346d9649898ed937d4f69eadb5",
                    "transactionId": "6c46be8440814fce838f56ef6fab64a9"
                }
            ],
            "nonce": 13798,
            "hash": "00000abf429471f1ebafb9240be39808598ba29bf7e3ee06eadc15f2965c45ab",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1680507523361,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "05932613d3cb44f197c1850ccd208e06",
                    "transactionId": "28222f9f9f2a4630832d66267ea7358a"
                },
                {
                    "amount": 350,
                    "sender": "JKJGGJKDHOSOURHHO909098HHIH",
                    "recipient": "AHHKKOUJHHYIUYHIGPYOUIYIGG",
                    "transactionId": "fd18b68fe2d44973b5e1fa1b9c4a8dc0"
                }
            ],
            "nonce": 33361,
            "hash": "00007117707158c8b7d39f1d55b02c1a2a2e1e442413351d5de54420a13a8633",
            "previousBlockHash": "00000abf429471f1ebafb9240be39808598ba29bf7e3ee06eadc15f2965c45ab"
        },
        {
            "index": 5,
            "timestamp": 1680507541549,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "05932613d3cb44f197c1850ccd208e06",
                    "transactionId": "e3d15dfb811949928c11472bf62091a0"
                }
            ],
            "nonce": 100756,
            "hash": "0000092785b81ec64761a4ac72dba48571a265162f66545e770af5a670ec6c56",
            "previousBlockHash": "00007117707158c8b7d39f1d55b02c1a2a2e1e442413351d5de54420a13a8633"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "05932613d3cb44f197c1850ccd208e06",
            "transactionId": "a3ad57a28881467a8905770b2fa26e73"
        }
    ],
    "currentNodeUrl": "http://localhost:3004",
    "networkNodes": [
        "http://localhost:3003"
    ]
}

console.log("Valid:", bitcoin.chainIsValid(blockchain1.chain));   