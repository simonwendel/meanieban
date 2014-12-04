;(function() {
    'use strict';

    /**
     * Holds all valid state transitions (current : next) of three
     * character moves.
     */
    var validMoves = {
        '@ #': ' @#',
        '@  ': ' @ ',
        ' @ ': '  @',
        '@$ ': ' @$',
        '@ $': ' @$',
        '@ .': ' @.',
        '@. ': ' + ',
        '@.#': ' +#',
        '+  ': '.@ ',
        '+ #': '.@#',
        '+$ ': '.@$',
        '@$.': ' @*',
        '@ *': ' @*',
        '@* ': ' +$',
        '@.$': ' +$',
        '@..': ' +.',
        ' @.': '  +',
        '+.#': '.+#',
        '+. ': '.+ ',
        '+..': '.+.',
        '@*.': ' +*',
        '+*.': '.+*',
        '+.*': '.+*',
        '+ .': '.@.',
        '+ *': '.@*',
        '@.*': ' +*',
        '+ $': '.@$',
        '+$.': '.@*',
        '+* ': '.+$',
        '+.$': '.+$'
    };

    angular.module('meanieBanApp')
        .value('validMoves', validMoves);
})();
