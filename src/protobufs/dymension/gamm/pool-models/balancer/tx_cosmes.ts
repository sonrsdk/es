// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/gamm/pool-models/balancer/tx.proto (package dymensionxyz.dymension.gamm.poolmodels.balancer.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx_pb.js";

const TYPE_NAME = "dymensionxyz.dymension.gamm.poolmodels.balancer.v1beta1.Msg";

/**
 * @generated from rpc dymensionxyz.dymension.gamm.poolmodels.balancer.v1beta1.Msg.CreateBalancerPool
 */
export const MsgCreateBalancerPoolService = {
  typeName: TYPE_NAME,
  method: "CreateBalancerPool",
  Request: MsgCreateBalancerPool,
  Response: MsgCreateBalancerPoolResponse,
} as const;

