define(['widgets/brease/Button/Button'], function (SuperClass) {
    
    'use strict';

    /**
     * @class widgets.brXtended.Button
     * #Description
     * Extend from widgets.brease.Button 
     * Adding hover styling properties
     * @breaseNote 
     * @extends widgets.brease.Button
     * @aside example buttons
    **/

    var defaultSettings = {
            enableHoverStylingExt: false,
        },

        WidgetClass = SuperClass.extend(function Button() {
            SuperClass.apply(this, arguments);
        }, defaultSettings),

        p = WidgetClass.prototype;



    p.init = function () {
        if (this.settings.omitClass !== true) {
            this.addInitialClass('brXtendedButton');
            this.settings.omitClass = true;
        }
        SuperClass.prototype.init.call(this);
        this.checkHoverEnabledExtClass(this.settings.enableHoverStylingExt);
    };

    p.checkHoverEnabledExtClass = function (hoverPropEnable) {
        
        var className = "hoverEnabledExt";
        if(hoverPropEnable && !this.el.hasClass(className)){
            this.el.addClass(className);
        }

        if(!hoverPropEnable && this.el.hasClass(className)){
            this.el.removeClass(className)
        }
    }

    /**
     * @method setEnableHoverStylingExt
     * Set enableHoverStylingExt option.
     * @param {Boolean} value
     */
    p.setEnableHoverStylingExt = function setEnableHoverStylingExt(value) {
        this.settings.enableHoverStylingExt = value;
        this.checkHoverEnabledExtClass(this.settings.enableHoverStylingExt);
    };

    /**
     * @method getEnableHoverStylingExt
     * Return enableHoverStylingExt option.
     */
    p.getEnableHoverStylingExt = function () {
        return this.settings.enableHoverStylingExt;
    };


    return WidgetClass;

});
