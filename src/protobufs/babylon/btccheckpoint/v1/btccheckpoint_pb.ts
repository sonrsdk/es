// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file babylon/btccheckpoint/v1/btccheckpoint.proto (package babylon.btccheckpoint.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * BtcStatus is an enum describing the current btc status of the checkpoint
 *
 * @generated from enum babylon.btccheckpoint.v1.BtcStatus
 */
export enum BtcStatus {
  /**
   * SUBMITTED Epoch has Submitted btc status if there ever was at least one
   * known submission on btc main chain
   *
   * @generated from enum value: EPOCH_STATUS_SUBMITTED = 0;
   */
  EPOCH_STATUS_SUBMITTED = 0,

  /**
   * CONFIRMED Epoch has Confirmed btc status if there ever was at least one
   * known submission on btc main chain which was k-deep
   *
   * @generated from enum value: EPOCH_STATUS_CONFIRMED = 1;
   */
  EPOCH_STATUS_CONFIRMED = 1,

  /**
   * CONFIRMED Epoch has Finalized btc status if there is was at exactly one
   * knon submission on btc main chain which is w-deep
   *
   * @generated from enum value: EPOCH_STATUS_FINALIZED = 2;
   */
  EPOCH_STATUS_FINALIZED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(BtcStatus)
proto3.util.setEnumType(BtcStatus, "babylon.btccheckpoint.v1.BtcStatus", [
  { no: 0, name: "EPOCH_STATUS_SUBMITTED" },
  { no: 1, name: "EPOCH_STATUS_CONFIRMED" },
  { no: 2, name: "EPOCH_STATUS_FINALIZED" },
]);

/**
 * Consider we have a Merkle tree with following structure:
 *            ROOT
 *           /    \
 *      H1234      H5555
 *     /     \       \
 *   H12     H34      H55
 *  /  \    /  \     /
 * H1  H2  H3  H4  H5
 * L1  L2  L3  L4  L5
 * To prove L3 was part of ROOT we need:
 * - btc_transaction_index = 2 which in binary is 010
 * (where 0 means going left, 1 means going right in the tree)
 * - merkle_nodes we'd have H4 || H12 || H5555
 * By looking at 010 we would know that H4 is a right sibling,
 * H12 is left, H5555 is right again.
 *
 * @generated from message babylon.btccheckpoint.v1.BTCSpvProof
 */
export class BTCSpvProof extends Message<BTCSpvProof> {
  /**
   * Valid bitcoin transaction containing OP_RETURN opcode.
   *
   * @generated from field: bytes btc_transaction = 1;
   */
  btcTransaction = new Uint8Array(0);

  /**
   * Index of transaction within the block. Index is needed to determine if
   * currently hashed node is left or right.
   *
   * @generated from field: uint32 btc_transaction_index = 2;
   */
  btcTransactionIndex = 0;

  /**
   * List of concatenated intermediate merkle tree nodes, without root node and
   * leaf node against which we calculate the proof. Each node has 32 byte
   * length. Example proof can look like: 32_bytes_of_node1 || 32_bytes_of_node2
   * ||  32_bytes_of_node3 so the length of the proof will always be divisible
   * by 32.
   *
   * @generated from field: bytes merkle_nodes = 3;
   */
  merkleNodes = new Uint8Array(0);

  /**
   * Valid btc header which confirms btc_transaction.
   * Should have exactly 80 bytes
   *
   * @generated from field: bytes confirming_btc_header = 4;
   */
  confirmingBtcHeader = new Uint8Array(0);

