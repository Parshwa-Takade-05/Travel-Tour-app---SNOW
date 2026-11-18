import '@servicenow/sdk/global'
import { UiPolicy } from '@servicenow/sdk/core'


// Transportation policies set each field explicitly, so no automatic reversal.
UiPolicy({
    $id: Now.ID['travel-transport-flight'],
    table: 'x_2313668_pumkin_s_travel_request',
    shortDescription: 'Transportation = Flight: show Flight class',
    conditions: 'transportation=flight',
    onLoad: true,
    reverseIfFalse: false,
    actions: [
        { field: 'flight_class', visible: true },
        { field: 'rental_car_size', visible: false },
        { field: 'mileage_estimate', visible: false },
    ],
})

UiPolicy({
    $id: Now.ID['travel-transport-car-rental'],
    table: 'x_2313668_pumkin_s_travel_request',
    shortDescription: 'Transportation = Car Rental: show Rental car size',
    conditions: 'transportation=car_rental',
    onLoad: true,
    reverseIfFalse: false,
    actions: [
        { field: 'rental_car_size', visible: true },
        { field: 'flight_class', visible: false },
        { field: 'mileage_estimate', visible: false },
    ],
})

UiPolicy({
    $id: Now.ID['travel-transport-personal-vehicle'],
    table: 'x_2313668_pumkin_s_travel_request',
    shortDescription: 'Transportation = Personal Vehicle: show Mileage estimate',
    conditions: 'transportation=personal_vehicle',
    onLoad: true,
    reverseIfFalse: false,
    actions: [
        { field: 'mileage_estimate', visible: true },
        { field: 'flight_class', visible: false },
        { field: 'rental_car_size', visible: false },
    ],
})

// Before a transportation mode is chosen, keep all mode-specific fields hidden.
UiPolicy({
    $id: Now.ID['travel-transport-none'],
    table: 'x_2313668_pumkin_s_travel_request',
    shortDescription: 'No transportation selected: hide mode-specific fields',
    conditions: 'transportationISEMPTY',
    onLoad: true,
    reverseIfFalse: false,
    actions: [
        { field: 'flight_class', visible: false },
        { field: 'rental_car_size', visible: false },
        { field: 'mileage_estimate', visible: false },
    ],
})

UiPolicy({
    $id: Now.ID['travel-international'],
    table: 'x_2313668_pumkin_s_travel_request',
    shortDescription: 'International trip: show passport and visa fields',
    conditions: 'international_trip=true',
    onLoad: true,
    reverseIfFalse: true, // hides both fields when International trip is false
    actions: [
        { field: 'passport_expiration_date', visible: true },
        { field: 'visa_required', visible: true },
    ],
})
