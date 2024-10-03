// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vault/v1/state.proto (package vault.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message vault.v1.DWN
 */
export class DWN extends Message<DWN> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string alias = 2;
   */
  alias = "";

  /**
   * @generated from field: string cid = 3;
   */
  cid = "";

  /**
   * @generated from field: string resolver = 4;
   */
  resolver = "";

  constructor(data?: PartialMessage<DWN>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vault.v1.DWN";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "alias", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "resolver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DWN {
    return new DWN().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DWN {
    return new DWN().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DWN {
    return new DWN().fromJsonString(jsonString, options);
  }

  static equals(a: DWN | PlainMessage<DWN> | undefined, b: DWN | PlainMessage<DWN> | undefined): boolean {
    return proto3.util.equals(DWN, a, b);
  }
}