  constructor(data?: PartialMessage<BTCSpvProof>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.BTCSpvProof";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "btc_transaction", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "btc_transaction_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "merkle_nodes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "confirming_btc_header", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BTCSpvProof {
    return new BTCSpvProof().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BTCSpvProof {
    return new BTCSpvProof().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BTCSpvProof {
    return new BTCSpvProof().fromJsonString(jsonString, options);
  }

  static equals(a: BTCSpvProof | PlainMessage<BTCSpvProof> | undefined, b: BTCSpvProof | PlainMessage<BTCSpvProof> | undefined): boolean {
    return proto3.util.equals(BTCSpvProof, a, b);
  }
}

/**
 * Each provided OP_RETURN transaction can be identified by hash of block in
 * which transaction was included and transaction index in the block
 *
 * @generated from message babylon.btccheckpoint.v1.TransactionKey
 */
export class TransactionKey extends Message<TransactionKey> {
  /**
   * @generated from field: uint32 index = 1;
   */
  index = 0;

  /**
   * @generated from field: bytes hash = 2;
   */
  hash = new Uint8Array(0);

  constructor(data?: PartialMessage<TransactionKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.TransactionKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionKey {
    return new TransactionKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionKey {
    return new TransactionKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionKey {
    return new TransactionKey().fromJsonString(jsonString, options);
  }

  static equals(a: TransactionKey | PlainMessage<TransactionKey> | undefined, b: TransactionKey | PlainMessage<TransactionKey> | undefined): boolean {
    return proto3.util.equals(TransactionKey, a, b);
  }
}

/**
 * Checkpoint can be composed from multiple transactions, so to identify whole
 * submission we need list of transaction keys.
 * Each submission can generally be identified by this list of (txIdx,
 * blockHash) tuples. Note: this could possibly be optimized as if transactions
 * were in one block they would have the same block hash and different indexes,
 * but each blockhash is only 33 (1  byte for prefix encoding and 32 byte hash),
 * so there should be other strong arguments for this optimization
 *
 * @generated from message babylon.btccheckpoint.v1.SubmissionKey
 */
export class SubmissionKey extends Message<SubmissionKey> {
  /**
   * @generated from field: repeated babylon.btccheckpoint.v1.TransactionKey key = 1;
   */
  key: TransactionKey[] = [];

  constructor(data?: PartialMessage<SubmissionKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.SubmissionKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: TransactionKey, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmissionKey {
    return new SubmissionKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmissionKey {
    return new SubmissionKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmissionKey {
    return new SubmissionKey().fromJsonString(jsonString, options);
  }

  static equals(a: SubmissionKey | PlainMessage<SubmissionKey> | undefined, b: SubmissionKey | PlainMessage<SubmissionKey> | undefined): boolean {
    return proto3.util.equals(SubmissionKey, a, b);
  }
}

/**
 * TransactionInfo is the info of a tx on Bitcoin,
 * including
 * - the position of the tx on BTC blockchain
 * - the full tx content
 * - the Merkle proof that this tx is on the above position
 *
 * @generated from message babylon.btccheckpoint.v1.TransactionInfo
 */
export class TransactionInfo extends Message<TransactionInfo> {
  /**
   * key is the position (txIdx, blockHash) of this tx on BTC blockchain
   * Although it is already a part of SubmissionKey, we store it here again
   * to make TransactionInfo self-contained.
   * For example, storing the key allows TransactionInfo to not relay on
   * the fact that TransactionInfo will be ordered in the same order as
   * TransactionKeys in SubmissionKey.
   *
   * @generated from field: babylon.btccheckpoint.v1.TransactionKey key = 1;
   */
  key?: TransactionKey;

  /**
   * transaction is the full transaction in bytes
   *
   * @generated from field: bytes transaction = 2;
   */
  transaction = new Uint8Array(0);

  /**
   * proof is the Merkle proof that this tx is included in the position in `key`
   * TODO: maybe it could use here better format as we already processed and
   * validated the proof?
   *
   * @generated from field: bytes proof = 3;
   */
  proof = new Uint8Array(0);

  constructor(data?: PartialMessage<TransactionInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.TransactionInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: TransactionKey },
    { no: 2, name: "transaction", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionInfo {
    return new TransactionInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionInfo {
    return new TransactionInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionInfo {
    return new TransactionInfo().fromJsonString(jsonString, options);
  }

  static equals(a: TransactionInfo | PlainMessage<TransactionInfo> | undefined, b: TransactionInfo | PlainMessage<TransactionInfo> | undefined): boolean {
    return proto3.util.equals(TransactionInfo, a, b);
  }
}

/**
 * TODO: Determine if we should keep any block number or depth info.
 * On one hand it may be useful to determine if block is stable or not, on
 * other depth/block number info, without context (i.e info about chain) is
 * pretty useless and blockhash in enough to retrieve is from lightclient
 *
 * @generated from message babylon.btccheckpoint.v1.SubmissionData
 */
export class SubmissionData extends Message<SubmissionData> {
  /**
   * address of the submitter and reporter
   *
   * @generated from field: babylon.btccheckpoint.v1.CheckpointAddresses vigilante_addresses = 1;
   */
  vigilanteAddresses?: CheckpointAddresses;

  /**
   * txs_info is the two `TransactionInfo`s corresponding to the submission
   * It is used for
   * - recovering address of sender of btc transaction to payup the reward.
   * - allowing the ZoneConcierge module to prove the checkpoint is submitted to
   * BTC
   *
   * @generated from field: repeated babylon.btccheckpoint.v1.TransactionInfo txs_info = 2;
   */
  txsInfo: TransactionInfo[] = [];

  /**
   * @generated from field: uint64 epoch = 3;
   */
  epoch = protoInt64.zero;

  constructor(data?: PartialMessage<SubmissionData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.SubmissionData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "vigilante_addresses", kind: "message", T: CheckpointAddresses },
    { no: 2, name: "txs_info", kind: "message", T: TransactionInfo, repeated: true },
    { no: 3, name: "epoch", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmissionData {
    return new SubmissionData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmissionData {
    return new SubmissionData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmissionData {
    return new SubmissionData().fromJsonString(jsonString, options);
  }

  static equals(a: SubmissionData | PlainMessage<SubmissionData> | undefined, b: SubmissionData | PlainMessage<SubmissionData> | undefined): boolean {
    return proto3.util.equals(SubmissionData, a, b);
  }
}

/**
 * Data stored in db and indexed by epoch number
 * TODO: Add btc blockheight at epoch end, when adding handling of epoching
 * callbacks
 *
 * @generated from message babylon.btccheckpoint.v1.EpochData
 */
export class EpochData extends Message<EpochData> {
  /**
   * keys is the list of all received checkpoints during this epoch, sorted by
   * order of submission.
   *
   * @generated from field: repeated babylon.btccheckpoint.v1.SubmissionKey keys = 1;
   */
  keys: SubmissionKey[] = [];

  /**
   * status is the current btc status of the epoch
   *
   * @generated from field: babylon.btccheckpoint.v1.BtcStatus status = 2;
   */
  status = BtcStatus.EPOCH_STATUS_SUBMITTED;

  constructor(data?: PartialMessage<EpochData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.EpochData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "keys", kind: "message", T: SubmissionKey, repeated: true },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(BtcStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EpochData {
    return new EpochData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EpochData {
    return new EpochData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EpochData {
    return new EpochData().fromJsonString(jsonString, options);
  }

  static equals(a: EpochData | PlainMessage<EpochData> | undefined, b: EpochData | PlainMessage<EpochData> | undefined): boolean {
    return proto3.util.equals(EpochData, a, b);
  }
}

/**
 * CheckpointAddresses contains the addresses of the submitter and reporter of a
 * given checkpoint
 *
 * @generated from message babylon.btccheckpoint.v1.CheckpointAddresses
 */
export class CheckpointAddresses extends Message<CheckpointAddresses> {
  /**
   * TODO: this could probably be better typed
   * submitter is the address of the checkpoint submitter to BTC, extracted from
   * the checkpoint itself.
   *
   * @generated from field: bytes submitter = 1;
   */
  submitter = new Uint8Array(0);

  /**
   * reporter is the address of the reporter who reported the submissions,
   * calculated from submission message MsgInsertBTCSpvProof itself
   *
   * @generated from field: bytes reporter = 2;
   */
  reporter = new Uint8Array(0);

  constructor(data?: PartialMessage<CheckpointAddresses>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.CheckpointAddresses";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "submitter", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "reporter", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckpointAddresses {
    return new CheckpointAddresses().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckpointAddresses {
    return new CheckpointAddresses().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckpointAddresses {
    return new CheckpointAddresses().fromJsonString(jsonString, options);
  }

  static equals(a: CheckpointAddresses | PlainMessage<CheckpointAddresses> | undefined, b: CheckpointAddresses | PlainMessage<CheckpointAddresses> | undefined): boolean {
    return proto3.util.equals(CheckpointAddresses, a, b);
  }
}

/**
 * BTCCheckpointInfo contains all data about best submission of checkpoint for
 * given epoch. Best submission is the submission which is deeper in btc ledger
 *
 * @generated from message babylon.btccheckpoint.v1.BTCCheckpointInfo
 */
export class BTCCheckpointInfo extends Message<BTCCheckpointInfo> {
  /**
   * epoch number of this checkpoint
   *
   * @generated from field: uint64 epoch_number = 1;
   */
  epochNumber = protoInt64.zero;

  /**
   * btc height of the best submission of the epoch
   *
   * @generated from field: uint64 best_submission_btc_block_height = 2;
   */
  bestSubmissionBtcBlockHeight = protoInt64.zero;

  /**
   * hash of the btc block which determines checkpoint btc block height i.e.
   * youngest block of best submission
   *
   * @generated from field: bytes best_submission_btc_block_hash = 3;
   */
  bestSubmissionBtcBlockHash = new Uint8Array(0);

  /**
   * the BTC checkpoint transactions of the best submission
   *
   * @generated from field: repeated babylon.btccheckpoint.v1.TransactionInfo best_submission_transactions = 4;
   */
  bestSubmissionTransactions: TransactionInfo[] = [];

  /**
   * list of vigilantes' addresses of the best submission
   *
   * @generated from field: repeated babylon.btccheckpoint.v1.CheckpointAddresses best_submission_vigilante_address_list = 5;
   */
  bestSubmissionVigilanteAddressList: CheckpointAddresses[] = [];

  constructor(data?: PartialMessage<BTCCheckpointInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.BTCCheckpointInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "epoch_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "best_submission_btc_block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "best_submission_btc_block_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "best_submission_transactions", kind: "message", T: TransactionInfo, repeated: true },
    { no: 5, name: "best_submission_vigilante_address_list", kind: "message", T: CheckpointAddresses, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BTCCheckpointInfo {
    return new BTCCheckpointInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BTCCheckpointInfo {
    return new BTCCheckpointInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BTCCheckpointInfo {
    return new BTCCheckpointInfo().fromJsonString(jsonString, options);
  }

  static equals(a: BTCCheckpointInfo | PlainMessage<BTCCheckpointInfo> | undefined, b: BTCCheckpointInfo | PlainMessage<BTCCheckpointInfo> | undefined): boolean {
    return proto3.util.equals(BTCCheckpointInfo, a, b);
  }
}

