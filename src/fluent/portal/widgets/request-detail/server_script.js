(function () {
    var TABLE = 'x_2313668_pumkin_s_travel_request';

    data.found = false;
    data.rec = null;

    function fmt(value) {
        if (!value) { return ''; }
        var d = new GlideDate();
        d.setValue(value);
        return d.getByFormat('MMM d, yyyy');
    }

    var sysId = $sp.getParameter('sys_id');
    if (!sysId) { return; }

    var gr = new GlideRecord(TABLE);
    if (!gr.get(sysId) || !gr.canRead()) { return; }

    var transport = gr.getValue('transportation') || '';
    var nights = 0;
    if (gr.getValue('departure_date') && gr.getValue('return_date')) {
        var d1 = new GlideDate();
        d1.setValue(gr.getValue('departure_date'));
        var d2 = new GlideDate();
        d2.setValue(gr.getValue('return_date'));
        nights = Math.max(0, Math.round((d2.getNumericValue() - d1.getNumericValue()) / 86400000));
    }

    data.found = true;
    data.rec = {
        sys_id: gr.getUniqueValue(),
        title: gr.getValue('title'),
        purpose: gr.getDisplayValue('purpose'),
        city: gr.getValue('destination_city'),
        departure: fmt(gr.getValue('departure_date')),
        ret: fmt(gr.getValue('return_date')),
        nights: nights,
        transport: gr.getDisplayValue('transportation'),
        transportKey: transport,
        flightClass: gr.getDisplayValue('flight_class'),
        carSize: gr.getDisplayValue('rental_car_size'),
        mileage: gr.getValue('mileage_estimate'),
        international: gr.getValue('international_trip') === '1',
        passport: fmt(gr.getValue('passport_expiration_date')),
        visa: gr.getValue('visa_required') === '1',
        justification: gr.getValue('business_justification'),
        cost: parseFloat(gr.getValue('estimated_total_cost')) || 0,
        createdBy: gr.getValue('sys_created_by'),
        createdOn: gr.getDisplayValue('sys_created_on'),
        canEdit: gr.canWrite()
    };
})();
