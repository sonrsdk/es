// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/params.proto (package osmosis.cosmwasmpool.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.Params
 */
export class Params extends Message<Params> {
  /**
   * code_ide_whitelist contains the list of code ids that are allowed to be
   * instantiated.
   *
   * @generated from field: repeated uint64 code_id_whitelist = 1;
   */
  codeIdWhitelist: bigint[] = [];

  /**
   * pool_migration_limit is the maximum number of pools that can be migrated
   * at once via governance proposal. This is to have a constant bound on the
   * number of pools that can be migrated at once and remove the possibility
   * of an unlikely scenario of causing a chain halt due to a large migration.
   *
   * @generated from field: uint64 pool_migration_limit = 2;
   */
  poolMigrationLimit = protoInt64.zero;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code_id_whitelist", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 2, name: "pool_migration_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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

