(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-atomicfu'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-atomicfu'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-io-js'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-js'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-io-js'.");
    }
    root['kotlinx-io-js'] = factory(typeof this['kotlinx-io-js'] === 'undefined' ? {} : this['kotlinx-io-js'], kotlin, this['kotlinx-atomicfu']);
  }
}(this, function (_, Kotlin, $module$kotlinx_atomicfu) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var equals = Kotlin.equals;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var isHighSurrogate = Kotlin.kotlin.text.isHighSurrogate_myv2d0$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var Throwable = Error;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var L0 = Kotlin.Long.ZERO;
  var throwCCE = Kotlin.throwCCE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var toByte = Kotlin.toByte;
  var wrapFunction = Kotlin.wrapFunction;
  var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var Appendable = Kotlin.kotlin.text.Appendable;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var Any = Object;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var L16 = Kotlin.Long.fromInt(16);
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_i2lc79$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_tmsbgo$;
  var get_lastIndex_1 = Kotlin.kotlin.collections.get_lastIndex_se6h4x$;
  var get_lastIndex_2 = Kotlin.kotlin.collections.get_lastIndex_rjqryz$;
  var get_lastIndex_3 = Kotlin.kotlin.collections.get_lastIndex_bvy38s$;
  var Annotation = Kotlin.kotlin.Annotation;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var unboxChar = Kotlin.unboxChar;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var coerceAtMost_0 = Kotlin.kotlin.ranges.coerceAtMost_2p08ub$;
  var coerceAtLeast_0 = Kotlin.kotlin.ranges.coerceAtLeast_2p08ub$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var atomic = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$int$;
  var atomic_0 = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$boolean$;
  CharsetEncoderImpl.prototype = Object.create(CharsetEncoder.prototype);
  CharsetEncoderImpl.prototype.constructor = CharsetEncoderImpl;
  CharsetDecoderImpl.prototype = Object.create(CharsetDecoder.prototype);
  CharsetDecoderImpl.prototype.constructor = CharsetDecoderImpl;
  CharsetImpl.prototype = Object.create(Charset.prototype);
  CharsetImpl.prototype.constructor = CharsetImpl;
  MalformedInputException.prototype = Object.create(Throwable.prototype);
  MalformedInputException.prototype.constructor = MalformedInputException;
  ByteOrder.prototype = Object.create(Enum.prototype);
  ByteOrder.prototype.constructor = ByteOrder;
  BytePacketBuilderPlatformBase.prototype = Object.create(BytePacketBuilderBase.prototype);
  BytePacketBuilderPlatformBase.prototype.constructor = BytePacketBuilderPlatformBase;
  ByteReadPacketPlatformBase.prototype = Object.create(ByteReadPacketBase.prototype);
  ByteReadPacketPlatformBase.prototype.constructor = ByteReadPacketPlatformBase;
  ByteReadPacket.prototype = Object.create(ByteReadPacketPlatformBase.prototype);
  ByteReadPacket.prototype.constructor = ByteReadPacket;
  ByteReadPacket$ObjectLiteral.prototype = Object.create(SingleInstancePool.prototype);
  ByteReadPacket$ObjectLiteral.prototype.constructor = ByteReadPacket$ObjectLiteral;
  IoBuffer$Companion$Pool$ObjectLiteral.prototype = Object.create(DefaultPool.prototype);
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.constructor = IoBuffer$Companion$Pool$ObjectLiteral;
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype.constructor = IoBuffer$Companion$NoPool$ObjectLiteral;
  EOFException.prototype = Object.create(Exception.prototype);
  EOFException.prototype.constructor = EOFException;
  EmptyBufferPoolImpl.prototype = Object.create(NoPoolImpl.prototype);
  EmptyBufferPoolImpl.prototype.constructor = EmptyBufferPoolImpl;
  BufferLimitExceededException.prototype = Object.create(Exception.prototype);
  BufferLimitExceededException.prototype.constructor = BufferLimitExceededException;
  BytePacketBuilder_0.prototype = Object.create(BytePacketBuilderPlatformBase.prototype);
  BytePacketBuilder_0.prototype.constructor = BytePacketBuilder_0;
  AbstractOutput.prototype = Object.create(BytePacketBuilderPlatformBase.prototype);
  AbstractOutput.prototype.constructor = AbstractOutput;
  AbstractInput.prototype = Object.create(ByteReadPacketPlatformBase.prototype);
  AbstractInput.prototype.constructor = AbstractInput;
  ByteReadPacketBase$Companion$Empty$ObjectLiteral.prototype = Object.create(NoPoolImpl.prototype);
  ByteReadPacketBase$Companion$Empty$ObjectLiteral.prototype.constructor = ByteReadPacketBase$Companion$Empty$ObjectLiteral;
  MalformedUTF8InputException.prototype = Object.create(Exception.prototype);
  MalformedUTF8InputException.prototype.constructor = MalformedUTF8InputException;
  function Charset(_name) {
    Charset$Companion_getInstance();
    this._name_8be2vx$ = _name;
  }
  function Charset$Companion() {
    Charset$Companion_instance = this;
  }
  Charset$Companion.prototype.forName_61zpoe$ = function (name) {
    if (equals(name, 'UTF-8') || equals(name, 'utf-8') || equals(name, 'UTF8') || equals(name, 'utf8'))
      return Charsets_getInstance().UTF_8;
    throw IllegalArgumentException_init('Charset ' + name + ' is not supported');
  };
  Charset$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Charset$Companion_instance = null;
  function Charset$Companion_getInstance() {
    if (Charset$Companion_instance === null) {
      new Charset$Companion();
    }
    return Charset$Companion_instance;
  }
  Charset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Charset',
    interfaces: []
  };
  function get_name($receiver) {
    return $receiver._name_8be2vx$;
  }
  function CharsetEncoder(_charset) {
    this._charset_8be2vx$ = _charset;
  }
  CharsetEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharsetEncoder',
    interfaces: []
  };
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.charset_0 = charset;
  }
  CharsetEncoderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharsetEncoderImpl',
    interfaces: [CharsetEncoder]
  };
  CharsetEncoderImpl.prototype.component1_0 = function () {
    return this.charset_0;
  };
  CharsetEncoderImpl.prototype.copy_4lzlqu$ = function (charset) {
    return new CharsetEncoderImpl(charset === void 0 ? this.charset_0 : charset);
  };
  CharsetEncoderImpl.prototype.toString = function () {
    return 'CharsetEncoderImpl(charset=' + Kotlin.toString(this.charset_0) + ')';
  };
  CharsetEncoderImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.charset_0) | 0;
    return result;
  };
  CharsetEncoderImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.charset_0, other.charset_0))));
  };
  function get_charset($receiver) {
    return $receiver._charset_8be2vx$;
  }
  function encodeToByteArray($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = input.length;
    return encodeToByteArrayImpl($receiver, input, fromIndex, toIndex);
  }
  var Math_0 = Math;
  function encodeImpl($receiver, input, fromIndex, toIndex, dst) {
    var tmp$;
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(get_charset($receiver) === Charsets_getInstance().UTF_8)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init(message_0.toString());
    }
    var encoder = TextEncoderCtor();
    var start = fromIndex;
    var dstRemaining = dst.writeRemaining;
    while (start < toIndex && dstRemaining > 0) {
      var a = toIndex - start | 0;
      var b = dstRemaining / 6 | 0;
      var numChars = coerceAtLeast(Math_0.min(a, b), 1);
      var dropLastChar = isHighSurrogate(input.charCodeAt(start + numChars - 1 | 0));
      if (dropLastChar && numChars === 1)
        tmp$ = start + 2 | 0;
      else if (dropLastChar)
        tmp$ = start + numChars - 1 | 0;
      else
        tmp$ = start + numChars | 0;
      var endIndexExclusive = tmp$;
      var startIndex = start;
      var array1 = encoder.encode(Kotlin.subSequence(input, startIndex, endIndexExclusive).toString());
      if (array1.length > dst.writeRemaining)
        break;
      dst.writeFully_p0d4q1$(array1, 0, array1.length);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeUTF8($receiver, input, dst) {
    if (!(get_charset($receiver) === Charsets_getInstance().UTF_8)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    writePacket(dst, input);
  }
  function encodeComplete($receiver, dst) {
    return true;
  }
  function CharsetDecoder(_charset) {
    this._charset_8be2vx$ = _charset;
  }
  CharsetDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharsetDecoder',
    interfaces: []
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.charset_0 = charset;
  }
  CharsetDecoderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharsetDecoderImpl',
    interfaces: [CharsetDecoder]
  };
  CharsetDecoderImpl.prototype.component1_0 = function () {
    return this.charset_0;
  };
  CharsetDecoderImpl.prototype.copy_4lzlqu$ = function (charset) {
    return new CharsetDecoderImpl(charset === void 0 ? this.charset_0 : charset);
  };
  CharsetDecoderImpl.prototype.toString = function () {
    return 'CharsetDecoderImpl(charset=' + Kotlin.toString(this.charset_0) + ')';
  };
  CharsetDecoderImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.charset_0) | 0;
    return result;
  };
  CharsetDecoderImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.charset_0, other.charset_0))));
  };
  function get_charset_0($receiver) {
    return $receiver._charset_8be2vx$;
  }
  function decode($receiver, input, dst, max) {
    var decoder = TextDecoderFatal(get_name(get_charset_0($receiver)), true);
    var copied = {v: 0};
    takeWhileSize$break: do {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = input.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size = 1;
      loop_label: do {
        var before = current.readRemaining;
        var after;
        if (before >= size) {
          try {
            var buffer = current;
            var block$result;
            block$break: do {
              var rem = max - copied.v | 0;
              if (rem === 0) {
                block$result = 0;
                break block$break;
              }
              copied.v = copied.v + buffer.readText_pzahgr$(decoder, dst, buffer.next == null, rem) | 0;
              block$result = 1;
            }
             while (false);
            size = block$result;
          }
          finally {
            after = current.readRemaining;
          }
        }
         else {
          after = before;
        }
        if (after === 0) {
          tmp$_0 = input.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          current = tmp$_0;
        }
         else if (after < size) {
          input.$updateRemaining$_za3lpa$(after);
          tmp$_1 = input.$prepareRead$_za3lpa$(size);
          if (tmp$_1 == null) {
            break loop_label;
          }
          current = tmp$_1;
        }
         else {
          input.$updateRemaining$_za3lpa$(after);
        }
      }
       while (size > 0);
    }
     while (false);
    if (copied.v < max) {
      var decodeWrap$result;
      var tmp$_2;
      try {
        decodeWrap$result = decoder.decode();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_2 = t.message) != null ? tmp$_2 : 'no cause provided'));
        }
         else
          throw t;
      }
      var s = decodeWrap$result;
      if (s.length > (max - copied.v | 0)) {
        throw UnsupportedOperationException_init('Partial trailing characters are not supported');
      }
      dst.append_gw00v9$(s);
      copied.v = copied.v + s.length | 0;
    }
    return copied.v;
  }
  function decodeExactBytes($receiver, input, inputLength) {
    if (inputLength === 0)
      return '';
    if (Kotlin.isType(input, ByteReadPacketBase) && input.headRemaining >= inputLength) {
      var decoder = TextDecoderFatal(get_charset_0($receiver)._name_8be2vx$, true);
      var head = input.head;
      var decodeWrap$result;
      var tmp$;
      try {
        var block$result;
        if (head.readPosition_8be2vx$ === 0 && inputLength === head.content_8be2vx$.byteLength) {
          block$result = decoder.decode(head.content_8be2vx$);
        }
         else {
          block$result = decoder.decode(new Int8Array(head.content_8be2vx$, head.readPosition_8be2vx$, inputLength));
        }
        decodeWrap$result = block$result;
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$ = t.message) != null ? tmp$ : 'no cause provided'));
        }
         else
          throw t;
      }
      var text = decodeWrap$result;
      input.discardExact_za3lpa$(inputLength);
      return text;
    }
    return decodeExactBytesSlow($receiver, input, inputLength);
  }
  function decodeExactBytesSlow($receiver, input, inputLength) {
    var decoder = TextDecoderFatal(get_name(get_charset_0($receiver)), true);
    var inputRemaining = {v: inputLength};
    var sb = StringBuilder_init(inputLength);
    var tmp$;
    try {
      takeWhileSize$break: do {
        var tmp$_0, tmp$_1, tmp$_2;
        tmp$_0 = input.$prepareRead$_za3lpa$(1);
        if (tmp$_0 == null) {
          break takeWhileSize$break;
        }
        var current = tmp$_0;
        var size = 6;
        do {
          var before = current.readRemaining;
          var after;
          if (before >= size) {
            try {
              var buffer = current;
              var tmp$_3;
              var chunkSize = buffer.readRemaining;
              var b = inputRemaining.v;
              var size_0 = Math_0.min(chunkSize, b);
              if (buffer.readPosition_8be2vx$ === 0 && buffer.content_8be2vx$.byteLength === size_0) {
                var buffer_0 = buffer.content_8be2vx$;
                var decodeStream$result;
                var tmp$_4;
                try {
                  var tmp$_5;
                  if (true) {
                    tmp$_5 = decoder.decode(buffer_0, STREAM_TRUE);
                  }
                   else {
                    tmp$_5 = decoder.decode(buffer_0);
                  }
                  decodeStream$result = tmp$_5;
                }
                 catch (t) {
                  if (Kotlin.isType(t, Throwable)) {
                    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_4 = t.message) != null ? tmp$_4 : 'no cause provided'));
                  }
                   else
                    throw t;
                }
                tmp$_3 = decodeStream$result;
              }
               else {
                var buffer_1 = new Int8Array(buffer.content_8be2vx$, buffer.readPosition_8be2vx$, size_0);
                var decodeStream$result_0;
                var tmp$_6;
                try {
                  var tmp$_7;
                  if (true) {
                    tmp$_7 = decoder.decode(buffer_1, STREAM_TRUE);
                  }
                   else {
                    tmp$_7 = decoder.decode(buffer_1);
                  }
                  decodeStream$result_0 = tmp$_7;
                }
                 catch (t_0) {
                  if (Kotlin.isType(t_0, Throwable)) {
                    throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_6 = t_0.message) != null ? tmp$_6 : 'no cause provided'));
                  }
                   else
                    throw t_0;
                }
                tmp$_3 = decodeStream$result_0;
              }
              var text = tmp$_3;
              sb.append_gw00v9$(text);
              buffer.discardExact_za3lpa$(size_0);
              inputRemaining.v = inputRemaining.v - size_0 | 0;
              size = inputRemaining.v > 0 ? 6 : 0;
            }
            finally {
              after = current.readRemaining;
            }
          }
           else {
            after = before;
          }
          if (after === 0) {
            tmp$_1 = input.$ensureNext$_g6eaik$(current);
            if (tmp$_1 == null) {
              break;
            }
            current = tmp$_1;
          }
           else if (after < size) {
            input.$updateRemaining$_za3lpa$(after);
            tmp$_2 = input.$prepareRead$_za3lpa$(size);
            if (tmp$_2 == null) {
              break;
            }
            current = tmp$_2;
          }
           else {
            input.$updateRemaining$_za3lpa$(after);
          }
        }
         while (size > 0);
      }
       while (false);
      if (inputRemaining.v > 0) {
        takeWhile$break: do {
          var tmp$_8, tmp$_9;
          tmp$_8 = input.$prepareRead$_za3lpa$(1);
          if (tmp$_8 == null) {
            break takeWhile$break;
          }
          var current_0 = tmp$_8;
          do {
            var buffer_2 = current_0;
            var tmp$_10;
            var chunkSize_0 = buffer_2.readRemaining;
            var b_0 = inputRemaining.v;
            var size_1 = Math_0.min(chunkSize_0, b_0);
            if (buffer_2.readPosition_8be2vx$ === 0 && buffer_2.content_8be2vx$.byteLength === size_1)
              tmp$_10 = decoder.decode(buffer_2.content_8be2vx$);
            else {
              var buffer_3 = new Int8Array(buffer_2.content_8be2vx$, buffer_2.readPosition_8be2vx$, size_1);
              var decodeStream$result_1;
              var tmp$_11;
              try {
                var tmp$_12;
                if (true) {
                  tmp$_12 = decoder.decode(buffer_3, STREAM_TRUE);
                }
                 else {
                  tmp$_12 = decoder.decode(buffer_3);
                }
                decodeStream$result_1 = tmp$_12;
              }
               catch (t_1) {
                if (Kotlin.isType(t_1, Throwable)) {
                  throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_11 = t_1.message) != null ? tmp$_11 : 'no cause provided'));
                }
                 else
                  throw t_1;
              }
              tmp$_10 = decodeStream$result_1;
            }
            var text_0 = tmp$_10;
            sb.append_gw00v9$(text_0);
            buffer_2.discardExact_za3lpa$(size_1);
            inputRemaining.v = inputRemaining.v - size_1 | 0;
            var continueFlag = true;
            var after_0 = current_0.readRemaining;
            if (after_0 === 0) {
              tmp$_9 = input.$ensureNext$_g6eaik$(current_0);
              if (tmp$_9 == null) {
                break;
              }
              current_0 = tmp$_9;
            }
             else if (!continueFlag) {
              input.$updateRemaining$_za3lpa$(after_0);
              break;
            }
          }
           while (true);
        }
         while (false);
      }
      sb.append_gw00v9$(decoder.decode());
    }
     catch (t_2) {
      if (Kotlin.isType(t_2, Throwable)) {
        throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$ = t_2.message) != null ? tmp$ : 'no cause provided'));
      }
       else
        throw t_2;
    }
    return sb.toString();
  }
  function Charsets() {
    Charsets_instance = this;
    this.UTF_8 = new CharsetImpl('UTF-8');
  }
  Charsets.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Charsets',
    interfaces: []
  };
  var Charsets_instance = null;
  function Charsets_getInstance() {
    if (Charsets_instance === null) {
      new Charsets();
    }
    return Charsets_instance;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.name = name;
  }
  CharsetImpl.prototype.newEncoder = function () {
    return new CharsetEncoderImpl(this);
  };
  CharsetImpl.prototype.newDecoder = function () {
    return new CharsetDecoderImpl(this);
  };
  CharsetImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharsetImpl',
    interfaces: [Charset]
  };
  CharsetImpl.prototype.component1 = function () {
    return this.name;
  };
  CharsetImpl.prototype.copy_61zpoe$ = function (name) {
    return new CharsetImpl(name === void 0 ? this.name : name);
  };
  CharsetImpl.prototype.toString = function () {
    return 'CharsetImpl(name=' + Kotlin.toString(this.name) + ')';
  };
  CharsetImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  CharsetImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function MalformedInputException(message) {
    Throwable.call(this);
    this.message_359ad3$_0 = message;
    this.cause_8fsvpx$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'MalformedInputException';
  }
  Object.defineProperty(MalformedInputException.prototype, 'message', {
    get: function () {
      return this.message_359ad3$_0;
    }
  });
  Object.defineProperty(MalformedInputException.prototype, 'cause', {
    get: function () {
      return this.cause_8fsvpx$_0;
    }
  });
  MalformedInputException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MalformedInputException',
    interfaces: [Throwable]
  };
  function ByteOrder(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ByteOrder_initFields() {
    ByteOrder_initFields = function () {
    };
    ByteOrder$BIG_ENDIAN_instance = new ByteOrder('BIG_ENDIAN', 0);
    ByteOrder$LITTLE_ENDIAN_instance = new ByteOrder('LITTLE_ENDIAN', 1);
    ByteOrder$Companion_getInstance();
  }
  var ByteOrder$BIG_ENDIAN_instance;
  function ByteOrder$BIG_ENDIAN_getInstance() {
    ByteOrder_initFields();
    return ByteOrder$BIG_ENDIAN_instance;
  }
  var ByteOrder$LITTLE_ENDIAN_instance;
  function ByteOrder$LITTLE_ENDIAN_getInstance() {
    ByteOrder_initFields();
    return ByteOrder$LITTLE_ENDIAN_instance;
  }
  function ByteOrder$Companion() {
    ByteOrder$Companion_instance = this;
    this.native_0 = null;
    var buffer = new ArrayBuffer(4);
    var arr = new Int32Array(buffer);
    var view = new DataView(buffer);
    arr[0] = 287454020;
    this.native_0 = view.getInt32(0, true) === 287454020 ? ByteOrder$LITTLE_ENDIAN_getInstance() : ByteOrder$BIG_ENDIAN_getInstance();
  }
  ByteOrder$Companion.prototype.nativeOrder = function () {
    return this.native_0;
  };
  ByteOrder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ByteOrder$Companion_instance = null;
  function ByteOrder$Companion_getInstance() {
    ByteOrder_initFields();
    if (ByteOrder$Companion_instance === null) {
      new ByteOrder$Companion();
    }
    return ByteOrder$Companion_instance;
  }
  ByteOrder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteOrder',
    interfaces: [Enum]
  };
  function ByteOrder$values() {
    return [ByteOrder$BIG_ENDIAN_getInstance(), ByteOrder$LITTLE_ENDIAN_getInstance()];
  }
  ByteOrder.values = ByteOrder$values;
  function ByteOrder$valueOf(name) {
    switch (name) {
      case 'BIG_ENDIAN':
        return ByteOrder$BIG_ENDIAN_getInstance();
      case 'LITTLE_ENDIAN':
        return ByteOrder$LITTLE_ENDIAN_getInstance();
      default:throwISE('No enum constant kotlinx.io.core.ByteOrder.' + name);
    }
  }
  ByteOrder.valueOf_61zpoe$ = ByteOrder$valueOf;
  function BytePacketBuilderPlatformBase(pool) {
    BytePacketBuilderBase.call(this, pool);
  }
  BytePacketBuilderPlatformBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BytePacketBuilderPlatformBase',
    interfaces: [BytePacketBuilderBase]
  };
  function ByteReadPacketPlatformBase(head, remaining, pool) {
    ByteReadPacketBase.call(this, head, remaining, pool);
  }
  ByteReadPacketPlatformBase.prototype.readFully_gsnag5$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < length)
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' bytes');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_gsnag5$(dst, offset + copied.v | 0, length - copied.v | 0);
        if (rc > 0)
          copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketPlatformBase.prototype.readFully_qmgm5g$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < length)
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' bytes');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_qmgm5g$(dst, offset + copied.v | 0, length - copied.v | 0);
        if (rc > 0)
          copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketPlatformBase.prototype.readFully_p0d4q1$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < length)
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' bytes');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_p0d4q1$(dst, offset + copied.v | 0, length - copied.v | 0);
        if (rc > 0)
          copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketPlatformBase.prototype.readAvailable_gsnag5$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_gsnag5$(dst, offset, size);
    return size;
  };
  ByteReadPacketPlatformBase.prototype.readAvailable_qmgm5g$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_qmgm5g$(dst, offset, size);
    return size;
  };
  ByteReadPacketPlatformBase.prototype.readAvailable_p0d4q1$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_p0d4q1$(dst, offset, size);
    return size;
  };
  ByteReadPacketPlatformBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteReadPacketPlatformBase',
    interfaces: [ByteReadPacketBase, Input]
  };
  function ByteReadPacket(head, remaining, pool) {
    ByteReadPacket$Companion_getInstance();
    ByteReadPacketPlatformBase.call(this, head, remaining, pool);
  }
  ByteReadPacket.prototype.fill = function () {
    return null;
  };
  ByteReadPacket.prototype.closeSource = function () {
  };
  function ByteReadPacket$Companion() {
    ByteReadPacket$Companion_instance = this;
  }
  Object.defineProperty(ByteReadPacket$Companion.prototype, 'Empty', {
    get: function () {
      return ByteReadPacketBase$Companion_getInstance().Empty;
    }
  });
  Object.defineProperty(ByteReadPacket$Companion.prototype, 'ReservedSize', {
    get: function () {
      return ByteReadPacketBase$Companion_getInstance().ReservedSize;
    }
  });
  ByteReadPacket$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ByteReadPacket$Companion_instance = null;
  function ByteReadPacket$Companion_getInstance() {
    if (ByteReadPacket$Companion_instance === null) {
      new ByteReadPacket$Companion();
    }
    return ByteReadPacket$Companion_instance;
  }
  ByteReadPacket.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteReadPacket',
    interfaces: [ByteReadPacketPlatformBase, Input]
  };
  function ByteReadPacket_init(head, pool, $this) {
    $this = $this || Object.create(ByteReadPacket.prototype);
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket$ObjectLiteral(closure$sub, closure$block, closure$array) {
    this.closure$sub = closure$sub;
    this.closure$block = closure$block;
    this.closure$array = closure$array;
    SingleInstancePool.call(this);
  }
  ByteReadPacket$ObjectLiteral.prototype.produceInstance = function () {
    return new IoBuffer(this.closure$sub, null);
  };
  ByteReadPacket$ObjectLiteral.prototype.disposeInstance_trkh7z$ = function (instance) {
    this.closure$block(this.closure$array);
  };
  ByteReadPacket$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SingleInstancePool]
  };
  function ByteReadPacket_0(array, offset, length, block) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = array.length;
    var tmp$, tmp$_0;
    var content = Kotlin.isType(tmp$ = array, Int8Array) ? tmp$ : throwCCE();
    if (offset === 0 && length === array.length)
      tmp$_0 = content.buffer;
    else
      tmp$_0 = content.buffer.slice(offset, offset + length | 0);
    var sub = tmp$_0;
    var pool = new ByteReadPacket$ObjectLiteral(sub, block, array);
    var $receiver = pool.borrow();
    $receiver.resetForRead();
    return ByteReadPacket_init($receiver, pool);
  }
  function Closeable() {
  }
  Closeable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Closeable',
    interfaces: []
  };
  function addSuppressedInternal($receiver, other) {
  }
  function Input() {
  }
  Input.prototype.readFully_bj0s3a$ = function (dst, length, callback$default) {
    if (length === void 0)
      length = dst.writeRemaining;
    callback$default ? callback$default(dst, length) : this.readFully_bj0s3a$$default(dst, length);
  };
  Input.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Input',
    interfaces: [Closeable]
  };
  function IoBuffer(content, origin) {
    IoBuffer$Companion_getInstance();
    this.content_8be2vx$ = content;
    this.origin_8be2vx$ = origin;
    this.refCount_0 = 1;
    this.readPosition_8be2vx$ = 0;
    this.writePosition_8be2vx$ = 0;
    this.limit_0 = this.content_8be2vx$.byteLength;
    this.view_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().EmptyDataView_0 : new DataView(this.content_8be2vx$);
    this.i8_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().Empty8_0 : new Int8Array(this.content_8be2vx$, 0, this.limit_0);
    this.i16_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().Empty16_0 : new Int16Array(this.content_8be2vx$, 0, this.limit_0 / 2 | 0);
    this.i32_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().Empty32_0 : new Int32Array(this.content_8be2vx$, 0, this.limit_0 / 4 | 0);
    this.f32_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().EmptyF32_0 : new Float32Array(this.content_8be2vx$, 0, this.limit_0 / 4 | 0);
    this.f64_0 = this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0 ? IoBuffer$Companion_getInstance().EmptyF64_0 : new Float64Array(this.content_8be2vx$, 0, this.limit_0 / 8 | 0);
    this.littleEndian_0 = false;
    this.platformEndian_0 = ByteOrder$Companion_getInstance().nativeOrder() === ByteOrder$BIG_ENDIAN_getInstance();
    this.attachment = null;
    this.next = null;
  }
  Object.defineProperty(IoBuffer.prototype, 'endOfInput', {
    get: function () {
      return this.writePosition_8be2vx$ === this.readPosition_8be2vx$;
    }
  });
  Object.defineProperty(IoBuffer.prototype, 'capacity', {
    get: function () {
      return this.content_8be2vx$.byteLength;
    }
  });
  Object.defineProperty(IoBuffer.prototype, 'readRemaining', {
    get: function () {
      return this.writePosition_8be2vx$ - this.readPosition_8be2vx$ | 0;
    }
  });
  Object.defineProperty(IoBuffer.prototype, 'writeRemaining', {
    get: function () {
      return this.limit_0 - this.writePosition_8be2vx$ | 0;
    }
  });
  IoBuffer.prototype.canRead = function () {
    return this.writePosition_8be2vx$ > this.readPosition_8be2vx$;
  };
  IoBuffer.prototype.canWrite = function () {
    return this.writePosition_8be2vx$ < this.limit_0;
  };
  IoBuffer.prototype.reserveStartGap_za3lpa$ = function (n) {
    if (this.readPosition_8be2vx$ > 0)
      throw IllegalStateException_init('Start gap is already reserved');
    if (this.writePosition_8be2vx$ > 0)
      throw IllegalStateException_init('Start gap is already reserved');
    this.writePosition_8be2vx$ = n;
    this.readPosition_8be2vx$ = n;
  };
  IoBuffer.prototype.reserveEndGap_za3lpa$ = function (n) {
    if (this.limit_0 !== this.content_8be2vx$.byteLength)
      throw IllegalStateException_init('End gap is already reserved');
    this.limit_0 = this.limit_0 - n | 0;
  };
  Object.defineProperty(IoBuffer.prototype, 'startGap', {
    get: function () {
      return this.readPosition_8be2vx$;
    }
  });
  Object.defineProperty(IoBuffer.prototype, 'endGap', {
    get: function () {
      return this.content_8be2vx$.byteLength - this.limit_0 | 0;
    }
  });
  Object.defineProperty(IoBuffer.prototype, 'byteOrder', {
    get: function () {
      return this.littleEndian_0 ? ByteOrder$LITTLE_ENDIAN_getInstance() : ByteOrder$BIG_ENDIAN_getInstance();
    },
    set: function (value) {
      var tmp$;
      switch (value.name) {
        case 'BIG_ENDIAN':
          tmp$ = false;
          break;
        case 'LITTLE_ENDIAN':
          tmp$ = true;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      this.littleEndian_0 = tmp$;
      this.platformEndian_0 = value === ByteOrder$Companion_getInstance().nativeOrder();
    }
  });
  IoBuffer.prototype.readByte = function () {
    if (this.readRemaining < 0)
      throw IllegalStateException_init('No bytes available for read');
    var value = this.i8_0[this.readPosition_8be2vx$];
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 1 | 0;
    return value;
  };
  IoBuffer.prototype.writeByte_s8j3t7$ = function (v) {
    if (this.writeRemaining < 1)
      throw IllegalStateException_init('No space left for writing');
    this.i8_0[this.writePosition_8be2vx$] = v;
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 1 | 0;
  };
  IoBuffer.prototype.readShort = function () {
    if (this.readRemaining < 2)
      throw IllegalStateException_init('Not enough bytes available to read a short');
    var value = this.view_0.getInt16(this.readPosition_8be2vx$, this.littleEndian_0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 2 | 0;
    return value;
  };
  IoBuffer.prototype.writeShort_mq22fl$ = function (v) {
    if (this.writeRemaining < 2)
      throw IllegalStateException_init('Not enough space left to write a short');
    this.view_0.setInt16(this.writePosition_8be2vx$, v, this.littleEndian_0);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 2 | 0;
  };
  IoBuffer.prototype.readInt = function () {
    if (this.readRemaining < 4)
      throw IllegalStateException_init('Not enough bytes available to read an int');
    return this.readIntUnsafe_0();
  };
  IoBuffer.prototype.readIntUnsafe_0 = function () {
    var value = this.view_0.getInt32(this.readPosition_8be2vx$, this.littleEndian_0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 4 | 0;
    return value;
  };
  IoBuffer.prototype.writeInt_za3lpa$ = function (v) {
    if (this.writeRemaining < 4)
      throw IllegalStateException_init('Not enough space left to write an int');
    this.view_0.setInt32(this.writePosition_8be2vx$, v, this.littleEndian_0);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 4 | 0;
  };
  IoBuffer.prototype.readFloat = function () {
    if (this.readRemaining < 4)
      throw IllegalStateException_init('Not enough bytes available to read a float');
    var value = this.view_0.getFloat32(this.readPosition_8be2vx$, this.littleEndian_0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 4 | 0;
    return value;
  };
  IoBuffer.prototype.writeFloat_mx4ult$ = function (v) {
    if (this.writeRemaining < 4)
      throw IllegalStateException_init('Not enough space left to write a float');
    this.view_0.setFloat32(this.writePosition_8be2vx$, v, this.littleEndian_0);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 4 | 0;
  };
  IoBuffer.prototype.readDouble = function () {
    if (this.readRemaining < 8)
      throw IllegalStateException_init('Not enough bytes available to read a double');
    var value = this.view_0.getFloat64(this.readPosition_8be2vx$, this.littleEndian_0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + 8 | 0;
    return value;
  };
  IoBuffer.prototype.writeDouble_14dthe$ = function (v) {
    if (this.writeRemaining < 8)
      throw IllegalStateException_init('Not enough space left to write a double');
    this.view_0.setFloat64(this.writePosition_8be2vx$, v, this.littleEndian_0);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + 8 | 0;
  };
  IoBuffer.prototype.writeFully_mj6st8$ = function (src, offset, length) {
    this.write_mj6st8$(src, offset, length);
  };
  IoBuffer.prototype.writeFully_359eei$ = function (src, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.writeRemaining < (length * 2 | 0))
      throw IllegalStateException_init('Not enough space left to write a short array of length ' + length);
    var wp = this.writePosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (wp & 1) === 0) {
      var array = this.i16_0;
      var j = wp / 2 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = src[i];
      }
      this.writePosition_8be2vx$ = wp + (length * 2 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Int16Array(this.content_8be2vx$, wp);
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        array_0[i_0 - offset | 0] = src[i_0];
      }
      this.writePosition_8be2vx$ = wp + (length * 2 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_2 = offset + length - 1 | 0;
      for (var i_1 = offset; i_1 <= tmp$_2; i_1++) {
        view.setInt16(wp, src[i_1], littleEndian);
        wp = wp + 2 | 0;
      }
      this.writePosition_8be2vx$ = wp;
    }
  };
  IoBuffer.prototype.writeFully_nd5v6f$ = function (src, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.writeRemaining < (length * 4 | 0))
      throw IllegalStateException_init('Not enough space left to write an int array of length ' + length);
    var wp = this.writePosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (wp & 3) === 0) {
      var array = this.i32_0;
      var j = wp / 4 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = src[i];
      }
      this.writePosition_8be2vx$ = wp + (length * 4 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Int32Array(this.content_8be2vx$, wp);
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        array_0[i_0 - offset | 0] = src[i_0];
      }
      this.writePosition_8be2vx$ = wp + (length * 4 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_2 = offset + length - 1 | 0;
      for (var i_1 = offset; i_1 <= tmp$_2; i_1++) {
        view.setInt32(wp, src[i_1], littleEndian);
        wp = wp + 4 | 0;
      }
      this.writePosition_8be2vx$ = wp;
    }
  };
  IoBuffer.prototype.writeFully_rfv6wg$ = function (src, offset, length) {
    var tmp$;
    if (this.writeRemaining < (length * 8 | 0))
      throw IllegalStateException_init('Not enough space left to write a long array of length ' + length);
    tmp$ = offset + length - 1 | 0;
    for (var i = offset; i <= tmp$; i++) {
      this.writeLong_s8cxhz$(src[i]);
    }
  };
  IoBuffer.prototype.writeFully_kgymra$ = function (src, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.writeRemaining < (length * 4 | 0))
      throw IllegalStateException_init('Not enough space left to write a float array of length ' + length);
    var wp = this.writePosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (wp & 3) === 0) {
      var array = this.f32_0;
      var j = wp / 4 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = src[i];
      }
      this.writePosition_8be2vx$ = wp + (length * 4 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Float32Array(this.content_8be2vx$, wp);
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        array_0[i_0 - offset | 0] = src[i_0];
      }
      this.writePosition_8be2vx$ = wp + (length * 4 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_2 = offset + length - 1 | 0;
      for (var i_1 = offset; i_1 <= tmp$_2; i_1++) {
        view.setFloat32(wp, src[i_1], littleEndian);
        wp = wp + 4 | 0;
      }
      this.writePosition_8be2vx$ = wp;
    }
  };
  IoBuffer.prototype.writeFully_6icyh1$ = function (src, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.writeRemaining < (length * 8 | 0))
      throw IllegalStateException_init('Not enough space left to write a double array of length ' + length);
    var wp = this.writePosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (wp & 7) === 0) {
      var array = this.f64_0;
      var j = wp / 8 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = src[i];
      }
      this.writePosition_8be2vx$ = wp + (length * 8 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Float64Array(this.content_8be2vx$, wp);
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        array_0[i_0 - offset | 0] = src[i_0];
      }
      this.writePosition_8be2vx$ = wp + (length * 8 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_2 = offset + length - 1 | 0;
      for (var i_1 = offset; i_1 <= tmp$_2; i_1++) {
        view.setFloat64(wp, src[i_1], littleEndian);
        wp = wp + 8 | 0;
      }
      this.writePosition_8be2vx$ = wp;
    }
  };
  function IoBuffer$writeFully$lambda(closure$length, closure$src) {
    return function () {
      return 'length is too large: not enough bytes to read ' + closure$length + ' > ' + closure$src.readRemaining;
    };
  }
  function IoBuffer$writeFully$lambda_0(closure$length, this$IoBuffer) {
    return function () {
      return 'length is too large: not enough room to write ' + closure$length + ' > ' + this$IoBuffer.writeRemaining;
    };
  }
  require$ObjectLiteral.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral.prototype.constructor = require$ObjectLiteral;
  function require$ObjectLiteral(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral.prototype.doFail = function () {
    throw IllegalArgumentException_init(this.closure$message());
  };
  require$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [RequireFailureCapture]
  };
  IoBuffer.prototype.writeFully_bj0s3a$ = function (src, length) {
    if (!(length <= src.readRemaining)) {
      var m = new require$ObjectLiteral(IoBuffer$writeFully$lambda(length, src));
      m.doFail();
    }
    if (!(length <= this.writeRemaining)) {
      var m_0 = new require$ObjectLiteral(IoBuffer$writeFully$lambda_0(length, this));
      m_0.doFail();
    }
    var otherEnd = src.readPosition_8be2vx$ + length | 0;
    var sub = src.i8_0.subarray(src.readPosition_8be2vx$, otherEnd);
    this.i8_0.set(sub, this.writePosition_8be2vx$);
    src.readPosition_8be2vx$ = otherEnd;
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + length | 0;
  };
  IoBuffer.prototype.fill_3pq026$ = function (n, v) {
    if (Kotlin.Long.fromInt(this.writeRemaining).compareTo_11rb$(n) < 0)
      throw IllegalStateException_init('Not enough space to fill with ' + n.toString() + ' values');
    var wp = this.writePosition_8be2vx$;
    var times = n.toInt();
    for (var index = 0; index < times; index++) {
      this.i8_0[wp + index | 0] = v;
    }
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + n.toInt() | 0;
  };
  IoBuffer.prototype.read_mj6st8$ = function (dst, offset, length) {
    this.readFully_mj6st8$(dst, offset, length);
  };
  IoBuffer.prototype.readFully_mj6st8$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_8be2vx$;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      dst[offset + idx | 0] = i8[rp + idx | 0];
    }
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + length | 0;
  };
  IoBuffer.prototype.readAvailable_mj6st8$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_mj6st8$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_359eei$ = function (dst, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.readRemaining < (length * 2 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' short integers');
    var rp = this.readPosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (rp & 1) === 0) {
      var array = this.i16_0;
      var j = rp / 2 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        dst[i] = array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      }
      this.readPosition_8be2vx$ = rp + (length * 2 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Int16Array(this.content_8be2vx$, rp);
      var j_0 = 0;
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        dst[i_0] = array_0[tmp$_2 = j_0, j_0 = tmp$_2 + 1 | 0, tmp$_2];
      }
      this.readPosition_8be2vx$ = rp + (length * 2 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_3 = offset + length - 1 | 0;
      for (var idx = offset; idx <= tmp$_3; idx++) {
        dst[idx] = view.getInt16(rp, littleEndian);
        rp = rp + 2 | 0;
      }
      this.readPosition_8be2vx$ = rp;
    }
  };
  IoBuffer.prototype.readAvailable_359eei$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_359eei$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_nd5v6f$ = function (dst, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.readRemaining < (length * 4 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' integers');
    var rp = this.readPosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (rp & 3) === 0) {
      var array = this.i32_0;
      var j = rp / 4 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        dst[i] = array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      }
      this.readPosition_8be2vx$ = rp + (length * 4 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Int32Array(this.content_8be2vx$, rp);
      var j_0 = 0;
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        dst[i_0] = array_0[tmp$_2 = j_0, j_0 = tmp$_2 + 1 | 0, tmp$_2];
      }
      this.readPosition_8be2vx$ = rp + (length * 4 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_3 = offset + length - 1 | 0;
      for (var idx = offset; idx <= tmp$_3; idx++) {
        dst[idx] = view.getInt32(rp, littleEndian);
        rp = rp + 4 | 0;
      }
      this.readPosition_8be2vx$ = rp;
    }
  };
  IoBuffer.prototype.readAvailable_nd5v6f$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_nd5v6f$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_rfv6wg$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < (length * 8 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' long integers');
    tmp$ = offset + length - 1 | 0;
    for (var idx = offset; idx <= tmp$; idx++) {
      dst[idx] = this.readLongUnsafe_0();
    }
  };
  IoBuffer.prototype.readAvailable_rfv6wg$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_rfv6wg$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_kgymra$ = function (dst, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.readRemaining < (length * 4 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' float numbers');
    var rp = this.readPosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (rp & 3) === 0) {
      var array = this.f32_0;
      var j = rp / 4 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        dst[i] = array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      }
      this.readPosition_8be2vx$ = rp + (length * 4 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Float32Array(this.content_8be2vx$, rp);
      var j_0 = 0;
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        dst[i_0] = array_0[tmp$_2 = j_0, j_0 = tmp$_2 + 1 | 0, tmp$_2];
      }
      this.readPosition_8be2vx$ = rp + (length * 4 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_3 = offset + length - 1 | 0;
      for (var idx = offset; idx <= tmp$_3; idx++) {
        dst[idx] = view.getFloat32(rp, littleEndian);
        rp = rp + 4 | 0;
      }
      this.readPosition_8be2vx$ = rp;
    }
  };
  IoBuffer.prototype.readAvailable_kgymra$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_kgymra$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_6icyh1$ = function (dst, offset, length) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.readRemaining < (length * 8 | 0))
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' double float numbers');
    var rp = this.readPosition_8be2vx$;
    var platformEndian = this.platformEndian_0;
    if (platformEndian && (rp & 7) === 0) {
      var array = this.f64_0;
      var j = rp / 8 | 0;
      tmp$ = offset + length - 1 | 0;
      for (var i = offset; i <= tmp$; i++) {
        dst[i] = array[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      }
      this.readPosition_8be2vx$ = rp + (length * 8 | 0) | 0;
    }
     else if (platformEndian) {
      var array_0 = new Float64Array(this.content_8be2vx$, rp);
      var j_0 = 0;
      tmp$_1 = offset + length - 1 | 0;
      for (var i_0 = offset; i_0 <= tmp$_1; i_0++) {
        dst[i_0] = array_0[tmp$_2 = j_0, j_0 = tmp$_2 + 1 | 0, tmp$_2];
      }
      this.readPosition_8be2vx$ = rp + (length * 8 | 0) | 0;
    }
     else {
      var littleEndian = this.littleEndian_0;
      var view = this.view_0;
      tmp$_3 = offset + length - 1 | 0;
      for (var idx = offset; idx <= tmp$_3; idx++) {
        dst[idx] = view.getFloat64(rp, littleEndian);
        rp = rp + 8 | 0;
      }
      this.readPosition_8be2vx$ = rp;
    }
  };
  IoBuffer.prototype.readAvailable_6icyh1$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_6icyh1$(dst, offset, length);
    return size;
  };
  IoBuffer.prototype.read_fbg2zd$ = function (dst, offset, length) {
    return this.readFully_fbg2zd$(dst, offset, length);
  };
  IoBuffer.prototype.readFully_fbg2zd$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_8be2vx$;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      dst[offset + idx | 0] = i8[rp + idx | 0];
    }
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + length | 0;
  };
  IoBuffer.prototype.read_qmgm5g$ = function (dst, offset, length) {
    this.readFully_qmgm5g$(dst, offset, length);
  };
  IoBuffer.prototype.readFully_qmgm5g$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var to = new Int8Array(dst, offset, length);
    var rp = this.readPosition_8be2vx$;
    var rem = this.writePosition_8be2vx$ - rp | 0;
    var i8 = this.i8_0;
    if (rp === 0 && length === rem) {
      to.set(i8, offset);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        to[offset + i | 0] = i8[rp + i | 0];
      }
    }
     else {
      var from = new Int8Array(this.content_8be2vx$, rp, length);
      to.set(from);
    }
    this.readPosition_8be2vx$ = rp + length | 0;
  };
  IoBuffer.prototype.readAvailable_qmgm5g$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_qmgm5g$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readAvailable_bj0s3a$ = function (dst, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var a = dst.writeRemaining;
    var size = Math_0.min(a, readRemaining, length);
    this.readFully_bj0s3a$(dst, size);
    return size;
  };
  function IoBuffer$readFully$lambda() {
    return 'offset should be positive';
  }
  function IoBuffer$readFully$lambda_0() {
    throw new IndexOutOfBoundsException('');
  }
  IoBuffer.prototype.readFully_p0d4q1$ = function (dst, offset, length) {
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    if (length > dst.byteLength)
      throw IllegalArgumentException_init('Destination buffer overflow: length = ' + length + ', buffer capacity ' + dst.byteLength);
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral(IoBuffer$readFully$lambda);
      m.doFail();
    }
    if (!((offset + length | 0) <= dst.byteLength)) {
      var m_0 = new require$ObjectLiteral(IoBuffer$readFully$lambda_0);
      m_0.doFail();
    }
    this.readFully_qmgm5g$(dst.buffer, dst.byteOffset + offset | 0, length);
  };
  IoBuffer.prototype.readAvailable_p0d4q1$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(length, readRemaining);
    this.readFully_p0d4q1$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.read_gsnag5$ = function (dst, offset, length) {
    this.readFully_gsnag5$(dst, offset, length);
  };
  IoBuffer.prototype.readFully_gsnag5$ = function (dst, offset, length) {
    var tmp$;
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    var rp = this.readPosition_8be2vx$;
    var rem = this.writePosition_8be2vx$ - rp | 0;
    var i8 = this.i8_0;
    if (rp === 0 && rem === length) {
      dst.set(i8, offset);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        dst[offset + i | 0] = i8[rp + i | 0];
      }
    }
     else {
      var from = new Int8Array(this.content_8be2vx$, rp, length);
      dst.set(from, offset);
    }
    this.readPosition_8be2vx$ = rp + length | 0;
  };
  IoBuffer.prototype.readAvailable_gsnag5$ = function (dst, offset, length) {
    var readRemaining = this.readRemaining;
    if (readRemaining === 0)
      return -1;
    var size = Math_0.min(readRemaining, length);
    this.readFully_gsnag5$(dst, offset, size);
    return size;
  };
  IoBuffer.prototype.readFully_bj0s3a$$default = function (dst, length) {
    if (this.readRemaining < length)
      throw IllegalStateException_init('Not enough bytes available (' + this.readRemaining + ') to read ' + length + ' bytes');
    if (dst.writeRemaining < length)
      throw IllegalArgumentException_init('Not enough free space in dst buffer to write ' + length + ' bytes');
    var thisBuffer = this.i8_0.length === length ? this.i8_0 : new Int8Array(this.content_8be2vx$, this.readPosition_8be2vx$, length);
    var dstBuffer = dst.writePosition_8be2vx$ === 0 ? dst.i8_0 : new Int8Array(dst.content_8be2vx$, dst.writePosition_8be2vx$, length);
    dstBuffer.set(thisBuffer, this.writePosition_8be2vx$);
    dst.writePosition_8be2vx$ = dst.writePosition_8be2vx$ + length | 0;
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + length | 0;
  };
  IoBuffer.prototype.append_ezbsdh$ = function (csq, start, end) {
    var idx = this.appendChars_3peag4$(csq != null ? csq : 'null', start, end);
    if (idx !== end)
      throw IllegalStateException_init('Not enough free space to append char sequence');
    return this;
  };
  IoBuffer.prototype.append_gw00v9$ = function (csq) {
    return csq == null ? this.append_gw00v9$('null') : this.append_ezbsdh$(csq, 0, csq.length);
  };
  IoBuffer.prototype.append_8chfmy$ = function (csq, start, end) {
    var idx = this.appendChars_8chfmy$(csq, start, end);
    if (idx !== end)
      throw IllegalStateException_init('Not enough free space to append char sequence');
    return this;
  };
  IoBuffer.prototype.append_s8itvh$ = function (c) {
    var wp = this.writePosition_8be2vx$;
    var $receiver = this.i8_0;
    var v = c | 0;
    var remaining = this.limit_0 - wp | 0;
    var putUtf8Char_0$result;
    putUtf8Char_0$break: do {
      var tmp$;
      if (1 <= v && v <= 127) {
        if (remaining < 1) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(v);
        tmp$ = 1;
      }
       else if (v > 65535) {
        if (remaining < 4) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(240 | v >> 18 & 63);
        $receiver[wp + 1 | 0] = toByte(128 | v >> 12 & 63);
        $receiver[wp + 2 | 0] = toByte(128 | v >> 6 & 63);
        $receiver[wp + 3 | 0] = toByte(128 | v & 63);
        tmp$ = 4;
      }
       else if (v > 2047) {
        if (remaining < 3) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(224 | v >> 12 & 15);
        $receiver[wp + 1 | 0] = toByte(128 | v >> 6 & 63);
        $receiver[wp + 2 | 0] = toByte(128 | v & 63);
        tmp$ = 3;
      }
       else {
        if (remaining < 2) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(192 | v >> 6 & 31);
        $receiver[wp + 1 | 0] = toByte(128 | v & 63);
        tmp$ = 2;
      }
      putUtf8Char_0$result = tmp$;
    }
     while (false);
    var s = putUtf8Char_0$result;
    if (s === 0)
      this.notEnoughFreeSpace_0(c);
    this.writePosition_8be2vx$ = wp + s | 0;
    return this;
  };
  IoBuffer.prototype.notEnoughFreeSpace_0 = function (c) {
    throw IllegalStateException_init("Not Enough free space to append character '" + String.fromCharCode(c) + "', remaining " + this.writeRemaining + ' bytes');
  };
  IoBuffer.prototype.appendChars_8chfmy$ = function (csq, start, end) {
    var tmp$;
    var i8 = this.i8_0;
    var wp = this.writePosition_8be2vx$;
    var l = this.limit_0;
    var rc = end;
    for (var idx = start; idx < end; idx++) {
      var ch = csq[idx] | 0;
      if (ch > 127 || wp >= l) {
        rc = idx;
        break;
      }
      i8[tmp$ = wp, wp = tmp$ + 1 | 0, tmp$] = toByte(ch);
    }
    if (rc >= end || wp === l) {
      this.writePosition_8be2vx$ = wp;
      return rc;
    }
    return this.appendCharsUtf8_0(csq, rc, end, wp);
  };
  IoBuffer.prototype.isSurrogateCodePoint_0 = function ($receiver) {
    return 55296 <= $receiver && $receiver <= 57343;
  };
  IoBuffer.prototype.appendCharsUtf8_0 = function (csq, start, end, wp0) {
    var tmp$, tmp$_0, tmp$_1;
    var i8 = this.i8_0;
    var l = this.limit_0;
    var wp = wp0;
    var idx = start;
    loop_label: while (idx < end) {
      var ch = csq[tmp$ = idx, idx = tmp$ + 1 | 0, tmp$] | 0;
      if (55296 <= ch && ch <= 57343) {
        tmp$_1 = this.putUtf8CharSurrogate_0(i8, ch, csq[tmp$_0 = idx, idx = tmp$_0 + 1 | 0, tmp$_0] | 0, l - wp | 0, wp);
      }
       else {
        var remaining = l - wp | 0;
        var wp_0 = wp;
        var putUtf8Char_0$result;
        putUtf8Char_0$break: do {
          var tmp$_2;
          if (1 <= ch && ch <= 127) {
            if (remaining < 1) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(ch);
            tmp$_2 = 1;
          }
           else if (ch > 65535) {
            if (remaining < 4) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(240 | ch >> 18 & 63);
            i8[wp_0 + 1 | 0] = toByte(128 | ch >> 12 & 63);
            i8[wp_0 + 2 | 0] = toByte(128 | ch >> 6 & 63);
            i8[wp_0 + 3 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 4;
          }
           else if (ch > 2047) {
            if (remaining < 3) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(224 | ch >> 12 & 15);
            i8[wp_0 + 1 | 0] = toByte(128 | ch >> 6 & 63);
            i8[wp_0 + 2 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 3;
          }
           else {
            if (remaining < 2) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(192 | ch >> 6 & 31);
            i8[wp_0 + 1 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 2;
          }
          putUtf8Char_0$result = tmp$_2;
        }
         while (false);
        tmp$_1 = putUtf8Char_0$result;
      }
      var size = tmp$_1;
      if (size === 0) {
        return this.appendCharFailed_0(ch, idx, wp);
      }
      wp = wp + size | 0;
    }
    this.writePosition_8be2vx$ = wp;
    return end;
  };
  IoBuffer.prototype.appendChars_3peag4$ = function (csq, start, end) {
    var tmp$;
    var i8 = this.i8_0;
    var wp = this.writePosition_8be2vx$;
    var l = this.limit_0;
    var rc = end;
    for (var idx = start; idx < end; idx++) {
      var ch = csq.charCodeAt(idx) | 0;
      if (ch > 127 || wp >= l) {
        rc = idx;
        break;
      }
      i8[tmp$ = wp, wp = tmp$ + 1 | 0, tmp$] = toByte(ch);
    }
    if (rc >= end || wp === this.limit_0) {
      this.writePosition_8be2vx$ = wp;
      return rc;
    }
    return this.appendCharsUtf8_1(csq, rc, end, wp);
  };
  IoBuffer.prototype.appendCharsUtf8_1 = function (csq, start, end, wp0) {
    var tmp$, tmp$_0, tmp$_1;
    var i8 = this.i8_0;
    var l = this.limit_0;
    var wp = wp0;
    var idx = start;
    loop_label: while (idx < end) {
      var ch = csq.charCodeAt((tmp$ = idx, idx = tmp$ + 1 | 0, tmp$)) | 0;
      var remaining = l - wp | 0;
      if (55296 <= ch && ch <= 57343) {
        tmp$_1 = this.putUtf8CharSurrogate_0(i8, ch, csq.charCodeAt((tmp$_0 = idx, idx = tmp$_0 + 1 | 0, tmp$_0)) | 0, remaining, wp);
      }
       else {
        var wp_0 = wp;
        var putUtf8Char_0$result;
        putUtf8Char_0$break: do {
          var tmp$_2;
          if (1 <= ch && ch <= 127) {
            if (remaining < 1) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(ch);
            tmp$_2 = 1;
          }
           else if (ch > 65535) {
            if (remaining < 4) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(240 | ch >> 18 & 63);
            i8[wp_0 + 1 | 0] = toByte(128 | ch >> 12 & 63);
            i8[wp_0 + 2 | 0] = toByte(128 | ch >> 6 & 63);
            i8[wp_0 + 3 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 4;
          }
           else if (ch > 2047) {
            if (remaining < 3) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(224 | ch >> 12 & 15);
            i8[wp_0 + 1 | 0] = toByte(128 | ch >> 6 & 63);
            i8[wp_0 + 2 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 3;
          }
           else {
            if (remaining < 2) {
              putUtf8Char_0$result = 0;
              break putUtf8Char_0$break;
            }
            i8[wp_0] = toByte(192 | ch >> 6 & 31);
            i8[wp_0 + 1 | 0] = toByte(128 | ch & 63);
            tmp$_2 = 2;
          }
          putUtf8Char_0$result = tmp$_2;
        }
         while (false);
        tmp$_1 = putUtf8Char_0$result;
      }
      var size = tmp$_1;
      if (size === 0) {
        return this.appendCharFailed_0(ch, idx, wp);
      }
      wp = wp + size | 0;
    }
    this.writePosition_8be2vx$ = wp;
    return end;
  };
  IoBuffer.prototype.appendCharFailed_0 = function (ch, idx, wp) {
    this.writePosition_8be2vx$ = wp;
    return 55296 <= ch && ch <= 57343 ? idx - 2 | 0 : idx - 1 | 0;
  };
  IoBuffer.prototype.putUtf8Char_0 = function ($receiver, v, remaining, wp) {
    var tmp$;
    if (1 <= v && v <= 127) {
      if (remaining < 1)
        return 0;
      $receiver[wp] = toByte(v);
      tmp$ = 1;
    }
     else if (v > 65535) {
      if (remaining < 4)
        return 0;
      $receiver[wp] = toByte(240 | v >> 18 & 63);
      $receiver[wp + 1 | 0] = toByte(128 | v >> 12 & 63);
      $receiver[wp + 2 | 0] = toByte(128 | v >> 6 & 63);
      $receiver[wp + 3 | 0] = toByte(128 | v & 63);
      tmp$ = 4;
    }
     else if (v > 2047) {
      if (remaining < 3)
        return 0;
      $receiver[wp] = toByte(224 | v >> 12 & 15);
      $receiver[wp + 1 | 0] = toByte(128 | v >> 6 & 63);
      $receiver[wp + 2 | 0] = toByte(128 | v & 63);
      tmp$ = 3;
    }
     else {
      if (remaining < 2)
        return 0;
      $receiver[wp] = toByte(192 | v >> 6 & 31);
      $receiver[wp + 1 | 0] = toByte(128 | v & 63);
      tmp$ = 2;
    }
    return tmp$;
  };
  IoBuffer.prototype.putUtf8CharSurrogate_0 = function ($receiver, high, low, remaining, wp) {
    var highValue = (high & 2047) << 10;
    var lowValue = low & 1023;
    var value = 65536 | (highValue | lowValue);
    var putUtf8Char_0$result;
    putUtf8Char_0$break: do {
      var tmp$;
      if (1 <= value && value <= 127) {
        if (remaining < 1) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(value);
        tmp$ = 1;
      }
       else if (value > 65535) {
        if (remaining < 4) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(240 | value >> 18 & 63);
        $receiver[wp + 1 | 0] = toByte(128 | value >> 12 & 63);
        $receiver[wp + 2 | 0] = toByte(128 | value >> 6 & 63);
        $receiver[wp + 3 | 0] = toByte(128 | value & 63);
        tmp$ = 4;
      }
       else if (value > 2047) {
        if (remaining < 3) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(224 | value >> 12 & 15);
        $receiver[wp + 1 | 0] = toByte(128 | value >> 6 & 63);
        $receiver[wp + 2 | 0] = toByte(128 | value & 63);
        tmp$ = 3;
      }
       else {
        if (remaining < 2) {
          putUtf8Char_0$result = 0;
          break putUtf8Char_0$break;
        }
        $receiver[wp] = toByte(192 | value >> 6 & 31);
        $receiver[wp + 1 | 0] = toByte(128 | value & 63);
        tmp$ = 2;
      }
      putUtf8Char_0$result = tmp$;
    }
     while (false);
    return putUtf8Char_0$result;
  };
  IoBuffer.prototype.tryPeek = function () {
    var readPosition = this.readPosition_8be2vx$;
    var writePosition = this.writePosition_8be2vx$;
    if (readPosition === writePosition)
      return -1;
    this.readPosition_8be2vx$ = readPosition + 1 | 0;
    return this.i8_0[readPosition] & 255;
  };
  IoBuffer.prototype.discard_s8cxhz$ = function (n) {
    var a = Kotlin.Long.fromInt(this.readRemaining);
    var size = (a.compareTo_11rb$(n) <= 0 ? a : n).toInt();
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + size | 0;
    return Kotlin.Long.fromInt(size);
  };
  IoBuffer.prototype.write_mj6st8$ = function (array, offset, length) {
    var tmp$;
    if (this.writeRemaining < length)
      throw IllegalStateException_init('Not enough space left (' + this.writeRemaining + ') to write ' + length + ' bytes');
    var wp = this.writePosition_8be2vx$;
    var i8 = this.i8_0;
    tmp$ = length - 1 | 0;
    for (var idx = 0; idx <= tmp$; idx++) {
      i8[wp + idx | 0] = array[offset + idx | 0];
    }
    this.writePosition_8be2vx$ = wp + length | 0;
  };
  IoBuffer.prototype.writeFully_p0d4q1$ = function (src, offset, length) {
    if (this.writeRemaining < length)
      throw IllegalStateException_init('Not enough space left (' + this.writeRemaining + ') to write ' + length + ' bytes');
    var wp = this.writePosition_8be2vx$;
    var rem = this.limit_0 - wp | 0;
    var i8 = this.i8_0;
    if (length > rem)
      throw IndexOutOfBoundsException_init();
    var from = new Int8Array(src.buffer, src.byteOffset + offset | 0, length);
    i8.set(from, wp);
    this.writePosition_8be2vx$ = wp + length | 0;
  };
  IoBuffer.prototype.write_gsnag5$ = function (src, offset, length) {
    var tmp$;
    if (this.writeRemaining < length)
      throw IllegalStateException_init('Not enough space left (' + this.writeRemaining + ') to write ' + length + ' bytes');
    var wp = this.writePosition_8be2vx$;
    var rem = this.limit_0 - wp | 0;
    var i8 = this.i8_0;
    if (length > rem)
      throw IndexOutOfBoundsException_init();
    if (offset === 0 && length === src.length) {
      i8.set(src, wp);
    }
     else if (length < 100) {
      tmp$ = length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        i8[wp + i | 0] = src[offset + i | 0];
      }
    }
     else {
      var from = new Int8Array(src.buffer, src.byteOffset + offset | 0, length);
      i8.set(from, wp);
    }
    this.writePosition_8be2vx$ = wp + length | 0;
  };
  IoBuffer.prototype.readLong = function () {
    if (this.readRemaining < 8)
      throw IllegalStateException_init('Not enough bytes available to read a long');
    return this.readLongUnsafe_0();
  };
  IoBuffer.prototype.readLongUnsafe_0 = function () {
    var tmp$;
    var m = L4294967295;
    var a = Kotlin.Long.fromInt(this.readIntUnsafe_0()).and(m);
    var b = Kotlin.Long.fromInt(this.readIntUnsafe_0()).and(m);
    if (this.littleEndian_0) {
      tmp$ = b.shiftLeft(32).or(a);
    }
     else {
      tmp$ = a.shiftLeft(32).or(b);
    }
    return tmp$;
  };
  IoBuffer.prototype.writeLong_s8cxhz$ = function (v) {
    if (this.writeRemaining < 8)
      throw IllegalStateException_init('Not enough space left to write a long');
    var m = L4294967295;
    var a = v.shiftRight(32).toInt();
    var b = v.and(m).toInt();
    if (this.littleEndian_0) {
      this.writeInt_za3lpa$(b);
      this.writeInt_za3lpa$(a);
    }
     else {
      this.writeInt_za3lpa$(a);
      this.writeInt_za3lpa$(b);
    }
  };
  IoBuffer.prototype.discardExact_za3lpa$ = function (n) {
    var rem = this.readRemaining;
    if (n > rem)
      throw IllegalArgumentException_init("Can't discard " + n + ' bytes: only ' + rem + ' bytes available');
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + n | 0;
  };
  IoBuffer.prototype.pushBack_za3lpa$ = function (n) {
    if (this.readPosition_8be2vx$ < n)
      throw IllegalStateException_init('Nothing to push back');
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ - n | 0;
  };
  IoBuffer.prototype.resetForWrite = function () {
    this.resetForWrite_za3lpa$(this.content_8be2vx$.byteLength);
  };
  function IoBuffer$resetForWrite$lambda(closure$limit) {
    return function () {
      return "Limit shouldn't be negative: " + closure$limit;
    };
  }
  function IoBuffer$resetForWrite$lambda_0(closure$limit, this$IoBuffer) {
    return function () {
      return "Limit shouldn't be bigger than buffer size: limit = " + closure$limit + ', size = ' + this$IoBuffer.content_8be2vx$.byteLength;
    };
  }
  IoBuffer.prototype.resetForWrite_za3lpa$ = function (limit) {
    if (!(limit >= 0)) {
      var m = new require$ObjectLiteral(IoBuffer$resetForWrite$lambda(limit));
      m.doFail();
    }
    if (!(limit <= this.content_8be2vx$.byteLength)) {
      var m_0 = new require$ObjectLiteral(IoBuffer$resetForWrite$lambda_0(limit, this));
      m_0.doFail();
    }
    this.readPosition_8be2vx$ = 0;
    this.writePosition_8be2vx$ = 0;
    this.limit_0 = limit;
  };
  IoBuffer.prototype.resetForRead = function () {
    this.readPosition_8be2vx$ = 0;
    this.limit_0 = this.content_8be2vx$.byteLength;
    this.writePosition_8be2vx$ = this.limit_0;
  };
  IoBuffer.prototype.isExclusivelyOwned = function () {
    return this.refCount_0 === 1;
  };
  IoBuffer.prototype.makeView = function () {
    var tmp$;
    var o = (tmp$ = this.origin_8be2vx$) != null ? tmp$ : this;
    o.acquire_0();
    var view = new IoBuffer(this.content_8be2vx$, o);
    view.attachment = this.attachment;
    view.readPosition_8be2vx$ = this.readPosition_8be2vx$;
    view.writePosition_8be2vx$ = this.writePosition_8be2vx$;
    view.limit_0 = this.limit_0;
    return view;
  };
  IoBuffer.prototype.release_cqjh9i$ = function (pool) {
    if (this.release_0()) {
      this.resetForWrite();
      if (this.origin_8be2vx$ != null) {
        this.unlink_8be2vx$();
        this.origin_8be2vx$.release_cqjh9i$(pool);
      }
       else {
        pool.recycle_trkh7z$(this);
      }
    }
  };
  IoBuffer.prototype.writeBuffer_bj0s3a$ = function (src, length) {
    this.writeFully_bj0s3a$(src, length);
    return length;
  };
  IoBuffer.prototype.$updateRemaining$_za3lpa$ = function (remaining) {
  };
  IoBuffer.prototype.$ensureNext$_g6eaik$ = function (current) {
    return null;
  };
  IoBuffer.prototype.$prepareRead$_za3lpa$ = function (minSize) {
    return this.readRemaining >= minSize ? this : null;
  };
  IoBuffer.prototype.$afterWrite$ = function () {
  };
  IoBuffer.prototype.$prepareWrite$_za3lpa$ = function (n) {
    var tmp$;
    tmp$ = this.writeRemaining >= n ? this : null;
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Not enough space in the chunk');
    }
    return tmp$;
  };
  IoBuffer.prototype.flush = function () {
  };
  function IoBuffer$readText$lambda(closure$max) {
    return function () {
      return "max shouldn't be negative: " + closure$max;
    };
  }
  IoBuffer.prototype.readText_pzahgr$ = function (decoder, out, lastBuffer, max) {
    if (max === void 0)
      max = 2147483647;
    var tmp$, tmp$_0, tmp$_1;
    if (!(max >= 0)) {
      var m = new require$ObjectLiteral(IoBuffer$readText$lambda(max));
      m.doFail();
    }
    if (this.readRemaining === 0)
      return 0;
    var buffer = this.i8_0.subarray(this.readPosition_8be2vx$, this.writePosition_8be2vx$);
    var stream = !lastBuffer;
    var decodeStream$result;
    var tmp$_2;
    try {
      var tmp$_3;
      if (stream) {
        tmp$_3 = decoder.decode(buffer, STREAM_TRUE);
      }
       else {
        tmp$_3 = decoder.decode(buffer);
      }
      decodeStream$result = tmp$_3;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_2 = t.message) != null ? tmp$_2 : 'no cause provided'));
      }
       else
        throw t;
    }
    var rawResult = decodeStream$result;
    if (rawResult.length <= max) {
      this.readPosition_8be2vx$ = this.writePosition_8be2vx$;
      tmp$_1 = rawResult;
    }
     else {
      var actual = rawResult.substring(0, max);
      var subDecoder = TextDecoderFatal(decoder.encoding, true);
      var subArray = new Int8Array(1);
      var subDecoded = 0;
      tmp$ = this.readPosition_8be2vx$;
      tmp$_0 = this.writePosition_8be2vx$;
      for (var i = tmp$; i < tmp$_0; i++) {
        subArray[0] = this.i8_0[i];
        var tmp$_4 = subDecoded;
        var decodeStream$result_0;
        var tmp$_5;
        try {
          var tmp$_6;
          if (true) {
            tmp$_6 = subDecoder.decode(subArray, STREAM_TRUE);
          }
           else {
            tmp$_6 = subDecoder.decode(subArray);
          }
          decodeStream$result_0 = tmp$_6;
        }
         catch (t_0) {
          if (Kotlin.isType(t_0, Throwable)) {
            throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_5 = t_0.message) != null ? tmp$_5 : 'no cause provided'));
          }
           else
            throw t_0;
        }
        subDecoded = tmp$_4 + decodeStream$result_0.length | 0;
        if (subDecoded >= max) {
          this.readPosition_8be2vx$ = i + 1 | 0;
          break;
        }
      }
      if (subDecoded < max) {
        var tmp$_7 = subDecoded;
        var decodeWrap$result;
        var tmp$_8;
        try {
          decodeWrap$result = subDecoder.decode().length;
        }
         catch (t_1) {
          if (Kotlin.isType(t_1, Throwable)) {
            throw new MalformedInputException('Failed to decode bytes: ' + ((tmp$_8 = t_1.message) != null ? tmp$_8 : 'no cause provided'));
          }
           else
            throw t_1;
        }
        subDecoded = tmp$_7 + decodeWrap$result | 0;
        if (subDecoded >= max) {
          this.readPosition_8be2vx$ = this.writePosition_8be2vx$;
        }
         else {
          throw IllegalStateException_init("Failed to readText: don't know how to update read position");
        }
      }
      tmp$_1 = actual;
    }
    var result = tmp$_1;
    out.append_gw00v9$(result);
    return result.length;
  };
  IoBuffer.prototype.readDirect_d74r1$ = function (block) {
    if (this.content_8be2vx$ === IoBuffer$Companion_getInstance().EmptyBuffer_0) {
      if (!(block(this.content_8be2vx$) === 0)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init(message.toString());
      }
      return;
    }
    var rc = block(this.content_8be2vx$.slice(this.readPosition_8be2vx$, this.writePosition_8be2vx$));
    if (!(rc >= 0)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ + rc | 0;
  };
  function IoBuffer$writeBufferPrepend$lambda(closure$size, this$IoBuffer) {
    return function () {
      return 'size should be greater than startGap (size = ' + closure$size + ', startGap = ' + this$IoBuffer.startGap + ')';
    };
  }
  IoBuffer.prototype.writeBufferPrepend_2fdm73$ = function (other) {
    var size = other.readRemaining;
    if (!(size <= this.startGap)) {
      var m = new require$ObjectLiteral(IoBuffer$writeBufferPrepend$lambda(size, this));
      m.doFail();
    }
    var otherEnd = other.readPosition_8be2vx$ + size | 0;
    var sub = other.i8_0.subarray(other.readPosition_8be2vx$, otherEnd);
    this.i8_0.set(sub, this.readPosition_8be2vx$ - size | 0);
    this.readPosition_8be2vx$ = this.readPosition_8be2vx$ - size | 0;
    other.readPosition_8be2vx$ = other.readPosition_8be2vx$ + size | 0;
  };
  function IoBuffer$writeBufferAppend$lambda(closure$size, this$IoBuffer) {
    return function () {
      return 'should should be greater than write space + end gap (size = ' + closure$size + ', ' + ('writeRemaining = ' + this$IoBuffer.writeRemaining + ', endGap = ' + this$IoBuffer.endGap + ', rem+gap = ' + (this$IoBuffer.writeRemaining + this$IoBuffer.endGap | 0));
    };
  }
  IoBuffer.prototype.writeBufferAppend_ehtrw3$ = function (other, maxSize) {
    var a = other.readRemaining;
    var size = Math_0.min(a, maxSize);
    if (!(size <= (this.writeRemaining + this.endGap | 0))) {
      var m = new require$ObjectLiteral(IoBuffer$writeBufferAppend$lambda(size, this));
      m.doFail();
    }
    var otherEnd = other.readPosition_8be2vx$ + size | 0;
    var sub = other.i8_0.subarray(other.readPosition_8be2vx$, otherEnd);
    this.i8_0.set(sub, this.writePosition_8be2vx$);
    this.writePosition_8be2vx$ = this.writePosition_8be2vx$ + size | 0;
    if (this.writePosition_8be2vx$ > this.limit_0) {
      this.limit_0 = this.writePosition_8be2vx$;
    }
    other.readPosition_8be2vx$ = other.readPosition_8be2vx$ + size | 0;
  };
  IoBuffer.prototype.unlink_8be2vx$ = function () {
    if (this.refCount_0 !== 0)
      throw IllegalStateException_init('Unable to unlink buffers: buffer view is in use');
    this.content_8be2vx$ = IoBuffer$Companion_getInstance().EmptyBuffer_0;
    this.i8_0 = IoBuffer$Companion_getInstance().Empty8_0;
    this.view_0 = IoBuffer$Companion_getInstance().EmptyDataView_0;
    this.resetForWrite();
  };
  IoBuffer.prototype.acquire_0 = function () {
    var v = this.refCount_0;
    if (v === 0)
      throw IllegalStateException_init('Failed to acquire buffer: buffer has been already released');
    this.refCount_0 = v + 1 | 0;
  };
  IoBuffer.prototype.release_0 = function () {
    if (this === IoBuffer$Companion_getInstance().Empty)
      throw IllegalStateException_init('attempted to release IoBuffer.Empty');
    var v = this.refCount_0;
    if (v === 0)
      throw IllegalStateException_init('Unable to release: buffer has been already released');
    var newCount = v - 1 | 0;
    this.refCount_0 = newCount;
    return newCount === 0;
  };
  IoBuffer.prototype.close = function () {
    throw UnsupportedOperationException_init('close for buffer view is not supported');
  };
  function IoBuffer$Companion() {
    IoBuffer$Companion_instance = this;
    this.EmptyBuffer_0 = new ArrayBuffer(0);
    this.EmptyDataView_0 = new DataView(this.EmptyBuffer_0);
    this.Empty8_0 = new Int8Array(0);
    this.Empty16_0 = new Int16Array(0);
    this.Empty32_0 = new Int32Array(0);
    this.EmptyF32_0 = new Float32Array(0);
    this.EmptyF64_0 = new Float64Array(0);
    this.Empty = new IoBuffer(this.EmptyBuffer_0, null);
    this.Pool = new IoBuffer$Companion$Pool$ObjectLiteral(100);
    this.NoPool = new IoBuffer$Companion$NoPool$ObjectLiteral();
    this.EmptyPool = EmptyBufferPoolImpl_getInstance();
  }
  function IoBuffer$Companion$Pool$ObjectLiteral(capacity) {
    DefaultPool.call(this, capacity);
  }
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.produceInstance = function () {
    return new IoBuffer(new ArrayBuffer(4096), null);
  };
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.clearInstance_trkh7z$ = function (instance) {
    var $receiver = DefaultPool.prototype.clearInstance_trkh7z$.call(this, instance);
    instance.resetForWrite();
    instance.next = null;
    instance.attachment = null;
    if (instance.refCount_0 !== 0)
      throw IllegalStateException_init('Unable to clear instance: refCount is ' + instance.refCount_0 + ' != 0');
    instance.refCount_0 = 1;
    return $receiver;
  };
  function IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda(closure$instance) {
    return function () {
      return 'unable to recycle buffer: buffer view is in use (refCount = ' + closure$instance.refCount_0 + ')';
    };
  }
  function IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda_0() {
    return "Unable to recycle buffer view: view copy shouldn't be recycled";
  }
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.validateInstance_trkh7z$ = function (instance) {
    DefaultPool.prototype.validateInstance_trkh7z$.call(this, instance);
    if (!(instance.refCount_0 === 0)) {
      var m = new require$ObjectLiteral(IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda(instance));
      m.doFail();
    }
    if (!(instance.origin_8be2vx$ == null)) {
      var m_0 = new require$ObjectLiteral(IoBuffer$Companion$Pool$ObjectLiteral$validateInstance$lambda_0);
      m_0.doFail();
    }
  };
  IoBuffer$Companion$Pool$ObjectLiteral.prototype.disposeInstance_trkh7z$ = function (instance) {
    instance.unlink_8be2vx$();
  };
  IoBuffer$Companion$Pool$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DefaultPool]
  };
  function IoBuffer$Companion$NoPool$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  IoBuffer$Companion$NoPool$ObjectLiteral.prototype.borrow = function () {
    return new IoBuffer(new ArrayBuffer(4096), null);
  };
  IoBuffer$Companion$NoPool$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NoPoolImpl]
  };
  IoBuffer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IoBuffer$Companion_instance = null;
  function IoBuffer$Companion_getInstance() {
    if (IoBuffer$Companion_instance === null) {
      new IoBuffer$Companion();
    }
    return IoBuffer$Companion_instance;
  }
  IoBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IoBuffer',
    interfaces: [Output, Input]
  };
  function Output() {
  }
  Output.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Output',
    interfaces: [Closeable, Appendable]
  };
  var PACKET_MAX_COPY_SIZE;
  var BUFFER_VIEW_POOL_SIZE;
  var BUFFER_VIEW_SIZE;
  function BytePacketBuilder(headerSizeHint) {
    if (headerSizeHint === void 0)
      headerSizeHint = 0;
    return new BytePacketBuilder_0(headerSizeHint, IoBuffer$Companion_getInstance().Pool);
  }
  function EOFException(message) {
    Exception_init(message, this);
    this.name = 'EOFException';
  }
  EOFException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EOFException',
    interfaces: [Exception]
  };
  function discardUntilDelimiterImpl($receiver, delimiter) {
    var content = new Int8Array($receiver.content_8be2vx$);
    var idx = $receiver.readPosition_8be2vx$;
    var end = $receiver.writePosition_8be2vx$;
    while (idx < end && content[idx] !== delimiter) {
      idx = idx + 1 | 0;
    }
    var start = $receiver.readPosition_8be2vx$;
    $receiver.readPosition_8be2vx$ = idx;
    return idx - start | 0;
  }
  function discardUntilDelimitersImpl($receiver, delimiter1, delimiter2) {
    var content = new Int8Array($receiver.content_8be2vx$);
    var idx = $receiver.readPosition_8be2vx$;
    var end = $receiver.writePosition_8be2vx$;
    while (idx < end) {
      var v = content[idx];
      if (v === delimiter1 || v === delimiter2)
        break;
      idx = idx + 1 | 0;
    }
    var start = $receiver.readPosition_8be2vx$;
    $receiver.readPosition_8be2vx$ = idx;
    return idx - start | 0;
  }
  function readUntilDelimiterImpl($receiver, delimiter, dst, offset, length) {
    if (!(offset >= 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!(length >= 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
    if (!((offset + length | 0) <= dst.length)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }
    var tmp$;
    var array = new Int8Array($receiver.content_8be2vx$);
    var start = $receiver.readPosition_8be2vx$;
    var i = start;
    var tmp$_0 = i;
    var b = $receiver.readRemaining;
    var end = tmp$_0 + Math_0.min(length, b) | 0;
    while (true) {
      var tmp$_1 = i < end;
      if (tmp$_1) {
        tmp$_1 = !(array[i] === delimiter);
      }
      if (!tmp$_1)
        break;
      i = i + 1 | 0;
    }
    var copied = i - start | 0;
    var dstArray = Kotlin.isType(tmp$ = dst, Int8Array) ? tmp$ : throwCCE();
    dstArray.set(array.subarray(start, end), offset);
    $receiver.readPosition_8be2vx$ = i;
    return copied;
  }
  function readUntilDelimitersImpl($receiver, delimiter1, delimiter2, dst, offset, length) {
    if (!(offset >= 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!(length >= 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
    if (!((offset + length | 0) <= dst.length)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }
    if (!(delimiter1 !== delimiter2)) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init(message_2.toString());
    }
    var tmp$;
    var array = new Int8Array($receiver.content_8be2vx$);
    var start = $receiver.readPosition_8be2vx$;
    var i = start;
    var tmp$_0 = i;
    var b = $receiver.readRemaining;
    var end = tmp$_0 + Math_0.min(length, b) | 0;
    while (true) {
      var tmp$_1 = i < end;
      if (tmp$_1) {
        var it = array[i];
        tmp$_1 = !(it === delimiter1 || it === delimiter2);
      }
      if (!tmp$_1)
        break;
      i = i + 1 | 0;
    }
    var copied = i - start | 0;
    var dstArray = Kotlin.isType(tmp$ = dst, Int8Array) ? tmp$ : throwCCE();
    dstArray.set(array.subarray(start, end), offset);
    $receiver.readPosition_8be2vx$ = i;
    return copied;
  }
  function readUntilDelimiterImpl_0($receiver, delimiter, dst) {
    var array = new Int8Array($receiver.content_8be2vx$);
    var i = {v: $receiver.readPosition_8be2vx$};
    var copiedTotal = {v: 0};
    try {
      var tail = dst.$prepareWrite$_za3lpa$(1);
      while (true) {
        var chunk = tail;
        chunk.writeFully_bj0s3a$(chunk, 0);
        var start = i.v;
        var a = i.v + chunk.writeRemaining | 0;
        var b = $receiver.writePosition_8be2vx$;
        var end = Math_0.min(a, b);
        while (true) {
          var tmp$ = i.v < end;
          if (tmp$) {
            tmp$ = !(array[i.v] === delimiter);
          }
          if (!tmp$)
            break;
          i.v = i.v + 1 | 0;
        }
        var size = i.v - start | 0;
        (new Int8Array(chunk.content_8be2vx$)).set(array.subarray(start, i.v), chunk.writePosition_8be2vx$);
        chunk.writePosition_8be2vx$ = chunk.writePosition_8be2vx$ + size | 0;
        copiedTotal.v = copiedTotal.v + size | 0;
        if (!(chunk.writeRemaining === 0 && i.v < end))
          break;
        tail = dst.$prepareWrite$_za3lpa$(1);
      }
    }
    finally {
      dst.$afterWrite$();
    }
    $receiver.readPosition_8be2vx$ = i.v;
    return copiedTotal.v;
  }
  function readUntilDelimitersImpl_0($receiver, delimiter1, delimiter2, dst) {
    if (!(delimiter1 !== delimiter2)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    var array = new Int8Array($receiver.content_8be2vx$);
    var i = {v: $receiver.readPosition_8be2vx$};
    var copiedTotal = {v: 0};
    try {
      var tail = dst.$prepareWrite$_za3lpa$(1);
      while (true) {
        var chunk = tail;
        chunk.writeFully_bj0s3a$(chunk, 0);
        var start = i.v;
        var a = i.v + chunk.writeRemaining | 0;
        var b = $receiver.writePosition_8be2vx$;
        var end = Math_0.min(a, b);
        while (true) {
          var tmp$ = i.v < end;
          if (tmp$) {
            var it = array[i.v];
            tmp$ = !(it === delimiter1 || it === delimiter2);
          }
          if (!tmp$)
            break;
          i.v = i.v + 1 | 0;
        }
        var size = i.v - start | 0;
        (new Int8Array(chunk.content_8be2vx$)).set(array.subarray(start, i.v), chunk.writePosition_8be2vx$);
        chunk.writePosition_8be2vx$ = chunk.writePosition_8be2vx$ + size | 0;
        copiedTotal.v = copiedTotal.v + size | 0;
        if (!(chunk.writeRemaining === 0 && i.v < end))
          break;
        tail = dst.$prepareWrite$_za3lpa$(1);
      }
    }
    finally {
      dst.$afterWrite$();
    }
    $receiver.readPosition_8be2vx$ = i.v;
    return copiedTotal.v;
  }
  var readUntilImpl = wrapFunction(function () {
    var Math_0 = Math;
    return function ($receiver, predicate, dst, offset, length) {
      var tmp$;
      var array = new Int8Array($receiver.content_8be2vx$);
      var start = $receiver.readPosition_8be2vx$;
      var i = start;
      var tmp$_0 = i;
      var b = $receiver.readRemaining;
      var end = tmp$_0 + Math_0.min(length, b) | 0;
      while (i < end && !predicate(array[i])) {
        i = i + 1 | 0;
      }
      var copied = i - start | 0;
      var dstArray = Kotlin.isType(tmp$ = dst, Int8Array) ? tmp$ : throwCCE();
      dstArray.set(array.subarray(start, end), offset);
      $receiver.readPosition_8be2vx$ = i;
      return copied;
    };
  });
  var readUntilImpl_0 = wrapFunction(function () {
    var Math_0 = Math;
    return function ($receiver, predicate, dst) {
      var array = new Int8Array($receiver.content_8be2vx$);
      var i = {v: $receiver.readPosition_8be2vx$};
      var copiedTotal = {v: 0};
      try {
        var tail = dst.$prepareWrite$_za3lpa$(1);
        while (true) {
          var chunk = tail;
          chunk.writeFully_bj0s3a$(chunk, 0);
          var start = i.v;
          var a = i.v + chunk.writeRemaining | 0;
          var b = $receiver.writePosition_8be2vx$;
          var end = Math_0.min(a, b);
          while (i.v < end && !predicate(array[i.v])) {
            i.v = i.v + 1 | 0;
          }
          var size = i.v - start | 0;
          (new Int8Array(chunk.content_8be2vx$)).set(array.subarray(start, i.v), chunk.writePosition_8be2vx$);
          chunk.writePosition_8be2vx$ = chunk.writePosition_8be2vx$ + size | 0;
          copiedTotal.v = copiedTotal.v + size | 0;
          if (!(chunk.writeRemaining === 0 && i.v < end))
            break;
          tail = dst.$prepareWrite$_za3lpa$(1);
        }
      }
      finally {
        dst.$afterWrite$();
      }
      $receiver.readPosition_8be2vx$ = i.v;
      return copiedTotal.v;
    };
  });
  function String_0(bytes, offset, length, charset) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = bytes.length;
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    if (offset < 0 || length < 0 || (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var i8 = bytes;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var view = new IoBuffer(buffer, null);
    view.resetForRead();
    var packet = ByteReadPacket_init(view, IoBuffer$Companion_getInstance().NoPool);
    return decode_0(charset.newDecoder(), packet, 2147483647);
  }
  function checkIndices(offset, length, bytes) {
    if (!(offset >= 0)) {
      throw new IndexOutOfBoundsException('offset (' + offset + ") shouldn't be negative");
    }
    if (!(length >= 0)) {
      throw new IndexOutOfBoundsException('length (' + length + ") shouldn't be negative");
    }
    if (!((offset + length | 0) <= bytes.length)) {
      throw new IndexOutOfBoundsException('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init();
  }
  function getCharsInternal($receiver, dst, dstOffset) {
    var tmp$;
    var length = $receiver.length;
    if (!((dstOffset + length | 0) <= dst.length)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var dstIndex = dstOffset;
    for (var srcIndex = 0; srcIndex < length; srcIndex++) {
      dst[tmp$ = dstIndex, dstIndex = tmp$ + 1 | 0, tmp$] = $receiver.charCodeAt(srcIndex);
    }
  }
  function readText($receiver, encoding, max) {
    if (max === void 0)
      max = 2147483647;
    return readText_4($receiver, Charset$Companion_getInstance().forName_61zpoe$(encoding), max);
  }
  function readText_0($receiver, encoding, out, max) {
    if (encoding === void 0)
      encoding = 'UTF-8';
    if (max === void 0)
      max = 2147483647;
    return readText_2($receiver, out, Charset$Companion_getInstance().forName_61zpoe$(encoding), max);
  }
  var STREAM_TRUE;
  var FATAL_TRUE;
  function TextDecoderFatal(encoding, fatal) {
    if (fatal === void 0)
      fatal = true;
    if (typeof TextDecoder == 'undefined') {
      var module_0 = require('text-encoding');
      if (module_0.TextDecoder === undefined)
        throw IllegalStateException_init('TextDecoder is not supported by your browser and no text-encoding module found');
      var ctor = module_0.TextDecoder;
      var objPrototype = Object.create(ctor.prototype);
      return fatal ? ctor.call(objPrototype, encoding, FATAL_TRUE) : ctor.call(objPrototype, encoding);
    }
    return fatal ? new TextDecoder(encoding, FATAL_TRUE) : new TextDecoder(encoding);
  }
  var decodeStream = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.decodeStream_ggodax$', wrapFunction(function () {
    var MalformedInputException_init = _.kotlinx.io.charsets.MalformedInputException;
    var Throwable = Error;
    return function ($receiver, buffer, stream) {
      var tmp$;
      try {
        var tmp$_0;
        if (stream) {
          tmp$_0 = $receiver.decode(buffer, STREAM_TRUE);
        }
         else {
          tmp$_0 = $receiver.decode(buffer);
        }
        return tmp$_0;
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          throw new MalformedInputException_init('Failed to decode bytes: ' + ((tmp$ = t.message) != null ? tmp$ : 'no cause provided'));
        }
         else
          throw t;
      }
    };
  }));
  var decodeStream_0 = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.decodeStream_8074i4$', wrapFunction(function () {
    var MalformedInputException_init = _.kotlinx.io.charsets.MalformedInputException;
    var Throwable = Error;
    return function ($receiver, buffer, stream) {
      var tmp$;
      try {
        var tmp$_0;
        if (stream) {
          tmp$_0 = $receiver.decode(buffer, STREAM_TRUE);
        }
         else {
          tmp$_0 = $receiver.decode(buffer);
        }
        return tmp$_0;
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          throw new MalformedInputException_init('Failed to decode bytes: ' + ((tmp$ = t.message) != null ? tmp$ : 'no cause provided'));
        }
         else
          throw t;
      }
    };
  }));
  var decodeWrap = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.decodeWrap_i3ch5z$', wrapFunction(function () {
    var MalformedInputException_init = _.kotlinx.io.charsets.MalformedInputException;
    var Throwable = Error;
    return function (block) {
      var tmp$;
      try {
        return block();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          throw new MalformedInputException_init('Failed to decode bytes: ' + ((tmp$ = t.message) != null ? tmp$ : 'no cause provided'));
        }
         else
          throw t;
      }
    };
  }));
  function TextEncoderCtor() {
    if (typeof TextEncoder == 'undefined') {
      var module_0 = require('text-encoding');
      if (module_0.TextEncoder === undefined)
        throw IllegalStateException_init('TextEncoder is not supported by your browser and no text-encoding module found');
      var ctor = module_0.TextEncoder;
      var objPrototype = Object.create(ctor.prototype);
      return ctor.call(objPrototype);
    }
    return new TextEncoder();
  }
  function readArrayBuffer($receiver, n) {
    if (n === void 0) {
      var $receiver_0 = $receiver.remaining;
      var message = 'Unable to make a new ArrayBuffer: packet is too big';
      if ($receiver_0.compareTo_11rb$(L2147483647) > 0)
        throw IllegalArgumentException_init(message);
      n = $receiver_0.toInt();
    }
    var buffer = new ArrayBuffer(n);
    $receiver.readFully_qmgm5g$(buffer, 0, n);
    return buffer;
  }
  function writeFully($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.byteLength - offset | 0;
    writeFully_0($receiver, new Int8Array(src), offset, length);
  }
  function writeFully_0($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.length - offset | 0;
    var written = {v: 0};
    var rem = {v: length};
    while (rem.v > 0) {
      var buffer = $receiver.tail;
      if (buffer.writeRemaining < 1) {
        buffer = $receiver.appendNewBuffer();
      }
      var bb = buffer;
      var a = bb.writeRemaining;
      var b = rem.v;
      var size = Math_0.min(a, b);
      bb.write_gsnag5$(src, written.v + offset | 0, size);
      written.v = written.v + size | 0;
      rem.v = rem.v - size | 0;
      $receiver.addSize_za3lpa$(size);
    }
  }
  function sendPacket($receiver, packet) {
    $receiver.send(readArrayBuffer(packet));
  }
  var sendPacket_0 = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.sendPacket_wglm47$', wrapFunction(function () {
    var sendPacket = _.kotlinx.io.js.sendPacket_tx3ju1$;
    var BytePacketBuilder = _.kotlinx.io.core.BytePacketBuilder_za3lpa$;
    var Throwable = Error;
    return function ($receiver, block) {
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
      sendPacket($receiver, buildPacket$result);
    };
  }));
  var packet = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.packet_lwnq0v$', wrapFunction(function () {
    var IoBuffer_init = _.kotlinx.io.core.IoBuffer;
    var ByteReadPacket_init = _.kotlinx.io.core.ByteReadPacket_init_3npcxq$;
    return function ($receiver) {
      return ByteReadPacket_init(new IoBuffer_init($receiver.data, null), IoBuffer_init.Companion.NoPool);
    };
  }));
  var sendPacket_1 = defineInlineFunction('kotlinx-io-js.kotlinx.io.js.sendPacket_eks1ru$', wrapFunction(function () {
    var sendPacket = _.kotlinx.io.js.sendPacket_8zvei$;
    var BytePacketBuilder = _.kotlinx.io.core.BytePacketBuilder_za3lpa$;
    var Throwable = Error;
    return function ($receiver, block) {
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
      sendPacket($receiver, buildPacket$result);
    };
  }));
  function sendPacket_2($receiver, packet) {
    $receiver.send(readArrayBuffer(packet));
  }
  function responsePacket($receiver) {
    var tmp$;
    tmp$ = $receiver.responseType;
    if (equals(tmp$, 'arraybuffer'))
      return ByteReadPacket_init(new IoBuffer($receiver.response, null), IoBuffer$Companion_getInstance().NoPool);
    else {
      if (equals(tmp$, ''))
        return ByteReadPacket$Companion_getInstance().Empty;
      else
        throw IllegalStateException_init('Incompatible type ' + $receiver.responseType + ': only ARRAYBUFFER and EMPTY are supported');
    }
  }
  function DefaultPool(capacity) {
    this.capacity_3ksqj2$_0 = capacity;
    this.instances_3r1z6a$_0 = Kotlin.newArray(this.capacity, null);
    this.size_xp9yxl$_0 = 0;
  }
  Object.defineProperty(DefaultPool.prototype, 'capacity', {
    get: function () {
      return this.capacity_3ksqj2$_0;
    }
  });
  DefaultPool.prototype.disposeInstance_trkh7z$ = function (instance) {
  };
  DefaultPool.prototype.clearInstance_trkh7z$ = function (instance) {
    return instance;
  };
  DefaultPool.prototype.validateInstance_trkh7z$ = function (instance) {
  };
  DefaultPool.prototype.borrow = function () {
    var tmp$;
    if (this.size_xp9yxl$_0 === 0)
      return this.produceInstance();
    var idx = (this.size_xp9yxl$_0 = this.size_xp9yxl$_0 - 1 | 0, this.size_xp9yxl$_0);
    var instance = Kotlin.isType(tmp$ = this.instances_3r1z6a$_0[idx], Any) ? tmp$ : throwCCE();
    this.instances_3r1z6a$_0[idx] = null;
    return this.clearInstance_trkh7z$(instance);
  };
  DefaultPool.prototype.recycle_trkh7z$ = function (instance) {
    var tmp$;
    this.validateInstance_trkh7z$(instance);
    if (this.size_xp9yxl$_0 === this.capacity)
      this.disposeInstance_trkh7z$(instance);
    this.instances_3r1z6a$_0[tmp$ = this.size_xp9yxl$_0, this.size_xp9yxl$_0 = tmp$ + 1 | 0, tmp$] = instance;
  };
  DefaultPool.prototype.dispose = function () {
    var tmp$, tmp$_0;
    tmp$ = this.size_xp9yxl$_0;
    for (var i = 0; i < tmp$; i++) {
      var instance = Kotlin.isType(tmp$_0 = this.instances_3r1z6a$_0[i], Any) ? tmp$_0 : throwCCE();
      this.instances_3r1z6a$_0[i] = null;
      this.disposeInstance_trkh7z$(instance);
    }
    this.size_xp9yxl$_0 = 0;
  };
  DefaultPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultPool',
    interfaces: [ObjectPool]
  };
  function encode($receiver, input, fromIndex, toIndex, dst) {
    var start = {v: fromIndex};
    if (start.v >= toIndex)
      return;
    try {
      var tail = dst.$prepareWrite$_za3lpa$(1);
      var size;
      while (true) {
        var block$result;
        var rc = encodeImpl($receiver, input, start.v, toIndex, tail);
        if (!(rc >= 0)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        start.v = start.v + rc | 0;
        if (start.v >= toIndex) {
          block$result = 0;
        }
         else if (rc === 0) {
          block$result = 8;
        }
         else {
          block$result = 1;
        }
        size = block$result;
        if (size <= 0)
          break;
        tail = dst.$prepareWrite$_za3lpa$(size);
      }
    }
    finally {
      dst.$afterWrite$();
    }
    encodeCompleteImpl($receiver, dst);
  }
  var EmptyByteArray;
  function encodeToByteArrayImpl($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = input.length;
    var start = fromIndex;
    if (start >= toIndex)
      return EmptyByteArray;
    var single = IoBuffer$Companion_getInstance().Pool.borrow();
    try {
      IoBuffer$Companion_getInstance().NoPool;
      var rc = encodeImpl($receiver, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var result = new Int8Array(single.readRemaining);
        readFully(single, result);
        return result;
      }
      var builder = new BytePacketBuilder_0(0, IoBuffer$Companion_getInstance().Pool);
      builder.last_g6eaik$(single.makeView());
      encode($receiver, input, start, toIndex, builder);
      return readBytes(builder.build());
    }
    finally {
      single.release_cqjh9i$(IoBuffer$Companion_getInstance().Pool);
    }
  }
  function encodeCompleteImpl($receiver, dst) {
    var size = {v: 1};
    try {
      var tail = dst.$prepareWrite$_za3lpa$(1);
      while (true) {
        if (encodeComplete($receiver, tail)) {
          size.v = 0;
        }
         else {
          size.v = size.v + 1 | 0;
        }
        if (!(size.v > 0))
          break;
        tail = dst.$prepareWrite$_za3lpa$(1);
      }
    }
    finally {
      dst.$afterWrite$();
    }
  }
  function encode_0($receiver, input, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = input.length;
    var buildPacket$result;
    var builder = BytePacketBuilder(0);
    try {
      encode($receiver, input, fromIndex, toIndex, builder);
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
  }
  function encodeUTF8_0($receiver, input) {
    var buildPacket$result;
    var builder = BytePacketBuilder(0);
    try {
      encodeUTF8($receiver, input, builder);
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
  }
  function decode_0($receiver, input, max) {
    if (max === void 0)
      max = 2147483647;
    var a = Kotlin.Long.fromInt(max);
    var b = sizeEstimate(input);
    var $receiver_0 = StringBuilder_init((a.compareTo_11rb$(b) <= 0 ? a : b).toInt());
    decode($receiver, input, $receiver_0, max);
    return $receiver_0.toString();
  }
  function sizeEstimate($receiver) {
    if (Kotlin.isType($receiver, ByteReadPacket))
      return $receiver.remaining;
    else if (Kotlin.isType($receiver, ByteReadPacketBase)) {
      var a = $receiver.remaining;
      var b = L16;
      return a.compareTo_11rb$(b) >= 0 ? a : b;
    }
     else
      return L16;
  }
  function get_EmptyBufferViewPool() {
    return IoBuffer$Companion_getInstance().EmptyPool;
  }
  function EmptyBufferPoolImpl() {
    EmptyBufferPoolImpl_instance = this;
    NoPoolImpl.call(this);
  }
  EmptyBufferPoolImpl.prototype.borrow = function () {
    return IoBuffer$Companion_getInstance().Empty;
  };
  EmptyBufferPoolImpl.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyBufferPoolImpl',
    interfaces: [NoPoolImpl]
  };
  var EmptyBufferPoolImpl_instance = null;
  function EmptyBufferPoolImpl_getInstance() {
    if (EmptyBufferPoolImpl_instance === null) {
      new EmptyBufferPoolImpl();
    }
    return EmptyBufferPoolImpl_instance;
  }
  function releaseAll($receiver, pool) {
    if ($receiver == null)
      return;
    $receiver.release_cqjh9i$(pool);
    releaseAll($receiver.next, pool);
  }
  function copyAll($receiver) {
    var tmp$;
    var copied = $receiver.makeView();
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return copied;
    }
    var next = tmp$;
    return copyAll_0(next, copied, copied);
  }
  function copyAll_0($receiver, head, prev) {
    var tmp$;
    var copied = $receiver.makeView();
    prev.next = copied;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return head;
    }
    var next = tmp$;
    return copyAll_0(next, head, copied);
  }
  function findTail($receiver) {
    var tmp$;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return $receiver;
    }
    var next = tmp$;
    return findTail(next);
  }
  function remainingAll($receiver) {
    return remainingAll_0($receiver, L0);
  }
  function remainingAll_0($receiver, n) {
    var tmp$;
    var rem = Kotlin.Long.fromInt($receiver.readRemaining).add(n);
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return rem;
    }
    var next = tmp$;
    return remainingAll_0(next, rem);
  }
  function isEmpty($receiver) {
    var tmp$;
    if ($receiver.readRemaining > 0)
      return false;
    tmp$ = $receiver.next;
    if (tmp$ == null) {
      return true;
    }
    var next = tmp$;
    return isEmpty(next);
  }
  var coerceAtMostMaxInt = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.coerceAtMostMaxInt_nzsbcz$', wrapFunction(function () {
    var L2147483647 = Kotlin.Long.fromInt(2147483647);
    return function ($receiver) {
      var b = L2147483647;
      return ($receiver.compareTo_11rb$(b) <= 0 ? $receiver : b).toInt();
    };
  }));
  var coerceAtMostMaxIntOrFail = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.coerceAtMostMaxIntOrFail_z4ke79$', wrapFunction(function () {
    var L2147483647 = Kotlin.Long.fromInt(2147483647);
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    return function ($receiver, message) {
      if ($receiver.compareTo_11rb$(L2147483647) > 0)
        throw IllegalArgumentException_init(message);
      return $receiver.toInt();
    };
  }));
  function BufferLimitExceededException(message) {
    Exception_init(message, this);
    this.name = 'BufferLimitExceededException';
  }
  BufferLimitExceededException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BufferLimitExceededException',
    interfaces: [Exception]
  };
  var buildPacket = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.buildPacket_tmk3ki$', wrapFunction(function () {
    var BytePacketBuilder = _.kotlinx.io.core.BytePacketBuilder_za3lpa$;
    var Throwable = Error;
    return function (headerSizeHint, block) {
      if (headerSizeHint === void 0)
        headerSizeHint = 0;
      var builder = BytePacketBuilder(headerSizeHint);
      try {
        block(builder);
        return builder.build();
      }
       catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        }
         else
          throw t;
      }
    };
  }));
  require$ObjectLiteral_0.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_0.prototype.constructor = require$ObjectLiteral_0;
  function require$ObjectLiteral_0(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_0.prototype.doFail = function () {
    throw IllegalArgumentException_init(this.closure$message());
  };
  require$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [RequireFailureCapture]
  };
  function BytePacketBuilder_0(headerSizeHint, pool) {
    BytePacketBuilderPlatformBase.call(this, pool);
    this.headerSizeHint_0 = headerSizeHint;
    if (!(this.headerSizeHint_0 >= 0)) {
      var m = new require$ObjectLiteral_0(BytePacketBuilder_init$lambda(this));
      m.doFail();
    }
    this.head = IoBuffer$Companion_getInstance().Empty;
  }
  Object.defineProperty(BytePacketBuilder_0.prototype, 'size', {
    get: function () {
      var size = this._size;
      if (size === -1) {
        this._size = remainingAll(this.head).toInt();
        return this._size;
      }
      return size;
    }
  });
  Object.defineProperty(BytePacketBuilder_0.prototype, 'isEmpty', {
    get: function () {
      var tmp$;
      var _size = this._size;
      if (_size > 0)
        tmp$ = false;
      else if (_size === 0)
        tmp$ = true;
      else if (this.head.canRead())
        tmp$ = false;
      else if (this.size === 0)
        tmp$ = true;
      else
        tmp$ = false;
      return tmp$;
    }
  });
  Object.defineProperty(BytePacketBuilder_0.prototype, 'isNotEmpty', {
    get: function () {
      var tmp$;
      var _size = this._size;
      if (_size > 0)
        tmp$ = true;
      else if (_size === 0)
        tmp$ = false;
      else if (this.head.canRead())
        tmp$ = true;
      else if (this.size > 0)
        tmp$ = true;
      else
        tmp$ = false;
      return tmp$;
    }
  });
  BytePacketBuilder_0.prototype.append_s8itvh$ = function (c) {
    var tmp$;
    return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_s8itvh$.call(this, c), BytePacketBuilder_0) ? tmp$ : throwCCE();
  };
  BytePacketBuilder_0.prototype.append_gw00v9$ = function (csq) {
    var tmp$;
    return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_gw00v9$.call(this, csq), BytePacketBuilder_0) ? tmp$ : throwCCE();
  };
  BytePacketBuilder_0.prototype.append_ezbsdh$ = function (csq, start, end) {
    var tmp$;
    return Kotlin.isType(tmp$ = BytePacketBuilderPlatformBase.prototype.append_ezbsdh$.call(this, csq, start, end), BytePacketBuilder_0) ? tmp$ : throwCCE();
  };
  BytePacketBuilder_0.prototype.release = function () {
    var head = this.head;
    var empty = IoBuffer$Companion_getInstance().Empty;
    if (head !== empty) {
      this.head = empty;
      this.tail = empty;
      releaseAll(head, this.pool);
      this._size = 0;
    }
  };
  BytePacketBuilder_0.prototype.flush = function () {
  };
  BytePacketBuilder_0.prototype.close = function () {
    this.release();
  };
  BytePacketBuilder_0.prototype.preview_6bo1y6$ = function (block) {
    var tmp$;
    var head = copyAll(this.head);
    var pool = head === IoBuffer$Companion_getInstance().Empty ? IoBuffer$Companion_getInstance().EmptyPool : this.pool;
    var packet = ByteReadPacket_init(head, pool);
    try {
      tmp$ = block(packet);
    }
    finally {
      packet.release();
    }
    return tmp$;
  };
  BytePacketBuilder_0.prototype.build = function () {
    var tmp$;
    var size = this.size;
    var head = this.stealAll_8be2vx$();
    if (head == null)
      tmp$ = ByteReadPacket$Companion_getInstance().Empty;
    else
      tmp$ = new ByteReadPacket(head, Kotlin.Long.fromInt(size), this.pool);
    return tmp$;
  };
  BytePacketBuilder_0.prototype.stealAll_8be2vx$ = function () {
    var head = this.head;
    var empty = IoBuffer$Companion_getInstance().Empty;
    this.head = empty;
    this.tail = empty;
    this._size = 0;
    return head === empty ? null : head;
  };
  BytePacketBuilder_0.prototype.afterBytesStolen_8be2vx$ = function () {
    var head = this.head;
    if (!(head.next == null)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    this._size = 0;
    head.resetForWrite();
    head.reserveStartGap_za3lpa$(this.headerSizeHint_0);
    head.reserveEndGap_za3lpa$(ByteReadPacketBase$Companion_getInstance().ReservedSize);
  };
  BytePacketBuilder_0.prototype.writePacket_8awntw$ = function (p) {
    var foreignStolen = p.stealAll_8be2vx$();
    if (foreignStolen == null) {
      p.release();
      return;
    }
    var tail = this.tail;
    if (tail === IoBuffer$Companion_getInstance().Empty) {
      this.head = foreignStolen;
      this.tail = findTail(foreignStolen);
      this._size = remainingAll(foreignStolen).toInt();
      return;
    }
    this.writePacketSlow_0(tail, foreignStolen, p);
  };
  BytePacketBuilder_0.prototype.writePacketSlow_0 = function (tail, foreignStolen, p) {
    var tmp$, tmp$_0, tmp$_1;
    var lastSize = tail.readRemaining;
    var nextSize = foreignStolen.readRemaining;
    var maxCopySize = PACKET_MAX_COPY_SIZE;
    if (nextSize < maxCopySize && nextSize <= (tail.endGap + tail.writeRemaining | 0)) {
      tmp$ = nextSize;
    }
     else
      tmp$ = -1;
    var appendSize = tmp$;
    if (lastSize < maxCopySize && lastSize <= foreignStolen.startGap && foreignStolen.isExclusivelyOwned()) {
      tmp$_0 = lastSize;
    }
     else
      tmp$_0 = -1;
    var prependSize = tmp$_0;
    if (appendSize === -1 && prependSize === -1) {
      tail.next = foreignStolen;
      this.tail = findTail(foreignStolen);
      this._size = remainingAll(this.head).toInt();
    }
     else if (prependSize === -1 || appendSize <= prependSize) {
      tail.writeBufferAppend_ehtrw3$(foreignStolen, tail.writeRemaining + tail.endGap | 0);
      tail.next = foreignStolen.next;
      var $receiver = findTail(foreignStolen);
      this.tail = (tmp$_1 = !($receiver === foreignStolen) ? $receiver : null) != null ? tmp$_1 : tail;
      foreignStolen.release_cqjh9i$(p.pool);
      this._size = remainingAll(this.head).toInt();
    }
     else if (appendSize === -1 || prependSize < appendSize) {
      this.writePacketSlowPrepend_0(foreignStolen, tail);
    }
     else {
      throw IllegalStateException_init('prep = ' + prependSize + ', app = ' + appendSize);
    }
  };
  BytePacketBuilder_0.prototype.writePacketSlowPrepend_0 = function (foreignStolen, tail) {
    foreignStolen.writeBufferPrepend_2fdm73$(tail);
    if (this.head === tail) {
      this.head = foreignStolen;
    }
     else {
      var pre = this.head;
      while (true) {
        var next = ensureNotNull(pre.next);
        if (next === tail)
          break;
        pre = next;
      }
      pre.next = foreignStolen;
    }
    tail.release_cqjh9i$(this.pool);
    this.tail = findTail(foreignStolen);
    this._size = remainingAll(this.head).toInt();
  };
  BytePacketBuilder_0.prototype.last_g6eaik$ = function (buffer) {
    if (this.head === IoBuffer$Companion_getInstance().Empty) {
      if (isEmpty(buffer)) {
        buffer.reserveStartGap_za3lpa$(this.headerSizeHint_0);
      }
      this.tail = buffer;
      this.head = buffer;
      this._size = remainingAll(buffer).toInt();
    }
     else {
      this.tail.next = buffer;
      this.tail = buffer;
      this._size = -1;
    }
  };
  function BytePacketBuilder_init$lambda(this$BytePacketBuilder) {
    return function () {
      return "shouldn't be negative: headerSizeHint = " + this$BytePacketBuilder.headerSizeHint_0;
    };
  }
  BytePacketBuilder_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BytePacketBuilder',
    interfaces: [BytePacketBuilderPlatformBase]
  };
  function AbstractOutput(pool) {
    if (pool === void 0)
      pool = IoBuffer$Companion_getInstance().Pool;
    BytePacketBuilderPlatformBase.call(this, pool);
  }
  Object.defineProperty(AbstractOutput.prototype, 'currentTail', {
    get: function () {
      return this.tail;
    },
    set: function (newValue) {
      this.tail = newValue;
    }
  });
  AbstractOutput.prototype.release = function () {
    if (!equals(this.currentTail, IoBuffer$Companion_getInstance().Empty)) {
      this.currentTail.release_cqjh9i$(this.pool);
      this.currentTail = IoBuffer$Companion_getInstance().Empty;
    }
  };
  AbstractOutput.prototype.close = function () {
    this.flush();
  };
  AbstractOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractOutput',
    interfaces: [BytePacketBuilderPlatformBase]
  };
  function BytePacketBuilderBase(pool) {
    this.pool = pool;
    this._size = 0;
    this.byteOrder_5uar5w$_0 = ByteOrder$BIG_ENDIAN_getInstance();
    this.tail = IoBuffer$Companion_getInstance().Empty;
  }
  Object.defineProperty(BytePacketBuilderBase.prototype, 'byteOrder', {
    get: function () {
      return this.byteOrder_5uar5w$_0;
    },
    set: function (value) {
      this.byteOrder_5uar5w$_0 = value;
      var tail = this.tail;
      if (tail.canWrite()) {
        tail.byteOrder = value;
      }
    }
  });
  BytePacketBuilderBase.prototype.writeFully_mj6st8$ = function (src, offset, length) {
    if (length === 0)
      return;
    var copied = {v: 0};
    writeLoop_tjk5n2$_0$break: do {
      if (!(copied.v < length))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 1) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var bufferRemaining = rem;
        var b = length - copied.v | 0;
        var size = Math_0.min(bufferRemaining, b);
        buffer_0.writeFully_mj6st8$(src, offset + copied.v | 0, size);
        copied.v = copied.v + size | 0;
        var result = size;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = copied.v < length;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  BytePacketBuilderBase.prototype.writeLong_s8cxhz$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 8) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeLong_s8cxhz$(v);
    this.addSize_za3lpa$(8);
  };
  BytePacketBuilderBase.prototype.writeInt_za3lpa$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 4) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeInt_za3lpa$(v);
    this.addSize_za3lpa$(4);
  };
  BytePacketBuilderBase.prototype.writeShort_mq22fl$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 2) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeShort_mq22fl$(v);
    this.addSize_za3lpa$(2);
  };
  BytePacketBuilderBase.prototype.writeByte_s8j3t7$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 1) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeByte_s8j3t7$(v);
    this.addSize_za3lpa$(1);
  };
  BytePacketBuilderBase.prototype.writeDouble_14dthe$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 8) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeDouble_14dthe$(v);
    this.addSize_za3lpa$(8);
  };
  BytePacketBuilderBase.prototype.writeFloat_mx4ult$ = function (v) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 4) {
      buffer = this.appendNewBuffer();
    }
    buffer.writeFloat_mx4ult$(v);
    this.addSize_za3lpa$(4);
  };
  function BytePacketBuilderBase$writeFully$lambda(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_0(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_359eei$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex(src))) {
      var m_0 = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_0(offset, length, src));
      m_0.doFail();
    }
    if (length === 0)
      return;
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 2) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 1;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_359eei$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 2 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_1(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_2(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex_0(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_nd5v6f$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_1(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex_0(src))) {
      var m_0 = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_2(offset, length, src));
      m_0.doFail();
    }
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 4) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 2;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_nd5v6f$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 4 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_3(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_4(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex_1(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_rfv6wg$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_3(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex_1(src))) {
      var m_0 = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_4(offset, length, src));
      m_0.doFail();
    }
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 8) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 3;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_rfv6wg$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 8 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_5(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_6(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex_2(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_kgymra$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_5(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex_2(src))) {
      var m_0 = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_6(offset, length, src));
      m_0.doFail();
    }
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 4) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 2;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_kgymra$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 4 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_7(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_8(closure$offset, closure$length, closure$src) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') >= src.lastIndex (' + get_lastIndex_3(closure$src) + ')';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_6icyh1$ = function (src, offset, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_7(length));
      m.doFail();
    }
    if (!((offset + length | 0) < get_lastIndex_3(src))) {
      var m_0 = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_8(offset, length, src));
      m_0.doFail();
    }
    var start = {v: offset};
    var remaining = {v: length};
    writeLoop_tjk5n2$_0$break: do {
      if (!(remaining.v > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem = buffer.writeRemaining;
      do {
        if (rem < 8) {
          buffer = this.appendNewBuffer();
          rem = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = rem >> 3;
        var b = remaining.v;
        var qty = Math_0.min(a, b);
        buffer_0.writeFully_6icyh1$(src, start.v, qty);
        start.v = start.v + qty | 0;
        remaining.v = remaining.v - qty | 0;
        var result = qty * 8 | 0;
        written = written + result | 0;
        rem = rem - result | 0;
        var predicate$result;
        predicate$result = remaining.v > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  function BytePacketBuilderBase$writeFully$lambda_9(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function BytePacketBuilderBase$writeFully$lambda_10(closure$length) {
    return function () {
      return 'Not enough bytes available in src buffer to read ' + closure$length + ' bytes';
    };
  }
  BytePacketBuilderBase.prototype.writeFully_bj0s3a$ = function (src, length) {
    if (!(length >= 0)) {
      var m = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_9(length));
      m.doFail();
    }
    if (!(length <= src.readRemaining)) {
      var m_0 = new require$ObjectLiteral_0(BytePacketBuilderBase$writeFully$lambda_10(length));
      m_0.doFail();
    }
    var a = src.readRemaining;
    var totalSize = Math_0.min(a, length);
    if (totalSize === 0)
      return;
    var remaining = totalSize;
    var tail = this.tail;
    if (!tail.canWrite()) {
      tail = this.appendNewBuffer();
    }
    do {
      var a_0 = tail.writeRemaining;
      var b = remaining;
      var size = Math_0.min(a_0, b);
      tail.writeFully_bj0s3a$(src, size);
      remaining = remaining - size | 0;
      if (remaining === 0)
        break;
      tail = this.appendNewBuffer();
    }
     while (true);
    this.addSize_za3lpa$(totalSize);
  };
  function BytePacketBuilderBase$fill$lambda(closure$n) {
    return function () {
      return "n shouldn't be negative: " + closure$n.toString();
    };
  }
  BytePacketBuilderBase.prototype.fill_3pq026$ = function (n, v) {
    if (!(n.compareTo_11rb$(L0) >= 0)) {
      var m = new require$ObjectLiteral_0(BytePacketBuilderBase$fill$lambda(n));
      m.doFail();
    }
    var rem = {v: n};
    writeLoop_tjk5n2$_0$break: do {
      if (!(rem.v.compareTo_11rb$(L0) > 0))
        break writeLoop_tjk5n2$_0$break;
      var written = 0;
      var buffer = this.tail;
      var rem_0 = buffer.writeRemaining;
      do {
        if (rem_0 < 1) {
          buffer = this.appendNewBuffer();
          rem_0 = buffer.writeRemaining;
        }
        var buffer_0 = buffer;
        var a = Kotlin.Long.fromInt(rem_0);
        var size = (a.compareTo_11rb$(n) <= 0 ? a : n).toInt();
        buffer_0.fill_3pq026$(Kotlin.Long.fromInt(size), v);
        rem.v = rem.v.subtract(Kotlin.Long.fromInt(size));
        var result = size;
        written = written + result | 0;
        rem_0 = rem_0 - result | 0;
        var predicate$result;
        predicate$result = rem.v.compareTo_11rb$(L0) > 0;
      }
       while (predicate$result);
      this.addSize_za3lpa$(written);
    }
     while (false);
  };
  BytePacketBuilderBase.prototype.append_s8itvh$ = function (c) {
    var buffer = this.tail;
    if (buffer.writeRemaining < 3) {
      buffer = this.appendNewBuffer();
    }
    var it = buffer;
    var v = c | 0;
    var putUtf8Char_txdfrb$_0$result;
    if (1 <= v && v <= 127) {
      it.writeByte_s8j3t7$(toByte(v));
      putUtf8Char_txdfrb$_0$result = 1;
    }
     else if (v > 2047) {
      it.writeByte_s8j3t7$(toByte(224 | v >> 12 & 15));
      it.writeByte_s8j3t7$(toByte(128 | v >> 6 & 63));
      it.writeByte_s8j3t7$(toByte(128 | v & 63));
      putUtf8Char_txdfrb$_0$result = 3;
    }
     else {
      it.writeByte_s8j3t7$(toByte(192 | v >> 6 & 31));
      it.writeByte_s8j3t7$(toByte(128 | v & 63));
      putUtf8Char_txdfrb$_0$result = 2;
    }
    this.addSize_za3lpa$(putUtf8Char_txdfrb$_0$result);
    return this;
  };
  BytePacketBuilderBase.prototype.append_gw00v9$ = function (csq) {
    if (csq == null) {
      this.appendChars_pstj8j$_0('null', 0, 4);
    }
     else {
      this.appendChars_pstj8j$_0(csq, 0, csq.length);
    }
    return this;
  };
  BytePacketBuilderBase.prototype.append_ezbsdh$ = function (csq, start, end) {
    if (csq == null) {
      return this.append_ezbsdh$('null', start, end);
    }
    this.appendChars_pstj8j$_0(csq, start, end);
    return this;
  };
  BytePacketBuilderBase.prototype.writePacket_8awntw$ = function (p) {
    var tmp$;
    while (true) {
      tmp$ = p.steal_8be2vx$();
      if (tmp$ == null) {
        break;
      }
      var buffer = tmp$;
      this.last_g6eaik$(buffer);
    }
  };
  BytePacketBuilderBase.prototype.writePacket_eixyzu$ = function (p, n) {
    var tmp$;
    var remaining = {v: n};
    while (remaining.v > 0) {
      var headRemaining = p.headRemaining;
      if (headRemaining <= remaining.v) {
        remaining.v = remaining.v - headRemaining | 0;
        tmp$ = p.steal_8be2vx$();
        if (tmp$ == null) {
          throw new EOFException('Unexpected end of packet');
        }
        this.last_g6eaik$(tmp$);
      }
       else {
        var tmp$_0;
        var head = p.head;
        var before = {v: head.readRemaining};
        if (before.v < 1) {
          var $receiver = p.prepareRead_87ik6q$(1, head);
          var tmp$_1;
          before.v = (tmp$_1 = $receiver != null ? $receiver.readRemaining : null) != null ? tmp$_1 : 0;
          tmp$_0 = $receiver;
        }
         else {
          tmp$_0 = head;
        }
        var buffer = tmp$_0;
        if (buffer != null) {
          this.writeFully_bj0s3a$(buffer, remaining.v);
          var after = buffer.readRemaining;
          var delta = before.v - after | 0;
          if (delta > 0) {
            p.headRemaining = p.headRemaining - delta | 0;
          }
          if (after === 0) {
            p.ensureNext_g6eaik$(buffer);
          }
        }
        break;
      }
    }
  };
  BytePacketBuilderBase.prototype.writePacket_o4mqn5$ = function (p, n) {
    var tmp$;
    var remaining = {v: n};
    while (remaining.v.compareTo_11rb$(L0) > 0) {
      var headRemaining = Kotlin.Long.fromInt(p.headRemaining);
      if (headRemaining.compareTo_11rb$(remaining.v) <= 0) {
        remaining.v = remaining.v.subtract(headRemaining);
        tmp$ = p.steal_8be2vx$();
        if (tmp$ == null) {
          throw new EOFException('Unexpected end of packet');
        }
        this.last_g6eaik$(tmp$);
      }
       else {
        var tmp$_0;
        var head = p.head;
        var before = {v: head.readRemaining};
        if (before.v < 1) {
          var $receiver = p.prepareRead_87ik6q$(1, head);
          var tmp$_1;
          before.v = (tmp$_1 = $receiver != null ? $receiver.readRemaining : null) != null ? tmp$_1 : 0;
          tmp$_0 = $receiver;
        }
         else {
          tmp$_0 = head;
        }
        var buffer = tmp$_0;
        if (buffer != null) {
          this.writeFully_bj0s3a$(buffer, remaining.v.toInt());
          var after = buffer.readRemaining;
          var delta = before.v - after | 0;
          if (delta > 0) {
            p.headRemaining = p.headRemaining - delta | 0;
          }
          if (after === 0) {
            p.ensureNext_g6eaik$(buffer);
          }
        }
        break;
      }
    }
  };
  BytePacketBuilderBase.prototype.append_8chfmy$ = function (csq, start, end) {
    this.appendChars_s0z9z1$_0(csq, start, end);
    return this;
  };
  BytePacketBuilderBase.prototype.appendChars_pstj8j$_0 = function (csq, start, end) {
    var idx = start;
    if (idx >= end)
      return idx;
    var tail = this.tail;
    if (tail.canWrite()) {
      idx = tail.appendChars_3peag4$(csq, idx, end);
    }
    while (idx < end) {
      idx = this.appendNewBuffer().appendChars_3peag4$(csq, idx, end);
    }
    this._size = -1;
    return idx;
  };
  BytePacketBuilderBase.prototype.appendChars_s0z9z1$_0 = function (csq, start, end) {
    var idx = start;
    if (idx >= end)
      return idx;
    var tail = this.tail;
    if (tail.canWrite()) {
      idx = tail.appendChars_8chfmy$(csq, idx, end);
    }
    while (idx < end) {
      idx = this.appendNewBuffer().appendChars_8chfmy$(csq, idx, end);
    }
    this._size = -1;
    return idx;
  };
  BytePacketBuilderBase.prototype.writeStringUtf8_61zpoe$ = function (s) {
    this.append_ezbsdh$(s, 0, s.length);
  };
  BytePacketBuilderBase.prototype.writeStringUtf8_6bul2c$ = function (cs) {
    this.append_ezbsdh$(cs, 0, cs.length);
  };
  BytePacketBuilderBase.prototype.putUtf8Char_txdfrb$_0 = function ($receiver, v) {
    if (1 <= v && v <= 127) {
      $receiver.writeByte_s8j3t7$(toByte(v));
      return 1;
    }
     else if (v > 2047) {
      $receiver.writeByte_s8j3t7$(toByte(224 | v >> 12 & 15));
      $receiver.writeByte_s8j3t7$(toByte(128 | v >> 6 & 63));
      $receiver.writeByte_s8j3t7$(toByte(128 | v & 63));
      return 3;
    }
     else {
      $receiver.writeByte_s8j3t7$(toByte(192 | v >> 6 & 31));
      $receiver.writeByte_s8j3t7$(toByte(128 | v & 63));
      return 2;
    }
  };
  BytePacketBuilderBase.prototype.$prepareWrite$_za3lpa$ = function (n) {
    if (this.tail.writeRemaining >= n)
      return this.tail;
    return this.appendNewBuffer();
  };
  BytePacketBuilderBase.prototype.$afterWrite$ = function () {
    this._size = -1;
  };
  BytePacketBuilderBase.prototype.reset = function () {
    this.release();
  };
  BytePacketBuilderBase.prototype.write_bxk1n6$ = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.BytePacketBuilderBase.write_bxk1n6$', function (size, block) {
    var buffer = this.tail;
    if (buffer.writeRemaining < size) {
      buffer = this.appendNewBuffer();
    }
    this.addSize_za3lpa$(block(buffer));
  });
  BytePacketBuilderBase.prototype.writeLoop_tjk5n2$_0 = function (size, predicate, block) {
    if (!predicate())
      return;
    var written = 0;
    var buffer = this.tail;
    var rem = buffer.writeRemaining;
    do {
      if (rem < size) {
        buffer = this.appendNewBuffer();
        rem = buffer.writeRemaining;
      }
      var result = block(buffer, rem);
      written = written + result | 0;
      rem = rem - result | 0;
    }
     while (predicate());
    this.addSize_za3lpa$(written);
  };
  BytePacketBuilderBase.prototype.addSize_za3lpa$ = function (n) {
    var size = this._size;
    if (size !== -1) {
      this._size = size + n | 0;
    }
  };
  BytePacketBuilderBase.prototype.appendNewBuffer = function () {
    var new_0 = this.pool.borrow();
    new_0.reserveEndGap_za3lpa$(ByteReadPacket$Companion_getInstance().ReservedSize);
    new_0.byteOrder = this.byteOrder;
    this.last_g6eaik$(new_0);
    return new_0;
  };
  BytePacketBuilderBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BytePacketBuilderBase',
    interfaces: [Output, Appendable]
  };
  function takeUnless($receiver, predicate) {
    return !predicate($receiver) ? $receiver : null;
  }
  function AbstractInput(head, remaining, pool) {
    if (head === void 0)
      head = IoBuffer$Companion_getInstance().Empty;
    if (remaining === void 0)
      remaining = remainingAll(head);
    if (pool === void 0)
      pool = IoBuffer$Companion_getInstance().Pool;
    ByteReadPacketPlatformBase.call(this, head, remaining, pool);
  }
  AbstractInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractInput',
    interfaces: [ByteReadPacketPlatformBase]
  };
  var ByteReadPacket_1 = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.ByteReadPacket_mj6st8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var ByteReadPacket = _.kotlinx.io.core.ByteReadPacket_1qge3v$;
    function ByteReadPacket$lambda(it) {
      return Unit;
    }
    return function (array, offset, length) {
      if (offset === void 0)
        offset = 0;
      if (length === void 0)
        length = array.length;
      return ByteReadPacket(array, offset, length, ByteReadPacket$lambda);
    };
  }));
  var use = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.use_jg5xsh$', wrapFunction(function () {
    var addSuppressedInternal = _.kotlinx.io.core.addSuppressedInternal_oh0dqn$;
    var Throwable = Error;
    return function ($receiver, block) {
      try {
        var result = block($receiver);
        $receiver.close();
        return result;
      }
       catch (first) {
        if (Kotlin.isType(first, Throwable)) {
          try {
            $receiver.close();
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
      }
    };
  }));
  function ExperimentalIoApi() {
  }
  ExperimentalIoApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExperimentalIoApi',
    interfaces: [Annotation]
  };
  function readFully($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readFully_mj6st8$(dst, offset, length);
  }
  function readFully_0($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readFully_359eei$(dst, offset, length);
  }
  function readFully_1($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readFully_nd5v6f$(dst, offset, length);
  }
  function readFully_2($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readFully_rfv6wg$(dst, offset, length);
  }
  function readFully_3($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readFully_kgymra$(dst, offset, length);
  }
  function readFully_4($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readFully_6icyh1$(dst, offset, length);
  }
  function readFully_5($receiver, dst, length) {
    if (length === void 0)
      length = dst.writeRemaining;
    return $receiver.readFully_bj0s3a$(dst, length);
  }
  function readAvailable($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readAvailable_mj6st8$(dst, offset, length);
  }
  function readAvailable_0($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readAvailable_359eei$(dst, offset, length);
  }
  function readAvailable_1($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readAvailable_nd5v6f$(dst, offset, length);
  }
  function readAvailable_2($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readAvailable_rfv6wg$(dst, offset, length);
  }
  function readAvailable_3($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readAvailable_kgymra$(dst, offset, length);
  }
  function readAvailable_4($receiver, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    return $receiver.readAvailable_6icyh1$(dst, offset, length);
  }
  function readAvailable_5($receiver, dst, length) {
    if (length === void 0)
      length = dst.writeRemaining;
    return $receiver.readAvailable_bj0s3a$(dst, length);
  }
  function discard($receiver) {
    return $receiver.discard_s8cxhz$(Long$Companion$MAX_VALUE);
  }
  function discardExact($receiver, n) {
    var discarded = $receiver.discard_s8cxhz$(n);
    if (!equals(discarded, n)) {
      throw IllegalStateException_init('Only ' + discarded.toString() + ' bytes were discarded of ' + n.toString() + ' requested');
    }
  }
  function discardExact_0($receiver, n) {
    discardExact($receiver, Kotlin.Long.fromInt(n));
  }
  var takeWhile = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.takeWhile_j7wsao$', function ($receiver, block) {
    var tmp$, tmp$_0;
    tmp$ = $receiver.$prepareRead$_za3lpa$(1);
    if (tmp$ == null) {
      return;
    }
    var current = tmp$;
    do {
      var continueFlag = block(current);
      var after = current.readRemaining;
      if (after === 0) {
        tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
        if (tmp$_0 == null) {
          break;
        }
        current = tmp$_0;
      }
       else if (!continueFlag) {
        $receiver.$updateRemaining$_za3lpa$(after);
        break;
      }
    }
     while (true);
  });
  var takeWhileSize = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.takeWhileSize_345ofp$', function ($receiver, initialSize, block) {
    if (initialSize === void 0)
      initialSize = 1;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.$prepareRead$_za3lpa$(1);
    if (tmp$ == null) {
      return;
    }
    var current = tmp$;
    var size = initialSize;
    do {
      var before = current.readRemaining;
      var after;
      if (before >= size) {
        try {
          size = block(current);
        }
        finally {
          after = current.readRemaining;
        }
      }
       else {
        after = before;
      }
      if (after === 0) {
        tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
        if (tmp$_0 == null) {
          break;
        }
        current = tmp$_0;
      }
       else if (after < size) {
        $receiver.$updateRemaining$_za3lpa$(after);
        tmp$_1 = $receiver.$prepareRead$_za3lpa$(size);
        if (tmp$_1 == null) {
          break;
        }
        current = tmp$_1;
      }
       else {
        $receiver.$updateRemaining$_za3lpa$(after);
      }
    }
     while (size > 0);
  });
  function append($receiver, csq, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = csq.length;
    return $receiver.append_ezbsdh$(csq, start, end);
  }
  function append_0($receiver, csq, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = csq.length;
    return $receiver.append_8chfmy$(csq, start, end);
  }
  function writeFully_1($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.length;
    $receiver.writeFully_mj6st8$(src, offset, length);
  }
  function writeFully_2($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.length;
    $receiver.writeFully_359eei$(src, offset, length);
  }
  function writeFully_3($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.length;
    $receiver.writeFully_nd5v6f$(src, offset, length);
  }
  function writeFully_4($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.length;
    $receiver.writeFully_rfv6wg$(src, offset, length);
  }
  function writeFully_5($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.length;
    $receiver.writeFully_kgymra$(src, offset, length);
  }
  function writeFully_6($receiver, src, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = src.length;
    $receiver.writeFully_6icyh1$(src, offset, length);
  }
  function writeFully_7($receiver, src, length) {
    if (length === void 0)
      length = src.readRemaining;
    $receiver.writeFully_bj0s3a$(src, length);
  }
  function fill($receiver, n, v) {
    if (v === void 0)
      v = 0;
    $receiver.fill_3pq026$(n, v);
  }
  var writeWhile = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.writeWhile_khqzlf$', function ($receiver, block) {
    try {
      var tail = $receiver.$prepareWrite$_za3lpa$(1);
      while (block(tail)) {
        tail = $receiver.$prepareWrite$_za3lpa$(1);
      }
    }
    finally {
      $receiver.$afterWrite$();
    }
  });
  var writeWhileSize = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.writeWhileSize_v3dg2q$', function ($receiver, initialSize, block) {
    if (initialSize === void 0)
      initialSize = 1;
    try {
      var tail = $receiver.$prepareWrite$_za3lpa$(initialSize);
      var size;
      while (true) {
        size = block(tail);
        if (size <= 0)
          break;
        tail = $receiver.$prepareWrite$_za3lpa$(size);
      }
    }
    finally {
      $receiver.$afterWrite$();
    }
  });
  function writePacket($receiver, packet) {
    if (Kotlin.isType($receiver, BytePacketBuilderBase)) {
      $receiver.writePacket_8awntw$(packet);
      return;
    }
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = packet.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        writeFully_7($receiver, current);
        var continueFlag = true;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = packet.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          packet.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  }
  function ByteReadPacketBase(head, remaining, pool) {
    ByteReadPacketBase$Companion_getInstance();
    if (remaining === void 0)
      remaining = remainingAll(head);
    this.head = head;
    this.pool = pool;
    this.byteOrder_49ugxf$_0 = ByteOrder$BIG_ENDIAN_getInstance();
    this.headRemaining = this.head.readRemaining;
    this.tailRemaining_vgafwz$_0 = remaining.subtract(Kotlin.Long.fromInt(this.headRemaining));
    this.noMoreChunksAvailable_hg7bja$_0 = false;
  }
  Object.defineProperty(ByteReadPacketBase.prototype, 'byteOrder', {
    get: function () {
      return this.byteOrder_49ugxf$_0;
    },
    set: function (byteOrder) {
      this.byteOrder_49ugxf$_0 = byteOrder;
    }
  });
  Object.defineProperty(ByteReadPacketBase.prototype, 'remaining', {
    get: function () {
      return Kotlin.Long.fromInt(this.headRemaining).add(this.tailRemaining_vgafwz$_0);
    }
  });
  ByteReadPacketBase.prototype.getRemaining = function () {
    var $receiver = this.remaining;
    var b = L2147483647;
    return ($receiver.compareTo_11rb$(b) <= 0 ? $receiver : b).toInt();
  };
  ByteReadPacketBase.prototype.canRead = function () {
    return !equals(this.tailRemaining_vgafwz$_0, L0) || this.head.canRead();
  };
  ByteReadPacketBase.prototype.hasBytes_za3lpa$ = function (n) {
    return Kotlin.Long.fromInt(this.headRemaining).add(this.tailRemaining_vgafwz$_0).toNumber() >= n;
  };
  Object.defineProperty(ByteReadPacketBase.prototype, 'isEmpty', {
    get: function () {
      return this.headRemaining === 0 && equals(this.tailRemaining_vgafwz$_0, L0);
    }
  });
  Object.defineProperty(ByteReadPacketBase.prototype, 'isNotEmpty', {
    get: function () {
      return this.headRemaining > 0 || this.tailRemaining_vgafwz$_0.compareTo_11rb$(L0) > 0;
    }
  });
  Object.defineProperty(ByteReadPacketBase.prototype, 'endOfInput', {
    get: function () {
      return this.isEmpty && (this.noMoreChunksAvailable_hg7bja$_0 || this.doFill() == null);
    }
  });
  ByteReadPacketBase.prototype.copy = function () {
    return new ByteReadPacket(copyAll(this.head), this.remaining, this.pool);
  };
  ByteReadPacketBase.prototype.release = function () {
    var head = this.head;
    var empty = IoBuffer$Companion_getInstance().Empty;
    if (head !== empty) {
      this.head = empty;
      this.headRemaining = 0;
      this.tailRemaining_vgafwz$_0 = L0;
      releaseAll(head, this.pool);
    }
  };
  ByteReadPacketBase.prototype.close = function () {
    this.release();
    if (!this.noMoreChunksAvailable_hg7bja$_0) {
      this.noMoreChunksAvailable_hg7bja$_0 = true;
    }
    this.closeSource();
  };
  ByteReadPacketBase.prototype.stealAll_8be2vx$ = function () {
    var head = this.head;
    var empty = IoBuffer$Companion_getInstance().Empty;
    if (head === empty)
      return null;
    this.head = empty;
    this.headRemaining = 0;
    this.tailRemaining_vgafwz$_0 = L0;
    return head;
  };
  ByteReadPacketBase.prototype.steal_8be2vx$ = function () {
    var tmp$;
    var head = this.head;
    var next = head.next;
    var empty = IoBuffer$Companion_getInstance().Empty;
    if (head === empty)
      return null;
    var nextRemaining = (tmp$ = next != null ? next.readRemaining : null) != null ? tmp$ : 0;
    this.head = next != null ? next : empty;
    this.headRemaining = nextRemaining;
    this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(nextRemaining));
    head.next = null;
    return head;
  };
  ByteReadPacketBase.prototype.append_2fdm73$ = function (chain) {
    if (chain === IoBuffer$Companion_getInstance().Empty)
      return;
    var size = remainingAll(chain);
    if (this.head === IoBuffer$Companion_getInstance().Empty) {
      this.head = chain;
      this.headRemaining = chain.readRemaining;
      this.tailRemaining_vgafwz$_0 = size.subtract(Kotlin.Long.fromInt(this.headRemaining));
    }
     else {
      findTail(this.head).next = chain;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.add(size);
    }
    chain.byteOrder = this.byteOrder;
  };
  ByteReadPacketBase.prototype.tryWriteAppend_2fdm73$ = function (chain) {
    var tail = findTail(this.head);
    var size = chain.readRemaining;
    if (size === 0 || tail.writeRemaining < size)
      return false;
    tail.writeBufferAppend_ehtrw3$(chain, size);
    if (this.head === tail) {
      this.headRemaining = this.headRemaining + size | 0;
    }
     else {
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.add(Kotlin.Long.fromInt(size));
    }
    return true;
  };
  ByteReadPacketBase.prototype.readByte = function () {
    var headRemaining = this.headRemaining;
    if (headRemaining > 1) {
      this.headRemaining = headRemaining - 1 | 0;
      return this.head.readByte();
    }
    return this.readByteSlow2_wryqcg$_0();
  };
  ByteReadPacketBase.prototype.readByteSlow2_wryqcg$_0 = function () {
    var head = this.head;
    var headRemaining = this.headRemaining;
    if (headRemaining === 1) {
      this.headRemaining = headRemaining - 1 | 0;
      var $receiver = head.readByte();
      this.ensureNext_g6eaik$(head);
      return $receiver;
    }
     else {
      return this.readByteSlow_bnprfe$_0(head);
    }
  };
  ByteReadPacketBase.prototype.readByteSlow_bnprfe$_0 = function (head) {
    if (this.ensureNext_g6eaik$(head) == null)
      throw new EOFException('One more byte required but reached end of input');
    return this.readByte();
  };
  ByteReadPacketBase.prototype.readShort = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(2, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(2);
    var rc = bb.readShort();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readFloat = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(4, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(4);
    var rc = bb.readFloat();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readDouble = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(8, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(8);
    var rc = bb.readDouble();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readInt = function () {
    var headRemaining = this.headRemaining;
    if (headRemaining > 4) {
      this.headRemaining = headRemaining - 4 | 0;
      return this.head.readInt();
    }
    return this.readIntSlow_bjoftl$_0();
  };
  ByteReadPacketBase.prototype.readIntSlow_bjoftl$_0 = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(4, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(4);
    var rc = bb.readInt();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readLong = function () {
    var headRemaining = this.headRemaining;
    if (headRemaining > 8) {
      this.headRemaining = headRemaining - 8 | 0;
      return this.head.readLong();
    }
    return this.readLongSlow_50ppke$_0();
  };
  ByteReadPacketBase.prototype.readLongSlow_50ppke$_0 = function () {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(8, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(8);
    var rc = bb.readLong();
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.readAvailable_fqrh44$ = function (dst) {
    return this.readAvailable_mj6st8$(dst, 0, dst.length);
  };
  function ByteReadPacketBase$readAvailable$lambda(closure$offset) {
    return function () {
      return "offset shouldn't be negative: " + closure$offset;
    };
  }
  function ByteReadPacketBase$readAvailable$lambda_0(closure$length) {
    return function () {
      return "length shouldn't be negative: " + closure$length;
    };
  }
  function ByteReadPacketBase$readAvailable$lambda_1(closure$offset, closure$length, closure$dst) {
    return function () {
      return 'offset (' + closure$offset + ') + length (' + closure$length + ') > dst.size (' + closure$dst.length + ')';
    };
  }
  require$ObjectLiteral_1.prototype = Object.create(RequireFailureCapture.prototype);
  require$ObjectLiteral_1.prototype.constructor = require$ObjectLiteral_1;
  function require$ObjectLiteral_1(closure$message) {
    this.closure$message = closure$message;
    RequireFailureCapture.call(this);
  }
  require$ObjectLiteral_1.prototype.doFail = function () {
    throw IllegalArgumentException_init(this.closure$message());
  };
  require$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [RequireFailureCapture]
  };
  ByteReadPacketBase.prototype.readAvailable_mj6st8$ = function (dst, offset, length) {
    if (!(offset >= 0)) {
      var m = new require$ObjectLiteral_1(ByteReadPacketBase$readAvailable$lambda(offset));
      m.doFail();
    }
    if (!(length >= 0)) {
      var m_0 = new require$ObjectLiteral_1(ByteReadPacketBase$readAvailable$lambda_0(length));
      m_0.doFail();
    }
    if (!((offset + length | 0) <= dst.length)) {
      var m_1 = new require$ObjectLiteral_1(ByteReadPacketBase$readAvailable$lambda_1(offset, length, dst));
      m_1.doFail();
    }
    return this.readAsMuchAsPossible_v6e8td$_0(dst, offset, length, 0);
  };
  ByteReadPacketBase.prototype.readFully_mj6st8$ = function (dst, offset, length) {
    var rc = this.readAvailable_mj6st8$(dst, offset, length);
    if (rc !== length)
      throw new EOFException('Not enough data in packet to fill buffer: ' + (length - rc | 0) + ' more bytes required');
  };
  ByteReadPacketBase.prototype.discard_za3lpa$ = function (n) {
    return this.discardAsMuchAsPossible_njj9ev$_0(n, 0);
  };
  ByteReadPacketBase.prototype.discardExact_za3lpa$ = function (n) {
    if (this.discard_za3lpa$(n) !== n)
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  ByteReadPacketBase.prototype.read_wnvhpp$ = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.ByteReadPacketBase.read_wnvhpp$', wrapFunction(function () {
    return function (block) {
      var tmp$;
      var head = this.head;
      var before = {v: head.readRemaining};
      if (before.v < 1) {
        var $receiver = this.prepareRead_87ik6q$(1, head);
        var tmp$_0;
        before.v = (tmp$_0 = $receiver != null ? $receiver.readRemaining : null) != null ? tmp$_0 : 0;
        tmp$ = $receiver;
      }
       else {
        tmp$ = head;
      }
      var buffer = tmp$;
      if (buffer != null) {
        block(buffer);
        var after = buffer.readRemaining;
        var delta = before.v - after | 0;
        if (delta > 0) {
          this.headRemaining = this.headRemaining - delta | 0;
        }
        if (after === 0) {
          this.ensureNext_g6eaik$(buffer);
        }
      }
    };
  }));
  ByteReadPacketBase.prototype.read_exahdj$ = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.ByteReadPacketBase.read_exahdj$', wrapFunction(function () {
    return function (n, block) {
      var tmp$;
      var head = this.head;
      var before = {v: head.readRemaining};
      if (before.v < n) {
        var $receiver = this.prepareRead_87ik6q$(n, head);
        var tmp$_0;
        before.v = (tmp$_0 = $receiver != null ? $receiver.readRemaining : null) != null ? tmp$_0 : 0;
        tmp$ = $receiver;
      }
       else {
        tmp$ = head;
      }
      var buffer = tmp$;
      if (buffer != null) {
        block(buffer);
        var after = buffer.readRemaining;
        var delta = before.v - after | 0;
        if (delta > 0) {
          this.headRemaining = this.headRemaining - delta | 0;
        }
        if (after === 0) {
          this.ensureNext_g6eaik$(buffer);
        }
      }
    };
  }));
  ByteReadPacketBase.prototype.readFully_359eei$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < (length * 2 | 0))
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' short integers');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_359eei$(dst, offset + copied.v | 0, length - copied.v | 0);
        if (rc === -1)
          throw new EOFException('Unexpected EOF while reading ' + length + ' bytes');
        copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketBase.prototype.readAvailable_359eei$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_359eei$(dst, offset, size);
    return size;
  };
  ByteReadPacketBase.prototype.readFully_nd5v6f$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < (length * 4 | 0))
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' integers');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_nd5v6f$(dst, offset + copied.v | 0, length - copied.v | 0);
        if (rc === -1)
          throw new EOFException('Unexpected EOF while read ' + length + ' short integers');
        copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketBase.prototype.readAvailable_nd5v6f$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_nd5v6f$(dst, offset, size);
    return size;
  };
  ByteReadPacketBase.prototype.readFully_rfv6wg$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < (length * 8 | 0))
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' long integers');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_rfv6wg$(dst, offset + copied.v | 0, length - copied.v | 0);
        if (rc === -1)
          throw new EOFException('Unexpected EOF while reading ' + length + ' long integers');
        copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketBase.prototype.readAvailable_rfv6wg$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_rfv6wg$(dst, offset, size);
    return size;
  };
  ByteReadPacketBase.prototype.readFully_kgymra$ = function (dst, offset, length) {
    if (this.remaining.toNumber() < (length * 4 | 0))
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' float numbers');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_kgymra$(dst, offset + copied.v | 0, length - copied.v | 0);
        if (rc === -1)
          throw new EOFException('Unexpected EOF while read ' + length + ' float number');
        copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketBase.prototype.readAvailable_kgymra$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_kgymra$(dst, offset, size);
    return size;
  };
  ByteReadPacketBase.prototype.readFully_6icyh1$ = function (dst, offset, length) {
    if (this.remaining.compareTo_11rb$(Kotlin.Long.fromInt(length).multiply(Kotlin.Long.fromInt(8))) < 0)
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' double float numbers');
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_6icyh1$(dst, offset + copied.v | 0, length - copied.v | 0);
        if (rc === -1)
          throw new EOFException('Unexpected EOF while reading ' + length + ' double float numbers');
        copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketBase.prototype.readAvailable_6icyh1$ = function (dst, offset, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var size = (remaining.compareTo_11rb$(b) <= 0 ? remaining : b).toInt();
    this.readFully_6icyh1$(dst, offset, size);
    return size;
  };
  function ByteReadPacketBase$readFully$lambda(closure$length) {
    return function () {
      return 'Not enough free space in destination buffer to write ' + closure$length + ' bytes';
    };
  }
  ByteReadPacketBase.prototype.readFully_bj0s3a$$default = function (dst, length) {
    if (this.remaining.toNumber() < length)
      throw IllegalArgumentException_init('Not enough bytes available (' + this.remaining.toString() + ') to read ' + length + ' bytes');
    if (!(length <= dst.writeRemaining)) {
      var m = new require$ObjectLiteral_1(ByteReadPacketBase$readFully$lambda(length));
      m.doFail();
    }
    var copied = {v: 0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var rc = current.readAvailable_bj0s3a$(dst, length - copied.v | 0);
        if (rc > 0)
          copied.v = copied.v + rc | 0;
        var continueFlag = copied.v < length;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
  };
  ByteReadPacketBase.prototype.readAvailable_bj0s3a$ = function (dst, length) {
    var remaining = this.remaining;
    if (equals(remaining, L0))
      return -1;
    var b = Kotlin.Long.fromInt(length);
    var c = Kotlin.Long.fromInt(dst.writeRemaining);
    var b_0 = b.compareTo_11rb$(c) <= 0 ? b : c;
    var size = (remaining.compareTo_11rb$(b_0) <= 0 ? remaining : b_0).toInt();
    this.readFully_bj0s3a$(dst, size);
    return size;
  };
  ByteReadPacketBase.prototype.tryPeek = function () {
    var tmp$, tmp$_0;
    var head = this.head;
    if (this.headRemaining > 0) {
      return head.tryPeek();
    }
    if (equals(this.tailRemaining_vgafwz$_0, L0) && this.noMoreChunksAvailable_hg7bja$_0)
      return -1;
    return (tmp$_0 = (tmp$ = this.prepareRead_87ik6q$(1, head)) != null ? tmp$.tryPeek() : null) != null ? tmp$_0 : -1;
  };
  ByteReadPacketBase.prototype.discard_s8cxhz$ = function (n) {
    var a = L2147483647;
    return Kotlin.Long.fromInt(this.discardAsMuchAsPossible_njj9ev$_0((a.compareTo_11rb$(n) <= 0 ? a : n).toInt(), 0));
  };
  function ByteReadPacketBase$readCbuf$ObjectLiteral(closure$cbuf, closure$off) {
    this.closure$cbuf = closure$cbuf;
    this.idx_0 = closure$off;
  }
  ByteReadPacketBase$readCbuf$ObjectLiteral.prototype.append_s8itvh$ = function (c) {
    var tmp$;
    this.closure$cbuf[tmp$ = this.idx_0, this.idx_0 = tmp$ + 1 | 0, tmp$] = c;
    return this;
  };
  ByteReadPacketBase$readCbuf$ObjectLiteral.prototype.append_gw00v9$ = function (csq) {
    var tmp$, tmp$_0;
    if (typeof csq === 'string') {
      getCharsInternal(csq, this.closure$cbuf, this.idx_0);
      this.idx_0 = this.idx_0 + csq.length | 0;
    }
     else if (csq != null) {
      tmp$ = csq.length;
      for (var i = 0; i < tmp$; i++) {
        this.closure$cbuf[tmp$_0 = this.idx_0, this.idx_0 = tmp$_0 + 1 | 0, tmp$_0] = csq.charCodeAt(i);
      }
    }
    return this;
  };
  ByteReadPacketBase$readCbuf$ObjectLiteral.prototype.append_ezbsdh$ = function (csq, start, end) {
    throw UnsupportedOperationException_init_0();
  };
  ByteReadPacketBase$readCbuf$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Appendable]
  };
  ByteReadPacketBase.prototype.readCbuf_uc2sr1$ = function (cbuf, off, len) {
    if (this.isEmpty)
      return -1;
    var out = new ByteReadPacketBase$readCbuf$ObjectLiteral(cbuf, off);
    return this.readText_5dvtqg$(out, 0, len);
  };
  ByteReadPacketBase.prototype.readText_5dvtqg$ = function (out, min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 2147483647;
    if (Kotlin.Long.fromInt(max).compareTo_11rb$(this.remaining) >= 0) {
      var s = readTextExactBytes(this, void 0, this.remaining.toInt());
      out.append_gw00v9$(s);
      return s.length;
    }
    return this.readASCII_2tb1j4$_0(out, min, max);
  };
  ByteReadPacketBase.prototype.readTextExact_a5kscm$ = function (out, exactCharacters) {
    this.readText_5dvtqg$(out, exactCharacters, exactCharacters);
  };
  ByteReadPacketBase.prototype.readText_vux9f0$ = function (min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 2147483647;
    if (min === 0 && (max === 0 || this.isEmpty))
      return '';
    if (Kotlin.Long.fromInt(max).compareTo_11rb$(this.remaining) >= 0)
      return readTextExactBytes(this, void 0, this.remaining.toInt());
    var $receiver = StringBuilder_init(coerceAtMost(coerceAtLeast(min, 16), max));
    this.readASCII_2tb1j4$_0($receiver, min, max);
    return $receiver.toString();
  };
  ByteReadPacketBase.prototype.readTextExact_za3lpa$ = function (exactCharacters) {
    return this.readText_vux9f0$(exactCharacters, exactCharacters);
  };
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  ByteReadPacketBase.prototype.readASCII_2tb1j4$_0 = function (out, min, max) {
    if (max === 0 && min === 0)
      return 0;
    else if (this.isEmpty)
      if (min === 0)
        return 0;
      else
        this.atLeastMinCharactersRequire_teiiy$_0(min);
    else if (max < min)
      this.minShouldBeLess_xcti56$_0(min, max);
    var copied = {v: 0};
    var utf8 = {v: false};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      loop_label: do {
        var buffer = current;
        var block$result;
        var decodeASCII$result;
        decodeASCII$break: do {
          var tmp$_1;
          tmp$_1 = buffer.readRemaining;
          for (var i = 0; i < tmp$_1; i++) {
            var v = buffer.readByte() & 255;
            var tmp$_2 = (v & 128) !== 0;
            if (!tmp$_2) {
              var it = toBoxedChar(toChar(v));
              var consumer$result;
              if (copied.v === max) {
                consumer$result = false;
              }
               else {
                out.append_s8itvh$(unboxChar(it));
                copied.v = copied.v + 1 | 0;
                consumer$result = true;
              }
              tmp$_2 = !consumer$result;
            }
            if (tmp$_2) {
              buffer.pushBack_za3lpa$(1);
              decodeASCII$result = false;
              break decodeASCII$break;
            }
          }
          decodeASCII$result = true;
        }
         while (false);
        var rc = decodeASCII$result;
        if (rc) {
          block$result = true;
        }
         else if (copied.v === max) {
          block$result = false;
        }
         else {
          utf8.v = true;
          block$result = false;
        }
        var continueFlag = block$result;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          this.$updateRemaining$_za3lpa$(after);
          break loop_label;
        }
      }
       while (true);
    }
     while (false);
    if (utf8.v) {
      return copied.v + this.readUtf8_ofs0ri$_0(out, min - copied.v | 0, max - copied.v | 0) | 0;
    }
    if (copied.v < min)
      this.prematureEndOfStreamChars_ff4hv3$_0(min, copied.v);
    return copied.v;
  };
  ByteReadPacketBase.prototype.atLeastMinCharactersRequire_teiiy$_0 = function (min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  };
  ByteReadPacketBase.prototype.minShouldBeLess_xcti56$_0 = function (min, max) {
    throw IllegalArgumentException_init('min should be less or equal to max but min = ' + min + ', max = ' + max);
  };
  ByteReadPacketBase.prototype.prematureEndOfStreamChars_ff4hv3$_0 = function (min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  };
  ByteReadPacketBase.prototype.prematureEndOfStream_f12g7w$_0 = function (size) {
    throw new MalformedUTF8InputException('Premature end of stream: expected ' + size + ' bytes');
  };
  ByteReadPacketBase.prototype.readUtf8_ofs0ri$_0 = function (out, min, max) {
    var copied = {v: 0};
    takeWhileSize$break: do {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = this.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size = 1;
      loop_label: do {
        var before = current.readRemaining;
        var after;
        if (before >= size) {
          try {
            var buffer = current;
            var block$result;
            var decodeUTF8$result;
            decodeUTF8$break: do {
              var byteCount = 0;
              var value = 0;
              var lastByteCount = 0;
              while (buffer.canRead()) {
                var v = buffer.readByte() & 255;
                if ((v & 128) === 0) {
                  if (byteCount !== 0)
                    malformedByteCount(byteCount);
                  var it = toBoxedChar(toChar(v));
                  var consumer$result;
                  if (copied.v === max) {
                    consumer$result = false;
                  }
                   else {
                    out.append_s8itvh$(unboxChar(it));
                    copied.v = copied.v + 1 | 0;
                    consumer$result = true;
                  }
                  if (!consumer$result) {
                    buffer.pushBack_za3lpa$(1);
                    decodeUTF8$result = -1;
                    break decodeUTF8$break;
                  }
                }
                 else if (byteCount === 0) {
                  var mask = 128;
                  value = v;
                  for (var i = 1; i <= 6; i++) {
                    if ((value & mask) !== 0) {
                      value = value & ~mask;
                      mask = mask >> 1;
                      byteCount = byteCount + 1 | 0;
                    }
                     else {
                      break;
                    }
                  }
                  lastByteCount = byteCount;
                  byteCount = byteCount - 1 | 0;
                  if (byteCount > buffer.readRemaining) {
                    buffer.pushBack_za3lpa$(1);
                    decodeUTF8$result = lastByteCount;
                    break decodeUTF8$break;
                  }
                }
                 else {
                  value = value << 6 | v & 127;
                  byteCount = byteCount - 1 | 0;
                  if (byteCount === 0) {
                    if (isBmpCodePoint(value)) {
                      var it_0 = toBoxedChar(toChar(value));
                      var consumer$result_0;
                      if (copied.v === max) {
                        consumer$result_0 = false;
                      }
                       else {
                        out.append_s8itvh$(unboxChar(it_0));
                        copied.v = copied.v + 1 | 0;
                        consumer$result_0 = true;
                      }
                      if (!consumer$result_0) {
                        buffer.pushBack_za3lpa$(lastByteCount);
                        decodeUTF8$result = -1;
                        break decodeUTF8$break;
                      }
                    }
                     else if (!isValidCodePoint(value)) {
                      malformedCodePoint(value);
                    }
                     else {
                      var it_1 = toBoxedChar(toChar(highSurrogate(value)));
                      var consumer$result_1;
                      if (copied.v === max) {
                        consumer$result_1 = false;
                      }
                       else {
                        out.append_s8itvh$(unboxChar(it_1));
                        copied.v = copied.v + 1 | 0;
                        consumer$result_1 = true;
                      }
                      var tmp$_2 = !consumer$result_1;
                      if (!tmp$_2) {
                        var it_2 = toBoxedChar(toChar(lowSurrogate(value)));
                        var consumer$result_2;
                        if (copied.v === max) {
                          consumer$result_2 = false;
                        }
                         else {
                          out.append_s8itvh$(unboxChar(it_2));
                          copied.v = copied.v + 1 | 0;
                          consumer$result_2 = true;
                        }
                        tmp$_2 = !consumer$result_2;
                      }
                      if (tmp$_2) {
                        buffer.pushBack_za3lpa$(lastByteCount);
                        decodeUTF8$result = -1;
                        break decodeUTF8$break;
                      }
                    }
                    value = 0;
                  }
                }
              }
              decodeUTF8$result = 0;
            }
             while (false);
            var size_0 = decodeUTF8$result;
            if (size_0 === 0) {
              block$result = 1;
            }
             else if (size_0 > 0) {
              block$result = size_0;
            }
             else {
              block$result = 0;
            }
            size = block$result;
          }
          finally {
            after = current.readRemaining;
          }
        }
         else {
          after = before;
        }
        if (after === 0) {
          tmp$_0 = this.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          current = tmp$_0;
        }
         else if (after < size) {
          this.$updateRemaining$_za3lpa$(after);
          tmp$_1 = this.$prepareRead$_za3lpa$(size);
          if (tmp$_1 == null) {
            break loop_label;
          }
          current = tmp$_1;
        }
         else {
          this.$updateRemaining$_za3lpa$(after);
        }
      }
       while (size > 0);
    }
     while (false);
    if (copied.v < min)
      this.prematureEndOfStreamChars_ff4hv3$_0(min, copied.v);
    return copied.v;
  };
  ByteReadPacketBase.prototype.discardAsMuchAsPossible_njj9ev$_0 = function (n, skipped) {
    var tmp$;
    if (n === 0)
      return skipped;
    tmp$ = this.prepareRead_87ik6q$(1, this.head);
    if (tmp$ == null) {
      return skipped;
    }
    var current = tmp$;
    var a = current.readRemaining;
    var size = Math_0.min(a, n);
    current.discardExact_za3lpa$(size);
    this.headRemaining = this.headRemaining - size | 0;
    this.afterRead_erddk1$_0();
    return this.discardAsMuchAsPossible_njj9ev$_0(n - size | 0, skipped + size | 0);
  };
  ByteReadPacketBase.prototype.readAsMuchAsPossible_v6e8td$_0 = function (array, offset, length, copied) {
    var tmp$, tmp$_0;
    if (length === 0)
      return copied;
    tmp$ = this.prepareRead_87ik6q$(1, this.head);
    if (tmp$ == null) {
      return copied;
    }
    var current = tmp$;
    var b = current.readRemaining;
    var size = Math_0.min(length, b);
    current.readFully_mj6st8$(array, offset, size);
    this.headRemaining = this.headRemaining - size | 0;
    if (size !== length || current.readRemaining === 0) {
      this.afterRead_erddk1$_0();
      tmp$_0 = this.readAsMuchAsPossible_v6e8td$_0(array, offset + size | 0, length - size | 0, copied + size | 0);
    }
     else {
      tmp$_0 = copied + size | 0;
    }
    return tmp$_0;
  };
  ByteReadPacketBase.prototype.readN_qe8g6p$_0 = function (n, block) {
    var tmp$;
    var bb = (tmp$ = this.prepareRead_87ik6q$(n, this.head)) != null ? tmp$ : this.notEnoughBytesAvailable_to1ln8$_0(n);
    var rc = block(bb);
    var after = bb.readRemaining;
    if (after === 0) {
      this.ensureNext_g6eaik$(bb);
    }
     else {
      this.headRemaining = after;
    }
    return rc;
  };
  ByteReadPacketBase.prototype.notEnoughBytesAvailable_to1ln8$_0 = function (n) {
    throw new EOFException('Not enough data in packet (' + this.remaining.toString() + ') to read ' + n + ' byte(s)');
  };
  ByteReadPacketBase.prototype.$updateRemaining$_za3lpa$ = function (remaining) {
    this.headRemaining = remaining;
  };
  ByteReadPacketBase.prototype.$prepareRead$_za3lpa$ = function (minSize) {
    return this.prepareRead_87ik6q$(minSize, this.head);
  };
  ByteReadPacketBase.prototype.$ensureNext$_g6eaik$ = function (current) {
    return this.ensureNext_g6eaik$(current);
  };
  ByteReadPacketBase.prototype.ensureNext_g6eaik$ = function (current) {
    return this.ensureNext_o27uys$_0(current, IoBuffer$Companion_getInstance().Empty);
  };
  ByteReadPacketBase.prototype.ensureNext_o27uys$_0 = function (current, empty) {
    var tmp$, tmp$_0;
    if (current === empty) {
      tmp$_0 = this.doFill();
    }
     else {
      var $receiver = current.next;
      current.release_cqjh9i$(this.pool);
      tmp$_0 = (tmp$ = $receiver) != null ? tmp$ : this.doFill();
    }
    var next = tmp$_0;
    if (next == null) {
      if (this.head !== empty) {
        this.head = empty;
        this.headRemaining = 0;
        this.tailRemaining_vgafwz$_0 = L0;
      }
      return null;
    }
    if (next.canRead()) {
      this.head = next;
      next.byteOrder = this.byteOrder;
      var nextRemaining = next.readRemaining;
      this.headRemaining = nextRemaining;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(nextRemaining));
      return next;
    }
     else {
      return this.ensureNext_o27uys$_0(next, empty);
    }
  };
  ByteReadPacketBase.prototype.doFill = function () {
    if (this.noMoreChunksAvailable_hg7bja$_0)
      return null;
    var chunk = this.fill();
    if (chunk == null) {
      this.noMoreChunksAvailable_hg7bja$_0 = true;
      return null;
    }
    this.appendView_2fdm73$(chunk);
    return chunk;
  };
  function ByteReadPacketBase$appendView$lambda() {
    throw IllegalStateException_init('It should be no tail remaining bytes if current tail is EmptyBuffer');
  }
  ByteReadPacketBase.prototype.appendView_2fdm73$ = function (chunk) {
    var tmp$, tmp$_0;
    var tail = findTail(this.head);
    if (tail === IoBuffer$Companion_getInstance().Empty) {
      this.head = chunk;
      chunk.byteOrder = this.byteOrder;
      if (!equals(this.tailRemaining_vgafwz$_0, L0)) {
        var m = new require$ObjectLiteral_1(ByteReadPacketBase$appendView$lambda);
        m.doFail();
      }
      this.headRemaining = chunk.readRemaining;
      this.tailRemaining_vgafwz$_0 = (tmp$_0 = (tmp$ = chunk.next) != null ? remainingAll(tmp$) : null) != null ? tmp$_0 : L0;
    }
     else {
      tail.next = chunk;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.add(remainingAll(chunk));
    }
  };
  ByteReadPacketBase.prototype.prepareRead_kcn2v3$ = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.ByteReadPacketBase.prepareRead_kcn2v3$', function (minSize) {
    return this.prepareRead_87ik6q$(minSize, this.head);
  });
  ByteReadPacketBase.prototype.prepareRead_87ik6q$ = function (minSize, head) {
    var tmp$, tmp$_0;
    var headSize = this.headRemaining;
    if (headSize >= minSize)
      return head;
    tmp$_0 = (tmp$ = head.next) != null ? tmp$ : this.doFill();
    if (tmp$_0 == null) {
      return null;
    }
    var next = tmp$_0;
    next.byteOrder = this.byteOrder;
    if (headSize === 0) {
      if (head !== IoBuffer$Companion_getInstance().Empty) {
        this.releaseHead_2fdm73$(head);
      }
      return this.prepareRead_87ik6q$(minSize, next);
    }
     else {
      var before = next.readRemaining;
      head.writeBufferAppend_ehtrw3$(next, minSize - headSize | 0);
      var after = next.readRemaining;
      this.headRemaining = head.readRemaining;
      this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(before - after | 0));
      if (after === 0) {
        head.next = next.next;
        next.release_cqjh9i$(this.pool);
      }
    }
    if (head.readRemaining >= minSize)
      return head;
    if (minSize > ByteReadPacketBase$Companion_getInstance().ReservedSize)
      this.minSizeIsTooBig_uba618$_0(minSize);
    return this.prepareRead_87ik6q$(minSize, head);
  };
  ByteReadPacketBase.prototype.minSizeIsTooBig_uba618$_0 = function (minSize) {
    throw IllegalStateException_init('minSize of ' + minSize + ' is too big (should be less than ' + ByteReadPacketBase$Companion_getInstance().ReservedSize);
  };
  ByteReadPacketBase.prototype.afterRead_erddk1$_0 = function () {
    var head = this.head;
    if (head.readRemaining === 0) {
      this.releaseHead_2fdm73$(head);
    }
  };
  ByteReadPacketBase.prototype.releaseHead_2fdm73$ = function (head) {
    var tmp$;
    var next = (tmp$ = head.next) != null ? tmp$ : IoBuffer$Companion_getInstance().Empty;
    this.head = next;
    var nextRemaining = next.readRemaining;
    this.headRemaining = nextRemaining;
    this.tailRemaining_vgafwz$_0 = this.tailRemaining_vgafwz$_0.subtract(Kotlin.Long.fromInt(nextRemaining));
    head.release_cqjh9i$(this.pool);
  };
  function ByteReadPacketBase$Companion() {
    ByteReadPacketBase$Companion_instance = this;
    this.Empty = ByteReadPacket_init(IoBuffer$Companion_getInstance().Empty, new ByteReadPacketBase$Companion$Empty$ObjectLiteral());
    this.ReservedSize = 8;
  }
  function ByteReadPacketBase$Companion$Empty$ObjectLiteral() {
    NoPoolImpl.call(this);
  }
  ByteReadPacketBase$Companion$Empty$ObjectLiteral.prototype.borrow = function () {
    return IoBuffer$Companion_getInstance().Empty;
  };
  ByteReadPacketBase$Companion$Empty$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NoPoolImpl]
  };
  ByteReadPacketBase$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ByteReadPacketBase$Companion_instance = null;
  function ByteReadPacketBase$Companion_getInstance() {
    if (ByteReadPacketBase$Companion_instance === null) {
      new ByteReadPacketBase$Companion();
    }
    return ByteReadPacketBase$Companion_instance;
  }
  ByteReadPacketBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteReadPacketBase',
    interfaces: [Input]
  };
  function discardUntilDelimiter($receiver, delimiter) {
    var discardedTotal = {v: L0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var chunk = current;
        var discarded = discardUntilDelimiterImpl(chunk, delimiter);
        discardedTotal.v = discardedTotal.v.add(Kotlin.Long.fromInt(discarded));
        var continueFlag = discarded > 0 && !chunk.canRead();
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          $receiver.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
    return discardedTotal.v;
  }
  function discardUntilDelimiters($receiver, delimiter1, delimiter2) {
    var discardedTotal = {v: L0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var chunk = current;
        var discarded = discardUntilDelimitersImpl(chunk, delimiter1, delimiter2);
        discardedTotal.v = discardedTotal.v.add(Kotlin.Long.fromInt(discarded));
        var continueFlag = discarded > 0 && !chunk.canRead();
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          $receiver.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
    return discardedTotal.v;
  }
  function readUntilDelimiter($receiver, delimiter, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    var currentOffset = {v: offset};
    var dstRemaining = {v: length};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var chunk = current;
        var copied = readUntilDelimiterImpl(chunk, delimiter, dst, currentOffset.v, dstRemaining.v);
        currentOffset.v = currentOffset.v + copied | 0;
        dstRemaining.v = dstRemaining.v - copied | 0;
        var continueFlag = dstRemaining.v > 0 && !chunk.canRead();
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          $receiver.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
    return currentOffset.v - offset | 0;
  }
  function readUntilDelimiters($receiver, delimiter1, delimiter2, dst, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = dst.length;
    if (delimiter1 === delimiter2)
      return readUntilDelimiter($receiver, delimiter1, dst, offset, length);
    var currentOffset = {v: offset};
    var dstRemaining = {v: length};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var chunk = current;
        var copied = readUntilDelimitersImpl(chunk, delimiter1, delimiter2, dst, currentOffset.v, dstRemaining.v);
        currentOffset.v = currentOffset.v + copied | 0;
        dstRemaining.v = dstRemaining.v - copied | 0;
        var continueFlag = !chunk.canRead() && dstRemaining.v > 0;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          $receiver.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
    return currentOffset.v - offset | 0;
  }
  function readUntilDelimiter_0($receiver, delimiter, dst) {
    var copiedTotal = {v: L0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var chunk = current;
        var copied = readUntilDelimiterImpl_0(chunk, delimiter, dst);
        copiedTotal.v = copiedTotal.v.add(Kotlin.Long.fromInt(copied));
        var continueFlag = !chunk.canRead();
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          $receiver.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
    return copiedTotal.v;
  }
  function readUntilDelimiters_0($receiver, delimiter1, delimiter2, dst) {
    var copiedTotal = {v: L0};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      do {
        var chunk = current;
        var copied = readUntilDelimitersImpl_0(chunk, delimiter1, delimiter2, dst);
        copiedTotal.v = copiedTotal.v.add(Kotlin.Long.fromInt(copied));
        var continueFlag = !chunk.canRead();
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          $receiver.$updateRemaining$_za3lpa$(after);
          break;
        }
      }
       while (true);
    }
     while (false);
    return copiedTotal.v;
  }
  var toByteArray = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.toByteArray_unvzlx$', wrapFunction(function () {
    var charsets = _.kotlinx.io.charsets;
    var encodeToByteArray = _.kotlinx.io.charsets.encodeToByteArray_478lbv$;
    return function ($receiver, charset) {
      if (charset === void 0)
        charset = charsets.Charsets.UTF_8;
      return encodeToByteArray(charset.newEncoder(), $receiver, 0, $receiver.length);
    };
  }));
  function readUTF8Line($receiver, estimate, limit) {
    if (estimate === void 0)
      estimate = 16;
    if (limit === void 0)
      limit = 2147483647;
    if ($receiver.isEmpty)
      return null;
    var sb = StringBuilder_init(estimate);
    return readUTF8LineTo($receiver, sb, limit) ? sb.toString() : null;
  }
  function readUTF8Line_0($receiver, estimate, limit) {
    if (estimate === void 0)
      estimate = 16;
    if (limit === void 0)
      limit = 2147483647;
    var sb = StringBuilder_init(estimate);
    return readUTF8LineTo($receiver, sb, limit) ? sb.toString() : null;
  }
  function readUTF8LineTo($receiver, out, limit) {
    var decoded = {v: 0};
    var size = {v: 1};
    var cr = {v: false};
    var end = {v: false};
    takeWhileSize$break: do {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size_0 = 1;
      loop_label: do {
        var before = current.readRemaining;
        var after;
        if (before >= size_0) {
          try {
            var buffer = current;
            var skip = {v: 0};
            var decodeUTF8$result;
            decodeUTF8$break: do {
              var byteCount = 0;
              var value = 0;
              var lastByteCount = 0;
              loop_label_0: while (buffer.canRead()) {
                var v = buffer.readByte() & 255;
                if ((v & 128) === 0) {
                  if (byteCount !== 0)
                    malformedByteCount(byteCount);
                  var ch = toBoxedChar(toChar(v));
                  var consumer$result;
                  consumer$break: do {
                    switch (unboxChar(ch)) {
                      case 13:
                        if (cr.v) {
                          end.v = true;
                          consumer$result = false;
                          break consumer$break;
                        }

                        cr.v = true;
                        consumer$result = true;
                        break consumer$break;
                      case 10:
                        end.v = true;
                        skip.v = 1;
                        consumer$result = false;
                        break consumer$break;
                      default:if (cr.v) {
                          end.v = true;
                          consumer$result = false;
                          break consumer$break;
                        }

                        if (decoded.v === limit)
                          bufferLimitExceeded(limit);
                        decoded.v = decoded.v + 1 | 0;
                        out.append_s8itvh$(unboxChar(ch));
                        consumer$result = true;
                        break consumer$break;
                    }
                  }
                   while (false);
                  if (!consumer$result) {
                    buffer.pushBack_za3lpa$(1);
                    decodeUTF8$result = -1;
                    break decodeUTF8$break;
                  }
                }
                 else if (byteCount === 0) {
                  var mask = 128;
                  value = v;
                  for (var i = 1; i <= 6; i++) {
                    if ((value & mask) !== 0) {
                      value = value & ~mask;
                      mask = mask >> 1;
                      byteCount = byteCount + 1 | 0;
                    }
                     else {
                      break;
                    }
                  }
                  lastByteCount = byteCount;
                  byteCount = byteCount - 1 | 0;
                  if (byteCount > buffer.readRemaining) {
                    buffer.pushBack_za3lpa$(1);
                    decodeUTF8$result = lastByteCount;
                    break decodeUTF8$break;
                  }
                }
                 else {
                  value = value << 6 | v & 127;
                  byteCount = byteCount - 1 | 0;
                  if (byteCount === 0) {
                    if (isBmpCodePoint(value)) {
                      var ch_0 = toBoxedChar(toChar(value));
                      var consumer$result_0;
                      consumer$break: do {
                        switch (unboxChar(ch_0)) {
                          case 13:
                            if (cr.v) {
                              end.v = true;
                              consumer$result_0 = false;
                              break consumer$break;
                            }

                            cr.v = true;
                            consumer$result_0 = true;
                            break consumer$break;
                          case 10:
                            end.v = true;
                            skip.v = 1;
                            consumer$result_0 = false;
                            break consumer$break;
                          default:if (cr.v) {
                              end.v = true;
                              consumer$result_0 = false;
                              break consumer$break;
                            }

                            if (decoded.v === limit)
                              bufferLimitExceeded(limit);
                            decoded.v = decoded.v + 1 | 0;
                            out.append_s8itvh$(unboxChar(ch_0));
                            consumer$result_0 = true;
                            break consumer$break;
                        }
                      }
                       while (false);
                      if (!consumer$result_0) {
                        buffer.pushBack_za3lpa$(lastByteCount);
                        decodeUTF8$result = -1;
                        break decodeUTF8$break;
                      }
                    }
                     else if (!isValidCodePoint(value)) {
                      malformedCodePoint(value);
                    }
                     else {
                      var ch_1 = toBoxedChar(toChar(highSurrogate(value)));
                      var consumer$result_1;
                      consumer$break: do {
                        switch (unboxChar(ch_1)) {
                          case 13:
                            if (cr.v) {
                              end.v = true;
                              consumer$result_1 = false;
                              break consumer$break;
                            }

                            cr.v = true;
                            consumer$result_1 = true;
                            break consumer$break;
                          case 10:
                            end.v = true;
                            skip.v = 1;
                            consumer$result_1 = false;
                            break consumer$break;
                          default:if (cr.v) {
                              end.v = true;
                              consumer$result_1 = false;
                              break consumer$break;
                            }

                            if (decoded.v === limit)
                              bufferLimitExceeded(limit);
                            decoded.v = decoded.v + 1 | 0;
                            out.append_s8itvh$(unboxChar(ch_1));
                            consumer$result_1 = true;
                            break consumer$break;
                        }
                      }
                       while (false);
                      var tmp$_2 = !consumer$result_1;
                      if (!tmp$_2) {
                        var ch_2 = toBoxedChar(toChar(lowSurrogate(value)));
                        var consumer$result_2;
                        consumer$break: do {
                          switch (unboxChar(ch_2)) {
                            case 13:
                              if (cr.v) {
                                end.v = true;
                                consumer$result_2 = false;
                                break consumer$break;
                              }

                              cr.v = true;
                              consumer$result_2 = true;
                              break consumer$break;
                            case 10:
                              end.v = true;
                              skip.v = 1;
                              consumer$result_2 = false;
                              break consumer$break;
                            default:if (cr.v) {
                                end.v = true;
                                consumer$result_2 = false;
                                break consumer$break;
                              }

                              if (decoded.v === limit)
                                bufferLimitExceeded(limit);
                              decoded.v = decoded.v + 1 | 0;
                              out.append_s8itvh$(unboxChar(ch_2));
                              consumer$result_2 = true;
                              break consumer$break;
                          }
                        }
                         while (false);
                        tmp$_2 = !consumer$result_2;
                      }
                      if (tmp$_2) {
                        buffer.pushBack_za3lpa$(lastByteCount);
                        decodeUTF8$result = -1;
                        break decodeUTF8$break;
                      }
                    }
                    value = 0;
                  }
                }
              }
              decodeUTF8$result = 0;
            }
             while (false);
            size.v = decodeUTF8$result;
            if (skip.v > 0) {
              buffer.discardExact_za3lpa$(skip.v);
            }
            size_0 = end.v ? 0 : coerceAtLeast(size.v, 1);
          }
          finally {
            after = current.readRemaining;
          }
        }
         else {
          after = before;
        }
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          current = tmp$_0;
        }
         else if (after < size_0) {
          $receiver.$updateRemaining$_za3lpa$(after);
          tmp$_1 = $receiver.$prepareRead$_za3lpa$(size_0);
          if (tmp$_1 == null) {
            break loop_label;
          }
          current = tmp$_1;
        }
         else {
          $receiver.$updateRemaining$_za3lpa$(after);
        }
      }
       while (size_0 > 0);
    }
     while (false);
    if (size.v > 1)
      prematureEndOfStream(size.v);
    return decoded.v > 0 || !$receiver.endOfInput;
  }
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  function readUTF8UntilDelimiter($receiver, delimiters, limit) {
    if (limit === void 0)
      limit = 2147483647;
    var $receiver_0 = StringBuilder_init_0();
    readUTF8UntilDelimiterTo($receiver, $receiver_0, delimiters, limit);
    return $receiver_0.toString();
  }
  function readUTF8UntilDelimiterTo($receiver, out, delimiters, limit) {
    if (limit === void 0)
      limit = 2147483647;
    var decoded = {v: 0};
    var delimiter = {v: false};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      loop_label: do {
        var buffer = current;
        var decodeASCII$result;
        decodeASCII$break: do {
          var tmp$_1;
          tmp$_1 = buffer.readRemaining;
          for (var i = 0; i < tmp$_1; i++) {
            var v = buffer.readByte() & 255;
            var tmp$_2 = (v & 128) !== 0;
            if (!tmp$_2) {
              var ch = toBoxedChar(toChar(v));
              var consumer$result;
              if (contains(delimiters, unboxChar(ch))) {
                delimiter.v = true;
                consumer$result = false;
              }
               else {
                if (decoded.v === limit)
                  bufferLimitExceeded(limit);
                decoded.v = decoded.v + 1 | 0;
                out.append_s8itvh$(unboxChar(ch));
                consumer$result = true;
              }
              tmp$_2 = !consumer$result;
            }
            if (tmp$_2) {
              buffer.pushBack_za3lpa$(1);
              decodeASCII$result = false;
              break decodeASCII$break;
            }
          }
          decodeASCII$result = true;
        }
         while (false);
        var continueFlag = decodeASCII$result;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          $receiver.$updateRemaining$_za3lpa$(after);
          break loop_label;
        }
      }
       while (true);
    }
     while (false);
    if (!delimiter.v) {
      decoded.v = readUTF8UntilDelimiterToSlowUtf8($receiver, out, delimiters, limit, decoded.v);
    }
    return decoded.v;
  }
  function readUTF8UntilDelimiterToSlowUtf8($receiver, out, delimiters, limit, decoded0) {
    var decoded = {v: decoded0};
    var size = {v: 1};
    takeWhileSize$break: do {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size_0 = 1;
      loop_label: do {
        var before = current.readRemaining;
        var after;
        if (before >= size_0) {
          try {
            var buffer = current;
            var decodeUTF8$result;
            decodeUTF8$break: do {
              var byteCount = 0;
              var value = 0;
              var lastByteCount = 0;
              while (buffer.canRead()) {
                var v = buffer.readByte() & 255;
                if ((v & 128) === 0) {
                  if (byteCount !== 0)
                    malformedByteCount(byteCount);
                  var ch = toBoxedChar(toChar(v));
                  var consumer$result;
                  if (contains(delimiters, unboxChar(ch))) {
                    consumer$result = false;
                  }
                   else {
                    if (decoded.v === limit) {
                      bufferLimitExceeded(limit);
                    }
                    decoded.v = decoded.v + 1 | 0;
                    out.append_s8itvh$(unboxChar(ch));
                    consumer$result = true;
                  }
                  if (!consumer$result) {
                    buffer.pushBack_za3lpa$(1);
                    decodeUTF8$result = -1;
                    break decodeUTF8$break;
                  }
                }
                 else if (byteCount === 0) {
                  var mask = 128;
                  value = v;
                  for (var i = 1; i <= 6; i++) {
                    if ((value & mask) !== 0) {
                      value = value & ~mask;
                      mask = mask >> 1;
                      byteCount = byteCount + 1 | 0;
                    }
                     else {
                      break;
                    }
                  }
                  lastByteCount = byteCount;
                  byteCount = byteCount - 1 | 0;
                  if (byteCount > buffer.readRemaining) {
                    buffer.pushBack_za3lpa$(1);
                    decodeUTF8$result = lastByteCount;
                    break decodeUTF8$break;
                  }
                }
                 else {
                  value = value << 6 | v & 127;
                  byteCount = byteCount - 1 | 0;
                  if (byteCount === 0) {
                    if (isBmpCodePoint(value)) {
                      var ch_0 = toBoxedChar(toChar(value));
                      var consumer$result_0;
                      if (contains(delimiters, unboxChar(ch_0))) {
                        consumer$result_0 = false;
                      }
                       else {
                        if (decoded.v === limit) {
                          bufferLimitExceeded(limit);
                        }
                        decoded.v = decoded.v + 1 | 0;
                        out.append_s8itvh$(unboxChar(ch_0));
                        consumer$result_0 = true;
                      }
                      if (!consumer$result_0) {
                        buffer.pushBack_za3lpa$(lastByteCount);
                        decodeUTF8$result = -1;
                        break decodeUTF8$break;
                      }
                    }
                     else if (!isValidCodePoint(value)) {
                      malformedCodePoint(value);
                    }
                     else {
                      var ch_1 = toBoxedChar(toChar(highSurrogate(value)));
                      var consumer$result_1;
                      if (contains(delimiters, unboxChar(ch_1))) {
                        consumer$result_1 = false;
                      }
                       else {
                        if (decoded.v === limit) {
                          bufferLimitExceeded(limit);
                        }
                        decoded.v = decoded.v + 1 | 0;
                        out.append_s8itvh$(unboxChar(ch_1));
                        consumer$result_1 = true;
                      }
                      var tmp$_2 = !consumer$result_1;
                      if (!tmp$_2) {
                        var ch_2 = toBoxedChar(toChar(lowSurrogate(value)));
                        var consumer$result_2;
                        if (contains(delimiters, unboxChar(ch_2))) {
                          consumer$result_2 = false;
                        }
                         else {
                          if (decoded.v === limit) {
                            bufferLimitExceeded(limit);
                          }
                          decoded.v = decoded.v + 1 | 0;
                          out.append_s8itvh$(unboxChar(ch_2));
                          consumer$result_2 = true;
                        }
                        tmp$_2 = !consumer$result_2;
                      }
                      if (tmp$_2) {
                        buffer.pushBack_za3lpa$(lastByteCount);
                        decodeUTF8$result = -1;
                        break decodeUTF8$break;
                      }
                    }
                    value = 0;
                  }
                }
              }
              decodeUTF8$result = 0;
            }
             while (false);
            size.v = decodeUTF8$result;
            size.v = size.v === -1 ? 0 : coerceAtLeast(size.v, 1);
            size_0 = size.v;
          }
          finally {
            after = current.readRemaining;
          }
        }
         else {
          after = before;
        }
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          current = tmp$_0;
        }
         else if (after < size_0) {
          $receiver.$updateRemaining$_za3lpa$(after);
          tmp$_1 = $receiver.$prepareRead$_za3lpa$(size_0);
          if (tmp$_1 == null) {
            break loop_label;
          }
          current = tmp$_1;
        }
         else {
          $receiver.$updateRemaining$_za3lpa$(after);
        }
      }
       while (size_0 > 0);
    }
     while (false);
    if (size.v > 1)
      prematureEndOfStream(size.v);
    return decoded.v;
  }
  function readUTF8UntilDelimiterTo_0($receiver, out, delimiters, limit) {
    if (limit === void 0)
      limit = 2147483647;
    var delimitersCount = delimiters.length;
    var tmp$ = delimitersCount === 1;
    if (tmp$) {
      tmp$ = (delimiters.charCodeAt(0) | 0) <= 127;
    }
    if (tmp$) {
      return readUntilDelimiter_0($receiver, toByte(delimiters.charCodeAt(0) | 0), out).toInt();
    }
     else {
      var tmp$_0 = delimitersCount === 2;
      if (tmp$_0) {
        tmp$_0 = (delimiters.charCodeAt(0) | 0) <= 127;
      }
      var tmp$_1 = tmp$_0;
      if (tmp$_1) {
        tmp$_1 = (delimiters.charCodeAt(1) | 0) <= 127;
      }
      if (tmp$_1) {
        return readUntilDelimiters_0($receiver, toByte(delimiters.charCodeAt(0) | 0), toByte(delimiters.charCodeAt(1) | 0), out).toInt();
      }
    }
    return readUTFUntilDelimiterToSlowAscii($receiver, delimiters, limit, out);
  }
  function isAsciiChar($receiver) {
    return ($receiver | 0) <= 127;
  }
  function readUTFUntilDelimiterToSlowAscii($receiver, delimiters, limit, out) {
    var decoded = {v: 0};
    var delimiter = {v: false};
    takeWhile$break: do {
      var tmp$, tmp$_0;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhile$break;
      }
      var current = tmp$;
      loop_label: do {
        var buffer = current;
        var before = buffer.readRemaining;
        var decodeASCII$result;
        decodeASCII$break: do {
          var tmp$_1;
          tmp$_1 = buffer.readRemaining;
          for (var i = 0; i < tmp$_1; i++) {
            var v = buffer.readByte() & 255;
            var tmp$_2 = (v & 128) !== 0;
            if (!tmp$_2) {
              var consumer$result;
              if (contains(delimiters, unboxChar(toBoxedChar(toChar(v))))) {
                delimiter.v = true;
                consumer$result = false;
              }
               else {
                if (decoded.v === limit)
                  bufferLimitExceeded(limit);
                decoded.v = decoded.v + 1 | 0;
                consumer$result = true;
              }
              tmp$_2 = !consumer$result;
            }
            if (tmp$_2) {
              buffer.pushBack_za3lpa$(1);
              decodeASCII$result = false;
              break decodeASCII$break;
            }
          }
          decodeASCII$result = true;
        }
         while (false);
        var rc = decodeASCII$result;
        var delta = before - buffer.readRemaining | 0;
        if (delta > 0) {
          buffer.pushBack_za3lpa$(delta);
          out.writeFully_bj0s3a$(buffer, delta);
        }
        var continueFlag = rc;
        var after = current.readRemaining;
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          current = tmp$_0;
        }
         else if (!continueFlag) {
          $receiver.$updateRemaining$_za3lpa$(after);
          break loop_label;
        }
      }
       while (true);
    }
     while (false);
    if (!delimiter.v && !$receiver.endOfInput) {
      decoded.v = readUTF8UntilDelimiterToSlowUtf8_0($receiver, out, delimiters, limit, decoded.v);
    }
    return decoded.v;
  }
  function readUTF8UntilDelimiterToSlowUtf8_0($receiver, out, delimiters, limit, decoded0) {
    var decoded = {v: decoded0};
    var size = {v: 1};
    takeWhileSize$break: do {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = $receiver.$prepareRead$_za3lpa$(1);
      if (tmp$ == null) {
        break takeWhileSize$break;
      }
      var current = tmp$;
      var size_0 = 1;
      loop_label: do {
        var before = current.readRemaining;
        var after;
        if (before >= size_0) {
          try {
            var buffer = current;
            var before_0 = buffer.readRemaining;
            var decodeUTF8$result;
            decodeUTF8$break: do {
              var byteCount = 0;
              var value = 0;
              var lastByteCount = 0;
              while (buffer.canRead()) {
                var v = buffer.readByte() & 255;
                if ((v & 128) === 0) {
                  if (byteCount !== 0)
                    malformedByteCount(byteCount);
                  var consumer$result;
                  if (contains(delimiters, unboxChar(toBoxedChar(toChar(v))))) {
                    consumer$result = false;
                  }
                   else {
                    if (decoded.v === limit) {
                      bufferLimitExceeded(limit);
                    }
                    decoded.v = decoded.v + 1 | 0;
                    consumer$result = true;
                  }
                  if (!consumer$result) {
                    buffer.pushBack_za3lpa$(1);
                    decodeUTF8$result = -1;
                    break decodeUTF8$break;
                  }
                }
                 else if (byteCount === 0) {
                  var mask = 128;
                  value = v;
                  for (var i = 1; i <= 6; i++) {
                    if ((value & mask) !== 0) {
                      value = value & ~mask;
                      mask = mask >> 1;
                      byteCount = byteCount + 1 | 0;
                    }
                     else {
                      break;
                    }
                  }
                  lastByteCount = byteCount;
                  byteCount = byteCount - 1 | 0;
                  if (byteCount > buffer.readRemaining) {
                    buffer.pushBack_za3lpa$(1);
                    decodeUTF8$result = lastByteCount;
                    break decodeUTF8$break;
                  }
                }
                 else {
                  value = value << 6 | v & 127;
                  byteCount = byteCount - 1 | 0;
                  if (byteCount === 0) {
                    if (isBmpCodePoint(value)) {
                      var consumer$result_0;
                      if (contains(delimiters, unboxChar(toBoxedChar(toChar(value))))) {
                        consumer$result_0 = false;
                      }
                       else {
                        if (decoded.v === limit) {
                          bufferLimitExceeded(limit);
                        }
                        decoded.v = decoded.v + 1 | 0;
                        consumer$result_0 = true;
                      }
                      if (!consumer$result_0) {
                        buffer.pushBack_za3lpa$(lastByteCount);
                        decodeUTF8$result = -1;
                        break decodeUTF8$break;
                      }
                    }
                     else if (!isValidCodePoint(value)) {
                      malformedCodePoint(value);
                    }
                     else {
                      var consumer$result_1;
                      if (contains(delimiters, unboxChar(toBoxedChar(toChar(highSurrogate(value)))))) {
                        consumer$result_1 = false;
                      }
                       else {
                        if (decoded.v === limit) {
                          bufferLimitExceeded(limit);
                        }
                        decoded.v = decoded.v + 1 | 0;
                        consumer$result_1 = true;
                      }
                      var tmp$_2 = !consumer$result_1;
                      if (!tmp$_2) {
                        var consumer$result_2;
                        if (contains(delimiters, unboxChar(toBoxedChar(toChar(lowSurrogate(value)))))) {
                          consumer$result_2 = false;
                        }
                         else {
                          if (decoded.v === limit) {
                            bufferLimitExceeded(limit);
                          }
                          decoded.v = decoded.v + 1 | 0;
                          consumer$result_2 = true;
                        }
                        tmp$_2 = !consumer$result_2;
                      }
                      if (tmp$_2) {
                        buffer.pushBack_za3lpa$(lastByteCount);
                        decodeUTF8$result = -1;
                        break decodeUTF8$break;
                      }
                    }
                    value = 0;
                  }
                }
              }
              decodeUTF8$result = 0;
            }
             while (false);
            size.v = decodeUTF8$result;
            var delta = before_0 - buffer.readRemaining | 0;
            if (delta > 0) {
              buffer.pushBack_za3lpa$(delta);
              out.writeFully_bj0s3a$(buffer, delta);
            }
            size.v = size.v === -1 ? 0 : coerceAtLeast(size.v, 1);
            size_0 = size.v;
          }
          finally {
            after = current.readRemaining;
          }
        }
         else {
          after = before;
        }
        if (after === 0) {
          tmp$_0 = $receiver.$ensureNext$_g6eaik$(current);
          if (tmp$_0 == null) {
            break loop_label;
          }
          current = tmp$_0;
        }
         else if (after < size_0) {
          $receiver.$updateRemaining$_za3lpa$(after);
          tmp$_1 = $receiver.$prepareRead$_za3lpa$(size_0);
          if (tmp$_1 == null) {
            break loop_label;
          }
          current = tmp$_1;
        }
         else {
          $receiver.$updateRemaining$_za3lpa$(after);
        }
      }
       while (size_0 > 0);
    }
     while (false);
    if (size.v > 1)
      prematureEndOfStream(size.v);
    return decoded.v;
  }
  function bufferLimitExceeded(limit) {
    throw new BufferLimitExceededException('Too many characters before delimiter: limit ' + limit + ' exceeded');
  }
  function prematureEndOfStream(size) {
    throw new MalformedUTF8InputException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readBytes($receiver, n) {
    if (n === void 0) {
      var $receiver_0 = $receiver.remaining;
      var message = 'Unable to convert to a ByteArray: packet is too big';
      if ($receiver_0.compareTo_11rb$(L2147483647) > 0)
        throw IllegalArgumentException_init(message);
      n = $receiver_0.toInt();
    }
    var $receiver_1 = new Int8Array(n);
    $receiver.readFully_mj6st8$($receiver_1, 0, n);
    return $receiver_1;
  }
  function readBytes_0($receiver, n) {
    return readBytesOf($receiver, n, n);
  }
  function readBytes_1($receiver) {
    return readBytesOf($receiver);
  }
  function readBytesOf($receiver, min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 2147483647;
    if (min === max) {
      var $receiver_0 = new Int8Array(min);
      $receiver.readFully_mj6st8$($receiver_0, 0, min);
      return $receiver_0;
    }
     else {
      var array = new Int8Array(coerceAtLeast_0(coerceAtMost_0(Kotlin.Long.fromInt(max), sizeEstimate($receiver)), Kotlin.Long.fromInt(min)).toInt());
      var size = 0;
      while (size < max) {
        var b = array.length;
        var partSize = Math_0.min(max, b) - size | 0;
        var rc = $receiver.readAvailable_mj6st8$(array, size, partSize);
        if (rc <= 0)
          break;
        size = size + rc | 0;
        if (array.length === size) {
          array = copyOf(array, size * 2 | 0);
        }
      }
      if (size < min)
        throw new EOFException('Not enough bytes available to read ' + min + ' bytes: ' + (min - size | 0) + ' more required');
      return size === array.length ? array : copyOf(array, size);
    }
  }
  function readText_1($receiver, out, decoder, max) {
    if (max === void 0)
      max = 2147483647;
    return decode(decoder, $receiver, out, max);
  }
  function readText_2($receiver, out, charset, max) {
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    if (max === void 0)
      max = 2147483647;
    return decode(charset.newDecoder(), $receiver, out, max);
  }
  function readText_3($receiver, decoder, max) {
    if (max === void 0)
      max = 2147483647;
    return decode_0(decoder, $receiver, max);
  }
  function readText_4($receiver, charset, max) {
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    if (max === void 0)
      max = 2147483647;
    return decode_0(charset.newDecoder(), $receiver, max);
  }
  function readTextExact($receiver, charset, n) {
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    var s = readText_4($receiver, charset, n);
    if (s.length < n)
      throw new EOFException('Not enough data available to read ' + n + ' characters');
    return s;
  }
  function readTextExactBytes($receiver, charset, bytes) {
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    return decodeExactBytes(charset.newDecoder(), $receiver, bytes);
  }
  function writeText($receiver, text, fromIndex, toIndex, encoder) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = text.length;
    encode(encoder, text, fromIndex, toIndex, $receiver);
  }
  function writeText_0($receiver, text, fromIndex, toIndex, charset) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = text.length;
    if (charset === void 0)
      charset = Charsets_getInstance().UTF_8;
    writeText($receiver, text, fromIndex, toIndex, charset.newEncoder());
  }
  var use_0 = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.use_vgxmmh$', function ($receiver, block) {
    var tmp$;
    try {
      tmp$ = block($receiver);
    }
    finally {
      $receiver.close();
    }
    return tmp$;
  });
  var use_1 = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.use_8z0ghk$', function ($receiver, block) {
    var tmp$;
    try {
      tmp$ = block($receiver);
    }
    finally {
      $receiver.close();
    }
    return tmp$;
  });
  var require_0 = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.internal.require_87ejdh$', wrapFunction(function () {
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var RequireFailureCapture = _.kotlinx.io.core.internal.RequireFailureCapture;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    require$ObjectLiteral.prototype = Object.create(RequireFailureCapture.prototype);
    require$ObjectLiteral.prototype.constructor = require$ObjectLiteral;
    function require$ObjectLiteral(closure$message) {
      this.closure$message = closure$message;
      RequireFailureCapture.call(this);
    }
    require$ObjectLiteral.prototype.doFail = function () {
      throw IllegalArgumentException_init(this.closure$message());
    };
    require$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [RequireFailureCapture]
    };
    return function (condition, message) {
      if (!condition) {
        var m = new require$ObjectLiteral(message);
        m.doFail();
      }
    };
  }));
  function RequireFailureCapture() {
  }
  RequireFailureCapture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequireFailureCapture',
    interfaces: []
  };
  var decodeASCII = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.internal.decodeASCII_x3zd4c$', wrapFunction(function () {
    var toChar = Kotlin.toChar;
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, consumer) {
      var tmp$;
      tmp$ = $receiver.readRemaining;
      for (var i = 0; i < tmp$; i++) {
        var v = $receiver.readByte() & 255;
        if ((v & 128) !== 0 || !consumer(toBoxedChar(toChar(v)))) {
          $receiver.pushBack_za3lpa$(1);
          return false;
        }
      }
      return true;
    };
  }));
  function decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decodeUTF8LineLoopSuspend(out_0, limit_0, nextChunk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$decoded = void 0;
    this.local$size = void 0;
    this.local$cr = void 0;
    this.local$end = void 0;
    this.local$out = out_0;
    this.local$limit = limit_0;
    this.local$nextChunk = nextChunk_0;
  }
  Coroutine$decodeUTF8LineLoopSuspend.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeUTF8LineLoopSuspend.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeUTF8LineLoopSuspend.prototype.constructor = Coroutine$decodeUTF8LineLoopSuspend;
  Coroutine$decodeUTF8LineLoopSuspend.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$decoded = {v: 0};
            this.local$size = {v: 1};
            this.local$cr = {v: false};
            this.local$end = {v: false};
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$end.v || this.local$size.v === 0) {
              this.state_0 = 5;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = this.local$nextChunk(this.local$size.v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var chunk = this.local$tmp$;
            takeWhileSize$break: do {
              var tmp$, tmp$_0, tmp$_1;
              tmp$ = chunk.$prepareRead$_za3lpa$(1);
              if (tmp$ == null) {
                break takeWhileSize$break;
              }
              var current = tmp$;
              var size = 1;
              loop_label: do {
                var before = current.readRemaining;
                var after;
                if (before >= size) {
                  try {
                    var buffer = current;
                    var skip = {v: 0};
                    var decodeUTF8$result;
                    decodeUTF8$break: do {
                      var byteCount = 0;
                      var value = 0;
                      var lastByteCount = 0;
                      loop_label_0: while (buffer.canRead()) {
                        var v = buffer.readByte() & 255;
                        if ((v & 128) === 0) {
                          if (byteCount !== 0)
                            malformedByteCount(byteCount);
                          var ch = toBoxedChar(toChar(v));
                          var consumer$result;
                          consumer$break: do {
                            switch (unboxChar(ch)) {
                              case 13:
                                if (this.local$cr.v) {
                                  this.local$end.v = true;
                                  consumer$result = false;
                                  break consumer$break;
                                }

                                this.local$cr.v = true;
                                consumer$result = true;
                                break consumer$break;
                              case 10:
                                this.local$end.v = true;
                                skip.v = 1;
                                consumer$result = false;
                                break consumer$break;
                              default:if (this.local$cr.v) {
                                  this.local$end.v = true;
                                  consumer$result = false;
                                  break consumer$break;
                                }

                                if (this.local$decoded.v === this.local$limit) {
                                  throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                }

                                this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                this.local$out.append_s8itvh$(unboxChar(ch));
                                consumer$result = true;
                                break consumer$break;
                            }
                          }
                           while (false);
                          if (!consumer$result) {
                            buffer.pushBack_za3lpa$(1);
                            decodeUTF8$result = -1;
                            break decodeUTF8$break;
                          }
                        }
                         else if (byteCount === 0) {
                          var mask = 128;
                          value = v;
                          for (var i = 1; i <= 6; i++) {
                            if ((value & mask) !== 0) {
                              value = value & ~mask;
                              mask = mask >> 1;
                              byteCount = byteCount + 1 | 0;
                            }
                             else {
                              break;
                            }
                          }
                          lastByteCount = byteCount;
                          byteCount = byteCount - 1 | 0;
                          if (byteCount > buffer.readRemaining) {
                            buffer.pushBack_za3lpa$(1);
                            decodeUTF8$result = lastByteCount;
                            break decodeUTF8$break;
                          }
                        }
                         else {
                          value = value << 6 | v & 127;
                          byteCount = byteCount - 1 | 0;
                          if (byteCount === 0) {
                            if (isBmpCodePoint(value)) {
                              var ch_0 = toBoxedChar(toChar(value));
                              var consumer$result_0;
                              consumer$break: do {
                                switch (unboxChar(ch_0)) {
                                  case 13:
                                    if (this.local$cr.v) {
                                      this.local$end.v = true;
                                      consumer$result_0 = false;
                                      break consumer$break;
                                    }

                                    this.local$cr.v = true;
                                    consumer$result_0 = true;
                                    break consumer$break;
                                  case 10:
                                    this.local$end.v = true;
                                    skip.v = 1;
                                    consumer$result_0 = false;
                                    break consumer$break;
                                  default:if (this.local$cr.v) {
                                      this.local$end.v = true;
                                      consumer$result_0 = false;
                                      break consumer$break;
                                    }

                                    if (this.local$decoded.v === this.local$limit) {
                                      throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                    }

                                    this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                    this.local$out.append_s8itvh$(unboxChar(ch_0));
                                    consumer$result_0 = true;
                                    break consumer$break;
                                }
                              }
                               while (false);
                              if (!consumer$result_0) {
                                buffer.pushBack_za3lpa$(lastByteCount);
                                decodeUTF8$result = -1;
                                break decodeUTF8$break;
                              }
                            }
                             else if (!isValidCodePoint(value)) {
                              malformedCodePoint(value);
                            }
                             else {
                              var ch_1 = toBoxedChar(toChar(highSurrogate(value)));
                              var consumer$result_1;
                              consumer$break: do {
                                switch (unboxChar(ch_1)) {
                                  case 13:
                                    if (this.local$cr.v) {
                                      this.local$end.v = true;
                                      consumer$result_1 = false;
                                      break consumer$break;
                                    }

                                    this.local$cr.v = true;
                                    consumer$result_1 = true;
                                    break consumer$break;
                                  case 10:
                                    this.local$end.v = true;
                                    skip.v = 1;
                                    consumer$result_1 = false;
                                    break consumer$break;
                                  default:if (this.local$cr.v) {
                                      this.local$end.v = true;
                                      consumer$result_1 = false;
                                      break consumer$break;
                                    }

                                    if (this.local$decoded.v === this.local$limit) {
                                      throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                    }

                                    this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                    this.local$out.append_s8itvh$(unboxChar(ch_1));
                                    consumer$result_1 = true;
                                    break consumer$break;
                                }
                              }
                               while (false);
                              var tmp$_2 = !consumer$result_1;
                              if (!tmp$_2) {
                                var ch_2 = toBoxedChar(toChar(lowSurrogate(value)));
                                var consumer$result_2;
                                consumer$break: do {
                                  switch (unboxChar(ch_2)) {
                                    case 13:
                                      if (this.local$cr.v) {
                                        this.local$end.v = true;
                                        consumer$result_2 = false;
                                        break consumer$break;
                                      }

                                      this.local$cr.v = true;
                                      consumer$result_2 = true;
                                      break consumer$break;
                                    case 10:
                                      this.local$end.v = true;
                                      skip.v = 1;
                                      consumer$result_2 = false;
                                      break consumer$break;
                                    default:if (this.local$cr.v) {
                                        this.local$end.v = true;
                                        consumer$result_2 = false;
                                        break consumer$break;
                                      }

                                      if (this.local$decoded.v === this.local$limit) {
                                        throw new BufferLimitExceededException('Too many characters in line: limit ' + this.local$limit + ' exceeded');
                                      }

                                      this.local$decoded.v = this.local$decoded.v + 1 | 0;
                                      this.local$out.append_s8itvh$(unboxChar(ch_2));
                                      consumer$result_2 = true;
                                      break consumer$break;
                                  }
                                }
                                 while (false);
                                tmp$_2 = !consumer$result_2;
                              }
                              if (tmp$_2) {
                                buffer.pushBack_za3lpa$(lastByteCount);
                                decodeUTF8$result = -1;
                                break decodeUTF8$break;
                              }
                            }
                            value = 0;
                          }
                        }
                      }
                      decodeUTF8$result = 0;
                    }
                     while (false);
                    this.local$size.v = decodeUTF8$result;
                    if (skip.v > 0) {
                      buffer.discardExact_za3lpa$(skip.v);
                    }
                    this.local$size.v = this.local$end.v ? 0 : coerceAtLeast(this.local$size.v, 1);
                    size = this.local$size.v;
                  }
                  finally {
                    after = current.readRemaining;
                  }
                }
                 else {
                  after = before;
                }
                if (after === 0) {
                  tmp$_0 = chunk.$ensureNext$_g6eaik$(current);
                  if (tmp$_0 == null) {
                    break loop_label;
                  }
                  current = tmp$_0;
                }
                 else if (after < size) {
                  chunk.$updateRemaining$_za3lpa$(after);
                  tmp$_1 = chunk.$prepareRead$_za3lpa$(size);
                  if (tmp$_1 == null) {
                    break loop_label;
                  }
                  current = tmp$_1;
                }
                 else {
                  chunk.$updateRemaining$_za3lpa$(after);
                }
              }
               while (size > 0);
            }
             while (false);
            this.state_0 = 2;
            continue;
          case 5:
            if (this.local$size.v > 1)
              prematureEndOfStreamUtf(this.local$size.v);
            if (this.local$cr.v) {
              this.local$end.v = true;
            }

            return this.local$decoded.v > 0 || this.local$end.v;
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
  function prematureEndOfStreamUtf(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes to decode UTF-8 char');
  }
  var decodeUTF8 = defineInlineFunction('kotlinx-io-js.kotlinx.io.core.internal.decodeUTF8_x3zd4c$', wrapFunction(function () {
    var toChar = Kotlin.toChar;
    var toBoxedChar = Kotlin.toBoxedChar;
    return function ($receiver, consumer) {
      var byteCount = 0;
      var value = 0;
      var lastByteCount = 0;
      while ($receiver.canRead()) {
        var v = $receiver.readByte() & 255;
        if ((v & 128) === 0) {
          if (byteCount !== 0)
            malformedByteCount(byteCount);
          if (!consumer(toBoxedChar(toChar(v)))) {
            $receiver.pushBack_za3lpa$(1);
            return -1;
          }
        }
         else if (byteCount === 0) {
          var mask = 128;
          value = v;
          for (var i = 1; i <= 6; i++) {
            if ((value & mask) !== 0) {
              value = value & ~mask;
              mask = mask >> 1;
              byteCount = byteCount + 1 | 0;
            }
             else {
              break;
            }
          }
          lastByteCount = byteCount;
          byteCount = byteCount - 1 | 0;
          if (byteCount > $receiver.readRemaining) {
            $receiver.pushBack_za3lpa$(1);
            return lastByteCount;
          }
        }
         else {
          value = value << 6 | v & 127;
          byteCount = byteCount - 1 | 0;
          if (byteCount === 0) {
            if (isBmpCodePoint(value)) {
              if (!consumer(toBoxedChar(toChar(value)))) {
                $receiver.pushBack_za3lpa$(lastByteCount);
                return -1;
              }
            }
             else if (!isValidCodePoint(value)) {
              malformedCodePoint(value);
            }
             else {
              if (!consumer(toBoxedChar(toChar(highSurrogate(value)))) || !consumer(toBoxedChar(toChar(lowSurrogate(value))))) {
                $receiver.pushBack_za3lpa$(lastByteCount);
                return -1;
              }
            }
            value = 0;
          }
        }
      }
      return 0;
    };
  }));
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init('Malformed code-point ' + value + ' found');
  }
  var MaxCodePoint;
  var MinLowSurrogate;
  var MinHighSurrogate;
  var MinSupplementary;
  var HighSurrogateMagic;
  function isBmpCodePoint(cp) {
    return cp >>> 16 === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function highSurrogate(cp) {
    return (cp >>> 10) + 55232 | 0;
  }
  function MalformedUTF8InputException(message) {
    Exception_init(message, this);
    this.name = 'MalformedUTF8InputException';
  }
  MalformedUTF8InputException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MalformedUTF8InputException',
    interfaces: [Exception]
  };
  function DangerousInternalIoApi() {
  }
  DangerousInternalIoApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DangerousInternalIoApi',
    interfaces: [Annotation]
  };
  function $unsafeAppend$($receiver, builder) {
    var tmp$;
    var builderSize = builder.size;
    var builderHead = builder.head;
    if (builderSize <= PACKET_MAX_COPY_SIZE && builderHead.next == null && $receiver.tryWriteAppend_2fdm73$(builderHead)) {
      builder.afterBytesStolen_8be2vx$();
      return;
    }
    if ((tmp$ = builder.stealAll_8be2vx$()) != null) {
      $receiver.append_2fdm73$(tmp$);
    }
  }
  function ObjectPool() {
  }
  ObjectPool.prototype.close = function () {
    this.dispose();
  };
  ObjectPool.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ObjectPool',
    interfaces: [Closeable]
  };
  function NoPoolImpl() {
  }
  Object.defineProperty(NoPoolImpl.prototype, 'capacity', {
    get: function () {
      return 0;
    }
  });
  NoPoolImpl.prototype.recycle_trkh7z$ = function (instance) {
  };
  NoPoolImpl.prototype.dispose = function () {
  };
  NoPoolImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoPoolImpl',
    interfaces: [ObjectPool]
  };
  function SingleInstancePool() {
    this.borrowed_8z71hu$_0 = atomic(0);
    this.disposed_32ssyp$_0 = atomic_0(false);
    this.instance_l8ssv$_0 = null;
  }
  Object.defineProperty(SingleInstancePool.prototype, 'capacity', {
    get: function () {
      return 1;
    }
  });
  SingleInstancePool.prototype.borrow = function () {
    var $receiver = this.borrowed_8z71hu$_0;
    update$break: do {
      while (true) {
        var cur = $receiver.kotlinx$atomicfu$value;
        if (cur !== 0)
          throw IllegalStateException_init('Instance is already consumed');
        var upd = 1;
        if ($receiver.compareAndSet$atomicfu(cur, upd))
          break update$break;
      }
    }
     while (false);
    var instance = this.produceInstance();
    this.instance_l8ssv$_0 = instance;
    return instance;
  };
  SingleInstancePool.prototype.recycle_trkh7z$ = function (instance) {
    if (this.instance_l8ssv$_0 !== instance) {
      if (this.instance_l8ssv$_0 == null && this.borrowed_8z71hu$_0.kotlinx$atomicfu$value !== 0) {
        throw IllegalStateException_init('Already recycled or an irrelevant instance tried to be recycled');
      }
      throw IllegalStateException_init('Unable to recycle irrelevant instance');
    }
    this.instance_l8ssv$_0 = null;
    if (!this.disposed_32ssyp$_0.compareAndSet$atomicfu(false, true)) {
      throw IllegalStateException_init('An instance is already disposed');
    }
    this.disposeInstance_trkh7z$(instance);
  };
  SingleInstancePool.prototype.dispose = function () {
    var tmp$;
    if (this.disposed_32ssyp$_0.compareAndSet$atomicfu(false, true)) {
      tmp$ = this.instance_l8ssv$_0;
      if (tmp$ == null) {
        return;
      }
      var instance = tmp$;
      this.instance_l8ssv$_0 = null;
      this.disposeInstance_trkh7z$(instance);
    }
  };
  SingleInstancePool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleInstancePool',
    interfaces: [ObjectPool]
  };
  var useBorrowed = defineInlineFunction('kotlinx-io-js.kotlinx.io.pool.useBorrowed_x5slcm$', function ($receiver, block) {
    var useInstance$result;
    var instance = $receiver.borrow();
    try {
      useInstance$result = block(instance);
    }
    finally {
      $receiver.recycle_trkh7z$(instance);
    }
    return useInstance$result;
  });
  var useInstance = defineInlineFunction('kotlinx-io-js.kotlinx.io.pool.useInstance_x5slcm$', function ($receiver, block) {
    var instance = $receiver.borrow();
    try {
      return block(instance);
    }
    finally {
      $receiver.recycle_trkh7z$(instance);
    }
  });
  Object.defineProperty(Charset, 'Companion', {
    get: Charset$Companion_getInstance
  });
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$io = package$kotlinx.io || (package$kotlinx.io = {});
  var package$charsets = package$io.charsets || (package$io.charsets = {});
  package$charsets.Charset = Charset;
  package$charsets.get_name_vfm6x$ = get_name;
  package$charsets.CharsetEncoder = CharsetEncoder;
  package$charsets.get_charset_molmk7$ = get_charset;
  package$charsets.encodeToByteArray_478lbv$ = encodeToByteArray;
  package$charsets.encodeImpl_q9prrs$ = encodeImpl;
  package$charsets.encodeUTF8_qh93a6$ = encodeUTF8;
  package$charsets.encodeComplete_oyvka8$ = encodeComplete;
  package$charsets.CharsetDecoder = CharsetDecoder;
  package$charsets.get_charset_thjiap$ = get_charset_0;
  $$importsForInline$$['kotlinx-io-js'] = _;
  package$charsets.decode_l4l291$ = decode;
  package$charsets.decodeExactBytes_4lddy5$ = decodeExactBytes;
  Object.defineProperty(package$charsets, 'Charsets', {
    get: Charsets_getInstance
  });
  package$charsets.MalformedInputException = MalformedInputException;
  Object.defineProperty(ByteOrder, 'BIG_ENDIAN', {
    get: ByteOrder$BIG_ENDIAN_getInstance
  });
  Object.defineProperty(ByteOrder, 'LITTLE_ENDIAN', {
    get: ByteOrder$LITTLE_ENDIAN_getInstance
  });
  Object.defineProperty(ByteOrder, 'Companion', {
    get: ByteOrder$Companion_getInstance
  });
  var package$core = package$io.core || (package$io.core = {});
  package$core.ByteOrder = ByteOrder;
  package$core.BytePacketBuilderPlatformBase = BytePacketBuilderPlatformBase;
  package$core.ByteReadPacketPlatformBase = ByteReadPacketPlatformBase;
  Object.defineProperty(ByteReadPacket, 'Companion', {
    get: ByteReadPacket$Companion_getInstance
  });
  package$core.ByteReadPacket_init_3npcxq$ = ByteReadPacket_init;
  package$core.ByteReadPacket = ByteReadPacket;
  package$core.ByteReadPacket_1qge3v$ = ByteReadPacket_0;
  package$core.Closeable = Closeable;
  package$core.addSuppressedInternal_oh0dqn$ = addSuppressedInternal;
  package$core.Input = Input;
  Object.defineProperty(IoBuffer, 'Companion', {
    get: IoBuffer$Companion_getInstance
  });
  package$core.IoBuffer = IoBuffer;
  package$core.Output = Output;
  Object.defineProperty(package$core, 'PACKET_MAX_COPY_SIZE', {
    get: function () {
      return PACKET_MAX_COPY_SIZE;
    }
  });
  Object.defineProperty(package$core, 'BUFFER_VIEW_POOL_SIZE_8be2vx$', {
    get: function () {
      return BUFFER_VIEW_POOL_SIZE;
    }
  });
  Object.defineProperty(package$core, 'BUFFER_VIEW_SIZE_8be2vx$', {
    get: function () {
      return BUFFER_VIEW_SIZE;
    }
  });
  package$core.BytePacketBuilder_za3lpa$ = BytePacketBuilder;
  package$core.EOFException = EOFException;
  package$core.discardUntilDelimiterImpl_griuux$ = discardUntilDelimiterImpl;
  package$core.discardUntilDelimitersImpl_9osahc$ = discardUntilDelimitersImpl;
  package$core.readUntilDelimiterImpl_e5m7o7$ = readUntilDelimiterImpl;
  package$core.readUntilDelimitersImpl_sq65ds$ = readUntilDelimitersImpl;
  package$core.readUntilDelimiterImpl_g53i6c$ = readUntilDelimiterImpl_0;
  package$core.readUntilDelimitersImpl_a4g7j9$ = readUntilDelimitersImpl_0;
  package$core.String_37vbci$ = String_0;
  package$core.checkIndices_khgzz8$ = checkIndices;
  package$core.getCharsInternal_8t7fl6$ = getCharsInternal;
  var package$js = package$io.js || (package$io.js = {});
  package$js.readText_5725gb$ = readText;
  package$js.readText_g056j7$ = readText_0;
  package$js.TextDecoderFatal_t8jjq2$ = TextDecoderFatal;
  package$js.decodeWrap_i3ch5z$ = decodeWrap;
  package$js.decodeStream_ggodax$ = decodeStream;
  package$js.decodeStream_8074i4$ = decodeStream_0;
  package$js.TextEncoderCtor_8be2vx$ = TextEncoderCtor;
  package$js.readArrayBuffer_3lionn$ = readArrayBuffer;
  package$js.writeFully_omiljy$ = writeFully;
  package$js.writeFully_w89fyx$ = writeFully_0;
  package$js.sendPacket_tx3ju1$ = sendPacket;
  package$core.buildPacket_tmk3ki$ = buildPacket;
  package$js.sendPacket_wglm47$ = sendPacket_0;
  package$js.packet_lwnq0v$ = packet;
  package$js.sendPacket_8zvei$ = sendPacket_2;
  package$js.sendPacket_eks1ru$ = sendPacket_1;
  package$js.responsePacket_rezk82$ = responsePacket;
  var package$pool = package$io.pool || (package$io.pool = {});
  package$pool.DefaultPool = DefaultPool;
  package$charsets.encode_l5k2nk$ = encode;
  package$charsets.encodeToByteArrayImpl_478lbv$ = encodeToByteArrayImpl;
  package$charsets.encode_478lbv$ = encode_0;
  package$charsets.encodeUTF8_axopd9$ = encodeUTF8_0;
  package$charsets.decode_4lddy5$ = decode_0;
  package$charsets.sizeEstimate_nfbqdc$ = sizeEstimate;
  Object.defineProperty(package$core, 'EmptyBufferViewPool', {
    get: get_EmptyBufferViewPool
  });
  Object.defineProperty(package$core, 'EmptyBufferPoolImpl', {
    get: EmptyBufferPoolImpl_getInstance
  });
  package$core.releaseAll_rzlcxh$ = releaseAll;
  package$core.copyAll_47m236$ = copyAll;
  package$core.findTail_47m236$ = findTail;
  package$core.remainingAll_47m236$ = remainingAll;
  package$core.isEmpty_47m236$ = isEmpty;
  package$core.coerceAtMostMaxInt_nzsbcz$ = coerceAtMostMaxInt;
  package$core.coerceAtMostMaxIntOrFail_z4ke79$ = coerceAtMostMaxIntOrFail;
  package$core.BufferLimitExceededException = BufferLimitExceededException;
  package$core.BytePacketBuilder = BytePacketBuilder_0;
  package$core.AbstractOutput = AbstractOutput;
  package$core.BytePacketBuilderBase = BytePacketBuilderBase;
  package$core.AbstractInput = AbstractInput;
  package$core.ByteReadPacket_mj6st8$ = ByteReadPacket_1;
  package$core.use_jg5xsh$ = use;
  package$core.ExperimentalIoApi = ExperimentalIoApi;
  package$core.readFully_nvffi1$ = readFully;
  package$core.readFully_wmxx0n$ = readFully_0;
  package$core.readFully_k7nlv0$ = readFully_1;
  package$core.readFully_q3mk7n$ = readFully_2;
  package$core.readFully_90pvuv$ = readFully_3;
  package$core.readFully_fopn36$ = readFully_4;
  package$core.readFully_3fi7pj$ = readFully_5;
  package$core.readAvailable_nvffi1$ = readAvailable;
  package$core.readAvailable_wmxx0n$ = readAvailable_0;
  package$core.readAvailable_k7nlv0$ = readAvailable_1;
  package$core.readAvailable_q3mk7n$ = readAvailable_2;
  package$core.readAvailable_90pvuv$ = readAvailable_3;
  package$core.readAvailable_fopn36$ = readAvailable_4;
  package$core.readAvailable_3fi7pj$ = readAvailable_5;
  package$core.discard_wb5b4t$ = discard;
  package$core.discardExact_zfjns6$ = discardExact;
  package$core.discardExact_x7yx39$ = discardExact_0;
  package$core.takeWhile_j7wsao$ = takeWhile;
  package$core.takeWhileSize_345ofp$ = takeWhileSize;
  package$core.append_i7bzmc$ = append;
  package$core.append_qtcffe$ = append_0;
  package$core.writeFully_u129dg$ = writeFully_1;
  package$core.writeFully_14izae$ = writeFully_2;
  package$core.writeFully_70mdrt$ = writeFully_3;
  package$core.writeFully_8z0740$ = writeFully_4;
  package$core.writeFully_oqr0g6$ = writeFully_5;
  package$core.writeFully_34fd1n$ = writeFully_6;
  package$core.writeFully_bc6dmu$ = writeFully_7;
  package$core.fill_rwll9e$ = fill;
  package$core.writeWhile_khqzlf$ = writeWhile;
  package$core.writeWhileSize_v3dg2q$ = writeWhileSize;
  package$core.writePacket_g7nx1o$ = writePacket;
  Object.defineProperty(ByteReadPacketBase, 'Companion', {
    get: ByteReadPacketBase$Companion_getInstance
  });
  package$core.ByteReadPacketBase = ByteReadPacketBase;
  package$core.discardUntilDelimiter_zfdhgy$ = discardUntilDelimiter;
  package$core.discardUntilDelimiters_vrr5l1$ = discardUntilDelimiters;
  package$core.readUntilDelimiter_k4akv6$ = readUntilDelimiter;
  package$core.readUntilDelimiters_l75097$ = readUntilDelimiters;
  package$core.readUntilDelimiter_b03y1$ = readUntilDelimiter_0;
  package$core.readUntilDelimiters_am1s34$ = readUntilDelimiters_0;
  package$core.toByteArray_unvzlx$ = toByteArray;
  package$core.readUTF8Line_i9nmip$ = readUTF8Line;
  package$core.readUTF8Line_mviz6f$ = readUTF8Line_0;
  package$core.readUTF8LineTo_4zviwz$ = readUTF8LineTo;
  package$core.readUTF8UntilDelimiter_5w8brh$ = readUTF8UntilDelimiter;
  package$core.readUTF8UntilDelimiterTo_9srp8v$ = readUTF8UntilDelimiterTo;
  package$core.readUTF8UntilDelimiterTo_12g4nz$ = readUTF8UntilDelimiterTo_0;
  package$core.readBytes_3lionn$ = readBytes;
  package$core.readBytes_x7yx39$ = readBytes_0;
  package$core.readBytes_wb5b4t$ = readBytes_1;
  package$core.readBytesOf_mviz6f$ = readBytesOf;
  package$core.readText_35x2tb$ = readText_1;
  package$core.readText_3b40ih$ = readText_2;
  package$core.readText_z5z6bh$ = readText_3;
  package$core.readText_q10u79$ = readText_4;
  package$core.readTextExact_q10u79$ = readTextExact;
  package$core.readTextExactBytes_q10u79$ = readTextExactBytes;
  package$core.writeText_pxycjm$ = writeText;
  package$core.writeText_gxc7y6$ = writeText_0;
  package$core.use_vgxmmh$ = use_0;
  package$core.use_8z0ghk$ = use_1;
  var package$internal = package$core.internal || (package$core.internal = {});
  package$internal.RequireFailureCapture = RequireFailureCapture;
  package$internal.require_87ejdh$ = require_0;
  package$internal.decodeASCII_x3zd4c$ = decodeASCII;
  package$internal.decodeUTF8LineLoopSuspend_a47po6$ = decodeUTF8LineLoopSuspend;
  package$internal.decodeUTF8_x3zd4c$ = decodeUTF8;
  package$internal.MalformedUTF8InputException = MalformedUTF8InputException;
  package$internal.DangerousInternalIoApi = DangerousInternalIoApi;
  package$internal.$unsafeAppend$_a3tlu$ = $unsafeAppend$;
  package$pool.ObjectPool = ObjectPool;
  package$pool.NoPoolImpl = NoPoolImpl;
  $$importsForInline$$['kotlinx-atomicfu'] = $module$kotlinx_atomicfu;
  package$pool.SingleInstancePool = SingleInstancePool;
  package$pool.useInstance_x5slcm$ = useInstance;
  package$pool.useBorrowed_x5slcm$ = useBorrowed;
  ByteReadPacketBase.prototype.readFully_bj0s3a$ = Input.prototype.readFully_bj0s3a$;
  SingleInstancePool.prototype.close = ObjectPool.prototype.close;
  DefaultPool.prototype.close = ObjectPool.prototype.close;
  NoPoolImpl.prototype.close = ObjectPool.prototype.close;
  IoBuffer.prototype.readFully_bj0s3a$ = Input.prototype.readFully_bj0s3a$;
  PACKET_MAX_COPY_SIZE = 200;
  BUFFER_VIEW_POOL_SIZE = 100;
  BUFFER_VIEW_SIZE = 4096;
  var $receiver = new Any();
  $receiver.stream = true;
  STREAM_TRUE = $receiver;
  var $receiver_0 = new Any();
  $receiver_0.fatal = true;
  FATAL_TRUE = $receiver_0;
  EmptyByteArray = new Int8Array(0);
  MaxCodePoint = 1114111;
  MinLowSurrogate = 56320;
  MinHighSurrogate = 55296;
  MinSupplementary = 65536;
  HighSurrogateMagic = 55232;
  Kotlin.defineModule('kotlinx-io-js', _);
  return _;
}));

//# sourceMappingURL=kotlinx-io-js.js.map
