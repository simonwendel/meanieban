'use strict';

/**
 * Polyfills the contains function onto String, which
 * returns true iff a string is a substring of another.
 *
 * JSHint is told to ignore this, since this is a place
 * we really want to extend the native prototype.
 */
if (!String.prototype.contains) {
    String.prototype.contains = function() { // jshint ignore:line
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}
