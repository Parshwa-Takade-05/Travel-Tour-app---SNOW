api.controller = function () {
    var c = this;

    c.view = 'form';
    c.saving = false;
    c.errors = [];
    c.touched = false;

    c.form = angular.extend({
        title: '',
        purpose: '',
        destination_city: '',
        departure_date: '',
        return_date: '',
        transportation: '',
        flight_class: '',
        rental_car_size: '',
        mileage_estimate: null,
        international_trip: false,
        passport_expiration_date: '',
        visa_required: false,
        business_justification: '',
        estimated_total_cost: null
    }, c.data.form || {});

    c.transportOptions = [
        { value: 'flight', label: 'Flight', icon: 'fa-plane' },
        { value: 'car_rental', label: 'Car Rental', icon: 'fa-car' },
        { value: 'personal_vehicle', label: 'Personal Vehicle', icon: 'fa-road' }
    ];

    c.setTransport = function (value) {
        c.form.transportation = value;
    };

    c.missing = function (field) {
        return c.touched && !c.form[field];
    };

    c.save = function () {
        c.touched = true;
        c.errors = [];
        if (!c.form.title || !c.form.departure_date || !c.form.return_date || !c.form.business_justification) {
            c.errors = ['Please complete the required fields.'];
            return;
        }

        c.saving = true;
        c.data.action = 'save';
        c.data.sysId = c.data.sysId || '';
        c.data.form = angular.copy(c.form);
        c.data.form.departure_date = c.toIso(c.form.departure_date);
        c.data.form.return_date = c.toIso(c.form.return_date);
        c.data.form.passport_expiration_date = c.toIso(c.form.passport_expiration_date);

        c.server.update().then(function () {
            c.saving = false;
            var result = c.data.result;
            c.data.action = null;
            if (result && result.success) {
                c.savedId = result.sys_id;
                c.edited = result.edited;
                c.view = 'success';
            } else if (result) {
                c.errors = result.errors;
            }
        });
    };

    // Date inputs can hand back Date objects; the server expects yyyy-MM-dd.
    c.toIso = function (value) {
        if (!value) { return ''; }
        if (angular.isDate(value)) {
            var m = ('0' + (value.getMonth() + 1)).slice(-2);
            var d = ('0' + value.getDate()).slice(-2);
            return value.getFullYear() + '-' + m + '-' + d;
        }
        return value;
    };

    // The date inputs bind to Date objects; convert any loaded ISO strings.
    angular.forEach(['departure_date', 'return_date', 'passport_expiration_date'], function (key) {
        var v = c.form[key];
        if (v && angular.isString(v)) {
            var p = v.split('-');
            c.form[key] = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
        }
    });
};
