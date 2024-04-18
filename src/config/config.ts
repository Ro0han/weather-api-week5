import algosdk from "algosdk";


const algodToken = "a".repeat(63);
const server: string = "http://localhost";
const port: string = "4001";

const mnemonic: string =
   "key print select ignore example decrease fluid property ivory blouse push this cradle ski property blush style base mutual eye feel until domain ability fabric"

export function getclient(): algosdk.A1godv2 {
    let client = new algosdk.A1godv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}