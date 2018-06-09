(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define(factory);
    else if(typeof exports === 'object')
        exports["M"] = factory();
    else
        root["M"] = factory();
})(this, function() {

    /**
     * type Maybe = Just a | Nothing
     */

    const M = {

        /**
         * Construct a Maybe
         */
        maybe: value => {
            return (value == null) ? M.nothing() : M.just(value)
        },

        isJust: maybe => M.value(maybe) != null,

        isNothing: maybe => !M.isJust(maybe),

        /**
         * Get value from Maybe
         */
        value: maybe => maybe.just_value,

        /**
         * Construct a Just
         */
        just: just_value => {return {just_value}},

        /**
         * Construct a Nothing
         */
        nothing: () => {return {}},

        /**
         * Lift a traditional function
         */
        map: (f,maybe) => {
            return M.isJust(maybe) ? M.just(f(M.value(maybe))) : M.nothing()
        },

        /**
         * Return value of Just or default_value of Nothing
         */
        or: (maybe,default_value) => {
            return M.isJust(maybe) ? M.value(maybe) : default_value
        }
    }
    return M
})