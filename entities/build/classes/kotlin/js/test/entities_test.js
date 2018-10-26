if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'entities_test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'entities_test'.");
}
if (typeof entities === 'undefined') {
  throw new Error("Error loading module 'entities_test'. Its dependency 'entities' was not found. Please, check whether 'entities' is loaded prior to 'entities_test'.");
}
if (typeof this['kotlin-test'] === 'undefined') {
  throw new Error("Error loading module 'entities_test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'entities_test'.");
}
var entities_test = function (_, Kotlin, $module$entities, $module$kotlin_test) {
  'use strict';
  var Genre = $module$entities.studio.forface.ktmdb.entities.Genre;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function GenreTest() {
  }
  GenreTest.prototype.testingMultiplatformCode_runsCorrectly = function () {
    var genre = new Genre(0, 'horror');
    assertEquals('horror', genre.name);
  };
  GenreTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GenreTest',
    interfaces: []
  };
  var package$studio = _.studio || (_.studio = {});
  var package$forface = package$studio.forface || (package$studio.forface = {});
  var package$ktmdb = package$forface.ktmdb || (package$forface.ktmdb = {});
  var package$entities = package$ktmdb.entities || (package$ktmdb.entities = {});
  package$entities.GenreTest = GenreTest;
  suite('studio.forface.ktmdb.entities', false, function () {
    suite('GenreTest', false, function () {
      test('testingMultiplatformCode_runsCorrectly', false, function () {
        return (new GenreTest()).testingMultiplatformCode_runsCorrectly();
      });
    });
  });
  Kotlin.defineModule('entities_test', _);
  return _;
}(typeof entities_test === 'undefined' ? {} : entities_test, kotlin, entities, this['kotlin-test']);
