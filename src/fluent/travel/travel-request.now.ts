import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ChoiceColumn,
    DateColumn,
    IntegerColumn,
    BooleanColumn,
    DecimalColumn,
    MultiLineTextColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'

export const x_2313668_pumkin_s_travel_request = Table({
    name: 'x_2313668_pumkin_s_travel_request',
    label: 'Travel Request',
    display: 'title',
    schema: {
        // Trip Basics
        title: StringColumn({ label: 'Title', mandatory: true, maxLength: 160 }),
        purpose: ChoiceColumn({
            label: 'Purpose',
            choices: {
                tour_leg: { label: 'Tour Leg', sequence: 1 },
                festival: { label: 'Festival', sequence: 2 },
                promo_appearance: { label: 'Promo Appearance', sequence: 3 },
                recording_session: { label: 'Recording Session', sequence: 4 },
                other: { label: 'Other', sequence: 5 },
            },
        }),
        destination_city: StringColumn({ label: 'Destination city', maxLength: 100 }),
        departure_date: DateColumn({ label: 'Departure date', mandatory: true }),
        return_date: DateColumn({ label: 'Return date', mandatory: true }),

        // Travel Details
        transportation: ChoiceColumn({
            label: 'Transportation',
            choices: {
                flight: { label: 'Flight', sequence: 1 },
                car_rental: { label: 'Car Rental', sequence: 2 },
                personal_vehicle: { label: 'Personal Vehicle', sequence: 3 },
            },
        }),
        flight_class: ChoiceColumn({
            label: 'Flight class',
            choices: {
                economy: { label: 'Economy', sequence: 1 },
                premium_economy: { label: 'Premium Economy', sequence: 2 },
                business: { label: 'Business', sequence: 3 },
            },
        }),
        rental_car_size: ChoiceColumn({
            label: 'Rental car size',
            choices: {
                compact: { label: 'Compact', sequence: 1 },
                mid_size: { label: 'Mid-size', sequence: 2 },
                full_size: { label: 'Full-size', sequence: 3 },
                suv: { label: 'SUV', sequence: 4 },
            },
        }),
        mileage_estimate: IntegerColumn({ label: 'Mileage estimate' }),

        // International Travel
        international_trip: BooleanColumn({ label: 'International trip', default: false }),
        passport_expiration_date: DateColumn({ label: 'Passport expiration date' }),
        visa_required: BooleanColumn({ label: 'Visa required', default: false }),

        // Justification
        business_justification: MultiLineTextColumn({ label: 'Business justification', mandatory: true }),
        estimated_total_cost: DecimalColumn({ label: 'Estimated total cost' }),
    },
})


Form({
    table: 'x_2313668_pumkin_s_travel_request',
    view: default_view,
    sections: [
        {
            caption: 'Trip Basics',
            content: [
                {
                    layout: 'one-column',
                    elements: [{ field: 'title', type: 'table_field' }, { field: 'purpose', type: 'table_field' }, { field: 'destination_city', type: 'table_field' }, { field: 'departure_date', type: 'table_field' }, { field: 'return_date', type: 'table_field' }],
                },
            ],
        },
        {
            caption: 'Travel Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [{ field: 'transportation', type: 'table_field' }, { field: 'flight_class', type: 'table_field' }, { field: 'rental_car_size', type: 'table_field' }, { field: 'mileage_estimate', type: 'table_field' }],
                },
            ],
        },
        {
            caption: 'International Travel',
            content: [
                {
                    layout: 'one-column',
                    elements: [{ field: 'international_trip', type: 'table_field' }, { field: 'passport_expiration_date', type: 'table_field' }, { field: 'visa_required', type: 'table_field' }],
                },
            ],
        },
        {
            caption: 'Justification',
            content: [
                {
                    layout: 'one-column',
                    elements: [{ field: 'business_justification', type: 'table_field' }, { field: 'estimated_total_cost', type: 'table_field' }],
                },
            ],
        },
    ],
})
