// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/incentives/query.proto (package dymensionxyz.dymension.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, ActiveGaugesRequest, ActiveGaugesResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, RewardsEstRequest, RewardsEstResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse } from "./query_pb.js";

const TYPE_NAME = "dymensionxyz.dymension.incentives.Query";

/**
 * ModuleToDistributeCoins returns coins that are going to be distributed
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.ModuleToDistributeCoins
 */
export const QueryModuleToDistributeCoinsService = {
  typeName: TYPE_NAME,
  method: "ModuleToDistributeCoins",
  Request: ModuleToDistributeCoinsRequest,
  Response: ModuleToDistributeCoinsResponse,
} as const;

/**
 * GaugeByID returns gauges by their respective ID
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.GaugeByID
 */
export const QueryGaugeByIDService = {
  typeName: TYPE_NAME,
  method: "GaugeByID",
  Request: GaugeByIDRequest,
  Response: GaugeByIDResponse,
} as const;

/**
 * Gauges returns both upcoming and active gauges
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.Gauges
 */
export const QueryGaugesService = {
  typeName: TYPE_NAME,
  method: "Gauges",
  Request: GaugesRequest,
  Response: GaugesResponse,
} as const;

/**
 * ActiveGauges returns active gauges
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.ActiveGauges
 */
export const QueryActiveGaugesService = {
  typeName: TYPE_NAME,
  method: "ActiveGauges",
  Request: ActiveGaugesRequest,
  Response: ActiveGaugesResponse,
} as const;

/**
 * ActiveGaugesPerDenom returns active gauges by denom
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.ActiveGaugesPerDenom
 */
export const QueryActiveGaugesPerDenomService = {
  typeName: TYPE_NAME,
  method: "ActiveGaugesPerDenom",
  Request: ActiveGaugesPerDenomRequest,
  Response: ActiveGaugesPerDenomResponse,
} as const;

/**
 * Returns scheduled gauges that have not yet occured
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.UpcomingGauges
 */
export const QueryUpcomingGaugesService = {
  typeName: TYPE_NAME,
  method: "UpcomingGauges",
  Request: UpcomingGaugesRequest,
  Response: UpcomingGaugesResponse,
} as const;

/**
 * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
 * by denom
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.UpcomingGaugesPerDenom
 */
export const QueryUpcomingGaugesPerDenomService = {
  typeName: TYPE_NAME,
  method: "UpcomingGaugesPerDenom",
  Request: UpcomingGaugesPerDenomRequest,
  Response: UpcomingGaugesPerDenomResponse,
} as const;

/**
 * RewardsEst returns an estimate of the rewards from now until a specified
 * time in the future The querier either provides an address or a set of locks
 * for which they want to find the associated rewards
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.RewardsEst
 */
export const QueryRewardsEstService = {
  typeName: TYPE_NAME,
  method: "RewardsEst",
  Request: RewardsEstRequest,
  Response: RewardsEstResponse,
} as const;

/**
 * LockableDurations returns lockable durations that are valid to distribute
 * incentives for
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.LockableDurations
 */
export const QueryLockableDurationsService = {
  typeName: TYPE_NAME,
  method: "LockableDurations",
  Request: QueryLockableDurationsRequest,
  Response: QueryLockableDurationsResponse,
} as const;

