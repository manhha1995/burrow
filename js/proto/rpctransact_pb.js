// source: rpctransact.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var exec_pb = require('./exec_pb.js');
goog.object.extend(proto, exec_pb);
var payload_pb = require('./payload_pb.js');
goog.object.extend(proto, payload_pb);
var txs_pb = require('./txs_pb.js');
goog.object.extend(proto, txs_pb);
goog.exportSymbol('proto.rpctransact.CallCodeParam', null, global);
goog.exportSymbol('proto.rpctransact.TxEnvelope', null, global);
goog.exportSymbol('proto.rpctransact.TxEnvelopeParam', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rpctransact.CallCodeParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rpctransact.CallCodeParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rpctransact.CallCodeParam.displayName = 'proto.rpctransact.CallCodeParam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rpctransact.TxEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rpctransact.TxEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rpctransact.TxEnvelope.displayName = 'proto.rpctransact.TxEnvelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rpctransact.TxEnvelopeParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rpctransact.TxEnvelopeParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rpctransact.TxEnvelopeParam.displayName = 'proto.rpctransact.TxEnvelopeParam';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rpctransact.CallCodeParam.prototype.toObject = function(opt_includeInstance) {
  return proto.rpctransact.CallCodeParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rpctransact.CallCodeParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rpctransact.CallCodeParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromaddress: msg.getFromaddress_asB64(),
    code: msg.getCode_asB64(),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rpctransact.CallCodeParam}
 */
proto.rpctransact.CallCodeParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rpctransact.CallCodeParam;
  return proto.rpctransact.CallCodeParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rpctransact.CallCodeParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rpctransact.CallCodeParam}
 */
proto.rpctransact.CallCodeParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFromaddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rpctransact.CallCodeParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rpctransact.CallCodeParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rpctransact.CallCodeParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rpctransact.CallCodeParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromaddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes FromAddress = 1;
 * @return {!(string|Uint8Array)}
 */
proto.rpctransact.CallCodeParam.prototype.getFromaddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes FromAddress = 1;
 * This is a type-conversion wrapper around `getFromaddress()`
 * @return {string}
 */
proto.rpctransact.CallCodeParam.prototype.getFromaddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFromaddress()));
};


/**
 * optional bytes FromAddress = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFromaddress()`
 * @return {!Uint8Array}
 */
proto.rpctransact.CallCodeParam.prototype.getFromaddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFromaddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.rpctransact.CallCodeParam} returns this
 */
proto.rpctransact.CallCodeParam.prototype.setFromaddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes Code = 2;
 * @return {!(string|Uint8Array)}
 */
proto.rpctransact.CallCodeParam.prototype.getCode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Code = 2;
 * This is a type-conversion wrapper around `getCode()`
 * @return {string}
 */
proto.rpctransact.CallCodeParam.prototype.getCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCode()));
};


/**
 * optional bytes Code = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCode()`
 * @return {!Uint8Array}
 */
proto.rpctransact.CallCodeParam.prototype.getCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.rpctransact.CallCodeParam} returns this
 */
proto.rpctransact.CallCodeParam.prototype.setCode = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes Data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.rpctransact.CallCodeParam.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes Data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.rpctransact.CallCodeParam.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.rpctransact.CallCodeParam.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.rpctransact.CallCodeParam} returns this
 */
proto.rpctransact.CallCodeParam.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rpctransact.TxEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.rpctransact.TxEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rpctransact.TxEnvelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rpctransact.TxEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    envelope: (f = msg.getEnvelope()) && txs_pb.Envelope.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rpctransact.TxEnvelope}
 */
proto.rpctransact.TxEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rpctransact.TxEnvelope;
  return proto.rpctransact.TxEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rpctransact.TxEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rpctransact.TxEnvelope}
 */
proto.rpctransact.TxEnvelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new txs_pb.Envelope;
      reader.readMessage(value,txs_pb.Envelope.deserializeBinaryFromReader);
      msg.setEnvelope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rpctransact.TxEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rpctransact.TxEnvelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rpctransact.TxEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rpctransact.TxEnvelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvelope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      txs_pb.Envelope.serializeBinaryToWriter
    );
  }
};


