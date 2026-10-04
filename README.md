# Solana Data API for AI agents (x402)

Pay-per-call Solana data for AI agents and bots. **USDC on Solana via [x402](https://x402.org)** — no account, no API key, no subscription.

**Base URL:** https://solana-token-check.vercel.app · [Docs](https://solana-token-check.vercel.app/docs/) · [OpenAPI](https://solana-token-check.vercel.app/openapi.json) · [llms.txt](https://solana-token-check.vercel.app/llms.txt)

| Endpoint | What you get | Price |
|---|---|---|
| `GET /v1/token/{mint}` | Risk check: mint/freeze authority, top holders, liquidity, pair age, score 0-100 | ~0.001 USDC |
| `GET /v1/price/{mint}` | Price feed: USD price, 5m/1h/6h/24h change, volume & liquidity across all DEX pairs, FDV, market cap | ~0.001 USDC |
| `GET /v1/trending` | Trending Solana tokens with quick risk flags | ~0.002 USDC |
| `GET /v1/new` | Newest Solana tokens with risk flags | ~0.002 USDC |
| `GET /v1/wallet/{address}` | Wallet snapshot: SOL balance, holdings valued in USD | ~0.002 USDC |

Prices are kept at or below half the x402 market median.

## Quick start

```bash
npm install
SOLANA_PRIVATE_KEY=<base58 secret key of a wallet with a little USDC> node example.mjs DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263
```

`example.mjs` wraps `fetch` with `@x402/fetch`: the first request gets HTTP 402, the client signs a USDC payment and retries automatically.

Use a dedicated wallet with only a few cents of USDC. Never commit your key.

## From an AI agent (MCP)

Any x402-paying MCP server (for example AgentCash) can call this API: give it the base URL, it discovers the endpoints from `openapi.json` and pays per call.

## Notes

- Data comes from public Solana RPC and DexScreener. Automated data, **not financial advice**.
- Listed on [x402scan](https://www.x402scan.com).
