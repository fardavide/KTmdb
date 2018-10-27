(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-io-js', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-io-js'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-utils-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-utils-js'.");
    }
    if (typeof this['kotlinx-io-js'] === 'undefined') {
      throw new Error("Error loading module 'ktor-utils-js'. Its dependency 'kotlinx-io-js' was not found. Please, check whether 'kotlinx-io-js' is loaded prior to 'ktor-utils-js'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-utils-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-utils-js'.");
    }
    root['ktor-utils-js'] = factory(typeof this['ktor-utils-js'] === 'undefined' ? {} : this['ktor-utils-js'], kotlin, this['kotlinx-io-js'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$kotlinx_io_js, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Annotation = Kotlin.kotlin.Annotation;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toChar = Kotlin.toChar;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var unboxChar = Kotlin.unboxChar;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toByte = Kotlin.toByte;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var MutableMap$MutableEntry = Kotlin.kotlin.collections.MutableMap.MutableEntry;
  var toBoxedChar = Kotlin.toBoxedChar;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var Set = Kotlin.kotlin.collections.Set;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var L0 = Kotlin.Long.ZERO;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_2p08ub$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var single = Kotlin.kotlin.collections.single_7wnvza$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var get_sign = Kotlin.kotlin.math.get_sign_mts6qi$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var Throwable = Error;
  WeekDay.prototype = Object.create(Enum.prototype);
  WeekDay.prototype.constructor = WeekDay;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  Pipeline$PipelinePhaseRelation$After.prototype = Object.create(Pipeline$PipelinePhaseRelation.prototype);
  Pipeline$PipelinePhaseRelation$After.prototype.constructor = Pipeline$PipelinePhaseRelation$After;
  Pipeline$PipelinePhaseRelation$Before.prototype = Object.create(Pipeline$PipelinePhaseRelation.prototype);
  Pipeline$PipelinePhaseRelation$Before.prototype.constructor = Pipeline$PipelinePhaseRelation$Before;
  Pipeline$PipelinePhaseRelation$Last.prototype = Object.create(Pipeline$PipelinePhaseRelation.prototype);
  Pipeline$PipelinePhaseRelation$Last.prototype.constructor = Pipeline$PipelinePhaseRelation$Last;
  InvalidPhaseException.prototype = Object.create(Throwable.prototype);
  InvalidPhaseException.prototype.constructor = InvalidPhaseException;
  function Attributes() {
    return new AttributesJs();
  }
  function AttributesJs() {
    this.map_0 = LinkedHashMap_init_0();
  }
  AttributesJs.prototype.getOrNull_yzaw86$ = function (key) {
    var tmp$;
    return (tmp$ = this.map_0.get_11rb$(key)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  AttributesJs.prototype.contains_w48dwb$ = function (key) {
    return this.map_0.containsKey_11rb$(key);
  };
  AttributesJs.prototype.put_uuntuo$ = function (key, value) {
    this.map_0.put_xwzc9p$(key, value);
  };
  AttributesJs.prototype.remove_yzaw86$ = function (key) {
    this.map_0.remove_11rb$(key);
  };
  AttributesJs.prototype.computeIfAbsent_u4q9l2$ = function (key, block) {
    var tmp$;
    if ((tmp$ = this.map_0.get_11rb$(key)) != null) {
      var tmp$_0;
      return Kotlin.isType(tmp$_0 = tmp$, Any) ? tmp$_0 : throwCCE();
    }
    var $receiver = block();
    this.map_0.put_xwzc9p$(key, $receiver);
    return $receiver;
  };
  Object.defineProperty(AttributesJs.prototype, 'allKeys', {
    get: function () {
      return toList(this.map_0.keys);
    }
  });
  AttributesJs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributesJs',
    interfaces: [Attributes_0]
  };
  function unmodifiable($receiver) {
    return $receiver;
  }
  function Lock() {
  }
  Lock.prototype.lock = function () {
  };
  Lock.prototype.unlock = function () {
  };
  Lock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lock',
    interfaces: []
  };
  function GMTDate(timestamp) {
    if (timestamp === void 0)
      timestamp = null;
    var tmp$, tmp$_0;
    var date = (tmp$_0 = (tmp$ = timestamp != null ? timestamp.toNumber() : null) != null ? new Date(tmp$) : null) != null ? tmp$_0 : new Date();
    var dayOfWeek = WeekDay$Companion_getInstance().from_za3lpa$((date.getUTCDay() + 6 | 0) % 7);
    var month = Month$Companion_getInstance().from_za3lpa$(date.getUTCMonth());
    return new GMTDate_1(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), Kotlin.Long.fromNumber(date.getTime()));
  }
  function GMTDate_0(seconds, minutes, hours, dayOfMonth, month, year) {
    var timestamp = Kotlin.Long.fromNumber(Date.UTC(year, month.ordinal, dayOfMonth, hours, minutes, seconds));
    return GMTDate(timestamp);
  }
  function execute($receiver_0, context_0, continuation) {
    return $receiver_0.execute_8pmvt0$(context_0, Unit, continuation);
  }
  defineInlineFunction('ktor-utils-js.io.ktor.pipeline.execute_8vjjyp$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    return function ($receiver_0, context_0, continuation) {
      Kotlin.suspendCall($receiver_0.execute_8pmvt0$(context_0, Unit, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  var intercept = defineInlineFunction('ktor-utils-js.io.ktor.pipeline.intercept_hf28ui$', wrapFunction(function () {
    var PipelineContext = _.io.ktor.util.pipeline.PipelineContext;
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    function intercept$lambda(typeClosure$TSubject, isTSubject_0, closure$block_0) {
      return function ($receiver_0, subject_0, continuation_0, suspended) {
        var instance = new Coroutine$intercept$lambda(typeClosure$TSubject, isTSubject_0, closure$block_0, $receiver_0, subject_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$intercept$lambda(typeClosure$TSubject, isTSubject_0, closure$block_0, $receiver_0, subject_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$isTSubject = isTSubject_0;
      this.local$closure$block = closure$block_0;
      this.local$$receiver = $receiver_0;
      this.local$subject = subject_0;
    }
    Coroutine$intercept$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$intercept$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$intercept$lambda.prototype.constructor = Coroutine$intercept$lambda;
    Coroutine$intercept$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var tmp$, tmp$_0;
              if ((this.local$isTSubject(tmp$ = this.local$subject) ? tmp$ : null) == null) {
                return;
              }
               else {
                this.state_0 = 2;
                continue;
              }

            case 1:
              throw this.exception_0;
            case 2:
              var reinterpret = Kotlin.isType(tmp$_0 = this.local$$receiver, PipelineContext) ? tmp$_0 : null;
              if (reinterpret != null) {
                this.state_0 = 3;
                this.result_0 = this.local$closure$block(reinterpret, this.local$subject, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.result_0 = null;
                this.state_0 = 4;
                continue;
              }

            case 3:
              this.state_0 = 4;
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
    return function (TSubject_0, isTSubject, $receiver, phase, block) {
      $receiver.intercept_o2xdxt$(phase, intercept$lambda(TSubject_0, isTSubject, block));
    };
  }));
  function InternalAPI() {
  }
  InternalAPI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternalAPI',
    interfaces: [Annotation]
  };
  function KtorExperimentalAPI() {
  }
  KtorExperimentalAPI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KtorExperimentalAPI',
    interfaces: [Annotation]
  };
  function AttributeKey(name) {
    this.name = name;
  }
  AttributeKey.prototype.toString = function () {
    return this.name.length === 0 ? Any.prototype.toString.call(this) : 'AttributeKey: ' + this.name;
  };
  AttributeKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributeKey',
    interfaces: []
  };
  function Attributes_0() {
  }
  Attributes_0.prototype.get_yzaw86$ = function (key) {
    var tmp$;
    tmp$ = this.getOrNull_yzaw86$(key);
    if (tmp$ == null) {
      throw IllegalStateException_init('No instance for key ' + key);
    }
    return tmp$;
  };
  Attributes_0.prototype.take_yzaw86$ = function (key) {
    var $receiver = this.get_yzaw86$(key);
    this.remove_yzaw86$(key);
    return $receiver;
  };
  Attributes_0.prototype.takeOrNull_yzaw86$ = function (key) {
    var $receiver = this.getOrNull_yzaw86$(key);
    this.remove_yzaw86$(key);
    return $receiver;
  };
  Attributes_0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Attributes',
    interfaces: []
  };
  var BASE64_ALPHABET;
  var BASE64_MASK;
  var BASE64_PAD;
  var BASE64_INVERSE_ALPHABET;
  var BytePacketBuilder = $module$kotlinx_io_js.kotlinx.io.core.BytePacketBuilder_za3lpa$;
  function encodeBase64($receiver) {
    var buildPacket$result;
    var builder = BytePacketBuilder(0);
    try {
      builder.writeStringUtf8_61zpoe$($receiver);
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
    return encodeBase64_0(buildPacket$result);
  }
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  function encodeBase64_0($receiver) {
    var $receiver_0 = StringBuilder_init();
    var data = new Int8Array(3);
    while ($receiver.remaining.toNumber() > 0) {
      var read = $receiver.readAvailable_fqrh44$(data);
      clearFrom(data, read);
      var padSize = ((data.length - read | 0) * 8 | 0) / 6 | 0;
      var chunk = data[0] << 16 | data[1] << 8 | data[2];
      for (var index = data.length; index >= padSize; index--) {
        var char = chunk >> (6 * index | 0) & BASE64_MASK;
        $receiver_0.append_s8itvh$(toBase64(char));
      }
      for (var index_0 = 0; index_0 < padSize; index_0++) {
        $receiver_0.append_s8itvh$(BASE64_PAD);
      }
    }
    return $receiver_0.toString();
  }
  var get_lastIndex_0 = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  function decodeBase64($receiver) {
    var buildPacket$result;
    var builder = BytePacketBuilder(0);
    try {
      var dropLastWhile$result;
      dropLastWhile$break: do {
        for (var index = get_lastIndex_0($receiver); index >= 0; index--) {
          if (!(unboxChar(toBoxedChar($receiver.charCodeAt(index))) === BASE64_PAD)) {
            dropLastWhile$result = $receiver.substring(0, index + 1 | 0);
            break dropLastWhile$break;
          }
        }
        dropLastWhile$result = '';
      }
       while (false);
      builder.writeStringUtf8_61zpoe$(dropLastWhile$result);
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
    return decodeBase64_0(buildPacket$result);
  }
  function decodeBase64_0($receiver) {
    var $receiver_0 = StringBuilder_init();
    var tmp$, tmp$_0;
    var data = new Int8Array(4);
    while ($receiver.remaining.toNumber() > 0) {
      var read = $receiver.readAvailable_fqrh44$(data);
      var tmp$_1, tmp$_0_0;
      var index = 0;
      var accumulator = 0;
      for (tmp$_1 = 0; tmp$_1 !== data.length; ++tmp$_1) {
        var element = data[tmp$_1];
        var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
        accumulator = accumulator | fromBase64(element) << ((3 - index_0 | 0) * 6 | 0);
      }
      var chunk = accumulator;
      tmp$ = data.length - 2 | 0;
      tmp$_0 = data.length - read | 0;
      for (var index_1 = tmp$; index_1 >= tmp$_0; index_1--) {
        var origin = chunk >> (8 * index_1 | 0) & 255;
        $receiver_0.append_s8itvh$(toChar(origin));
      }
    }
    return $receiver_0.toString();
  }
  function clearFrom($receiver, from) {
    var tmp$;
    tmp$ = until(from, $receiver.length).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver[element] = 0;
    }
  }
  function toBase64($receiver) {
    return BASE64_ALPHABET.charCodeAt($receiver);
  }
  function fromBase64($receiver) {
    return toByte(toByte(BASE64_INVERSE_ALPHABET[$receiver & 255]) & BASE64_MASK);
  }
  function CaseInsensitiveMap() {
    this.delegate_0 = LinkedHashMap_init_0();
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'size', {
    get: function () {
      return this.delegate_0.size;
    }
  });
  CaseInsensitiveMap.prototype.containsKey_11rb$ = function (key) {
    return this.delegate_0.containsKey_11rb$(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.containsValue_11rc$ = function (value) {
    return this.delegate_0.containsValue_11rc$(value);
  };
  CaseInsensitiveMap.prototype.get_11rb$ = function (key) {
    return this.delegate_0.get_11rb$(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  CaseInsensitiveMap.prototype.clear = function () {
    this.delegate_0.clear();
  };
  CaseInsensitiveMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.delegate_0.put_xwzc9p$(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      this.put_xwzc9p$(key, value);
    }
  };
  CaseInsensitiveMap.prototype.remove_11rb$ = function (key) {
    return this.delegate_0.remove_11rb$(caseInsensitive(key));
  };
  function CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda($receiver) {
    return $receiver.content;
  }
  function CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda_0($receiver) {
    return caseInsensitive($receiver);
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'keys', {
    get: function () {
      return new DelegatingMutableSet(this.delegate_0.keys, CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda, CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda_0);
    }
  });
  function CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda($receiver) {
    return new Entry($receiver.key.content, $receiver.value);
  }
  function CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda_0($receiver) {
    return new Entry(caseInsensitive($receiver.key), $receiver.value);
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'entries', {
    get: function () {
      return new DelegatingMutableSet(this.delegate_0.entries, CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda, CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda_0);
    }
  });
  Object.defineProperty(CaseInsensitiveMap.prototype, 'values', {
    get: function () {
      return this.delegate_0.values;
    }
  });
  CaseInsensitiveMap.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, CaseInsensitiveMap))
      return false;
    return equals(other.delegate_0, this.delegate_0);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  CaseInsensitiveMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseInsensitiveMap',
    interfaces: [MutableMap]
  };
  function Entry(key, value) {
    this.key_3iz5qv$_0 = key;
    this.value_p1xw47$_0 = value;
  }
  Object.defineProperty(Entry.prototype, 'key', {
    get: function () {
      return this.key_3iz5qv$_0;
    }
  });
  Object.defineProperty(Entry.prototype, 'value', {
    get: function () {
      return this.value_p1xw47$_0;
    },
    set: function (value) {
      this.value_p1xw47$_0 = value;
    }
  });
  Entry.prototype.setValue_11rc$ = function (newValue) {
    this.value = newValue;
    return this.value;
  };
  Entry.prototype.hashCode = function () {
    return 527 + hashCode(ensureNotNull(this.key)) + hashCode(ensureNotNull(this.value)) | 0;
  };
  Entry.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, Map$Entry))
      return false;
    return equals(other.key, this.key) && equals(other.value, this.value);
  };
  Entry.prototype.toString = function () {
    return this.key.toString() + '=' + this.value;
  };
  Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: [MutableMap$MutableEntry]
  };
  function isLowerCase($receiver) {
    return unboxChar(String.fromCharCode($receiver).toLowerCase().charCodeAt(0)) === $receiver;
  }
  var charArray = Kotlin.charArray;
  function toCharArray($receiver) {
    var tmp$;
    var array = charArray($receiver.length, null);
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var value = unboxChar(toBoxedChar($receiver.charCodeAt(i)));
      array[i] = value;
    }
    return array;
  }
  var forEach = defineInlineFunction('ktor-utils-js.io.ktor.util.forEach_um81l4$', wrapFunction(function () {
    return function ($receiver, body) {
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var key = element.key;
        var value = element.value;
        body(key, value);
      }
    };
  }));
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.delegate_0 = delegate;
    this.convertTo_0 = convertTo;
    this.convert_0 = convert;
    this.size_uukmxx$_0 = this.delegate_0.size;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  DelegatingMutableSet.prototype.convert_9xhtru$ = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.convert_0(item));
    }
    return destination;
  };
  DelegatingMutableSet.prototype.convertTo_9xhuij$ = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.convertTo_0(item));
    }
    return destination;
  };
  Object.defineProperty(DelegatingMutableSet.prototype, 'size', {
    get: function () {
      return this.size_uukmxx$_0;
    }
  });
  DelegatingMutableSet.prototype.add_11rb$ = function (element) {
    return this.delegate_0.add_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.addAll_brywnq$ = function (elements) {
    return this.delegate_0.addAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.clear = function () {
    this.delegate_0.clear();
  };
  DelegatingMutableSet.prototype.remove_11rb$ = function (element) {
    return this.delegate_0.remove_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.removeAll_brywnq$ = function (elements) {
    return this.delegate_0.removeAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.retainAll_brywnq$ = function (elements) {
    return this.delegate_0.retainAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.contains_11rb$ = function (element) {
    return this.delegate_0.contains_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.containsAll_brywnq$ = function (elements) {
    return this.delegate_0.containsAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  function DelegatingMutableSet$iterator$ObjectLiteral(this$DelegatingMutableSet) {
    this.this$DelegatingMutableSet = this$DelegatingMutableSet;
    this.delegateIterator = this$DelegatingMutableSet.delegate_0.iterator();
  }
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.delegateIterator.hasNext();
  };
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.next = function () {
    return this.this$DelegatingMutableSet.convertTo_0(this.delegateIterator.next());
  };
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.remove = function () {
    this.delegateIterator.remove();
  };
  DelegatingMutableSet$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  DelegatingMutableSet.prototype.iterator = function () {
    return new DelegatingMutableSet$iterator$ObjectLiteral(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, Set))
      return false;
    var elements = this.convertTo_9xhuij$(this.delegate_0);
    var tmp$ = other.containsAll_brywnq$(elements);
    if (tmp$) {
      tmp$ = elements.containsAll_brywnq$(other);
    }
    return tmp$;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return this.convertTo_9xhuij$(this.delegate_0).toString();
  };
  DelegatingMutableSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatingMutableSet',
    interfaces: [MutableSet]
  };
  var use = defineInlineFunction('ktor-utils-js.io.ktor.util.use_mfy7iq$', function ($receiver, block) {
    try {
      $receiver.lock();
      return block();
    }
    finally {
      $receiver.unlock();
    }
  });
  function get_length($receiver) {
    return coerceAtLeast($receiver.endInclusive.subtract($receiver.start).add(Kotlin.Long.fromInt(1)), L0);
  }
  function contains($receiver, other) {
    return other.start.compareTo_11rb$($receiver.start) >= 0 && other.endInclusive.compareTo_11rb$($receiver.endInclusive) <= 0;
  }
  function ValuesMap() {
  }
  ValuesMap.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ValuesMap',
    interfaces: []
  };
  function StringValues() {
    StringValues$Companion_getInstance();
  }
  function StringValues$Companion() {
    StringValues$Companion_instance = this;
    this.Empty = new StringValuesImpl();
  }
  StringValues$Companion.prototype.build_o7hlrk$ = defineInlineFunction('ktor-utils-js.io.ktor.util.StringValues.Companion.build_o7hlrk$', wrapFunction(function () {
    var StringValuesBuilder_init = _.io.ktor.util.StringValuesBuilder;
    return function (caseInsensitiveName, builder) {
      if (caseInsensitiveName === void 0)
        caseInsensitiveName = false;
      var $receiver = new StringValuesBuilder_init(caseInsensitiveName);
      builder($receiver);
      return $receiver.build();
    };
  }));
  StringValues$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StringValues$Companion_instance = null;
  function StringValues$Companion_getInstance() {
    if (StringValues$Companion_instance === null) {
      new StringValues$Companion();
    }
    return StringValues$Companion_instance;
  }
  StringValues.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getAll_61zpoe$(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValues.prototype.contains_61zpoe$ = function (name) {
    return this.getAll_61zpoe$(name) != null;
  };
  StringValues.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.getAll_61zpoe$(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValues.prototype.forEach_ubvtmq$ = function (body) {
    var tmp$;
    tmp$ = this.entries().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      body(k, v);
    }
  };
  StringValues.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StringValues',
    interfaces: []
  };
  function StringValuesSingleImpl(caseInsensitiveName, name, values) {
    this.caseInsensitiveName_xvy381$_0 = caseInsensitiveName;
    this.name = name;
    this.values = values;
  }
  Object.defineProperty(StringValuesSingleImpl.prototype, 'caseInsensitiveName', {
    get: function () {
      return this.caseInsensitiveName_xvy381$_0;
    }
  });
  StringValuesSingleImpl.prototype.getAll_61zpoe$ = function (name) {
    return equals_0(this.name, name, this.caseInsensitiveName) ? this.values : null;
  };
  function StringValuesSingleImpl$entries$ObjectLiteral(this$StringValuesSingleImpl) {
    this.key_tykvjz$_0 = this$StringValuesSingleImpl.name;
    this.value_jfkgsx$_0 = this$StringValuesSingleImpl.values;
  }
  Object.defineProperty(StringValuesSingleImpl$entries$ObjectLiteral.prototype, 'key', {
    get: function () {
      return this.key_tykvjz$_0;
    }
  });
  Object.defineProperty(StringValuesSingleImpl$entries$ObjectLiteral.prototype, 'value', {
    get: function () {
      return this.value_jfkgsx$_0;
    }
  });
  StringValuesSingleImpl$entries$ObjectLiteral.prototype.toString = function () {
    return this.key + '=' + this.value;
  };
  StringValuesSingleImpl$entries$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Map$Entry]
  };
  StringValuesSingleImpl.prototype.entries = function () {
    return setOf(new StringValuesSingleImpl$entries$ObjectLiteral(this));
  };
  StringValuesSingleImpl.prototype.isEmpty = function () {
    return false;
  };
  StringValuesSingleImpl.prototype.names = function () {
    return setOf(this.name);
  };
  StringValuesSingleImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName + ') ' + this.entries();
  };
  StringValuesSingleImpl.prototype.hashCode = function () {
    return entriesHashCode(this.entries(), 31 * hashCode(this.caseInsensitiveName) | 0);
  };
  StringValuesSingleImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, StringValues))
      return false;
    if (this.caseInsensitiveName !== other.caseInsensitiveName)
      return false;
    return entriesEquals(this.entries(), other.entries());
  };
  StringValuesSingleImpl.prototype.forEach_ubvtmq$ = function (body) {
    body(this.name, this.values);
  };
  StringValuesSingleImpl.prototype.get_61zpoe$ = function (name) {
    return equals_0(name, this.name, this.caseInsensitiveName) ? firstOrNull(this.values) : null;
  };
  StringValuesSingleImpl.prototype.contains_61zpoe$ = function (name) {
    return equals_0(name, this.name, this.caseInsensitiveName);
  };
  StringValuesSingleImpl.prototype.contains_puj7f4$ = function (name, value) {
    return equals_0(name, this.name, this.caseInsensitiveName) && this.values.contains_11rb$(value);
  };
  StringValuesSingleImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringValuesSingleImpl',
    interfaces: [StringValues]
  };
  function StringValuesImpl(caseInsensitiveName, values) {
    if (caseInsensitiveName === void 0)
      caseInsensitiveName = false;
    if (values === void 0)
      values = emptyMap();
    this.caseInsensitiveName_w2tiaf$_0 = caseInsensitiveName;
    this.values_x1t64x$_0 = lazy(StringValuesImpl$values$lambda(this, values));
  }
  Object.defineProperty(StringValuesImpl.prototype, 'caseInsensitiveName', {
    get: function () {
      return this.caseInsensitiveName_w2tiaf$_0;
    }
  });
  Object.defineProperty(StringValuesImpl.prototype, 'values', {
    get: function () {
      return this.values_x1t64x$_0.value;
    }
  });
  StringValuesImpl.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.listForKey_6rkiov$_0(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValuesImpl.prototype.getAll_61zpoe$ = function (name) {
    return this.listForKey_6rkiov$_0(name);
  };
  StringValuesImpl.prototype.contains_61zpoe$ = function (name) {
    return this.listForKey_6rkiov$_0(name) != null;
  };
  StringValuesImpl.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.listForKey_6rkiov$_0(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesImpl.prototype.names = function () {
    return unmodifiable(this.values.keys);
  };
  StringValuesImpl.prototype.isEmpty = function () {
    return this.values.isEmpty();
  };
  StringValuesImpl.prototype.entries = function () {
    return unmodifiable(this.values.entries);
  };
  StringValuesImpl.prototype.forEach_ubvtmq$ = function (body) {
    var tmp$;
    tmp$ = this.values.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.key;
      var value = tmp$_0.value;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.listForKey_6rkiov$_0 = function (name) {
    return this.values.get_11rb$(name);
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName + ') ' + this.entries();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, StringValues))
      return false;
    if (this.caseInsensitiveName !== other.caseInsensitiveName)
      return false;
    return entriesEquals(this.entries(), other.entries());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.entries(), 31 * hashCode(this.caseInsensitiveName) | 0);
  };
  function StringValuesImpl$values$lambda(this$StringValuesImpl, closure$values) {
    return function () {
      var tmp$;
      if (this$StringValuesImpl.caseInsensitiveName) {
        var $receiver = caseInsensitiveMap();
        $receiver.putAll_a2k3zr$(closure$values);
        tmp$ = $receiver;
      }
       else
        tmp$ = toMap(closure$values);
      return tmp$;
    };
  }
  StringValuesImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringValuesImpl',
    interfaces: [StringValues]
  };
  function StringValuesBuilder(caseInsensitiveName, size) {
    if (caseInsensitiveName === void 0)
      caseInsensitiveName = false;
    if (size === void 0)
      size = 8;
    this.caseInsensitiveName = caseInsensitiveName;
    this.values = this.caseInsensitiveName ? caseInsensitiveMap() : LinkedHashMap_init(size);
    this.built = false;
  }
  StringValuesBuilder.prototype.getAll_61zpoe$ = function (name) {
    return this.values.get_11rb$(name);
  };
  var Map = Kotlin.kotlin.collections.Map;
  StringValuesBuilder.prototype.contains_61zpoe$ = function (name) {
    var $receiver = this.values;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name);
  };
  StringValuesBuilder.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesBuilder.prototype.names = function () {
    return this.values.keys;
  };
  StringValuesBuilder.prototype.isEmpty = function () {
    return this.values.isEmpty();
  };
  StringValuesBuilder.prototype.entries = function () {
    return unmodifiable(this.values.entries);
  };
  StringValuesBuilder.prototype.set_puj7f4$ = function (name, value) {
    var list = this.ensureListForKey_fsrbb4$_0(name, 1);
    list.clear();
    list.add_11rb$(value);
  };
  StringValuesBuilder.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getAll_61zpoe$(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValuesBuilder.prototype.append_puj7f4$ = function (name, value) {
    this.ensureListForKey_fsrbb4$_0(name, 1).add_11rb$(value);
  };
  function StringValuesBuilder$appendAll$lambda(this$StringValuesBuilder) {
    return function (name, values) {
      this$StringValuesBuilder.appendAll_poujtz$(name, values);
      return Unit;
    };
  }
  StringValuesBuilder.prototype.appendAll_hb0ubp$ = function (stringValues) {
    stringValues.forEach_ubvtmq$(StringValuesBuilder$appendAll$lambda(this));
  };
  function StringValuesBuilder$appendMissing$lambda(this$StringValuesBuilder) {
    return function (name, values) {
      this$StringValuesBuilder.appendMissing_poujtz$(name, values);
      return Unit;
    };
  }
  StringValuesBuilder.prototype.appendMissing_hb0ubp$ = function (stringValues) {
    stringValues.forEach_ubvtmq$(StringValuesBuilder$appendMissing$lambda(this));
  };
  StringValuesBuilder.prototype.appendAll_poujtz$ = function (name, values) {
    var tmp$, tmp$_0, tmp$_1;
    addAll(this.ensureListForKey_fsrbb4$_0(name, (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = values, Collection) ? tmp$ : null) != null ? tmp$_0.size : null) != null ? tmp$_1 : 2), values);
  };
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  StringValuesBuilder.prototype.appendMissing_poujtz$ = function (name, values) {
    var tmp$, tmp$_0;
    var existing = (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? toSet(tmp$) : null) != null ? tmp$_0 : emptySet();
    var destination = ArrayList_init_1();
    var tmp$_1;
    tmp$_1 = values.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!existing.contains_11rb$(element))
        destination.add_11rb$(element);
    }
    this.appendAll_poujtz$(name, destination);
  };
  StringValuesBuilder.prototype.remove_61zpoe$ = function (name) {
    this.values.remove_11rb$(name);
  };
  StringValuesBuilder.prototype.removeKeysWithNoEntries = function () {
    var tmp$;
    var $receiver = this.values;
    var destination = LinkedHashMap_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.value.isEmpty()) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    tmp$ = destination.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.key;
      this.remove_61zpoe$(k);
    }
  };
  StringValuesBuilder.prototype.remove_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? tmp$.remove_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesBuilder.prototype.clear = function () {
    this.values.clear();
  };
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  StringValuesBuilder.prototype.build = function () {
    if (!!this.built) {
      var message = 'ValueMapBuilder can only build a single ValueMap';
      throw IllegalArgumentException_init(message.toString());
    }
    this.built = true;
    return new StringValuesImpl(this.caseInsensitiveName, this.values);
  };
  StringValuesBuilder.prototype.ensureListForKey_fsrbb4$_0 = function (name, size) {
    var tmp$;
    if (this.built)
      throw IllegalStateException_init('Cannot modify a builder when final structure has already been built');
    var tmp$_0;
    if ((tmp$ = this.values.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = ArrayList_init(size);
      this.values.put_xwzc9p$(name, $receiver);
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  StringValuesBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringValuesBuilder',
    interfaces: []
  };
  function valuesOf(pairs, caseInsensitiveKey) {
    if (caseInsensitiveKey === void 0)
      caseInsensitiveKey = false;
    return new StringValuesImpl(caseInsensitiveKey, toMap_0(asList(pairs)));
  }
  function valuesOf_0(name, value, caseInsensitiveKey) {
    if (caseInsensitiveKey === void 0)
      caseInsensitiveKey = false;
    return new StringValuesSingleImpl(caseInsensitiveKey, name, listOf(value));
  }
  function valuesOf_1(name, values, caseInsensitiveKey) {
    if (caseInsensitiveKey === void 0)
      caseInsensitiveKey = false;
    return new StringValuesSingleImpl(caseInsensitiveKey, name, values);
  }
  function valuesOf_2() {
    return StringValues$Companion_getInstance().Empty;
  }
  function valuesOf_3(map, caseInsensitiveKey) {
    if (caseInsensitiveKey === void 0)
      caseInsensitiveKey = false;
    var size = map.size;
    if (size === 1) {
      var entry = single(map.entries);
      return new StringValuesSingleImpl(caseInsensitiveKey, entry.key, toList(entry.value));
    }
    var values = caseInsensitiveKey ? caseInsensitiveMap() : LinkedHashMap_init(size);
    var tmp$;
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      values.put_xwzc9p$(element.key, toList(element.value));
    }
    return new StringValuesImpl(caseInsensitiveKey, values);
  }
  function toMap_1($receiver) {
    var $receiver_0 = $receiver.entries();
    var destination = LinkedHashMap_init_0();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.key, toList(element.value));
    }
    return destination;
  }
  function flattenEntries($receiver) {
    var $receiver_0 = $receiver.entries();
    var destination = ArrayList_init_1();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_1 = element.value;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element.key, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  }
  function flattenForEach$lambda(closure$block) {
    return function (name, items) {
      var tmp$;
      tmp$ = items.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        closure$block(name, element);
      }
      return Unit;
    };
  }
  function flattenForEach($receiver, block) {
    $receiver.forEach_ubvtmq$(flattenForEach$lambda(block));
  }
  function filter($receiver, keepEmpty, predicate) {
    if (keepEmpty === void 0)
      keepEmpty = false;
    var entries = $receiver.entries();
    var values = $receiver.caseInsensitiveName ? caseInsensitiveMap() : LinkedHashMap_init(entries.size);
    var tmp$;
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = element.value;
      var destination = ArrayList_init(element.value.size);
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (predicate(element.key, element_0))
          destination.add_11rb$(element_0);
      }
      var list = destination;
      var tmp$_1 = keepEmpty;
      if (!tmp$_1) {
        tmp$_1 = !list.isEmpty();
      }
      if (tmp$_1)
        values.put_xwzc9p$(element.key, list);
    }
    return new StringValuesImpl($receiver.caseInsensitiveName, values);
  }
  function appendFiltered$lambda(closure$predicate, closure$keepEmpty, this$appendFiltered) {
    return function (name, value) {
      var destination = ArrayList_init(value.size);
      var tmp$;
      tmp$ = value.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (closure$predicate(name, element))
          destination.add_11rb$(element);
      }
      var list = destination;
      var tmp$_0 = closure$keepEmpty;
      if (!tmp$_0) {
        tmp$_0 = !list.isEmpty();
      }
      if (tmp$_0)
        this$appendFiltered.appendAll_poujtz$(name, list);
      return Unit;
    };
  }
  function appendFiltered($receiver, source, keepEmpty, predicate) {
    if (keepEmpty === void 0)
      keepEmpty = false;
    source.forEach_ubvtmq$(appendFiltered$lambda(predicate, keepEmpty, $receiver));
  }
  function appendAll($receiver, builder) {
    var tmp$;
    tmp$ = builder.entries().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var name = element.key;
      var values = element.value;
      $receiver.appendAll_poujtz$(name, values);
    }
    return $receiver;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return (seed * 31 | 0) + hashCode(entries) | 0;
  }
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  function escapeHTML($receiver) {
    var text = $receiver;
    if (text.length === 0)
      return text;
    var $receiver_0 = StringBuilder_init_0($receiver.length);
    var tmp$;
    tmp$ = text.length;
    for (var idx = 0; idx < tmp$; idx++) {
      var ch = text.charCodeAt(idx);
      switch (ch) {
        case 39:
          $receiver_0.append_gw00v9$('&#x27;');
          break;
        case 34:
          $receiver_0.append_gw00v9$('&quot;');
          break;
        case 38:
          $receiver_0.append_gw00v9$('&amp;');
          break;
        case 60:
          $receiver_0.append_gw00v9$('&lt;');
          break;
        case 62:
          $receiver_0.append_gw00v9$('&gt;');
          break;
        default:$receiver_0.append_s8itvh$(ch);
          break;
      }
    }
    return $receiver_0.toString();
  }
  var chomp = defineInlineFunction('ktor-utils-js.io.ktor.util.chomp_xxkbvm$', wrapFunction(function () {
    var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
    var to = Kotlin.kotlin.to_ujzrz7$;
    return function ($receiver, separator, onMissingDelimiter) {
      var tmp$;
      var idx = indexOf($receiver, separator);
      if (idx === -1)
        tmp$ = onMissingDelimiter();
      else {
        var tmp$_0 = $receiver.substring(0, idx);
        var startIndex = idx + 1 | 0;
        tmp$ = to(tmp$_0, $receiver.substring(startIndex));
      }
      return tmp$;
    };
  }));
  function caseInsensitive($receiver) {
    return new CaseInsensitiveString($receiver);
  }
  function CaseInsensitiveString(content) {
    this.content = content;
    this.hash_0 = hashCode(this.content.toLowerCase());
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    return ((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = other, CaseInsensitiveString) ? tmp$ : null) != null ? tmp$_0.content : null) != null ? equals_0(tmp$_1, this.content, true) : null) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.hash_0;
  };
  CaseInsensitiveString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseInsensitiveString',
    interfaces: []
  };
  function WeekDay(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WeekDay_initFields() {
    WeekDay_initFields = function () {
    };
    WeekDay$MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay$TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay$WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay$THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay$FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay$SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay$SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    WeekDay$Companion_getInstance();
  }
  var WeekDay$MONDAY_instance;
  function WeekDay$MONDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$MONDAY_instance;
  }
  var WeekDay$TUESDAY_instance;
  function WeekDay$TUESDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$TUESDAY_instance;
  }
  var WeekDay$WEDNESDAY_instance;
  function WeekDay$WEDNESDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$WEDNESDAY_instance;
  }
  var WeekDay$THURSDAY_instance;
  function WeekDay$THURSDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$THURSDAY_instance;
  }
  var WeekDay$FRIDAY_instance;
  function WeekDay$FRIDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$FRIDAY_instance;
  }
  var WeekDay$SATURDAY_instance;
  function WeekDay$SATURDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$SATURDAY_instance;
  }
  var WeekDay$SUNDAY_instance;
  function WeekDay$SUNDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$SUNDAY_instance;
  }
  function WeekDay$Companion() {
    WeekDay$Companion_instance = this;
  }
  WeekDay$Companion.prototype.from_za3lpa$ = function (ordinal) {
    return WeekDay$values()[ordinal];
  };
  WeekDay$Companion.prototype.from_61zpoe$ = function (value) {
    var tmp$;
    var tmp$_0;
    var $receiver = WeekDay$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        if (equals(element.value, value)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid day of week: ' + value).toString());
    }
    return tmp$_0;
  };
  WeekDay$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WeekDay$Companion_instance = null;
  function WeekDay$Companion_getInstance() {
    WeekDay_initFields();
    if (WeekDay$Companion_instance === null) {
      new WeekDay$Companion();
    }
    return WeekDay$Companion_instance;
  }
  WeekDay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeekDay',
    interfaces: [Enum]
  };
  function WeekDay$values() {
    return [WeekDay$MONDAY_getInstance(), WeekDay$TUESDAY_getInstance(), WeekDay$WEDNESDAY_getInstance(), WeekDay$THURSDAY_getInstance(), WeekDay$FRIDAY_getInstance(), WeekDay$SATURDAY_getInstance(), WeekDay$SUNDAY_getInstance()];
  }
  WeekDay.values = WeekDay$values;
  function WeekDay$valueOf(name) {
    switch (name) {
      case 'MONDAY':
        return WeekDay$MONDAY_getInstance();
      case 'TUESDAY':
        return WeekDay$TUESDAY_getInstance();
      case 'WEDNESDAY':
        return WeekDay$WEDNESDAY_getInstance();
      case 'THURSDAY':
        return WeekDay$THURSDAY_getInstance();
      case 'FRIDAY':
        return WeekDay$FRIDAY_getInstance();
      case 'SATURDAY':
        return WeekDay$SATURDAY_getInstance();
      case 'SUNDAY':
        return WeekDay$SUNDAY_getInstance();
      default:throwISE('No enum constant io.ktor.util.date.WeekDay.' + name);
    }
  }
  WeekDay.valueOf_61zpoe$ = WeekDay$valueOf;
  function Month(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month$FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month$MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month$APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month$MAY_instance = new Month('MAY', 4, 'May');
    Month$JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month$JULY_instance = new Month('JULY', 6, 'Jul');
    Month$AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month$SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month$OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month$NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month$DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Month$Companion_getInstance();
  }
  var Month$JANUARY_instance;
  function Month$JANUARY_getInstance() {
    Month_initFields();
    return Month$JANUARY_instance;
  }
  var Month$FEBRUARY_instance;
  function Month$FEBRUARY_getInstance() {
    Month_initFields();
    return Month$FEBRUARY_instance;
  }
  var Month$MARCH_instance;
  function Month$MARCH_getInstance() {
    Month_initFields();
    return Month$MARCH_instance;
  }
  var Month$APRIL_instance;
  function Month$APRIL_getInstance() {
    Month_initFields();
    return Month$APRIL_instance;
  }
  var Month$MAY_instance;
  function Month$MAY_getInstance() {
    Month_initFields();
    return Month$MAY_instance;
  }
  var Month$JUNE_instance;
  function Month$JUNE_getInstance() {
    Month_initFields();
    return Month$JUNE_instance;
  }
  var Month$JULY_instance;
  function Month$JULY_getInstance() {
    Month_initFields();
    return Month$JULY_instance;
  }
  var Month$AUGUST_instance;
  function Month$AUGUST_getInstance() {
    Month_initFields();
    return Month$AUGUST_instance;
  }
  var Month$SEPTEMBER_instance;
  function Month$SEPTEMBER_getInstance() {
    Month_initFields();
    return Month$SEPTEMBER_instance;
  }
  var Month$OCTOBER_instance;
  function Month$OCTOBER_getInstance() {
    Month_initFields();
    return Month$OCTOBER_instance;
  }
  var Month$NOVEMBER_instance;
  function Month$NOVEMBER_getInstance() {
    Month_initFields();
    return Month$NOVEMBER_instance;
  }
  var Month$DECEMBER_instance;
  function Month$DECEMBER_getInstance() {
    Month_initFields();
    return Month$DECEMBER_instance;
  }
  function Month$Companion() {
    Month$Companion_instance = this;
  }
  Month$Companion.prototype.from_za3lpa$ = function (ordinal) {
    return Month$values()[ordinal];
  };
  Month$Companion.prototype.from_61zpoe$ = function (value) {
    var tmp$;
    var tmp$_0;
    var $receiver = Month$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        if (equals(element.value, value)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid month: ' + value).toString());
    }
    return tmp$_0;
  };
  Month$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Month$Companion_instance = null;
  function Month$Companion_getInstance() {
    Month_initFields();
    if (Month$Companion_instance === null) {
      new Month$Companion();
    }
    return Month$Companion_instance;
  }
  Month.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Month',
    interfaces: [Enum]
  };
  function Month$values() {
    return [Month$JANUARY_getInstance(), Month$FEBRUARY_getInstance(), Month$MARCH_getInstance(), Month$APRIL_getInstance(), Month$MAY_getInstance(), Month$JUNE_getInstance(), Month$JULY_getInstance(), Month$AUGUST_getInstance(), Month$SEPTEMBER_getInstance(), Month$OCTOBER_getInstance(), Month$NOVEMBER_getInstance(), Month$DECEMBER_getInstance()];
  }
  Month.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'JANUARY':
        return Month$JANUARY_getInstance();
      case 'FEBRUARY':
        return Month$FEBRUARY_getInstance();
      case 'MARCH':
        return Month$MARCH_getInstance();
      case 'APRIL':
        return Month$APRIL_getInstance();
      case 'MAY':
        return Month$MAY_getInstance();
      case 'JUNE':
        return Month$JUNE_getInstance();
      case 'JULY':
        return Month$JULY_getInstance();
      case 'AUGUST':
        return Month$AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month$SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month$OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month$NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month$DECEMBER_getInstance();
      default:throwISE('No enum constant io.ktor.util.date.Month.' + name);
    }
  }
  Month.valueOf_61zpoe$ = Month$valueOf;
  function GMTDate_1(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    GMTDate$Companion_getInstance();
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.dayOfWeek = dayOfWeek;
    this.dayOfMonth = dayOfMonth;
    this.dayOfYear = dayOfYear;
    this.month = month;
    this.year = year;
    this.timestamp = timestamp;
  }
  function GMTDate$Companion() {
    GMTDate$Companion_instance = this;
    this.START = GMTDate(L0);
  }
  GMTDate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GMTDate$Companion_instance = null;
  function GMTDate$Companion_getInstance() {
    if (GMTDate$Companion_instance === null) {
      new GMTDate$Companion();
    }
    return GMTDate$Companion_instance;
  }
  GMTDate_1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GMTDate',
    interfaces: []
  };
  GMTDate_1.prototype.component1 = function () {
    return this.seconds;
  };
  GMTDate_1.prototype.component2 = function () {
    return this.minutes;
  };
  GMTDate_1.prototype.component3 = function () {
    return this.hours;
  };
  GMTDate_1.prototype.component4 = function () {
    return this.dayOfWeek;
  };
  GMTDate_1.prototype.component5 = function () {
    return this.dayOfMonth;
  };
  GMTDate_1.prototype.component6 = function () {
    return this.dayOfYear;
  };
  GMTDate_1.prototype.component7 = function () {
    return this.month;
  };
  GMTDate_1.prototype.component8 = function () {
    return this.year;
  };
  GMTDate_1.prototype.component9 = function () {
    return this.timestamp;
  };
  GMTDate_1.prototype.copy_j9f46j$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    return new GMTDate_1(seconds === void 0 ? this.seconds : seconds, minutes === void 0 ? this.minutes : minutes, hours === void 0 ? this.hours : hours, dayOfWeek === void 0 ? this.dayOfWeek : dayOfWeek, dayOfMonth === void 0 ? this.dayOfMonth : dayOfMonth, dayOfYear === void 0 ? this.dayOfYear : dayOfYear, month === void 0 ? this.month : month, year === void 0 ? this.year : year, timestamp === void 0 ? this.timestamp : timestamp);
  };
  GMTDate_1.prototype.toString = function () {
    return 'GMTDate(seconds=' + Kotlin.toString(this.seconds) + (', minutes=' + Kotlin.toString(this.minutes)) + (', hours=' + Kotlin.toString(this.hours)) + (', dayOfWeek=' + Kotlin.toString(this.dayOfWeek)) + (', dayOfMonth=' + Kotlin.toString(this.dayOfMonth)) + (', dayOfYear=' + Kotlin.toString(this.dayOfYear)) + (', month=' + Kotlin.toString(this.month)) + (', year=' + Kotlin.toString(this.year)) + (', timestamp=' + Kotlin.toString(this.timestamp)) + ')';
  };
  GMTDate_1.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.seconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.minutes) | 0;
    result = result * 31 + Kotlin.hashCode(this.hours) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfWeek) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfMonth) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfYear) | 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    result = result * 31 + Kotlin.hashCode(this.timestamp) | 0;
    return result;
  };
  GMTDate_1.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.seconds, other.seconds) && Kotlin.equals(this.minutes, other.minutes) && Kotlin.equals(this.hours, other.hours) && Kotlin.equals(this.dayOfWeek, other.dayOfWeek) && Kotlin.equals(this.dayOfMonth, other.dayOfMonth) && Kotlin.equals(this.dayOfYear, other.dayOfYear) && Kotlin.equals(this.month, other.month) && Kotlin.equals(this.year, other.year) && Kotlin.equals(this.timestamp, other.timestamp)))));
  };
  function compareTo($receiver, other) {
    return get_sign($receiver.timestamp.subtract(other.timestamp));
  }
  function plus($receiver, millis) {
    return GMTDate($receiver.timestamp.add(millis));
  }
  function minus($receiver, millis) {
    return GMTDate($receiver.timestamp.subtract(millis));
  }
  function ContextDsl() {
  }
  ContextDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextDsl',
    interfaces: [Annotation]
  };
  function Pipeline(phases) {
    Pipeline$Companion_getInstance();
    this.attributes = Attributes();
    var destination = ArrayList_init(phases.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== phases.length; ++tmp$) {
      var item = phases[tmp$];
      destination.add_11rb$(new Pipeline$PhaseContent(item, Pipeline$PipelinePhaseRelation$Last_getInstance(), ArrayList_init_1()));
    }
    this.phases_n317u8$_0 = destination;
    this.interceptorsQuantity_zh48jz$_0 = 0;
    this.interceptors_dzu4x2$_1 = null;
  }
  Pipeline.prototype.execute_8pmvt0$ = function (context, subject, continuation) {
    return (new PipelineContext(context, this.interceptors_dzu4x2$_0(), subject, continuation.context)).proceed(continuation);
  };
  function Pipeline$PhaseContent(phase, relation, interceptors) {
    this.phase = phase;
    this.relation = relation;
    this.interceptors = interceptors;
  }
  Pipeline$PhaseContent.prototype.toString = function () {
    return 'Phase `' + this.phase.name + '`, ' + this.interceptors.size + ' handlers';
  };
  Pipeline$PhaseContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PhaseContent',
    interfaces: []
  };
  function Pipeline$PipelinePhaseRelation() {
  }
  function Pipeline$PipelinePhaseRelation$After(relativeTo) {
    Pipeline$PipelinePhaseRelation.call(this);
    this.relativeTo = relativeTo;
  }
  Pipeline$PipelinePhaseRelation$After.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'After',
    interfaces: [Pipeline$PipelinePhaseRelation]
  };
  function Pipeline$PipelinePhaseRelation$Before(relativeTo) {
    Pipeline$PipelinePhaseRelation.call(this);
    this.relativeTo = relativeTo;
  }
  Pipeline$PipelinePhaseRelation$Before.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Before',
    interfaces: [Pipeline$PipelinePhaseRelation]
  };
  function Pipeline$PipelinePhaseRelation$Last() {
    Pipeline$PipelinePhaseRelation$Last_instance = this;
    Pipeline$PipelinePhaseRelation.call(this);
  }
  Pipeline$PipelinePhaseRelation$Last.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Last',
    interfaces: [Pipeline$PipelinePhaseRelation]
  };
  var Pipeline$PipelinePhaseRelation$Last_instance = null;
  function Pipeline$PipelinePhaseRelation$Last_getInstance() {
    if (Pipeline$PipelinePhaseRelation$Last_instance === null) {
      new Pipeline$PipelinePhaseRelation$Last();
    }
    return Pipeline$PipelinePhaseRelation$Last_instance;
  }
  Pipeline$PipelinePhaseRelation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PipelinePhaseRelation',
    interfaces: []
  };
  Object.defineProperty(Pipeline.prototype, 'items', {
    get: function () {
      var $receiver = this.phases_n317u8$_0;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.phase);
      }
      return destination;
    }
  });
  Pipeline.prototype.addPhase_cwbx9d$ = function (phase) {
    var $receiver = this.phases_n317u8$_0;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.phase, phase)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result)
      return;
    this.phases_n317u8$_0.add_11rb$(new Pipeline$PhaseContent(phase, Pipeline$PipelinePhaseRelation$Last_getInstance(), ArrayList_init_1()));
    this.interceptors_dzu4x2$_1 = null;
  };
  Pipeline.prototype.insertPhaseAfter_b9zzbm$ = function (reference, phase) {
    var $receiver = this.phases_n317u8$_0;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.phase, phase)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result)
      return;
    var $receiver_0 = this.phases_n317u8$_0;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$_0;
      var index = 0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        if (equals(item.phase, reference)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var index_0 = indexOfFirst$result;
    if (index_0 === -1)
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    this.phases_n317u8$_0.add_wxm5ur$(index_0 + 1 | 0, new Pipeline$PhaseContent(phase, new Pipeline$PipelinePhaseRelation$After(reference), ArrayList_init_1()));
    this.interceptors_dzu4x2$_1 = null;
  };
  Pipeline.prototype.insertPhaseBefore_b9zzbm$ = function (reference, phase) {
    var $receiver = this.phases_n317u8$_0;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.phase, phase)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result)
      return;
    var $receiver_0 = this.phases_n317u8$_0;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$_0;
      var index = 0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        if (equals(item.phase, reference)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var index_0 = indexOfFirst$result;
    if (index_0 === -1)
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    this.phases_n317u8$_0.add_wxm5ur$(index_0, new Pipeline$PhaseContent(phase, new Pipeline$PipelinePhaseRelation$Before(reference), ArrayList_init_1()));
    this.interceptors_dzu4x2$_1 = null;
  };
  Pipeline.prototype.interceptors_dzu4x2$_0 = function () {
    var tmp$;
    return (tmp$ = this.interceptors_dzu4x2$_1) != null ? tmp$ : this.cacheInterceptors_dmwwd8$_0();
  };
  Pipeline.prototype.cacheInterceptors_dmwwd8$_0 = function () {
    var tmp$, tmp$_0;
    var destination = ArrayList_init(this.interceptorsQuantity_zh48jz$_0);
    tmp$ = get_lastIndex(this.phases_n317u8$_0);
    for (var phaseIndex = 0; phaseIndex <= tmp$; phaseIndex++) {
      var elements = this.phases_n317u8$_0.get_za3lpa$(phaseIndex).interceptors;
      tmp$_0 = get_lastIndex(elements);
      for (var elementIndex = 0; elementIndex <= tmp$_0; elementIndex++) {
        destination.add_11rb$(elements.get_za3lpa$(elementIndex));
      }
    }
    this.interceptors_dzu4x2$_1 = destination;
    return destination;
  };
  Pipeline.prototype.intercept_o2xdxt$ = function (phase, block) {
    var tmp$;
    var $receiver = this.phases_n317u8$_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (equals(element.phase, phase)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    }
    var phaseContent = tmp$;
    phaseContent.interceptors.add_11rb$(block);
    this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + 1 | 0;
    this.interceptors_dzu4x2$_1 = null;
  };
  function Pipeline$Companion() {
    Pipeline$Companion_instance = this;
  }
  Pipeline$Companion.prototype.findPhase_0 = function ($receiver, phase) {
    var tmp$;
    tmp$ = get_lastIndex($receiver);
    for (var index = 0; index <= tmp$; index++) {
      var localPhase = $receiver.get_za3lpa$(index);
      if (equals(localPhase.phase, phase))
        return localPhase;
    }
    return null;
  };
  Pipeline$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Pipeline$Companion_instance = null;
  function Pipeline$Companion_getInstance() {
    if (Pipeline$Companion_instance === null) {
      new Pipeline$Companion();
    }
    return Pipeline$Companion_instance;
  }
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  Pipeline.prototype.merge_p814o4$ = function (from) {
    var tmp$, tmp$_0;
    if (this.fastPathMerge_p3ex3$_0(from)) {
      return;
    }
    var fromPhases = from.phases_n317u8$_0;
    tmp$ = get_lastIndex(fromPhases);
    loop_label: for (var index = 0; index <= tmp$; index++) {
      var fromContent = fromPhases.get_za3lpa$(index);
      var tmp$_1;
      if ((tmp$_0 = Pipeline$Companion_getInstance().findPhase_0(this.phases_n317u8$_0, fromContent.phase)) != null)
        tmp$_1 = tmp$_0;
      else {
        var tmp$_2;
        tmp$_2 = fromContent.relation;
        if (Kotlin.isType(tmp$_2, Pipeline$PipelinePhaseRelation$Last))
          this.addPhase_cwbx9d$(fromContent.phase);
        else if (Kotlin.isType(tmp$_2, Pipeline$PipelinePhaseRelation$Before))
          this.insertPhaseBefore_b9zzbm$(fromContent.relation.relativeTo, fromContent.phase);
        else if (Kotlin.isType(tmp$_2, Pipeline$PipelinePhaseRelation$After))
          this.insertPhaseAfter_b9zzbm$(fromContent.relation.relativeTo, fromContent.phase);
        var $receiver = this.phases_n317u8$_0;
        var first$result;
        first$break: do {
          var tmp$_3;
          tmp$_3 = $receiver.iterator();
          while (tmp$_3.hasNext()) {
            var element = tmp$_3.next();
            if (equals(element.phase, fromContent.phase)) {
              first$result = element;
              break first$break;
            }
          }
          throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
        }
         while (false);
        tmp$_1 = first$result;
      }
      var phaseContent = tmp$_1;
      if (fromContent.interceptors.size !== 0) {
        phaseContent.interceptors.addAll_brywnq$(fromContent.interceptors);
        this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + fromContent.interceptors.size | 0;
      }
    }
    this.interceptors_dzu4x2$_1 = null;
  };
  Pipeline.prototype.fastPathMerge_p3ex3$_0 = function (from) {
    var tmp$;
    if (from.phases_n317u8$_0.isEmpty())
      return true;
    if (this.phases_n317u8$_0.isEmpty()) {
      var fromPhases = from.phases_n317u8$_0;
      tmp$ = get_lastIndex(fromPhases);
      for (var index = 0; index <= tmp$; index++) {
        var fromContent = fromPhases.get_za3lpa$(index);
        var interceptors = ArrayList_init_0(fromContent.interceptors);
        this.phases_n317u8$_0.add_11rb$(new Pipeline$PhaseContent(fromContent.phase, fromContent.relation, interceptors));
      }
      this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + from.interceptorsQuantity_zh48jz$_0 | 0;
      this.interceptors_dzu4x2$_1 = null;
      return true;
    }
    return false;
  };
  Pipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pipeline',
    interfaces: []
  };
  function Pipeline_init(phase, interceptors, $this) {
    $this = $this || Object.create(Pipeline.prototype);
    Pipeline.call($this, [phase]);
    var tmp$;
    tmp$ = interceptors.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $this.intercept_o2xdxt$(phase, element);
    }
    return $this;
  }
  function execute_0($receiver_0, context_0, continuation) {
    return $receiver_0.execute_8pmvt0$(context_0, Unit, continuation);
  }
  defineInlineFunction('ktor-utils-js.io.ktor.util.pipeline.execute_8vjjyp$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    return function ($receiver_0, context_0, continuation) {
      Kotlin.suspendCall($receiver_0.execute_8pmvt0$(context_0, Unit, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  var intercept_0 = defineInlineFunction('ktor-utils-js.io.ktor.util.pipeline.intercept_hf28ui$', wrapFunction(function () {
    var PipelineContext = _.io.ktor.util.pipeline.PipelineContext;
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    function intercept$lambda(typeClosure$TSubject, isTSubject_0, closure$block_0) {
      return function ($receiver_0, subject_0, continuation_0, suspended) {
        var instance = new Coroutine$intercept$lambda(typeClosure$TSubject, isTSubject_0, closure$block_0, $receiver_0, subject_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$intercept$lambda(typeClosure$TSubject, isTSubject_0, closure$block_0, $receiver_0, subject_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$isTSubject = isTSubject_0;
      this.local$closure$block = closure$block_0;
      this.local$$receiver = $receiver_0;
      this.local$subject = subject_0;
    }
    Coroutine$intercept$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$intercept$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$intercept$lambda.prototype.constructor = Coroutine$intercept$lambda;
    Coroutine$intercept$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var tmp$, tmp$_0;
              if ((this.local$isTSubject(tmp$ = this.local$subject) ? tmp$ : null) == null) {
                return;
              }
               else {
                this.state_0 = 2;
                continue;
              }

            case 1:
              throw this.exception_0;
            case 2:
              var reinterpret = Kotlin.isType(tmp$_0 = this.local$$receiver, PipelineContext) ? tmp$_0 : null;
              if (reinterpret != null) {
                this.state_0 = 3;
                this.result_0 = this.local$closure$block(reinterpret, this.local$subject, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.result_0 = null;
                this.state_0 = 4;
                continue;
              }

            case 3:
              this.state_0 = 4;
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
    return function (TSubject_0, isTSubject, $receiver, phase, block) {
      $receiver.intercept_o2xdxt$(phase, intercept$lambda(TSubject_0, isTSubject, block));
    };
  }));
  function PipelineContext(context, interceptors, subject, coroutineContext) {
    this.context = context;
    this.interceptors_0 = interceptors;
    this.coroutineContext_lslad4$_0 = coroutineContext;
    this.subject_w7u32h$_0 = subject;
    this.index_0 = 0;
  }
  Object.defineProperty(PipelineContext.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_lslad4$_0;
    }
  });
  Object.defineProperty(PipelineContext.prototype, 'subject', {
    get: function () {
      return this.subject_w7u32h$_0;
    },
    set: function (subject) {
      this.subject_w7u32h$_0 = subject;
    }
  });
  PipelineContext.prototype.finish = function () {
    this.index_0 = -1;
  };
  PipelineContext.prototype.proceedWith_trkh7z$ = function (subject, continuation) {
    this.subject = subject;
    return this.proceed(continuation);
  };
  PipelineContext.prototype.proceed = function (continuation_0, suspended) {
    var instance = new Coroutine$proceed(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$proceed($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$proceed.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$proceed.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$proceed.prototype.constructor = Coroutine$proceed;
  Coroutine$proceed.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.index_0 < 0) {
              this.state_0 = 5;
              continue;
            }

            if (this.$this.interceptors_0.size === this.$this.index_0) {
              this.$this.index_0 = -1;
              return this.$this.subject;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var executeInterceptor = this.$this.interceptors_0.get_za3lpa$(this.$this.index_0);
            this.$this.index_0 = this.$this.index_0 + 1 | 0;
            this.state_0 = 4;
            this.result_0 = executeInterceptor(this.$this, this.$this.subject, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 2;
            continue;
          case 5:
            return this.$this.subject;
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
  PipelineContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PipelineContext',
    interfaces: [CoroutineScope]
  };
  function PipelinePhase(name) {
    this.name = name;
  }
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.name + "')";
  };
  PipelinePhase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PipelinePhase',
    interfaces: []
  };
  function InvalidPhaseException(message) {
    Throwable.call(this);
    this.message_qcnek0$_0 = message;
    this.cause_hz8mdu$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'InvalidPhaseException';
  }
  Object.defineProperty(InvalidPhaseException.prototype, 'message', {
    get: function () {
      return this.message_qcnek0$_0;
    }
  });
  Object.defineProperty(InvalidPhaseException.prototype, 'cause', {
    get: function () {
      return this.cause_hz8mdu$_0;
    }
  });
  InvalidPhaseException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidPhaseException',
    interfaces: [Throwable]
  };
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$util = package$ktor.util || (package$ktor.util = {});
  package$util.AttributesJsFn = Attributes;
  package$util.AttributesJs = AttributesJs;
  package$util.unmodifiable_cgavii$ = unmodifiable;
  package$util.Lock = Lock;
  var package$date = package$util.date || (package$util.date = {});
  package$date.GMTDate_mts6q2$ = GMTDate;
  package$date.GMTDate_qlqxlw$ = GMTDate_0;
  var package$pipeline = package$ktor.pipeline || (package$ktor.pipeline = {});
  package$pipeline.execute_8vjjyp$ = execute;
  var package$pipeline_0 = package$util.pipeline || (package$util.pipeline = {});
  package$pipeline_0.PipelineContext = PipelineContext;
  package$util.InternalAPI = InternalAPI;
  package$util.KtorExperimentalAPI = KtorExperimentalAPI;
  package$util.AttributeKey = AttributeKey;
  package$util.Attributes = Attributes_0;
  $$importsForInline$$['kotlinx-io-js'] = $module$kotlinx_io_js;
  package$util.encodeBase64_pdl1vz$ = encodeBase64;
  package$util.encodeBase64_qqbp4l$ = encodeBase64_0;
  package$util.decodeBase64_pdl1vz$ = decodeBase64;
  package$util.decodeBase64_qqbp4l$ = decodeBase64_0;
  package$util.clearFrom_767k4w$ = clearFrom;
  package$util.toBase64_8e50z4$ = toBase64;
  package$util.fromBase64_nugvp3$ = fromBase64;
  package$util.CaseInsensitiveMap = CaseInsensitiveMap;
  package$util.isLowerCase_myv2d0$ = isLowerCase;
  package$util.toCharArray_pdl1vz$ = toCharArray;
  $$importsForInline$$['ktor-utils-js'] = _;
  package$util.forEach_um81l4$ = forEach;
  package$util.caseInsensitiveMap_287e2$ = caseInsensitiveMap;
  package$util.DelegatingMutableSet = DelegatingMutableSet;
  package$util.use_mfy7iq$ = use;
  package$util.get_length_37ivyf$ = get_length;
  package$util.contains_9p7nab$ = contains;
  package$util.ValuesMap = ValuesMap;
  Object.defineProperty(StringValues, 'Companion', {
    get: StringValues$Companion_getInstance
  });
  package$util.StringValues = StringValues;
  package$util.StringValuesSingleImpl = StringValuesSingleImpl;
  package$util.StringValuesImpl = StringValuesImpl;
  package$util.StringValuesBuilder = StringValuesBuilder;
  package$util.valuesOf_4scrhc$ = valuesOf;
  package$util.valuesOf_qz9155$ = valuesOf_0;
  package$util.valuesOf_shkbj6$ = valuesOf_1;
  package$util.valuesOf = valuesOf_2;
  package$util.valuesOf_bntsah$ = valuesOf_3;
  package$util.toMap_vr6bp2$ = toMap_1;
  package$util.flattenEntries_vr6bp2$ = flattenEntries;
  package$util.flattenForEach_vel9bh$ = flattenForEach;
  package$util.filter_ksha00$ = filter;
  package$util.appendFiltered_af8oy2$ = appendFiltered;
  package$util.appendAll_k10e8h$ = appendAll;
  package$util.escapeHTML_pdl1vz$ = escapeHTML;
  package$util.chomp_xxkbvm$ = chomp;
  package$util.caseInsensitive_7efafi$ = caseInsensitive;
  package$util.CaseInsensitiveString = CaseInsensitiveString;
  Object.defineProperty(WeekDay, 'MONDAY', {
    get: WeekDay$MONDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'TUESDAY', {
    get: WeekDay$TUESDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'WEDNESDAY', {
    get: WeekDay$WEDNESDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'THURSDAY', {
    get: WeekDay$THURSDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'FRIDAY', {
    get: WeekDay$FRIDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'SATURDAY', {
    get: WeekDay$SATURDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'SUNDAY', {
    get: WeekDay$SUNDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'Companion', {
    get: WeekDay$Companion_getInstance
  });
  package$date.WeekDay = WeekDay;
  Object.defineProperty(Month, 'JANUARY', {
    get: Month$JANUARY_getInstance
  });
  Object.defineProperty(Month, 'FEBRUARY', {
    get: Month$FEBRUARY_getInstance
  });
  Object.defineProperty(Month, 'MARCH', {
    get: Month$MARCH_getInstance
  });
  Object.defineProperty(Month, 'APRIL', {
    get: Month$APRIL_getInstance
  });
  Object.defineProperty(Month, 'MAY', {
    get: Month$MAY_getInstance
  });
  Object.defineProperty(Month, 'JUNE', {
    get: Month$JUNE_getInstance
  });
  Object.defineProperty(Month, 'JULY', {
    get: Month$JULY_getInstance
  });
  Object.defineProperty(Month, 'AUGUST', {
    get: Month$AUGUST_getInstance
  });
  Object.defineProperty(Month, 'SEPTEMBER', {
    get: Month$SEPTEMBER_getInstance
  });
  Object.defineProperty(Month, 'OCTOBER', {
    get: Month$OCTOBER_getInstance
  });
  Object.defineProperty(Month, 'NOVEMBER', {
    get: Month$NOVEMBER_getInstance
  });
  Object.defineProperty(Month, 'DECEMBER', {
    get: Month$DECEMBER_getInstance
  });
  Object.defineProperty(Month, 'Companion', {
    get: Month$Companion_getInstance
  });
  package$date.Month = Month;
  Object.defineProperty(GMTDate_1, 'Companion', {
    get: GMTDate$Companion_getInstance
  });
  package$date.GMTDate = GMTDate_1;
  package$date.compareTo_hyz0z7$ = compareTo;
  package$date.plus_e4j7mw$ = plus;
  package$date.minus_e4j7mw$ = minus;
  package$pipeline_0.ContextDsl = ContextDsl;
  Object.defineProperty(Pipeline, 'Companion', {
    get: Pipeline$Companion_getInstance
  });
  package$pipeline_0.Pipeline_init_p4xfux$ = Pipeline_init;
  package$pipeline_0.Pipeline = Pipeline;
  package$pipeline_0.execute_8vjjyp$ = execute_0;
  package$pipeline_0.PipelinePhase = PipelinePhase;
  package$pipeline_0.InvalidPhaseException = InvalidPhaseException;
  AttributesJs.prototype.get_yzaw86$ = Attributes_0.prototype.get_yzaw86$;
  AttributesJs.prototype.take_yzaw86$ = Attributes_0.prototype.take_yzaw86$;
  AttributesJs.prototype.takeOrNull_yzaw86$ = Attributes_0.prototype.takeOrNull_yzaw86$;
  Object.defineProperty(PipelineContext.prototype, 'isActive', Object.getOwnPropertyDescriptor(CoroutineScope.prototype, 'isActive'));
  BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  BASE64_MASK = 63;
  BASE64_PAD = 61;
  var array = new Int32Array(256);
  var tmp$;
  tmp$ = array.length - 1 | 0;
  for (var i = 0; i <= tmp$; i++) {
    array[i] = indexOf(BASE64_ALPHABET, toChar(i));
  }
  BASE64_INVERSE_ALPHABET = array;
  Kotlin.defineModule('ktor-utils-js', _);
  return _;
}));

//# sourceMappingURL=ktor-utils-js.js.map
