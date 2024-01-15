#!/bin/bash

scarb clean
scarb build

# Get the current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Current directory: $DIR"

export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/my_account_1.json
export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/my_keystore_1.json


# Compile the Game Contract

starkli declare target/dev/gameasset_Game.contract_class.json 

read -p "Enter the class hash of game: " hash
echo "You entered $hash"

starkli declare target/dev/gameasset_GameFactory.contract_class.json

read -p "Enter the class hash of factory: " factory
echo "You entered $factory"

starkli deploy $factory $hash