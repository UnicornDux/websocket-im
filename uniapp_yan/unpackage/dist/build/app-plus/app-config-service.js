
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/major_watch/major_watch","pages/like/like","pages/match/match","pages/me/me","pages/province_search/province_search","pages/course/course","pages/admissions_line/admissions_line","pages/question/question","pages/answer/answer","pages/major_watch_son/major_watch_son","pages/question_submit/question_submit","pages/major_related_question/major_related_question"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"研战到底","navigationBarBackgroundColor":"#9932CC","backgroundColor":"#9932CC"},"tabBar":{"selectedColor":"#F57A82","backgroundColor":"#FFE1FF","borderStyle":"white","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"/static/images/tab/first.png","selectedIconPath":"/static/images/tab/first.png"},{"pagePath":"pages/like/like","text":"圈层","iconPath":"/static/images/tab/level.png","selectedIconPath":"/static/images/tab/level.png"},{"pagePath":"pages/admissions_line/admissions_line","text":"智能匹配","iconPath":"/static/images/tab/search.png","selectedIconPath":"/static/images/tab/search.png"},{"pagePath":"pages/me/me","text":"我的","iconPath":"/static/images/tab/me.png","selectedIconPath":"/static/images/tab/me.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"yanzhandaodi","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"研战到底","backgroundColor":"#9932CC"}},{"path":"/pages/major_watch/major_watch","meta":{},"window":{"navigationBarTitleText":"专业","enablePullDownRefresh":false,"backgroundColor":"#9932CC"}},{"path":"/pages/like/like","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"圈层","enablePullDownRefresh":false,"backgroundColor":"#9932CC"}},{"path":"/pages/match/match","meta":{},"window":{"navigationBarTitleText":"智能匹配","enablePullDownRefresh":false,"backgroundColor":"#9932CC"}},{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false,"backgroundColor":"#9932CC"}},{"path":"/pages/province_search/province_search","meta":{},"window":{"navigationBarTitleText":"智能推荐","enablePullDownRefresh":false}},{"path":"/pages/course/course","meta":{},"window":{"navigationBarTitleText":"课程","enablePullDownRefresh":false}},{"path":"/pages/admissions_line/admissions_line","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"智能匹配","enablePullDownRefresh":false}},{"path":"/pages/question/question","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/answer/answer","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/major_watch_son/major_watch_son","meta":{},"window":{"navigationBarTitleText":"专业","enablePullDownRefresh":false}},{"path":"/pages/question_submit/question_submit","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/major_related_question/major_related_question","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
