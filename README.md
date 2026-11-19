# Pumpkin Seeds – Tour Travel (ServiceNow Fluent App)

A ServiceNow scoped application for **Glide Records Music** that lets staff submit and review tour travel requests.

- **Scope:** `x_2313668_pumkin_s`
- **SDK:** `@servicenow/sdk` 4.14.2
- **Instance:** `https://dev481365.service-now.com`

## Features

| Area | Description |
|------|-------------|
| Data model | `x_2313668_pumkin_s_travel_request` table: trip basics, transport details, international travel, justification and cost |
| Form logic | UI policies show or hide Flight class, Rental car size and Mileage by transportation type, and show passport/visa fields for international trips |
| Security | ACLs: any authenticated user can read and create; only the creator (or admin) can edit |
| Navigation | "Tour Travel" application menu with a Travel Requests list module |
| Service Portal | Custom "Tour Travel" portal with Home, New Request and Request Detail pages and three widgets |
| Employee Center | The same pages are reachable under `/esc?id=<pageId>` |
| React UI page | Incident manager UI page (`src/client`) built with React 19 |
| Demo data | Sample travel requests installed with the `demo` install method |

## Project layout

```
now.config.json              App scope/name
now.dev.mjs / now.prebuild.mjs  Dev server and prebuild hooks for the React client
src/fluent/
  travel/                    Table, form, ACLs, menu, UI policies, demo data
  portal/                    Portal, pages, widgets (client/server/template), CSS, logo
  ui-pages/                  React UI page definition
  generated/keys.ts          Auto-generated record keys (do not edit)
src/client/                  React front end (components, services, CSS)
src/server/                  Server scripts
```

## Getting started

```bash
npm install
npx now-sdk auth --add <alias>   # store instance credentials
npm run build                    # build the app
npm run deploy                   # install on the default instance
npm run dev                      # local dev server for the React UI
```

## Links (after deploy)

- Portal: `https://dev481365.service-now.com/x_2313668_pumkin_s`
- Employee Center pages:
  - `/esc?id=x_2313668_pumkin_s_home`
  - `/esc?id=x_2313668_pumkin_s_request`
  - `/esc?id=x_2313668_pumkin_s_detail&sys_id=<record sys_id>`
- App record: `/sys_app.do?sys_id=6d98fdf2b9b9499ca2f33b08ea2d1e7f`

## Documentation

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for design details.

## Notes

- Credentials are stored by the SDK in your user profile, never in this repo.
- If an Employee Center page shows "not found", add the page to that portal's menu.

## Export for a new instance

`exports/` holds the build output of this app:

- `exports/pumkin_seeds_0_0_1.zip` – installable package (`now-sdk pack`)
- `exports/app-xml/` – every application file as ServiceNow XML (tables, portal, widgets, ACLs, demo data)

To install on a new instance, either:

1. Clone this repo, then run `npx now-sdk auth --add <alias>` for the new instance followed by `npm run deploy`, or
2. Run `npx now-sdk install` against the package in `exports/` after re-building with `npm run build`.

The XML in `exports/app-xml/` is in the SDK's application-file format, not a Retrieved/Local Update Set, so it is for reference and SDK installs rather than System Update Sets > Import XML.
