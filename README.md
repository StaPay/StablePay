![StaPay](https://drive.google.com/uc?export=download&id=1-YhSFbbwbqh49nUZZcgSHKYoGxNGfRix)

StaPay es una Dapp que funciona como una pasarela de pago, permitiendo a los clientes comprar productos en linea con tokens Matic y ERC20, mientras que los negocios retail reciben DAI Stablecoin.

## Problema

La volatilidad de las criptomonedas dificulta las transacciones en el ámbito del comercio electrónico, afectando tanto a comerciantes como a usuarios. Además, la interoperabilidad entre diferentes blockchains y criptomonedas presenta desafíos técnicos que deben abordarse para garantizar transacciones seguras y fluidas.

## Solución

Desarrollar una Dapp (aplicación descentralizada) que funcione como una pasarela de pago, permitiendo a los usuarios enviar cualquier tipo de criptomoneda mientras los comerciantes reciben stablecoins. La Dapp se basará en contratos inteligentes, utilizando herramientas y protocolos como Solidity, Hardhat, Chainlink, Push Protocol, React, Bridges y DEX (plataformas de intercambio descentralizado). Esta solución protegerá a los comerciantes de la volatilidad asociada con las criptomonedas y facilitará transacciones fluidas y seguras entre diferentes blockchains y criptomonedas.

### Resultado esperado:

Una Dapp de fácil integración en plataformas de comercio electrónico que permita a los usuarios realizar transacciones con cualquier criptomoneda, garantizando que los comerciantes reciban stablecoins. Esto brindará una alternativa estable para quienes buscan evitar la volatilidad de las criptomonedas tradicionales y mejorará la experiencia de compra en línea.


## ¿Cómo funciona?

![image](https://drive.google.com/uc?export=download&id=1F9OHTUqStRY0i9Vfmb7Kw-YpvOmuy3Xx)

### Visita [StaPay](https://stable-pay-ten.vercel.app)

## Herramientas utilizadas

  - Polygon
  - Solidity
  - HardHat
  - React
  - Alchemy
  - WalletConnect
  - Wagmi
  - Next.js
  - TailwindCSS
  - Chakra UI

## Equipo

**Dany Reyes**
  - Github: https://github.com/phoenixdhr
  - Email: danyreyes3109@gmail.com

**Alfonso Segovia**
  - Github: https://github.com/beyondercrypto
  - Email: alfonso.segoviam@outlook.com

**Guilad Perera**
  - Github: https://github.com/ainsdev
  - Email: ainsn1654@gmail.com

**Maricela Chavarria**
  - Github: https://github.com/chavita8
  - Email: maricela.chavarria.callahuara@gmail.com

**Rafael Ramirez**
  - Github: https://github.com//sass3r
  - Email: mrsblast@gmail.com

## React Installation

```bash
  npm install
```

## Hardhat Installation

```bash
  npm install
```

## Run Frontend

```bash
  npm install -g next@latest
  npm run build
  npm run start
```

## Smart Contract Deployment

```bash
  npx hardhat compile
  npx hardhat run --network Mumbai scripts/dyFactorySwapToStable.ts 
  npx hardhat run --network Mumbai scripts/dySwapToStable.ts
```
