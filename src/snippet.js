const snippet = (
  {
    fsOrgId,
    fsNamespace = 'FS',
    fsDebug = false,
    fsHost = 'fullstory.com'
  }
) => {
  /* begin FullStory snippet */
  /* eslint-disable */
  window._fs_debug = fsDebug;
  window._fs_host = fsHost;
  window._fs_org = fsOrgId;
  window._fs_namespace = fsNamespace;
  (function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+m._fs_host+'/s/fs.js';
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b) { g("log", [a,b]) };
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
  })(window,document,window['_fs_namespace'],'script','user');
  /* eslint-enable */
  /* end FullStory snippet */
};

export default snippet;
