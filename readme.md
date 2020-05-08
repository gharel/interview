# MyCE

## Technologies
- React
- Next.js
- Express

## ToDo
- [ ] Check PWA via LightHouse audit (manifest & service worker)

## Learn
- React https://fr.reactjs.org/docs
- Redux https://redux.js.org/introduction/getting-started
- Jest https://jestjs.io/docs/en/getting-started
- Jest Styled Components https://github.com/styled-components/jest-styled-components
- AMP https://amp.dev/documentation/

## Check
- next-i18next for new version with SSR https://github.com/isaachinman/next-i18next/issues/274 or next for new version with i18n support https://github.com/tutorbookapp/covid-tutoring/issues/35
- eslint-plugin-styled-components-a11y https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y/pulls or eslint-plugin-jsx-a11y https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/466

## Features
- [ ] Home page
- [ ] Dark mode
- [ ] i18n
- [ ] Listing offers
- [ ] Detail offers
- [ ] Search, filter and categorize (by providers) offers
- [ ] Cart and payment system
- [ ] Vouchers system (printable PDF with barcode or QRcode)
- [ ] Authentication
- [ ] Space for members
- [ ] View orders
- [ ] Modify settings (address, password, etc.)
- [ ] Space for admins with dashboard
- [ ] View, Add, modify and remove offers
- [ ] View, Add, modify and remove providers
- [ ] View, Add, modify and remove members
- [ ] View, Add, modify and remove companies
- [ ] View orders
- [ ] Ratings and comments by offers viewable by members of same companies
- [ ] View, moderate and remove ratings and comments
- [ ] Internal messaging to contact providers, companies or members of same companies (send e-mails to warn of pending messages)

## Database
- offers (belongs to providers and companies)
- providers
- members (belongs to companies)
- companies
- orders (belongs to members)
- ratings (belongs to offers and members)
- comments (belongs to offers and members)

## Install
- `npm i`
- `openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout ssl.private.key -out ssl.certificate.crt -config ssl.config.cnf -subj "/C=NC/ST=New-Caledonia/L=Noumea/O=MyCE/CN=localhost"` into server directory

## Use
- `npm run dev`
