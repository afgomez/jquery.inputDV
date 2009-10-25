/**
 * jQuery.inputDV
 *
 * Copyright (c) 2009, Alejandro Fernández Gómez
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the <organization> nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY Alejandro Fernández Gómez ''AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL Alejandro Fernández Gómez BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

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