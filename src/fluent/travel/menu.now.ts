import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

export const tourTravelMenu = ApplicationMenu({
    $id: Now.ID['tour-travel-menu'],
    title: 'Tour Travel',
    hint: 'Tour travel requests for Glide Records Music',
    description: 'Submit and review travel for tour dates',
    active: true,
})

Record({
    $id: Now.ID['travel-requests-module'],
    table: 'sys_app_module',
    data: {
        title: 'Travel Requests',
        application: tourTravelMenu,
        link_type: 'LIST',
        name: 'x_2313668_pumkin_s_travel_request',
        hint: 'View travel requests',
        active: true,
        order: 100,
    },
})
