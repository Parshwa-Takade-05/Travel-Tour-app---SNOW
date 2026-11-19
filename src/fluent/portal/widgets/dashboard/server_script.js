(function () {
    var TABLE = 'x_2313668_pumkin_s_travel_request';

    var PURPOSE_CLASS = {
        tour_leg: 'tt-tag-violet',
        festival: 'tt-tag-pink',
        promo_appearance: 'tt-tag-amber',
        recording_session: 'tt-tag-teal',
        other: 'tt-tag-slate'
    };
    var TRANSPORT_ICON = {
        flight: 'fa-plane',
        car_rental: 'fa-car',
        personal_vehicle: 'fa-road'
    };

    data.records = [];
    data.stats = { total: 0, upcoming: 0, international: 0, cost: 0 };
    data.canCreate = new GlideRecord(TABLE).canCreate();
    data.userName = gs.getUserName();
    data.heroTitle = options.hero_title || 'Plan the road. We handle the rest.';
    data.heroSubtitle = options.hero_subtitle || 'Submit and track travel for tour dates, festivals, promo and recording sessions.';

    function fmt(value) {
        if (!value) { return ''; }
        var d = new GlideDate();
        d.setValue(value);
        return d.getByFormat('MMM d, yyyy');
    }

    var today = new GlideDate().getValue();
    var gr = new GlideRecord(TABLE);
    gr.orderBy('departure_date');
    gr.setLimit(200);
    gr.query();

    while (gr.next()) {
        if (!gr.canRead()) { continue; }

        var dep = gr.getValue('departure_date') || '';
        var ret = gr.getValue('return_date') || '';
        var timing = 'upcoming';
        if (ret && ret < today) {
            timing = 'completed';
        } else if (dep && dep <= today) {
            timing = 'inprogress';
        }

        var nights = 0;
        if (dep && ret) {
            var d1 = new GlideDate();
            d1.setValue(dep);
            var d2 = new GlideDate();
            d2.setValue(ret);
            nights = Math.max(0, Math.round((d2.getNumericValue() - d1.getNumericValue()) / 86400000));
        }

        var transport = gr.getValue('transportation') || '';
        var detail = '';
        if (transport === 'flight') {
            detail = gr.getDisplayValue('flight_class');
        } else if (transport === 'car_rental') {
            detail = gr.getDisplayValue('rental_car_size');
        } else if (transport === 'personal_vehicle' && gr.getValue('mileage_estimate')) {
            detail = gr.getValue('mileage_estimate') + ' mi';
        }

        var cost = parseFloat(gr.getValue('estimated_total_cost')) || 0;
        var international = gr.getValue('international_trip') === '1';
        var mine = gr.getValue('sys_created_by') === data.userName;

        data.stats.total++;
        if (timing !== 'completed') { data.stats.upcoming++; }
        if (international) { data.stats.international++; }
        data.stats.cost += cost;

        data.records.push({
            sys_id: gr.getUniqueValue(),
            title: gr.getValue('title'),
            purpose: gr.getDisplayValue('purpose'),
            purposeClass: PURPOSE_CLASS[gr.getValue('purpose')] || 'tt-tag-slate',
            city: gr.getValue('destination_city'),
            departure: fmt(dep),
            ret: fmt(ret),
            nights: nights,
            timing: timing,
            transportLabel: gr.getDisplayValue('transportation'),
            transportIcon: TRANSPORT_ICON[transport] || 'fa-suitcase',
            transportDetail: detail,
            international: international,
            visa: gr.getValue('visa_required') === '1',
            cost: cost,
            mine: mine,
            canEdit: gr.canWrite()
        });
    }

    data.stats.cost = Math.round(data.stats.cost);
})();
