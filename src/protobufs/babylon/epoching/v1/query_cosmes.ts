// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file babylon/epoching/v1/query.proto (package babylon.epoching.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryDelegationLifecycleRequest, QueryDelegationLifecycleResponse, QueryEpochInfoRequest, QueryEpochInfoResponse, QueryEpochMsgsRequest, QueryEpochMsgsResponse, QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryEpochValSetRequest, QueryEpochValSetResponse, QueryLatestEpochMsgsRequest, QueryLatestEpochMsgsResponse, QueryParamsRequest, QueryParamsResponse, QueryValidatorLifecycleRequest, QueryValidatorLifecycleResponse } from "./query_pb.js";

const TYPE_NAME = "babylon.epoching.v1.Query";

/**
 * Params queries the parameters of the module.
 *
 * @generated from rpc babylon.epoching.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * EpochInfo queries the information of a given epoch
 *
 * @generated from rpc babylon.epoching.v1.Query.EpochInfo
 */
export const QueryEpochInfoService = {
  typeName: TYPE_NAME,
  method: "EpochInfo",
  Request: QueryEpochInfoRequest,
  Response: QueryEpochInfoResponse,
} as const;

/**
 * EpochsInfo queries the metadata of epochs in a given range, depending on
 * the parameters in the pagination request. Th main use case will be querying
 * the latest epochs in time order.
 *
 * @generated from rpc babylon.epoching.v1.Query.EpochsInfo
 */
export const QueryEpochsInfoService = {
  typeName: TYPE_NAME,
  method: "EpochsInfo",
  Request: QueryEpochsInfoRequest,
  Response: QueryEpochsInfoResponse,
} as const;

/**
 * CurrentEpoch queries the current epoch
 *
 * @generated from rpc babylon.epoching.v1.Query.CurrentEpoch
 */
export const QueryCurrentEpochService = {
  typeName: TYPE_NAME,
  method: "CurrentEpoch",
  Request: QueryCurrentEpochRequest,
  Response: QueryCurrentEpochResponse,
} as const;

/**
 * EpochMsgs queries the messages of a given epoch
 *
 * @generated from rpc babylon.epoching.v1.Query.EpochMsgs
 */
export const QueryEpochMsgsService = {
  typeName: TYPE_NAME,
  method: "EpochMsgs",
  Request: QueryEpochMsgsRequest,
  Response: QueryEpochMsgsResponse,
} as const;

/**
 * LatestEpochMsgs queries the messages within a given number of most recent
 * epochs
 *
 * @generated from rpc babylon.epoching.v1.Query.LatestEpochMsgs
 */
export const QueryLatestEpochMsgsService = {
  typeName: TYPE_NAME,
  method: "LatestEpochMsgs",
  Request: QueryLatestEpochMsgsRequest,
  Response: QueryLatestEpochMsgsResponse,
} as const;

/**
 * ValidatorLifecycle queries the lifecycle of a given validator
 *
 * @generated from rpc babylon.epoching.v1.Query.ValidatorLifecycle
 */
export const QueryValidatorLifecycleService = {
  typeName: TYPE_NAME,
  method: "ValidatorLifecycle",
  Request: QueryValidatorLifecycleRequest,
  Response: QueryValidatorLifecycleResponse,
} as const;

/**
 * DelegationLifecycle queries the lifecycle of a given delegation
 *
 * @generated from rpc babylon.epoching.v1.Query.DelegationLifecycle
 */
export const QueryDelegationLifecycleService = {
  typeName: TYPE_NAME,
  method: "DelegationLifecycle",
  Request: QueryDelegationLifecycleRequest,
  Response: QueryDelegationLifecycleResponse,
} as const;

/**
 * EpochValSet queries the validator set of a given epoch
 *
 * @generated from rpc babylon.epoching.v1.Query.EpochValSet
 */
export const QueryEpochValSetService = {
  typeName: TYPE_NAME,
  method: "EpochValSet",
  Request: QueryEpochValSetRequest,
  Response: QueryEpochValSetResponse,
} as const;

