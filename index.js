module.exports = function(PluginName, cb){
    if(server.getPluginManager().getPlugin(PluginName).isEnabled()){
        cb();
        return;
    } else {
        var list = event.addListener("PluginEnableEvent", (eventResponse) => {
            if(eventResponse.getPlugin().getName() == PluginName){
                cb();
                event.removeListener("PluginEnableEvent", list);
                return;
            }
        });
    }
}
