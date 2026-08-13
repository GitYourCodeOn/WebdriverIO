# WebdriverIO e2e

Mocha + WebdriverIO UI tests against [Sauce Demo](https://www.saucedemo.com/), a stable public shop that does not need test accounts.

The original suite compared ETH prices between Aave and Etherscan. Those pages change layout often, so the live demo now covers a full login → add to cart → checkout path that you can run on every clone.

## Requirements

- Node.js 18 or later
- Google Chrome

## Run

```bash
npm install
HEADLESS=true npm test
```

## What it covers

- Login as `standard_user`
- Add Sauce Labs Backpack to the cart
- Checkout and assert the order confirmation

GitHub Actions runs the same command on every push.
