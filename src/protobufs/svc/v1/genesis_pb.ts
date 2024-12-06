// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file svc/v1/genesis.proto (package svc.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * GenesisState defines the module genesis state
 *
 * @generated from message svc.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * Params defines all the parameters of the module.
   *
   * @generated from field: svc.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.GenesisState";
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
 * @generated from message svc.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: svc.v1.ServiceCategories categories = 1;
   */
  categories?: ServiceCategories;

  /**
   * @generated from field: svc.v1.ServiceTypes types = 2;
   */
  types?: ServiceTypes;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "categories", kind: "message", T: ServiceCategories },
    { no: 2, name: "types", kind: "message", T: ServiceTypes },
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
 * @generated from message svc.v1.ServiceCategories
 */
export class ServiceCategories extends Message<ServiceCategories> {
  /**
   * @generated from field: repeated string categories = 1;
   */
  categories: string[] = [];

  constructor(data?: PartialMessage<ServiceCategories>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.ServiceCategories";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "categories", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceCategories {
    return new ServiceCategories().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceCategories {
    return new ServiceCategories().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceCategories {
    return new ServiceCategories().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceCategories | PlainMessage<ServiceCategories> | undefined, b: ServiceCategories | PlainMessage<ServiceCategories> | undefined): boolean {
    return proto3.util.equals(ServiceCategories, a, b);
  }
}

/**
 * @generated from message svc.v1.ServiceTypes
 */
export class ServiceTypes extends Message<ServiceTypes> {
  /**
   * @generated from field: repeated string types = 1;
   */
  types: string[] = [];

  constructor(data?: PartialMessage<ServiceTypes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.ServiceTypes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceTypes {
    return new ServiceTypes().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceTypes {
    return new ServiceTypes().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceTypes {
    return new ServiceTypes().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceTypes | PlainMessage<ServiceTypes> | undefined, b: ServiceTypes | PlainMessage<ServiceTypes> | undefined): boolean {
    return proto3.util.equals(ServiceTypes, a, b);
  }
}

/**
 * Service defines a Decentralized Service on the Sonr Blockchain
 *
 * @generated from message svc.v1.Service
 */
export class Service extends Message<Service> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string authority = 2;
   */
  authority = "";

  /**
   * @generated from field: string origin = 3;
   */
  origin = "";

  /**
   * @generated from field: string name = 4;
   */
  name = "";

  /**
   * @generated from field: string description = 5;
   */
  description = "";

  /**
   * @generated from field: string category = 6;
   */
  category = "";

  /**
   * @generated from field: repeated string tags = 7;
   */
  tags: string[] = [];

  /**
   * @generated from field: int64 expiry_height = 8;
   */
  expiryHeight = protoInt64.zero;

  constructor(data?: PartialMessage<Service>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "svc.v1.Service";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "origin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "category", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "expiry_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Service {
    return new Service().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Service {
    return new Service().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Service {
    return new Service().fromJsonString(jsonString, options);
  }

  static equals(a: Service | PlainMessage<Service> | undefined, b: Service | PlainMessage<Service> | undefined): boolean {
    return proto3.util.equals(Service, a, b);
  }
}
