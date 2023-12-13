(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{527:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cosmos-hub-4-v7-theta-upgrade-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-4-v7-theta-upgrade-instructions"}},[e._v("#")]),e._v(" Cosmos Hub 4, v7-Theta Upgrade, Instructions")]),e._v(" "),a("p",[e._v("This document describes the steps for validator and full node operators for the successful execution of the "),a("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/docs/roadmap/cosmos-hub-roadmap-2.0.md#v7-theta-upgrade-expected-q1-2022",target:"_blank",rel:"noopener noreferrer"}},[e._v("v7-Theta Upgrade"),a("OutboundLink")],1),e._v(", which contains the following main new features/improvement:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos-sdk"),a("OutboundLink")],1),e._v(" to "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases/tag/v0.45.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.45.1"),a("OutboundLink")],1),e._v(". See "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.1/CHANGELOG.md#v0451---2022-02-03",target:"_blank",rel:"noopener noreferrer"}},[e._v("CHANGELOG.md"),a("OutboundLink")],1),e._v(" for details.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("ibc-go"),a("OutboundLink")],1),e._v(" module to "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/releases/tag/v3.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v3.0.0"),a("OutboundLink")],1),e._v(". See "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/CHANGELOG.md#v300---2022-03-15",target:"_blank",rel:"noopener noreferrer"}},[e._v("CHANGELOG.md"),a("OutboundLink")],1),e._v(" for details.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/27-interchain-accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("interchain account"),a("OutboundLink")],1),e._v(" module (interchain-account module is part of ibc-go module).")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gravity-devs/liquidity",target:"_blank",rel:"noopener noreferrer"}},[e._v("liquidity"),a("OutboundLink")],1),e._v(" module to "),a("a",{attrs:{href:"https://github.com/Gravity-Devs/liquidity/releases/tag/v1.5.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.5.0"),a("OutboundLink")],1),e._v(". See "),a("a",{attrs:{href:"https://github.com/Gravity-Devs/liquidity/blob/v1.5.0/CHANGELOG.md#v150---20220223",target:"_blank",rel:"noopener noreferrer"}},[e._v("CHANGELOG.md"),a("OutboundLink")],1),e._v(" for details.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/strangelove-ventures/packet-forward-middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("packet-forward-middleware"),a("OutboundLink")],1),e._v(" module to "),a("a",{attrs:{href:"https://github.com/strangelove-ventures/packet-forward-middleware/releases/tag/v2.1.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v2.1.1"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Migration logs for upgrade process.")])]),e._v(" "),a("p",[e._v("TOC:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#cosmos-hub-4-v7-theta-upgrade-instructions"}},[e._v("Cosmos Hub 4, v7-Theta Upgrade, Instructions")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#on-chain-governance-proposal-attains-consensus"}},[e._v("On-chain governance proposal attains consensus")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#upgrade-will-take-place-april-12-2022"}},[e._v("Upgrade will take place April 12, 2022")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#chain-id-will-remain-the-same"}},[e._v("Chain-id will remain the same")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#preparing-for-the-upgrade"}},[e._v("Preparing for the upgrade")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#system-requirement"}},[e._v("System requirement")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#backups"}},[e._v("Backups")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#testing"}},[e._v("Testing")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#current-runtime-cosmoshub-4-pre-v7-theta-upgrade-is-running-gaia-v60x"}},[e._v("Current runtime, cosmoshub-4 (pre-v7-Theta upgrade) is running Gaia v6.0.x")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#target-runtime-cosmoshub-4-post-v7-theta-upgrade-will-run-gaia-v700"}},[e._v("Target runtime, cosmoshub-4 (post-v7-Theta upgrade) will run Gaia v7.0.0")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#v7-theta-upgrade-steps"}},[e._v("v7-Theta upgrade steps")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#method-i-manual-upgrade"}},[e._v("Method I: manual upgrade")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v700-binary"}},[e._v("Method II: upgrade using Cosmovisor by manually preparing the Gaia v7.0.0 binary")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#preparation"}},[e._v("Preparation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#expected-upgrade-result"}},[e._v("Expected upgrade result")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#method-iii-upgrade-using-cosmovisor-by-auto-downloading-the-gaia-v700-binary-not-recommended"}},[e._v("Method III: upgrade using Cosmovisor by auto-downloading the Gaia v7.0.0 binary (not recommended!)")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#preparation-1"}},[e._v("Preparation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#expected-result"}},[e._v("Expected result")])])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#upgrade-duration"}},[e._v("Upgrade duration")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#rollback-plan"}},[e._v("Rollback plan")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#communications"}},[e._v("Communications")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#risks"}},[e._v("Risks")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#reference"}},[e._v("Reference")])])])])]),e._v(" "),a("h2",{attrs:{id:"on-chain-governance-proposal-attains-consensus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-governance-proposal-attains-consensus"}},[e._v("#")]),e._v(" On-chain governance proposal attains consensus")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/65",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal #65"),a("OutboundLink")],1),e._v(" is the reference on-chain governance proposal for this upgrade, which has passed with overwhelming community support. Neither core developers nor core funding entities control the governance, and this governance proposal has passed in a "),a("em",[e._v("fully decentralized")]),e._v(" way.")]),e._v(" "),a("h2",{attrs:{id:"upgrade-will-take-place-april-12-2022"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-will-take-place-april-12-2022"}},[e._v("#")]),e._v(" Upgrade will take place April 12, 2022")]),e._v(" "),a("p",[e._v("The upgrade will take place at a block height of "),a("code",[e._v("10085397")]),e._v(". At the time of writing, and at current block times (around 7s/block), this block height corresponds approximately to "),a("code",[e._v("Tuesday, 12-April-21 16:14:40 UTC")]),e._v(". This date/time is approximate as blocks are not generated at a constant interval. You can stay up-to-date using this "),a("a",{attrs:{href:"https://chain-monitor.cros-nest.com/d/Upgrades/upgrades?var-chain_id=cosmoshub-4&orgId=1&refresh=1m",target:"_blank",rel:"noopener noreferrer"}},[e._v("live countdown"),a("OutboundLink")],1),e._v(" page.")]),e._v(" "),a("h2",{attrs:{id:"chain-id-will-remain-the-same"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-id-will-remain-the-same"}},[e._v("#")]),e._v(" Chain-id will remain the same")]),e._v(" "),a("p",[e._v("The chain-id of the network will remain the same, "),a("code",[e._v("cosmoshub-4")]),e._v(". This is because an in-place migration of state will take place, i.e., this upgrade does not export any state.")]),e._v(" "),a("h2",{attrs:{id:"preparing-for-the-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-for-the-upgrade"}},[e._v("#")]),e._v(" Preparing for the upgrade")]),e._v(" "),a("h3",{attrs:{id:"system-requirement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-requirement"}},[e._v("#")]),e._v(" System requirement")]),e._v(" "),a("p",[e._v("32GB RAM is recommended to ensure a smooth upgrade.")]),e._v(" "),a("p",[e._v("If you have less than 32GB RAM, you might try creating a swapfile to swap an idle program onto the hard disk to free up memory. This can\nallow your machine to run the binary than it could run in RAM alone.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c3VkbyBmYWxsb2NhdGUgLWwgMTZHIC9zd2FwZmlsZQpzdWRvIGNobW9kIDYwMCAvc3dhcGZpbGUKc3VkbyBta3N3YXAgL3N3YXBmaWxlCnN1ZG8gc3dhcG9uIC9zd2FwZmlsZQo="}}),e._v(" "),a("h3",{attrs:{id:"backups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backups"}},[e._v("#")]),e._v(" Backups")]),e._v(" "),a("p",[e._v("Prior to the upgrade, validators are encouraged to take a full data snapshot. Snapshotting depends heavily on infrastructure, but generally this can be done by backing up the "),a("code",[e._v(".gaia")]),e._v(" directory.\nIf you use Cosmovisor to upgrade, by default, Cosmovisor will backup your data upon upgrade. See below "),a("a",{attrs:{href:"#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v700-binary"}},[e._v("upgrade by cosmovisor")]),e._v(" section.")]),e._v(" "),a("p",[e._v("It is critically important for validator operators to back-up the "),a("code",[e._v(".gaia/data/priv_validator_state.json")]),e._v(" file after stopping the gaiad process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted.")]),e._v(" "),a("h3",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),a("p",[e._v("For those validator and full node operators that are interested in ensuring preparedness for the impending upgrade, you can join in our "),a("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/v7-theta/public-testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("v7-Theta public-testnet"),a("OutboundLink")],1),e._v(" or run a "),a("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/local/previous-local-testnets/v7-theta",target:"_blank",rel:"noopener noreferrer"}},[e._v("v7-Theta local testnet"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"current-runtime-cosmoshub-4-pre-v7-theta-upgrade-is-running-gaia-v6-0-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-runtime-cosmoshub-4-pre-v7-theta-upgrade-is-running-gaia-v6-0-x"}},[e._v("#")]),e._v(" Current runtime, cosmoshub-4 (pre-v7-Theta upgrade) is running Gaia v6.0.x")]),e._v(" "),a("p",[e._v("The Cosmos Hub mainnet network, "),a("code",[e._v("cosmoshub-4")]),e._v(", is currently running "),a("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/v6.0.4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia v6.0.4"),a("OutboundLink")],1),e._v(". We anticipate that operators who are running on v6.0.x, will be able to upgrade successfully; however, this is untested and it is up to operators to ensure that their systems are capable of performing the upgrade.")]),e._v(" "),a("h3",{attrs:{id:"target-runtime-cosmoshub-4-post-v7-theta-upgrade-will-run-gaia-v7-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-runtime-cosmoshub-4-post-v7-theta-upgrade-will-run-gaia-v7-0-0"}},[e._v("#")]),e._v(" Target runtime, cosmoshub-4 (post-v7-Theta upgrade) will run Gaia v7.0.0")]),e._v(" "),a("p",[e._v("The Cosmos Hub mainnet network, "),a("code",[e._v("cosmoshub-4")]),e._v(", will run "),a("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/tag/v7.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia v7.0.0"),a("OutboundLink")],1),e._v(". Operators "),a("em",[e._v("MUST")]),e._v(" use this version post-upgrade to remain connected to the network.")]),e._v(" "),a("h2",{attrs:{id:"v7-theta-upgrade-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v7-theta-upgrade-steps"}},[e._v("#")]),e._v(" v7-Theta upgrade steps")]),e._v(" "),a("p",[e._v("There are 2 major ways to upgrade a node:")]),e._v(" "),a("ul",[a("li",[e._v("Manual upgrade")]),e._v(" "),a("li",[e._v("Upgrade using "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Either by manually preparing the new binary")]),e._v(" "),a("li",[e._v("Or by using the auto-download functionality (this is not yet recommended)")])])])]),e._v(" "),a("p",[e._v("If you prefer to use Cosmovisor to upgrade, some preparation work is needed before upgrade.")]),e._v(" "),a("h3",{attrs:{id:"method-i-manual-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-i-manual-upgrade"}},[e._v("#")]),e._v(" Method I: manual upgrade")]),e._v(" "),a("p",[e._v("Run Gaia v6.0.x till upgrade height, the node will panic:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7djctVGhldGEmcXVvdDsgTkVFREVEIGF0IGhlaWdodDogMTAwODUzOTcKCnBhbmljOiBVUEdSQURFICZxdW90O3Y3LVRoZXRhJnF1b3Q7IE5FRURFRCBhdCBoZWlnaHQ6IDEwMDg1Mzk3Cg=="}}),e._v(" "),a("p",[e._v("Stop the node, and install Gaia v7.0.0 and re-start by "),a("code",[e._v("gaiad start")]),e._v(".")]),e._v(" "),a("p",[e._v("It may take 7 minutes to a few hours until validators with a total sum voting power > 2/3 to complete their nodes upgrades. After that, the chain can continue to produce blocks.")]),e._v(" "),a("h3",{attrs:{id:"method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v7-0-0-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v7-0-0-binary"}},[e._v("#")]),e._v(" Method II: upgrade using Cosmovisor by manually preparing the Gaia v7.0.0 binary")]),e._v(" "),a("h4",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),a("p",[e._v("Install the latest version of Cosmovisor:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAbGF0ZXN0Cg=="}}),e._v(" "),a("p",[e._v("Create a cosmovisor folder:")]),e._v(" "),a("p",[e._v("create a Cosmovisor folder inside "),a("code",[e._v("$GAIA_HOME")]),e._v(" and move Gaia v6.0.4 into "),a("code",[e._v("$GAIA_HOME/cosmovisor/genesis/bin")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci9nZW5lc2lzL2Jpbgo="}}),e._v(" "),a("p",[e._v("build Gaia v7.0.0, and move gaiad v7.0.0 to "),a("code",[e._v("$GAIA_HOME/cosmovisor/upgrades/v7-Theta/bin")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgICRHQUlBX0hPTUUvY29zbW92aXNvci91cGdyYWRlcy92Ny1UaGV0YS9iaW4KY3AgJCh3aGljaCBnYWlhZCkgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL3VwZ3JhZGVzL3Y3LVRoZXRhL2Jpbgo="}}),e._v(" "),a("p",[e._v("Then you should get the following structure:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJzilIDilIAgZ2VuZXNpcwrilIIgICDilJTilIDilIAgYmluCuKUgiAgICAgICDilJTilIDilIAgZ2FpYWQgICN2Ni4wLjQK4pSU4pSA4pSAIHVwZ3JhZGVzCiAgICDilJTilIDilIAgdjctVGhldGEKICAgICAgICDilJTilIDilIAgYmluCiAgICAgICAgICAgIOKUlOKUgOKUgCBnYWlhZCAgI3Y3LjAuMAo="}}),e._v(" "),a("p",[e._v("Export the environmental variables:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkCiMgcGxlYXNlIGNoYW5nZSB0byB5b3VyIG93biBnYWlhIGhvbWUgZGlyCmV4cG9ydCBEQUVNT05fSE9NRT0gJEdBSUFfSE9NRQpleHBvcnQgREFFTU9OX1JFU1RBUlRfQUZURVJfVVBHUkFERT10cnVlCg=="}}),e._v(" "),a("p",[e._v("Start the node:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciBzdGFydCAtLXgtY3Jpc2lzLXNraXAtYXNzZXJ0LWludmFyaWFudHMK"}}),e._v(" "),a("p",[e._v("Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK.")]),e._v(" "),a("h4",{attrs:{id:"expected-upgrade-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expected-upgrade-result"}},[e._v("#")]),e._v(" Expected upgrade result")]),e._v(" "),a("p",[e._v("When the upgrade block height is reached, you can find the following information in the log:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7djctVGhldGEmcXVvdDsgTkVFREVEIGF0IGhlaWdodDogMTAwODUzOTc6IHVwZ3JhZGUgdG8gdjctVGhldGEgYW5kIGFwcGx5aW5nIHVwZ3JhZGUgJnF1b3Q7djctVGhldGEmcXVvdDsgYXQgaGVpZ2h0OjEwMDg1Mzk3Lgo="}}),e._v(" "),a("p",[e._v("This may take 7 minutes to a few hours.\nAfter upgrade, the chain will continue to produce blocks when validators with a total sum voting power > 2/3 complete their nodes upgrades.")]),e._v(" "),a("h3",{attrs:{id:"method-iii-upgrade-using-cosmovisor-by-auto-downloading-the-gaia-v7-0-0-binary-not-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-iii-upgrade-using-cosmovisor-by-auto-downloading-the-gaia-v7-0-0-binary-not-recommended"}},[e._v("#")]),e._v(" Method III: upgrade using Cosmovisor by auto-downloading the Gaia v7.0.0 binary (not recommended!)")]),e._v(" "),a("h4",{attrs:{id:"preparation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation-2"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),a("p",[e._v("Install Cosmovisor v1.1.0")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAbGF0ZXN0Cg=="}}),e._v(" "),a("p",[e._v("Create a cosmovisor folder:")]),e._v(" "),a("p",[e._v("create a cosmovisor folder inside gaia home and move gaiad v6.0.4 into "),a("code",[e._v("$GAIA_HOME/cosmovisor/genesis/bin")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci9nZW5lc2lzL2Jpbgo="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJTilIDilIAgZ2VuZXNpcwogICAgIOKUlOKUgOKUgCBiaW4KICAgICAgICDilJTilIDilIAgZ2FpYWQgICN2Ni4wLjQK"}}),e._v(" "),a("p",[e._v("Export the environmental variables:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkCiMgcGxlYXNlIGNoYW5nZSB0byB5b3VyIG93biBnYWlhIGhvbWUgZGlyCmV4cG9ydCBEQUVNT05fSE9NRT0gJEdBSUFfSE9NRQpleHBvcnQgREFFTU9OX1JFU1RBUlRfQUZURVJfVVBHUkFERT10cnVlCmV4cG9ydCBEQUVNT05fQUxMT1dfRE9XTkxPQURfQklOQVJJRVM9dHJ1ZQo="}}),e._v(" "),a("p",[e._v("Start the node:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciBzdGFydCAtLXgtY3Jpc2lzLXNraXAtYXNzZXJ0LWludmFyaWFudHMK"}}),e._v(" "),a("p",[e._v("Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK.")]),e._v(" "),a("h4",{attrs:{id:"expected-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expected-result"}},[e._v("#")]),e._v(" Expected result")]),e._v(" "),a("p",[e._v("When the upgrade block height is reached, you can find the following information in the log:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7djctVGhldGEmcXVvdDsgTkVFREVEIGF0IGhlaWdodDogMTAwODUzOTc6IHVwZ3JhZGUgdG8gdjctVGhldGEgYW5kIGFwcGx5aW5nIHVwZ3JhZGUgJnF1b3Q7djctVGhldGEmcXVvdDsgYXQgaGVpZ2h0OjEwMDg1Mzk3Cg=="}}),e._v(" "),a("p",[e._v("Then the Cosmovisor will create "),a("code",[e._v("$GAIA_HOME/cosmovisor/upgrades/v7-Theta/bin")]),e._v(" and download Gaia v7.0.0 binary to this folder according to links in the "),a("code",[e._v("--info")]),e._v(" field of the upgrade proposal 65.\nThis may take 7 minutes to a few hours, afterwards, the chain will continue to produce blocks once validators with a total sum voting power > 2/3 complete their nodes upgrades.")]),e._v(" "),a("p",[a("em",[e._v("Please Note:")])]),e._v(" "),a("ul",[a("li",[e._v("In general, auto-download comes with the risk that the verification of correct download is done automatically. If users want to have the highest guarantee users should confirm the check-sum manually. We hope more node operators will use the auto-download for this release but please be aware this is a risk and users should take at your own discretion.")]),e._v(" "),a("li",[e._v("Users should use run node on v6.0.4 if they use the cosmovisor v1.1.0 with auto-download enabled for upgrade process.")])]),e._v(" "),a("h2",{attrs:{id:"upgrade-duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-duration"}},[e._v("#")]),e._v(" Upgrade duration")]),e._v(" "),a("p",[e._v("The upgrade may take a few minutes to several hours to complete because cosmoshub-4 participants operate globally with differing operating hours and it may take some time for operators to upgrade their binaries and connect to the network.")]),e._v(" "),a("h2",{attrs:{id:"rollback-plan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollback-plan"}},[e._v("#")]),e._v(" Rollback plan")]),e._v(" "),a("p",[e._v("During the network upgrade, core Cosmos teams will be keeping an ever vigilant eye and communicating with operators on the status of their upgrades. During this time, the core teams will listen to operator needs to determine if the upgrade is experiencing unintended challenges. In the event of unexpected challenges, the core teams, after conferring with operators and attaining social consensus, may choose to declare that the upgrade will be skipped.")]),e._v(" "),a("p",[e._v("Steps to skip this upgrade proposal are simply to resume the cosmoshub-4 network with the (downgraded) v6.0.x binary using the following command:")]),e._v(" "),a("blockquote",[a("p",[e._v("gaiad start --unsafe-skip-upgrade 10085397")])]),e._v(" "),a("p",[e._v("Note: There is no particular need to restore a state snapshot prior to the upgrade height, unless specifically directed by core Cosmos teams.")]),e._v(" "),a("p",[e._v("Important: A social consensus decision to skip the upgrade will be based solely on technical merits, thereby respecting and maintaining the decentralized governance process of the upgrade proposal's successful YES vote.")]),e._v(" "),a("h2",{attrs:{id:"communications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#communications"}},[e._v("#")]),e._v(" Communications")]),e._v(" "),a("p",[e._v("Operators are encouraged to join the "),a("code",[e._v("#validators-verified")]),e._v(" channel of the Cosmos Community Discord. This channel is the primary communication tool for operators to ask questions, report upgrade status, report technical issues, and to build social consensus should the need arise. This channel is restricted to known operators and requires verification beforehand. Requests to join the "),a("code",[e._v("#validators-verified")]),e._v(" channel can be sent to the "),a("code",[e._v("#general-support")]),e._v(" channel.")]),e._v(" "),a("h2",{attrs:{id:"risks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),a("p",[e._v("As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and being slashed. The most important piece of this procedure is verifying your software version and genesis file hash before starting your validator and signing.")]),e._v(" "),a("p",[e._v("The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade procedure again during the network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start before correcting it.")]),e._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/v7-theta",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos/v7-Theta-test"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/cosmos/mainnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("join Cosmos Hub Mainnet"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=o.exports}}]);