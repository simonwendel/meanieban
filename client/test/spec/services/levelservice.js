'use strict';

describe('Service: LevelService', function () {

  // load the service's module
  beforeEach(module('meanieBan'));

  // instantiate service
  var LevelService;
  beforeEach(inject(function (_LevelService_) {
      LevelService = _LevelService_;
  }));

  it('should do something', function () {
    expect(!!LevelService).toBe(true);
  });

});
