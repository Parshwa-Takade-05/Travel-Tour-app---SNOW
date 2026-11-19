(function () {
    var TABLE = 'x_2313668_pumkin_s_travel_request';

    data.choices = {
        purpose: [
            { value: 'tour_leg', label: 'Tour Leg' },
            { value: 'festival', label: 'Festival' },
            { value: 'promo_appearance', label: 'Promo Appearance' },
            { value: 'recording_session', label: 'Recording Session' },
            { value: 'other', label: 'Other' }
        ],
        flightClass: [
            { value: 'economy', label: 'Economy' },
            { value: 'premium_economy', label: 'Premium Economy' },
            { value: 'business', label: 'Business' }
        ],
        carSize: [
            { value: 'compact', label: 'Compact' },
            { value: 'mid_size', label: 'Mid-size' },
            { value: 'full_size', label: 'Full-size' },
            { value: 'suv', label: 'SUV' }
        ]
    };

    data.sysId = '';
    data.form = {};
    data.allowed = true;
    data.result = null;

    var FIELDS = ['title', 'purpose', 'destination_city', 'departure_date', 'return_date',
        'transportation', 'flight_class', 'rental_car_size', 'mileage_estimate',
        'international_trip', 'passport_expiration_date', 'visa_required',
        'business_justification', 'estimated_total_cost'];

    // Initial load: blank form, or the record being edited.
    var paramId = $sp.getParameter('sys_id');
    if (!input && paramId) {
        var existing = new GlideRecord(TABLE);
        if (existing.get(paramId)) {
            if (existing.canWrite()) {
                data.sysId = paramId;
                for (var i = 0; i < FIELDS.length; i++) {
                    var f = FIELDS[i];
                    var v = existing.getValue(f);
                    if (f === 'international_trip' || f === 'visa_required') {
                        data.form[f] = v === '1';
                    } else if (f === 'mileage_estimate' || f === 'estimated_total_cost') {
                        data.form[f] = v ? Number(v) : null;
                    } else {
                        data.form[f] = v || '';
                    }
                }
            } else {
                data.allowed = false;
            }
        }
    } else if (!input) {
        data.allowed = new GlideRecord(TABLE).canCreate();
    }

    // Save (create or update)
    if (input && input.action === 'save') {
        var f2 = input.form || {};
        var errors = [];

        if (!f2.title || !String(f2.title).trim()) { errors.push('Title is required.'); }
        if (!f2.departure_date) { errors.push('Departure date is required.'); }
        if (!f2.return_date) { errors.push('Return date is required.'); }
        if (f2.departure_date && f2.return_date && f2.return_date < f2.departure_date) {
            errors.push('Return date cannot be before the departure date.');
        }
        if (!f2.business_justification || !String(f2.business_justification).trim()) {
            errors.push('Business justification is required.');
        }
        if (f2.international_trip && f2.passport_expiration_date && f2.return_date &&
            f2.passport_expiration_date < f2.return_date) {
            errors.push('Passport expires before the trip ends. Renew it before travelling.');
        }

        if (errors.length) {
            data.result = { success: false, errors: errors };
            return;
        }

        var gr = new GlideRecord(TABLE);
        var editing = false;
        if (input.sysId) {
            if (!gr.get(input.sysId) || !gr.canWrite()) {
                data.result = { success: false, errors: ['You do not have permission to edit this request.'] };
                return;
            }
            editing = true;
        } else {
            gr.initialize();
            if (!gr.canCreate()) {
                data.result = { success: false, errors: ['You do not have permission to submit requests.'] };
                return;
            }
        }

        var transport = f2.transportation || '';
        var intl = !!f2.international_trip;

        gr.setValue('title', String(f2.title).trim());
        gr.setValue('purpose', f2.purpose || '');
        gr.setValue('destination_city', f2.destination_city || '');
        gr.setValue('departure_date', f2.departure_date);
        gr.setValue('return_date', f2.return_date);
        gr.setValue('transportation', transport);
        // Only keep the detail that matches the chosen transportation (mirrors the form UI policies).
        gr.setValue('flight_class', transport === 'flight' ? (f2.flight_class || '') : '');
        gr.setValue('rental_car_size', transport === 'car_rental' ? (f2.rental_car_size || '') : '');
        gr.setValue('mileage_estimate', transport === 'personal_vehicle' && f2.mileage_estimate ? f2.mileage_estimate : '');
        gr.setValue('international_trip', intl);
        gr.setValue('passport_expiration_date', intl ? (f2.passport_expiration_date || '') : '');
        gr.setValue('visa_required', intl ? !!f2.visa_required : false);
        gr.setValue('business_justification', String(f2.business_justification).trim());
        gr.setValue('estimated_total_cost', f2.estimated_total_cost || '');

        var id = editing ? gr.update() : gr.insert();
        if (!id) {
            data.result = { success: false, errors: ['The request could not be saved. Please try again.'] };
            return;
        }
        data.result = { success: true, sys_id: String(id), edited: editing };
    }
})();
