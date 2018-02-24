
var self = module.exports = {
    name: 'nextop',
    description: 'Time until next operation.',


    execute(message, args) {

        if (args && args.length > 0){
            if (args[0] == "--recache"){
                self.recacheData();
                //message.author.send("Recached");
            }
        }

        var op = self.getNextOperation();
        var now = new Date();

    },

    ops: [],
    lastCacheDate: 0,
    cacheInterval: 24 * 60 * 60 * 1000, //24 hours,

    recacheData(){

        self.lastCacheDate = Date.now();
    },

    /**
     * Returns the next Operation from the cached data
     * @return Object
     * {
     *   day: 0,    //Day of the week
     *   hour: 0,   //Hour of the day
     *   minute: 0  //Minutes of the hour
     * }
     */
    getNextOperation(){
        var now = Date.now();

        if (now - self.lastCacheDate > self.cacheInterval){
            self.recacheData();
        }
    }
};