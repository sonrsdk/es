// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file oracle/v1/genesis.proto (package oracle.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * GenesisState defines the module genesis state
 *
 * @generated from message oracle.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * Params defines all the parameters of the module.
   *
   * @generated from field: oracle.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "oracle.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * Params defines the set of module parameters.
 *
 * @generated from message oracle.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: oracle.v1.Assets assets = 1;
   */
  assets?: Assets;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "oracle.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "assets", kind: "message", T: Assets },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * @generated from message oracle.v1.Assets
 */
export class Assets extends Message<Assets> {
  /**
   * @generated from field: repeated oracle.v1.AssetInfo assets = 1;
   */
  assets: AssetInfo[] = [];

  constructor(data?: PartialMessage<Assets>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "oracle.v1.Assets";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "assets", kind: "message", T: AssetInfo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Assets {
    return new Assets().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Assets {
    return new Assets().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Assets {
    return new Assets().fromJsonString(jsonString, options);
  }

  static equals(a: Assets | PlainMessage<Assets> | undefined, b: Assets | PlainMessage<Assets> | undefined): boolean {
    return proto3.util.equals(Assets, a, b);
  }
}

/**
 * AssetInfo defines the asset info
 *
 * @generated from message oracle.v1.AssetInfo
 */
export class AssetInfo extends Message<AssetInfo> {
  /**
   * The coin type index for bip44 path
   *
   * @generated from field: int64 index = 1;
   */
  index = protoInt64.zero;

  /**
   * The hrp for bech32 address
   *
   * @generated from field: string hrp = 2;
   */
  hrp = "";

  /**
   * The coin symbol
   *
   * @generated from field: string symbol = 3;
   */
  symbol = "";

  /**
   * The coin name
   *
   * @generated from field: string asset_type = 4;
   */
  assetType = "";

  /**
   * The name of the asset
   *
   * @generated from field: string name = 5;
   */
  name = "";

  /**
   * The icon url
   *
   * @generated from field: string icon_url = 6;
   */
  iconUrl = "";

  constructor(data?: PartialMessage<AssetInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "oracle.v1.AssetInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hrp", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "asset_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "icon_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetInfo {
    return new AssetInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetInfo {
    return new AssetInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetInfo {
    return new AssetInfo().fromJsonString(jsonString, options);
  }

  static equals(a: AssetInfo | PlainMessage<AssetInfo> | undefined, b: AssetInfo | PlainMessage<AssetInfo> | undefined): boolean {
    return proto3.util.equals(AssetInfo, a, b);
  }
}
