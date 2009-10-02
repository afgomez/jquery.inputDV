(function($) {
    /**
     * jQuery.inputDV. Sets a default value for an input box that dissapears when user focus on the field
     * @param {object} options Object with user defined options
     * @return {jQuery} 
     */
    
    $.fn.inputDV = function(options) {
        var opts = $.extend({}, $.fn.inputDV.defaults, options);
        return this.each(function() {
            var t = $(this);
            
            var val = opts.value || t.val();
            if (!val) { return; } // Input has no value and also we don't pass it as parameter, so do nothing
            
            t.val(val);
            t.addClass(opts.default_class);
            
            t.focus(function() {
                if (t.val() == val) {
                    t.removeClass(opts.default_class);
                    t.val('');
                }
            }).blur(function() {
                if(!t.val()) {
                    t.addClass(opts.default_class);
                    t.val(val);
                }
            });
        });
    };
    
    
    // Default options
    $.fn.inputDV.defaults = {
        default_class: 'default',
        value: false
    };
    
})(jQuery);