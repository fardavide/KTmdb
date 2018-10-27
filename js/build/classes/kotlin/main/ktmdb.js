(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-client-core-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-client-core-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktmdb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktmdb'.");
    }
    if (typeof this['ktor-client-core-js'] === 'undefined') {
      throw new Error("Error loading module 'ktmdb'. Its dependency 'ktor-client-core-js' was not found. Please, check whether 'ktor-client-core-js' is loaded prior to 'ktmdb'.");
    }
    root.ktmdb = factory(typeof ktmdb === 'undefined' ? {} : ktmdb, kotlin, this['ktor-client-core-js']);
  }
}(this, function (_, Kotlin, $module$ktor_client_core_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var HttpClient = $module$ktor_client_core_js.io.ktor.client.HttpClient_f0veat$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  function TmdbApi() {
    TmdbApi$Companion_getInstance();
  }
  function TmdbApi$Companion() {
    TmdbApi$Companion_instance = this;
  }
  TmdbApi$Companion.prototype.createInstance_puj7f4$ = function (baseUrl, apiKey) {
    return new TmdbApiImpl(baseUrl, apiKey);
  };
  TmdbApi$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TmdbApi$Companion_instance = null;
  function TmdbApi$Companion_getInstance() {
    if (TmdbApi$Companion_instance === null) {
      new TmdbApi$Companion();
    }
    return TmdbApi$Companion_instance;
  }
  TmdbApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TmdbApi',
    interfaces: []
  };
  function TmdbApiImpl(baseUrl, apiKey) {
    this.baseUrl_oftg2v$_0 = baseUrl;
    this.apiKey_rf0t8q$_0 = apiKey;
    this.client_0 = HttpClient();
    this.movies_9sx384$_0 = lazy(TmdbApiImpl$movies$lambda(this));
  }
  Object.defineProperty(TmdbApiImpl.prototype, 'baseUrl', {
    get: function () {
      return this.baseUrl_oftg2v$_0;
    }
  });
  Object.defineProperty(TmdbApiImpl.prototype, 'apiKey', {
    get: function () {
      return this.apiKey_rf0t8q$_0;
    }
  });
  Object.defineProperty(TmdbApiImpl.prototype, 'movies', {
    get: function () {
      return this.movies_9sx384$_0.value;
    }
  });
  function TmdbApiImpl$movies$lambda$ObjectLiteral(this$TmdbApiImpl) {
    this.this$TmdbApiImpl = this$TmdbApiImpl;
  }
  var Unit = Kotlin.kotlin.Unit;
  var takeFrom = $module$ktor_client_core_js.$$importsForInline$$['ktor-http-js'].io.ktor.http.takeFrom_jl1sg7$;
  function get$lambda($receiver) {
    return Unit;
  }
  var utils = $module$ktor_client_core_js.io.ktor.client.utils;
  var url = $module$ktor_client_core_js.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_client_core_js.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_client_core_js.io.ktor.client.request.HttpRequestBuilder;
  var call = $module$ktor_client_core_js.io.ktor.client.call.call_30bfl5$;
  var throwCCE = Kotlin.throwCCE;
  var getKClass = Kotlin.getKClass;
  var call_0 = $module$ktor_client_core_js.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_client_core_js.io.ktor.client.call.TypeInfo;
  TmdbApiImpl$movies$lambda$ObjectLiteral.prototype.details_za3lpa$ = function (movieId_0, continuation_0, suspended) {
    var instance = new Coroutine$details_za3lpa$(this, movieId_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$details_za3lpa$($this, movieId_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$movieId = movieId_0;
  }
  Coroutine$details_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$details_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$details_za3lpa$.prototype.constructor = Coroutine$details_za3lpa$;
  Coroutine$details_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.this$TmdbApiImpl.client_0;
            var urlString = this.$this.this$TmdbApiImpl.baseUrl + '/3/movie/' + this.local$movieId + '?api_key=' + this.$this.this$TmdbApiImpl.apiKey;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body;
            takeFrom($receiver_1.url, urlString);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(Movie), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$ = this.result_0, Movie) ? tmp$ : throwCCE();
            this.result_0;
            return this.result_0;
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
  TmdbApiImpl$movies$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MoviesService]
  };
  function TmdbApiImpl$movies$lambda(this$TmdbApiImpl) {
    return function () {
      return new TmdbApiImpl$movies$lambda$ObjectLiteral(this$TmdbApiImpl);
    };
  }
  TmdbApiImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TmdbApiImpl',
    interfaces: [TmdbApi]
  };
  function Genre(id, name) {
    this.id = id;
    this.name = name;
  }
  Genre.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Genre',
    interfaces: []
  };
  Genre.prototype.component1 = function () {
    return this.id;
  };
  Genre.prototype.component2 = function () {
    return this.name;
  };
  Genre.prototype.copy_19mbxw$ = function (id, name) {
    return new Genre(id === void 0 ? this.id : id, name === void 0 ? this.name : name);
  };
  Genre.prototype.toString = function () {
    return 'Genre(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  Genre.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Genre.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name)))));
  };
  function Movie(adult, backdropPath, belongsToCollection, budget, genres, homepage, id, imdbId, originalLanguage, originalTitle, overview, popularity, posterPath, productionCompanies, productionCountries, releaseDate, revenue, runtime, spokenLanguages, status, tagline, title, video, voteAverage, voteCount) {
    this.adult = adult;
    this.backdropPath = backdropPath;
    this.belongsToCollection = belongsToCollection;
    this.budget = budget;
    this.genres = genres;
    this.homepage = homepage;
    this.id = id;
    this.imdbId = imdbId;
    this.originalLanguage = originalLanguage;
    this.originalTitle = originalTitle;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = posterPath;
    this.productionCompanies = productionCompanies;
    this.productionCountries = productionCountries;
    this.releaseDate = releaseDate;
    this.revenue = revenue;
    this.runtime = runtime;
    this.spokenLanguages = spokenLanguages;
    this.status = status;
    this.tagline = tagline;
    this.title = title;
    this.video = video;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
  }
  Movie.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Movie',
    interfaces: []
  };
  Movie.prototype.component1 = function () {
    return this.adult;
  };
  Movie.prototype.component2 = function () {
    return this.backdropPath;
  };
  Movie.prototype.component3 = function () {
    return this.belongsToCollection;
  };
  Movie.prototype.component4 = function () {
    return this.budget;
  };
  Movie.prototype.component5 = function () {
    return this.genres;
  };
  Movie.prototype.component6 = function () {
    return this.homepage;
  };
  Movie.prototype.component7 = function () {
    return this.id;
  };
  Movie.prototype.component8 = function () {
    return this.imdbId;
  };
  Movie.prototype.component9 = function () {
    return this.originalLanguage;
  };
  Movie.prototype.component10 = function () {
    return this.originalTitle;
  };
  Movie.prototype.component11 = function () {
    return this.overview;
  };
  Movie.prototype.component12 = function () {
    return this.popularity;
  };
  Movie.prototype.component13 = function () {
    return this.posterPath;
  };
  Movie.prototype.component14 = function () {
    return this.productionCompanies;
  };
  Movie.prototype.component15 = function () {
    return this.productionCountries;
  };
  Movie.prototype.component16 = function () {
    return this.releaseDate;
  };
  Movie.prototype.component17 = function () {
    return this.revenue;
  };
  Movie.prototype.component18 = function () {
    return this.runtime;
  };
  Movie.prototype.component19 = function () {
    return this.spokenLanguages;
  };
  Movie.prototype.component20 = function () {
    return this.status;
  };
  Movie.prototype.component21 = function () {
    return this.tagline;
  };
  Movie.prototype.component22 = function () {
    return this.title;
  };
  Movie.prototype.component23 = function () {
    return this.video;
  };
  Movie.prototype.component24 = function () {
    return this.voteAverage;
  };
  Movie.prototype.component25 = function () {
    return this.voteCount;
  };
  Movie.prototype.copy_kb5txs$ = function (adult, backdropPath, belongsToCollection, budget, genres, homepage, id, imdbId, originalLanguage, originalTitle, overview, popularity, posterPath, productionCompanies, productionCountries, releaseDate, revenue, runtime, spokenLanguages, status, tagline, title, video, voteAverage, voteCount) {
    return new Movie(adult === void 0 ? this.adult : adult, backdropPath === void 0 ? this.backdropPath : backdropPath, belongsToCollection === void 0 ? this.belongsToCollection : belongsToCollection, budget === void 0 ? this.budget : budget, genres === void 0 ? this.genres : genres, homepage === void 0 ? this.homepage : homepage, id === void 0 ? this.id : id, imdbId === void 0 ? this.imdbId : imdbId, originalLanguage === void 0 ? this.originalLanguage : originalLanguage, originalTitle === void 0 ? this.originalTitle : originalTitle, overview === void 0 ? this.overview : overview, popularity === void 0 ? this.popularity : popularity, posterPath === void 0 ? this.posterPath : posterPath, productionCompanies === void 0 ? this.productionCompanies : productionCompanies, productionCountries === void 0 ? this.productionCountries : productionCountries, releaseDate === void 0 ? this.releaseDate : releaseDate, revenue === void 0 ? this.revenue : revenue, runtime === void 0 ? this.runtime : runtime, spokenLanguages === void 0 ? this.spokenLanguages : spokenLanguages, status === void 0 ? this.status : status, tagline === void 0 ? this.tagline : tagline, title === void 0 ? this.title : title, video === void 0 ? this.video : video, voteAverage === void 0 ? this.voteAverage : voteAverage, voteCount === void 0 ? this.voteCount : voteCount);
  };
  Movie.prototype.toString = function () {
    return 'Movie(adult=' + Kotlin.toString(this.adult) + (', backdropPath=' + Kotlin.toString(this.backdropPath)) + (', belongsToCollection=' + Kotlin.toString(this.belongsToCollection)) + (', budget=' + Kotlin.toString(this.budget)) + (', genres=' + Kotlin.toString(this.genres)) + (', homepage=' + Kotlin.toString(this.homepage)) + (', id=' + Kotlin.toString(this.id)) + (', imdbId=' + Kotlin.toString(this.imdbId)) + (', originalLanguage=' + Kotlin.toString(this.originalLanguage)) + (', originalTitle=' + Kotlin.toString(this.originalTitle)) + (', overview=' + Kotlin.toString(this.overview)) + (', popularity=' + Kotlin.toString(this.popularity)) + (', posterPath=' + Kotlin.toString(this.posterPath)) + (', productionCompanies=' + Kotlin.toString(this.productionCompanies)) + (', productionCountries=' + Kotlin.toString(this.productionCountries)) + (', releaseDate=' + Kotlin.toString(this.releaseDate)) + (', revenue=' + Kotlin.toString(this.revenue)) + (', runtime=' + Kotlin.toString(this.runtime)) + (', spokenLanguages=' + Kotlin.toString(this.spokenLanguages)) + (', status=' + Kotlin.toString(this.status)) + (', tagline=' + Kotlin.toString(this.tagline)) + (', title=' + Kotlin.toString(this.title)) + (', video=' + Kotlin.toString(this.video)) + (', voteAverage=' + Kotlin.toString(this.voteAverage)) + (', voteCount=' + Kotlin.toString(this.voteCount)) + ')';
  };
  Movie.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.adult) | 0;
    result = result * 31 + Kotlin.hashCode(this.backdropPath) | 0;
    result = result * 31 + Kotlin.hashCode(this.belongsToCollection) | 0;
    result = result * 31 + Kotlin.hashCode(this.budget) | 0;
    result = result * 31 + Kotlin.hashCode(this.genres) | 0;
    result = result * 31 + Kotlin.hashCode(this.homepage) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.imdbId) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalLanguage) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalTitle) | 0;
    result = result * 31 + Kotlin.hashCode(this.overview) | 0;
    result = result * 31 + Kotlin.hashCode(this.popularity) | 0;
    result = result * 31 + Kotlin.hashCode(this.posterPath) | 0;
    result = result * 31 + Kotlin.hashCode(this.productionCompanies) | 0;
    result = result * 31 + Kotlin.hashCode(this.productionCountries) | 0;
    result = result * 31 + Kotlin.hashCode(this.releaseDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.revenue) | 0;
    result = result * 31 + Kotlin.hashCode(this.runtime) | 0;
    result = result * 31 + Kotlin.hashCode(this.spokenLanguages) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.tagline) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.video) | 0;
    result = result * 31 + Kotlin.hashCode(this.voteAverage) | 0;
    result = result * 31 + Kotlin.hashCode(this.voteCount) | 0;
    return result;
  };
  Movie.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.adult, other.adult) && Kotlin.equals(this.backdropPath, other.backdropPath) && Kotlin.equals(this.belongsToCollection, other.belongsToCollection) && Kotlin.equals(this.budget, other.budget) && Kotlin.equals(this.genres, other.genres) && Kotlin.equals(this.homepage, other.homepage) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.imdbId, other.imdbId) && Kotlin.equals(this.originalLanguage, other.originalLanguage) && Kotlin.equals(this.originalTitle, other.originalTitle) && Kotlin.equals(this.overview, other.overview) && Kotlin.equals(this.popularity, other.popularity) && Kotlin.equals(this.posterPath, other.posterPath) && Kotlin.equals(this.productionCompanies, other.productionCompanies) && Kotlin.equals(this.productionCountries, other.productionCountries) && Kotlin.equals(this.releaseDate, other.releaseDate) && Kotlin.equals(this.revenue, other.revenue) && Kotlin.equals(this.runtime, other.runtime) && Kotlin.equals(this.spokenLanguages, other.spokenLanguages) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.tagline, other.tagline) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.video, other.video) && Kotlin.equals(this.voteAverage, other.voteAverage) && Kotlin.equals(this.voteCount, other.voteCount)))));
  };
  function ProductionCompany(id, logoPath, name, originCountry) {
    this.id = id;
    this.logoPath = logoPath;
    this.name = name;
    this.originCountry = originCountry;
  }
  ProductionCompany.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProductionCompany',
    interfaces: []
  };
  ProductionCompany.prototype.component1 = function () {
    return this.id;
  };
  ProductionCompany.prototype.component2 = function () {
    return this.logoPath;
  };
  ProductionCompany.prototype.component3 = function () {
    return this.name;
  };
  ProductionCompany.prototype.component4 = function () {
    return this.originCountry;
  };
  ProductionCompany.prototype.copy_cgs6fs$ = function (id, logoPath, name, originCountry) {
    return new ProductionCompany(id === void 0 ? this.id : id, logoPath === void 0 ? this.logoPath : logoPath, name === void 0 ? this.name : name, originCountry === void 0 ? this.originCountry : originCountry);
  };
  ProductionCompany.prototype.toString = function () {
    return 'ProductionCompany(id=' + Kotlin.toString(this.id) + (', logoPath=' + Kotlin.toString(this.logoPath)) + (', name=' + Kotlin.toString(this.name)) + (', originCountry=' + Kotlin.toString(this.originCountry)) + ')';
  };
  ProductionCompany.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.logoPath) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.originCountry) | 0;
    return result;
  };
  ProductionCompany.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.logoPath, other.logoPath) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.originCountry, other.originCountry)))));
  };
  function ProductionCountry(iso31661, name) {
    this.iso31661 = iso31661;
    this.name = name;
  }
  ProductionCountry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProductionCountry',
    interfaces: []
  };
  ProductionCountry.prototype.component1 = function () {
    return this.iso31661;
  };
  ProductionCountry.prototype.component2 = function () {
    return this.name;
  };
  ProductionCountry.prototype.copy_puj7f4$ = function (iso31661, name) {
    return new ProductionCountry(iso31661 === void 0 ? this.iso31661 : iso31661, name === void 0 ? this.name : name);
  };
  ProductionCountry.prototype.toString = function () {
    return 'ProductionCountry(iso31661=' + Kotlin.toString(this.iso31661) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  ProductionCountry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.iso31661) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ProductionCountry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.iso31661, other.iso31661) && Kotlin.equals(this.name, other.name)))));
  };
  function SpokenLanguage(iso6391, name) {
    this.iso6391 = iso6391;
    this.name = name;
  }
  SpokenLanguage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpokenLanguage',
    interfaces: []
  };
  SpokenLanguage.prototype.component1 = function () {
    return this.iso6391;
  };
  SpokenLanguage.prototype.component2 = function () {
    return this.name;
  };
  SpokenLanguage.prototype.copy_puj7f4$ = function (iso6391, name) {
    return new SpokenLanguage(iso6391 === void 0 ? this.iso6391 : iso6391, name === void 0 ? this.name : name);
  };
  SpokenLanguage.prototype.toString = function () {
    return 'SpokenLanguage(iso6391=' + Kotlin.toString(this.iso6391) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  SpokenLanguage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.iso6391) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  SpokenLanguage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.iso6391, other.iso6391) && Kotlin.equals(this.name, other.name)))));
  };
  function MoviesService() {
  }
  MoviesService.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MoviesService',
    interfaces: []
  };
  Object.defineProperty(TmdbApi, 'Companion', {
    get: TmdbApi$Companion_getInstance
  });
  var package$studio = _.studio || (_.studio = {});
  var package$forface = package$studio.forface || (package$studio.forface = {});
  var package$ktmdb = package$forface.ktmdb || (package$forface.ktmdb = {});
  var package$api = package$ktmdb.api || (package$ktmdb.api = {});
  package$api.TmdbApi = TmdbApi;
  $$importsForInline$$['ktor-client-core-js'] = $module$ktor_client_core_js;
  package$api.TmdbApiImpl = TmdbApiImpl;
  var package$entities = package$ktmdb.entities || (package$ktmdb.entities = {});
  package$entities.Genre = Genre;
  package$entities.Movie = Movie;
  package$entities.ProductionCompany = ProductionCompany;
  package$entities.ProductionCountry = ProductionCountry;
  package$entities.SpokenLanguage = SpokenLanguage;
  var package$services = package$ktmdb.services || (package$ktmdb.services = {});
  package$services.MoviesService = MoviesService;
  Kotlin.defineModule('ktmdb', _);
  return _;
}));

//# sourceMappingURL=ktmdb.js.map
