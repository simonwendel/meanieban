beforeEach(function () {
    this.addMatchers({
        toBeJsonEqual: function (expected) {
            var one = JSON.stringify(this.actual).replace(/(\\t|\\n)/g, ''),
                two = JSON.stringify(expected).replace(/(\\t|\\n)/g, '');

            return one === two;
        }
    });
});