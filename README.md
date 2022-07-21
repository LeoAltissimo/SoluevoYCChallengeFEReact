# Soluevo test code

[![N|Soluevo](https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/readme/brutus%20logo.png)](https://soluevo-ycc-hallenge-fer-eact-1en3obe4x-leoaltissimo.vercel.app/)

## Descriptions

This project simulates a product catalog of a fictional store (Butus trucks). When interacting with the system, the user can view the catalog and save what are his favorite items. [Here you can access a live demo](https://soluevo-ycc-hallenge-fer-eact-1en3obe4x-leoaltissimo.vercel.app/)

- View featured products
- Manage the list of favorite products

![N|Soluevo](https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/readme/banner.jpg)

## How run it

To run this project is extremely simple, just make sure you have the latest LTS version of [Node.js](https://nodejs.org/) installed and follow these steps:

- clone the repository
```sh
$ git clone https://github.com/LeoAltissimo/SoluevoYCChallengeFEReact
```

- Acess the project folder
```sh
$ cd /SoluevoYCChallengeFEReact
```

- Install dependeces
```sh
$ npm install
```

- Run the dev mode
```sh
$ npm run dev
```

## Project process

#### Documentation C4 model

After understanding the business requirements, documentation was written using the C4 model as a basis. This documentation was intended to guide the development and allow the generation of a scalable architecture for new future features.
[Link to access full documentation](https://miro.com/app/board/uXjVOlCC3rE=/?share_link_id=311476629400)

[![N|Soluevo](https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/readme/doc.png)](https://miro.com/app/board/uXjVOlCC3rE=/?share_link_id=311476629400)

#### UI Mockup on figma 

Once the structure and organization of the project were defined, UI research began. Defining how and what the features would be, as well as the visual language that spoke to the brand and its customers
[Link to access the figma document](https://www.figma.com/file/nlvphFFVQObkZwldKYDxev/Soluevo?node-id=0%3A1)

[![N|Soluevo](https://savecoinfiles.nyc3.cdn.digitaloceanspaces.com/misc/soluevo/readme/moc.png)](https://www.figma.com/file/nlvphFFVQObkZwldKYDxev/Soluevo?node-id=0%3A1)

#### Development

The development was using React and NextJs, with support from Redux. The defined architecture was a variation of MVVM, it was made this way with the expectation that the project can expand in a decoupled and modular way. Clean code and clean architecture concepts were also applied
