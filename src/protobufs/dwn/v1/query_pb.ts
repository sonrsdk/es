// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file dwn/v1/query.proto (package dwn.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params, Schema } from "./genesis_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message dwn.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dwn.v1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message dwn.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: dwn.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dwn.v1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * QuerySchemaRequest is the request type for the Query/Schema RPC method.
 *
 * @generated from message dwn.v1.QuerySchemaRequest
 */
export class QuerySchemaRequest extends Message<QuerySchemaRequest> {
  constructor(data?: PartialMessage<QuerySchemaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dwn.v1.QuerySchemaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySchemaRequest {
    return new QuerySchemaRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySchemaRequest {
    return new QuerySchemaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySchemaRequest {
    return new QuerySchemaRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySchemaRequest | PlainMessage<QuerySchemaRequest> | undefined, b: QuerySchemaRequest | PlainMessage<QuerySchemaRequest> | undefined): boolean {
    return proto3.util.equals(QuerySchemaRequest, a, b);
  }
}

/**
 * QuerySchemaResponse is the response type for the Query/Schema RPC method.
 *
 * @generated from message dwn.v1.QuerySchemaResponse
 */
export class QuerySchemaResponse extends Message<QuerySchemaResponse> {
  /**
   * Schema is the DID document.
   *
   * @generated from field: dwn.v1.Schema schema = 1;
   */
  schema?: Schema;

  constructor(data?: PartialMessage<QuerySchemaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dwn.v1.QuerySchemaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "message", T: Schema },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySchemaResponse {
    return new QuerySchemaResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySchemaResponse {
    return new QuerySchemaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySchemaResponse {
    return new QuerySchemaResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySchemaResponse | PlainMessage<QuerySchemaResponse> | undefined, b: QuerySchemaResponse | PlainMessage<QuerySchemaResponse> | undefined): boolean {
    return proto3.util.equals(QuerySchemaResponse, a, b);
  }
}

/**
 * QueryAllocateRequest is the request type for the Allocate RPC method.
 *
 * @generated from message dwn.v1.QueryAllocateRequest
 */
export class QueryAllocateRequest extends Message<QueryAllocateRequest> {
  constructor(data?: PartialMessage<QueryAllocateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dwn.v1.QueryAllocateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllocateRequest {
    return new QueryAllocateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllocateRequest {
    return new QueryAllocateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllocateRequest {
    return new QueryAllocateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllocateRequest | PlainMessage<QueryAllocateRequest> | undefined, b: QueryAllocateRequest | PlainMessage<QueryAllocateRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllocateRequest, a, b);
  }
}

/**
 * AllocateResponse is the response type for the Allocate RPC method.
 *
 * @generated from message dwn.v1.QueryAllocateResponse
 */
export class QueryAllocateResponse extends Message<QueryAllocateResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  /**
   * @generated from field: string cid = 2;
   */
  cid = "";

  /**
   * @generated from field: string macaroon = 3;
   */
  macaroon = "";

  /**
   * @generated from field: string public_uri = 4;
   */
  publicUri = "";

  /**
   * @generated from field: int64 expiry_block = 5;
   */
  expiryBlock = protoInt64.zero;

  constructor(data?: PartialMessage<QueryAllocateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dwn.v1.QueryAllocateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "macaroon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "public_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "expiry_block", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllocateResponse {
    return new QueryAllocateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllocateResponse {
    return new QueryAllocateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllocateResponse {
    return new QueryAllocateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllocateResponse | PlainMessage<QueryAllocateResponse> | undefined, b: QueryAllocateResponse | PlainMessage<QueryAllocateResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllocateResponse, a, b);
  }
}

/**
 * SyncRequest is the request type for the Sync RPC method.
 *
 * @generated from message dwn.v1.QuerySyncRequest
 */
export class QuerySyncRequest extends Message<QuerySyncRequest> {
  /**
   * @generated from field: string did = 1;
   */
  did = "";

  constructor(data?: PartialMessage<QuerySyncRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dwn.v1.QuerySyncRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "did", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySyncRequest {
    return new QuerySyncRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySyncRequest {
    return new QuerySyncRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySyncRequest {
    return new QuerySyncRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySyncRequest | PlainMessage<QuerySyncRequest> | undefined, b: QuerySyncRequest | PlainMessage<QuerySyncRequest> | undefined): boolean {
    return proto3.util.equals(QuerySyncRequest, a, b);
  }
}

/**
 * SyncResponse is the response type for the Sync RPC method.
 *
 * @generated from message dwn.v1.QuerySyncResponse
 */
export class QuerySyncResponse extends Message<QuerySyncResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  /**
   * Schema is the DID document.
   *
   * @generated from field: dwn.v1.Schema schema = 2;
   */
  schema?: Schema;

  /**
   * Address is the address of the calling DID.
   *
   * @generated from field: string address = 3;
   */
  address = "";

  /**
   * ChainID is the chain ID of the current network.
   *
   * @generated from field: string chainID = 4;
   */
  chainID = "";

  constructor(data?: PartialMessage<QuerySyncResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "dwn.v1.QuerySyncResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "schema", kind: "message", T: Schema },
    { no: 3, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "chainID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySyncResponse {
    return new QuerySyncResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySyncResponse {
    return new QuerySyncResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySyncResponse {
    return new QuerySyncResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySyncResponse | PlainMessage<QuerySyncResponse> | undefined, b: QuerySyncResponse | PlainMessage<QuerySyncResponse> | undefined): boolean {
    return proto3.util.equals(QuerySyncResponse, a, b);
  }
}

