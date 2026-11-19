import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const dashboardWidget = SPWidget({
    $id: Now.ID['tt-dashboard-widget'],
    id: 'x_2313668_pumkin_s_dashboard',
    name: 'Tour Travel Dashboard',
    description: 'Hero, summary stats, filters and card list of travel requests',
    htmlTemplate: Now.include('./widgets/dashboard/template.html'),
    clientScript: Now.include('./widgets/dashboard/client_script.js'),
    serverScript: Now.include('./widgets/dashboard/server_script.js'),
    optionSchema: [
        {
            name: 'hero_title',
            label: 'Hero title',
            type: 'string',
            section: 'Presentation',
            defaultValue: 'Plan the road. We handle the rest.',
        },
        {
            name: 'hero_subtitle',
            label: 'Hero subtitle',
            type: 'string',
            section: 'Presentation',
            defaultValue: 'Submit and track travel for tour dates, festivals, promo and recording sessions.',
        },
    ],
})

export const requestFormWidget = SPWidget({
    $id: Now.ID['tt-request-form-widget'],
    id: 'x_2313668_pumkin_s_request_form',
    name: 'Tour Travel Request Form',
    description: 'Create or edit a travel request',
    htmlTemplate: Now.include('./widgets/request-form/template.html'),
    clientScript: Now.include('./widgets/request-form/client_script.js'),
    serverScript: Now.include('./widgets/request-form/server_script.js'),
})

export const requestDetailWidget = SPWidget({
    $id: Now.ID['tt-request-detail-widget'],
    id: 'x_2313668_pumkin_s_request_detail',
    name: 'Tour Travel Request Detail',
    description: 'Read-only view of a travel request',
    htmlTemplate: Now.include('./widgets/request-detail/template.html'),
    clientScript: Now.include('./widgets/request-detail/client_script.js'),
    serverScript: Now.include('./widgets/request-detail/server_script.js'),
})
