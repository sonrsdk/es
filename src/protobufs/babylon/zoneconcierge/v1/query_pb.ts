// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file babylon/zoneconcierge/v1/query.proto (package babylon.zoneconcierge.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { ChainInfo, FinalizedChainInfo, Forks, IndexedHeader, ProofFinalizedChainInfo } from "./zoneconcierge_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Epoch } from "../../epoching/v1/epoching_pb.js";
import { RawCheckpoint } from "../../checkpointing/v1/checkpoint_pb.js";
import { SubmissionKey } from "../../btccheckpoint/v1/btccheckpoint_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryParamsRequest";
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
 * @generated from message babylon.zoneconcierge.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: babylon.zoneconcierge.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryParamsResponse";
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
 * QueryHeaderRequest is request type for the Query/Header RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryHeaderRequest
 */
export class QueryHeaderRequest extends Message<QueryHeaderRequest> {
  /**
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  /**
   * @generated from field: uint64 height = 2;
   */
  height = protoInt64.zero;

  constructor(data?: PartialMessage<QueryHeaderRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryHeaderRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryHeaderRequest {
    return new QueryHeaderRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryHeaderRequest {
    return new QueryHeaderRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryHeaderRequest {
    return new QueryHeaderRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryHeaderRequest | PlainMessage<QueryHeaderRequest> | undefined, b: QueryHeaderRequest | PlainMessage<QueryHeaderRequest> | undefined): boolean {
    return proto3.util.equals(QueryHeaderRequest, a, b);
  }
}

/**
 * QueryHeaderResponse is response type for the Query/Header RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryHeaderResponse
 */
export class QueryHeaderResponse extends Message<QueryHeaderResponse> {
  /**
   * @generated from field: babylon.zoneconcierge.v1.IndexedHeader header = 1;
   */
  header?: IndexedHeader;

  /**
   * @generated from field: babylon.zoneconcierge.v1.Forks fork_headers = 2;
   */
  forkHeaders?: Forks;

  constructor(data?: PartialMessage<QueryHeaderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryHeaderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "header", kind: "message", T: IndexedHeader },
    { no: 2, name: "fork_headers", kind: "message", T: Forks },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryHeaderResponse {
    return new QueryHeaderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryHeaderResponse {
    return new QueryHeaderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryHeaderResponse {
    return new QueryHeaderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryHeaderResponse | PlainMessage<QueryHeaderResponse> | undefined, b: QueryHeaderResponse | PlainMessage<QueryHeaderResponse> | undefined): boolean {
    return proto3.util.equals(QueryHeaderResponse, a, b);
  }
}

/**
 * QueryChainListRequest is request type for the Query/ChainList RPC method
 *
 * @generated from message babylon.zoneconcierge.v1.QueryChainListRequest
 */
export class QueryChainListRequest extends Message<QueryChainListRequest> {
  /**
   * pagination defines whether to have the pagination in the request
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryChainListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryChainListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChainListRequest {
    return new QueryChainListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChainListRequest {
    return new QueryChainListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChainListRequest {
    return new QueryChainListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryChainListRequest | PlainMessage<QueryChainListRequest> | undefined, b: QueryChainListRequest | PlainMessage<QueryChainListRequest> | undefined): boolean {
    return proto3.util.equals(QueryChainListRequest, a, b);
  }
}

/**
 * QueryChainListResponse is response type for the Query/ChainList RPC method
 *
 * @generated from message babylon.zoneconcierge.v1.QueryChainListResponse
 */
export class QueryChainListResponse extends Message<QueryChainListResponse> {
  /**
   * chain_ids are IDs of the chains in ascending alphabetical order
   *
   * @generated from field: repeated string chain_ids = 1;
   */
  chainIds: string[] = [];

  /**
   * pagination defines the pagination in the response
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryChainListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryChainListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChainListResponse {
    return new QueryChainListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChainListResponse {
    return new QueryChainListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChainListResponse {
    return new QueryChainListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryChainListResponse | PlainMessage<QueryChainListResponse> | undefined, b: QueryChainListResponse | PlainMessage<QueryChainListResponse> | undefined): boolean {
    return proto3.util.equals(QueryChainListResponse, a, b);
  }
}

/**
 * QueryChainsInfoRequest is request type for the Query/ChainsInfo RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryChainsInfoRequest
 */
export class QueryChainsInfoRequest extends Message<QueryChainsInfoRequest> {
  /**
   * @generated from field: repeated string chain_ids = 1;
   */
  chainIds: string[] = [];

  constructor(data?: PartialMessage<QueryChainsInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryChainsInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChainsInfoRequest {
    return new QueryChainsInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChainsInfoRequest {
    return new QueryChainsInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChainsInfoRequest {
    return new QueryChainsInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryChainsInfoRequest | PlainMessage<QueryChainsInfoRequest> | undefined, b: QueryChainsInfoRequest | PlainMessage<QueryChainsInfoRequest> | undefined): boolean {
    return proto3.util.equals(QueryChainsInfoRequest, a, b);
  }
}

/**
 * QueryChainsInfoResponse is response type for the Query/ChainsInfo RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryChainsInfoResponse
 */
export class QueryChainsInfoResponse extends Message<QueryChainsInfoResponse> {
  /**
   * @generated from field: repeated babylon.zoneconcierge.v1.ChainInfo chains_info = 1;
   */
  chainsInfo: ChainInfo[] = [];

  constructor(data?: PartialMessage<QueryChainsInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryChainsInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chains_info", kind: "message", T: ChainInfo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChainsInfoResponse {
    return new QueryChainsInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChainsInfoResponse {
    return new QueryChainsInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChainsInfoResponse {
    return new QueryChainsInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryChainsInfoResponse | PlainMessage<QueryChainsInfoResponse> | undefined, b: QueryChainsInfoResponse | PlainMessage<QueryChainsInfoResponse> | undefined): boolean {
    return proto3.util.equals(QueryChainsInfoResponse, a, b);
  }
}

/**
 * QueryEpochChainsInfoRequest is request type for the Query/EpochChainsInfo RPC
 * method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryEpochChainsInfoRequest
 */
export class QueryEpochChainsInfoRequest extends Message<QueryEpochChainsInfoRequest> {
  /**
   * @generated from field: uint64 epoch_num = 1;
   */
  epochNum = protoInt64.zero;

  /**
   * @generated from field: repeated string chain_ids = 2;
   */
  chainIds: string[] = [];

  constructor(data?: PartialMessage<QueryEpochChainsInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryEpochChainsInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "epoch_num", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "chain_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEpochChainsInfoRequest {
    return new QueryEpochChainsInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEpochChainsInfoRequest {
    return new QueryEpochChainsInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEpochChainsInfoRequest {
    return new QueryEpochChainsInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEpochChainsInfoRequest | PlainMessage<QueryEpochChainsInfoRequest> | undefined, b: QueryEpochChainsInfoRequest | PlainMessage<QueryEpochChainsInfoRequest> | undefined): boolean {
    return proto3.util.equals(QueryEpochChainsInfoRequest, a, b);
  }
}

/**
 * QueryEpochChainsInfoResponse is response type for the Query/EpochChainsInfo RPC
 * method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryEpochChainsInfoResponse
 */
export class QueryEpochChainsInfoResponse extends Message<QueryEpochChainsInfoResponse> {
  /**
   * chain_info is the info of the CZ
   *
   * @generated from field: repeated babylon.zoneconcierge.v1.ChainInfo chains_info = 1;
   */
  chainsInfo: ChainInfo[] = [];

  constructor(data?: PartialMessage<QueryEpochChainsInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryEpochChainsInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chains_info", kind: "message", T: ChainInfo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEpochChainsInfoResponse {
    return new QueryEpochChainsInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEpochChainsInfoResponse {
    return new QueryEpochChainsInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEpochChainsInfoResponse {
    return new QueryEpochChainsInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEpochChainsInfoResponse | PlainMessage<QueryEpochChainsInfoResponse> | undefined, b: QueryEpochChainsInfoResponse | PlainMessage<QueryEpochChainsInfoResponse> | undefined): boolean {
    return proto3.util.equals(QueryEpochChainsInfoResponse, a, b);
  }
}

/**
 * QueryListHeadersRequest is request type for the Query/ListHeaders RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryListHeadersRequest
 */
export class QueryListHeadersRequest extends Message<QueryListHeadersRequest> {
  /**
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  /**
   * pagination defines whether to have the pagination in the request
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryListHeadersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryListHeadersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListHeadersRequest {
    return new QueryListHeadersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListHeadersRequest {
    return new QueryListHeadersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListHeadersRequest {
    return new QueryListHeadersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListHeadersRequest | PlainMessage<QueryListHeadersRequest> | undefined, b: QueryListHeadersRequest | PlainMessage<QueryListHeadersRequest> | undefined): boolean {
    return proto3.util.equals(QueryListHeadersRequest, a, b);
  }
}

/**
 * QueryListHeadersResponse is response type for the Query/ListHeaders RPC
 * method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryListHeadersResponse
 */
export class QueryListHeadersResponse extends Message<QueryListHeadersResponse> {
  /**
   * headers is the list of headers
   *
   * @generated from field: repeated babylon.zoneconcierge.v1.IndexedHeader headers = 1;
   */
  headers: IndexedHeader[] = [];

  /**
   * pagination defines the pagination in the response
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryListHeadersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryListHeadersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "headers", kind: "message", T: IndexedHeader, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListHeadersResponse {
    return new QueryListHeadersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListHeadersResponse {
    return new QueryListHeadersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListHeadersResponse {
    return new QueryListHeadersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListHeadersResponse | PlainMessage<QueryListHeadersResponse> | undefined, b: QueryListHeadersResponse | PlainMessage<QueryListHeadersResponse> | undefined): boolean {
    return proto3.util.equals(QueryListHeadersResponse, a, b);
  }
}

/**
 * QueryListEpochHeadersRequest is request type for the Query/ListEpochHeaders
 * RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryListEpochHeadersRequest
 */
export class QueryListEpochHeadersRequest extends Message<QueryListEpochHeadersRequest> {
  /**
   * @generated from field: uint64 epoch_num = 1;
   */
  epochNum = protoInt64.zero;

  /**
   * @generated from field: string chain_id = 2;
   */
  chainId = "";

  constructor(data?: PartialMessage<QueryListEpochHeadersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryListEpochHeadersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "epoch_num", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListEpochHeadersRequest {
    return new QueryListEpochHeadersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListEpochHeadersRequest {
    return new QueryListEpochHeadersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListEpochHeadersRequest {
    return new QueryListEpochHeadersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListEpochHeadersRequest | PlainMessage<QueryListEpochHeadersRequest> | undefined, b: QueryListEpochHeadersRequest | PlainMessage<QueryListEpochHeadersRequest> | undefined): boolean {
    return proto3.util.equals(QueryListEpochHeadersRequest, a, b);
  }
}

/**
 * QueryListEpochHeadersResponse is response type for the Query/ListEpochHeaders
 * RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryListEpochHeadersResponse
 */
export class QueryListEpochHeadersResponse extends Message<QueryListEpochHeadersResponse> {
  /**
   * headers is the list of headers
   *
   * @generated from field: repeated babylon.zoneconcierge.v1.IndexedHeader headers = 1;
   */
  headers: IndexedHeader[] = [];

  constructor(data?: PartialMessage<QueryListEpochHeadersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryListEpochHeadersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "headers", kind: "message", T: IndexedHeader, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryListEpochHeadersResponse {
    return new QueryListEpochHeadersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryListEpochHeadersResponse {
    return new QueryListEpochHeadersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryListEpochHeadersResponse {
    return new QueryListEpochHeadersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryListEpochHeadersResponse | PlainMessage<QueryListEpochHeadersResponse> | undefined, b: QueryListEpochHeadersResponse | PlainMessage<QueryListEpochHeadersResponse> | undefined): boolean {
    return proto3.util.equals(QueryListEpochHeadersResponse, a, b);
  }
}

/**
 * QueryFinalizedChainsInfoRequest is request type for the
 * Query/FinalizedChainsInfo RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryFinalizedChainsInfoRequest
 */
export class QueryFinalizedChainsInfoRequest extends Message<QueryFinalizedChainsInfoRequest> {
  /**
   * chain_ids is the list of ids of CZs
   *
   * @generated from field: repeated string chain_ids = 1;
   */
  chainIds: string[] = [];

  /**
   * prove indicates whether the querier wants to get proofs of this timestamp
   *
   * @generated from field: bool prove = 2;
   */
  prove = false;

  constructor(data?: PartialMessage<QueryFinalizedChainsInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryFinalizedChainsInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "prove", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFinalizedChainsInfoRequest {
    return new QueryFinalizedChainsInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFinalizedChainsInfoRequest {
    return new QueryFinalizedChainsInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFinalizedChainsInfoRequest {
    return new QueryFinalizedChainsInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryFinalizedChainsInfoRequest | PlainMessage<QueryFinalizedChainsInfoRequest> | undefined, b: QueryFinalizedChainsInfoRequest | PlainMessage<QueryFinalizedChainsInfoRequest> | undefined): boolean {
    return proto3.util.equals(QueryFinalizedChainsInfoRequest, a, b);
  }
}

/**
 * QueryFinalizedChainsInfoResponse is response type for the
 * Query/FinalizedChainsInfo RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryFinalizedChainsInfoResponse
 */
export class QueryFinalizedChainsInfoResponse extends Message<QueryFinalizedChainsInfoResponse> {
  /**
   * @generated from field: repeated babylon.zoneconcierge.v1.FinalizedChainInfo finalized_chains_info = 1;
   */
  finalizedChainsInfo: FinalizedChainInfo[] = [];

  constructor(data?: PartialMessage<QueryFinalizedChainsInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryFinalizedChainsInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "finalized_chains_info", kind: "message", T: FinalizedChainInfo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFinalizedChainsInfoResponse {
    return new QueryFinalizedChainsInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFinalizedChainsInfoResponse {
    return new QueryFinalizedChainsInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFinalizedChainsInfoResponse {
    return new QueryFinalizedChainsInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryFinalizedChainsInfoResponse | PlainMessage<QueryFinalizedChainsInfoResponse> | undefined, b: QueryFinalizedChainsInfoResponse | PlainMessage<QueryFinalizedChainsInfoResponse> | undefined): boolean {
    return proto3.util.equals(QueryFinalizedChainsInfoResponse, a, b);
  }
}

/**
 * QueryFinalizedChainInfoUntilHeightRequest is request type for the
 * Query/FinalizedChainInfoUntilHeight RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryFinalizedChainInfoUntilHeightRequest
 */
export class QueryFinalizedChainInfoUntilHeightRequest extends Message<QueryFinalizedChainInfoUntilHeightRequest> {
  /**
   * chain_id is the ID of the CZ
   *
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  /**
   * height is the height of the CZ chain
   * such that the returned finalised chain info will be no later than this
   * height
   *
   * @generated from field: uint64 height = 2;
   */
  height = protoInt64.zero;

  /**
   * prove indicates whether the querier wants to get proofs of this timestamp
   *
   * @generated from field: bool prove = 3;
   */
  prove = false;

  constructor(data?: PartialMessage<QueryFinalizedChainInfoUntilHeightRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryFinalizedChainInfoUntilHeightRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "prove", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFinalizedChainInfoUntilHeightRequest {
    return new QueryFinalizedChainInfoUntilHeightRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFinalizedChainInfoUntilHeightRequest {
    return new QueryFinalizedChainInfoUntilHeightRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFinalizedChainInfoUntilHeightRequest {
    return new QueryFinalizedChainInfoUntilHeightRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryFinalizedChainInfoUntilHeightRequest | PlainMessage<QueryFinalizedChainInfoUntilHeightRequest> | undefined, b: QueryFinalizedChainInfoUntilHeightRequest | PlainMessage<QueryFinalizedChainInfoUntilHeightRequest> | undefined): boolean {
    return proto3.util.equals(QueryFinalizedChainInfoUntilHeightRequest, a, b);
  }
}

/**
 * QueryFinalizedChainInfoUntilHeightResponse is response type for the
 * Query/FinalizedChainInfoUntilHeight RPC method.
 *
 * @generated from message babylon.zoneconcierge.v1.QueryFinalizedChainInfoUntilHeightResponse
 */
export class QueryFinalizedChainInfoUntilHeightResponse extends Message<QueryFinalizedChainInfoUntilHeightResponse> {
  /**
   * finalized_chain_info is the info of the CZ
   *
   * @generated from field: babylon.zoneconcierge.v1.ChainInfo finalized_chain_info = 1;
   */
  finalizedChainInfo?: ChainInfo;

  /**
   * epoch_info is the metadata of the last BTC-finalised epoch
   *
   * @generated from field: babylon.epoching.v1.Epoch epoch_info = 2;
   */
  epochInfo?: Epoch;

  /**
   * raw_checkpoint is the raw checkpoint of this epoch
   *
   * @generated from field: babylon.checkpointing.v1.RawCheckpoint raw_checkpoint = 3;
   */
  rawCheckpoint?: RawCheckpoint;

  /**
   * btc_submission_key is position of two BTC txs that include the raw
   * checkpoint of this epoch
   *
   * @generated from field: babylon.btccheckpoint.v1.SubmissionKey btc_submission_key = 4;
   */
  btcSubmissionKey?: SubmissionKey;

  /**
   * proof is the proof that the chain info is finalized
   *
   * @generated from field: babylon.zoneconcierge.v1.ProofFinalizedChainInfo proof = 5;
   */
  proof?: ProofFinalizedChainInfo;

  constructor(data?: PartialMessage<QueryFinalizedChainInfoUntilHeightResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.zoneconcierge.v1.QueryFinalizedChainInfoUntilHeightResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "finalized_chain_info", kind: "message", T: ChainInfo },
    { no: 2, name: "epoch_info", kind: "message", T: Epoch },
    { no: 3, name: "raw_checkpoint", kind: "message", T: RawCheckpoint },
    { no: 4, name: "btc_submission_key", kind: "message", T: SubmissionKey },
    { no: 5, name: "proof", kind: "message", T: ProofFinalizedChainInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFinalizedChainInfoUntilHeightResponse {
    return new QueryFinalizedChainInfoUntilHeightResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFinalizedChainInfoUntilHeightResponse {
    return new QueryFinalizedChainInfoUntilHeightResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFinalizedChainInfoUntilHeightResponse {
    return new QueryFinalizedChainInfoUntilHeightResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryFinalizedChainInfoUntilHeightResponse | PlainMessage<QueryFinalizedChainInfoUntilHeightResponse> | undefined, b: QueryFinalizedChainInfoUntilHeightResponse | PlainMessage<QueryFinalizedChainInfoUntilHeightResponse> | undefined): boolean {
    return proto3.util.equals(QueryFinalizedChainInfoUntilHeightResponse, a, b);
  }
}

