(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{13:function(t,e,a){t.exports={controls:"controls_controls__3z1Ms"}},14:function(t,e,a){t.exports={balance:"balance_balance__3BLga"}},18:function(t,e,a){t.exports=a(34)},34:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(3),o=a.n(c),l=a(15),s=a(9),i=a(10),u=a(16),m=a(11),b=a(17),p=a(12),E=a.n(p),h=a(2),y=(a(31),a(13)),d=a.n(y),f=function(t){var e=t.createTransaction;return r.a.createElement("section",{className:d.a.controls},r.a.createElement("form",{onSubmit:function(t){return t.preventDefault()}},r.a.createElement("input",{type:"number",name:"amount"}),r.a.createElement("button",{type:"button",name:"deposit",onClick:e},"Deposit"),r.a.createElement("button",{type:"button",name:"withdraw",onClick:e},"Withdraw")))},O=function(t,e){return t.reduce((function(t,a){return t+(a.type===e?a.amount:0)}),0)},T=a(14),g=a.n(T),w=function(t){var e=t.transactions,a=t.balance;return r.a.createElement("section",{className:g.a.balance},r.a.createElement("span",null,"\u2b06",O(e,"deposit"),"$"),r.a.createElement("span",null,"\u2b07",O(e,"withdraw"),"$"),r.a.createElement("span",null,"Balance: ",a,"$"))},v=a(7),S=a.n(v),N=function(t){var e=t.transactions;return e.length>0?r.a.createElement("table",{className:S.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,e.map((function(t){var e=t.id,a=t.type,n=t.amount,c=t.date;return r.a.createElement("tr",{key:e},r.a.createElement("td",null,a),r.a.createElement("td",null,n,"$"),r.a.createElement("td",null,c))})))):r.a.createElement("p",{className:S.a.noHistory},"No History Yet")},_=function(t,e,a){return t<=0?(h.b.warn("\u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 !",{position:h.b.POSITION.BOTTOM_LEFT}),!1):!(a<t&&"withdraw"===e)||(h.b.error("\u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 \u0441\u0447\u0435\u0442\u0443 !",{position:h.b.POSITION.BOTTOM_LEFT}),!1)},I=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={transactions:[],balance:0},a.createTransaction=function(t){var e=t.target,n=a.state.balance,r=Number(e.parentNode.querySelector("input").value);if(e.parentNode.reset(),_(r,e.name,n)){var c={id:E.a.generate(),type:e.name,amount:r,date:(new Date).toLocaleString()};a.setState((function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[c]),balance:"withdraw"===c.type?t.balance-r:t.balance+r}})),"withdraw"===c.type?h.b.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e ".concat(r,"$!"),{position:h.b.POSITION.BOTTOM_LEFT}):h.b.success("\u0414\u0435\u043f\u043e\u0437\u0438\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d!",{position:h.b.POSITION.BOTTOM_LEFT})}},a}return Object(b.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("transactions"),e=localStorage.getItem("balance");t&&this.setState({transactions:JSON.parse(t),balance:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(t){var e=this.state,a=e.transactions,n=e.balance;t.transactions!==a&&localStorage.setItem("transactions",JSON.stringify(a)),t.balance!==n&&localStorage.setItem("balance",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.transactions,a=t.balance;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{createTransaction:this.createTransaction}),r.a.createElement(w,{transactions:e,balance:a}),r.a.createElement(N,{transactions:e}),r.a.createElement(h.a,null))}}]),e}(n.Component),k=function(){return r.a.createElement(I,null)};o.a.render(r.a.createElement(k,null),document.getElementById("root"))},7:function(t,e,a){t.exports={noHistory:"transactionHistory_noHistory__1chWY",history:"transactionHistory_history__1n1LX"}}},[[18,1,2]]]);
//# sourceMappingURL=main.41fa6875.chunk.js.map