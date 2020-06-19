(this["webpackJsonpmunco-calendar-web"]=this["webpackJsonpmunco-calendar-web"]||[]).push([[0],{43:function(e,t,a){e.exports=a(91)},48:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},86:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(39),i=a.n(c),l=a(6),o=a(11),u=a(13),m=a(12),p=(a(48),a(22)),d=a(3),f=a(19),v=a.n(f),h=(a(55),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"errorPage"},s.a.createElement(v.a,null,s.a.createElement("meta",{name:"robots",content:"noindex"})),s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,s.a.createElement("span",{role:"img","aria-label":"thinking-emoji"},"\ud83e\udd14")),s.a.createElement("h1",null,"404"),s.a.createElement("p",null,"page not found  -  ",s.a.createElement(p.b,{to:"/",className:"btn-gold"},"Go back to home"))))}}]),a}(s.a.Component)),g=a(4),E=a.n(g),b=a(14),w=(a(59),a(10)),D=a.n(w);a(61);!function(e){e.WAITING="waiting",e.OPEN="open",e.CLOSED="closed"}(n||(n={}));var k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={currentDate:e.props.currentDate?e.props.currentDate:new Date,startMoment:D()(e.props.startDate).startOf("day"),endMoment:D()(e.props.endDate).endOf("day"),startDateText:D()(e.props.startDate).format("(dddd), MMM Do"),endDateText:D()(e.props.endDate).format("(dddd), MMM Do"),oneWeekFromNow:D()(new Date).add(7,"days"),timerBarClass:null,timerDisplayDate:null,timerDescription:null,timerDaysRemaining:null},e.componentDidMount=function(){var t=e.getDaysUntil(e.state.endMoment.toDate());if(e.setState({timerDaysRemaining:"[ "+t+" days remaining ]"}),e.state.endMoment.isBefore())e.setState({timerBarClass:n.CLOSED,timerDisplayDate:e.props.endDate,timerDescription:"closed on "+e.state.endDateText});else if(e.state.startMoment.isBefore())e.state.endMoment.isSame(D()(),"day")&&e.state.endMoment.isSame(D()(),"month")?e.setState({timerBarClass:n.OPEN,timerDisplayDate:e.props.endDate,timerDescription:"closing today! "+e.state.endDateText}):e.state.endMoment.isBefore(e.state.oneWeekFromNow)?e.setState({timerBarClass:n.OPEN,timerDisplayDate:e.props.endDate,timerDescription:"closing soon; on "+e.state.endDateText}):e.setState({timerBarClass:n.OPEN,timerDisplayDate:e.props.endDate,timerDescription:"started; closing on "+e.state.endDateText});else{if(!e.state.startMoment.isAfter())throw Error("dates comparisons failed");e.setState({timerBarClass:n.WAITING,timerDisplayDate:e.props.startDate,timerDescription:"opens on "+e.state.startDateText})}},e.renderDateDescription=function(){return s.a.createElement("p",{className:"weight-300 miniText"},e.state.timerDescription,s.a.createElement("br",null),e.state.timerDaysRemaining)},e.renderTimerBar=function(){if(e.state.timerBarClass&&e.state.timerDisplayDate){var t=e.state.timerDisplayDate,a=e.getDaysUntil(t);return a>21?s.a.createElement("div",{className:e.state.timerBarClass+"-full"}):s.a.createElement("div",{className:e.state.timerBarClass},e.renderSegments(a))}return s.a.createElement("div",null,"no data")},e.renderSegments=function(t){for(var a=[],n=0;n<t;n++)a.push(s.a.createElement("div",{key:n,className:"s-"+n+" segment segment-"+e.state.timerBarClass}));return a},e.getDaysUntil=function(t){var a=D()(t),n=D()(e.state.currentDate),r=a.diff(n)/864e5;return Math.ceil(r)},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"date-indicator"},this.renderTimerBar()),this.renderDateDescription())}}]),a}(s.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderTitle=function(){return s.a.createElement("div",{className:"title"},s.a.createElement("h1",null,e.props.CardDetails.organization.short_name),s.a.createElement("p",{className:"blueText miniText"},e.props.CardDetails.organization.full_name))},e.showEvents=function(){return e.props.CardDetails.events?e.props.CardDetails.events.map(e.renderSingleEvent):s.a.createElement("div",null)},e.renderSingleEvent=function(t){var a=D.a.utc(t.start_date),n=a.format("(dddd), MMM Do"),r=a.format(", YYYY"),c=n+r;t.end_date&&(c=n+D.a.utc(t.end_date).format(" - (dddd), MMM Do")+r);return s.a.createElement("div",{className:"eventDetails"},s.a.createElement("p",{className:"blueText"},c),s.a.createElement("p",{className:"miniText"},t.venue_name,", ",t.venue_city),e.showEventTags(t))},e.showEventTags=function(e){if(e.tags.length>0)return e.tags.map((function(t,a){var n=e.tags[a];return s.a.createElement("span",{key:a,className:"tag"},s.a.createElement("p",null,n))}))},e.renderApplications=function(){if(e.props.CardDetails.applications)return e.props.CardDetails.applications.map(e.renderSingleApplication)},e.renderSingleApplication=function(e,t){var a="";return e.cost&&(a="$"+e.cost.toString()),s.a.createElement("div",{className:"AppDetails",key:t},s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement("h5",{className:"weight-400"},e.name," ",a),s.a.createElement("span",null,s.a.createElement("button",null,s.a.createElement("a",{className:"applyBtn",href:e.applicationLink,target:"_blank",rel:"noopener noreferrer"},"Apply")))),s.a.createElement(k,{key:t,startDate:e.start_date,endDate:e.end_date}))},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"CalendarCard"},this.renderTitle(),this.showEvents(),this.renderApplications())}}]),a}(s.a.Component),x=a(41),C=a.n(x).a.create({baseURL:"http://localhost:8081/"});var N,O={getAll:function(){return Object(b.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/api/applications/all");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getUpcoming:function(){return Object(b.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/api/applications/upcoming");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}};!function(e){e[e.name=0]="name",e[e.application=1]="application",e[e.event=2]="event"}(N||(N={}));var j,A=O,T=(a(78),a(42));!function(e){e.allApps="All Applications",e.staffApps="Staff Applications",e.secretariatApps="Secretariat Applications",e.delegateRegistration="Delegate Registration",e.volunteer="Volunteer Opportunities"}(j||(j={}));var M=[j.allApps,j.staffApps,j.secretariatApps,j.delegateRegistration,j.volunteer],B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={allCalendarEvents:[],selectedFilter:j.allApps,loading:!0},e.componentDidMount=Object(b.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getAll();case 2:a=t.sent,e.setState({allCalendarEvents:a,loading:!1});case 4:case"end":return t.stop()}}),t)}))),e.renderArrow=function(e,t){return s.a.createElement("div",{className:t},e)},e.showAllCards=function(){return!0===e.state.loading?s.a.createElement("div",{className:"errorMessage"},s.a.createElement("h3",null,"Loading...")):0===e.state.allCalendarEvents.length?s.a.createElement("div",{className:"errorMessage"},s.a.createElement("h1",null,"oops \ud83d\ude28"),s.a.createElement("p",null,"we encountered some problem ",s.a.createElement("br",null),"check back later!")):e.state.allCalendarEvents.map((function(e,t){return!e.applications||e.applications&&0===e.applications.length?s.a.createElement("div",{key:t}):s.a.createElement(y,{key:t,CardDetails:e})}))},e.selectFilter=function(){return s.a.createElement("div",{className:"filterBar"},s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",null,s.a.createElement("h2",null,"Filter by: ")),s.a.createElement("div",{className:"flex-grow-1 selection"},s.a.createElement("p",{className:"selectionText"},"Applications"))),s.a.createElement("ul",null,e.showAllFilterOptions()))},e.filterOptions=function(){return s.a.createElement("div",{className:"filterBar"},s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",null,s.a.createElement("h2",null,"Filter by: ")),s.a.createElement("div",{className:"dropdown flex-grow-1 selection"},s.a.createElement("button",{className:"btn selectionBtn selectionText dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},e.state.selectedFilter),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},e.showAllFilterOptions()))))},e.showAllFilterOptions=function(){return M.map((function(t){return t!==e.state.selectedFilter?s.a.createElement("span",{className:"filterOption notAvailable dropdown-item","data-tip":"option not available yet",key:t.toString()},t):null}))},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"ConferenceCalendar"},s.a.createElement(T.a,null),s.a.createElement(v.a,null,s.a.createElement("title",null,"Conference Applications"),s.a.createElement("meta",{name:"description",content:"Calendar for Model UN conferences in BC and internationally. See all dates and site links and more."}),s.a.createElement("link",{rel:"canonical",href:"https://wwww.munco.ca/calendar"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6 colapseOnMobile"},s.a.createElement("div",{className:"fixed-cover"},s.a.createElement("div",{className:"title"},s.a.createElement("h1",null,"Conference Calendar"),this.filterOptions(),s.a.createElement("div",{className:"menu-tools"},s.a.createElement("div",{className:"menu-tag"},"Do you manage a conference?",s.a.createElement("p",{className:"tooltiptext"},"Tell us what dates you're planning!")),s.a.createElement("div",{className:"menu-tag"},"Report a problem",s.a.createElement("p",{className:"tooltiptext"},"PM us on Facebook or Instagram!")))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"calendar-section"},this.showAllCards()))))}}]),a}(s.a.Component),F=(a(79),s.a.createContext(null)),S=a(23),z=a.n(S),I=(a(92),a(84),{check:function(e){return Object(b.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.post("/api/notifications/check",{fcmToken:e});case 2:return a=t.sent,n=a.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},register:function(e){return Object(b.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.post("/api/notifications/register",{fcmToken:e});case 2:return a=t.sent,n=a.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},unregister:function(e){return Object(b.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.patch("/api/notifications/unregister",{fcmToken:e});case 2:return a=t.sent,n=a.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()}}),_=function e(){var t=this;Object(l.a)(this,e),this.auth=void 0,this.messaging=void 0,this.fcmToken=void 0,this.getFCMToken=Object(b.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Firebase::getFCMToken()"),e.next=3,t.messaging.getToken().then(function(){var e=Object(b.a)(E.a.mark((function e(a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>0)){e.next=17;break}return console.log("currentToken recieved"),t.fcmToken=a,e.next=5,I.check(t.fcmToken);case 5:if(!(n=e.sent).settings){e.next=11;break}return console.log("token already registered ",n),e.abrupt("return",n);case 11:return console.log("registering token "),e.next=14,I.register(t.fcmToken);case 14:return e.abrupt("return",e.sent);case 15:e.next=18;break;case 17:throw Error("bad token");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("An error occurred while retrieving token. ",e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),this.deleteFCMTOken=function(){if(console.log("Firebase::deleteFCMTOken()"),t.fcmToken)try{I.unregister(t.fcmToken)}catch(e){console.log(e)}};var a={apiKey:"AIzaSyB1fCZW3o0zzeQouUGLx2JAQEWY2FGj63U",authDomain:"AIzaSyB1fCZW3o0zzeQouUGLx2JAQEWY2FGj63U",databaseURL:"https://munco-calendar.firebaseio.com",projectId:"munco-calendar",storageBucket:"munco-calendar.appspot.com",messagingSenderId:"686062822496",appId:"1:686062822496:web:b112e8f259c78b5cf30f05"};if(void 0===a.databaseURL)throw console.log("Firebase connection failed"),Error("Firebase configuration failed");try{z.a.initializeApp(a),this.auth=z.a.auth(),this.fcmToken=null,this.messaging=z.a.messaging();var n="BHbu5Ixvg1zawOp5j07xrPh8jzKgXjbz6qLkHIC_WhEQ8D0x2HiBjtFdYzVfQh_lZXx0zlN50jj2RbLw_ExaMQM";this.messaging.usePublicVapidKey(n),console.log("Firebase connected")}catch(r){throw console.log("Firebase connection failed: ",r),r}},U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).subButton=function(t){e.context.getFCMToken()},e.deleteFCMButton=function(t){e.context.deleteFCMTOken()},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"subscribePage container"},s.a.createElement("h3",null,"Subscribe to web-notifications"),s.a.createElement("button",{onClick:this.subButton},"set-up web notifications"),s.a.createElement("br",null),s.a.createElement("button",{onClick:this.deleteFCMButton},"cancel your web notifications"))}}]),a}(s.a.Component);U.contextType=F;var L=U,R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).show404=function(){return s.a.createElement(h,null)},e.showCalendar=function(){return s.a.createElement(B,null)},e.showSubscribe=function(){return s.a.createElement(L,null)},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(v.a,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),s.a.createElement("div",{className:"App"},s.a.createElement(d.c,null,s.a.createElement(d.a,{exact:!0,path:"/",component:this.showCalendar}),s.a.createElement(d.a,{exact:!0,path:"/subscribe",component:this.showSubscribe}),s.a.createElement(d.a,{component:this.show404}))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86),a(87);a(88).config(),i.a.render(s.a.createElement(F.Provider,{value:new _},s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.6c85228d.chunk.js.map