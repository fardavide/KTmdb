(function (_, Kotlin, $module$kotlinx_coroutines_core, $module$ktmdb, $module$kotlin_test) {
  'use strict';
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var TmdbApi = $module$ktmdb.studio.forface.ktmdb.api.TmdbApi;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Genre = $module$ktmdb.studio.forface.ktmdb.entities.Genre;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function TmdbApiTest() {
    this.baseUrl_0 = 'https://api.themoviedb.org/';
    this.apiKey_0 = '';
    this.api_0 = TmdbApi.Companion.createInstance_puj7f4$(this.baseUrl_0, this.apiKey_0);
  }
  function TmdbApiTest$getMovie$lambda(this$TmdbApiTest_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$TmdbApiTest$getMovie$lambda(this$TmdbApiTest_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TmdbApiTest$getMovie$lambda(this$TmdbApiTest_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$TmdbApiTest = this$TmdbApiTest_0;
  }
  Coroutine$TmdbApiTest$getMovie$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TmdbApiTest$getMovie$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TmdbApiTest$getMovie$lambda.prototype.constructor = Coroutine$TmdbApiTest$getMovie$lambda;
  Coroutine$TmdbApiTest$getMovie$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$TmdbApiTest.api_0.movies.details_za3lpa$(550, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var movie = this.result_0;
            return println(movie), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  TmdbApiTest.prototype.getMovie = function () {
    launch(coroutines.GlobalScope, void 0, void 0, TmdbApiTest$getMovie$lambda(this));
  };
  TmdbApiTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TmdbApiTest',
    interfaces: []
  };
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
  var package$api = package$ktmdb.api || (package$ktmdb.api = {});
  package$api.TmdbApiTest = TmdbApiTest;
  var package$entities = package$ktmdb.entities || (package$ktmdb.entities = {});
  package$entities.GenreTest = GenreTest;
  suite('studio.forface.ktmdb.entities', false, function () {
    suite('GenreTest', false, function () {
      test('testingMultiplatformCode_runsCorrectly', false, function () {
        return (new GenreTest()).testingMultiplatformCode_runsCorrectly();
      });
    });
  });
  suite('studio.forface.ktmdb.api', false, function () {
    suite('TmdbApiTest', false, function () {
      test('getMovie', false, function () {
        return (new TmdbApiTest()).getMovie();
      });
    });
  });
  Kotlin.defineModule('ktmdb_test', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('ktmdb'), require('kotlin-test')));

//# sourceMappingURL=ktmdb_test.js.map
