import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { dashboardWidget, requestFormWidget, requestDetailWidget } from './widgets.now'

// Pages are portal-agnostic: open them in the Tour Travel portal (/x_2313668_pumkin_s)
// or in Employee Center (/esc?id=<pageId>). Shared styling travels with each page.

export const homePage = SPPage({
    pageId: 'x_2313668_pumkin_s_home',
    title: 'Tour Travel',
    public: false,
    draft: false,
    dynamicTitleStructure: 'Tour Travel - ${portal.title}',
    css: Now.include('./pages/tour-travel.css'),
    containers: [
        {
            $id: Now.ID['tt-home-container'],
            name: 'Dashboard',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['tt-home-row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['tt-home-col'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['tt-home-instance'],
                                    widget: dashboardWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export const requestPage = SPPage({
    pageId: 'x_2313668_pumkin_s_request',
    title: 'Travel Request',
    public: false,
    draft: false,
    dynamicTitleStructure: 'Travel Request - ${portal.title}',
    css: Now.include('./pages/tour-travel.css'),
    containers: [
        {
            $id: Now.ID['tt-request-container'],
            name: 'Request form',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['tt-request-row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['tt-request-col'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['tt-request-instance'],
                                    widget: requestFormWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export const detailPage = SPPage({
    pageId: 'x_2313668_pumkin_s_detail',
    title: 'Travel Request Details',
    public: false,
    draft: false,
    dynamicTitleStructure: 'Travel Request Details - ${portal.title}',
    css: Now.include('./pages/tour-travel.css'),
    containers: [
        {
            $id: Now.ID['tt-detail-container'],
            name: 'Request detail',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['tt-detail-row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['tt-detail-col'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['tt-detail-instance'],
                                    widget: requestDetailWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
