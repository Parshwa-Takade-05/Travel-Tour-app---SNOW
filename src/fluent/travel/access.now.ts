import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'


// Anyone (any authenticated user) can read travel requests.
Acl({
    $id: Now.ID['travel-request-read'],
    type: 'record',
    table: 'x_2313668_pumkin_s_travel_request',
    operation: 'read',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Anyone can read travel requests',
})

// Submitters can create requests.
Acl({
    $id: Now.ID['travel-request-create'],
    type: 'record',
    table: 'x_2313668_pumkin_s_travel_request',
    operation: 'create',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Authenticated users can submit travel requests',
})

// Submitters can edit their own requests.
Acl({
    $id: Now.ID['travel-request-write-own'],
    type: 'record',
    table: 'x_2313668_pumkin_s_travel_request',
    operation: 'write',
    decisionType: 'allow',
    securityAttribute: 'user_is_authenticated',
    condition: 'sys_created_by=javascript:gs.getUserName()',
    adminOverrides: true,
    description: 'Submitters can edit their own travel requests',
})

// Admins can do everything.
Acl({
    $id: Now.ID['travel-request-write-admin'],
    type: 'record',
    table: 'x_2313668_pumkin_s_travel_request',
    operation: 'write',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Admins can edit any travel request',
})

Acl({
    $id: Now.ID['travel-request-delete-admin'],
    type: 'record',
    table: 'x_2313668_pumkin_s_travel_request',
    operation: 'delete',
    decisionType: 'allow',
    roles: ['admin'],
    adminOverrides: true,
    description: 'Admins can delete travel requests',
})
