# Next.js-seminaarityö

## Johdanto

Tässä seminaarityössä selvitän Next.js:n [ominaisuuksia](https://www.uxpin.com/studio/blog/nextjs-vs-react/) ja miten pystyn hyödyntämään niitä. Samalla on myös harjoiteltu TypeScriptiä. Lisäksi rakennan yksinkertaista Trivia-sovellusta, jossa pyrin demonstroimaan ominaisuuksia käytännössä. Raportoin tulokset oppimispäiväkirjan muodossa.

## Käytetyt tekniikat

- Node
- Next.js
- TypeScript
- React
- HTML
- Tailwind CCS

## Mikä on Next.js?

[Next.js](https://nextjs.org/docs) on Reactin kehys, jolla voidaan luoda full-stack web-sovelluksia. React itsessään on JavaScript-kirjasto, jolla voi rakentaa front-puolta, mutta Next.js tarjoaa lisänä joitakin backend-ominaisuuksia, kuten server-side rendering ja static site generation. Nämä tehostavat merkittävästi esim. web-sivujen lataamista.

## Next.js:n ominaisuudet, joita on demonstroitu Trivia-sovelluksessa

### Server-side rendering

[Server-side rendering](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering) on yksi Next.js:n avainominaisuuksista, joka mm. nopeuttaa suoritusta ja hakukoneoptimointia. Käytännössä serveripuoli muodostaa HTML-sivun jokaisella pyynnöllä ja se luodaan jo serveri-puolella, ennen kuin se näytetään käyttäjälle. Merkittävä ero verrattuna pelkkään Reactiin on se, että client-puoli luo HTML-sivun ja sen toteuttamiseksi pitää ladata JavaScript ensin.

Trivia-sovelluksessa tämä demonstroidaan tiedostossa [page.tsx](src/app/page.tsx).

1. getQuestions-funktio hakee ensin annetun API:n kautta dataa (ei ota välimuistista)
2. Json-data otetaan vastaan ja tallennetaan muuttujaan `data`
3. Data palautetaan ja renderöidään funktiossa `Page`
4. Lopuksi tieto lähetetään HTML-sivulle.

### Static site generation

[Static site generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation) mahdollistaa tiedostojen esilataamisen build-vaiheessa eli tiedot haetaan ennen kuin käyttäjä vierailee sivulla. Tämä ominaisuus on kätevin komponenteille, joiden ei ole tarpeen muuttua jatkuvasti, esim. staattinen teksti.

Trivia-sovelluksessa tämä demonstroidaan tiedostossa [description/page.tsx](src/app/description/page.tsx)

### Incremental Static Generation

[Incremental Static Generation](https://www.sanity.io/glossary/incremental-static-regeneration) mahdollistaa yksittäisten osien dynaamisen päivittämisen ilman, että tarvitsee ladata koko sivua uudestaan

## Mitä muuta opin?

### Hookien käyttö

Reactin hookit ovat client-puolen ominaisuuksia, joten ne eivät sellaisenaan toimi server-komponentissa. Törmäsin tähän ongelmaan yrittäessäni luoda Trivia-pelin etusivua. Jotta client-hookeja voidaan käyttää server-komponentissa, on ensimmäiselle riville laitettava `"use client";`.

### App Router vs. Pages Router

App Router on Next.js:n uudempaa arkkitehtuuria, jonka vuoksi osa ominaisuuksista eroavat vanhemmasta Pages Routerista.

Erot:

| Ominaisuudet       | App Router | Pages Router |
|--------------      |------------|--------------|
| Reittien sijainti  | src/app/   | pages/       |
| getServerSideProps | Ei tuettu  | Tuettu       |

## Lähteet

- Vercel Inc, 2025. [Next.js-dokumentaatio](https://nextjs.org/docs). Luettu 4.5.2025.
- Vercel Inc, 2025. [Server-side rendering](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering). Luettu 4.5.2025.
- Vercel Inc, 2025. [Static site generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation). Luettu: 4.5.2025.
- PIXELTAIL GAMES LLC, 2025. [Open Trivia Database](https://opentdb.com/api_config.php). Luettu: 4.5.2025.
- Sanity, 2025. [Sanity.io](https://www.sanity.io/glossary/next-js). Luettu: 4.5.2025.
- UXPin, 31.1.2025. [UXPin](https://www.uxpin.com/studio/blog/nextjs-vs-react/). Luettu: 4.5.2025.