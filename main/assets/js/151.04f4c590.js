(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{496:function(e,a,t){"use strict";t.r(a);var o=t(1),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cosmos-hub-3-upgrade-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-3-upgrade-instructions"}},[e._v("#")]),e._v(" Cosmos Hub 3 Upgrade Instructions")]),e._v(" "),t("p",[e._v("The following document describes the necessary steps involved that validators and full node operators\nmust take in order to upgrade from "),t("code",[e._v("cosmoshub-3")]),e._v(" to "),t("code",[e._v("cosmoshub-4")]),e._v(". The Cosmos teams\nwill post an official "),t("code",[e._v("cosmoshub-4")]),e._v(" genesis file, but it is recommended that validators\nexecute the following instructions in order to verify the resulting genesis file.")]),e._v(" "),t("p",[e._v("There is a strong social consensus around proposal "),t("code",[e._v("Cosmos Hub 4 Upgrade Proposal")]),e._v("\non "),t("code",[e._v("cosmoshub-3")]),e._v(". Following proposals #"),t("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/27",target:"_blank",rel:"noopener noreferrer"}},[e._v("27"),t("OutboundLink")],1),e._v(", #"),t("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/35",target:"_blank",rel:"noopener noreferrer"}},[e._v("35"),t("OutboundLink")],1),e._v(" and #"),t("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/36",target:"_blank",rel:"noopener noreferrer"}},[e._v("36"),t("OutboundLink")],1),e._v(".\nThis indicates that the upgrade procedure should be performed on "),t("code",[e._v("February 18, 2021 at 06:00 UTC")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#summary"}},[e._v("Summary")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#migrations"}},[e._v("Migrations")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#preliminary"}},[e._v("Preliminary")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#major-updates"}},[e._v("Major Updates")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#risks"}},[e._v("Risks")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#recovery"}},[e._v("Recovery")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#upgrade-procedure"}},[e._v("Upgrade Procedure")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#guidance-for-full-node-operators"}},[e._v("Guidance for Full Node Operators")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#notes-for-service-providers"}},[e._v("Notes for Service Providers")])])]),e._v(" "),t("h1",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("The Cosmoshub-3 will undergo a scheduled upgrade to Cosmoshub-4 on Feb 18, 2021 at 6 UTC.")]),e._v(" "),t("p",[e._v("The following is a short summary of the upgrade steps:\n1. Stopping the running Gaia v2.0.x instance\n1. Backing up configs, data, and keys used for running Cosmoshub-3\n1. Resetting state to clear the local Cosmoshub-3 state\n1. Copying the cosmoshub-4 genesis file to the Gaia config folder (either after migrating an existing cosmoshub-3 genesis export, or downloading the cosmoshub-4 genesis from the mainnet github)\n1. Installing the Gaia v4.0.x release\n1. Starting the Gaia v4.0.x instance to resume the Cosmos hub chain at a height of "),t("cosmoshub3",{attrs:{height:""}},[e._v(" + 1.")])],1),e._v(" "),t("p",[e._v("Specific instructions for validators are available in "),t("a",{attrs:{href:"#upgrade-procedure"}},[e._v("Upgrade Procedure")]),e._v(",\nand specific instructions for full node operators are available in "),t("a",{attrs:{href:"#guidance-for-full-node-operators"}},[e._v("Guidance for Full Node Operators")]),e._v(".")]),e._v(" "),t("p",[e._v("Upgrade coordination and support for validators will be available on the #validators-verified channel of the "),t("a",{attrs:{href:"https://discord.gg/cosmosnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Discord"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The network upgrade can take the following potential pathways:")]),e._v(" "),t("ol",[t("li",[e._v("Happy path: Validator successfully migrates the cosmoshub-3 genesis file to a cosmoshub-4 genesis file, and the validator can successfully start Gaia v4 with the cosmoshub-4 genesis within 1-2 hours of the scheduled upgrade.")]),e._v(" "),t("li",[e._v("Not-so-happy path: Validators have trouble migrating the cosmoshub-3 genesis to a cosmoshub-4 genesis, but can obtain the genesis file from the Cosmos mainnet github repo and can successfully start Gaia v4 within 1-2 hours of the scheduled upgrade.")]),e._v(" "),t("li",[e._v("Abort path: In the rare event that the team becomes aware of critical issues, which result in an unsuccessful migration within a few hours, the upgrade will be announced as aborted\non the #validators-verified channel of "),t("a",{attrs:{href:"https://discord.gg/cosmosnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),t("OutboundLink")],1),e._v(", and validators will need to resume running cosmoshub-3 network without any updates or changes.\nA new governance proposal for the upgrade will need to be issued and voted on by the community.")])]),e._v(" "),t("h1",{attrs:{id:"migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[e._v("#")]),e._v(" Migrations")]),e._v(" "),t("p",[e._v("These chapters contain all the migration guides to update your app and modules to Cosmos v0.40 Stargate.")]),e._v(" "),t("p",[e._v("If you’re running a block explorer, wallet, exchange, validator, or any other service (eg. custody provider) that depends upon the Cosmos Hub or Cosmos ecosystem, you’ll want to pay attention, because this upgrade will involve substantial changes.")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/app_and_modules.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("App and Modules Migration"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/chain-upgrade-guide-040.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chain Upgrade Guide to v0.40"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/rest.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST Endpoints Migration"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/migration/cosmoshub-3/breaking_changes.html"}},[e._v("Collection of breaking changes from changelogs")])],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#ibc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inter-Blockchain Communication (IBC)– cross-chain transactions"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf Migration – blockchain performance & dev acceleration"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("State Sync – minutes to sync new nodes"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#light",target:"_blank",rel:"noopener noreferrer"}},[e._v("Full-Featured Light Clients"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#upgrade",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chain Upgrade Module – upgrade automation"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("If you want to test the procedure before the update happens on 18th of February, please see this post accordingly:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/gaia/issues/569#issuecomment-767910963",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/cosmos/gaia/issues/569#issuecomment-767910963"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"preliminary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preliminary"}},[e._v("#")]),e._v(" Preliminary")]),e._v(" "),t("p",[e._v("Many changes have occurred to the Cosmos SDK and the Gaia application since the latest\nmajor upgrade ("),t("code",[e._v("cosmoshub-3")]),e._v("). These changes notably consist of many new features,\nprotocol changes, and application structural changes that favor developer ergonomics\nand application development.")]),e._v(" "),t("p",[e._v("First and foremost, "),t("a",{attrs:{href:"https://docs.cosmos.network/main/ibc/overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC"),t("OutboundLink")],1),e._v(" following\nthe "),t("a",{attrs:{href:"https://github.com/cosmos/ics#ibc-quick-references",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Standads"),t("OutboundLink")],1),e._v(" will be enabled.\nThis upgrade comes with several improvements in efficiency, node synchronization and following blockchain upgrades.\nMore details on the "),t("a",{attrs:{href:"https://stargate.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stargate Website"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),t("OutboundLink")],1),e._v(" application v4.0.2 is\nwhat full node operators will upgrade to and run in this next major upgrade")]),e._v(".\nFollowing Cosmos SDK version v0.41.2 and Tendermint v0.34.7.")]),e._v(" "),t("p",[e._v("Validators should expect that at least 16GB of RAM needs to be provisioned to process the first new block on cosmoshub-4.")]),e._v(" "),t("h2",{attrs:{id:"major-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#major-updates"}},[e._v("#")]),e._v(" Major Updates")]),e._v(" "),t("p",[e._v("There are many notable features and changes in the upcoming release of the SDK. Many of these\nare discussed at a high level\n"),t("a",{attrs:{href:"https://github.com/cosmos/stargate",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Some of the biggest changes to take note on when upgrading as a developer or client are the following:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Protocol Buffers")]),e._v(": Initially the Cosmos SDK used Amino codecs for nearly all encoding and decoding.\nIn this version a major upgrade to Protocol Buffers have been integrated. It is expected that with Protocol Buffers\napplications gain in speed, readability, convenience and interoperability with many programming languages.\n"),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/app_and_modules.md#protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Read more"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("CLI")]),e._v(": The CLI and the daemon for a blockchain were separated in previous versions of the Cosmos SDK. This\nled to a "),t("code",[e._v("gaiad")]),e._v(" and "),t("code",[e._v("gaiacli")]),e._v(" binary which were separated and could be used for different interactions with the\nblockchain. Both of these have been merged into one "),t("code",[e._v("gaiad")]),e._v(" which now supports the commands the "),t("code",[e._v("gaiacli")]),e._v(" previously\nsupported.")]),e._v(" "),t("li",[t("strong",[e._v("Node Configuration")]),e._v(": Previously blockchain data and node configuration was stored in "),t("code",[e._v("~/.gaia/")]),e._v(", these will\nnow reside in "),t("code",[e._v("~/.gaia/")]),e._v(", if you use scripts that make use of the configuration or blockchain data, make sure to update the path.")])]),e._v(" "),t("h2",{attrs:{id:"risks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),t("p",[e._v("As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of\ndouble-signing and being slashed. The most important piece of this procedure is verifying your\nsoftware version and genesis file hash before starting your validator and signing.")]),e._v(" "),t("p",[e._v("The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade\nprocedure again during the network startup. If you discover a mistake in the process, the best thing\nto do is wait for the network to start before correcting it. If the network is halted and you have\nstarted with a different genesis file than the expected one, seek advice from a Tendermint developer\nbefore resetting your validator.")]),e._v(" "),t("h2",{attrs:{id:"recovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recovery"}},[e._v("#")]),e._v(" Recovery")]),e._v(" "),t("p",[e._v("Prior to exporting "),t("code",[e._v("cosmoshub-3")]),e._v(" state, validators are encouraged to take a full data snapshot at the\nexport height before proceeding. Snapshotting depends heavily on infrastructure, but generally this\ncan be done by backing up the "),t("code",[e._v(".gaia")]),e._v(" directory.")]),e._v(" "),t("p",[e._v("It is critically important to back-up the "),t("code",[e._v(".gaia/data/priv_validator_state.json")]),e._v(" file after stopping your gaiad process. This file is updated every block as your validator participates in a consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted.")]),e._v(" "),t("p",[e._v("In the event that the upgrade does not succeed, validators and operators must downgrade back to\ngaia v2.0.15 with v0.37.15 of the "),t("em",[e._v("Cosmos SDK")]),e._v(" and restore to their latest snapshot before restarting their nodes.")]),e._v(" "),t("h2",{attrs:{id:"upgrade-procedure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure"}},[e._v("#")]),e._v(" Upgrade Procedure")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": It is assumed you are currently operating a full-node running gaia v2.0.15 with v0.37.15 of the "),t("em",[e._v("Cosmos SDK")]),e._v(".")]),e._v(" "),t("p",[e._v("The version/commit hash of Gaia v2.0.15: "),t("code",[e._v("89cf7e6fc166eaabf47ad2755c443d455feda02e")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Verify you are currently running the correct version (v2.0.15) of "),t("em",[e._v("gaiad")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ICQgZ2FpYWQgdmVyc2lvbiAtLWxvbmcKIG5hbWU6IGdhaWEKIHNlcnZlcl9uYW1lOiBnYWlhZAogY2xpZW50X25hbWU6IGdhaWFjbGkKIHZlcnNpb246IDIuMC4xNQogY29tbWl0OiA4OWNmN2U2ZmMxNjZlYWFiZjQ3YWQyNzU1YzQ0M2Q0NTVmZWRhMDJlCiBidWlsZF90YWdzOiBuZXRnbyxsZWRnZXIKIGdvOiBnbyB2ZXJzaW9uIGdvMS4xNSBkYXJ3aW4vYW1kNjQK"}})],1),e._v(" "),t("li",[t("p",[e._v("Make sure your chain halts at the right time and date:\nFebruary 18, 2021 at 06:00 UTC is in UNIX seconds: "),t("code",[e._v("1613628000")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGVybCAtaSAtcGUgJ3MvXmhhbHQtdGltZSA9LiovaGFsdC10aW1lID0gMTYxMzYyODAwMC8nIH4vLmdhaWEvY29uZmlnL2FwcC50b21sCg=="}})],1),e._v(" "),t("li",[t("p",[e._v("After the chain has halted, make a backup of your "),t("code",[e._v(".gaia")]),e._v(" directory")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bXYgfi8uZ2FpYSAuL2dhaWFkX2JhY2t1cAo="}}),e._v(" "),t("p",[t("strong",[e._v("NOTE")]),e._v(": It is recommended for validators and operators to take a full data snapshot at the export\nheight before proceeding in case the upgrade does not go as planned or if not enough voting power\ncomes online in a sufficient and agreed upon amount of time. In such a case, the chain will fallback\nto continue operating "),t("code",[e._v("cosmoshub-3")]),e._v(". See "),t("a",{attrs:{href:"#recovery"}},[e._v("Recovery")]),e._v(" for details on how to proceed.")])],1),e._v(" "),t("li",[t("p",[e._v("Export existing state from "),t("code",[e._v("cosmoshub-3")]),e._v(":")]),e._v(" "),t("p",[e._v("Before exporting state via the following command, the "),t("code",[e._v("gaiad")]),e._v(" binary must be stopped!\nAs a validator, you can see the last block height created in the\n"),t("code",[e._v("~/.gaia/data/priv_validator_state.json")]),e._v(" - or now residing in "),t("code",[e._v("gaiad_backup")]),e._v(" when you made\na backup as in the last step - and obtain it with")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2F0IH4vLmdhaWEvZGF0YS9wcml2X3ZhbGlkYXRvcl9zdGF0ZS5qc29uIHwganEgJy5oZWlnaHQnCg=="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0PSZsdDtoZWlnaHQmZ3Q7ICZndDsgY29zbW9zaHViXzNfZ2VuZXNpc19leHBvcnQuanNvbgo="}}),e._v(" "),t("p",[t("em",[e._v("this might take a while, you can expect an hour for this step")])])],1),e._v(" "),t("li",[t("p",[e._v("Verify the SHA256 of the (sorted) exported genesis file:")]),e._v(" "),t("p",[e._v("Compare this value with other validators / full node operators of the network.\nGoing forward it will be important that all parties can create the same genesis file export.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBqcSAtUyAtYyAtTSAnJyBjb3Ntb3NodWJfM19nZW5lc2lzX2V4cG9ydC5qc29uIHwgc2hhc3VtIC1hIDI1NgpbU0hBMjU2X1ZBTFVFXSAgY29zbW9zaHViXzNfZ2VuZXNpc19leHBvcnQuanNvbgo="}})],1),e._v(" "),t("li",[t("p",[e._v("At this point you now have a valid exported genesis state! All further steps now require\nv4.0.2 of "),t("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),t("OutboundLink")],1),e._v(".\nCross check your genesis hash with other peers (other validators) in the chat rooms.")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")]),e._v(": Go "),t("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.15+"),t("OutboundLink")],1),e._v(" is required!")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYS5naXQgJmFtcDsmYW1wOyBjZCBnYWlhICZhbXA7JmFtcDsgZ2l0IGNoZWNrb3V0IHY0LjAuMjsgbWFrZSBpbnN0YWxsCg=="}})],1),e._v(" "),t("li",[t("p",[e._v("Verify you are currently running the correct version (v4.0.2) of the "),t("em",[e._v("Gaia")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IG5hbWU6IGdhaWEKIHNlcnZlcl9uYW1lOiBnYWlhZAogdmVyc2lvbjogNC4wLjIKIGNvbW1pdDogNmQ0NjU3MmYzMjczNDIzYWQ5NTYyY2YyNDlhODZlY2M4MjA2ZTIwNwogYnVpbGRfdGFnczogbmV0Z28sbGVkZ2VyCiAuLi4K"}}),e._v(" "),t("p",[e._v("The version/commit hash of Gaia v4.0.2: "),t("code",[e._v("6d46572f3273423ad9562cf249a86ecc8206e207")])])],1),e._v(" "),t("li",[t("p",[e._v("Migrate exported state from the current v2.0.15 version to the new v4.0.2 version:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgbWlncmF0ZSBjb3Ntb3NodWJfM19nZW5lc2lzX2V4cG9ydC5qc29uIC0tY2hhaW4taWQ9Y29zbW9zaHViLTQgLS1pbml0aWFsLWhlaWdodCBbbGFzdF9jb3Ntb3NodWItM19ibG9jaysxXSAmZ3Q7IGdlbmVzaXMuanNvbgo="}}),e._v(" "),t("p",[e._v("This will migrate our exported state into the required "),t("code",[e._v("genesis.json")]),e._v(" file to start the cosmoshub-4.")])],1),e._v(" "),t("li",[t("p",[e._v("Verify the SHA256 of the final genesis JSON:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBqcSAtUyAtYyAtTSAnJyBnZW5lc2lzLmpzb24gfCBzaGFzdW0gLWEgMjU2CltTSEEyNTZfVkFMVUVdICBnZW5lc2lzLmpzb24K"}}),e._v(" "),t("p",[e._v("Compare this value with other validators / full node operators of the network.\nIt is important that each party can reproduce the same genesis.json file from the steps accordingly.")])],1),e._v(" "),t("li",[t("p",[e._v("Reset state:")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")]),e._v(": Be sure you have a complete backed up state of your node before proceeding with this step.\nSee "),t("a",{attrs:{href:"#recovery"}},[e._v("Recovery")]),e._v(" for details on how to proceed.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdW5zYWZlLXJlc2V0LWFsbAo="}})],1),e._v(" "),t("li",[t("p",[e._v("Move the new "),t("code",[e._v("genesis.json")]),e._v(" to your "),t("code",[e._v(".gaia/config/")]),e._v(" directory")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3AgZ2VuZXNpcy5qc29uIH4vLmdhaWEvY29uZmlnLwo="}})],1),e._v(" "),t("li",[t("p",[e._v("Start your blockchain")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),e._v(" "),t("p",[e._v("Automated audits of the genesis state can take 30-120 min using the crisis module. This can be disabled by\n"),t("code",[e._v("gaiad start --x-crisis-skip-assert-invariants")]),e._v(".")])],1)]),e._v(" "),t("h1",{attrs:{id:"guidance-for-full-node-operators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guidance-for-full-node-operators"}},[e._v("#")]),e._v(" Guidance for Full Node Operators")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Verify you are currently running the correct version (v2.0.15) of "),t("em",[e._v("gaiad")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ICQgZ2FpYWQgdmVyc2lvbiAtLWxvbmcKIG5hbWU6IGdhaWEKIHNlcnZlcl9uYW1lOiBnYWlhZAogY2xpZW50X25hbWU6IGdhaWFjbGkKIHZlcnNpb246IDIuMC4xNQogY29tbWl0OiA4OWNmN2U2ZmMxNjZlYWFiZjQ3YWQyNzU1YzQ0M2Q0NTVmZWRhMDJlCiBidWlsZF90YWdzOiBuZXRnbyxsZWRnZXIKIGdvOiBnbyB2ZXJzaW9uIGdvMS4xNSBkYXJ3aW4vYW1kNjQK"}})],1),e._v(" "),t("li",[t("p",[e._v("Stop your Gaia v2.0.15 instance.")])]),e._v(" "),t("li",[t("p",[e._v("After the chain has halted, make a backup of your "),t("code",[e._v(".gaia")]),e._v(" directory")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bXYgfi8uZ2FpYSAuL2dhaWFkX2JhY2t1cAo="}}),e._v(" "),t("p",[t("strong",[e._v("NOTE")]),e._v(": It is recommended for validators and operators to take a full data snapshot at the export\nheight before proceeding in case the upgrade does not go as planned or if not enough voting power\ncomes online in a sufficient and agreed upon amount of time. That means the backup of "),t("code",[e._v(".gaia")]),e._v(" should\nonly take place once the chain has halted at UNIX time "),t("code",[e._v("1613628000")]),e._v(".\nIn such a case, the chain will fallback\nto continue operating "),t("code",[e._v("cosmoshub-3")]),e._v(". See "),t("a",{attrs:{href:"#recovery"}},[e._v("Recovery")]),e._v(" for details on how to proceed.")])],1),e._v(" "),t("li",[t("p",[e._v("Download the cosmoshub-4 genesis file from the "),t("a",{attrs:{href:"https://github.com/cosmos/mainnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Mainnet Github"),t("OutboundLink")],1),e._v(".\nThis file will be generated by a validator that is migrating from cosmoshub-3 to cosmoshub-4.\nThe cosmoshub-4 genesis file will be validated by community participants, and\nthe hash of the file will be shared on the #validators-verified channel of the "),t("a",{attrs:{href:"https://discord.gg/cosmosnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Discord"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Install v4.0.2 of "),t("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")]),e._v(": Go "),t("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("1.15+"),t("OutboundLink")],1),e._v(" is required!")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYS5naXQgJmFtcDsmYW1wOyBjZCBnYWlhICZhbXA7JmFtcDsgZ2l0IGNoZWNrb3V0IHY0LjAuMjsgbWFrZSBpbnN0YWxsCg=="}})],1),e._v(" "),t("li",[t("p",[e._v("Verify you are currently running the correct version (v4.0.2) of the "),t("em",[e._v("Gaia")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IG5hbWU6IGdhaWEKIHNlcnZlcl9uYW1lOiBnYWlhZAogdmVyc2lvbjogNC4wLjIKIGNvbW1pdDogNmQ0NjU3MmYzMjczNDIzYWQ5NTYyY2YyNDlhODZlY2M4MjA2ZTIwNwogYnVpbGRfdGFnczogbmV0Z28sbGVkZ2VyCiAuLi4K"}}),e._v(" "),t("p",[e._v("The version/commit hash of Gaia v4.0.2: "),t("code",[e._v("6d46572f3273423ad9562cf249a86ecc8206e207")])])],1),e._v(" "),t("li",[t("p",[e._v("Reset state:")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")]),e._v(": Be sure you have a complete backed up state of your node before proceeding with this step.\nSee "),t("a",{attrs:{href:"#recovery"}},[e._v("Recovery")]),e._v(" for details on how to proceed.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdW5zYWZlLXJlc2V0LWFsbAo="}})],1),e._v(" "),t("li",[t("p",[e._v("Move the new "),t("code",[e._v("genesis.json")]),e._v(" to your "),t("code",[e._v(".gaia/config/")]),e._v(" directory")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3AgZ2VuZXNpcy5qc29uIH4vLmdhaWEvY29uZmlnLwo="}})],1),e._v(" "),t("li",[t("p",[e._v("Start your blockchain")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),e._v(" "),t("p",[e._v("Automated audits of the genesis state can take 30-120 min using the crisis module. This can be disabled by\n"),t("code",[e._v("gaiad start --x-crisis-skip-assert-invariants")]),e._v(".")])],1)]),e._v(" "),t("h2",{attrs:{id:"notes-for-service-providers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes-for-service-providers"}},[e._v("#")]),e._v(" Notes for Service Providers")]),e._v(" "),t("h1",{attrs:{id:"rest-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rest-server"}},[e._v("#")]),e._v(" REST server")]),e._v(" "),t("p",[e._v("In case you have been running REST server with the command "),t("code",[e._v("gaiacli rest-server")]),e._v(" previously, running this command will not be necessary anymore.\nAPI server is now in-process with daemon and can be enabled/disabled by API configuration in your "),t("code",[e._v(".gaia/config/app.toml")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"W2FwaV0KIyBFbmFibGUgZGVmaW5lcyBpZiB0aGUgQVBJIHNlcnZlciBzaG91bGQgYmUgZW5hYmxlZC4KZW5hYmxlID0gZmFsc2UKIyBTd2FnZ2VyIGRlZmluZXMgaWYgc3dhZ2dlciBkb2N1bWVudGF0aW9uIHNob3VsZCBhdXRvbWF0aWNhbGx5IGJlIHJlZ2lzdGVyZWQuCnN3YWdnZXIgPSBmYWxzZQo="}}),e._v(" "),t("p",[t("code",[e._v("swagger")]),e._v(" setting refers to enabling/disabling swagger docs API, i.e, /swagger/ API endpoint.")]),e._v(" "),t("h1",{attrs:{id:"grpc-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grpc-configuration"}},[e._v("#")]),e._v(" gRPC Configuration")]),e._v(" "),t("p",[e._v("gRPC configuration in your "),t("code",[e._v(".gaia/config/app.toml")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"W2dycGNdCiMgRW5hYmxlIGRlZmluZXMgaWYgdGhlIGdSUEMgc2VydmVyIHNob3VsZCBiZSBlbmFibGVkLgplbmFibGUgPSB0cnVlCiMgQWRkcmVzcyBkZWZpbmVzIHRoZSBnUlBDIHNlcnZlciBhZGRyZXNzIHRvIGJpbmQgdG8uCmFkZHJlc3MgPSAmcXVvdDswLjAuMC4wOjkwOTAmcXVvdDsK"}}),e._v(" "),t("h1",{attrs:{id:"state-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-sync"}},[e._v("#")]),e._v(" State Sync")]),e._v(" "),t("p",[e._v("State Sync Configuration in your "),t("code",[e._v(".gaia/config/app.toml")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"IyBTdGF0ZSBzeW5jIHNuYXBzaG90cyBhbGxvdyBvdGhlciBub2RlcyB0byByYXBpZGx5IGpvaW4gdGhlIG5ldHdvcmsgd2l0aG91dCByZXBsYXlpbmcgaGlzdG9yaWNhbAojIGJsb2NrcywgaW5zdGVhZCBkb3dubG9hZGluZyBhbmQgYXBwbHlpbmcgYSBzbmFwc2hvdCBvZiB0aGUgYXBwbGljYXRpb24gc3RhdGUgYXQgYSBnaXZlbiBoZWlnaHQuCltzdGF0ZS1zeW5jXQojIHNuYXBzaG90LWludGVydmFsIHNwZWNpZmllcyB0aGUgYmxvY2sgaW50ZXJ2YWwgYXQgd2hpY2ggbG9jYWwgc3RhdGUgc3luYyBzbmFwc2hvdHMgYXJlCiMgdGFrZW4gKDAgdG8gZGlzYWJsZSkuIE11c3QgYmUgYSBtdWx0aXBsZSBvZiBwcnVuaW5nLWtlZXAtZXZlcnkuCnNuYXBzaG90LWludGVydmFsID0gMAojIHNuYXBzaG90LWtlZXAtcmVjZW50IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHJlY2VudCBzbmFwc2hvdHMgdG8ga2VlcCBhbmQgc2VydmUgKDAgdG8ga2VlcCBhbGwpLgpzbmFwc2hvdC1rZWVwLXJlY2VudCA9IDIK"}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);