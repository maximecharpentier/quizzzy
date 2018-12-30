# Quizzzy

🧭 A 1month project for @ecolehetic, with the aim of creating an interactive story, using @react.
> [⚛️ React scripts](https://github.com/Quizzzy/scripts.md)
> [Instructions](https://hackmd.io/e5ffbuJyS2S2Ql19pt5XAA?fbclid=IwAR3Z43FRkVwntKyLwxWLYfjqU7r1pBndl-_el3l4ltn4yzaO3F6Kqqqd-3k)

## Run it

- Install all dependencies: `yarn` or `npm i`
- At the root of the repo, in 2 different command line: `yarn start` & `gulp`

## Features

- [x] Récupérer les questions
- [x] Afficher une question, pouvoir y répondre
- [x] Afficher un score
  - [ ] Si 3 erreurs, le score est reset à 0
  - [ ] Avoir la possibilité de reset notre score
  - [x] Si score === 10 : Afficher "T'es un winner"
- [x] Ne jamais afficher 2 fois la même question
- [x] Possibilité de choisir sa catégorie
  - [x] Premier chargement de la page, demander de choisir une catégorie parmi celles disponible sur l'api
  - [x] Sauvegarder ce choix en localStorage
  - [ ] Possibilité de changer de catégorie (et reset le score)
- [ ] Si je reviens sur la page, je veux avoir mon score, mon nombre d'essai (pour arriver à 10 bonnes réponses) et une fois de plus, je ne veux pas retomber sur les mêmes questions.
- [x] Vous pouvez faire un Game over.

## Categories

- [World Capitals](http://jservice.io/popular/78?fbclid=IwAR1cZbZ8SxSioH7mb77pL5NTMMgQfrTckuq_bIHJGyjcd2pwb2T5ooXMsek)
- [Brand Names](http://jservice.io/popular/2537?fbclid=IwAR3ueaQeuPYUVx_F9OwJZfqoVlugb-NL2MXWfF4zQTBJh2G5_rg1mr8ffJI)
- [The Movies](http://jservice.io/popular/309?fbclid=IwAR3ueaQeuPYUVx_F9OwJZfqoVlugb-NL2MXWfF4zQTBJh2G5_rg1mr8ffJI)

## Technos

- [reactjs](https://reactjs.org/)
- [jService](http://jservice.io/)
- [gulpjs](https://gulpjs.com/)

## Team

- [Joe Teixera](http://joetxa.co/)
- [Alexandre Delaloy](https://github.com/blyndusk)
- [Maxime Charpentier](https://maximecharpentier.fr/)

----
