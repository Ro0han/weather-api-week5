import algosdk from "algosdk";
const algodToken = "a".repeat(63);
const server = "http://localhost";
const port = "4001";
const mnemonic = "key print select ignore example decrease fluid property ivory blouse push this cradle ski property blush style base mutual eye feel until domain ability fabric";
export function getclient() {
    let client = new algosdk.A1godv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map