(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'ktor-utils-js', 'ktor-http-js', 'kotlinx-coroutines-io-js', 'kotlinx-io-js', 'kotlinx-atomicfu'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('ktor-utils-js'), require('ktor-http-js'), require('kotlinx-coroutines-io-js'), require('kotlinx-io-js'), require('kotlinx-atomicfu'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-client-core-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-client-core-js'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-client-core-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-client-core-js'.");
    }
    if (typeof this['ktor-utils-js'] === 'undefined') {
      throw new Error("Error loading module 'ktor-client-core-js'. Its dependency 'ktor-utils-js' was not found. Please, check whether 'ktor-utils-js' is loaded prior to 'ktor-client-core-js'.");
    }
    if (typeof this['ktor-http-js'] === 'undefined') {
      throw new Error("Error loading module 'ktor-client-core-js'. Its dependency 'ktor-http-js' was not found. Please, check whether 'ktor-http-js' is loaded prior to 'ktor-client-core-js'.");
    }
    if (typeof this['kotlinx-coroutines-io-js'] === 'undefined') {
      throw new Error("Error loading module 'ktor-client-core-js'. Its dependency 'kotlinx-coroutines-io-js' was not found. Please, check whether 'kotlinx-coroutines-io-js' is loaded prior to 'ktor-client-core-js'.");
    }
    if (typeof this['kotlinx-io-js'] === 'undefined') {
      throw new Error("Error loading module 'ktor-client-core-js'. Its dependency 'kotlinx-io-js' was not found. Please, check whether 'kotlinx-io-js' is loaded prior to 'ktor-client-core-js'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-client-core-js'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-client-core-js'.");
    }
    root['ktor-client-core-js'] = factory(typeof this['ktor-client-core-js'] === 'undefined' ? {} : this['ktor-client-core-js'], kotlin, this['kotlinx-coroutines-core'], this['ktor-utils-js'], this['ktor-http-js'], this['kotlinx-coroutines-io-js'], this['kotlinx-io-js'], this['kotlinx-atomicfu']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$ktor_utils_js, $module$ktor_http_js, $module$kotlinx_coroutines_io_js, $module$kotlinx_io_js, $module$kotlinx_atomicfu) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var GMTDate = $module$ktor_utils_js.io.ktor.util.date.GMTDate_mts6q2$;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CompletableDeferred_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred;
  var throwCCE = Kotlin.throwCCE;
  var HttpStatusCode = $module$ktor_http_js.io.ktor.http.HttpStatusCode;
  var HttpProtocolVersion = $module$ktor_http_js.io.ktor.http.HttpProtocolVersion;
  var Headers = $module$ktor_http_js.io.ktor.http.Headers;
  var OutgoingContent$ByteArrayContent = $module$ktor_http_js.io.ktor.http.content.OutgoingContent.ByteArrayContent;
  var readRemaining = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.readRemaining_ep79e2$;
  var readBytes = $module$kotlinx_io_js.kotlinx.io.core.readBytes_3lionn$;
  var OutgoingContent$ReadChannelContent = $module$ktor_http_js.io.ktor.http.content.OutgoingContent.ReadChannelContent;
  var writer = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.writer_r5ogg1$;
  var OutgoingContent$WriteChannelContent = $module$ktor_http_js.io.ktor.http.content.OutgoingContent.WriteChannelContent;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var Any = Object;
  var writeFully = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.writeFully_p8yv3v$;
  var AttributeKey = $module$ktor_utils_js.io.ktor.util.AttributeKey;
  var Closeable = $module$kotlinx_io_js.kotlinx.io.core.Closeable;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Attributes = $module$ktor_utils_js.io.ktor.util.AttributesJsFn;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var http = $module$ktor_http_js.io.ktor.http;
  var UnsafeHeaderException = $module$ktor_http_js.io.ktor.http.UnsafeHeaderException;
  var throwUPAE = Kotlin.throwUPAE;
  var Throwable = Error;
  var atomic = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$boolean$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var takeFrom = $module$ktor_http_js.io.ktor.http.takeFrom_jl1sg7$;
  var equals = Kotlin.equals;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var getKClass = Kotlin.getKClass;
  var kotlin = Kotlin.kotlin;
  var ByteReadChannel = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.ByteReadChannel;
  var readRemaining_0 = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.readRemaining_5joj65$;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var charsets = $module$kotlinx_io_js.kotlinx.io.charsets;
  var ContentType = $module$ktor_http_js.io.ktor.http.ContentType;
  var withCharset = $module$ktor_http_js.io.ktor.http.withCharset_p1my6q$;
  var TextContent = $module$ktor_http_js.io.ktor.http.content.TextContent;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var OutgoingContent = $module$ktor_http_js.io.ktor.http.content.OutgoingContent;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var L0 = Kotlin.Long.ZERO;
  var atomic_0 = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$long$;
  var Lock = $module$ktor_utils_js.io.ktor.util.Lock;
  var URLBuilder = $module$ktor_http_js.io.ktor.http.URLBuilder;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Url = $module$ktor_http_js.io.ktor.http.Url_61zpoe$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var toString = Kotlin.toString;
  var hostIsIp = $module$ktor_http_js.io.ktor.http.hostIsIp_61zpoe$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_7epoxm$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var isSecure = $module$ktor_http_js.io.ktor.http.isSecure_v5fpbg$;
  var clone = $module$ktor_http_js.io.ktor.http.clone_3q1sfd$;
  var setCookie = $module$ktor_http_js.io.ktor.http.setCookie_v1wgmc$;
  var encodeURLParameter = $module$ktor_http_js.io.ktor.http.encodeURLParameter_f4dhtg$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var copyAndClose = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.copyAndClose_lhug7f$;
  var OutgoingContent$NoContent = $module$ktor_http_js.io.ktor.http.content.OutgoingContent.NoContent;
  var ByteChannel = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.ByteChannel_6taknv$;
  var HttpMessage = $module$ktor_http_js.io.ktor.http.HttpMessage;
  var takeFrom_0 = $module$ktor_http_js.io.ktor.http.takeFrom_rs9g2p$;
  var appendAll = $module$ktor_utils_js.io.ktor.util.appendAll_k10e8h$;
  var HttpMethod = $module$ktor_http_js.io.ktor.http.HttpMethod;
  var HeadersBuilder = $module$ktor_http_js.io.ktor.http.HeadersBuilder;
  var HttpMessageBuilder = $module$ktor_http_js.io.ktor.http.HttpMessageBuilder;
  var takeFrom_1 = $module$ktor_http_js.io.ktor.http.takeFrom_wol2ee$;
  var URLProtocol = $module$ktor_http_js.io.ktor.http.URLProtocol;
  var PipelinePhase = $module$ktor_utils_js.io.ktor.util.pipeline.PipelinePhase;
  var Pipeline = $module$ktor_utils_js.io.ktor.util.pipeline.Pipeline;
  var formUrlEncode = $module$ktor_http_js.io.ktor.http.formUrlEncode_invt95$;
  var writeStringUtf8 = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.writeStringUtf8_n9qdmv$;
  var readBytes_0 = $module$kotlinx_io_js.kotlinx.io.core.readBytes_wb5b4t$;
  var PartData$FileItem = $module$ktor_http_js.io.ktor.http.content.PartData.FileItem;
  var PartData$FormItem = $module$ktor_http_js.io.ktor.http.content.PartData.FormItem;
  var PartData$BinaryItem = $module$ktor_http_js.io.ktor.http.content.PartData.BinaryItem;
  var close = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.close_sypobt$;
  var Random = Kotlin.kotlin.random.Random;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var writeFully_0 = $module$kotlinx_io_js.kotlinx.io.core.writeFully_u129dg$;
  var Input = $module$kotlinx_io_js.kotlinx.io.core.Input;
  var headersOf = $module$ktor_http_js.io.ktor.http.headersOf_puj7f4$;
  var charset = $module$ktor_http_js.io.ktor.http.charset_v1wgmc$;
  var readText = $module$kotlinx_io_js.kotlinx.io.core.readText_q10u79$;
  var Charset = $module$kotlinx_io_js.kotlinx.io.charsets.Charset;
  var readFully = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.readFully_5l0546$;
  var discard = $module$kotlinx_coroutines_io_js.kotlinx.coroutines.io.discard_ep79e2$;
  var OutgoingContent$ProtocolUpgrade = $module$ktor_http_js.io.ktor.http.content.OutgoingContent.ProtocolUpgrade;
  DoubleReceiveException.prototype = Object.create(IllegalStateException.prototype);
  DoubleReceiveException.prototype.constructor = DoubleReceiveException;
  ReceivePipelineFail.prototype = Object.create(IllegalStateException.prototype);
  ReceivePipelineFail.prototype.constructor = ReceivePipelineFail;
  NoTransformationFound.prototype = Object.create(UnsupportedOperationException.prototype);
  NoTransformationFound.prototype.constructor = NoTransformationFound;
  UnsupportedContentTypeException.prototype = Object.create(IllegalStateException.prototype);
  UnsupportedContentTypeException.prototype.constructor = UnsupportedContentTypeException;
  defaultTransformers$lambda$ObjectLiteral.prototype = Object.create(OutgoingContent$ByteArrayContent.prototype);
  defaultTransformers$lambda$ObjectLiteral.prototype.constructor = defaultTransformers$lambda$ObjectLiteral;
  BadResponseStatus.prototype = Object.create(IllegalStateException.prototype);
  BadResponseStatus.prototype.constructor = BadResponseStatus;
  RedirectException.prototype = Object.create(IllegalStateException.prototype);
  RedirectException.prototype.constructor = RedirectException;
  SendCountExceedException.prototype = Object.create(IllegalStateException.prototype);
  SendCountExceedException.prototype.constructor = SendCountExceedException;
  ClientUpgradeContent.prototype = Object.create(OutgoingContent$NoContent.prototype);
  ClientUpgradeContent.prototype.constructor = ClientUpgradeContent;
  HttpRequestPipeline.prototype = Object.create(Pipeline.prototype);
  HttpRequestPipeline.prototype.constructor = HttpRequestPipeline;
  HttpSendPipeline.prototype = Object.create(Pipeline.prototype);
  HttpSendPipeline.prototype.constructor = HttpSendPipeline;
  FormDataContent.prototype = Object.create(OutgoingContent$ByteArrayContent.prototype);
  FormDataContent.prototype.constructor = FormDataContent;
  MultiPartFormDataContent.prototype = Object.create(OutgoingContent$WriteChannelContent.prototype);
  MultiPartFormDataContent.prototype.constructor = MultiPartFormDataContent;
  HttpResponsePipeline.prototype = Object.create(Pipeline.prototype);
  HttpResponsePipeline.prototype.constructor = HttpResponsePipeline;
  HttpReceivePipeline.prototype = Object.create(Pipeline.prototype);
  HttpReceivePipeline.prototype.constructor = HttpReceivePipeline;
  EmptyContent.prototype = Object.create(OutgoingContent$NoContent.prototype);
  EmptyContent.prototype.constructor = EmptyContent;
  wrapHeaders$ObjectLiteral.prototype = Object.create(OutgoingContent$NoContent.prototype);
  wrapHeaders$ObjectLiteral.prototype.constructor = wrapHeaders$ObjectLiteral;
  wrapHeaders$ObjectLiteral_0.prototype = Object.create(OutgoingContent$ReadChannelContent.prototype);
  wrapHeaders$ObjectLiteral_0.prototype.constructor = wrapHeaders$ObjectLiteral_0;
  wrapHeaders$ObjectLiteral_1.prototype = Object.create(OutgoingContent$WriteChannelContent.prototype);
  wrapHeaders$ObjectLiteral_1.prototype.constructor = wrapHeaders$ObjectLiteral_1;
  wrapHeaders$ObjectLiteral_2.prototype = Object.create(OutgoingContent$ByteArrayContent.prototype);
  wrapHeaders$ObjectLiteral_2.prototype.constructor = wrapHeaders$ObjectLiteral_2;
  wrapHeaders$ObjectLiteral_3.prototype = Object.create(OutgoingContent$ProtocolUpgrade.prototype);
  wrapHeaders$ObjectLiteral_3.prototype.constructor = wrapHeaders$ObjectLiteral_3;
  function HttpClient$lambda($receiver) {
    return Unit;
  }
  function HttpClient(block) {
    if (block === void 0)
      block = HttpClient$lambda;
    return HttpClient_0(JsClient(), block);
  }
  function Type() {
  }
  Type.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Type',
    interfaces: []
  };
  function JsType() {
    JsType_instance = this;
  }
  JsType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsType',
    interfaces: [Type]
  };
  var JsType_instance = null;
  function JsType_getInstance() {
    if (JsType_instance === null) {
      new JsType();
    }
    return JsType_instance;
  }
  var typeInfo = defineInlineFunction('ktor-client-core-js.io.ktor.client.call.typeInfo_287e2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var call = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT) {
      return new TypeInfo_init(getKClass(T_0), call.JsType);
    };
  }));
  function Js() {
    Js_instance = this;
  }
  Js.prototype.create_dxyxif$$default = function (block) {
    var $receiver = new HttpClientEngineConfig();
    block($receiver);
    return new JsClientEngine($receiver);
  };
  Js.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Js',
    interfaces: [HttpClientEngineFactory]
  };
  var Js_instance = null;
  function Js_getInstance() {
    if (Js_instance === null) {
      new Js();
    }
    return Js_instance;
  }
  function JsClient() {
    return Js_getInstance();
  }
  function JsClientEngine(config) {
    this.config_2md4la$_0 = config;
    this.dispatcher_j9yf5v$_0 = coroutines.Dispatchers.Default;
    this.coroutineContext_ynwhqr$_0 = this.dispatcher.plus_1fupul$(SupervisorJob());
  }
  Object.defineProperty(JsClientEngine.prototype, 'config', {
    get: function () {
      return this.config_2md4la$_0;
    }
  });
  Object.defineProperty(JsClientEngine.prototype, 'dispatcher', {
    get: function () {
      return this.dispatcher_j9yf5v$_0;
    }
  });
  Object.defineProperty(JsClientEngine.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_ynwhqr$_0;
    }
  });
  function JsClientEngine$execute$lambda(this$JsClientEngine_0, closure$call_0, closure$data_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$JsClientEngine$execute$lambda(this$JsClientEngine_0, closure$call_0, closure$data_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsClientEngine$execute$lambda(this$JsClientEngine_0, closure$call_0, closure$data_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JsClientEngine = this$JsClientEngine_0;
    this.local$closure$call = closure$call_0;
    this.local$closure$data = closure$data_0;
    this.local$tmp$ = void 0;
    this.local$callContext = void 0;
    this.local$requestTime = void 0;
    this.local$request = void 0;
  }
  Coroutine$JsClientEngine$execute$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsClientEngine$execute$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsClientEngine$execute$lambda.prototype.constructor = Coroutine$JsClientEngine$execute$lambda;
  Coroutine$JsClientEngine$execute$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$callContext = CompletableDeferred(this.local$this$JsClientEngine.coroutineContext.get_j3r2sn$(Job.Key)).plus_1fupul$(this.local$this$JsClientEngine.dispatcher);
            this.local$requestTime = GMTDate();
            this.local$request = new DefaultHttpRequest(this.local$closure$call, this.local$closure$data);
            this.local$tmp$ = this.local$request.url;
            this.state_0 = 2;
            this.result_0 = toRaw(this.local$request, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = fetch(this.local$tmp$, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var rawResponse = this.result_0;
            var tmp$_1;
            if ((tmp$_0 = Kotlin.isType(tmp$ = rawResponse.body, Object) ? tmp$ : null) != null)
              tmp$_1 = tmp$_0;
            else {
              throw IllegalStateException_init_0(('Fail to obtain native stream: ' + this.local$closure$call + ', ' + rawResponse).toString());
            }

            var stream = tmp$_1;
            var response = new JsHttpResponse(this.local$closure$call, this.local$requestTime, rawResponse, toByteChannel(stream, this.local$callContext), this.local$callContext);
            return new HttpEngineCall(this.local$request, response);
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
  JsClientEngine.prototype.execute_jw3znh$ = function (call, data, continuation) {
    return withContext(this.dispatcher, JsClientEngine$execute$lambda(this, call, data), continuation);
  };
  JsClientEngine.prototype.close = function () {
  };
  JsClientEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsClientEngine',
    interfaces: [HttpClientEngine]
  };
  function JsHttpResponse(call, requestTime, response, content, coroutineContext) {
    this.call_zbgs66$_0 = call;
    this.requestTime_b7jft4$_0 = requestTime;
    this.response_0 = response;
    this.content_pzgpn$_0 = content;
    this.coroutineContext_ygmdav$_0 = coroutineContext;
    this.status_sr9zci$_0 = HttpStatusCode.Companion.fromValue_za3lpa$(this.response_0.status);
    this.version_mq3fok$_0 = HttpProtocolVersion.Companion.HTTP_1_1;
    this.responseTime_bpeqdu$_0 = GMTDate();
    var $receiver = new HeadersBuilder();
    this.response_0.headers.forEach(JsHttpResponse$headers$lambda$lambda($receiver));
    this.headers_8c8pw2$_0 = $receiver.build();
  }
  Object.defineProperty(JsHttpResponse.prototype, 'call', {
    get: function () {
      return this.call_zbgs66$_0;
    }
  });
  Object.defineProperty(JsHttpResponse.prototype, 'requestTime', {
    get: function () {
      return this.requestTime_b7jft4$_0;
    }
  });
  Object.defineProperty(JsHttpResponse.prototype, 'content', {
    get: function () {
      return this.content_pzgpn$_0;
    }
  });
  Object.defineProperty(JsHttpResponse.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_ygmdav$_0;
    }
  });
  Object.defineProperty(JsHttpResponse.prototype, 'status', {
    get: function () {
      return this.status_sr9zci$_0;
    }
  });
  Object.defineProperty(JsHttpResponse.prototype, 'version', {
    get: function () {
      return this.version_mq3fok$_0;
    }
  });
  Object.defineProperty(JsHttpResponse.prototype, 'responseTime', {
    get: function () {
      return this.responseTime_bpeqdu$_0;
    }
  });
  Object.defineProperty(JsHttpResponse.prototype, 'headers', {
    get: function () {
      return this.headers_8c8pw2$_0;
    }
  });
  JsHttpResponse.prototype.close = function () {
    var tmp$;
    (Kotlin.isType(tmp$ = this.coroutineContext.get_j3r2sn$(Job.Key), CompletableDeferred_0) ? tmp$ : throwCCE()).complete_11rb$(Unit);
  };
  function JsHttpResponse$headers$lambda$lambda(this$) {
    return function (key, value) {
      this$.append_puj7f4$(key, value);
      return Unit;
    };
  }
  JsHttpResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsHttpResponse',
    interfaces: [HttpResponse]
  };
  function toRaw$lambda(closure$jsHeaders) {
    return function (key, values) {
      closure$jsHeaders[key] = values;
      return Unit;
    };
  }
  function toRaw$lambda_0(closure$content_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toRaw$lambda(closure$content_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$toRaw$lambda(closure$content_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$content = closure$content_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toRaw$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toRaw$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toRaw$lambda.prototype.constructor = Coroutine$toRaw$lambda;
  Coroutine$toRaw$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$content.writeTo_sfhht4$(this.local$$receiver.channel, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function toRaw$lambda_1(this$toRaw, closure$jsHeaders, closure$bodyBytes) {
    return function ($receiver) {
      $receiver.method = this$toRaw.method.value;
      $receiver.headers = closure$jsHeaders;
      if (closure$bodyBytes != null) {
        $receiver.body = new Uint8Array(toTypedArray(closure$bodyBytes));
      }
      return Unit;
    };
  }
  function toRaw($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toRaw($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$toRaw($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$jsHeaders = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toRaw.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toRaw.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toRaw.prototype.constructor = Coroutine$toRaw;
  Coroutine$toRaw.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$jsHeaders = {};
            this.local$$receiver.headers.forEach_ubvtmq$(toRaw$lambda(this.local$jsHeaders));
            var content = this.local$$receiver.content;
            if (Kotlin.isType(content, OutgoingContent$ByteArrayContent)) {
              this.local$tmp$ = content.bytes();
              this.state_0 = 6;
              continue;
            }
             else {
              if (Kotlin.isType(content, OutgoingContent$ReadChannelContent)) {
                this.state_0 = 4;
                this.result_0 = readRemaining(content.readFrom(), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                if (Kotlin.isType(content, OutgoingContent$WriteChannelContent)) {
                  this.state_0 = 2;
                  this.result_0 = readRemaining(writer(this.local$$receiver, this.local$$receiver.coroutineContext, void 0, toRaw$lambda_0(content)).channel, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
                 else {
                  this.local$tmp$ = null;
                  this.state_0 = 3;
                  continue;
                }
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = readBytes(this.result_0);
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$ = readBytes(this.result_0);
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            var bodyBytes = this.local$tmp$;
            return buildObject(toRaw$lambda_1(this.local$$receiver, this.local$jsHeaders, bodyBytes));
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
  var Result = Kotlin.kotlin.Result;
  function fetch$lambda$lambda(closure$it) {
    return function (response) {
      closure$it.resumeWith_tl1gpc$(new Result(response));
      return Unit;
    };
  }
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  function fetch$lambda$lambda_0(closure$it) {
    return function (cause) {
      closure$it.resumeWith_tl1gpc$(new Result(createFailure(cause)));
      return Unit;
    };
  }
  function fetch$lambda(closure$url, closure$request) {
    return function (it) {
      window.fetch(closure$url.toString(), closure$request).then(fetch$lambda$lambda(it), fetch$lambda$lambda_0(it));
      return Unit;
    };
  }
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var CancellableContinuationImpl_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellableContinuationImpl;
  function suspendCancellableCoroutine$lambda(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function fetch(url_0, request_0, continuation_0, suspended) {
    var instance = new Coroutine$fetch(url_0, request_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$fetch(url_0, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$url = url_0;
    this.local$request = request_0;
  }
  Coroutine$fetch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetch.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetch.prototype.constructor = Coroutine$fetch;
  Coroutine$fetch.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(fetch$lambda(this.local$url, this.local$request))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function buildObject(block) {
    var tmp$;
    var $receiver = (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    block($receiver);
    return $receiver;
  }
  function toByteChannel$lambda(this$toByteChannel_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toByteChannel$lambda(this$toByteChannel_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$toByteChannel$lambda(this$toByteChannel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$toByteChannel = this$toByteChannel_0;
    this.local$tmp$ = void 0;
    this.local$reader = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toByteChannel$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toByteChannel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toByteChannel$lambda.prototype.constructor = Coroutine$toByteChannel$lambda;
  Coroutine$toByteChannel$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$reader = this.local$this$toByteChannel.getReader();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = readChunk(this.local$reader, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var chunk = this.local$tmp$;
            this.state_0 = 5;
            this.result_0 = writeFully(this.local$$receiver.channel, asByteArray(chunk), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            return Unit;
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
  function toByteChannel($receiver, callContext) {
    return writer(coroutines.GlobalScope, callContext, void 0, toByteChannel$lambda($receiver)).channel;
  }
  function readChunk$lambda$lambda(closure$continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done || chunk == null ? null : chunk;
      closure$continuation.resumeWith_tl1gpc$(new Result(result));
      return Unit;
    };
  }
  function readChunk$lambda$lambda_0(closure$continuation) {
    return function (cause) {
      closure$continuation.resumeWith_tl1gpc$(new Result(createFailure(cause)));
      return Unit;
    };
  }
  function readChunk$lambda(this$readChunk) {
    return function (continuation) {
      this$readChunk.read().then(readChunk$lambda$lambda(continuation)).catch(readChunk$lambda$lambda_0(continuation));
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_0(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function readChunk($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readChunk($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readChunk($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readChunk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readChunk.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readChunk.prototype.constructor = Coroutine$readChunk;
  Coroutine$readChunk.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda_0(readChunk$lambda(this.local$$receiver))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function asByteArray($receiver) {
    return new Int8Array($receiver.buffer, $receiver.byteOffset, $receiver.length);
  }
  function platformDefaultTransformers($receiver) {
  }
  var HTTP_CLIENT_THREAD_COUNT;
  var HTTP_CLIENT_DEFAULT_DISPATCHER;
  function HttpClient$lambda_0($receiver) {
    return Unit;
  }
  function HttpClient_0(engineFactory, block) {
    if (block === void 0)
      block = HttpClient$lambda_0;
    var $receiver = new HttpClientConfig();
    block($receiver);
    var config = $receiver;
    var engine = engineFactory.create_dxyxif$(config.engineConfig_8be2vx$);
    return new HttpClient_2(engine, config);
  }
  function HttpClient_1(engine, block) {
    var $receiver = new HttpClientConfig();
    block($receiver);
    return new HttpClient_2(engine, $receiver);
  }
  function HttpClient_2(engine, userConfig) {
    if (userConfig === void 0)
      userConfig = new HttpClientConfig();
    this.engine_0 = engine;
    this.userConfig_0 = userConfig;
    this.requestPipeline = new HttpRequestPipeline();
    this.responsePipeline = new HttpResponsePipeline();
    var $receiver = new HttpSendPipeline();
    $receiver.intercept_o2xdxt$(HttpSendPipeline$Phases_getInstance().Engine, HttpClient$sendPipeline$lambda$lambda(this));
    this.sendPipeline = $receiver;
    this.receivePipeline = new HttpReceivePipeline();
    this.attributes = Attributes();
    this.engineConfig = this.engine_0.config;
    this.config_0 = new HttpClientConfig();
    var $receiver_0 = this.userConfig_0;
    if ($receiver_0.useDefaultTransformers) {
      this.config_0.install_xlxg29$(HttpPlainText$Feature_getInstance());
      this.config_0.install_q2ual$('DefaultTransformers', HttpClient_init$lambda$lambda);
    }
    if ($receiver_0.expectSuccess)
      this.config_0.install_xlxg29$(ExpectSuccess$Companion_getInstance());
    this.config_0.install_xlxg29$(HttpSend$Feature_getInstance());
    if ($receiver_0.followRedirects)
      this.config_0.install_xlxg29$(HttpRedirect$Feature_getInstance());
    this.config_0.plusAssign_bi476h$($receiver_0);
    this.config_0.install_k5i6f8$(this);
  }
  Object.defineProperty(HttpClient_2.prototype, 'coroutineContext', {
    get: function () {
      return this.engine_0.coroutineContext;
    }
  });
  Object.defineProperty(HttpClient_2.prototype, 'dispatcher', {
    get: function () {
      return this.engine_0.dispatcher;
    }
  });
  HttpClient_2.prototype.execute_s9rlw$ = function (builder_0, continuation_0, suspended) {
    var instance = new Coroutine$execute_s9rlw$(this, builder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_s9rlw$($this, builder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$builder = builder_0;
  }
  Coroutine$execute_s9rlw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_s9rlw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_s9rlw$.prototype.constructor = Coroutine$execute_s9rlw$;
  Coroutine$execute_s9rlw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.requestPipeline.execute_8pmvt0$(this.local$builder, this.local$builder.body, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Kotlin.isType(tmp$ = this.result_0, HttpClientCall) ? tmp$ : throwCCE();
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
  HttpClient_2.prototype.config_f0veat$ = function (block) {
    var tmp$ = this.engine_0;
    var $receiver = new HttpClientConfig();
    $receiver.plusAssign_bi476h$(this.userConfig_0);
    block($receiver);
    return new HttpClient_2(tmp$, $receiver);
  };
  HttpClient_2.prototype.close = function () {
    var tmp$;
    tmp$ = this.attributes.allKeys.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var feature = this.attributes.get_yzaw86$(Kotlin.isType(tmp$_0 = element, AttributeKey) ? tmp$_0 : throwCCE());
      if (Kotlin.isType(feature, Closeable)) {
        feature.close();
      }
    }
    this.engine_0.close();
  };
  function HttpClient$sendPipeline$lambda$lambda$lambda(closure$requestData) {
    return function (cause) {
      var tmp$;
      var childContext = Kotlin.isType(tmp$ = closure$requestData.executionContext, CompletableDeferred_0) ? tmp$ : throwCCE();
      if (cause == null)
        childContext.complete_11rb$(Unit);
      else
        childContext.cancel_dbl4no$(cause);
      return Unit;
    };
  }
  function HttpClient$sendPipeline$lambda$lambda(this$HttpClient_0) {
    return function ($receiver_0, content_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpClient$sendPipeline$lambda$lambda(this$HttpClient_0, $receiver_0, content_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpClient$sendPipeline$lambda$lambda(this$HttpClient_0, $receiver_0, content_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HttpClient = this$HttpClient_0;
    this.local$call = void 0;
    this.local$requestData = void 0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
  }
  Coroutine$HttpClient$sendPipeline$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpClient$sendPipeline$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpClient$sendPipeline$lambda$lambda.prototype.constructor = Coroutine$HttpClient$sendPipeline$lambda$lambda;
  Coroutine$HttpClient$sendPipeline$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$call = new HttpClientCall(this.local$this$HttpClient);
            var $receiver = new HttpRequestBuilder();
            $receiver.takeFrom_s9rlw$(this.local$$receiver.context);
            $receiver.body = this.local$content;
            this.local$requestData = $receiver.build();
            validateHeaders(this.local$requestData);
            this.state_0 = 2;
            this.result_0 = this.local$this$HttpClient.engine_0.execute_jw3znh$(this.local$call, this.local$requestData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$ = this.result_0;
            var request = tmp$.component1()
            , response = tmp$.component2();
            this.local$call.request = request;
            this.local$call.response = response;
            ensureNotNull(response.coroutineContext.get_j3r2sn$(Job.Key)).invokeOnCompletion_f05bi3$(HttpClient$sendPipeline$lambda$lambda$lambda(this.local$requestData));
            this.state_0 = 3;
            this.result_0 = this.local$this$HttpClient.receivePipeline.execute_8pmvt0$(this.local$call, this.local$call.response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var receivedCall = this.result_0.call;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(receivedCall, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function HttpClient_init$lambda$lambda($receiver) {
    defaultTransformers($receiver);
    return Unit;
  }
  HttpClient_2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClient',
    interfaces: [Closeable, CoroutineScope]
  };
  function validateHeaders(request) {
    var tmp$, tmp$_0;
    var requestHeaders = request.headers;
    tmp$ = http.HttpHeaders.UnsafeHeaders;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var header = tmp$[tmp$_0];
      if (requestHeaders.contains_61zpoe$(header)) {
        throw new UnsafeHeaderException(header);
      }
    }
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function HttpClientConfig() {
    this.features_0 = LinkedHashMap_init();
    this.customInterceptors_0 = LinkedHashMap_init();
    this.engineConfig_8be2vx$ = HttpClientConfig$engineConfig$lambda;
    this.followRedirects = true;
    this.useDefaultTransformers = true;
    this.expectSuccess = true;
  }
  function HttpClientConfig$engine$lambda(closure$oldConfig, closure$block) {
    return function ($receiver) {
      closure$oldConfig($receiver);
      closure$block($receiver);
      return Unit;
    };
  }
  HttpClientConfig.prototype.engine_dxyxif$ = function (block) {
    var oldConfig = this.engineConfig_8be2vx$;
    this.engineConfig_8be2vx$ = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  function HttpClientConfig$install$lambda($receiver) {
    return Unit;
  }
  function HttpClientConfig$install$lambda$lambda() {
    return Attributes();
  }
  function HttpClientConfig$install$lambda_0(closure$feature, closure$featureData) {
    return function (scope) {
      var attributes = scope.attributes.computeIfAbsent_u4q9l2$(FEATURE_INSTALLED_LIST, HttpClientConfig$install$lambda$lambda);
      closure$feature.install_wojrb5$(closure$featureData, scope);
      attributes.put_uuntuo$(closure$feature.key, closure$featureData);
      return Unit;
    };
  }
  HttpClientConfig.prototype.install_xlxg29$ = function (feature, configure) {
    if (configure === void 0)
      configure = HttpClientConfig$install$lambda;
    var featureData = feature.prepare_oh3mgy$(configure);
    var $receiver = this.features_0;
    var key = feature.key;
    $receiver.put_xwzc9p$(key, HttpClientConfig$install$lambda_0(feature, featureData));
  };
  HttpClientConfig.prototype.install_q2ual$ = function (key, block) {
    this.customInterceptors_0.put_xwzc9p$(key, block);
  };
  HttpClientConfig.prototype.install_k5i6f8$ = function (client) {
    var tmp$;
    tmp$ = this.features_0.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(client);
    }
    var tmp$_0;
    tmp$_0 = this.customInterceptors_0.values.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0(client);
    }
  };
  HttpClientConfig.prototype.clone = function () {
    var result = new HttpClientConfig();
    result.features_0.putAll_a2k3zr$(this.features_0);
    result.customInterceptors_0.putAll_a2k3zr$(this.customInterceptors_0);
    result.engineConfig_8be2vx$ = this.engineConfig_8be2vx$;
    return result;
  };
  HttpClientConfig.prototype.plusAssign_bi476h$ = function (other) {
    this.followRedirects = other.followRedirects;
    this.useDefaultTransformers = other.useDefaultTransformers;
    this.expectSuccess = other.expectSuccess;
    var $receiver = this.features_0;
    var map = other.features_0;
    $receiver.putAll_a2k3zr$(map);
    var $receiver_0 = this.customInterceptors_0;
    var map_0 = other.customInterceptors_0;
    $receiver_0.putAll_a2k3zr$(map_0);
  };
  function HttpClientConfig$engineConfig$lambda($receiver) {
    return Unit;
  }
  HttpClientConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClientConfig',
    interfaces: []
  };
  function HttpClientCall(client) {
    this.client_0 = client;
    this.received_0 = atomic(false);
    this.request_vta333$_0 = this.request_vta333$_0;
    this.response_zcvbsz$_0 = this.response_zcvbsz$_0;
    this.responseConfig = this.client_0.engineConfig.response;
  }
  Object.defineProperty(HttpClientCall.prototype, 'coroutineContext', {
    get: function () {
      return this.response.coroutineContext;
    }
  });
  Object.defineProperty(HttpClientCall.prototype, 'request', {
    get: function () {
      if (this.request_vta333$_0 == null)
        return throwUPAE('request');
      return this.request_vta333$_0;
    },
    set: function (request) {
      this.request_vta333$_0 = request;
    }
  });
  Object.defineProperty(HttpClientCall.prototype, 'response', {
    get: function () {
      if (this.response_zcvbsz$_0 == null)
        return throwUPAE('response');
      return this.response_zcvbsz$_0;
    },
    set: function (response) {
      this.response_zcvbsz$_0 = response;
    }
  });
  HttpClientCall.prototype.receive_jo9acv$ = function (info_0, continuation_0, suspended) {
    var instance = new Coroutine$receive_jo9acv$(this, info_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$receive_jo9acv$($this, info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$info = info_0;
  }
  Coroutine$receive_jo9acv$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$receive_jo9acv$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive_jo9acv$.prototype.constructor = Coroutine$receive_jo9acv$;
  Coroutine$receive_jo9acv$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$info.type.isInstance_s8jyv4$(this.$this.response)) {
              return this.$this.response;
            }
             else {
              this.state_0 = 1;
              continue;
            }

          case 1:
            if (!this.$this.received_0.compareAndSet$atomicfu(false, true))
              throw new DoubleReceiveException(this.$this);
            var subject = new HttpResponseContainer(this.local$info, this.$this.response);
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.$this.client_0.responsePipeline.execute_8pmvt0$(this.$this, subject, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            var result = this.result_0.response;
            if (!this.local$info.type.isInstance_s8jyv4$(result))
              throw new NoTransformationFound(Kotlin.getKClassFromExpression(result), this.local$info.type);
            return result;
          case 3:
            this.exceptionState_0 = 5;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, BadResponseStatus)) {
              throw cause;
            }
             else if (Kotlin.isType(cause, Throwable)) {
              throw new ReceivePipelineFail(this.$this.response.call, this.local$info, cause);
            }
             else
              throw cause;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  HttpClientCall.prototype.close = function () {
    this.response.close();
  };
  HttpClientCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClientCall',
    interfaces: [Closeable, CoroutineScope]
  };
  function HttpEngineCall(request, response) {
    this.request = request;
    this.response = response;
  }
  HttpEngineCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpEngineCall',
    interfaces: []
  };
  HttpEngineCall.prototype.component1 = function () {
    return this.request;
  };
  HttpEngineCall.prototype.component2 = function () {
    return this.response;
  };
  HttpEngineCall.prototype.copy_edjo92$ = function (request, response) {
    return new HttpEngineCall(request === void 0 ? this.request : request, response === void 0 ? this.response : response);
  };
  HttpEngineCall.prototype.toString = function () {
    return 'HttpEngineCall(request=' + Kotlin.toString(this.request) + (', response=' + Kotlin.toString(this.response)) + ')';
  };
  HttpEngineCall.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.request) | 0;
    result = result * 31 + Kotlin.hashCode(this.response) | 0;
    return result;
  };
  HttpEngineCall.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.request, other.request) && Kotlin.equals(this.response, other.response)))));
  };
  function call$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$call$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$call$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$call$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$call$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$call$lambda.prototype.constructor = Coroutine$call$lambda;
  Coroutine$call$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
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
  function call($receiver_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$call($receiver_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$call($receiver_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = $receiver_0;
    this.local$block = block_0;
  }
  Coroutine$call.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$call.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$call.prototype.constructor = Coroutine$call;
  Coroutine$call.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = call$lambda;
            this.local$$receiver = new HttpRequestBuilder();
            this.state_0 = 2;
            this.result_0 = this.local$block(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver_0.execute_s9rlw$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function receive(T_0, isT, $receiver, continuation, suspended) {
    var instance = new Coroutine$receive(T_0, isT, $receiver, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$receive(T_0, isT, $receiver, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
  }
  Coroutine$receive.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$receive.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive.prototype.constructor = Coroutine$receive;
  Coroutine$receive.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$_0;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$isT(tmp$_0 = this.result_0) ? tmp$_0 : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.call.receive_8ov3cv$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, continuation) {
      var tmp$_0;
      Kotlin.suspendCall($receiver.receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call.JsType), Kotlin.coroutineReceiver()));
      return isT(tmp$_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_0 : throwCCE();
    };
  }));
  function receive_0(T_0, isT, $receiver, continuation, suspended) {
    var instance = new Coroutine$receive_0(T_0, isT, $receiver, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$receive_0(T_0, isT, $receiver, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
  }
  Coroutine$receive_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$receive_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receive_0.prototype.constructor = Coroutine$receive_0;
  Coroutine$receive_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$_0;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.call.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$isT(tmp$_0 = this.result_0) ? tmp$_0 : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.call.receive_q6wtkc$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, continuation) {
      var tmp$_0;
      Kotlin.suspendCall($receiver.call.receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call.JsType), Kotlin.coroutineReceiver()));
      return isT(tmp$_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_0 : throwCCE();
    };
  }));
  function DoubleReceiveException(call) {
    IllegalStateException_init(this);
    this.name = 'DoubleReceiveException';
    this.message_eo7lbx$_0 = 'Response already received: ' + call;
  }
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    get: function () {
      return this.message_eo7lbx$_0;
    }
  });
  DoubleReceiveException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleReceiveException',
    interfaces: [IllegalStateException]
  };
  function ReceivePipelineFail(request, info, cause) {
    IllegalStateException_init(this);
    this.request = request;
    this.info = info;
    this.cause_ci69p$_0 = cause;
    this.name = 'ReceivePipelineFail';
  }
  Object.defineProperty(ReceivePipelineFail.prototype, 'cause', {
    get: function () {
      return this.cause_ci69p$_0;
    }
  });
  ReceivePipelineFail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReceivePipelineFail',
    interfaces: [IllegalStateException]
  };
  function NoTransformationFound(from, to) {
    UnsupportedOperationException_init(this);
    this.name = 'NoTransformationFound';
    this.message_ce8v8w$_0 = 'No transformation found: ' + from + ' -> ' + to;
  }
  Object.defineProperty(NoTransformationFound.prototype, 'message', {
    get: function () {
      return this.message_ce8v8w$_0;
    }
  });
  NoTransformationFound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoTransformationFound',
    interfaces: [UnsupportedOperationException]
  };
  function TypeInfo(type, reifiedType) {
    this.type = type;
    this.reifiedType = reifiedType;
  }
  TypeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeInfo',
    interfaces: []
  };
  TypeInfo.prototype.component1 = function () {
    return this.type;
  };
  TypeInfo.prototype.component2 = function () {
    return this.reifiedType;
  };
  TypeInfo.prototype.copy_netrco$ = function (type, reifiedType) {
    return new TypeInfo(type === void 0 ? this.type : type, reifiedType === void 0 ? this.reifiedType : reifiedType);
  };
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + Kotlin.toString(this.type) + (', reifiedType=' + Kotlin.toString(this.reifiedType)) + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.reifiedType) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.reifiedType, other.reifiedType)))));
  };
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_0('Failed to write body: ' + Kotlin.getKClassFromExpression(content), this);
    this.name = 'UnsupportedContentTypeException';
  }
  UnsupportedContentTypeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnsupportedContentTypeException',
    interfaces: [IllegalStateException]
  };
  function call$lambda_0(closure$builder_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$call$lambda_0(closure$builder_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$call$lambda_0(closure$builder_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$builder = closure$builder_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$call$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$call$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$call$lambda_0.prototype.constructor = Coroutine$call$lambda_0;
  Coroutine$call$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$$receiver.takeFrom_s9rlw$(this.local$closure$builder);
          case 1:
            throw this.exception_0;
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
  function call_0($receiver, builder, continuation) {
    return call($receiver, call$lambda_0(builder), continuation);
  }
  function call$lambda_1($receiver, continuation_0, suspended) {
    var instance = new Coroutine$call$lambda_1($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$call$lambda_1($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$call$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$call$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$call$lambda_1.prototype.constructor = Coroutine$call$lambda_1;
  Coroutine$call$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
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
  function call$lambda_2(closure$urlString_0, closure$block_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$call$lambda_2(closure$urlString_0, closure$block_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$call$lambda_2(closure$urlString_0, closure$block_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$urlString = closure$urlString_0;
    this.local$closure$block = closure$block_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$call$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$call$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$call$lambda_2.prototype.constructor = Coroutine$call$lambda_2;
  Coroutine$call$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            takeFrom(this.local$$receiver.url, this.local$closure$urlString);
            this.state_0 = 2;
            this.result_0 = this.local$closure$block(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function call_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = call$lambda_1;
    return call($receiver, call$lambda_2(urlString, block), continuation);
  }
  function HttpClientEngine() {
  }
  HttpClientEngine.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpClientEngine',
    interfaces: [Closeable, CoroutineScope]
  };
  function HttpClientEngineFactory() {
  }
  function HttpClientEngineFactory$create$lambda($receiver) {
    return Unit;
  }
  HttpClientEngineFactory.prototype.create_dxyxif$ = function (block, callback$default) {
    if (block === void 0)
      block = HttpClientEngineFactory$create$lambda;
    return callback$default ? callback$default(block) : this.create_dxyxif$$default(block);
  };
  HttpClientEngineFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpClientEngineFactory',
    interfaces: []
  };
  function config$ObjectLiteral(closure$parent, closure$nested) {
    this.closure$parent = closure$parent;
    this.closure$nested = closure$nested;
  }
  function config$ObjectLiteral$create$lambda(closure$nested, closure$block) {
    return function ($receiver) {
      closure$nested($receiver);
      closure$block($receiver);
      return Unit;
    };
  }
  config$ObjectLiteral.prototype.create_dxyxif$$default = function (block) {
    return this.closure$parent.create_dxyxif$(config$ObjectLiteral$create$lambda(this.closure$nested, block));
  };
  config$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [HttpClientEngineFactory]
  };
  function config($receiver, nested) {
    var parent = $receiver;
    return new config$ObjectLiteral(parent, nested);
  }
  function HttpClientEngineConfig() {
    this.dispatcher = null;
    this.threadsCount = 4;
    this.pipelining = true;
    this.response = new HttpResponseConfig();
  }
  HttpClientEngineConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClientEngineConfig',
    interfaces: []
  };
  function mergeHeaders$lambda(closure$requestHeaders, closure$content) {
    return function ($receiver) {
      $receiver.appendAll_hb0ubp$(closure$requestHeaders);
      $receiver.appendAll_hb0ubp$(closure$content.headers);
      return Unit;
    };
  }
  function mergeHeaders$lambda_0(closure$block) {
    return function (key, values) {
      if (equals(http.HttpHeaders.ContentLength, key))
        return;
      if (equals(http.HttpHeaders.ContentType, key))
        return;
      closure$block(key, joinToString(values, ';'));
      return Unit;
    };
  }
  function mergeHeaders(requestHeaders, content, block) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    buildHeaders(mergeHeaders$lambda(requestHeaders, content)).forEach_ubvtmq$(mergeHeaders$lambda_0(block));
    var type = (tmp$_0 = (tmp$ = content.contentType) != null ? tmp$.toString() : null) != null ? tmp$_0 : content.headers.get_61zpoe$(http.HttpHeaders.ContentType);
    var length = (tmp$_2 = (tmp$_1 = content.contentLength) != null ? tmp$_1.toString() : null) != null ? tmp$_2 : content.headers.get_61zpoe$(http.HttpHeaders.ContentLength);
    if (type != null) {
      block(http.HttpHeaders.ContentType, type);
    }
    if (length != null) {
      block(http.HttpHeaders.ContentLength, length);
    }
  }
  function DefaultRequest(builder) {
    DefaultRequest$Feature_getInstance();
    this.builder_0 = builder;
  }
  function DefaultRequest$Feature() {
    DefaultRequest$Feature_instance = this;
    this.key_2n0sxh$_0 = new AttributeKey('DefaultRequest');
  }
  Object.defineProperty(DefaultRequest$Feature.prototype, 'key', {
    get: function () {
      return this.key_2n0sxh$_0;
    }
  });
  DefaultRequest$Feature.prototype.prepare_oh3mgy$$default = function (block) {
    return new DefaultRequest(block);
  };
  function DefaultRequest$Feature$install$lambda(closure$feature_0) {
    return function ($receiver_0, it, continuation_0, suspended) {
      var instance = new Coroutine$DefaultRequest$Feature$install$lambda(closure$feature_0, $receiver_0, it, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DefaultRequest$Feature$install$lambda(closure$feature_0, $receiver_0, it, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$feature = closure$feature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultRequest$Feature$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultRequest$Feature$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultRequest$Feature$install$lambda.prototype.constructor = Coroutine$DefaultRequest$Feature$install$lambda;
  Coroutine$DefaultRequest$Feature$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$$receiver.context;
            this.local$closure$feature.builder_0($receiver);
            return $receiver;
          case 1:
            throw this.exception_0;
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
  DefaultRequest$Feature.prototype.install_wojrb5$ = function (feature, scope) {
    scope.requestPipeline.intercept_o2xdxt$(HttpRequestPipeline$Phases_getInstance().Before, DefaultRequest$Feature$install$lambda(feature));
  };
  DefaultRequest$Feature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Feature',
    interfaces: [HttpClientFeature]
  };
  var DefaultRequest$Feature_instance = null;
  function DefaultRequest$Feature_getInstance() {
    if (DefaultRequest$Feature_instance === null) {
      new DefaultRequest$Feature();
    }
    return DefaultRequest$Feature_instance;
  }
  DefaultRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultRequest',
    interfaces: []
  };
  function defaultRequest$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function defaultRequest($receiver, block) {
    $receiver.install_xlxg29$(DefaultRequest$Feature_getInstance(), defaultRequest$lambda(block));
  }
  function defaultTransformers$lambda$ObjectLiteral(closure$body) {
    this.closure$body = closure$body;
    OutgoingContent$ByteArrayContent.call(this);
    this.contentLength_ca0n1g$_0 = Kotlin.Long.fromInt(closure$body.length);
  }
  Object.defineProperty(defaultTransformers$lambda$ObjectLiteral.prototype, 'contentLength', {
    get: function () {
      return this.contentLength_ca0n1g$_0;
    }
  });
  defaultTransformers$lambda$ObjectLiteral.prototype.bytes = function () {
    return this.closure$body;
  };
  defaultTransformers$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ByteArrayContent]
  };
  function defaultTransformers$lambda($receiver_0, body_0, continuation_0, suspended) {
    var instance = new Coroutine$defaultTransformers$lambda($receiver_0, body_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$defaultTransformers$lambda($receiver_0, body_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$body = body_0;
  }
  Coroutine$defaultTransformers$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$defaultTransformers$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$defaultTransformers$lambda.prototype.constructor = Coroutine$defaultTransformers$lambda;
  Coroutine$defaultTransformers$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$$receiver.context.headers.get_61zpoe$(http.HttpHeaders.Accept) == null) {
              this.local$$receiver.context.headers.append_puj7f4$(http.HttpHeaders.Accept, '*/*');
            }

            if (Kotlin.isByteArray(this.local$body)) {
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new defaultTransformers$lambda$ObjectLiteral(this.local$body), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return Unit;
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
  function defaultTransformers$lambda_0($receiver_0, f_0, continuation_0, suspended) {
    var instance = new Coroutine$defaultTransformers$lambda_0($receiver_0, f_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$defaultTransformers$lambda_0($receiver_0, f_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$info = void 0;
    this.local$response = void 0;
    this.local$$receiver = $receiver_0;
    this.local$f = f_0;
  }
  Coroutine$defaultTransformers$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$defaultTransformers$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$defaultTransformers$lambda_0.prototype.constructor = Coroutine$defaultTransformers$lambda_0;
  Coroutine$defaultTransformers$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$info = this.local$f.component1(), this.local$response = this.local$f.component2();
            var tmp$, tmp$_0, tmp$_1;
            if (!Kotlin.isType(this.local$response, HttpResponse)) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var contentLength = (tmp$_0 = (tmp$ = this.local$response.headers.get_61zpoe$(http.HttpHeaders.ContentLength)) != null ? toLong(tmp$) : null) != null ? tmp$_0 : Long$Companion$MAX_VALUE;
            tmp$_1 = this.local$info.type;
            if (equals(tmp$_1, getKClass(Object.getPrototypeOf(kotlin.Unit).constructor))) {
              this.local$response.close();
              this.state_0 = 8;
              this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, Unit), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (equals(tmp$_1, getKClass(ByteReadChannel))) {
                this.state_0 = 6;
                this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, this.local$response.content), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                if (equals(tmp$_1, PrimitiveClasses$byteArrayClass)) {
                  this.state_0 = 3;
                  this.result_0 = readRemaining_0(this.local$response.content, contentLength, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
                 else {
                  this.state_0 = 5;
                  continue;
                }
              }
            }

          case 3:
            var readRemaining = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, readBytes(readRemaining)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
          case 5:
            this.state_0 = 7;
            continue;
          case 6:
            return this.result_0;
          case 7:
            this.state_0 = 9;
            continue;
          case 8:
            return this.result_0;
          case 9:
            return Unit;
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
  function defaultTransformers($receiver) {
    $receiver.requestPipeline.intercept_o2xdxt$(HttpRequestPipeline$Phases_getInstance().Render, defaultTransformers$lambda);
    $receiver.responsePipeline.intercept_o2xdxt$(HttpResponsePipeline$Phases_getInstance().Parse, defaultTransformers$lambda_0);
    platformDefaultTransformers($receiver);
  }
  function ExpectSuccess() {
    ExpectSuccess$Companion_getInstance();
  }
  function ExpectSuccess$Companion() {
    ExpectSuccess$Companion_instance = this;
    this.key_do7dj$_0 = new AttributeKey('ExpectSuccess');
  }
  Object.defineProperty(ExpectSuccess$Companion.prototype, 'key', {
    get: function () {
      return this.key_do7dj$_0;
    }
  });
  ExpectSuccess$Companion.prototype.prepare_oh3mgy$$default = function (block) {
    return new ExpectSuccess();
  };
  function ExpectSuccess$Companion$install$lambda($receiver_0, it, continuation_0, suspended) {
    var instance = new Coroutine$ExpectSuccess$Companion$install$lambda($receiver_0, it, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$ExpectSuccess$Companion$install$lambda($receiver_0, it, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ExpectSuccess$Companion$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ExpectSuccess$Companion$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ExpectSuccess$Companion$install$lambda.prototype.constructor = Coroutine$ExpectSuccess$Companion$install$lambda;
  Coroutine$ExpectSuccess$Companion$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var response = this.local$$receiver.context.response;
            if (response.status.value >= 300)
              throw new BadResponseStatus(response.status, response);
            return Unit;
          case 1:
            throw this.exception_0;
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
  ExpectSuccess$Companion.prototype.install_wojrb5$ = function (feature, scope) {
    scope.responsePipeline.intercept_o2xdxt$(HttpResponsePipeline$Phases_getInstance().Receive, ExpectSuccess$Companion$install$lambda);
  };
  ExpectSuccess$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HttpClientFeature]
  };
  var ExpectSuccess$Companion_instance = null;
  function ExpectSuccess$Companion_getInstance() {
    if (ExpectSuccess$Companion_instance === null) {
      new ExpectSuccess$Companion();
    }
    return ExpectSuccess$Companion_instance;
  }
  ExpectSuccess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpectSuccess',
    interfaces: []
  };
  function BadResponseStatus(statusCode, response) {
    IllegalStateException_init(this);
    this.statusCode = statusCode;
    this.response = response;
    this.name = 'BadResponseStatus';
  }
  BadResponseStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BadResponseStatus',
    interfaces: [IllegalStateException]
  };
  var FEATURE_INSTALLED_LIST;
  function HttpClientFeature() {
  }
  function HttpClientFeature$prepare$lambda($receiver) {
    return Unit;
  }
  HttpClientFeature.prototype.prepare_oh3mgy$ = function (block, callback$default) {
    if (block === void 0)
      block = HttpClientFeature$prepare$lambda;
    return callback$default ? callback$default(block) : this.prepare_oh3mgy$$default(block);
  };
  HttpClientFeature.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpClientFeature',
    interfaces: []
  };
  function feature($receiver, feature) {
    var tmp$;
    return (tmp$ = $receiver.attributes.getOrNull_yzaw86$(FEATURE_INSTALLED_LIST)) != null ? tmp$.getOrNull_yzaw86$(feature.key) : null;
  }
  function HttpPlainText(defaultCharset) {
    HttpPlainText$Feature_getInstance();
    this.defaultCharset = defaultCharset;
  }
  var addSuppressedInternal = $module$kotlinx_io_js.kotlinx.io.core.addSuppressedInternal_oh0dqn$;
  HttpPlainText.prototype.read_71tmp6$ = function (response_0, continuation_0, suspended) {
    var instance = new Coroutine$read_71tmp6$(this, response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_71tmp6$($this, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$result = void 0;
    this.local$response = response_0;
  }
  Coroutine$read_71tmp6$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_71tmp6$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_71tmp6$.prototype.constructor = Coroutine$read_71tmp6$;
  Coroutine$read_71tmp6$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = readText_0(this.local$response, this.$this.defaultCharset, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$result = this.result_0;
            this.local$response.close();
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var first = this.exception_0;
            if (Kotlin.isType(first, Throwable)) {
              try {
                this.local$response.close();
              }
               catch (second) {
                if (Kotlin.isType(second, Throwable)) {
                  addSuppressedInternal(first, second);
                }
                 else
                  throw second;
              }
              throw first;
            }
             else
              throw first;
          case 3:
            return this.local$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function HttpPlainText$Config() {
    this.defaultCharset = charsets.Charsets.UTF_8;
  }
  HttpPlainText$Config.prototype.build_8be2vx$ = function () {
    return new HttpPlainText(this.defaultCharset);
  };
  HttpPlainText$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function HttpPlainText$Feature() {
    HttpPlainText$Feature_instance = this;
    this.key_wkh146$_0 = new AttributeKey('HttpPlainText');
  }
  Object.defineProperty(HttpPlainText$Feature.prototype, 'key', {
    get: function () {
      return this.key_wkh146$_0;
    }
  });
  HttpPlainText$Feature.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpPlainText$Config();
    block($receiver);
    return $receiver.build_8be2vx$();
  };
  function HttpPlainText$Feature$install$lambda(closure$feature_0) {
    return function ($receiver_0, content_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpPlainText$Feature$install$lambda(closure$feature_0, $receiver_0, content_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpPlainText$Feature$install$lambda(closure$feature_0, $receiver_0, content_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$feature = closure$feature_0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
  }
  Coroutine$HttpPlainText$Feature$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpPlainText$Feature$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpPlainText$Feature$install$lambda.prototype.constructor = Coroutine$HttpPlainText$Feature$install$lambda;
  Coroutine$HttpPlainText$Feature$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!(typeof this.local$content === 'string')) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var contentType = withCharset(ContentType.Text.Plain, this.local$closure$feature.defaultCharset);
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new TextContent(this.local$content, contentType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function HttpPlainText$Feature$install$lambda_0(closure$feature_0) {
    return function ($receiver_0, f_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpPlainText$Feature$install$lambda_0(closure$feature_0, $receiver_0, f_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpPlainText$Feature$install$lambda_0(closure$feature_0, $receiver_0, f_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$feature = closure$feature_0;
    this.local$info = void 0;
    this.local$response = void 0;
    this.local$$receiver = $receiver_0;
    this.local$f = f_0;
  }
  Coroutine$HttpPlainText$Feature$install$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpPlainText$Feature$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpPlainText$Feature$install$lambda_0.prototype.constructor = Coroutine$HttpPlainText$Feature$install$lambda_0;
  Coroutine$HttpPlainText$Feature$install$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$info = this.local$f.component1(), this.local$response = this.local$f.component2();
            var tmp$;
            if (!((tmp$ = this.local$info.type) != null ? tmp$.equals(PrimitiveClasses$stringClass) : null) || !Kotlin.isType(this.local$response, HttpResponse)) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$closure$feature.read_71tmp6$(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, this.result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  HttpPlainText$Feature.prototype.install_wojrb5$ = function (feature, scope) {
    scope.requestPipeline.intercept_o2xdxt$(HttpRequestPipeline$Phases_getInstance().Render, HttpPlainText$Feature$install$lambda(feature));
    scope.responsePipeline.intercept_o2xdxt$(HttpResponsePipeline$Phases_getInstance().Parse, HttpPlainText$Feature$install$lambda_0(feature));
  };
  HttpPlainText$Feature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Feature',
    interfaces: [HttpClientFeature]
  };
  var HttpPlainText$Feature_instance = null;
  function HttpPlainText$Feature_getInstance() {
    if (HttpPlainText$Feature_instance === null) {
      new HttpPlainText$Feature();
    }
    return HttpPlainText$Feature_instance;
  }
  HttpPlainText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpPlainText',
    interfaces: []
  };
  function HttpRedirect() {
    HttpRedirect$Feature_getInstance();
  }
  function HttpRedirect$Feature() {
    HttpRedirect$Feature_instance = this;
    this.key_oxn36d$_0 = new AttributeKey('HttpRedirect');
  }
  Object.defineProperty(HttpRedirect$Feature.prototype, 'key', {
    get: function () {
      return this.key_oxn36d$_0;
    }
  });
  HttpRedirect$Feature.prototype.prepare_oh3mgy$$default = function (block) {
    return new HttpRedirect();
  };
  function HttpRedirect$Feature$install$lambda(this$HttpRedirect$_0) {
    return function ($receiver_0, origin_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpRedirect$Feature$install$lambda(this$HttpRedirect$_0, $receiver_0, origin_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpRedirect$Feature$install$lambda(this$HttpRedirect$_0, $receiver_0, origin_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HttpRedirect$ = this$HttpRedirect$_0;
    this.local$$receiver = $receiver_0;
    this.local$origin = origin_0;
  }
  Coroutine$HttpRedirect$Feature$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpRedirect$Feature$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpRedirect$Feature$install$lambda.prototype.constructor = Coroutine$HttpRedirect$Feature$install$lambda;
  Coroutine$HttpRedirect$Feature$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$HttpRedirect$.handleCall_0(this.local$$receiver, this.local$origin, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  HttpRedirect$Feature.prototype.install_wojrb5$ = function (feature_0, scope) {
    ensureNotNull(feature(scope, HttpSend$Feature_getInstance())).intercept_efqc3v$(HttpRedirect$Feature$install$lambda(this));
  };
  HttpRedirect$Feature.prototype.handleCall_0 = function ($receiver_0, origin_0, continuation_0, suspended) {
    var instance = new Coroutine$handleCall_0(this, $receiver_0, origin_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$handleCall_0($this, $receiver_0, origin_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$call = void 0;
    this.local$$receiver = $receiver_0;
    this.local$origin = origin_0;
  }
  Coroutine$handleCall_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$handleCall_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$handleCall_0.prototype.constructor = Coroutine$handleCall_0;
  Coroutine$handleCall_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!isRedirect(this.local$origin.response.status)) {
              return this.local$origin;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$call = this.local$origin;
            this.state_0 = 3;
            continue;
          case 3:
            var location = this.local$call.response.headers.get_61zpoe$(http.HttpHeaders.Location);
            var $receiver = new HttpRequestBuilder();
            takeFrom_2($receiver, this.local$origin.request);
            $receiver.url.parameters.clear();
            if (location != null) {
              takeFrom($receiver.url, location);
            }

            this.state_0 = 4;
            this.result_0 = this.local$$receiver.execute_s9rlw$($receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$call = this.result_0;
            if (!isRedirect(this.local$call.response.status)) {
              return this.local$call;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 3;
            continue;
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
  HttpRedirect$Feature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Feature',
    interfaces: [HttpClientFeature]
  };
  var HttpRedirect$Feature_instance = null;
  function HttpRedirect$Feature_getInstance() {
    if (HttpRedirect$Feature_instance === null) {
      new HttpRedirect$Feature();
    }
    return HttpRedirect$Feature_instance;
  }
  HttpRedirect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRedirect',
    interfaces: []
  };
  function isRedirect($receiver) {
    var tmp$;
    tmp$ = $receiver.value;
    if (tmp$ === HttpStatusCode.Companion.MovedPermanently.value || tmp$ === HttpStatusCode.Companion.Found.value || tmp$ === HttpStatusCode.Companion.TemporaryRedirect.value || tmp$ === HttpStatusCode.Companion.PermanentRedirect.value)
      return true;
    else
      return false;
  }
  function RedirectException(request, cause) {
    IllegalStateException_init_0(cause, this);
    this.request = request;
    this.name = 'RedirectException';
  }
  RedirectException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RedirectException',
    interfaces: [IllegalStateException]
  };
  function Sender() {
  }
  Sender.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Sender',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function HttpSend(maxSendCount) {
    HttpSend$Feature_getInstance();
    if (maxSendCount === void 0)
      maxSendCount = 20;
    this.maxSendCount = maxSendCount;
    this.interceptors_0 = ArrayList_init();
  }
  HttpSend.prototype.intercept_efqc3v$ = function (block) {
    this.interceptors_0.add_11rb$(block);
  };
  function HttpSend$Feature() {
    HttpSend$Feature_instance = this;
    this.key_x494tl$_0 = new AttributeKey('HttpSend');
  }
  Object.defineProperty(HttpSend$Feature.prototype, 'key', {
    get: function () {
      return this.key_x494tl$_0;
    }
  });
  HttpSend$Feature.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpSend();
    block($receiver);
    return $receiver;
  };
  function HttpSend$Feature$install$lambda(closure$feature_0, closure$scope_0) {
    return function ($receiver_0, content_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpSend$Feature$install$lambda(closure$feature_0, closure$scope_0, $receiver_0, content_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpSend$Feature$install$lambda(closure$feature_0, closure$scope_0, $receiver_0, content_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$feature = closure$feature_0;
    this.local$closure$scope = closure$scope_0;
    this.local$tmp$ = void 0;
    this.local$sender = void 0;
    this.local$currentCall = void 0;
    this.local$callChanged = void 0;
    this.local$transformed = void 0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
  }
  Coroutine$HttpSend$Feature$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpSend$Feature$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpSend$Feature$install$lambda.prototype.constructor = Coroutine$HttpSend$Feature$install$lambda;
  Coroutine$HttpSend$Feature$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!Kotlin.isType(this.local$content, OutgoingContent)) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver.context.body = this.local$content;
            this.local$sender = new HttpSend$DefaultSender(this.local$closure$feature.maxSendCount, this.local$closure$scope);
            this.state_0 = 3;
            this.result_0 = this.local$sender.execute_s9rlw$(this.local$$receiver.context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$currentCall = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.local$callChanged = false;
            this.local$tmp$ = this.local$closure$feature.interceptors_0.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 8;
              continue;
            }

            var interceptor = this.local$tmp$.next();
            this.state_0 = 6;
            this.result_0 = interceptor(this.local$sender, this.local$currentCall, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$transformed = this.result_0;
            if (this.local$transformed === this.local$currentCall) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 7:
            this.local$currentCall = this.local$transformed;
            this.local$callChanged = true;
            this.state_0 = 8;
            continue;
          case 8:
            if (!this.local$callChanged) {
              this.state_0 = 9;
              continue;
            }

            this.state_0 = 4;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$currentCall, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
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
  HttpSend$Feature.prototype.install_wojrb5$ = function (feature, scope) {
    scope.requestPipeline.intercept_o2xdxt$(HttpRequestPipeline$Phases_getInstance().Send, HttpSend$Feature$install$lambda(feature, scope));
  };
  HttpSend$Feature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Feature',
    interfaces: [HttpClientFeature]
  };
  var HttpSend$Feature_instance = null;
  function HttpSend$Feature_getInstance() {
    if (HttpSend$Feature_instance === null) {
      new HttpSend$Feature();
    }
    return HttpSend$Feature_instance;
  }
  function HttpSend$DefaultSender(maxSendCount, client) {
    this.maxSendCount_0 = maxSendCount;
    this.client_0 = client;
    this.sentCount_0 = 0;
  }
  HttpSend$DefaultSender.prototype.execute_s9rlw$ = function (requestBuilder_0, continuation_0, suspended) {
    var instance = new Coroutine$execute_s9rlw$_0(this, requestBuilder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$execute_s9rlw$_0($this, requestBuilder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$requestBuilder = requestBuilder_0;
  }
  Coroutine$execute_s9rlw$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_s9rlw$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_s9rlw$_0.prototype.constructor = Coroutine$execute_s9rlw$_0;
  Coroutine$execute_s9rlw$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.$this.sentCount_0 >= this.$this.maxSendCount_0)
              throw new SendCountExceedException('Max send count ' + this.$this.maxSendCount_0 + ' exceeded');
            this.$this.sentCount_0 = this.$this.sentCount_0 + 1 | 0;
            this.state_0 = 2;
            this.result_0 = this.$this.client_0.sendPipeline.execute_8pmvt0$(this.local$requestBuilder, this.local$requestBuilder.body, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Kotlin.isType(tmp$ = this.result_0, HttpClientCall) ? tmp$ : throwCCE();
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
  HttpSend$DefaultSender.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultSender',
    interfaces: [Sender]
  };
  HttpSend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpSend',
    interfaces: []
  };
  function SendCountExceedException(message) {
    IllegalStateException_init_0(message, this);
    this.name = 'SendCountExceedException';
  }
  SendCountExceedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SendCountExceedException',
    interfaces: [IllegalStateException]
  };
  function AcceptAllCookiesStorage() {
    this.container_0 = ArrayList_init();
    this.oldestCookie_0 = atomic_0(L0);
    this.mutex_0 = new Lock();
  }
  AcceptAllCookiesStorage.prototype.get_dxu3lv$ = function (requestUrl, continuation) {
    var $receiver = this.mutex_0;
    try {
      $receiver.lock();
      var date = GMTDate();
      if (date.timestamp.compareTo_11rb$(this.oldestCookie_0.kotlinx$atomicfu$value) < 0)
        this.cleanup_0(date.timestamp);
      var $receiver_0 = this.container_0;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (matches(element, requestUrl))
          destination.add_11rb$(element);
      }
      return destination;
    }
    finally {
      $receiver.unlock();
    }
  };
  function AcceptAllCookiesStorage$addCookie$lambda$lambda(closure$cookie, closure$requestUrl) {
    return function (it) {
      return equals(it.name, closure$cookie.name) && matches(it, closure$requestUrl);
    };
  }
  AcceptAllCookiesStorage.prototype.addCookie_c6y2p3$ = function (requestUrl, cookie, continuation) {
    var $receiver = this.mutex_0;
    try {
      $receiver.lock();
      do {
        removeAll(this.container_0, AcceptAllCookiesStorage$addCookie$lambda$lambda(cookie, requestUrl));
        this.container_0.add_11rb$(fillDefaults(cookie, requestUrl));
      }
       while (false && !isBlank(cookie.name));
    }
    finally {
      $receiver.unlock();
    }
    return Unit;
  };
  function AcceptAllCookiesStorage$cleanup$lambda(closure$timestamp) {
    return function (cookie) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = cookie.expires) != null ? tmp$.timestamp : null;
      if (tmp$_0 == null) {
        return false;
      }
      var expires = tmp$_0;
      return expires.compareTo_11rb$(closure$timestamp) < 0;
    };
  }
  AcceptAllCookiesStorage.prototype.cleanup_0 = function (timestamp) {
    removeAll(this.container_0, AcceptAllCookiesStorage$cleanup$lambda(timestamp));
    var $receiver = this.container_0;
    var tmp$;
    var accumulator = Long$Companion$MAX_VALUE;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var acc = accumulator;
      var tmp$_0, tmp$_1, tmp$_2;
      accumulator = (tmp$_2 = (tmp$_1 = (tmp$_0 = element.expires) != null ? tmp$_0.timestamp : null) != null ? acc.compareTo_11rb$(tmp$_1) <= 0 ? acc : tmp$_1 : null) != null ? tmp$_2 : acc;
    }
    var newOldest = accumulator;
    this.oldestCookie_0.kotlinx$atomicfu$value = newOldest;
  };
  AcceptAllCookiesStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AcceptAllCookiesStorage',
    interfaces: [CookiesStorage]
  };
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function ConstantCookiesStorage(cookies) {
    var destination = ArrayList_init_0(cookies.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== cookies.length; ++tmp$) {
      var item = cookies[tmp$];
      destination.add_11rb$(fillDefaults(item, (new URLBuilder()).build()));
    }
    this.storage_0 = toList(destination);
  }
  ConstantCookiesStorage.prototype.get_dxu3lv$ = function (requestUrl, continuation) {
    var $receiver = this.storage_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (matches(element, requestUrl))
        destination.add_11rb$(element);
    }
    return destination;
  };
  ConstantCookiesStorage.prototype.addCookie_c6y2p3$ = function (requestUrl, cookie, continuation) {
  };
  ConstantCookiesStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantCookiesStorage',
    interfaces: [CookiesStorage]
  };
  function CookiesStorage() {
  }
  CookiesStorage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CookiesStorage',
    interfaces: []
  };
  function addCookie($receiver_0, urlString_0, cookie_0, continuation_0, suspended) {
    var instance = new Coroutine$addCookie($receiver_0, urlString_0, cookie_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$addCookie($receiver_0, urlString_0, cookie_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$urlString = urlString_0;
    this.local$cookie = cookie_0;
  }
  Coroutine$addCookie.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addCookie.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addCookie.prototype.constructor = Coroutine$addCookie;
  Coroutine$addCookie.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.addCookie_c6y2p3$(Url(this.local$urlString), this.local$cookie, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  function matches($receiver, requestUrl) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    if ((tmp$_1 = (tmp$_0 = (tmp$ = $receiver.domain) != null ? tmp$.toLowerCase() : null) != null ? trimStart(tmp$_0, Kotlin.charArrayOf(46)) : null) != null)
      tmp$_2 = tmp$_1;
    else {
      throw IllegalStateException_init_0('Domain field should have the default value'.toString());
    }
    var domain = tmp$_2;
    var tmp$_3;
    var tmp$_4;
    if ((tmp$_3 = $receiver.path) != null)
      tmp$_4 = tmp$_3;
    else {
      throw IllegalStateException_init_0('Path field should have the default value'.toString());
    }
    var current = tmp$_4;
    var path = endsWith(current, 47) ? current : toString($receiver.path) + '/';
    var host = requestUrl.host.toLowerCase();
    var pathInRequest = requestUrl.encodedPath;
    var requestPath = endsWith(pathInRequest, 47) ? pathInRequest : pathInRequest + '/';
    if (!equals(host, domain) && (hostIsIp(host) || !endsWith_0(host, '.' + domain)))
      return false;
    if (!equals(path, '/') && !equals(requestPath, path) && !startsWith(requestPath, path))
      return false;
    if ($receiver.secure && !isSecure(requestUrl.protocol))
      return false;
    return true;
  }
  function fillDefaults($receiver, requestUrl) {
    var tmp$;
    var result = $receiver;
    if (((tmp$ = result.path) != null ? startsWith(tmp$, '/') : null) !== true) {
      result = result.copy_hcwwmo$(void 0, void 0, void 0, void 0, void 0, void 0, requestUrl.encodedPath);
    }
    var $receiver_0 = result.domain;
    if ($receiver_0 == null || isBlank($receiver_0)) {
      result = result.copy_hcwwmo$(void 0, void 0, void 0, void 0, void 0, requestUrl.host);
    }
    return result;
  }
  function HttpCookies(storage) {
    HttpCookies$Companion_getInstance();
    this.storage_0 = storage;
  }
  HttpCookies.prototype.get_dxu3lv$ = function (requestUrl, continuation) {
    return this.storage_0.get_dxu3lv$(requestUrl, continuation);
  };
  function HttpCookies$Config() {
    this.defaults_0 = ArrayList_init();
    this.storage = new AcceptAllCookiesStorage();
  }
  HttpCookies$Config.prototype.default_sjua2s$ = function (block) {
    this.defaults_0.add_11rb$(block);
  };
  HttpCookies$Config.prototype.build_8be2vx$ = function () {
    var tmp$;
    tmp$ = this.defaults_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(this.storage);
    }
    return new HttpCookies(this.storage);
  };
  HttpCookies$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function HttpCookies$Companion() {
    HttpCookies$Companion_instance = this;
    this.key_sy00j9$_0 = new AttributeKey('HttpCookies');
  }
  HttpCookies$Companion.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpCookies$Config();
    block($receiver);
    return $receiver.build_8be2vx$();
  };
  Object.defineProperty(HttpCookies$Companion.prototype, 'key', {
    get: function () {
      return this.key_sy00j9$_0;
    }
  });
  function HttpCookies$Companion$install$lambda(closure$feature_0) {
    return function ($receiver_0, it, continuation_0, suspended) {
      var instance = new Coroutine$HttpCookies$Companion$install$lambda(closure$feature_0, $receiver_0, it, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpCookies$Companion$install$lambda(closure$feature_0, $receiver_0, it, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$feature = closure$feature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$HttpCookies$Companion$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCookies$Companion$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCookies$Companion$install$lambda.prototype.constructor = Coroutine$HttpCookies$Companion$install$lambda;
  Coroutine$HttpCookies$Companion$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$feature.get_dxu3lv$(clone(this.local$$receiver.context.url).build(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var cookies = this.result_0;
            this.local$$receiver.context.headers.set_puj7f4$(http.HttpHeaders.Cookie, renderClientCookies(cookies));
            return Unit;
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
  function HttpCookies$Companion$install$lambda_0(closure$feature_0) {
    return function ($receiver_0, response_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCookies$Companion$install$lambda_0(closure$feature_0, $receiver_0, response_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpCookies$Companion$install$lambda_0(closure$feature_0, $receiver_0, response_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$feature = closure$feature_0;
    this.local$url = void 0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$response = response_0;
  }
  Coroutine$HttpCookies$Companion$install$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCookies$Companion$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCookies$Companion$install$lambda_0.prototype.constructor = Coroutine$HttpCookies$Companion$install$lambda_0;
  Coroutine$HttpCookies$Companion$install$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$url = this.local$$receiver.context.request.url;
            this.local$tmp$ = setCookie(this.local$response).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = this.local$closure$feature.storage_0.addCookie_c6y2p3$(this.local$url, element, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
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
  HttpCookies$Companion.prototype.install_wojrb5$ = function (feature, scope) {
    scope.sendPipeline.intercept_o2xdxt$(HttpSendPipeline$Phases_getInstance().State, HttpCookies$Companion$install$lambda(feature));
    scope.receivePipeline.intercept_o2xdxt$(HttpReceivePipeline$Phases_getInstance().State, HttpCookies$Companion$install$lambda_0(feature));
  };
  HttpCookies$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HttpClientFeature]
  };
  var HttpCookies$Companion_instance = null;
  function HttpCookies$Companion_getInstance() {
    if (HttpCookies$Companion_instance === null) {
      new HttpCookies$Companion();
    }
    return HttpCookies$Companion_instance;
  }
  HttpCookies.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpCookies',
    interfaces: []
  };
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  function renderClientCookies(cookies) {
    var $receiver = StringBuilder_init();
    var tmp$;
    tmp$ = cookies.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.append_gw00v9$(element.name);
      $receiver.append_s8itvh$(61);
      $receiver.append_gw00v9$(encodeURLParameter(element.value));
      $receiver.append_s8itvh$(59);
    }
    return $receiver.toString();
  }
  function cookies($receiver_0, url_0, continuation_0, suspended) {
    var instance = new Coroutine$cookies($receiver_0, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$cookies($receiver_0, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$url = url_0;
  }
  Coroutine$cookies.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cookies.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cookies.prototype.constructor = Coroutine$cookies;
  Coroutine$cookies.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$ = feature(this.local$$receiver, HttpCookies$Companion_getInstance())) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.get_dxu3lv$(this.local$url, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            return (tmp$_0 = this.result_0) != null ? tmp$_0 : emptyList();
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
  function cookies_0($receiver_0, urlString_0, continuation_0, suspended) {
    var instance = new Coroutine$cookies_0($receiver_0, urlString_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$cookies_0($receiver_0, urlString_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$urlString = urlString_0;
  }
  Coroutine$cookies_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cookies_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cookies_0.prototype.constructor = Coroutine$cookies_0;
  Coroutine$cookies_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$ = feature(this.local$$receiver, HttpCookies$Companion_getInstance())) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.get_dxu3lv$(Url(this.local$urlString), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            return (tmp$_0 = this.result_0) != null ? tmp$_0 : emptyList();
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
  function get_0($receiver, name) {
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.name, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  }
  function ClientUpgradeContent() {
    OutgoingContent$NoContent.call(this);
    this.content_1mwwgv$_0 = ByteChannel();
  }
  Object.defineProperty(ClientUpgradeContent.prototype, 'output', {
    get: function () {
      return this.content_1mwwgv$_0;
    }
  });
  ClientUpgradeContent.prototype.pipeTo_sfhht4$ = function (output_0, continuation_0, suspended) {
    var instance = new Coroutine$pipeTo_sfhht4$(this, output_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$pipeTo_sfhht4$($this, output_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$output = output_0;
  }
  Coroutine$pipeTo_sfhht4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pipeTo_sfhht4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pipeTo_sfhht4$.prototype.constructor = Coroutine$pipeTo_sfhht4$;
  Coroutine$pipeTo_sfhht4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = copyAndClose(this.$this.content_1mwwgv$_0, this.local$output, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  ClientUpgradeContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientUpgradeContent',
    interfaces: [OutgoingContent$NoContent]
  };
  function HttpRequest() {
  }
  Object.defineProperty(HttpRequest.prototype, 'coroutineContext', {
    get: function () {
      return this.call.coroutineContext;
    }
  });
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  Object.defineProperty(HttpRequest.prototype, 'executionContext', {
    get: function () {
      throw new NotImplementedError_init();
    }
  });
  HttpRequest.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpRequest',
    interfaces: [CoroutineScope, HttpMessage]
  };
  function DefaultHttpRequest(call, data) {
    this.call_bo7spw$_0 = call;
    this.method_c5x7eh$_0 = data.method;
    this.url_9j6cnp$_0 = data.url;
    var tmp$;
    this.content_jw4yw1$_0 = Kotlin.isType(tmp$ = data.body, OutgoingContent) ? tmp$ : throwCCE();
    this.headers_atwsac$_0 = data.headers;
    this.attributes_el41s3$_0 = data.attributes;
  }
  Object.defineProperty(DefaultHttpRequest.prototype, 'call', {
    get: function () {
      return this.call_bo7spw$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'coroutineContext', {
    get: function () {
      return this.call.coroutineContext;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'method', {
    get: function () {
      return this.method_c5x7eh$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'url', {
    get: function () {
      return this.url_9j6cnp$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'content', {
    get: function () {
      return this.content_jw4yw1$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'headers', {
    get: function () {
      return this.headers_atwsac$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'attributes', {
    get: function () {
      return this.attributes_el41s3$_0;
    }
  });
  DefaultHttpRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultHttpRequest',
    interfaces: [HttpRequest]
  };
  function HttpRequestBuilder() {
    HttpRequestBuilder$Companion_getInstance();
    this.url = new URLBuilder();
    this.method = HttpMethod.Companion.Get;
    this.headers_nor9ye$_0 = new HeadersBuilder();
    this.body = EmptyContent_getInstance();
    this.executionContext = CompletableDeferred();
    this.attributesBuilder_0 = HttpRequestBuilder$attributesBuilder$lambda;
  }
  Object.defineProperty(HttpRequestBuilder.prototype, 'headers', {
    get: function () {
      return this.headers_nor9ye$_0;
    }
  });
  HttpRequestBuilder.prototype.url_6yzzjr$ = function (block) {
    block(this.url, this.url);
  };
  HttpRequestBuilder.prototype.build = function () {
    var tmp$ = this.url.build();
    var tmp$_0 = this.method;
    var tmp$_1 = this.headers.build();
    var tmp$_2 = this.body;
    var tmp$_3 = this.executionContext;
    var $receiver = Attributes();
    this.attributesBuilder_0($receiver);
    return new HttpRequestData(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, $receiver);
  };
  function HttpRequestBuilder$setAttributes$lambda(closure$old, closure$block) {
    return function ($receiver) {
      closure$old($receiver);
      closure$block($receiver);
      return Unit;
    };
  }
  HttpRequestBuilder.prototype.setAttributes_yhh5ns$ = function (block) {
    var old = this.attributesBuilder_0;
    this.attributesBuilder_0 = HttpRequestBuilder$setAttributes$lambda(old, block);
  };
  HttpRequestBuilder.prototype.takeFrom_s9rlw$ = function (builder) {
    this.method = builder.method;
    this.body = builder.body;
    takeFrom_0(this.url, builder.url);
    appendAll(this.headers, builder.headers);
    this.attributesBuilder_0 = builder.attributesBuilder_0;
    return this;
  };
  function HttpRequestBuilder$Companion() {
    HttpRequestBuilder$Companion_instance = this;
  }
  HttpRequestBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpRequestBuilder$Companion_instance = null;
  function HttpRequestBuilder$Companion_getInstance() {
    if (HttpRequestBuilder$Companion_instance === null) {
      new HttpRequestBuilder$Companion();
    }
    return HttpRequestBuilder$Companion_instance;
  }
  function HttpRequestBuilder$attributesBuilder$lambda($receiver) {
    return Unit;
  }
  HttpRequestBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestBuilder',
    interfaces: [HttpMessageBuilder]
  };
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
    this.executionContext = executionContext;
    this.attributes = attributes;
  }
  HttpRequestData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestData',
    interfaces: []
  };
  function headers($receiver, block) {
    var $receiver_0 = $receiver.headers;
    block($receiver_0);
    return $receiver_0;
  }
  function takeFrom_2($receiver, request) {
    $receiver.method = request.method;
    $receiver.body = request.content;
    takeFrom_1($receiver.url, request.url);
    $receiver.headers.appendAll_hb0ubp$(request.headers);
    return $receiver;
  }
  function url($receiver, block) {
    block($receiver.url);
  }
  function takeFrom_3($receiver, request) {
    $receiver.method = request.method;
    $receiver.body = request.body;
    takeFrom_1($receiver.url, request.url);
    $receiver.headers.appendAll_hb0ubp$(request.headers);
    return $receiver;
  }
  function invoke($receiver, block) {
    var $receiver_0 = new HttpRequestBuilder();
    url($receiver_0, block);
    return $receiver_0;
  }
  function url$lambda($receiver) {
    return Unit;
  }
  function url_0($receiver, scheme, host, port, path, block) {
    if (scheme === void 0)
      scheme = 'http';
    if (host === void 0)
      host = 'localhost';
    if (port === void 0)
      port = 0;
    if (path === void 0)
      path = '/';
    if (block === void 0)
      block = url$lambda;
    var $receiver_0 = $receiver.url;
    $receiver_0.protocol = URLProtocol.Companion.createOrDefault_61zpoe$(scheme);
    $receiver_0.host = host;
    $receiver_0.port = port;
    $receiver_0.encodedPath = path;
    block($receiver.url);
  }
  function invoke$lambda($receiver) {
    return Unit;
  }
  function invoke_0($receiver, scheme, host, port, path, block) {
    if (scheme === void 0)
      scheme = 'http';
    if (host === void 0)
      host = 'localhost';
    if (port === void 0)
      port = 0;
    if (path === void 0)
      path = '/';
    if (block === void 0)
      block = invoke$lambda;
    var $receiver_0 = new HttpRequestBuilder();
    url_0($receiver_0, scheme, host, port, path, block);
    return $receiver_0;
  }
  function url_1($receiver, urlString) {
    takeFrom($receiver.url, urlString);
  }
  function HttpRequestPipeline() {
    HttpRequestPipeline$Phases_getInstance();
    Pipeline.call(this, [HttpRequestPipeline$Phases_getInstance().Before, HttpRequestPipeline$Phases_getInstance().State, HttpRequestPipeline$Phases_getInstance().Transform, HttpRequestPipeline$Phases_getInstance().Render, HttpRequestPipeline$Phases_getInstance().Send]);
  }
  function HttpRequestPipeline$Phases() {
    HttpRequestPipeline$Phases_instance = this;
    this.Before = new PipelinePhase('Before');
    this.State = new PipelinePhase('State');
    this.Transform = new PipelinePhase('Transform');
    this.Render = new PipelinePhase('Render');
    this.Send = new PipelinePhase('Send');
  }
  HttpRequestPipeline$Phases.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Phases',
    interfaces: []
  };
  var HttpRequestPipeline$Phases_instance = null;
  function HttpRequestPipeline$Phases_getInstance() {
    if (HttpRequestPipeline$Phases_instance === null) {
      new HttpRequestPipeline$Phases();
    }
    return HttpRequestPipeline$Phases_instance;
  }
  HttpRequestPipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestPipeline',
    interfaces: [Pipeline]
  };
  function HttpSendPipeline() {
    HttpSendPipeline$Phases_getInstance();
    Pipeline.call(this, [HttpSendPipeline$Phases_getInstance().Before, HttpSendPipeline$Phases_getInstance().State, HttpSendPipeline$Phases_getInstance().Engine]);
  }
  function HttpSendPipeline$Phases() {
    HttpSendPipeline$Phases_instance = this;
    this.Before = new PipelinePhase('Before');
    this.State = new PipelinePhase('State');
    this.Engine = new PipelinePhase('Engine');
  }
  HttpSendPipeline$Phases.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Phases',
    interfaces: []
  };
  var HttpSendPipeline$Phases_instance = null;
  function HttpSendPipeline$Phases_getInstance() {
    if (HttpSendPipeline$Phases_instance === null) {
      new HttpSendPipeline$Phases();
    }
    return HttpSendPipeline$Phases_instance;
  }
  HttpSendPipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpSendPipeline',
    interfaces: [Pipeline]
  };
  function request(T_0, isT, $receiver, builder, continuation, suspended) {
    var instance = new Coroutine$request(T_0, isT, $receiver, builder, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$request(T_0, isT, $receiver, builder, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$builder = builder;
  }
  Coroutine$request.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$request.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$request.prototype.constructor = Coroutine$request;
  Coroutine$request.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$builder === void 0)
              this.local$builder = new HttpRequestBuilder_init();
            this.state_0 = 2;
            this.result_0 = call(this.local$$receiver, this.local$builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.request_ixrg4t$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, builder, continuation) {
      if (builder === void 0)
        builder = new HttpRequestBuilder_init();
      Kotlin.suspendCall(call($receiver, builder, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function request_0(T_0, isT, $receiver, block, continuation, suspended) {
    var instance = new Coroutine$request_0(T_0, isT, $receiver, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$request_0(T_0, isT, $receiver, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$block = block;
  }
  Coroutine$request_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$request_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$request_0.prototype.constructor = Coroutine$request_0;
  Coroutine$request_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new HttpRequestBuilder_init();
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.request_g0tv8i$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function get_1(T_0, isT, $receiver, builder, continuation, suspended) {
    var instance = new Coroutine$get(T_0, isT, $receiver, builder, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$get(T_0, isT, $receiver, builder, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$builder = builder;
  }
  Coroutine$get.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get.prototype.constructor = Coroutine$get;
  Coroutine$get.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$builder.method = HttpMethod.Companion.Get;
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, this.local$builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.get_ixrg4t$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Get;
      Kotlin.suspendCall(call($receiver, builder, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function post(T_0, isT, $receiver, builder, continuation, suspended) {
    var instance = new Coroutine$post(T_0, isT, $receiver, builder, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$post(T_0, isT, $receiver, builder, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$builder = builder;
  }
  Coroutine$post.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$post.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$post.prototype.constructor = Coroutine$post;
  Coroutine$post.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$builder.method = HttpMethod.Companion.Post;
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, this.local$builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.post_ixrg4t$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Post;
      Kotlin.suspendCall(call($receiver, builder, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function put(T_0, isT, $receiver, builder, continuation, suspended) {
    var instance = new Coroutine$put(T_0, isT, $receiver, builder, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$put(T_0, isT, $receiver, builder, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$builder = builder;
  }
  Coroutine$put.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$put.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$put.prototype.constructor = Coroutine$put;
  Coroutine$put.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$builder.method = HttpMethod.Companion.Put;
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, this.local$builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.put_ixrg4t$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Put;
      Kotlin.suspendCall(call($receiver, builder, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function delete_0(T_0, isT, $receiver, builder, continuation, suspended) {
    var instance = new Coroutine$delete(T_0, isT, $receiver, builder, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$delete(T_0, isT, $receiver, builder, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$builder = builder;
  }
  Coroutine$delete.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete.prototype.constructor = Coroutine$delete;
  Coroutine$delete.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$builder.method = HttpMethod.Companion.Delete;
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, this.local$builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.delete_ixrg4t$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Delete;
      Kotlin.suspendCall(call($receiver, builder, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function options(T_0, isT, $receiver, builder, continuation, suspended) {
    var instance = new Coroutine$options(T_0, isT, $receiver, builder, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$options(T_0, isT, $receiver, builder, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$builder = builder;
  }
  Coroutine$options.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$options.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$options.prototype.constructor = Coroutine$options;
  Coroutine$options.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$builder.method = HttpMethod.Companion.Options;
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, this.local$builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.options_ixrg4t$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Options;
      Kotlin.suspendCall(call($receiver, builder, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function patch(T_0, isT, $receiver, builder, continuation, suspended) {
    var instance = new Coroutine$patch(T_0, isT, $receiver, builder, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$patch(T_0, isT, $receiver, builder, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$builder = builder;
  }
  Coroutine$patch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$patch.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$patch.prototype.constructor = Coroutine$patch;
  Coroutine$patch.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$builder.method = HttpMethod.Companion.Patch;
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, this.local$builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.patch_ixrg4t$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Patch;
      Kotlin.suspendCall(call($receiver, builder, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function head(T_0, isT, $receiver, builder, continuation, suspended) {
    var instance = new Coroutine$head(T_0, isT, $receiver, builder, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$head(T_0, isT, $receiver, builder, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$builder = builder;
  }
  Coroutine$head.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$head.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$head.prototype.constructor = Coroutine$head;
  Coroutine$head.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$builder.method = HttpMethod.Companion.Head;
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, this.local$builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.head_ixrg4t$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Head;
      Kotlin.suspendCall(call($receiver, builder, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function get_2(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation, suspended) {
    var instance = new Coroutine$get_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$get_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$body = body;
    this.local$block = block;
  }
  Coroutine$get_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_0.prototype.constructor = Coroutine$get_0;
  Coroutine$get_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 0;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$body === void 0)
              this.local$body = utils.EmptyContent;
            if (this.local$block === void 0)
              this.local$block = get$lambda;
            var $receiver = new HttpRequestBuilder();
            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            $receiver.method = HttpMethod.Companion.Get;
            $receiver.body = this.local$body;
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.get_xwttm9$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    function get$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = get$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Get;
      $receiver_1.body = body;
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function post_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation, suspended) {
    var instance = new Coroutine$post_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$post_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$body = body;
    this.local$block = block;
  }
  Coroutine$post_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$post_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$post_0.prototype.constructor = Coroutine$post_0;
  Coroutine$post_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 0;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$body === void 0)
              this.local$body = utils.EmptyContent;
            if (this.local$block === void 0)
              this.local$block = post$lambda;
            var $receiver = new HttpRequestBuilder();
            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            $receiver.method = HttpMethod.Companion.Post;
            $receiver.body = this.local$body;
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.post_xwttm9$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    function post$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = post$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = body;
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function put_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation, suspended) {
    var instance = new Coroutine$put_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$put_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$body = body;
    this.local$block = block;
  }
  Coroutine$put_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$put_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$put_0.prototype.constructor = Coroutine$put_0;
  Coroutine$put_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 0;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$body === void 0)
              this.local$body = utils.EmptyContent;
            if (this.local$block === void 0)
              this.local$block = put$lambda;
            var $receiver = new HttpRequestBuilder();
            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            $receiver.method = HttpMethod.Companion.Put;
            $receiver.body = this.local$body;
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.put_xwttm9$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    function put$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = put$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Put;
      $receiver_1.body = body;
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function delete_1(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation, suspended) {
    var instance = new Coroutine$delete_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$delete_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$body = body;
    this.local$block = block;
  }
  Coroutine$delete_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete_0.prototype.constructor = Coroutine$delete_0;
  Coroutine$delete_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 0;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$body === void 0)
              this.local$body = utils.EmptyContent;
            if (this.local$block === void 0)
              this.local$block = delete$lambda;
            var $receiver = new HttpRequestBuilder();
            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            $receiver.method = HttpMethod.Companion.Delete;
            $receiver.body = this.local$body;
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.delete_xwttm9$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    function delete$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = delete$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Delete;
      $receiver_1.body = body;
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function patch_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation, suspended) {
    var instance = new Coroutine$patch_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$patch_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$body = body;
    this.local$block = block;
  }
  Coroutine$patch_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$patch_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$patch_0.prototype.constructor = Coroutine$patch_0;
  Coroutine$patch_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 0;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$body === void 0)
              this.local$body = utils.EmptyContent;
            if (this.local$block === void 0)
              this.local$block = patch$lambda;
            var $receiver = new HttpRequestBuilder();
            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            $receiver.method = HttpMethod.Companion.Patch;
            $receiver.body = this.local$body;
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.patch_xwttm9$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    function patch$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = patch$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Patch;
      $receiver_1.body = body;
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function head_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation, suspended) {
    var instance = new Coroutine$head_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$head_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$body = body;
    this.local$block = block;
  }
  Coroutine$head_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$head_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$head_0.prototype.constructor = Coroutine$head_0;
  Coroutine$head_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 0;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$body === void 0)
              this.local$body = utils.EmptyContent;
            if (this.local$block === void 0)
              this.local$block = head$lambda;
            var $receiver = new HttpRequestBuilder();
            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            $receiver.method = HttpMethod.Companion.Head;
            $receiver.body = this.local$body;
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.head_xwttm9$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    function head$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = head$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Head;
      $receiver_1.body = body;
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function options_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation, suspended) {
    var instance = new Coroutine$options_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$options_0(T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$body = body;
    this.local$block = block;
  }
  Coroutine$options_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$options_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$options_0.prototype.constructor = Coroutine$options_0;
  Coroutine$options_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 0;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$body === void 0)
              this.local$body = utils.EmptyContent;
            if (this.local$block === void 0)
              this.local$block = options$lambda;
            var $receiver = new HttpRequestBuilder();
            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            $receiver.method = HttpMethod.Companion.Options;
            $receiver.body = this.local$body;
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.options_xwttm9$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var utils = _.io.ktor.client.utils;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    function options$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, body, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 0;
      if (path === void 0)
        path = '/';
      if (body === void 0)
        body = utils.EmptyContent;
      if (block === void 0)
        block = options$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, scheme, host, port, path);
      $receiver_1.method = HttpMethod.Companion.Options;
      $receiver_1.body = body;
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function request_1(block) {
    var $receiver = new HttpRequestBuilder();
    block($receiver);
    return $receiver;
  }
  function get_3(T_0, isT, $receiver, urlString, block, continuation, suspended) {
    var instance = new Coroutine$get_1(T_0, isT, $receiver, urlString, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$get_1(T_0, isT, $receiver, urlString, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$urlString = urlString;
    this.local$block = block;
  }
  Coroutine$get_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_1.prototype.constructor = Coroutine$get_1;
  Coroutine$get_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = get$lambda;
            var host;
            var body;
            host = 'localhost';
            body = package$utils.EmptyContent;
            var $receiver = new HttpRequestBuilder();
            url_0($receiver, 'http', host, 0, '/');
            $receiver.method = HttpMethod.Companion.Get;
            $receiver.body = body;
            takeFrom($receiver.url, this.local$urlString);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.get_hf8dw$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.takeFrom_jl1sg7$;
    function get$lambda($receiver) {
      return Unit;
    }
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, urlString, block, continuation) {
      if (block === void 0)
        block = get$lambda;
      var host;
      var body;
      host = 'localhost';
      body = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Get;
      $receiver_1.body = body;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function post_1(T_0, isT, $receiver, urlString, block, continuation, suspended) {
    var instance = new Coroutine$post_1(T_0, isT, $receiver, urlString, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$post_1(T_0, isT, $receiver, urlString, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$urlString = urlString;
    this.local$block = block;
  }
  Coroutine$post_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$post_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$post_1.prototype.constructor = Coroutine$post_1;
  Coroutine$post_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = post$lambda;
            var host;
            var body;
            host = 'localhost';
            body = package$utils.EmptyContent;
            var $receiver = new HttpRequestBuilder();
            url_0($receiver, 'http', host, 0, '/');
            $receiver.method = HttpMethod.Companion.Post;
            $receiver.body = body;
            takeFrom($receiver.url, this.local$urlString);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.post_hf8dw$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.takeFrom_jl1sg7$;
    function post$lambda($receiver) {
      return Unit;
    }
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, urlString, block, continuation) {
      if (block === void 0)
        block = post$lambda;
      var host;
      var body;
      host = 'localhost';
      body = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = body;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function put_1(T_0, isT, $receiver, urlString, block, continuation, suspended) {
    var instance = new Coroutine$put_1(T_0, isT, $receiver, urlString, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$put_1(T_0, isT, $receiver, urlString, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$urlString = urlString;
    this.local$block = block;
  }
  Coroutine$put_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$put_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$put_1.prototype.constructor = Coroutine$put_1;
  Coroutine$put_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = put$lambda;
            var host;
            var body;
            host = 'localhost';
            body = package$utils.EmptyContent;
            var $receiver = new HttpRequestBuilder();
            url_0($receiver, 'http', host, 0, '/');
            $receiver.method = HttpMethod.Companion.Put;
            $receiver.body = body;
            takeFrom($receiver.url, this.local$urlString);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.put_hf8dw$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.takeFrom_jl1sg7$;
    function put$lambda($receiver) {
      return Unit;
    }
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, urlString, block, continuation) {
      if (block === void 0)
        block = put$lambda;
      var host;
      var body;
      host = 'localhost';
      body = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Put;
      $receiver_1.body = body;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function delete_2(T_0, isT, $receiver, urlString, block, continuation, suspended) {
    var instance = new Coroutine$delete_1(T_0, isT, $receiver, urlString, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$delete_1(T_0, isT, $receiver, urlString, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$urlString = urlString;
    this.local$block = block;
  }
  Coroutine$delete_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete_1.prototype.constructor = Coroutine$delete_1;
  Coroutine$delete_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = delete$lambda;
            var host;
            var body;
            host = 'localhost';
            body = package$utils.EmptyContent;
            var $receiver = new HttpRequestBuilder();
            url_0($receiver, 'http', host, 0, '/');
            $receiver.method = HttpMethod.Companion.Delete;
            $receiver.body = body;
            takeFrom($receiver.url, this.local$urlString);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.delete_hf8dw$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.takeFrom_jl1sg7$;
    function delete$lambda($receiver) {
      return Unit;
    }
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, urlString, block, continuation) {
      if (block === void 0)
        block = delete$lambda;
      var host;
      var body;
      host = 'localhost';
      body = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Delete;
      $receiver_1.body = body;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function options_1(T_0, isT, $receiver, urlString, block, continuation, suspended) {
    var instance = new Coroutine$options_1(T_0, isT, $receiver, urlString, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$options_1(T_0, isT, $receiver, urlString, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$urlString = urlString;
    this.local$block = block;
  }
  Coroutine$options_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$options_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$options_1.prototype.constructor = Coroutine$options_1;
  Coroutine$options_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = options$lambda;
            var host;
            var body;
            host = 'localhost';
            body = package$utils.EmptyContent;
            var $receiver = new HttpRequestBuilder();
            url_0($receiver, 'http', host, 0, '/');
            $receiver.method = HttpMethod.Companion.Options;
            $receiver.body = body;
            takeFrom($receiver.url, this.local$urlString);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.options_hf8dw$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.takeFrom_jl1sg7$;
    function options$lambda($receiver) {
      return Unit;
    }
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, urlString, block, continuation) {
      if (block === void 0)
        block = options$lambda;
      var host;
      var body;
      host = 'localhost';
      body = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Options;
      $receiver_1.body = body;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function patch_1(T_0, isT, $receiver, urlString, block, continuation, suspended) {
    var instance = new Coroutine$patch_1(T_0, isT, $receiver, urlString, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$patch_1(T_0, isT, $receiver, urlString, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$urlString = urlString;
    this.local$block = block;
  }
  Coroutine$patch_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$patch_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$patch_1.prototype.constructor = Coroutine$patch_1;
  Coroutine$patch_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = patch$lambda;
            var host;
            var body;
            host = 'localhost';
            body = package$utils.EmptyContent;
            var $receiver = new HttpRequestBuilder();
            url_0($receiver, 'http', host, 0, '/');
            $receiver.method = HttpMethod.Companion.Patch;
            $receiver.body = body;
            takeFrom($receiver.url, this.local$urlString);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.patch_hf8dw$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.takeFrom_jl1sg7$;
    function patch$lambda($receiver) {
      return Unit;
    }
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, urlString, block, continuation) {
      if (block === void 0)
        block = patch$lambda;
      var host;
      var body;
      host = 'localhost';
      body = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Patch;
      $receiver_1.body = body;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function head_1(T_0, isT, $receiver, urlString, block, continuation, suspended) {
    var instance = new Coroutine$head_1(T_0, isT, $receiver, urlString, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$head_1(T_0, isT, $receiver, urlString, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$urlString = urlString;
    this.local$block = block;
  }
  Coroutine$head_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$head_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$head_1.prototype.constructor = Coroutine$head_1;
  Coroutine$head_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = head$lambda;
            var host;
            var body;
            host = 'localhost';
            body = package$utils.EmptyContent;
            var $receiver = new HttpRequestBuilder();
            url_0($receiver, 'http', host, 0, '/');
            $receiver.method = HttpMethod.Companion.Head;
            $receiver.body = body;
            takeFrom($receiver.url, this.local$urlString);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.head_hf8dw$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.takeFrom_jl1sg7$;
    function head$lambda($receiver) {
      return Unit;
    }
    var utils = _.io.ktor.client.utils;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, urlString, block, continuation) {
      if (block === void 0)
        block = head$lambda;
      var host;
      var body;
      host = 'localhost';
      body = utils.EmptyContent;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, 'http', host, 0, '/');
      $receiver_1.method = HttpMethod.Companion.Head;
      $receiver_1.body = body;
      takeFrom($receiver_1.url, urlString);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  var encodeToByteArray = $module$kotlinx_io_js.kotlinx.io.charsets.encodeToByteArray_478lbv$;
  function FormDataContent(formData) {
    OutgoingContent$ByteArrayContent.call(this);
    this.formData = formData;
    var $receiver = formUrlEncode(this.formData);
    this.content_0 = encodeToByteArray(charsets.Charsets.UTF_8.newEncoder(), $receiver, 0, $receiver.length);
    this.contentLength_f2tvnf$_0 = Kotlin.Long.fromInt(this.content_0.length);
    this.contentType_gyve29$_0 = withCharset(ContentType.Application.FormUrlEncoded, charsets.Charsets.UTF_8);
  }
  Object.defineProperty(FormDataContent.prototype, 'contentLength', {
    get: function () {
      return this.contentLength_f2tvnf$_0;
    }
  });
  Object.defineProperty(FormDataContent.prototype, 'contentType', {
    get: function () {
      return this.contentType_gyve29$_0;
    }
  });
  FormDataContent.prototype.bytes = function () {
    return this.content_0;
  };
  FormDataContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormDataContent',
    interfaces: [OutgoingContent$ByteArrayContent]
  };
  function MultiPartFormDataContent(parts) {
    OutgoingContent$WriteChannelContent.call(this);
    this.parts_0 = parts;
    this.boundary_0 = generateBoundary();
    this.contentType_azd2en$_0 = ContentType.MultiPart.FormData.withParameter_puj7f4$('boundary', this.boundary_0);
  }
  Object.defineProperty(MultiPartFormDataContent.prototype, 'contentType', {
    get: function () {
      return this.contentType_azd2en$_0;
    }
  });
  MultiPartFormDataContent.prototype.writeTo_sfhht4$ = function (channel_0, continuation_0, suspended) {
    var instance = new Coroutine$writeTo_sfhht4$(this, channel_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$writeTo_sfhht4$($this, channel_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 21;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$element = void 0;
    this.local$tmp$_0 = void 0;
    this.local$channel = channel_0;
  }
  Coroutine$writeTo_sfhht4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeTo_sfhht4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo_sfhht4$.prototype.constructor = Coroutine$writeTo_sfhht4$;
  Coroutine$writeTo_sfhht4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 1;
            if (this.$this.parts_0.isEmpty()) {
              this.exceptionState_0 = 21;
              this.finallyPath_0 = [2];
              this.state_0 = 20;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            this.finallyPath_0 = [21];
            this.exceptionState_0 = 20;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$channel.close_dbl4no$(cause);
            }
             else
              throw cause;
            this.finallyPath_0 = [22];
            this.state_0 = 20;
            continue;
          case 2:
            return;
          case 3:
            this.state_0 = 4;
            this.result_0 = writeStringUtf8(this.local$channel, '\r\n\r\n', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$ = this.$this.parts_0.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 18;
              continue;
            }

            this.local$element = this.local$tmp$.next();
            this.state_0 = 6;
            this.result_0 = writeStringUtf8(this.local$channel, '--' + this.$this.boundary_0 + '\r' + '\n', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_0 = this.local$element.headers.entries().iterator();
            this.state_0 = 7;
            continue;
          case 7:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 9;
              continue;
            }

            var tmp$ = this.local$tmp$_0.next();
            var key = tmp$.key;
            var values = tmp$.value;
            this.state_0 = 8;
            this.result_0 = writeStringUtf8(this.local$channel, key + ': ' + joinToString(values, ';') + '\r' + '\n', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 7;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = writeStringUtf8(this.local$channel, '\r\n', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            if (Kotlin.isType(this.local$element, PartData$FileItem)) {
              this.state_0 = 15;
              this.result_0 = writeFully(this.local$channel, readBytes_0(this.local$element.provider()), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(this.local$element, PartData$FormItem)) {
                this.state_0 = 13;
                this.result_0 = writeStringUtf8(this.local$channel, this.local$element.value, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                if (Kotlin.isType(this.local$element, PartData$BinaryItem)) {
                  this.state_0 = 11;
                  this.result_0 = writeFully(this.local$channel, readBytes_0(this.local$element.provider()), this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
                 else {
                  this.state_0 = 12;
                  continue;
                }
              }
            }

          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.state_0 = 14;
            continue;
          case 13:
            this.state_0 = 14;
            continue;
          case 14:
            this.state_0 = 16;
            continue;
          case 15:
            this.state_0 = 16;
            continue;
          case 16:
            this.state_0 = 17;
            this.result_0 = writeStringUtf8(this.local$channel, '\r\n', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            this.state_0 = 5;
            continue;
          case 18:
            this.state_0 = 19;
            this.result_0 = writeStringUtf8(this.local$channel, '--' + this.$this.boundary_0 + '--' + '\r' + '\n' + '\r' + '\n', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            this.exceptionState_0 = 21;
            this.finallyPath_0 = [22];
            this.state_0 = 20;
            continue;
          case 20:
            var tmp$_0;
            tmp$_0 = this.$this.parts_0.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              element.dispose();
            }

            close(this.local$channel);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 21:
            throw this.exception_0;
          case 22:
            return;
          default:this.state_0 = 21;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 21) {
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
  MultiPartFormDataContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiPartFormDataContent',
    interfaces: [OutgoingContent$WriteChannelContent]
  };
  function generateBoundary() {
    var $receiver = StringBuilder_init();
    for (var index = 0; index < 32; index++) {
      $receiver.append_gw00v9$(toString_0(Random.Companion.nextInt(), 16));
    }
    return take($receiver.toString(), 70);
  }
  function submitForm(T_0, isT, $receiver, formData, encodeInQuery, block, continuation, suspended) {
    var instance = new Coroutine$submitForm(T_0, isT, $receiver, formData, encodeInQuery, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$submitForm(T_0, isT, $receiver, formData, encodeInQuery, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$formData = formData;
    this.local$encodeInQuery = encodeInQuery;
    this.local$block = block;
  }
  Coroutine$submitForm.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$submitForm.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$submitForm.prototype.constructor = Coroutine$submitForm;
  Coroutine$submitForm.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formData === void 0)
              this.local$formData = Parameters.Companion.Empty;
            if (this.local$encodeInQuery === void 0)
              this.local$encodeInQuery = false;
            if (this.local$block === void 0)
              this.local$block = submitForm$lambda;
            var $receiver = new HttpRequestBuilder();
            if (this.local$encodeInQuery) {
              $receiver.method = HttpMethod.Companion.Get;
              $receiver.url.parameters.appendAll_hb0ubp$(this.local$formData);
            }
             else {
              $receiver.method = HttpMethod.Companion.Post;
              $receiver.body = new FormDataContent_init(this.local$formData);
            }

            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.forms.submitForm_k24olv$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Parameters = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.Parameters;
    var Unit = Kotlin.kotlin.Unit;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var FormDataContent_init = _.io.ktor.client.request.forms.FormDataContent;
    function submitForm$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, formData, encodeInQuery, block, continuation) {
      if (formData === void 0)
        formData = Parameters.Companion.Empty;
      if (encodeInQuery === void 0)
        encodeInQuery = false;
      if (block === void 0)
        block = submitForm$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      if (encodeInQuery) {
        $receiver_1.method = HttpMethod.Companion.Get;
        $receiver_1.url.parameters.appendAll_hb0ubp$(formData);
      }
       else {
        $receiver_1.method = HttpMethod.Companion.Post;
        $receiver_1.body = new FormDataContent_init(formData);
      }
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function submitFormWithBinaryData(T_0, isT, $receiver, formData, block, continuation, suspended) {
    var instance = new Coroutine$submitFormWithBinaryData(T_0, isT, $receiver, formData, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$submitFormWithBinaryData(T_0, isT, $receiver, formData, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$formData = formData;
    this.local$block = block;
  }
  Coroutine$submitFormWithBinaryData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$submitFormWithBinaryData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$submitFormWithBinaryData.prototype.constructor = Coroutine$submitFormWithBinaryData;
  Coroutine$submitFormWithBinaryData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$block === void 0)
              this.local$block = submitFormWithBinaryData$lambda;
            var $receiver = new HttpRequestBuilder();
            $receiver.method = HttpMethod.Companion.Post;
            $receiver.body = new MultiPartFormDataContent_init(this.local$formData);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.forms.submitFormWithBinaryData_k1tmp5$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    function submitFormWithBinaryData$lambda($receiver) {
      return Unit;
    }
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, formData, block, continuation) {
      if (block === void 0)
        block = submitFormWithBinaryData$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = new MultiPartFormDataContent_init(formData);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function submitForm_0(T_0, isT, $receiver, scheme, host, port, path, formData, encodeInQuery, block, continuation, suspended) {
    var instance = new Coroutine$submitForm_0(T_0, isT, $receiver, scheme, host, port, path, formData, encodeInQuery, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$submitForm_0(T_0, isT, $receiver, scheme, host, port, path, formData, encodeInQuery, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$formData = formData;
    this.local$encodeInQuery = encodeInQuery;
    this.local$block = block;
  }
  Coroutine$submitForm_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$submitForm_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$submitForm_0.prototype.constructor = Coroutine$submitForm_0;
  Coroutine$submitForm_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 80;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$formData === void 0)
              this.local$formData = Parameters.Companion.Empty;
            if (this.local$encodeInQuery === void 0)
              this.local$encodeInQuery = false;
            if (this.local$block === void 0)
              this.local$block = submitForm$lambda;
            var $receiver = new HttpRequestBuilder();
            if (this.local$encodeInQuery) {
              $receiver.method = HttpMethod.Companion.Get;
              $receiver.url.parameters.appendAll_hb0ubp$(this.local$formData);
            }
             else {
              $receiver.method = HttpMethod.Companion.Post;
              $receiver.body = new FormDataContent(this.local$formData);
            }

            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.forms.submitForm_ejo4ot$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Parameters = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.Parameters;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    function submitForm$lambda($receiver) {
      return Unit;
    }
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var FormDataContent_init = _.io.ktor.client.request.forms.FormDataContent;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, formData, encodeInQuery, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 80;
      if (path === void 0)
        path = '/';
      if (formData === void 0)
        formData = Parameters.Companion.Empty;
      if (encodeInQuery === void 0)
        encodeInQuery = false;
      if (block === void 0)
        block = submitForm$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      if (encodeInQuery) {
        $receiver_1.method = HttpMethod.Companion.Get;
        $receiver_1.url.parameters.appendAll_hb0ubp$(formData);
      }
       else {
        $receiver_1.method = HttpMethod.Companion.Post;
        $receiver_1.body = new FormDataContent_init(formData);
      }
      url($receiver_1, scheme, host, port, path);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function submitFormWithBinaryData_0(T_0, isT, $receiver, scheme, host, port, path, formData, block, continuation, suspended) {
    var instance = new Coroutine$submitFormWithBinaryData_0(T_0, isT, $receiver, scheme, host, port, path, formData, block, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$submitFormWithBinaryData_0(T_0, isT, $receiver, scheme, host, port, path, formData, block, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$isT = isT;
    this.local$$receiver = $receiver;
    this.local$scheme = scheme;
    this.local$host = host;
    this.local$port = port;
    this.local$path = path;
    this.local$formData = formData;
    this.local$block = block;
  }
  Coroutine$submitFormWithBinaryData_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$submitFormWithBinaryData_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$submitFormWithBinaryData_0.prototype.constructor = Coroutine$submitFormWithBinaryData_0;
  Coroutine$submitFormWithBinaryData_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$scheme === void 0)
              this.local$scheme = 'http';
            if (this.local$host === void 0)
              this.local$host = 'localhost';
            if (this.local$port === void 0)
              this.local$port = 80;
            if (this.local$path === void 0)
              this.local$path = '/';
            if (this.local$formData === void 0)
              this.local$formData = emptyList();
            if (this.local$block === void 0)
              this.local$block = submitFormWithBinaryData$lambda;
            var $receiver = new HttpRequestBuilder();
            $receiver.method = HttpMethod.Companion.Post;
            $receiver.body = new MultiPartFormDataContent(this.local$formData);
            url($receiver, this.local$scheme, this.local$host, this.local$port, this.local$path);
            this.local$block($receiver);
            this.state_0 = 2;
            this.result_0 = call_0(this.local$$receiver, $receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo(getKClass(this.local$T_0), package$call.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isT(tmp$ = this.result_0) ? tmp$ : throwCCE();
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
  defineInlineFunction('ktor-client-core-js.io.ktor.client.request.forms.submitFormWithBinaryData_vcnbbn$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_3rzbk2$;
    function submitFormWithBinaryData$lambda($receiver) {
      return Unit;
    }
    var HttpMethod = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var call = _.io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.io.ktor.client.call;
    var TypeInfo_init = _.io.ktor.client.call.TypeInfo;
    return function (T_0, isT, $receiver, scheme, host, port, path, formData, block, continuation) {
      if (scheme === void 0)
        scheme = 'http';
      if (host === void 0)
        host = 'localhost';
      if (port === void 0)
        port = 80;
      if (path === void 0)
        path = '/';
      if (formData === void 0)
        formData = emptyList();
      if (block === void 0)
        block = submitFormWithBinaryData$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      $receiver_1.body = new MultiPartFormDataContent_init(formData);
      url($receiver_1, scheme, host, port, path);
      block($receiver_1);
      Kotlin.suspendCall(call($receiver, $receiver_1, Kotlin.coroutineReceiver()));
      var tmp$;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(T_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isT(tmp$ = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$ : throwCCE(), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function FormPart(key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    this.key = key;
    this.value = value;
    this.headers = headers;
  }
  FormPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormPart',
    interfaces: []
  };
  FormPart.prototype.component1 = function () {
    return this.key;
  };
  FormPart.prototype.component2 = function () {
    return this.value;
  };
  FormPart.prototype.component3 = function () {
    return this.headers;
  };
  FormPart.prototype.copy_gtfma3$ = function (key, value, headers) {
    return new FormPart(key === void 0 ? this.key : key, value === void 0 ? this.value : value, headers === void 0 ? this.headers : headers);
  };
  FormPart.prototype.toString = function () {
    return 'FormPart(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + (', headers=' + Kotlin.toString(this.headers)) + ')';
  };
  FormPart.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.headers) | 0;
    return result;
  };
  FormPart.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.headers, other.headers)))));
  };
  function formData$lambda$lambda() {
    return Unit;
  }
  function formData$lambda$lambda_0() {
    return Unit;
  }
  var BytePacketBuilder = $module$kotlinx_io_js.kotlinx.io.core.BytePacketBuilder_za3lpa$;
  function formData$lambda$lambda_1(closure$value) {
    return function () {
      var buildPacket$result;
      var builder = BytePacketBuilder(0);
      try {
        writeFully_0(builder, closure$value);
        buildPacket$result = builder.build();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        }
         else
          throw t;
      }
      return buildPacket$result;
    };
  }
  function formData$lambda$lambda_2() {
    return Unit;
  }
  function formData$lambda$lambda_3(closure$value) {
    return function () {
      return closure$value;
    };
  }
  function formData$lambda$lambda_4() {
    return Unit;
  }
  function formData(values) {
    var result = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
      var element = values[tmp$];
      var key = element.component1()
      , value = element.component2()
      , headers = element.component3();
      var tmp$_0;
      var $receiver = new HeadersBuilder();
      $receiver.append_puj7f4$(http.HttpHeaders.ContentDisposition, 'form-data;name=' + key);
      $receiver.appendAll_hb0ubp$(headers);
      var partHeaders = $receiver.build();
      if (typeof value === 'string')
        tmp$_0 = new PartData$FormItem(value, formData$lambda$lambda, partHeaders);
      else if (Kotlin.isNumber(value))
        tmp$_0 = new PartData$FormItem(value.toString(), formData$lambda$lambda_0, partHeaders);
      else if (Kotlin.isByteArray(value))
        tmp$_0 = new PartData$BinaryItem(formData$lambda$lambda_1(value), formData$lambda$lambda_2, partHeaders);
      else if (Kotlin.isType(value, Input))
        tmp$_0 = new PartData$BinaryItem(formData$lambda$lambda_3(value), formData$lambda$lambda_4, partHeaders);
      else {
        throw IllegalStateException_init_0(('Unknown form content type: ' + value.toString()).toString());
      }
      var part = tmp$_0;
      result.add_11rb$(part);
    }
    return result;
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function formData_0(block) {
    var $receiver = new FormBuilder();
    block($receiver);
    return formData(copyToArray($receiver.build_8be2vx$()).slice());
  }
  function FormBuilder() {
    this.parts_0 = ArrayList_init();
  }
  FormBuilder.prototype.append_53xmxh$ = function (key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    var $receiver = this.parts_0;
    var element = new FormPart(key, value, headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.append_ith9wd$ = function (part) {
    this.parts_0.add_11rb$(part);
  };
  FormBuilder.prototype.append_30rl88$ = defineInlineFunction('ktor-client-core-js.io.ktor.client.request.forms.FormBuilder.append_30rl88$', wrapFunction(function () {
    var Headers = _.$$importsForInline$$['ktor-http-js'].io.ktor.http.Headers;
    var FormPart_init = _.io.ktor.client.request.forms.FormPart;
    var BytePacketBuilder = _.$$importsForInline$$['kotlinx-io-js'].kotlinx.io.core.BytePacketBuilder_za3lpa$;
    var Throwable = Error;
    return function (key, headers, block) {
      if (headers === void 0)
        headers = Headers.Companion.Empty;
      var buildPacket$result;
      var builder = BytePacketBuilder(0);
      try {
        block(builder);
        buildPacket$result = builder.build();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        }
         else
          throw t;
      }
      this.append_ith9wd$(new FormPart_init(key, buildPacket$result, headers));
    };
  }));
  FormBuilder.prototype.append_30ps0$ = function (key, filename, block) {
    var filenameHeader = headersOf(http.HttpHeaders.ContentDisposition, 'filename=' + filename);
    var buildPacket$result;
    var builder = BytePacketBuilder(0);
    try {
      block(builder);
      buildPacket$result = builder.build();
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      }
       else
        throw t;
    }
    this.append_ith9wd$(new FormPart(key, buildPacket$result, filenameHeader));
  };
  FormBuilder.prototype.build_8be2vx$ = function () {
    return this.parts_0;
  };
  FormBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormBuilder',
    interfaces: []
  };
  function get_host($receiver) {
    return $receiver.url.host;
  }
  function set_host($receiver, value) {
    $receiver.url.host = value;
  }
  function get_port($receiver) {
    return $receiver.url.port;
  }
  function set_port($receiver, value) {
    $receiver.url.port = value;
  }
  function header($receiver, key, value) {
    var tmp$;
    var tmp$_0;
    if (value != null) {
      $receiver.headers.append_puj7f4$(key, value.toString());
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    (tmp$ = tmp$_0) != null ? tmp$ : Unit;
  }
  function parameter($receiver, key, value) {
    var tmp$;
    var tmp$_0;
    if (value != null) {
      $receiver.url.parameters.append_puj7f4$(key, value.toString());
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    (tmp$ = tmp$_0) != null ? tmp$ : Unit;
  }
  function accept($receiver, contentType) {
    $receiver.headers.append_puj7f4$(http.HttpHeaders.Accept, contentType.toString());
  }
  function HttpResponse() {
  }
  Object.defineProperty(HttpResponse.prototype, 'executionContext', {
    get: function () {
      return ensureNotNull(this.coroutineContext.get_j3r2sn$(Job.Key));
    }
  });
  HttpResponse.prototype.close = function () {
    var tmp$;
    (Kotlin.isType(tmp$ = this.coroutineContext.get_j3r2sn$(Job.Key), CompletableDeferred_0) ? tmp$ : throwCCE()).complete_11rb$(Unit);
  };
  HttpResponse.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpResponse',
    interfaces: [Closeable, CoroutineScope, HttpMessage]
  };
  function readText_0($receiver_0, charset_0, continuation_0, suspended) {
    var instance = new Coroutine$readText($receiver_0, charset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readText($receiver_0, charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$charset = charset_0;
  }
  Coroutine$readText.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readText.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readText.prototype.constructor = Coroutine$readText;
  Coroutine$readText.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$charset === void 0)
              this.local$charset = null;
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = readRemaining_0(this.local$$receiver.content, Long$Companion$MAX_VALUE, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var packet = this.result_0;
            var actualCharset = (tmp$_0 = (tmp$ = charset(this.local$$receiver)) != null ? tmp$ : this.local$charset) != null ? tmp$_0 : this.local$$receiver.call.responseConfig.defaultCharset;
            return readText(packet, actualCharset);
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
  function HttpResponseConfig() {
    var tmp$;
    try {
      tmp$ = Charset.Companion.forName_61zpoe$('ISO_8859_1');
    }
     catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        tmp$ = charsets.Charsets.UTF_8;
      }
       else
        throw _;
    }
    this.defaultCharset = tmp$;
  }
  HttpResponseConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponseConfig',
    interfaces: []
  };
  function HttpResponsePipeline() {
    HttpResponsePipeline$Phases_getInstance();
    Pipeline.call(this, [HttpResponsePipeline$Phases_getInstance().Receive, HttpResponsePipeline$Phases_getInstance().Parse, HttpResponsePipeline$Phases_getInstance().Transform, HttpResponsePipeline$Phases_getInstance().State, HttpResponsePipeline$Phases_getInstance().After]);
  }
  function HttpResponsePipeline$Phases() {
    HttpResponsePipeline$Phases_instance = this;
    this.Receive = new PipelinePhase('Receive');
    this.Parse = new PipelinePhase('Parse');
    this.Transform = new PipelinePhase('Transform');
    this.State = new PipelinePhase('State');
    this.After = new PipelinePhase('After');
  }
  HttpResponsePipeline$Phases.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Phases',
    interfaces: []
  };
  var HttpResponsePipeline$Phases_instance = null;
  function HttpResponsePipeline$Phases_getInstance() {
    if (HttpResponsePipeline$Phases_instance === null) {
      new HttpResponsePipeline$Phases();
    }
    return HttpResponsePipeline$Phases_instance;
  }
  HttpResponsePipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponsePipeline',
    interfaces: [Pipeline]
  };
  function HttpReceivePipeline() {
    HttpReceivePipeline$Phases_getInstance();
    Pipeline.call(this, [HttpReceivePipeline$Phases_getInstance().Before, HttpReceivePipeline$Phases_getInstance().State, HttpReceivePipeline$Phases_getInstance().After]);
  }
  function HttpReceivePipeline$Phases() {
    HttpReceivePipeline$Phases_instance = this;
    this.Before = new PipelinePhase('Response');
    this.State = new PipelinePhase('State');
    this.After = new PipelinePhase('After');
  }
  HttpReceivePipeline$Phases.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Phases',
    interfaces: []
  };
  var HttpReceivePipeline$Phases_instance = null;
  function HttpReceivePipeline$Phases_getInstance() {
    if (HttpReceivePipeline$Phases_instance === null) {
      new HttpReceivePipeline$Phases();
    }
    return HttpReceivePipeline$Phases_instance;
  }
  HttpReceivePipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpReceivePipeline',
    interfaces: [Pipeline]
  };
  function HttpResponseContainer(expectedType, response) {
    this.expectedType = expectedType;
    this.response = response;
  }
  HttpResponseContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponseContainer',
    interfaces: []
  };
  HttpResponseContainer.prototype.component1 = function () {
    return this.expectedType;
  };
  HttpResponseContainer.prototype.component2 = function () {
    return this.response;
  };
  HttpResponseContainer.prototype.copy_ju9ok$ = function (expectedType, response) {
    return new HttpResponseContainer(expectedType === void 0 ? this.expectedType : expectedType, response === void 0 ? this.response : response);
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + Kotlin.toString(this.expectedType) + (', response=' + Kotlin.toString(this.response)) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expectedType) | 0;
    result = result * 31 + Kotlin.hashCode(this.response) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expectedType, other.expectedType) && Kotlin.equals(this.response, other.response)))));
  };
  function readBytes_1($receiver_0, count_0, continuation_0, suspended) {
    var instance = new Coroutine$readBytes($receiver_0, count_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBytes($receiver_0, count_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = $receiver_0;
    this.local$count = count_0;
  }
  Coroutine$readBytes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBytes.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBytes.prototype.constructor = Coroutine$readBytes;
  Coroutine$readBytes.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = new Int8Array(this.local$count);
            this.state_0 = 2;
            this.result_0 = readFully(this.local$$receiver_0.content, this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver;
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
  function readBytes_2($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readBytes_0($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBytes_0($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readBytes_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBytes_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBytes_0.prototype.constructor = Coroutine$readBytes_0;
  Coroutine$readBytes_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readRemaining_0(this.local$$receiver.content, Long$Companion$MAX_VALUE, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return readBytes(this.result_0);
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
  function discardRemaining($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$discardRemaining($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$discardRemaining($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$discardRemaining.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$discardRemaining.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$discardRemaining.prototype.constructor = Coroutine$discardRemaining;
  Coroutine$discardRemaining.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = discard(this.local$$receiver.content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  var DEFAULT_HTTP_POOL_SIZE;
  var DEFAULT_HTTP_BUFFER_SIZE;
  function EmptyContent() {
    EmptyContent_instance = this;
    OutgoingContent$NoContent.call(this);
  }
  EmptyContent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyContent',
    interfaces: [OutgoingContent$NoContent]
  };
  var EmptyContent_instance = null;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance === null) {
      new EmptyContent();
    }
    return EmptyContent_instance;
  }
  function wrapHeaders$ObjectLiteral(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$NoContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'contentLength', {
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'contentType', {
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'status', {
    get: function () {
      return this.this$wrapHeaders.status;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'headers', {
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$NoContent]
  };
  function wrapHeaders$ObjectLiteral_0(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ReadChannelContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'contentLength', {
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'contentType', {
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'status', {
    get: function () {
      return this.this$wrapHeaders.status;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'headers', {
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral_0.prototype.readFrom = function () {
    return this.this$wrapHeaders.readFrom();
  };
  wrapHeaders$ObjectLiteral_0.prototype.readFrom_6z6t3e$ = function (range) {
    return this.this$wrapHeaders.readFrom_6z6t3e$(range);
  };
  wrapHeaders$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ReadChannelContent]
  };
  function wrapHeaders$ObjectLiteral_1(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$WriteChannelContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'contentLength', {
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'contentType', {
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'status', {
    get: function () {
      return this.this$wrapHeaders.status;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'headers', {
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral_1.prototype.writeTo_sfhht4$ = function (channel, continuation) {
    return this.this$wrapHeaders.writeTo_sfhht4$(channel, continuation);
  };
  wrapHeaders$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$WriteChannelContent]
  };
  function wrapHeaders$ObjectLiteral_2(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ByteArrayContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'contentLength', {
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'contentType', {
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'status', {
    get: function () {
      return this.this$wrapHeaders.status;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'headers', {
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral_2.prototype.bytes = function () {
    return this.this$wrapHeaders.bytes();
  };
  wrapHeaders$ObjectLiteral_2.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ByteArrayContent]
  };
  function wrapHeaders$ObjectLiteral_3(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ProtocolUpgrade.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'contentLength', {
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'contentType', {
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'headers', {
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral_3.prototype.upgrade_jtv4ff$ = function (input, output, engineContext, userContext, continuation) {
    return this.this$wrapHeaders.upgrade_jtv4ff$(input, output, engineContext, userContext, continuation);
  };
  wrapHeaders$ObjectLiteral_3.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ProtocolUpgrade]
  };
  function wrapHeaders($receiver, block) {
    if (Kotlin.isType($receiver, OutgoingContent$NoContent))
      return new wrapHeaders$ObjectLiteral($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ReadChannelContent))
      return new wrapHeaders$ObjectLiteral_0($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$WriteChannelContent))
      return new wrapHeaders$ObjectLiteral_1($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ByteArrayContent))
      return new wrapHeaders$ObjectLiteral_2($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ProtocolUpgrade))
      return new wrapHeaders$ObjectLiteral_3($receiver, block);
    else
      return Kotlin.noWhenBranchMatched();
  }
  function CacheControl() {
    CacheControl_instance = this;
    this.MAX_AGE = 'max-age';
    this.MIN_FRESH = 'min-fresh';
    this.ONLY_IF_CACHED = 'only-if-cached';
    this.MAX_STALE = 'max-stale';
    this.NO_CACHE = 'no-cache';
    this.NO_STORE = 'no-store';
    this.NO_TRANSFORM = 'no-transform';
    this.MUST_REVALIDATE = 'must-revalidate';
    this.PUBLIC = 'private';
    this.PRIVATE = 'private';
    this.PROXY_REVALIDATE = 'proxy-revalidate';
    this.S_MAX_AGE = 's-maxage';
  }
  CacheControl.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CacheControl',
    interfaces: []
  };
  var CacheControl_instance = null;
  function CacheControl_getInstance() {
    if (CacheControl_instance === null) {
      new CacheControl();
    }
    return CacheControl_instance;
  }
  function buildHeaders$lambda($receiver) {
    return Unit;
  }
  function buildHeaders(block) {
    if (block === void 0)
      block = buildHeaders$lambda;
    var $receiver = new HeadersBuilder();
    block($receiver);
    return $receiver.build();
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  package$client.HttpClient_f0veat$ = HttpClient;
  var package$call = package$client.call || (package$client.call = {});
  package$call.Type = Type;
  Object.defineProperty(package$call, 'JsType', {
    get: JsType_getInstance
  });
  var package$engine = package$client.engine || (package$client.engine = {});
  var package$js = package$engine.js || (package$engine.js = {});
  Object.defineProperty(package$js, 'Js', {
    get: Js_getInstance
  });
  package$js.JsClient = JsClient;
  package$js.JsClientEngine = JsClientEngine;
  $$importsForInline$$['ktor-http-js'] = $module$ktor_http_js;
  package$js.JsHttpResponse = JsHttpResponse;
  package$js.toRaw_6y92vh$ = toRaw;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$js.fetch_k5w9m6$ = fetch;
  package$js.buildObject_ymnom6$ = buildObject;
  package$js.toByteChannel_fmru5z$ = toByteChannel;
  package$js.readChunk_pggmy1$ = readChunk;
  var package$features = package$client.features || (package$client.features = {});
  package$features.platformDefaultTransformers_h1fxjk$ = platformDefaultTransformers;
  var package$utils = package$client.utils || (package$client.utils = {});
  Object.defineProperty(package$utils, 'HTTP_CLIENT_THREAD_COUNT', {
    get: function () {
      return HTTP_CLIENT_THREAD_COUNT;
    }
  });
  Object.defineProperty(package$utils, 'HTTP_CLIENT_DEFAULT_DISPATCHER', {
    get: function () {
      return HTTP_CLIENT_DEFAULT_DISPATCHER;
    }
  });
  package$client.HttpClient_744i18$ = HttpClient_0;
  package$client.HttpClient_rh9o9d$ = HttpClient_1;
  package$client.HttpClient = HttpClient_2;
  package$client.HttpClientConfig = HttpClientConfig;
  package$call.HttpClientCall = HttpClientCall;
  package$call.HttpEngineCall = HttpEngineCall;
  package$call.call_htnejk$ = call;
  $$importsForInline$$['ktor-client-core-js'] = _;
  package$call.DoubleReceiveException = DoubleReceiveException;
  package$call.ReceivePipelineFail = ReceivePipelineFail;
  package$call.NoTransformationFound = NoTransformationFound;
  package$call.TypeInfo = TypeInfo;
  package$call.UnsupportedContentTypeException = UnsupportedContentTypeException;
  package$call.call_30bfl5$ = call_0;
  package$call.call_1t1q32$ = call_1;
  package$engine.HttpClientEngine = HttpClientEngine;
  package$engine.HttpClientEngineFactory = HttpClientEngineFactory;
  package$engine.config_qszf4x$ = config;
  package$engine.HttpClientEngineConfig = HttpClientEngineConfig;
  package$engine.mergeHeaders_kqv6tz$ = mergeHeaders;
  Object.defineProperty(DefaultRequest, 'Feature', {
    get: DefaultRequest$Feature_getInstance
  });
  package$features.DefaultRequest = DefaultRequest;
  package$features.defaultRequest_fxc3ki$ = defaultRequest;
  package$features.defaultTransformers_ejcypf$ = defaultTransformers;
  Object.defineProperty(ExpectSuccess, 'Companion', {
    get: ExpectSuccess$Companion_getInstance
  });
  package$features.ExpectSuccess = ExpectSuccess;
  package$features.BadResponseStatus = BadResponseStatus;
  Object.defineProperty(package$features, 'FEATURE_INSTALLED_LIST_8be2vx$', {
    get: function () {
      return FEATURE_INSTALLED_LIST;
    }
  });
  package$features.HttpClientFeature = HttpClientFeature;
  package$features.feature_ccg70z$ = feature;
  $$importsForInline$$['kotlinx-io-js'] = $module$kotlinx_io_js;
  HttpPlainText.Config = HttpPlainText$Config;
  Object.defineProperty(HttpPlainText, 'Feature', {
    get: HttpPlainText$Feature_getInstance
  });
  package$features.HttpPlainText = HttpPlainText;
  Object.defineProperty(HttpRedirect, 'Feature', {
    get: HttpRedirect$Feature_getInstance
  });
  package$features.HttpRedirect = HttpRedirect;
  package$features.RedirectException = RedirectException;
  package$features.Sender = Sender;
  Object.defineProperty(HttpSend, 'Feature', {
    get: HttpSend$Feature_getInstance
  });
  package$features.HttpSend = HttpSend;
  package$features.SendCountExceedException = SendCountExceedException;
  $$importsForInline$$['ktor-utils-js'] = $module$ktor_utils_js;
  var package$cookies = package$features.cookies || (package$features.cookies = {});
  package$cookies.AcceptAllCookiesStorage = AcceptAllCookiesStorage;
  package$cookies.ConstantCookiesStorage = ConstantCookiesStorage;
  package$cookies.CookiesStorage = CookiesStorage;
  package$cookies.addCookie_g29ije$ = addCookie;
  package$cookies.matches_hkbsw1$ = matches;
  package$cookies.fillDefaults_hkbsw1$ = fillDefaults;
  HttpCookies.Config = HttpCookies$Config;
  Object.defineProperty(HttpCookies, 'Companion', {
    get: HttpCookies$Companion_getInstance
  });
  package$cookies.HttpCookies = HttpCookies;
  package$cookies.cookies_4av9u2$ = cookies;
  package$cookies.cookies_660qol$ = cookies_0;
  package$cookies.get_h6ajkg$ = get_0;
  var package$request = package$client.request || (package$client.request = {});
  package$request.ClientUpgradeContent = ClientUpgradeContent;
  package$request.HttpRequest = HttpRequest;
  package$request.DefaultHttpRequest = DefaultHttpRequest;
  Object.defineProperty(HttpRequestBuilder, 'Companion', {
    get: HttpRequestBuilder$Companion_getInstance
  });
  package$request.HttpRequestBuilder = HttpRequestBuilder;
  package$request.HttpRequestData = HttpRequestData;
  package$request.headers_nc42ot$ = headers;
  package$request.takeFrom_1c2elq$ = takeFrom_2;
  package$request.url_vbrh3o$ = url;
  package$request.takeFrom_kzlv8c$ = takeFrom_3;
  package$request.invoke_qdb19q$ = invoke;
  package$request.url_3rzbk2$ = url_0;
  package$request.invoke_jmxlhc$ = invoke_0;
  package$request.url_g8iu3v$ = url_1;
  Object.defineProperty(HttpRequestPipeline, 'Phases', {
    get: HttpRequestPipeline$Phases_getInstance
  });
  package$request.HttpRequestPipeline = HttpRequestPipeline;
  Object.defineProperty(HttpSendPipeline, 'Phases', {
    get: HttpSendPipeline$Phases_getInstance
  });
  package$request.HttpSendPipeline = HttpSendPipeline;
  package$request.request_2kdidn$ = request_1;
  var package$forms = package$request.forms || (package$request.forms = {});
  package$forms.FormDataContent = FormDataContent;
  package$forms.MultiPartFormDataContent = MultiPartFormDataContent;
  package$forms.FormPart = FormPart;
  package$forms.formData_l3ed5z$ = formData;
  package$forms.formData_hut2op$ = formData_0;
  package$forms.FormBuilder = FormBuilder;
  package$request.get_host_ocert9$ = get_host;
  package$request.set_host_g8iu3v$ = set_host;
  package$request.get_port_ocert9$ = get_port;
  package$request.set_port_7bct3p$ = set_port;
  package$request.header_xadl6p$ = header;
  package$request.parameter_xadl6p$ = parameter;
  package$request.accept_fohfhi$ = accept;
  var package$response = package$client.response || (package$client.response = {});
  package$response.HttpResponse = HttpResponse;
  package$response.readText_jsbrsb$ = readText_0;
  package$response.HttpResponseConfig = HttpResponseConfig;
  Object.defineProperty(HttpResponsePipeline, 'Phases', {
    get: HttpResponsePipeline$Phases_getInstance
  });
  package$response.HttpResponsePipeline = HttpResponsePipeline;
  Object.defineProperty(HttpReceivePipeline, 'Phases', {
    get: HttpReceivePipeline$Phases_getInstance
  });
  package$response.HttpReceivePipeline = HttpReceivePipeline;
  package$response.HttpResponseContainer = HttpResponseContainer;
  package$response.readBytes_jkyc6c$ = readBytes_1;
  package$response.readBytes_fcnupu$ = readBytes_2;
  package$response.discardRemaining_fcnupu$ = discardRemaining;
  Object.defineProperty(package$utils, 'DEFAULT_HTTP_POOL_SIZE', {
    get: function () {
      return DEFAULT_HTTP_POOL_SIZE;
    }
  });
  Object.defineProperty(package$utils, 'DEFAULT_HTTP_BUFFER_SIZE', {
    get: function () {
      return DEFAULT_HTTP_BUFFER_SIZE;
    }
  });
  Object.defineProperty(package$utils, 'EmptyContent', {
    get: EmptyContent_getInstance
  });
  package$utils.wrapHeaders_j1n6iz$ = wrapHeaders;
  Object.defineProperty(package$utils, 'CacheControl', {
    get: CacheControl_getInstance
  });
  package$utils.buildHeaders_g6xk4w$ = buildHeaders;
  Js.prototype.create_dxyxif$ = HttpClientEngineFactory.prototype.create_dxyxif$;
  Object.defineProperty(HttpClientEngine.prototype, 'isActive', Object.getOwnPropertyDescriptor(CoroutineScope.prototype, 'isActive'));
  Object.defineProperty(JsClientEngine.prototype, 'isActive', Object.getOwnPropertyDescriptor(HttpClientEngine.prototype, 'isActive'));
  Object.defineProperty(HttpResponse.prototype, 'isActive', Object.getOwnPropertyDescriptor(CoroutineScope.prototype, 'isActive'));
  Object.defineProperty(JsHttpResponse.prototype, 'executionContext', Object.getOwnPropertyDescriptor(HttpResponse.prototype, 'executionContext'));
  Object.defineProperty(JsHttpResponse.prototype, 'isActive', Object.getOwnPropertyDescriptor(HttpResponse.prototype, 'isActive'));
  Object.defineProperty(HttpClient_2.prototype, 'isActive', Object.getOwnPropertyDescriptor(CoroutineScope.prototype, 'isActive'));
  Object.defineProperty(HttpClientCall.prototype, 'isActive', Object.getOwnPropertyDescriptor(CoroutineScope.prototype, 'isActive'));
  config$ObjectLiteral.prototype.create_dxyxif$ = HttpClientEngineFactory.prototype.create_dxyxif$;
  DefaultRequest$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  ExpectSuccess$Companion.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpPlainText$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpRedirect$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpSend$Feature.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  HttpCookies$Companion.prototype.prepare_oh3mgy$ = HttpClientFeature.prototype.prepare_oh3mgy$;
  Object.defineProperty(HttpRequest.prototype, 'isActive', Object.getOwnPropertyDescriptor(CoroutineScope.prototype, 'isActive'));
  Object.defineProperty(DefaultHttpRequest.prototype, 'executionContext', Object.getOwnPropertyDescriptor(HttpRequest.prototype, 'executionContext'));
  Object.defineProperty(DefaultHttpRequest.prototype, 'isActive', Object.getOwnPropertyDescriptor(HttpRequest.prototype, 'isActive'));
  HTTP_CLIENT_THREAD_COUNT = 0;
  HTTP_CLIENT_DEFAULT_DISPATCHER = coroutines.Dispatchers.Default;
  FEATURE_INSTALLED_LIST = new AttributeKey('ApplicationFeatureRegistry');
  DEFAULT_HTTP_POOL_SIZE = 1000;
  DEFAULT_HTTP_BUFFER_SIZE = 4096;
  Kotlin.defineModule('ktor-client-core-js', _);
  return _;
}));

//# sourceMappingURL=ktor-client-core-js.js.map
