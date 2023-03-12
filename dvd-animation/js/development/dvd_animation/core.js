// Compiled by ClojureScript 1.10.520 {}
goog.provide('dvd_animation.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
dvd_animation.core.setup = (function dvd_animation$core$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_int.call(null,(256)),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"vx","vx",-1685168462),(quil.core.width.call(null) / (125)),new cljs.core.Keyword(null,"vy","vy",-2018509997),((quil.core.height.call(null) * (3)) / (500))], null);
});
dvd_animation.core.update_state = (function dvd_animation$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),((((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state)) >= (quil.core.width.call(null) * 0.8))) || (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state)) <= (0))) || (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state)) >= (quil.core.height.call(null) * 0.8))) || (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state)) <= (0)))))?cljs.core.rand_int.call(null,(256)):new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"vx","vx",-1685168462),((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state)) >= (quil.core.width.call(null) * 0.8)))?((-1) * new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state)):((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state)) <= (0)))?((-1) * new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state)):new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state)
)),new cljs.core.Keyword(null,"vy","vy",-2018509997),((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state)) >= (quil.core.height.call(null) * 0.8)))?((-1) * new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state)):((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state)) <= (0)))?((-1) * new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state)):new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state)
))], null);
});
dvd_animation.core.draw_state = (function dvd_animation$core$draw_state(state){
quil.core.background.call(null,(0));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

return quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state),(quil.core.width.call(null) * 0.2),(quil.core.height.call(null) * 0.2));
});
dvd_animation.core.run_sketch = (function dvd_animation$core$run_sketch(){
dvd_animation.core.dvd_animation = (function dvd_animation$core$run_sketch_$_dvd_animation(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"dvd-animation",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,dvd_animation.core.update_state))?(function() { 
var G__2607__delegate = function (args){
return cljs.core.apply.call(null,dvd_animation.core.update_state,args);
};
var G__2607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2608__i = 0, G__2608__a = new Array(arguments.length -  0);
while (G__2608__i < G__2608__a.length) {G__2608__a[G__2608__i] = arguments[G__2608__i + 0]; ++G__2608__i;}
  args = new cljs.core.IndexedSeq(G__2608__a,0,null);
} 
return G__2607__delegate.call(this,args);};
G__2607.cljs$lang$maxFixedArity = 0;
G__2607.cljs$lang$applyTo = (function (arglist__2609){
var args = cljs.core.seq(arglist__2609);
return G__2607__delegate(args);
});
G__2607.cljs$core$IFn$_invoke$arity$variadic = G__2607__delegate;
return G__2607;
})()
:dvd_animation.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,dvd_animation.core.setup))?(function() { 
var G__2610__delegate = function (args){
return cljs.core.apply.call(null,dvd_animation.core.setup,args);
};
var G__2610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2611__i = 0, G__2611__a = new Array(arguments.length -  0);
while (G__2611__i < G__2611__a.length) {G__2611__a[G__2611__i] = arguments[G__2611__i + 0]; ++G__2611__i;}
  args = new cljs.core.IndexedSeq(G__2611__a,0,null);
} 
return G__2610__delegate.call(this,args);};
G__2610.cljs$lang$maxFixedArity = 0;
G__2610.cljs$lang$applyTo = (function (arglist__2612){
var args = cljs.core.seq(arglist__2612);
return G__2610__delegate(args);
});
G__2610.cljs$core$IFn$_invoke$arity$variadic = G__2610__delegate;
return G__2610;
})()
:dvd_animation.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,dvd_animation.core.draw_state))?(function() { 
var G__2613__delegate = function (args){
return cljs.core.apply.call(null,dvd_animation.core.draw_state,args);
};
var G__2613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2614__i = 0, G__2614__a = new Array(arguments.length -  0);
while (G__2614__i < G__2614__a.length) {G__2614__a[G__2614__i] = arguments[G__2614__i + 0]; ++G__2614__i;}
  args = new cljs.core.IndexedSeq(G__2614__a,0,null);
} 
return G__2613__delegate.call(this,args);};
G__2613.cljs$lang$maxFixedArity = 0;
G__2613.cljs$lang$applyTo = (function (arglist__2615){
var args = cljs.core.seq(arglist__2615);
return G__2613__delegate(args);
});
G__2613.cljs$core$IFn$_invoke$arity$variadic = G__2613__delegate;
return G__2613;
})()
:dvd_animation.core.draw_state));
});
goog.exportSymbol('dvd_animation.core.dvd_animation', dvd_animation.core.dvd_animation);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1018__1019__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1018__1019__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),dvd_animation.core.dvd_animation,new cljs.core.Keyword(null,"host-id","host-id",742376279),"dvd-animation"], null));
}
});
goog.exportSymbol('dvd_animation.core.run_sketch', dvd_animation.core.run_sketch);

//# sourceMappingURL=core.js.map
