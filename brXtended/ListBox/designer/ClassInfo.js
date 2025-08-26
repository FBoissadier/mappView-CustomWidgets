define(["widgets","brease"], function({brease:{ListBox:{ClassInfo:s}}},{core:{Utils:U}}, e) {const classInfo={meta:{className:"widgets.brXtended.ListBox",parents:["*"],children:[],inheritance:["widgets.brXtended.ListBox","widgets.brease.ListBox","brease.core.BaseWidget"],creator:"77ad797a905b97f09152fb14985e0463",eventBindingApi:function (w) {
function a(e, f) { w.addServerEventListener(e, f); }
function c(...args) { const [{ action: a }] = args.slice(-1); return w[a](...args); }
return {
click: f => a('Click', f),
disabledClick: f => a('DisabledClick', f),
enableChanged: f => a('EnableChanged', f),
focusIn: f => a('FocusIn', f),
focusOut: f => a('FocusOut', f),
itemClickExt: f => a('ItemClickExt', f),
onDragEnter: f => a('OnDragEnter', f),
onDragLeave: f => a('OnDragLeave', f),
onDrop: f => a('OnDrop', f),
selectedIndexChanged: f => a('SelectedIndexChanged', f),
visibleChanged: f => a('VisibleChanged', f),
focus: function () { c({ origin: 'action', action: 'focus' }); },
getSelectedIndex: function () { return c({ origin: 'action', action: 'getSelectedIndex' }); },
getSelectedValue: function () { return c({ origin: 'action', action: 'getSelectedValue' }); },
setDataProvider: function (a1) { c(U.toJs(a1),{ origin: 'action', action: 'setDataProvider' }); w._ebFVC({dataProvider: 'getDataProvider'}, false);},
setEnable: function (a1) { c(a1,{ origin: 'action', action: 'setEnable' }); w._ebFVC({enable: 'getEnable'}, false);},
setSelectedIndex: function (a1) { c(a1,{ origin: 'action', action: 'setSelectedIndex' }); w._ebFVC({selectedIndex: 'getSelectedIndex'}, false);},
setSelectedValue: function (a1) { c(a1,{ origin: 'action', action: 'setSelectedValue' }); w._ebFVC({selectedValue: 'getSelectedValue'}, false);},
setStyle: function (a1) { c(a1,{ origin: 'action', action: 'setStyle' }); w._ebFVC({style: 'getStyle'}, false);},
setVisible: function (a1) { c(a1,{ origin: 'action', action: 'setVisible' }); w._ebFVC({visible: 'getVisible'}, false);},
showTooltip: function () { c({ origin: 'action', action: 'showTooltip' }); }
};
},actions:{"Focus":{"method":"focus"},"GetSelectedIndex":{"method":"getSelectedIndex"},"GetSelectedValue":{"method":"getSelectedValue"},"setAdditionalStyle":{"method":"setAdditionalStyle","parameter":{"styleName":{"name":"styleName","index":0,"type":"StyleReference"}}},"SetDataProvider":{"method":"setDataProvider","parameter":{"provider":{"name":"provider","index":0,"type":"ItemCollection"}}},"setDisplaySettings":{"method":"setDisplaySettings","parameter":{"displaySettings":{"name":"displaySettings","index":0,"type":"brease.enum.DropDownDisplaySettings"}}},"setEditable":{"method":"setEditable","parameter":{"editable":{"name":"editable","index":0,"type":"Boolean"},"metaData":{"name":"metaData","index":1,"type":"Object"}}},"setEllipsis":{"method":"setEllipsis","parameter":{"ellipsis":{"name":"ellipsis","index":0,"type":"Boolean"}}},"SetEnable":{"method":"setEnable","parameter":{"value":{"name":"value","index":0,"type":"Boolean"}}},"setFitHeight2Items":{"method":"setFitHeight2Items","parameter":{"fitHeight2Items":{"name":"fitHeight2Items","index":0,"type":"Boolean"}}},"setImageAlign":{"method":"setImageAlign","parameter":{"imageAlign":{"name":"imageAlign","index":0,"type":"brease.enum.ImageAlign"}}},"setImagePath":{"method":"setImagePath","parameter":{"imagePath":{"name":"imagePath","index":0,"type":"DirectoryPath"}}},"setItemHeight":{"method":"setItemHeight","parameter":{"itemHeight":{"name":"itemHeight","index":0,"type":"Integer"}}},"setMultiLine":{"method":"setMultiLine","parameter":{"multiLine":{"name":"multiLine","index":0,"type":"Boolean"}}},"setOmitDisabledClick":{"method":"setOmitDisabledClick"},"setParentCoWiId":{"method":"setParentCoWiId","parameter":{"value":{"name":"value","index":0,"type":"String"}}},"setParentEnableState":{"method":"setParentEnableState"},"setParentVisibleState":{"method":"setParentVisibleState"},"SetSelectedIndex":{"method":"setSelectedIndex","parameter":{"index":{"name":"index","index":0,"type":"Integer"}}},"SetSelectedValue":{"method":"setSelectedValue","parameter":{"value":{"name":"value","index":0,"type":"String"}}},"SetStyle":{"method":"setStyle","parameter":{"value":{"name":"value","index":0,"type":"StyleReference"}}},"setTabIndex":{"method":"setTabIndex","parameter":{"value":{"name":"value","index":0,"type":"Number"}}},"SetVisible":{"method":"setVisible","parameter":{"value":{"name":"value","index":0,"type":"Boolean"}}},"setWordWrap":{"method":"setWordWrap","parameter":{"wordWrap":{"name":"wordWrap","index":0,"type":"Boolean"}}},"ShowTooltip":{"method":"showTooltip"}},properties:{}}};if(s.classExtension) {classInfo.classExtension = s.classExtension;}if(e) {classInfo.classExtension = e;}return classInfo;});
