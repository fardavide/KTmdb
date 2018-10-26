if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'services'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'services'.");
}
var services = function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  function MoviesService() {
  }
  MoviesService.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MoviesService',
    interfaces: []
  };
  var package$studio = _.studio || (_.studio = {});
  var package$forface = package$studio.forface || (package$studio.forface = {});
  var package$ktmdb = package$forface.ktmdb || (package$forface.ktmdb = {});
  var package$services = package$ktmdb.services || (package$ktmdb.services = {});
  package$services.MoviesService = MoviesService;
  Kotlin.defineModule('services', _);
  return _;
}(typeof services === 'undefined' ? {} : services, kotlin);
