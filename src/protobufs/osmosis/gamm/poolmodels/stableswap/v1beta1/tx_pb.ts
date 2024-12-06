// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/gamm/poolmodels/stableswap/v1beta1/tx.proto (package osmosis.gamm.poolmodels.stableswap.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PoolParams } from "./stableswap_pool_pb.js";
import { Coin } from "../../../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * ===================== MsgCreatePool
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool
 */
export class MsgCreateStableswapPool extends Message<MsgCreateStableswapPool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams pool_params = 2;
   */
  poolParams?: PoolParams;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin initial_pool_liquidity = 3;
   */
  initialPoolLiquidity: Coin[] = [];

  /**
   * @generated from field: repeated uint64 scaling_factors = 4;
   */
  scalingFactors: bigint[] = [];

  /**
   * @generated from field: string future_pool_governor = 5;
   */
  futurePoolGovernor = "";

  /**
   * @generated from field: string scaling_factor_controller = 6;
   */
  scalingFactorController = "";

  constructor(data?: PartialMessage<MsgCreateStableswapPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_params", kind: "message", T: PoolParams },
    { no: 3, name: "initial_pool_liquidity", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "scaling_factors", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 5, name: "future_pool_governor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "scaling_factor_controller", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateStableswapPool {
    return new MsgCreateStableswapPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateStableswapPool {
    return new MsgCreateStableswapPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateStableswapPool {
    return new MsgCreateStableswapPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateStableswapPool | PlainMessage<MsgCreateStableswapPool> | undefined, b: MsgCreateStableswapPool | PlainMessage<MsgCreateStableswapPool> | undefined): boolean {
    return proto3.util.equals(MsgCreateStableswapPool, a, b);
  }
}

/**
 * Returns a poolID with custom poolName.
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse
 */
export class MsgCreateStableswapPoolResponse extends Message<MsgCreateStableswapPoolResponse> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreateStableswapPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateStableswapPoolResponse {
    return new MsgCreateStableswapPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateStableswapPoolResponse {
    return new MsgCreateStableswapPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateStableswapPoolResponse {
    return new MsgCreateStableswapPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateStableswapPoolResponse | PlainMessage<MsgCreateStableswapPoolResponse> | undefined, b: MsgCreateStableswapPoolResponse | PlainMessage<MsgCreateStableswapPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateStableswapPoolResponse, a, b);
  }
}

/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors
 */
export class MsgStableSwapAdjustScalingFactors extends Message<MsgStableSwapAdjustScalingFactors> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: repeated uint64 scaling_factors = 3;
   */
  scalingFactors: bigint[] = [];

  constructor(data?: PartialMessage<MsgStableSwapAdjustScalingFactors>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "scaling_factors", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStableSwapAdjustScalingFactors {
    return new MsgStableSwapAdjustScalingFactors().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStableSwapAdjustScalingFactors {
    return new MsgStableSwapAdjustScalingFactors().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStableSwapAdjustScalingFactors {
    return new MsgStableSwapAdjustScalingFactors().fromJsonString(jsonString, options);
  }

  static equals(a: MsgStableSwapAdjustScalingFactors | PlainMessage<MsgStableSwapAdjustScalingFactors> | undefined, b: MsgStableSwapAdjustScalingFactors | PlainMessage<MsgStableSwapAdjustScalingFactors> | undefined): boolean {
    return proto3.util.equals(MsgStableSwapAdjustScalingFactors, a, b);
  }
}

/**
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse
 */
export class MsgStableSwapAdjustScalingFactorsResponse extends Message<MsgStableSwapAdjustScalingFactorsResponse> {
  constructor(data?: PartialMessage<MsgStableSwapAdjustScalingFactorsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStableSwapAdjustScalingFactorsResponse {
    return new MsgStableSwapAdjustScalingFactorsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStableSwapAdjustScalingFactorsResponse {
    return new MsgStableSwapAdjustScalingFactorsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStableSwapAdjustScalingFactorsResponse {
    return new MsgStableSwapAdjustScalingFactorsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgStableSwapAdjustScalingFactorsResponse | PlainMessage<MsgStableSwapAdjustScalingFactorsResponse> | undefined, b: MsgStableSwapAdjustScalingFactorsResponse | PlainMessage<MsgStableSwapAdjustScalingFactorsResponse> | undefined): boolean {
    return proto3.util.equals(MsgStableSwapAdjustScalingFactorsResponse, a, b);
  }
}

