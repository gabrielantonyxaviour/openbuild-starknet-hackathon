#!/bin/bash

scarb clean
scarb build


export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/argent_account.json
export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/argent.json

# Get the current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Current directory: $DIR"

# Compile the Game Contract

starkli declare target/dev/gameasset_Game.contract_class.json

read -p "Enter the class hash of game: " hash
echo "You entered $hash"

starkli declare target/dev/gameasset_GameFactory.contract_class.json

read -p "Enter the class hash of factory: " factory
echo "You entered $factory"

starkli deploy $factory $hash
