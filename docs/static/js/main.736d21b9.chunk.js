(window["webpackJsonpasnow-app"]=window["webpackJsonpasnow-app"]||[]).push([[0],{292:function(t,e,a){t.exports=a(689)},297:function(t,e,a){},612:function(t,e,a){},689:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(4),s=a.n(i),c=(a(297),a(298),a(14)),l=(a(300),a(190)),r=(a(302),a(149)),u=(a(304),a(58)),d=(a(306),a(26)),m=(a(691),a(95)),p=(a(692),a(290)),h=(a(314),a(291)),y=(a(316),a(287)),f=(a(318),a(35)),g=(a(151),a(25)),w=(a(321),a(22)),v=a(55),b=(a(323),a(289)),S=(a(193),a(85)),E=(a(326),a(106)),A=a(29),O=a(47),I=a(69),R=a(67),T=a(70),x=(a(328),a(34)),k=(a(330),a(282)),C=(a(332),a(33)),F=(a(334),a(108)),_=a(145),B=(a(542),a(192),a(66)),P=a(146),N=a.n(P),M="http://127.0.0.1:2345/",W=function(){function t(){Object(A.a)(this,t)}return Object(O.a)(t,[{key:"post",value:function(t,e,a,n){var o={base:{timestamp:1234567,sign:"67ff54447b89f06fe4408b89902e585167abad291ec41118167017925e24e320"},biz:e,page:a};N.a.post(M+t,o).then((function(t){var e=t.data;n&&n(e)})).catch((function(t){}))}},{key:"postSeroRpc",value:function(t,e,a){var n={id:0,jsonrpc:"2.0",method:t,params:e};N.a.post(M+"rpc",n).then((function(t){var e=t.data;a&&a(e)})).catch((function(t){console.log("req error: ",t)}))}},{key:"postPullupRpc",value:function(t,e,a){var n={id:0,method:t,params:e};N.a.post(M+"pullup_rpc",n).then((function(t){var e=t.data;a&&a(e)})).catch((function(t){}))}}]),t}(),D=a(68),j=a.n(D),L="",K=(new W,B.a.Option),H=function(t){function e(t){var a;return Object(A.a)(this,e),(a=Object(I.a)(this,Object(R.a)(e).call(this,t))).handleOk=function(t){var e=Object(v.a)(a);if(""!==L){var n=e.state.accounts,o=!0,i=!1,s=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var r=c.value;r.MainPKr===L&&e.props.selectAccount(r)}}catch(u){i=!0,s=u}finally{try{o||null==l.return||l.return()}finally{if(i)throw s}}}e.props.hiddenAccount()},a.handleCancel=function(t){Object(v.a)(a).props.hiddenAccount()},a.onChange=function(t){L=t},a.state={accountOptions:[],accounts:[]},a}return Object(T.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){this.getAccounts()}},{key:"formatPK",value:function(t){return t.slice(0,10)+"...."+t.slice(-10)}},{key:"getAccounts",value:function(){var t=this;j.a.accountList((function(e){if(e){var a=e,n=0,i=[],s=!0,c=!1,l=void 0;try{for(var r,u=a[Symbol.iterator]();!(s=(r=u.next()).done);s=!0){var d=r.value,m=d.Name;n++,m||(m="Account"+n),i.push(o.a.createElement(K,{value:d.MainPKr,key:n},m+" "+t.formatPK(d.PK)))}}catch(p){c=!0,l=p}finally{try{s||null==u.return||u.return()}finally{if(c)throw l}}t.setState({accountOptions:i,accounts:a})}}))}},{key:"render",value:function(){var t=this;return o.a.createElement(S.a,{title:"Select Account",visible:this.props.visible,onOk:this.handleOk,onCancel:this.handleCancel},o.a.createElement(B.a,{showSearch:!0,style:{width:"98%"},placeholder:"Select an account",onChange:function(e){t.onChange(e)}},this.state.accountOptions))}}]),e}(n.Component),V=a(7),q=a.n(V),z=a(276),U=a.n(z),Z=(a(612),a(277)),J=a.n(Z),Y=a(278),X=a.n(Y),G=a(288),Q=a(107),$=function t(){Object(A.a)(this,t),this.zh_CN={project:{title:"\u5408\u7ea6\u8be6\u60c5",totalSupply:"\u53d1\u884c\u91cf (ASNOW)",contractAddress:"\u5408\u7ea6\u5730\u5740",balanceSero:"\u5f53\u524d\u4f59\u989d (SERO)",balanceAsnow:"\u5f53\u524d\u4f59\u989d (ASNOW)",rate:"\u5151\u6362\u6bd4\u4f8b (SERO / ASNOW)"},account:{title:{utxo:"\u94b1\u5305\u8d26\u6237",contract:"\u5408\u7ea6\u8d26\u6237",swith:"\u5207\u6362\u8d26\u6237",balanceSero:"\u4f59\u989d (SERO)",balanceAsnow:"\u4f59\u989d (ASNOW)",estimatedTotal:"\u9884\u8ba1\u603b\u6536\u76ca (SERO)",dayIncome:"\u5f53\u5929\u8fd4\u8fd8\u6bd4\u4f8b",staticIncome:"\u5f53\u5929\u9759\u6001\u8fd4\u8fd8 (SERO)",withdraw:"\u53ef\u63d0\u73b0\u91d1\u989d (SERO)",detail:"\u8be6\u60c5",id:"\u7f16\u53f7",referId:"\u63a8\u8350\u4eba\u7f16\u53f7",areaId:"\u5927\u533a\u7f16\u53f7",totalInvest:"\u672c\u91d1",profitLevel:"\u6536\u76ca\u500d\u6570",latestTime:"\u6700\u65b0\u6536\u76ca\u65f6\u95f4",totalReturn:"\u5f53\u524d\u8fd4\u8fd8\u603b\u6570(SERO)",totalReturnDay:"\u5f53\u5929\u8fd4\u8fd8\u603b\u6570(SERO)",recommend:"\u4e0b\u7ea7\u4eba\u6570",ticket:"\u5f53\u524d\u53ef\u7528(ASNOW)",staticIncomeTips:"\u4eca\u5929\u7684\u9759\u6001\u6536\u76ca\u5df2\u7ecf\u652f\u4ed8\u5230\u53ef\u63d0\u73b0\u8d26\u6237.",staticIncomeTips2:"\u89e6\u53d1\u6536\u76ca\u5230\u63d0\u73b0\u8d26\u6237.",investDetail:"\u6295\u8d44\u8be6\u60c5",myIncome:"\u6211\u7684\u4e1a\u7ee9",areaTotal:"\u5927\u533a\u4e1a\u7ee9",areaOtherTotal:"\u4e1a\u7ee9\u603b\u548c(\u4e0d\u542b\u5927\u533a)",staticReward:"\u9759\u6001\u8fd4\u8fd8",recommendReward:"\u63a8\u8350\u5956",nobilityReward:"\u661f\u7ea7\u5956",vipReward:"VIP\u5956",viewCode:"\u67e5\u770b\u667a\u80fd\u5408\u7ea6"},button:{deposit:"\u5145\u503c",buy:"\u5151\u6362ASNOW",invest:"\u6295\u8d44",buyTicket:"\u5145\u503cASNOW",trigger:"\u89e6\u53d1\u6536\u76ca",withdraw:"\u63d0\u73b0",close:"\u5173\u95ed",copy:"\u62f7\u8d1d"},modal:{deposit:{title:"\u5145\u503c",copy:"\u62f7\u8d1d"},buyAsnow:{title:"\u5151\u6362ASNOW",amount:"\u6570\u91cf (SERO)",amountPlace:"\u8f93\u5165\u6570\u91cf",rate:"\u5151\u6362\u6bd4\u4f8b",exchange:"\u5151\u6362",password:"\u8d26\u6237\u5bc6\u7801",passwordPlace:"\u8f93\u5165\u8d26\u6237\u5bc6\u7801"},invest:{title:"\u6295\u8d44",referId:"\u63a8\u8350\u4eba\u7f16\u53f7",amount:"\u6295\u8d44\u91d1\u989d",amountTips:"100 SERO\u8d77\u6295",ticket:"\u95e8\u7968",availableSERO:"\u53ef\u7528\u7684\u4f59\u989d",availableAsnow:"\u53ef\u7528\u7684ASNOW",availableExchange:"\u6700\u591a\u53ef\u62b5\u7528",total:"\u5e94\u4ed8\u5408\u8ba1",estimate:"\u9884\u8ba1\u6536\u76ca",password:"\u8d26\u6237\u5bc6\u7801",passwordPlace:"\u8f93\u5165\u8d26\u6237\u5bc6\u7801"},buyTicket:{title:"\u5145\u503cASNOW",amount:"\u6570\u91cf (ASNOW)",amountPlace:"\u8f93\u5165\u6570\u91cf",password:"\u8d26\u6237\u5bc6\u7801",passwordPlace:"\u8f93\u5165\u8d26\u6237\u5bc6\u7801",availableAsnow:"\u53ef\u7528\u7684ASNOW",availableExchange:"\u53ef\u5151\u6362"},trigger:{password:"\u8d26\u6237\u5bc6\u7801",passwordPlace:"\u8f93\u5165\u8d26\u6237\u5bc6\u7801"},withdraw:{password:"\u8d26\u6237\u5bc6\u7801",passwordPlace:"\u8f93\u5165\u8d26\u6237\u5bc6\u7801",tips:"* \u63d0\u73b0\u91d1\u989d\u5c06\u76f4\u63a5\u63d0\u5230UTXO\u8d26\u6237."}}},toast:{lessAmount:"SERO\u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u672c\u6b21\u4ea4\u6613.",lessTicket:"\u5f53\u524d\u53ef\u7528\u7684ASNOW\u4e0d\u8db3\uff0c\u8bf7\u5148\u5145\u503cASNOW",lessAsnow:"\u94b1\u5305\u8d26\u6237\u4e2d\u53ef\u7528\u7684ASNOW\u4e0d\u8db3\uff0c\u8bf7\u5148\u5151\u6362ASNOW",minInvest:"\u6700\u5c0f\u6295\u8d44\u91d1\u989d\u4e3a100SERO.",tx:"\u4ea4\u6613\u63d0\u4ea4\u6210\u529f, \u7b49\u5f85\u533a\u5757\u6253\u5305\u4ea4\u6613, \u4ea4\u6613\u54c8\u5e0c: ",copySuccess:"\u62f7\u8d1d\u6210\u529f! "}},this.en_US={project:{title:"Contract Info",totalSupply:"Total Supply (ASNOW)",contractAddress:"Contract Address",balanceSero:"Current Balance (SERO)",balanceAsnow:"Current Balance (ASNOW)",rate:"Exchange Rate (SERO / ASNOW)"},account:{title:{utxo:"Wallet Account",contract:"Contract Account",swith:"Switch Account",balanceSero:"Balance (SERO)",balanceAsnow:"Balance (ASNOW)",estimatedTotal:"Estimated Total Income (SERO)",dayIncome:"Return rate on the day",staticIncome:"Static Return (SERO)",withdraw:"Withdrawal Account (SERO)",detail:"Detail",id:"ID",referId:"Refer ID",areaId:"Large Area ID",totalInvest:"Total Invest",profitLevel:"Profit Level",latestTime:"Latest Share Time",totalReturn:"Total Return",totalReturnDay:"Total return on the day (SERO)",recommend:"Recommend Number",ticket:"Available (ASNOW)",staticIncomeTips:"Your income have been paid to the withdrawal account.",staticIncomeTips2:"Trigger to withdrawal account. ",investDetail:"Invest Info",myIncome:"My performance",areaTotal:"Regional performance",areaOtherTotal:"Total performance (excluding the large region)",staticReward:"Static",recommendReward:"Recommend",nobilityReward:"Nobility",vipReward:"VIP",viewCode:"View Smart Contract"},button:{deposit:"Deposit SERO",buy:"Exchange ASNOW",invest:"Invest",buyTicket:"Deposit ASNOW",trigger:"Trigger Income",withdraw:"Withdraw",close:"Close",copy:"Copy"},modal:{deposit:{title:"Deposit",copy:"COPY"},buyAsnow:{title:"Exchange ASNOW",amount:"Amount (SERO)",amountPlace:"Input Amount",rate:"Exchange Rate",exchange:"Exchange",password:"Password",passwordPlace:"Input Password"},buyTicket:{title:"Deposit ASNOW",amount:"Amount (ASNOW)",amountPlace:"Input Number",password:"Password",passwordPlace:"Input Your Password",availableAsnow:"Available ASNOW",availableExchange:"Exchange"},invest:{title:"Invest",referId:"Refer ID",ticket:"Tickets",amount:"Invet Amount",amountTips:"At least invest 100 SERO",availableSERO:"Available Blance",availableAsnow:"Available ASNOW",availableExchange:"Max Exchange",total:"Total",estimate:"Estimated Return",password:"Password"},trigger:{password:"Password"},withdraw:{password:"Password",tips:"* This is the withdrawal of the amount to the UTXO account."}}},toast:{lessAmount:"The balance is not enough to pay for this transaction.",lessTicket:"There are not enough tickets, please depost the asnow first.",minInvest:"Invest Amount at least 100 SERO.",lessAsnow:"Insufficient ASNOW available in the wallet account, please exchange ASNOW first",tx:"The transaction was submitted successfully, waiting for the block to be packaged, and the transaction hash: ",copySuccess:"Copy to clipboard successfully! "}}},tt=a(279),et=a.n(tt),at=new function t(){Object(A.a)(this,t),this.address="25CHRYtgyxS1juHEv5ERh3PyD4X2PZZF529fgWDTLYbZ1K187MAQf4rVk2cBMLnhNL1APH6i1rSt6HGZZE3c3c2s",this.abi=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{name:"refereeCode",type:"string"}],name:"invest",outputs:[{name:"",type:"bool"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"detailsOfIncome",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"triggerStaticProfit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"setMarketAddr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"details",outputs:[{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint8"},{name:"",type:"bool"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdrawBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"registerNode",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"balanceOf",outputs:[{name:"amount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"conversionRate",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[],name:"calcuStaticProfit",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"id",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"flag",type:"bool"}],name:"setSell",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"balanceOfSero",outputs:[{name:"amount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"code",type:"string"}],name:"codeExist",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"paymentAsnow",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_triggerStaticNum",type:"uint256"}],name:"setTriggerStaticNum",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"balanceOfAsnow",outputs:[{name:"amount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"buyAsnow",outputs:[{name:"asnowAmount",type:"uint256"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_marketAddr",type:"address"},{name:"_codeServiceAddr",type:"address"},{name:"_otherAddr",type:"address"}],payable:!0,stateMutability:"payable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}]},nt=new $,ot=(F.a.Header,F.a.Content),it=F.a.Footer,st=at.address,ct=at.abi,lt=U.a.callContract(ct,st),rt=new q.a(10).pow(18),ut=C.a.Countdown;j.a.init({name:"ASNOW",contractAddress:"25CHRYtgyxS1juHEv5ERh3PyD4X2PZZF529fgWDTLYbZ1K187MAQf4rVk2cBMLnhNL1APH6i1rSt6HGZZE3c3c2s",github:"https://github.com/asnowhero/asnow-app",author:"asnow",url:"https://asnowhero.github.io/asnow-app/#/",logo:"https://asnowhero.github.io/asnow-app/logo.png"},(function(){}));var dt=function(t,e,a){k.a[t]({message:e,description:o.a.createElement("p",{style:{wordBreak:"normal",whiteSpace:"pre-wrap",wordWrap:"break-word"}},a),duration:null})},mt=x.a.create({name:"form_in_modal1"})(function(t){function e(){var t,a;Object(A.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(I.a)(this,(t=Object(R.a)(e)).call.apply(t,[this].concat(o)))).state={asnow:0,confirmLoading:!1},a.inputSero=function(t,e){var n=new q.a(t).dividedBy(e).toFixed(2);a.setState({asnow:n})},a}return Object(T.a)(e,t),Object(O.a)(e,[{key:"render",value:function(){var t=this,e=this.props,a=e.visible,n=e.rate,i=e.onCancel,s=e.onCreate,c=e.form.getFieldDecorator,l=this;return o.a.createElement(S.a,{visible:a,title:nt[l.props.lang].account.modal.buyAsnow.title,onOk:function(){t.setState({confirmLoading:!0}),setTimeout((function(){s((function(t){l.setState({confirmLoading:t})}))}),2)},onCancel:function(){i(),t.setState({confirmLoading:!1})},confirmLoading:this.state.confirmLoading},o.a.createElement(x.a,{layout:"vertical"},o.a.createElement(x.a.Item,{label:nt[l.props.lang].account.modal.buyAsnow.amount},c("Amount",{rules:[{required:!0,message:"Please Input Amount"}]})(o.a.createElement(E.a,{min:0,step:100,style:{width:"100%"},allowClear:!0,onChange:function(e){return t.inputSero(e,n)},placeholder:nt[l.props.lang].account.modal.buyAsnow.amountPlace,autoComplete:"off"}))),o.a.createElement("p",null,"Rate: ",o.a.createElement("span",{style:{color:"#1DA57A"}},"1 ASNOW = ",n," SERO")," , Exchange: ",o.a.createElement("strong",{style:{color:"rgb(216, 0, 38)"}},new q.a(this.state.asnow).toFixed(6))," ASNOW")))}}]),e}(o.a.Component)),pt=x.a.create({name:"form_in_modal2"})(function(t){function e(){var t,a;Object(A.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(I.a)(this,(t=Object(R.a)(e)).call.apply(t,[this].concat(o)))).state={confirmLoading:!1,estimateReturn:0,estimateLevel:0,ticket:0,amount:0,total:0,ticketSero:0,ticketAsnow:0},a}return Object(T.a)(e,t),Object(O.a)(e,[{key:"staticTotal",value:function(){var t=this;setTimeout((function(){var e=t.props.rate,a=t.props.times,n=new q.a(t.state.ticketSero),o=new q.a(t.state.amount),i=new q.a(t.state.amount).dividedBy(10).dividedBy(e),s=3;a>0?s=a:parseFloat(t.state.amount)>0&&parseFloat(t.state.amount)<1e3?s=3:parseFloat(t.state.amount)>=1e3&&parseFloat(t.state.amount)<5e3?s=4:parseFloat(t.state.amount)>=5e3&&(s=5),t.setState({ticket:n.toFixed(6),total:o.toFixed(6),ticketAsnow:i.toFixed(6),estimateLevel:s})}),10)}},{key:"render",value:function(){var t=this,e=this.props,a=e.visible,n=e.asnow,i=e.rate,s=e.sero,c=e.onCancel,l=e.onCreate,r=e.form,u=e.referId,d=r.getFieldDecorator,m=r.setFieldsValue;setTimeout((function(){u&&0!==u&&m({ReferId:u})}),100);var p=this;return o.a.createElement(S.a,{visible:a,title:nt[p.props.lang].account.modal.invest.title,onCancel:c,onOk:function(){t.setState({confirmLoading:!0}),setTimeout((function(){l((function(t){p.setState({confirmLoading:t})}))}),10)},confirmLoading:this.state.confirmLoading},o.a.createElement(x.a,{layout:"vertical"},o.a.createElement(x.a.Item,{label:nt[p.props.lang].account.modal.invest.referId},d("ReferId",{rules:[{required:!0,message:"Please Input Refer Id"}]})(o.a.createElement(b.a,{style:{width:"60%"},disabled:!(!u||0===u),placeholder:u||"",autoComplete:"off"}))),o.a.createElement(x.a.Item,{label:"".concat(nt[p.props.lang].account.modal.invest.amount," (Available Balance: ").concat(s," SERO)")},d("AmountSero",{rules:[{required:!0,message:"Please Input Amount! "}]})(o.a.createElement(E.a,{min:0,precision:6,max:parseFloat(s),step:100,style:{width:"60%"},onChange:function(t){var e=new q.a(t).dividedBy(10).toFixed(6);m({TicketSero:e}),p.setState({amount:t,ticketSero:e}),p.staticTotal()},allowClear:!0,placeholder:"0.000000",autoComplete:"off"})),o.a.createElement("br",null),"SERO (",nt[p.props.lang].account.modal.invest.amountTips,")"),o.a.createElement(x.a.Item,{label:"".concat(nt[p.props.lang].account.modal.invest.ticket," (Amount x 10%)")},d("TicketSero",{rules:[{required:!0,message:"Please input SERO value!"}]})(o.a.createElement(E.a,{precision:6,disabled:!0,min:0,max:parseFloat(s),step:100,style:{width:"40%"},onChange:function(t){p.setState({ticketSero:t}),p.staticTotal()},allowClear:!0,placeholder:"0.000000",autoComplete:"off"})),o.a.createElement("br",null)," SERO (1 ASNOW = ",i," SERO)",nt[p.props.lang].account.modal.invest.availableAsnow,": ",o.a.createElement("span",{style:{color:"#1DA57A"}},n||"0")),o.a.createElement("p",null,nt[p.props.lang].account.modal.invest.estimate,": ",o.a.createElement("span",{style:{color:"#1DA57A"}},p.state.amount)," (SERO) x ",o.a.createElement("span",{style:{color:"#1DA57A"}},p.state.estimateLevel," "),"(Times) = ",o.a.createElement("strong",{style:{color:"rgb(216, 0, 38)"}},new q.a(p.state.amount).multipliedBy(p.state.estimateLevel).toFixed(6)," "),"SERO"),o.a.createElement("p",null,nt[p.props.lang].account.modal.invest.total," : ",o.a.createElement("strong",{style:{color:"rgb(216, 0, 38)"}},this.state.total)," SERO, ",o.a.createElement("strong",{style:{color:"rgb(216, 0, 38)"}},this.state.ticketAsnow)," ASNOW")))}}]),e}(o.a.Component)),ht=x.a.create({name:"form_in_modal5"})(function(t){function e(){var t,a;Object(A.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(I.a)(this,(t=Object(R.a)(e)).call.apply(t,[this].concat(o)))).state={asnow:0,confirmLoading:!1},a}return Object(T.a)(e,t),Object(O.a)(e,[{key:"render",value:function(){var t=this,e=this.props,a=e.visible,n=e.asnow,i=e.onCancel,s=e.onCreate,c=e.form.getFieldDecorator,l=this;return o.a.createElement(S.a,{visible:a,title:nt[l.props.lang].account.modal.buyTicket.title,onCancel:i,onOk:function(){t.setState({confirmLoading:!0}),setTimeout((function(){s((function(t){l.setState({confirmLoading:t})}))}),10)},confirmLoading:this.state.confirmLoading},o.a.createElement(x.a,{layout:"vertical"},o.a.createElement(x.a.Item,{label:"".concat(nt[l.props.lang].account.modal.buyTicket.amount,"(").concat(nt[l.props.lang].account.modal.buyTicket.availableAsnow,":").concat(n,")")},c("Amount",{rules:[{required:!0,message:"Please Input Amount"}]})(o.a.createElement(E.a,{min:0,max:parseFloat(n),step:100,precision:5,style:{width:"100%"},allowClear:!0,placeholder:nt[l.props.lang].account.modal.buyTicket.amountPlace,autoComplete:"off"})))))}}]),e}(o.a.Component)),yt=function(t){function e(t){var a;return Object(A.a)(this,e),(a=Object(I.a)(this,Object(R.a)(e).call(this,t))).selectAccount=function(t){a.setState({currentAccount:t,showAccountSelect:!1,loading:!1}),localStorage.setItem("accountPk",t.PK),window.location.reload()},a.hiddenAccount=function(){a.setState({showAccountSelect:!1})},a.onChange=function(t){a.setState({loading:!t})},a.handleCancel=function(){a.setState({showDeposit:!1})},a.handleBuyAsnowCancel=function(){a.setState({showBuyAsnow:!1})},a.handleBuyAsnowCreate=function(t){var e=Object(v.a)(a),n=a.formRef.props.form;n.validateFields((function(o,i){if(o)t&&t(!1);else{var s=n.getFieldValue("Amount");try{a.executeMethod("buyAsnow",[],new q.a(s).multipliedBy(rt).toString(16),"SERO","",(function(a){a&&(n.resetFields(),e.setState({showBuyAsnow:!1}),setTimeout((function(){dt("success","Successful","".concat(nt[e.state.lang].toast.tx).concat(a))}),3e3)),t&&t(!1)}))}catch(o){o?w.a.error(o.message):w.a.error("request SERO Node error:["+o.message+"]"),t&&t(!1)}}}))},a.saveBuyAsnowFormRef=function(t){a.formRef=t},a.handleInvestCancel=function(){a.setState({showInvest:!1})},a.handleInvestCreate=function(t){var e=Object(v.a)(a),n=a.formRef2.props.form;n.validateFields((function(o,i){if(o)t&&t(!1);else{var s=n.getFieldValue("AmountSero"),c=n.getFieldValue("ReferId"),l=n.getFieldValue("Password"),r=new q.a(s).dividedBy(10).dividedBy(e.state.ct_rate).toFixed(6);if(e.state.ct_details.referId&&(c=e.state.ct_details.referId),new q.a(s).comparedTo(new q.a(a.state.balanceSero))>0)t&&t(!1),w.a.warn(nt[e.state.lang].toast.lessAmount);else if(new q.a(r).comparedTo(new q.a(a.state.ct_details.asnowBalances))>0)t&&t(!1),w.a.warn(nt[e.state.lang].toast.lessTicket);else if(parseFloat(s)<100)t&&t(!1),w.a.warn(nt[e.state.lang].toast.minInvest);else try{a.executeMethod("invest",[c],new q.a(s).multipliedBy(rt).toString(16),"SERO",l,(function(a){a&&(n.resetFields(),e.setState({showInvest:!1}),setTimeout((function(){dt("success","Successful","".concat(nt[e.state.lang].toast.tx).concat(a))}),3e3)),t&&t(!1)}))}catch(o){o?w.a.error(o.message):w.a.error("request SERO Node error:["+o.message+"]"),t&&t(!1)}}}))},a.calcuPrincipalProfit=function(t,e){if(t){var n="0x"+new q.a(t).multipliedBy(rt).toString(16);a.callMethod("calcuPrincipalProfit",[n],(function(t){e&&e(t)}))}},a.saveInvestFormRef=function(t){a.formRef2=t},a.handleBuyTicketCancel=function(){a.setState({showBuyTicket:!1})},a.handleBuyTicketCreate=function(t){var e=Object(v.a)(a),n=a.formRef5.props.form;n.validateFields((function(o,i){if(o)t&&t(!1);else{var s=n.getFieldValue("Amount");if(new q.a(s).comparedTo(new q.a(e.state.balanceAsnow))>0)t&&t(!1),w.a.warn(nt[e.state.lang].toast.lessAsnow);else try{a.executeMethod("paymentAsnow",[],new q.a(s).multipliedBy(rt).toString(16),"ASNOW","",(function(a){a&&(n.resetFields(),e.setState({showBuyTicket:!1}),setTimeout((function(){dt("success","Successful","".concat(nt[e.state.lang].toast.tx).concat(a))}),3e3)),t&&t(!1)}))}catch(o){o?w.a.error(o.message):w.a.error("request SERO Node error:["+o.message+"]"),t&&t(!1)}}}))},a.saveBuyTicketFormRef=function(t){a.formRef5=t},a.state={loading:!0,showAccountSelect:!1,showDeposit:!1,showBuyAsnow:!1,showBuyTicket:!1,showInvest:!1,showShareProfit:!1,showWithdraw:!1,modal1Visible:!1,currentAccount:{},balanceSero:0,balanceAsnow:0,ct_balance_asnow:0,ct_rate:0,ct_id:0,ct_details:{},lang:"zh_CN"},a}return Object(T.a)(e,t),Object(O.a)(e,[{key:"componentWillMount",value:function(){var t=localStorage.getItem("lang");t||(t="zh_CN",localStorage.setItem("lang","zh_CN")),this.setState({lang:t})}},{key:"componentDidMount",value:function(){var t=this;t.showSelectAccount(),this.state.showAccountSelect||setTimeout((function(){t.getDetail(),t.getRate(),t.getContractSeroBalance()}),310),setInterval((function(){t.getDetail(),t.getRate(),t.getContractSeroBalance(),t.state.currentAccount.PK&&t.getAccount(t.state.currentAccount.PK)}),6e4)}},{key:"showSelectAccount",value:function(){if(!this.state.currentAccount.PK){var t=localStorage.getItem("accountPk");t?(this.getAccount(t),this.setState({loading:!1})):this.setState({showAccountSelect:!0})}}},{key:"showDeposit",value:function(){this.setState({showDeposit:!0});var t=document.getElementById("qrImg");X.a.toCanvas(t,this.state.currentAccount.mainPKr,(function(t){t&&console.error(t),console.log("success!")}))}},{key:"getContractSeroBalance",value:function(){var t=this;t.callMethod("balanceOfSero",[],(function(e){e&&t.setState({ct_balanceOfSero:new q.a(e,10).dividedBy(rt).toFixed(6)})}))}},{key:"getAccount",value:function(t){var e=this;j.a.accountDetail(t,(function(a){var n=0,o=0;a.Balance.forEach((function(t,e){"SERO"===e?n=new q.a(t).dividedBy(rt).toFixed(6):"ASNOW"===e&&(o=new q.a(t).dividedBy(rt).toFixed(6))}));var i=new et.a(t,200).toString();a.avatar="data:image/png;base64,"+i,e.setState({currentAccount:a,balanceSero:n,balanceAsnow:o})}))}},{key:"getDetail",value:function(){var t=this;t.callMethod("details",[],(function(e){var a={referId:"",largeAreaId:"",largeAreaTotal:new q.a("0").dividedBy(rt).toFixed(6),amount:new q.a("0").dividedBy(rt).toFixed(6),returnAmount:new q.a("0").dividedBy(rt).toFixed(6),achievement:new q.a("0").dividedBy(rt).toFixed(6),recommendNum:parseInt(new q.a("0").toString(10)),profitLevel:parseInt(new q.a("0").toString(10)),value:new q.a("0").dividedBy(rt).toFixed(6),star:parseInt(new q.a("0").toString(10)),isKing:!1};if("0x0"!==e){var n=e;a={referId:"JFVVW2ITNSJHF"==n[0]?"":n[0],largeAreaId:"JFVVW2ITNSJHF"==n[1]?"":n[1],largeAreaTotal:new q.a(n[2]).dividedBy(rt).toFixed(6),amount:new q.a(n[3]).dividedBy(rt).toFixed(6),returnAmount:new q.a(n[4]).dividedBy(rt).toFixed(6),achievement:new q.a(n[5]).dividedBy(rt).toFixed(6),recommendNum:parseInt(new q.a(n[6]).toString(10)),profitLevel:parseInt(new q.a(n[7]).toString(10)),value:new q.a(n[8]).dividedBy(rt).toFixed(6),star:parseInt(new q.a(n[9]).toString(10)),isKing:n[10]}}t.callMethod("balanceOfAsnow",[],(function(e){a.asnowBalances=new q.a(e).dividedBy(rt).toFixed(6),t.callMethod("id",[],(function(e){a.id="JFVVW2ITNSJHF"==e?"":e,t.callMethod("detailsOfIncome",[],(function(e){a.detailsOfIncome=e,t.callMethod("calcuStaticProfit",[],(function(e){"0x"===e&&(e="0"),a.dayProfit=new q.a(e).dividedBy(rt).toFixed(6),t.setState({ct_details:a})}))}))}))}))}))}},{key:"getRate",value:function(){var t=this;t.callMethod("conversionRate",[],(function(e){if(e&&e.length>0){var a=new q.a(e[0]),n=new q.a(e[1]),o=a.dividedBy(n).toFixed(2);t.setState({ct_rate:o})}}))}},{key:"callMethod",value:function(t,e,a){var n=lt.packData(t,e),o={from:this.state.currentAccount.mainPKr,to:st,data:n};j.a.call(o,(function(e){var n=lt.unPackData(t,e);a(n)}))}},{key:"executeMethod",value:function(t,e,a,n,o,i){var s=lt.packData(t,e),c={from:this.state.currentAccount.PK,to:st,value:"0x"+a,data:s,gas_price:"0x"+new q.a("1000000000").toString(16),cy:n},l={from:this.state.currentAccount.mainPKr,to:st,value:"0x"+a,data:s,gas_price:"0x"+new q.a("1000000000").toString(16),cy:n};j.a.estimateGas(l,(function(t){c.gas=t,j.a.executeContract(c,(function(t){i(t)}))}))}},{key:"shareProfit",value:function(){var t=this;try{this.executeMethod("triggerStaticProfit",[],"0","SERO","",(function(e){e?dt("success","Successful","".concat(nt[t.state.lang].toast.tx).concat(e)):e.error?w.a.error(e.error.message):w.a.error("request SERO Node error:["+e+"]")}))}catch(e){e?w.a.error(e.message):w.a.error("request SERO Node error:["+e.message+"]")}}},{key:"withdraw",value:function(){var t=this;try{this.executeMethod("withdrawBalance",[],"0","SERO","",(function(e){e?dt("success","Successful","".concat(nt[t.state.lang].toast.tx).concat(e)):e.error?w.a.error(e.error.message):w.a.error("request SERO Node error:["+e+"]")}))}catch(e){e?w.a.error(e.message):w.a.error("request SERO Node error:["+e.message+"]")}}},{key:"render",value:function(){var t=this,e=this.state,a=e.loading,n=e.showAccountSelect,i=e.currentAccount,s=i.PK,c=this.state.ct_details.detailsOfIncome?new q.a(this.state.ct_details.detailsOfIncome[0]).dividedBy(rt).toFixed(2):0,v=this.state.ct_details.detailsOfIncome?new q.a(this.state.ct_details.detailsOfIncome[1]).dividedBy(rt).toFixed(2):0,b=this.state.ct_details.detailsOfIncome?new q.a(this.state.ct_details.detailsOfIncome[2]).dividedBy(rt).toFixed(2):0,E=this.state.ct_details.detailsOfIncome?new q.a(this.state.ct_details.detailsOfIncome[3]).dividedBy(rt).toFixed(2):0,A=this.state.ct_details.detailsOfIncome?this.state.ct_details.detailsOfIncome[5]:0,O=[{x:nt[this.state.lang].account.title.staticReward,y:parseFloat(c)},{x:nt[this.state.lang].account.title.recommendReward,y:parseFloat(v)},{x:nt[this.state.lang].account.title.nobilityReward,y:parseFloat(b)},{x:nt[this.state.lang].account.title.vipReward,y:parseFloat(E)}],I=parseFloat(c)>0||parseFloat(v)>0||parseFloat(b)>0||parseFloat(E)>0,R=function(){var t=new Date;t.setTime(t.getTime()+864e5);var e=t.getUTCFullYear(),a=t.getUTCMonth(),n=t.getUTCDate();t=new Date(e,a,n,0,0,0);var o=(new Date).getTimezoneOffset()/60;return t.getTime()+60*-o*60*1e3}(),T=this.state.ct_balanceOfSero?new q.a(this.state.ct_balanceOfSero).dividedBy(30).toFixed(6):"0",x=0;if(this.state.ct_details.returnAmount&&parseFloat(this.state.ct_details.returnAmount)>0){var k=parseFloat(this.state.ct_details.returnAmount),F=new q.a(this.state.ct_details.amount).multipliedBy(this.state.ct_details.profitLevel).toString(10);x=(100*k/parseFloat(F)).toFixed(2)}var B=new Date(1e3*A).getUTCDate()===parseInt((new Date).getUTCDate());return o.a.createElement("div",{className:"App"},o.a.createElement(ot,{style:{padding:"0 8px"}},o.a.createElement("div",{style:{background:"#fff",padding:5,minHeight:document.body.clientHeight}},o.a.createElement(m.a,{itemLayout:"vertical",size:"large",rowKey:"1"},o.a.createElement(m.a.Item,null,o.a.createElement(r.a,{loading:a,avatar:!0},o.a.createElement(f.a,{title:o.a.createElement("h1",null,nt[this.state.lang].account.title.utxo," ",o.a.createElement(g.a,{size:"small",onClick:function(){t.setState({showAccountSelect:!0})}},nt[this.state.lang].account.title.swith))}),o.a.createElement(u.a,null,o.a.createElement(d.a,{span:24},o.a.createElement(m.a.Item.Meta,{avatar:o.a.createElement("p",null,o.a.createElement(y.a,{shape:"square",size:64,src:i.avatar})),title:o.a.createElement("a",{href:"http://129.211.98.114:3006/web/v0_1_7/account-detail.html?pk=".concat(i.PK)},o.a.createElement("small",null,s?s.slice(0,10)+"..."+s.slice(-10):"",this.state.ct_details.isKing?o.a.createElement(h.a,{color:"gold"},"VIP"):"")),description:o.a.createElement(p.a,{count:4,value:this.state.ct_details.star?this.state.ct_details.star:0,disabled:!0})}))),o.a.createElement(u.a,{style:{textAlign:"center"}},o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.balanceSero,value:this.state.balanceSero,precision:6}),o.a.createElement(g.a,{style:{marginTop:16},type:"primary",onClick:function(){t.showDeposit()}},nt[this.state.lang].account.button.deposit)),o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.balanceAsnow,value:this.state.balanceAsnow,precision:6}),o.a.createElement(g.a,{style:{marginTop:16},type:"primary",onClick:function(){t.setState({showBuyAsnow:!0})}},nt[this.state.lang].account.button.buy))))),o.a.createElement(m.a.Item,null,o.a.createElement(r.a,{loading:a},o.a.createElement(f.a,{title:o.a.createElement("h1",null,nt[this.state.lang].account.title.contract)}),I?o.a.createElement(u.a,{style:{textAlign:"center"}},o.a.createElement(d.a,{span:12,style:{textAlign:"center"}},o.a.createElement("div",null,x>0?o.a.createElement(_.WaterWave,{height:234,title:nt[this.state.lang].account.title.totalReturn,percent:x}):o.a.createElement(_.WaterWave,{height:234,title:nt[this.state.lang].account.title.totalReturn,percent:0}))),o.a.createElement(d.a,{span:12,style:{textAlign:"left"}},o.a.createElement(_.Pie,{hasLegend:!0,animate:!0,title:nt[this.state.lang].account.title.totalReturn,subTitle:nt[this.state.lang].account.title.totalReturn,total:function(){return o.a.createElement("span",{dangerouslySetInnerHTML:{__html:O.reduce((function(t,e){return e.y+t}),0)}})},data:O,valueFormat:function(t){return o.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}})},height:248}))):"",o.a.createElement(u.a,{style:{textAlign:"center"}},o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.estimatedTotal,value:new q.a(this.state.ct_details.amount?this.state.ct_details.amount:0).multipliedBy(this.state.ct_details.profitLevel?this.state.ct_details.profitLevel:0).toFixed(6),precision:6}),o.a.createElement(g.a,{style:{marginTop:16},type:"primary",onClick:function(){t.setState({showInvest:!0})}},nt[this.state.lang].account.button.invest)),o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.ticket,value:new q.a(this.state.ct_details.asnowBalances?this.state.ct_details.asnowBalances:0).toFixed(6),precision:6}),o.a.createElement(g.a,{style:{marginTop:16},type:"primary",onClick:function(){t.setState({showBuyTicket:!0})}},nt[this.state.lang].account.button.buyTicket))),o.a.createElement(u.a,{style:{textAlign:"center"}},o.a.createElement("p",null),o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.staticIncome,value:this.state.ct_details.dayProfit,precision:6}),B?o.a.createElement(ut,{style:{marginTop:14},title:"",format:"HH:mm:ss",value:parseFloat(R),onFinish:function(){t.getDetail()}}):o.a.createElement(g.a,{style:{marginTop:16},type:"primary",disabled:B,onClick:function(){t.shareProfit()}},nt[this.state.lang].account.button.trigger)),o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.withdraw,value:new q.a(this.state.ct_details.value?this.state.ct_details.value:0).toFixed(6),precision:6}),o.a.createElement(g.a,{style:{marginTop:16},type:"primary",onClick:function(){t.withdraw()}},nt[this.state.lang].account.button.withdraw))),o.a.createElement(l.a,{dashed:!0}),o.a.createElement(u.a,{style:{textAlign:"center"}},o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.totalReturnDay,value:T,precision:6})),o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.dayIncome,value:this.state.ct_details.dayProfit?new q.a(this.state.ct_details.dayProfit).multipliedBy(100).dividedBy(T).toFixed(2):"0",suffix:"%"}))),o.a.createElement(u.a,{style:{textAlign:"center"}},o.a.createElement("p",null),o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.areaTotal,value:this.state.ct_details.largeAreaTotal,precision:6})),o.a.createElement(d.a,{span:12},o.a.createElement(C.a,{title:nt[this.state.lang].account.title.areaOtherTotal,value:new q.a(this.state.ct_details.achievement).minus(new q.a(this.state.ct_details.largeAreaTotal)).toFixed(6),precision:6}))))),o.a.createElement(m.a.Item,null,o.a.createElement(r.a,{loading:a},o.a.createElement(f.a,{title:o.a.createElement("h1",null,nt[this.state.lang].project.title)},o.a.createElement(f.a.Item,{label:nt[this.state.lang].project.contractAddress},o.a.createElement("small",null,st))),o.a.createElement(u.a,null,o.a.createElement(d.a,{span:8},o.a.createElement(C.a,{title:nt[this.state.lang].project.rate,value:this.state.ct_rate,precision:2,valueStyle:{color:"#3f8600"}}))),o.a.createElement(l.a,{dashed:!0}),o.a.createElement(f.a,{title:nt[this.state.lang].account.title.investDetail},o.a.createElement(f.a.Item,{label:nt[this.state.lang].account.title.id},this.state.ct_details.id),o.a.createElement(f.a.Item,{label:nt[this.state.lang].account.title.referId},this.state.ct_details.referId),o.a.createElement(f.a.Item,{label:nt[this.state.lang].account.title.areaId},this.state.ct_details.largeAreaId),o.a.createElement(f.a.Item,{label:nt[this.state.lang].account.title.totalInvest},this.state.ct_details.amount),o.a.createElement(f.a.Item,{label:nt[this.state.lang].account.title.profitLevel},this.state.ct_details.profitLevel),o.a.createElement(f.a.Item,{label:nt[this.state.lang].account.title.latestTime},function(t){if(t&&t>0){var e=new Date(1e3*t);return ft(e.getMonth()+1)+"/"+ft(e.getDate())+" "+ft(e.getHours())+":"+ft(e.getMinutes())}return""}(A)))))))),o.a.createElement(H,{visible:n,selectAccount:this.selectAccount,hiddenAccount:this.hiddenAccount}),o.a.createElement(S.a,{title:nt[this.state.lang].account.modal.deposit.title,visible:this.state.showDeposit,onCancel:this.handleCancel,footer:null,getContainer:!1},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("canvas",{id:"qrImg"}),o.a.createElement("p",{style:{wordBreak:"normal",whiteSpace:"pre-wrap",wordWrap:"break-word"}},o.a.createElement("small",null,this.state.currentAccount.mainPKr)),o.a.createElement(g.a,{className:"copyTxt",onClick:function(){J()(t.state.currentAccount.mainPKr),w.a.success("Copy to clipboard successfully")}},nt[this.state.lang].account.modal.deposit.copy))),o.a.createElement(mt,{wrappedComponentRef:this.saveBuyAsnowFormRef,visible:this.state.showBuyAsnow,onCancel:this.handleBuyAsnowCancel,onCreate:this.handleBuyAsnowCreate,rate:this.state.ct_rate,lang:this.state.lang}),o.a.createElement(pt,{wrappedComponentRef:this.saveInvestFormRef,visible:this.state.showInvest,onCancel:this.handleInvestCancel,onCreate:this.handleInvestCreate,sero:this.state.balanceSero,asnow:this.state.ct_details.asnowBalances,calcuPrincipalProfit:this.calcuPrincipalProfit,rate:this.state.ct_rate,lang:this.state.lang,times:this.state.ct_details.profitLevel,referId:this.state.ct_details.referId}),o.a.createElement(ht,{wrappedComponentRef:this.saveBuyTicketFormRef,visible:this.state.showBuyTicket,onCancel:this.handleBuyTicketCancel,onCreate:this.handleBuyTicketCreate,asnow:this.state.balanceAsnow,lang:this.state.lang}))}}]),e}(n.Component);function ft(t){return t=t<10?"0"+t:t}var gt=function(t){function e(){var t;return Object(A.a)(this,e),(t=Object(I.a)(this,Object(R.a)(e).call(this))).changeLocale=function(e){var a=e.target.value;t.setState({locale:a}),"en"===a.locale?localStorage.setItem("lang","en_US"):"zh-cn"===a.locale&&localStorage.setItem("lang","zh_CN")},t.state={locale:Q.a},t}return Object(T.a)(e,t),Object(O.a)(e,[{key:"componentWillMount",value:function(){var t=localStorage.getItem("lang"),e=Q.a;t?"zh_CN"===t?e=Q.a:"en_US"===t&&(e=G.a):(e=Q.a,localStorage.setItem("lang","zh_CN")),this.setState({locale:e})}},{key:"render",value:function(){var t=this.state.locale;return o.a.createElement("div",{className:"App"},o.a.createElement(F.a,{className:"layout"},o.a.createElement(c.a,{locale:t},o.a.createElement(yt,{key:t?t.locale:"en"})),o.a.createElement(it,{style:{textAlign:"center"}})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(gt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[292,1,2]]]);
//# sourceMappingURL=main.736d21b9.chunk.js.map