'use strict';

// valid linear progressions between
// states, (this : next).
angular.module('meanieBanApp')
    .value('validMoves', {
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
        '@.$': ' +$'
    });