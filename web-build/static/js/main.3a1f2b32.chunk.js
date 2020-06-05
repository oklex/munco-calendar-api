(this["webpackJsonpmunco-calendar-web"]=this["webpackJsonpmunco-calendar-web"]||[]).push([[0],{43:function(e,t,a){e.exports=a(91)},48:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},86:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),i=a(39),s=a.n(i),o=a(5),c=a(10),m=a(12),u=a(11),p=(a(48),a(22)),d=a(3),f=a(18),v=a.n(f),h=(a(55),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"errorPage"},l.a.createElement(v.a,null,l.a.createElement("meta",{name:"robots",content:"noindex"})),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"thinking-emoji"},"\ud83e\udd14")),l.a.createElement("h1",null,"404"),l.a.createElement("p",null,"page not found  -  ",l.a.createElement(p.b,{to:"/",className:"btn-gold"},"Go back to home"))))}}]),a}(l.a.Component)),E=a(14),g=a.n(E),b=a(20),D=(a(59),a(9)),w=a.n(D);a(61);!function(e){e.WAITING="waiting",e.OPEN="open",e.CLOSED="closed"}(n||(n={}));var y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={currentDate:e.props.currentDate?e.props.currentDate:new Date,startMoment:w()(e.props.startDate).startOf("day"),endMoment:w()(e.props.endDate).endOf("day"),startDateText:w()(e.props.startDate).format("(dddd), MMM Do"),endDateText:w()(e.props.endDate).format("(dddd), MMM Do"),oneWeekFromNow:w()(new Date).add(7,"days"),timerBarClass:null,timerDisplayDate:null,timerDescription:null,timerDaysRemaining:null},e.componentDidMount=function(){var t=e.getDaysUntil(e.state.endMoment.toDate());if(e.setState({timerDaysRemaining:"[ "+t+" days remaining ]"}),e.state.endMoment.isBefore())e.setState({timerBarClass:n.CLOSED,timerDisplayDate:e.props.endDate,timerDescription:"closed on "+e.state.endDateText});else if(e.state.startMoment.isBefore())e.state.endMoment.isSame(w()(),"day")&&e.state.endMoment.isSame(w()(),"month")?e.setState({timerBarClass:n.OPEN,timerDisplayDate:e.props.endDate,timerDescription:"closing today! "+e.state.endDateText}):e.state.endMoment.isBefore(e.state.oneWeekFromNow)?e.setState({timerBarClass:n.OPEN,timerDisplayDate:e.props.endDate,timerDescription:"closing soon; on "+e.state.endDateText}):e.setState({timerBarClass:n.OPEN,timerDisplayDate:e.props.endDate,timerDescription:"started; closing on "+e.state.endDateText});else{if(!e.state.startMoment.isAfter())throw Error("dates comparisons failed");e.setState({timerBarClass:n.WAITING,timerDisplayDate:e.props.startDate,timerDescription:"opens on "+e.state.startDateText})}},e.renderDateDescription=function(){return l.a.createElement("p",{className:"weight-300 miniText"},e.state.timerDescription,l.a.createElement("br",null),e.state.timerDaysRemaining)},e.renderTimerBar=function(){if(e.state.timerBarClass&&e.state.timerDisplayDate){var t=e.state.timerDisplayDate,a=e.getDaysUntil(t);return a>21?l.a.createElement("div",{className:e.state.timerBarClass+"-full"}):l.a.createElement("div",{className:e.state.timerBarClass},e.renderSegments(a))}return l.a.createElement("div",null,"no data")},e.renderSegments=function(t){for(var a=[],n=0;n<t;n++)a.push(l.a.createElement("div",{key:n,className:"s-"+n+" segment segment-"+e.state.timerBarClass}));return a},e.getDaysUntil=function(t){var a=w()(t),n=w()(e.state.currentDate),r=a.diff(n)/864e5;return Math.ceil(r)},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"date-indicator"},this.renderTimerBar()),this.renderDateDescription())}}]),a}(l.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderTitle=function(){return l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,e.props.CardDetails.organization.short_name),l.a.createElement("p",{className:"blueText miniText"},e.props.CardDetails.organization.full_name))},e.showEvents=function(){return e.props.CardDetails.events?e.props.CardDetails.events.map(e.renderSingleEvent):l.a.createElement("div",null)},e.renderSingleEvent=function(t){var a=w.a.utc(t.start_date),n=a.format("(dddd), MMM Do"),r=a.format(", YYYY"),i=n+r;t.end_date&&(i=n+w.a.utc(t.end_date).format(" - (dddd), MMM Do")+r);return l.a.createElement("div",{className:"eventDetails"},l.a.createElement("p",{className:"blueText"},i),l.a.createElement("p",{className:"miniText"},t.venue_name,", ",t.venue_city),e.showEventTags(t))},e.showEventTags=function(e){if(e.tags.length>0)return e.tags.map((function(t,a){var n=e.tags[a];return l.a.createElement("span",{key:a,className:"tag"},l.a.createElement("p",null,n))}))},e.renderApplications=function(){if(e.props.CardDetails.applications)return e.props.CardDetails.applications.map(e.renderSingleApplication)},e.renderSingleApplication=function(e,t){var a="";return e.cost&&(a="$"+e.cost.toString()),l.a.createElement("div",{className:"AppDetails",key:t},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("h5",{className:"weight-400"},e.name," ",a),l.a.createElement("span",null,l.a.createElement("button",null,l.a.createElement("a",{className:"applyBtn",href:e.applicationLink,target:"_blank",rel:"noopener noreferrer"},"Apply")))),l.a.createElement(y,{key:t,startDate:e.start_date,endDate:e.end_date}))},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"CalendarCard"},this.renderTitle(),this.showEvents(),this.renderApplications())}}]),a}(l.a.Component),C=a(41),k=a.n(C).a.create({baseURL:"https://munco-calendar.herokuapp.com/"});var O,x={getAll:function(){return Object(b.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("/api/applications/all");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getUpcoming:function(){return Object(b.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("/api/applications/upcoming");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}};!function(e){e[e.name=0]="name",e[e.application=1]="application",e[e.event=2]="event"}(O||(O={}));var A,j=x,M=(a(78),a(42));!function(e){e.allApps="All Applications",e.staffApps="Staff Applications",e.secretariatApps="Secretariat Applications",e.delegateRegistration="Delegate Registration",e.volunteer="Volunteer Opportunities"}(A||(A={}));var T=[A.allApps,A.staffApps,A.secretariatApps,A.delegateRegistration,A.volunteer],B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={allCalendarEvents:[],selectedFilter:A.allApps,loading:!0},e.componentDidMount=Object(b.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.getAll();case 2:a=t.sent,e.setState({allCalendarEvents:a,loading:!1});case 4:case"end":return t.stop()}}),t)}))),e.renderArrow=function(e,t){return l.a.createElement("div",{className:t},e)},e.showAllCards=function(){return!0===e.state.loading?l.a.createElement("div",{className:"errorMessage"},l.a.createElement("h3",null,"Loading...")):0===e.state.allCalendarEvents.length?l.a.createElement("div",{className:"errorMessage"},l.a.createElement("h1",null,"oops \ud83d\ude28"),l.a.createElement("p",null,"we encountered some problem ",l.a.createElement("br",null),"check back later!")):e.state.allCalendarEvents.map((function(e,t){return!e.applications||e.applications&&0===e.applications.length?l.a.createElement("div",{key:t}):l.a.createElement(N,{key:t,CardDetails:e})}))},e.selectFilter=function(){return l.a.createElement("div",{className:"filterBar"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",null,l.a.createElement("h2",null,"Filter by: ")),l.a.createElement("div",{className:"flex-grow-1 selection"},l.a.createElement("p",{className:"selectionText"},"Applications"))),l.a.createElement("ul",null,e.showAllFilterOptions()))},e.filterOptions=function(){return l.a.createElement("div",{className:"filterBar"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",null,l.a.createElement("h2",null,"Filter by: ")),l.a.createElement("div",{className:"dropdown flex-grow-1 selection"},l.a.createElement("button",{className:"btn selectionBtn selectionText dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},e.state.selectedFilter),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},e.showAllFilterOptions()))))},e.showAllFilterOptions=function(){return T.map((function(t){return t!==e.state.selectedFilter?l.a.createElement("span",{className:"filterOption notAvailable dropdown-item","data-tip":"option not available yet",key:t.toString()},t):null}))},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"ConferenceCalendar"},l.a.createElement(M.a,null),l.a.createElement(v.a,null,l.a.createElement("title",null,"Conference Applications"),l.a.createElement("meta",{name:"description",content:"Calendar for Model UN conferences in BC and internationally. See all dates and site links and more."}),l.a.createElement("link",{rel:"canonical",href:"https://wwww.munco.ca/calendar"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 colapseOnMobile"},l.a.createElement("div",{className:"fixed-cover"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"Conference Calendar"),this.filterOptions(),l.a.createElement("div",{className:"menu-tools"},l.a.createElement("div",{className:"menu-tag"},"Do you manage a conference?",l.a.createElement("p",{className:"tooltiptext"},"Tell us what dates you're planning!")),l.a.createElement("div",{className:"menu-tag"},"Report a problem",l.a.createElement("p",{className:"tooltiptext"},"PM us on Facebook or Instagram!")))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"calendar-section"},this.showAllCards()))))}}]),a}(l.a.Component),S=(a(79),l.a.createContext(null)),F=a(23),_=a.n(F),I=(a(92),a(84),function e(){var t=this;Object(o.a)(this,e),this.auth=void 0,this.messaging=void 0,this.fcmToken=void 0,this.getFCMToken=function(){console.log("Firebase::getFCMToken()"),t.messaging.getToken().then((function(e){if(!(e.length>0))throw Error("bad token");console.log("currentToken: ",e),t.fcmToken=e})).catch((function(e){console.log("An error occurred while retrieving token. ",e)}))};var a={apiKey:"AIzaSyB1fCZW3o0zzeQouUGLx2JAQEWY2FGj63U",authDomain:"munco-calendar.firebaseapp.com",databaseURL:"https://munco-calendar.firebaseio.com",projectId:"munco-calendar",storageBucket:"munco-calendar.appspot.com",messagingSenderId:"686062822496",appId:"1:686062822496:web:b112e8f259c78b5cf30f05"};if(void 0===a.databaseURL)throw console.log("Firebase connection failed"),Error("Firebase configuration failed");try{_.a.initializeApp(a),this.auth=_.a.auth(),this.fcmToken=null,this.messaging=_.a.messaging();var n="BHbu5Ixvg1zawOp5j07xrPh8jzKgXjbz6qLkHIC_WhEQ8D0x2HiBjtFdYzVfQh_lZXx0zlN50jj2RbLw_ExaMQM";this.messaging.usePublicVapidKey(n),console.log("Firebase connected")}catch(r){throw console.log("Firebase connection failed: ",r),r}}),z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).subButton=function(t){e.context.getFCMToken()},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"subscribePage container"},l.a.createElement("h3",null,"Subscribe to web-notifications"),l.a.createElement("button",{onClick:this.subButton},"set-up web notifications"))}}]),a}(l.a.Component);z.contextType=S;var R=z,L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).show404=function(){return l.a.createElement(h,null)},e.showCalendar=function(){return l.a.createElement(B,null)},e.showSubscribe=function(){return l.a.createElement(R,null)},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),l.a.createElement("div",{className:"App"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:this.showCalendar}),l.a.createElement(d.a,{exact:!0,path:"/subscribe",component:this.showSubscribe}),l.a.createElement(d.a,{component:this.show404}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86),a(87);a(88).config(),s.a.render(l.a.createElement(S.Provider,{value:new I},l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.3a1f2b32.chunk.js.map