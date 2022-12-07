define(['widgets/brease/NumericInput/NumericInput',
    'brease/decorators/LanguageDependency',
    'brease/decorators/MeasurementSystemDependency',
    'widgets/breaseXtended/NumericInput/libs/config'
], function (SuperClass, languageDependency, measurementSystemDependency, Config) {

    'use strict';

    /**
     * @class widgets.breaseXtended.NumericInput
     * #Description
     * Input field for numeric values  
     * To edit values, an window for numeric input (=NumPad) will be shown  
     * 
     * @breaseNote 
    
     * @extends widgets.brease.NumericInput
     *
     * @aside example numinout
     *
     * @iatMeta category:Category
     * Numeric
     * @iatMeta description:short
     * Eingabe eines Wertes
     * @iatMeta description:de
     * Ermöglicht dem Benutzer einen numerischen Wert einzugeben
     * @iatMeta description:en
     * Enables the user to enter a numeric value
     */

    /**
     * @htmltag examples
     * Simple Code example
     *
     *     <div id="numInput01" data-brease-widget="widgets/breaseXtended/NumericInput"></div>
     *
     */

    /**
     * @method getValue
     * @hide
     */

    var defaultSettings = Config;

    var WidgetClass = SuperClass.extend(function NumericInput() {
        SuperClass.apply(this, arguments);
    }, defaultSettings);

    var p = WidgetClass.prototype;

    p.init = function () {
        if (this.settings.omitClass !== true) {
            this.addInitialClass('breaseNumericInput');
        }
        // breaseNumericInput css class should not be added
        this.settings.omitClass = true;

        SuperClass.prototype.init.call(this);
    };

     /**
     * @method setBackColor
     * @iatStudioExposed
     * Sets the back color of the widget.
     * @param {String} value The back color to be set
     */
    p.setBackColor = function (value) {
        var s = new Option().style;
        s.color = value;

        if (s.color !== ''){
            this.el.css('background-color', value);
        }
        else{
            console.iatWarn("Value is not a color");
            var code = Enum.EventLoggerId.CLIENT_INVALID_PROPERTY_VALUE, 
            verboseLevel = Enum.EventLoggerVerboseLevel.LOW, 
            severity = Enum.EventLoggerSeverity.WARNING,
            text = 'Value is not a color',
            args = [],
            eventId = 0;
            document.body.dispatchEvent(new CustomEvent(BreaseEvent.LOG_MESSAGE, { detail: { verbose: verboseLevel, severity: severity, code: code, text: text, args: args }, bubbles: true }));
        }
    };

    /**
     * @method openNumPad
     * @iatStudioExposed
     * Opens the numeric keypad.
     */
    p.openNumPad = function () {
        this._showNumPad(this);
    };

    p._createUnitEl = function () {
        return $('<span></span>')
            .addClass('breaseNumericInputExt_unit');
    };

    return measurementSystemDependency.decorate(languageDependency.decorate(WidgetClass, false), true);

});
