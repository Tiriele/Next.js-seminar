# Next.js-seminaarityö

## Johdanto

Tässä seminaarityössä selvitän Next.js:n ominaisuuksia ja miten pystyn hyödyntämään niitä. Lisäksi rakennan yksinkertaista sovellusta, jossa pyrin demonstroimaan ominaisuuksia käytännössä. Raportoin tulokset oppimispäiväkirjan muodossa.

## Mikä on Next.js?

[Next.js](https://nextjs.org/docs) on Reactin kehys, jolla voidaan luoda full-stack web-sovelluksia. React itsessään on JavaScript-kirjasto, jolla voi rakentaa front-puolta, mutta Next.js tarjoaa lisänä joitakin backend-ominaisuuksia, kuten server-side rendering ja static site generation. Nämä nopeuttavat merkittävästi esim. web-sivujen lataamista sekä parantaa hakukoneoptimointia.

Dokumentaatio suosittelee, että käyttäjällä on aikaisempaa tietoa HTML:stä, CCS:stä, JavaScriptistä ja Reactista.

## Next.js:n ominaisuuksia

- Server-side rendering nopeuttaa suoritusta ja hakukoneoptimointia
- Static site generation mahdollistaa tiedostojen esilataamisen build-vaiheessa
- [Incremental Static Generation](https://www.sanity.io/glossary/incremental-static-regeneration) mahdollistaa yksittäisten osien dynaamisen päivittämisen ilman, että tarvitsee ladata koko sivua uudestaan

### Server-side rendering

[Server-side rendering](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering) on yksi Next.js:n avainominaisuuksista. Käytännössä serveripuoli muodostaa HTML-sivun jokaisella pyynnöllä.

## Next.js:n ominaisuudet yksinkertaisessa esimerkkisovelluksessa

## Mitä opin?

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

- [Next.js-dokumentaatio](https://nextjs.org/docs)
- [Sanity.io](https://www.sanity.io/glossary/next-js)