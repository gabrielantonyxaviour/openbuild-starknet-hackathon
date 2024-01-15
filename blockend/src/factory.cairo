use starknet::{ContractAddress, ClassHash};

#[starknet::interface]
trait IGameFactory<TContractState> {
    fn createGame(ref self: TContractState) -> ContractAddress;
    fn getGameOwner(ref self: TContractState, gameAddress: ContractAddress) -> ContractAddress;
}

#[starknet::contract]
mod GameFactory {
    use starknet::{ContractAddress, ClassHash, get_caller_address};
    use starknet::syscalls::deploy_syscall;

    #[storage]
    struct Storage {
        asset_class_hash: ClassHash,
        gameOwners: LegacyMap::<ContractAddress, ContractAddress>
    }

    #[constructor]
    fn constructor(ref self: ContractState, class_hash: ClassHash) {
        self.asset_class_hash.write(class_hash);
    }

    #[abi(embed_v0)]
    impl Factory of super::IGameFactory<ContractState> {
        fn createGame(ref self: ContractState) -> ContractAddress {
            let mut constructor_calldata: Array::<felt252> = array![];
            let (deployed_address, _) = deploy_syscall(
                self.asset_class_hash.read(), 0, constructor_calldata.span(), false
            )
                .expect('failed to deploy');
            self.gameOwners.write(deployed_address, get_caller_address());
            return deployed_address;
        }

        fn getGameOwner(ref self: ContractState, gameAddress: ContractAddress) -> ContractAddress {
            return self.gameOwners.read(gameAddress);
        }
    }
}
