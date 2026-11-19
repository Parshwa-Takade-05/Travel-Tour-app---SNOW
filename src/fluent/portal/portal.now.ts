import '@servicenow/sdk/global'
import { ServicePortal, SPTheme, SPMenu } from '@servicenow/sdk/core'
import { homePage, requestPage } from './pages.now'

export const tourTravelTheme = SPTheme({
    $id: Now.ID['tt-theme'],
    name: 'Tour Travel Theme',
    header: 'bf5ec2f2cb10120000f8d856634c9c0c', // OOTB Stock Header
    fixedHeader: true,
    fixedFooter: false,
    logo: Now.attach('./assets/logo.svg'),
    logoAltText: 'Tour Travel',
    turnOffScssCompilation: false,
    customCss: `
$brand-primary: sp-rgb(--now-color--primary-1, #5B3DF5) !default;
$body-bg: #F6F5FD !default;
$text-color: #2D2A55 !default;
$link-color: #5B3DF5 !default;
$link-hover-color: #3B24B8 !default;
$navbar-inverse-bg: #1E1B4B !default;
$navbar-inverse-border: #1E1B4B !default;
$navbar-inverse-link-color: rgba(255, 255, 255, 0.88) !default;
$navbar-inverse-link-hover-color: #FFFFFF !default;
$navbar-inverse-link-active-bg: #3B24B8 !default;
$navbar-inverse-link-active-color: #FFFFFF !default;
$font-family-base: 'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !default;
`,
})

export const tourTravelMenu = SPMenu({
    $id: Now.ID['tt-portal-menu'],
    title: 'Tour Travel Menu',
    widget: '5ef595c1cb12020000f8d856634c9c6e', // OOTB Header Menu
    items: [
        {
            $id: Now.ID['tt-menu-home'],
            type: 'page',
            label: 'All trips',
            page: homePage,
            glyph: 'home',
            order: 100,
            active: true,
        },
        {
            $id: Now.ID['tt-menu-new'],
            type: 'page',
            label: 'New request',
            page: requestPage,
            glyph: 'plus-sign',
            order: 200,
            active: true,
        },
    ],
})

export const tourTravelPortal = ServicePortal({
    $id: Now.ID['tt-portal'],
    title: 'Tour Travel',
    urlSuffix: 'x_2313668_pumkin_s',
    homePage: homePage,
    loginPage: '6995a144cb11120000f8d856634c9c25', // OOTB login
    notFoundPage: '3c2c9063cb11020000f8d856634c9c1f', // OOTB 404
    theme: tourTravelTheme,
    mainMenu: tourTravelMenu,
    logo: Now.attach('./assets/logo.svg'),
    defaultPortal: false,
    inactive: false,
})
