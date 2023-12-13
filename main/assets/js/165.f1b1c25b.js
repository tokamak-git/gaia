(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{503:function(e,a,s){"use strict";s.r(a);var t=s(1),i=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"gaia-fee-and-fees-checks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gaia-fee-and-fees-checks"}},[e._v("#")]),e._v(" Gaia Fee and Fees Checks")]),e._v(" "),s("h2",{attrs:{id:"fee-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fee-parameters"}},[e._v("#")]),e._v(" Fee Parameters")]),e._v(" "),s("p",[e._v("The CosmosHub allows managing fees using 4 parameters. At the network level, there are three parameters from globalfee modules ("),s("code",[e._v("MinimumGasPricesParam")]),e._v(", "),s("code",[e._v("BypassMinFeeMsgTypes")]),e._v(", and "),s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")]),e._v(") that can be set by gov proposal. Additionally, a fourth parameter which enables individual nodes to impose supplementary fee amount.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("global fees ("),s("code",[e._v("MinimumGasPricesParam")]),e._v(")."),s("br"),e._v("\nglobal fees "),s("code",[e._v("MinimumGasPricesParam")]),e._v(" is established at the network level through globalfee params set via Governance Proposal, it sets a fee requirements that the entire network must adhere to.")]),e._v(" "),s("p",[s("em",[e._v('Please note: in this context, "globalfee" or "Globalfee" are used to refer to the globalfee module, while "global fees" is referring to the '),s("code",[e._v("MinimumGasPricesParam")]),e._v(" in the globalfee module's params.")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("minimum-gas-prices")]),e._v(" in "),s("code",[e._v("app.toml")]),s("br"),e._v("\nBy adjusting the "),s("code",[e._v("minimum-gas-prices")]),e._v(" parameter in "),s("code",[e._v("app.toml")]),e._v(", nodes can enforce a fee that is higher than the globally defined "),s("code",[e._v("MinimumGasPricesParam")]),e._v(". However, it's important to note that this configuration solely determines whether transactions are eligible to enter this specific node's mempool.")]),e._v(" "),s("p",[s("em",[e._v("Please note: in this context, "),s("code",[e._v("minimum-gas-prices")]),e._v(" are used to refer to the local fee requirement that nodes can set in their "),s("code",[e._v("app.toml")]),e._v(", while "),s("code",[e._v("MinimumGasPricesParam")]),e._v(" is a parameter in the globalfee module, which is the fee requirement at network level.")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("BypassMinFeeMsgTypes")]),e._v(" and "),s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")]),e._v("."),s("br"),e._v("\nThese two parameters are also part of the globalfee params from gaiad v11.0.0. They can be changed through Gov Proposals. "),s("code",[e._v("BypassMinFeeMsgTypes")]),e._v(" represents a list of message types that will be excluded from paying any fees for inclusion in a block, "),s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")]),e._v(" is the limit placed on gas usage for "),s("code",[e._v("BypassMinFeeMsgTypes")]),e._v(".")])])]),e._v(" "),s("h2",{attrs:{id:"globalfee-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#globalfee-module"}},[e._v("#")]),e._v(" Globalfee module")]),e._v(" "),s("p",[e._v("The globalfee module has three parameters that can be set by governance proposal type "),s("code",[e._v("param-change")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("MinimumGasPricesParam")])]),e._v(" "),s("li",[s("code",[e._v("BypassMinFeeMsgTypes")])]),e._v(" "),s("li",[s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")])])]),e._v(" "),s("h3",{attrs:{id:"globalfee-params-minimumgaspricesparam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#globalfee-params-minimumgaspricesparam"}},[e._v("#")]),e._v(" Globalfee Params: "),s("code",[e._v("MinimumGasPricesParam")])]),e._v(" "),s("p",[e._v("Network level, global fees consist of a list of "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/82ce891aa67f635f3b324b7a52386d5405c5abd0/types/dec_coin.go#L158",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("sdk.DecCoins")]),s("OutboundLink")],1),e._v(".\nEvery transaction must pay per unit of gas, "),s("strong",[e._v("at least")]),e._v(", in one of the denominations (denoms) amounts in the list. This allows the globalfee module to impose a minimum transaction fee for all transactions for a network.")]),e._v(" "),s("p",[e._v("Requirements for the fees include:")]),e._v(" "),s("ul",[s("li",[e._v("fees have to be alphabetically sorted by denom")]),e._v(" "),s("li",[e._v("fees must have a non-negative amount, with a valid and unique denom (i.e. no duplicate denoms are allowed)")])]),e._v(" "),s("p",[e._v("There are "),s("strong",[e._v("two exceptions")]),e._v(" from the global fees rules that allow zero fee transactions:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Transactions that contain only message types that can bypass the minimum fee requirement and for which the total gas usage of these bypass messages does not exceed "),s("code",[e._v("maxTotalBypassMinFeeMsgGasUsage")]),e._v(" may have zero fees. We refer to this as "),s("em",[e._v("bypass transactions")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("One of the entries in the global fees list has a zero amount, e.g., "),s("code",[e._v("0uatom")]),e._v(", and the corresponding denom, e.g., "),s("code",[e._v("uatom")]),e._v(", is not present in "),s("code",[e._v("minimum-gas-prices")]),e._v(" in "),s("code",[e._v("app.toml")]),e._v(", or node operators may set additional "),s("code",[e._v("minimum-gas-prices")]),e._v(" in "),s("code",[e._v("app.toml")]),e._v(" also zero coins.")])])]),e._v(" "),s("h3",{attrs:{id:"globalfee-params-bypassminfeemsgtypes-and-maxtotalbypassminfeemsggasusage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#globalfee-params-bypassminfeemsgtypes-and-maxtotalbypassminfeemsggasusage"}},[e._v("#")]),e._v(" Globalfee Params: "),s("code",[e._v("BypassMinFeeMsgTypes")]),e._v(" and "),s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")])]),e._v(" "),s("p",[e._v("Bypass minimum fee messages are messages that are exempt from paying fees. The above global fees and the below local "),s("code",[e._v("minimum-gas-prices")]),e._v(" checks do not apply for transactions that satisfy the following conditions:")]),e._v(" "),s("ul",[s("li",[e._v("Transaction contains only bypass message types defined in "),s("code",[e._v("BypassMinFeeMsgTypes")]),e._v(".")]),e._v(" "),s("li",[e._v("The total gas used is less than or equal to "),s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")]),e._v(".")]),e._v(" "),s("li",[e._v("In case of non-zero transaction fees, the denom has to be a subset of denoms defined in the global fees list.")])]),e._v(" "),s("p",[e._v("Starting from gaiad "),s("code",[e._v("v11.0.0")]),e._v(", "),s("code",[e._v("BypassMinFeeMsgTypes")]),e._v(" and "),s("code",[e._v("MaxTotalBypassMinFeeMsgGasUsage")]),e._v(" are part of global fee params and can be proposed at network level. The default values are: "),s("code",[e._v('bypass-min-fee-msg-types=[ "/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.channel.v1.MsgAcknowledgement", "/ibc.core.client.v1.MsgUpdateClient", "/ibc.core.channel.v1.MsgTimeout", "/ibc.core.channel.v1.MsgTimeoutOnClose" ]')]),e._v(" and default "),s("code",[e._v("maxTotalBypassMinFeeMsgGasUsage=1,000,000")])]),e._v(" "),s("p",[e._v("From gaiad v11.0.0, nodes that have the "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" field in their "),s("code",[e._v("app.toml")]),e._v(" configuration are "),s("strong",[e._v("not utilized")]),e._v(". Therefore, node operators have the option to either leave the field in their configurations or remove it. Node inited by gaiad v11.0.0 or later does not have "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" field in the "),s("code",[e._v("app.toml")]),e._v(".")]),e._v(" "),s("p",[e._v("Before gaiad "),s("code",[e._v("v11.0.0")]),e._v(", "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" can be set by each node in "),s("code",[e._v("app.toml")]),e._v(", and "),s("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/682770f2410ab0d33ac7f0c7203519d7a99fa2b6/x/globalfee/ante/fee.go#L69",target:"_blank",rel:"noopener noreferrer"}},[e._v("the bypass messages gas usage on average should not exceed "),s("code",[e._v("maxBypassMinFeeMsgGasUsage")]),e._v("=200,000"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("Nodes created using Gaiad "),s("code",[e._v("v7.0.2")]),e._v(" - "),s("code",[e._v("v10.0.x")]),e._v(" use "),s("code",[e._v('["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.channel.v1.MsgAcknowledgement","/ibc.applications.transfer.v1.MsgTransfer"]')]),e._v(" as defaults.")]),e._v(" "),s("li",[e._v("Nodes created using Gaiad "),s("code",[e._v("v11.0.x")]),e._v(" or later use "),s("code",[e._v('["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.channel.v1.MsgAcknowledgement","/ibc.applications.transfer.v1.MsgTransfer", "/ibc.core.channel.v1.MsgTimeout", "/ibc.core.channel.v1.MsgTimeoutOnClose"]')]),e._v(" as defaults.")]),e._v(" "),s("li",[e._v("Nodes with "),s("code",[e._v("bypass-min-fee-msg-types = []")]),e._v(" or missing this field in "),s("code",[e._v("app.toml")]),e._v(" also use default bypass message types.")]),e._v(" "),s("li",[e._v("Nodes created using gaiad "),s("code",[e._v("v7.0.1")]),e._v(" and "),s("code",[e._v("v7.0.0")]),e._v(" do not have "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" configured in "),s("code",[e._v("config/app.toml")]),e._v(" - they are also using same default values as in "),s("code",[e._v("v7.0.2")]),e._v(". The "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" config option can be added to "),s("code",[e._v("config/app.toml")]),e._v(" before the "),s("code",[e._v("[telemetry]")]),e._v(" field.")])]),e._v(" "),s("p",[e._v("An example of "),s("code",[e._v("bypass-min-fee-msg-types")]),e._v(" in "),s("code",[e._v("app.toml")]),e._v(" "),s("strong",[e._v("before")]),e._v(" gaiad v11.0.0:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"CiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tIEdhaWEgQ29uZmlndXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMgYnlwYXNzLW1pbi1mZWUtbXNnLXR5cGVzIGRlZmluZXMgY3VzdG9tIG1lc3NhZ2UgdHlwZXMgdGhlIG9wZXJhdG9yIG1heSBzZXQgdGhhdAojIHdpbGwgYnlwYXNzIG1pbmltdW0gZmVlIGNoZWNrcyBkdXJpbmcgQ2hlY2tUeC4KIwojIEV4YW1wbGU6CiMgWyZxdW90Oy9pYmMuY29yZS5jaGFubmVsLnYxLk1zZ1JlY3ZQYWNrZXQmcXVvdDssICZxdW90Oy9pYmMuY29yZS5jaGFubmVsLnYxLk1zZ0Fja25vd2xlZGdlbWVudCZxdW90OywgLi4uXQpieXBhc3MtbWluLWZlZS1tc2ctdHlwZXMgPSBbJnF1b3Q7L2liYy5jb3JlLmNoYW5uZWwudjEuTXNnUmVjdlBhY2tldCZxdW90OywgJnF1b3Q7L2liYy5jb3JlLmNoYW5uZWwudjEuTXNnQWNrbm93bGVkZ2VtZW50JnF1b3Q7LCZxdW90Oy9pYmMuYXBwbGljYXRpb25zLnRyYW5zZmVyLnYxLk1zZ1RyYW5zZmVyJnF1b3Q7LCAmcXVvdDsvaWJjLmNvcmUuY2hhbm5lbC52MS5Nc2dUaW1lb3V0JnF1b3Q7LCAmcXVvdDsvaWJjLmNvcmUuY2hhbm5lbC52MS5Nc2dUaW1lb3V0T25DbG9zZSZxdW90O10K"}}),e._v(" "),s("h2",{attrs:{id:"minimum-gas-prices-local-fee-requirement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimum-gas-prices-local-fee-requirement"}},[e._v("#")]),e._v(" "),s("code",[e._v("Minimum-gas-prices")]),e._v(" (local fee requirement)")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("minimum-gas-prices")]),e._v(" parameter enables node operators to set its minimum fee requirements, and it can be set in the "),s("code",[e._v("config/app.toml")]),e._v(" file.  Please note: if "),s("code",[e._v("minimum-gas-prices")]),e._v(" is set to include zero coins, the zero coins are sanitized when "),s("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/76dea00bd6d11bfef043f6062f41e858225820ab/cmd/gaiad/cmd/root.go#L221",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("SetMinGasPrices")]),s("OutboundLink")],1),e._v(".\nWhen setting "),s("code",[e._v("minimum-gas-prices")]),e._v(", it's important to keep the following rules in mind:")]),e._v(" "),s("ul",[s("li",[e._v("The denoms in "),s("code",[e._v("min-gas-prices")]),e._v(" that are not present in the global fees list are ignored.")]),e._v(" "),s("li",[e._v("The amounts in "),s("code",[e._v("min-gas-prices")]),e._v(" that are lower than global fees "),s("code",[e._v("MinimumGasPricesParam")]),e._v(" are ignored.")]),e._v(" "),s("li",[e._v("The amounts in "),s("code",[e._v("min-gas-prices")]),e._v(" are considered as fee requirement only if they are greater than the amounts for the corresponding denoms in the global fees list.")])]),e._v(" "),s("h2",{attrs:{id:"fee-antehandler-behaviour"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fee-antehandler-behaviour"}},[e._v("#")]),e._v(" Fee AnteHandler Behaviour")]),e._v(" "),s("p",[e._v("The denoms in the global fees list and the "),s("code",[e._v("minimum-gas-prices")]),e._v(" param are merged and de-duplicated while keeping the higher amounts. Denoms that are only in the "),s("code",[e._v("minimum-gas-prices")]),e._v(" param are discarded.")]),e._v(" "),s("p",[e._v("If the denoms of the transaction fees are a subset of the merged fees and at least one of the amounts of the transaction fees is greater than or equal to the corresponding required fees amount, the transaction can pass the fee check, otherwise an error will occur.")]),e._v(" "),s("h2",{attrs:{id:"queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),s("p",[e._v("CLI queries can be used to retrieve the globalfee params:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z2FpYWQgcSBnbG9iYWxmZWUgcGFyYW1zCgp7CiAgJnF1b3Q7bWluaW11bV9nYXNfcHJpY2VzJnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDswLjAwMjAwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgfSwKICBdLAogICZxdW90O2J5cGFzc19taW5fZmVlX21zZ190eXBlcyZxdW90OzogWwogICAgJnF1b3Q7L2liYy5jb3JlLmNoYW5uZWwudjEuTXNnUmVjdlBhY2tldCZxdW90OywKICAgICZxdW90Oy9pYmMuY29yZS5jaGFubmVsLnYxLk1zZ0Fja25vd2xlZGdlbWVudCZxdW90OywKICAgICZxdW90Oy9pYmMuY29yZS5jbGllbnQudjEuTXNnVXBkYXRlQ2xpZW50JnF1b3Q7LAogICAgJnF1b3Q7L2liYy5jb3JlLmNoYW5uZWwudjEuTXNnVGltZW91dCZxdW90OywKICAgICZxdW90Oy9pYmMuY29yZS5jaGFubmVsLnYxLk1zZ1RpbWVvdXRPbkNsb3NlJnF1b3Q7CiAgXSwKICAmcXVvdDttYXhfdG90YWxfYnlwYXNzX21pbl9mZWVfbXNnX2dhc191c2FnZSZxdW90OzogJnF1b3Q7MjAwMDAwMCZxdW90Owp9Cg=="}}),e._v(" "),s("p",[e._v("If the global fees "),s("code",[e._v("MinimumGasPricesParam")]),e._v(" is not set, the query returns an empty global fees list: "),s("code",[e._v("minimum_gas_prices: []")]),e._v(". In this case the Cosmos Hub will use "),s("code",[e._v("0uatom")]),e._v(" as global fee in this case (the default fee denom).")]),e._v(" "),s("h2",{attrs:{id:"setting-up-globalfee-params-via-gov-proposals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-globalfee-params-via-gov-proposals"}},[e._v("#")]),e._v(" Setting Up Globalfee Params via Gov Proposals")]),e._v(" "),s("p",[e._v("An example of setting up a global fee by a gov proposals is shown below.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z292IHN1Ym1pdC1wcm9wb3NhbCBwYXJhbS1jaGFuZ2UgcHJvcG9zYWwuanNvbgo="}}),e._v(" "),s("p",[e._v("A "),s("code",[e._v("proposal.json")]),e._v(" example to change the "),s("code",[e._v("MinimumGasPricesParam")]),e._v(" in globalfee params:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtHbG9iYWwgZmVlIFBhcmFtIENoYW5nZSZxdW90OywKICAmcXVvdDtkZXNjcmlwdGlvbiZxdW90OzogJnF1b3Q7VXBkYXRlIGdsb2JhbCBmZWUmcXVvdDssCiAgJnF1b3Q7Y2hhbmdlcyZxdW90OzogWwogICAgewogICAgICAmcXVvdDtzdWJzcGFjZSZxdW90OzogJnF1b3Q7Z2xvYmFsZmVlJnF1b3Q7LAogICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O01pbmltdW1HYXNQcmljZXNQYXJhbSZxdW90OywKICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6IFt7JnF1b3Q7ZGVub20mcXVvdDs6JnF1b3Q7c3Rha2UmcXVvdDssICZxdW90O2Ftb3VudCZxdW90OzomcXVvdDswLjAwMiZxdW90O30sIHsmcXVvdDtkZW5vbSZxdW90OzomcXVvdDt1YXRvbSZxdW90OywgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDswLjAwMSZxdW90O31dCiAgICB9CiAgXSwKICAmcXVvdDtkZXBvc2l0JnF1b3Q7OiAmcXVvdDsxMDAwc3Rha2UmcXVvdDsKfQo="}}),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(' in the above "value" field, coins must sorted alphabetically by denom.')]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("proposal.json")]),e._v(" example to change the "),s("code",[e._v("bypassMinFeeMsgTypes")]),e._v(" in globalfee params:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtHbG9iYWxmZWUgUGFyYW0gQ2hhbmdlJnF1b3Q7LAogICZxdW90O2Rlc2NyaXB0aW9uJnF1b3Q7OiAmcXVvdDtVcGRhdGUgZ2xvYmFsZmVlIFBhcmFtcyZxdW90OywKICAmcXVvdDtjaGFuZ2VzJnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O3N1YnNwYWNlJnF1b3Q7OiAmcXVvdDtHbG9iYWxmZWUmcXVvdDssCiAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7QnlwYXNzTWluRmVlTXNnVHlwZXMmcXVvdDssCiAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiBbJnF1b3Q7L2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Nc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZCZxdW90OywgJnF1b3Q7L2liYy5jb3JlLmNoYW5uZWwudjEuTXNnUmVjdlBhY2tldCZxdW90OywgJnF1b3Q7L2liYy5jb3JlLmNsaWVudC52MS5Nc2dVcGRhdGVDbGllbnQmcXVvdDtdCiAgICB9CiAgXSwKICAmcXVvdDtkZXBvc2l0JnF1b3Q7OiAmcXVvdDsxMDAwMDAwdWF0b20mcXVvdDsKfQo="}}),e._v(" "),s("p",[e._v("A "),s("code",[e._v("proposal.json")]),e._v(" example to change the "),s("code",[e._v("maxTotalBypassMinFeeMsgGasUsage")]),e._v(" in globalfee params:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtHbG9iYWxmZWUgUGFyYW0gQ2hhbmdlJnF1b3Q7LAogICZxdW90O2Rlc2NyaXB0aW9uJnF1b3Q7OiAmcXVvdDtVcGRhdGUgZ2xvYmFsZmVlIFBhcmFtcyZxdW90OywKICAmcXVvdDtjaGFuZ2VzJnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O3N1YnNwYWNlJnF1b3Q7OiAmcXVvdDtnbG9iYWxmZWUmcXVvdDssCiAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7TWF4VG90YWxCeXBhc3NNaW5GZWVNc2dHYXNVc2FnZSZxdW90OywKICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6IDUwMDAKICAgIH0KICBdLAogICZxdW90O2RlcG9zaXQmcXVvdDs6ICZxdW90OzEwMDAwMDB1YXRvbSZxdW90Owp9Cg=="}}),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("p",[e._v("Here are a few examples to clarify the relationship between global fees, minimum-gas-prices and transaction fees.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Transactions can include zero-coin fees. However, these fees are removed from the transaction fees during the fee "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/e716e4103e934344aa7be6dc9b5c453bdec5f225/client/tx/factory.go#L144",target:"_blank",rel:"noopener noreferrer"}},[e._v("parsing"),s("OutboundLink")],1),e._v(" / "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/e716e4103e934344aa7be6dc9b5c453bdec5f225/types/dec_coin.go#L172",target:"_blank",rel:"noopener noreferrer"}},[e._v("sanitizing"),s("OutboundLink")],1),e._v(" before reaching the fee AnteHandler.\nThis means "),s("code",[e._v('paidfee = "1uatom, 0stake"')]),e._v(" and "),s("code",[e._v('paidfee = "1uatom"')]),e._v(" are equivalent, and similarly, "),s("code",[e._v('paidfee = "0uatom"')]),e._v(" is equivalent to "),s("code",[e._v('paidfee = ""')]),e._v(".\nIn the following examples, zero-coin fees are removed from the transaction fees, globalfee refers to "),s("code",[e._v("MinimumGasPricesParam")]),e._v(" in globalfee params, minimum-gas-prices refers to the local  "),s("code",[e._v("minimum-gas-prices")]),e._v(" setup in "),s("code",[e._v("app.toml")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"case-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-1"}},[e._v("#")]),e._v(" Case 1")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[], minimum-gas-prices=0.1uatom, gas=2000000.")]),e._v(" "),s("p",[e._v("Note that this is the same case as globalfee=0uatom, minimum-gas-prices=0.1uatom, gas=2000000.")]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom, 1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")])]),e._v(" "),s("h3",{attrs:{id:"case-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-2"}},[e._v("#")]),e._v(" Case 2")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(' globalfee=[], minimum-gas-prices="", gas=2000000.')]),e._v(" "),s("p",[e._v('Note that this is the same case as globalfee=0uatom, minimum-gas-prices="", gas=2000000.')]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")])]),e._v(" "),s("h3",{attrs:{id:"case-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-3"}},[e._v("#")]),e._v(" Case 3")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[0.2uatom], minimum-gas-prices=0.1uatom, gas=2000000 (global fee is higher than min_as_price).")]),e._v(" "),s("p",[e._v('Note that this is the same case as globalfee=0.2uatom, minimum-gas-prices="", gas=2000000.')]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "2000000 * 0.2uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2uatom, 1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")])]),e._v(" "),s("h3",{attrs:{id:"case-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-4"}},[e._v("#")]),e._v(" Case 4")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[0.1uatom], minimum-gas-prices=0.2uatom, gas=2000000 (global fee is lower than min_as_price).")]),e._v(" "),s("p",[e._v("Note that the required amount in globalfee is overwritten by the amount in minimum-gas-prices.")]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "2000000 * 0.2uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2uatom, 1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")]),e._v(" "),s("li",[e._v('paidfee = "", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v("paidfee = 0uatom, "),s("code",[e._v("fail")]),e._v(" (insufficient funds)")])]),e._v(" "),s("h3",{attrs:{id:"case-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-5"}},[e._v("#")]),e._v(" Case 5")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(' globalfee=[0uatom, 1stake], minimum-gas-prices="", gas=200000.')]),e._v(" "),s("ul",[s("li",[e._v('paidfee ="2000000 * 0.5stake", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee ="", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee ="2000000 * 1uatom, 0.5stake", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee ="2000000 * 1stake", '),s("code",[e._v("pass")])])]),e._v(" "),s("h3",{attrs:{id:"case-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-6"}},[e._v("#")]),e._v(" Case 6")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[0.1uatom, 1stake], minimum-gas-prices=0.2uatom, gas=200000.")]),e._v(" "),s("p",[e._v("Note that the required amount of "),s("code",[e._v("uatom")]),e._v(" in globalfee is overwritten by the amount in minimum-gas-prices.")]),e._v(" "),s("ul",[s("li",[e._v('paidfee = "2000000 * 0.2uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 1stake", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.5stake", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom, 2000000 * 1stake", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.2atom, 2000000 * 0.5stake", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('paidfee = "2000000 * 0.1uatom, 2000000 * 0.5stake", '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")])]),e._v(" "),s("h3",{attrs:{id:"case-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-7"}},[e._v("#")]),e._v(" Case 7")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(" globalfee=[0.1uatom], minimum-gas-prices=[0.2uatom, 1stake], gas=600,000,"),s("br"),e._v("\nmax-total-bypass-min-fee-msg-gas-usage=1,000,000,"),s("br"),e._v("\nbypass-min-fee-msg-types = ["),s("br"),e._v('\n"/ibc.core.channel.v1.MsgRecvPacket",'),s("br"),e._v('\n"/ibc.core.channel.v1.MsgAcknowledgement",'),s("br"),e._v('\n"/ibc.core.client.v1.MsgUpdateClient",'),s("br"),e._v('\n"/ibc.core.channel.v1.MsgTimeout",'),s("br"),e._v('\n"/ibc.core.channel.v1.MsgTimeoutOnClose"'),s("br"),e._v("\n]")]),e._v(" "),s("p",[e._v("Note that the required amount of "),s("code",[e._v("uatom")]),e._v(" in globalfee is overwritten by the amount in minimum-gas-prices.\nAlso, the "),s("code",[e._v("1stake")]),e._v(" in minimum-gas-prices is ignored.")]),e._v(" "),s("ul",[s("li",[e._v('msgs=["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.client.v1.MsgUpdateClient"] with paidfee="", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('msgs=["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.client.v1.MsgUpdateClient"] with paidfee="600000 * 0.05uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('msgs= ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"] with paidfee="", '),s("code",[e._v("fail")])]),e._v(" "),s("li",[e._v('msgs=["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.client.v1.MsgUpdateClient", "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward] with paidfee="", '),s("code",[e._v("fail")]),e._v(" (transaction contains non-bypass messages)")]),e._v(" "),s("li",[e._v('msgs=["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.client.v1.MsgUpdateClient", "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward] with paidfee="600000 * 0.2uatom", '),s("code",[e._v("pass")])]),e._v(" "),s("li",[e._v('msgs=["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.client.v1.MsgUpdateClient"] with paidfee="600000 * 1stake", '),s("code",[e._v("fail")]),e._v(" (unexpected denom)")])]),e._v(" "),s("h3",{attrs:{id:"case-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-8"}},[e._v("#")]),e._v(" Case 8")]),e._v(" "),s("p",[s("strong",[e._v("Setting:")]),e._v(' globalfee=[1uatom], minimum-gas-prices="0uatom", gas=1,100,000 or 200,'),s("br"),e._v("\nmax-total-bypass-min-fee-msg-gas-usage=1,000,000,"),s("br"),e._v("\nbypass-min-fee-msg-types = ["),s("br"),e._v('\n"/ibc.core.channel.v1.MsgRecvPacket",'),s("br"),e._v('\n"/ibc.core.channel.v1.MsgAcknowledgement",'),s("br"),e._v('\n"/ibc.core.client.v1.MsgUpdateClient",'),s("br"),e._v('\n"/ibc.core.channel.v1.MsgTimeout",'),s("br"),e._v('\n"/ibc.core.channel.v1.MsgTimeoutOnClose"'),s("br"),e._v("\n]")]),e._v(" "),s("ul",[s("li",[e._v('msgs=["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.client.v1.MsgUpdateClient"] with paidfee="" and gas=1,100,000, '),s("code",[e._v("fail")]),e._v(" (gas limit exceeded for bypass transactions)")]),e._v(" "),s("li",[e._v('msgs=["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.client.v1.MsgUpdateClient"] with paidfee="200 * 1uatom" and gas=200, '),s("code",[e._v("fail")]),e._v(" (insufficient funds)")]),e._v(" "),s("li",[e._v('msgs=["/ibc.core.channel.v1.MsgRecvPacket", "/ibc.core.client.v1.MsgUpdateClient"] with paidfee="1,100,000 * 1uatom", '),s("code",[e._v("pass")])])]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.cosmos.network/v0.45/basics/gas-fees.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gas and Fees in Cosmos SDK"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=i.exports}}]);