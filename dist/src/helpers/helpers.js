import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";
export const storeWeatherData = async (data) => {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();
        const note = algosdk.encodeObj(data);
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, //Minimun amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signedTxn(account.sk);
        const sendTxn = await client.sendRawTransaction(signedTxn).do();
        console.log("Transaction ID:", sendTxn.txId);
    }
    catch (error) {
        console.error("Failed to store weather data:", error);
    }
};
//# sourceMappingURL=helpers.js.map