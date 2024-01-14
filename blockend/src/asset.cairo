use starknet::ContractAddress;

#[starknet::interface]
trait GameTrait<T> {
    fn createAsset(ref self: T, metadataUrl: felt252, price:u64, quantity:u8) -> u16;
    fn purchaseAsset(ref self: T, assetID: u16, quantity: u8);
}

#[starknet::contract]
mod Game {
    use core::starknet::event::EventEmitter;
    use starknet::{ContractAddress, get_caller_address};

    #[storage]
    struct Storage {
        assetId : u16,
        registry: LegacyMap::<u16,felt252>,
        quantities: LegacyMap::<u16,u8>,
        prices: LegacyMap::<u16,u64>,
        balanceOf: LegacyMap::<ContractAddress,(u16,u8)>
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        AssetCreated: AssetCreated,
        AssetPurchased: AssetPurchased,
    }

    #[derive(Drop, starknet::Event)]
    struct AssetCreated {
        id: u16
    }

    #[derive(Drop, starknet::Event)]
    struct AssetPurchased {
        id: u16,
        user: ContractAddress
    }

    #[constructor]
    fn constructor(ref self: ContractState) {
       self.assetId.write(1_u16);
    }


    #[abi(embed_v0)]
    impl AssetImpl of super::GameTrait<ContractState> {
        fn createAsset(ref self: ContractState, metadataUrl: felt252, price:u64, quantity:u8) -> u16 {
            let id = self.assetId.read();
            self.registry.write(id, metadataUrl);
            self.quantities.write(id,quantity);
            self.prices.write(id,price);
            self.assetId.write(id+1);
            self.emit(AssetCreated{ id: id});
            return id;
        }

        fn purchaseAsset(ref self: ContractState, assetID: u16, quantity: u8) {
            let price = self.prices.read(assetID);
            let quantityAvailable = self.quantities.read(assetID);
            assert!(quantityAvailable > 0, "Asset Exhausted");
            self.quantities.write(assetID, quantityAvailable - quantity);
            self.balanceOf.write(get_caller_address(), (assetID, quantity));
            self.emit(AssetPurchased{id: assetID, user: get_caller_address()});
        }
    }

}