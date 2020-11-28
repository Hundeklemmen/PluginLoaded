module.exports = function(PluginName, cb){
    if(server.getPluginManager().getPlugin(PluginName).isEnabled()) return cb();
    
    var list = event.addListener("PluginEnableEvent", (eventResponse) => {
        if(eventResponse.getPlugin().getName() == PluginName){
            cb();
            event.removeListener("PluginEnableEvent", list);
            return;
        }
   })
}
