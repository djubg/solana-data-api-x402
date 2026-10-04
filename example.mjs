// Call the Solana Data API and pay automatically in USDC (x402, Solana mainnet).
// Usage: SOLANA_PRIVATE_KEY=<base58 secret key of a wallet holding a little USDC> node example.mjs [mint]
import { wrapFetchWithPaymentFromConfig } from "@x402/fetch";
import { ExactSvmScheme, toClientSvmSigner } from "@x402/svm";
import { createKeyPairSignerFromBytes, getBase58Encoder } from "@solana/kit";

const BASE = "https://solana-token-check.vercel.app";
const mint = process.argv[2] || "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"; // BONK

const signer = await createKeyPairSignerFromBytes(getBase58Encoder().encode(process.env.SOLANA_PRIVATE_KEY));
const fetchWithPayment = wrapFetchWithPaymentFromConfig(fetch, {
  schemes: [{ network: "solana:*", client: new ExactSvmScheme(toClientSvmSigner(signer)) }],
});

const res = await fetchWithPayment(`${BASE}/v1/price/${mint}`);
console.log(res.status, await res.json());
