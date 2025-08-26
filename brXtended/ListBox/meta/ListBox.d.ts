interface widgets_brXtended_ListBox{
        
        /**
        * Sets focus on the widget element, if it can be focused and keyboardOperation=true
        */
        focus(): void;

        /**
        * Returns selectedIndex.
        */
        getSelectedIndex(): Integer;

        /**
        * Returns selectedValue.
        */
        getSelectedValue(): string;

        /**
        * Sets dataProvider
        */
        setDataProvider(provider: ItemCollection): void;

        /**
        * Sets the state of property "enable"
        */
        setEnable(value: boolean): void;

        /**
        * Sets selectedIndex
        */
        setSelectedIndex(index: Integer): void;

        /**
        * Sets selectedValue
        */
        setSelectedValue(value: string): void;

        /**
        * 
        */
        setStyle(value: StyleReference): void;

        /**
        * Sets the state of property "visible"
        */
        setVisible(value: boolean): void;

        /**
        * 
        */
        showTooltip(): void; 
        
        /**
        * Fired when element is clicked on.
        */
        click(handler: (e: { detail: { origin: string, horizontalPos: string, verticalPos: string } }) => void):void;

        /**
        * Fired when disabled element is clicked on.
        */
        disabledClick(handler: (e: { detail: { origin: string, hasPermission: boolean, horizontalPos: string, verticalPos: string } }) => void):void;

        /**
        * Fired when operability of the widget changes.
        */
        enableChanged(handler: (e: { detail: { value: boolean } }) => void):void;

        /**
        * Fired when the widgets gets focus
        */
        focusIn(handler: () => void):void;

        /**
        * Fired when the widgets lost focus
        */
        focusOut(handler: () => void):void;

        /**
        * Fired when a item in the list is clicked on.
        */
        itemClickExt(handler: (e: { detail: { clickedValue: string, clickedText: string, clickedIndex: Integer } }) => void):void;

        /**
        * Fired when element has onDragEnter.
        */
        onDragEnter(handler: (e: { detail: { contentId: string, widgetId: string } }) => void):void;

        /**
        * Fired when element has OnDragLeave.
        */
        onDragLeave(handler: (e: { detail: { contentId: string, widgetId: string } }) => void):void;

        /**
        * Fired when element has OnDrop.
        */
        onDrop(handler: (e: { detail: { contentId: string, widgetId: string } }) => void):void;

        /**
        * Fired when selectedIndex or selectedValue is changed by the user.
        */
        selectedIndexChanged(handler: (e: { detail: { selectedIndex: Integer, selectedValue: string } }) => void):void;

        /**
        * Fired when the visibility of the widget changes.
        */
        visibleChanged(handler: (e: { detail: { value: boolean } }) => void):void;       
}
interface widgets_brXtended_ListBox_private extends widgets_brXtended_ListBox{
         
               
}