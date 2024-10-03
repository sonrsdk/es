// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file macaroon/v1/tx.proto (package macaroon.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgIssueMacaroon, MsgIssueMacaroonResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "macaroon.v1.Msg";

/**
 * UpdateParams defines a governance operation for updating the parameters.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc macaroon.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * IssueMacaroon asserts the given controller is the owner of the given
 * address.
 *
 * @generated from rpc macaroon.v1.Msg.IssueMacaroon
 */
export const MsgIssueMacaroonService = {
  typeName: TYPE_NAME,
  method: "IssueMacaroon",
  Request: MsgIssueMacaroon,
  Response: MsgIssueMacaroonResponse,
} as const;
