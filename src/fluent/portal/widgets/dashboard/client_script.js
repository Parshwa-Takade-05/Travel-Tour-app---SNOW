api.controller = function () {
    var c = this;

    c.filter = 'all';
    c.query = '';
    c.limit = 9;

    c.filters = [
        { key: 'all', label: 'All trips' },
        { key: 'mine', label: 'My requests' },
        { key: 'upcoming', label: 'Upcoming' },
        { key: 'international', label: 'International' }
    ];

    c.setFilter = function (key) {
        c.filter = key;
        c.limit = 9;
    };

    c.matches = function (rec) {
        if (c.filter === 'mine' && !rec.mine) { return false; }
        if (c.filter === 'upcoming' && rec.timing === 'completed') { return false; }
        if (c.filter === 'international' && !rec.international) { return false; }
        if (c.query) {
            var q = c.query.toLowerCase();
            var hay = (rec.title + ' ' + rec.city + ' ' + rec.purpose).toLowerCase();
            if (hay.indexOf(q) === -1) { return false; }
        }
        return true;
    };

    c.visible = function () {
        var out = [];
        for (var i = 0; i < c.data.records.length; i++) {
            if (c.matches(c.data.records[i])) { out.push(c.data.records[i]); }
        }
        return out;
    };

    c.showMore = function () {
        c.limit += 9;
    };
};