/**
 * optional txs.Envelope Envelope = 1;
 * @return {?proto.txs.Envelope}
 */
proto.rpctransact.TxEnvelope.prototype.getEnvelope = function() {
  return /** @type{?proto.txs.Envelope} */ (
    jspb.Message.getWrapperField(this, txs_pb.Envelope, 1));
};


/**
 * @param {?proto.txs.Envelope|undefined} value
 * @return {!proto.rpctransact.TxEnvelope} returns this
*/
proto.rpctransact.TxEnvelope.prototype.setEnvelope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rpctransact.TxEnvelope} returns this
 */
proto.rpctransact.TxEnvelope.prototype.clearEnvelope = function() {
  return this.setEnvelope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rpctransact.TxEnvelope.prototype.hasEnvelope = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rpctransact.TxEnvelopeParam.prototype.toObject = function(opt_includeInstance) {
  return proto.rpctransact.TxEnvelopeParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rpctransact.TxEnvelopeParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rpctransact.TxEnvelopeParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    envelope: (f = msg.getEnvelope()) && txs_pb.Envelope.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && payload_pb.Any.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rpctransact.TxEnvelopeParam}
 */
proto.rpctransact.TxEnvelopeParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rpctransact.TxEnvelopeParam;
  return proto.rpctransact.TxEnvelopeParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rpctransact.TxEnvelopeParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rpctransact.TxEnvelopeParam}
 */
proto.rpctransact.TxEnvelopeParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new txs_pb.Envelope;
      reader.readMessage(value,txs_pb.Envelope.deserializeBinaryFromReader);
      msg.setEnvelope(value);
      break;
    case 2:
      var value = new payload_pb.Any;
      reader.readMessage(value,payload_pb.Any.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rpctransact.TxEnvelopeParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rpctransact.TxEnvelopeParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rpctransact.TxEnvelopeParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rpctransact.TxEnvelopeParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnvelope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      txs_pb.Envelope.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payload_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional txs.Envelope Envelope = 1;
 * @return {?proto.txs.Envelope}
 */
proto.rpctransact.TxEnvelopeParam.prototype.getEnvelope = function() {
  return /** @type{?proto.txs.Envelope} */ (
    jspb.Message.getWrapperField(this, txs_pb.Envelope, 1));
};


/**
 * @param {?proto.txs.Envelope|undefined} value
 * @return {!proto.rpctransact.TxEnvelopeParam} returns this
*/
proto.rpctransact.TxEnvelopeParam.prototype.setEnvelope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rpctransact.TxEnvelopeParam} returns this
 */
proto.rpctransact.TxEnvelopeParam.prototype.clearEnvelope = function() {
  return this.setEnvelope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rpctransact.TxEnvelopeParam.prototype.hasEnvelope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional payload.Any Payload = 2;
 * @return {?proto.payload.Any}
 */
proto.rpctransact.TxEnvelopeParam.prototype.getPayload = function() {
  return /** @type{?proto.payload.Any} */ (
    jspb.Message.getWrapperField(this, payload_pb.Any, 2));
};


/**
 * @param {?proto.payload.Any|undefined} value
 * @return {!proto.rpctransact.TxEnvelopeParam} returns this
*/
proto.rpctransact.TxEnvelopeParam.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rpctransact.TxEnvelopeParam} returns this
 */
proto.rpctransact.TxEnvelopeParam.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rpctransact.TxEnvelopeParam.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration Timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.rpctransact.TxEnvelopeParam.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.rpctransact.TxEnvelopeParam} returns this
*/
proto.rpctransact.TxEnvelopeParam.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rpctransact.TxEnvelopeParam} returns this
 */
proto.rpctransact.TxEnvelopeParam.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rpctransact.TxEnvelopeParam.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.rpctransact);
