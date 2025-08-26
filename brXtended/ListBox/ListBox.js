define([
    'widgets'
], function (
    widgets
) {

    'use strict';

    /**
     * @class widgets.brXtended.ListBox
     * #Description
     * ListBox
     *  
     * @extends widgets.brease.ListBox
     * 
     * @iatMeta studio:visible
     * true
     * @iatMeta category:Category
     * Selector
     * @iatMeta description:short
     * Liste von Texten
     * @iatMeta description:de
     * Zeigt eine Liste, aus welcher der Benutzer Elemente auswählen kann
     * @iatMeta description:en
     * Displays a list from where the user can select items
     */

    var defaultSettings = {},

        WidgetClass = widgets.brease.ListBox.extend(function ButtonTransfer() {
            widgets.brease.ListBox.apply(this, arguments);
        }, defaultSettings),

        p = WidgetClass.prototype;

    p.init = function () {
        if (this.settings.omitClass !== true) {
            this.addInitialClass('brXtendedListBox');
        }

        widgets.brease.ListBox.prototype.init.call(this);
    };

    // Overwrite SuperClass function that handle click on a item in the list
    p.valueChangeFromUI = function () {

        var widget = this;

        // Found which items was clicked
        var state = widget.store.getState();
        var itemSelected = state.items.selectedIndex;
        var clickedValue = widget.getSelectedValue();
        var clickedText = state.text.textElements[itemSelected].displayText;
        var clickedIndex = widget.getSelectedIndex();
        /**
        * @event ItemClickExt
        * Fired when a item in the list is clicked on.
        * @iatStudioExposed
        * @param {String} clickedValue Value of the item clicked
        * @param {String} clickedText Text of the item clicked
        * @param {Integer} clickedIndex Index of the item clicked
        */
        var ev = widget.createEvent('ItemClickExt', {
            clickedValue: clickedValue,
            clickedText: clickedText,
            clickedIndex: clickedIndex
        });
        if (ev !== undefined) {
            ev.dispatch();
        }

        widgets.brease.ListBox.prototype.valueChangeFromUI.call(widget);


    };

    p.dispose = function () {
        var that = this;
        widgets.brease.ListBox.prototype.dispose.apply(that, arguments);
    };

    return WidgetClass;
});
