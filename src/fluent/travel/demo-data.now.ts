import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'


Record({
    $id: Now.ID['demo-querystring-berlin'],
    $meta: { installMethod: 'demo' },
    table: 'x_2313668_pumkin_s_travel_request',
    data: {
        title: 'Querystring - Berlin Festival',
        purpose: 'festival',
        destination_city: 'Berlin',
        departure_date: '2027-06-10',
        return_date: '2027-06-15',
        transportation: 'flight',
        flight_class: 'business',
        international_trip: true,
        passport_expiration_date: '2029-03-01',
        visa_required: true,
        business_justification:
            'Querystring is a scheduled festival act in Berlin; long-haul travel requires business class for performance readiness.',
        estimated_total_cost: 4200.0,
    },
})

Record({
    $id: Now.ID['demo-rollbacks-austin'],
    $meta: { installMethod: 'demo' },
    table: 'x_2313668_pumkin_s_travel_request',
    data: {
        title: 'The Rollbacks - Austin Tour Leg',
        purpose: 'tour_leg',
        destination_city: 'Austin',
        departure_date: '2027-03-05',
        return_date: '2027-03-09',
        transportation: 'personal_vehicle',
        mileage_estimate: 1200,
        international_trip: false,
        business_justification: 'The Rollbacks are driving their own tour vehicle with gear to the Austin tour date.',
        estimated_total_cost: 850.0,
    },
})

Record({
    $id: Now.ID['demo-major-outage-london'],
    $meta: { installMethod: 'demo' },
    table: 'x_2313668_pumkin_s_travel_request',
    data: {
        title: 'Major Outage - London Tour Leg',
        purpose: 'tour_leg',
        destination_city: 'London',
        departure_date: '2027-09-02',
        return_date: '2027-09-08',
        transportation: 'car_rental',
        rental_car_size: 'full_size',
        international_trip: true,
        passport_expiration_date: '2028-11-20',
        visa_required: true,
        business_justification:
            'Major Outage needs a full-size rental to move band members and equipment between London tour venues.',
        estimated_total_cost: 3100.0,
    },
})
