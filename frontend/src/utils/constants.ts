export const GAME_ABI = [
  {
    type: "impl",
    name: "AssetImpl",
    interface_name: "gameasset::asset::GameTrait",
  },
  {
    type: "interface",
    name: "gameasset::asset::GameTrait",
    items: [
      {
        type: "function",
        name: "createAsset",
        inputs: [
          {
            name: "metadataUrl",
            type: "core::felt252",
          },
          {
            name: "price",
            type: "core::integer::u64",
          },
          {
            name: "quantity",
            type: "core::integer::u8",
          },
        ],
        outputs: [
          {
            type: "core::integer::u16",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "purchaseAsset",
        inputs: [
          {
            name: "assetID",
            type: "core::integer::u16",
          },
          {
            name: "quantity",
            type: "core::integer::u8",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "getCurrentAssetID",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u16",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "getAssetCount",
        inputs: [
          {
            name: "assetID",
            type: "core::integer::u16",
          },
        ],
        outputs: [
          {
            type: "core::integer::u8",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "getMetadata",
        inputs: [
          {
            name: "assetID",
            type: "core::integer::u16",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "getPrice",
        inputs: [
          {
            name: "assetID",
            type: "core::integer::u16",
          },
        ],
        outputs: [
          {
            type: "core::integer::u64",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "getBalanceOf",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "(core::integer::u16, core::integer::u8)",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [],
  },
  {
    type: "event",
    name: "gameasset::asset::Game::AssetCreated",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u16",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "gameasset::asset::Game::AssetPurchased",
    kind: "struct",
    members: [
      {
        name: "id",
        type: "core::integer::u16",
        kind: "data",
      },
      {
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "gameasset::asset::Game::Event",
    kind: "enum",
    variants: [
      {
        name: "AssetCreated",
        type: "gameasset::asset::Game::AssetCreated",
        kind: "nested",
      },
      {
        name: "AssetPurchased",
        type: "gameasset::asset::Game::AssetPurchased",
        kind: "nested",
      },
    ],
  },
];

export const FACTORY_ABI = [
  {
    type: "impl",
    name: "Factory",
    interface_name: "gameasset:🏭:IGameFactory",
  },
  {
    type: "interface",
    name: "gameasset:🏭:IGameFactory",
    items: [
      {
        type: "function",
        name: "createGame",
        inputs: [],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "getGameOwner",
        inputs: [
          {
            name: "gameAddress",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "class_hash",
        type: "core::starknet::class_hash::ClassHash",
      },
    ],
  },
  {
    type: "event",
    name: "gameasset:🏭:GameFactory::GameCreated",
    kind: "struct",
    members: [
      {
        name: "gameAddress",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "gameasset:🏭:GameFactory::Event",
    kind: "enum",
    variants: [
      {
        name: "GameCreated",
        type: "gameasset:🏭:GameFactory::GameCreated",
        kind: "nested",
      },
    ],
  },
];

const FACTORY_ADDRESS =
  "0x0359c2c9a3465b57cb973db044dc3b1be31c7469e209e1deed9037f4b44ea405";
