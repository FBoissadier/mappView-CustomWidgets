define(["widgets/brease/TableWidget/designer/ClassInfo"], function (s, e) {
  "use strict";
  var classInfo = {
    meta: {
      className: "widgets.brXtended.UserList",
      parents: ["*"],
      children: ["widgets.brease.UserListItem"],
      inheritance: [
        "widgets.brXtended.UserList",
        "widgets.brease.TableWidget",
        "widgets.brease.DataHandlerWidget",
        "brease.core.BaseWidget",
      ],
      actions: {
        DeleteUser: { method: "deleteUser" },
        Focus: { method: "focus" },
        GoToFirstPage: { method: "goToFirstPage" },
        GoToLastPage: { method: "goToLastPage" },
        GoToNextPage: { method: "goToNextPage" },
        GoToPage: {
          method: "goToPage",
          parameter: { value: { name: "value", index: 0, type: "Integer" } },
        },
        GoToPreviousPage: { method: "goToPreviousPage" },
        OpenAddUserDialog: { method: "openAddUserDialog" },
        OpenModifyUserDialog: { method: "openModifyUserDialog" },
        setAdditionalStyle: {
          method: "setAdditionalStyle",
          parameter: {
            styleName: { name: "styleName", index: 0, type: "StyleReference" },
          },
        },
        setBusyIndicatorDelay: {
          method: "setBusyIndicatorDelay",
          parameter: {
            busyIndicatorDelay: {
              name: "busyIndicatorDelay",
              index: 0,
              type: "Integer",
            },
          },
        },
        setEditable: {
          method: "setEditable",
          parameter: {
            editable: { name: "editable", index: 0, type: "Boolean" },
            metaData: { name: "metaData", index: 1, type: "Object" },
          },
        },
        SetEnable: {
          method: "setEnable",
          parameter: { value: { name: "value", index: 0, type: "Boolean" } },
        },
        setFilterConfiguration: {
          method: "setFilterConfiguration",
          parameter: {
            filterConfiguration: {
              name: "filterConfiguration",
              index: 0,
              type: "String",
            },
          },
        },
        setFormat: {
          method: "setFormat",
          parameter: { format: { name: "format", index: 0, type: "String" } },
        },
        setHeaderHeight: {
          method: "setHeaderHeight",
          parameter: {
            headerHeaderHeight: {
              name: "headerHeaderHeight",
              index: 0,
              type: "PixelVal",
            },
          },
        },
        setHeaderSorting: {
          method: "setHeaderSorting",
          parameter: {
            headerSorting: { name: "headerSorting", index: 0, type: "Boolean" },
          },
        },
        setImageIsAdmin: {
          method: "setImageIsAdmin",
          parameter: {
            imageIsAdmin: { name: "imageIsAdmin", index: 0, type: "ImagePath" },
          },
        },
        setImageIsLocked: {
          method: "setImageIsLocked",
          parameter: {
            imageIsLocked: {
              name: "imageIsLocked",
              index: 0,
              type: "ImagePath",
            },
          },
        },
        setItemsPerPage: {
          method: "setItemsPerPage",
          parameter: {
            itemsPerPage: { name: "itemsPerPage", index: 0, type: "Integer" },
          },
        },
        setNextText: {
          method: "setNextText",
          parameter: {
            nextText: { name: "nextText", index: 0, type: "String" },
          },
        },
        setNextTextKey: {
          method: "setNextTextKey",
          parameter: { key: { name: "key", index: 0, type: "String" } },
        },
        setPaging: {
          method: "setPaging",
          parameter: { paging: { name: "paging", index: 0, type: "Boolean" } },
        },
        setParentCoWiId: {
          method: "setParentCoWiId",
          parameter: { value: { name: "value", index: 0, type: "String" } },
        },
        setPreviousText: {
          method: "setPreviousText",
          parameter: {
            previousText: { name: "previousText", index: 0, type: "String" },
          },
        },
        setPreviousTextKey: {
          method: "setPreviousTextKey",
          parameter: { key: { name: "key", index: 0, type: "String" } },
        },
        setRowHeight: {
          method: "setRowHeight",
          parameter: {
            rowHeight: { name: "rowHeight", index: 0, type: "String" },
          },
        },
        setSearchBox: {
          method: "setSearchBox",
          parameter: {
            searchBox: { name: "searchBox", index: 0, type: "Boolean" },
          },
        },
        setShowPagingButtons: {
          method: "setShowPagingButtons",
          parameter: {
            showPagingButtons: {
              name: "showPagingButtons",
              index: 0,
              type: "Boolean",
            },
          },
        },
        setSortConfiguration: {
          method: "setSortConfiguration",
          parameter: {
            sortConfiguration: {
              name: "sortConfiguration",
              index: 0,
              type: "String",
            },
          },
        },
        SetStyle: {
          method: "setStyle",
          parameter: {
            value: { name: "value", index: 0, type: "StyleReference" },
          },
        },
        setStyleConfiguration: {
          method: "setStyleConfiguration",
          parameter: {
            styleConfiguration: {
              name: "styleConfiguration",
              index: 0,
              type: "String",
            },
          },
        },
        setTabIndex: {
          method: "setTabIndex",
          parameter: { value: { name: "value", index: 0, type: "Number" } },
        },
        SetVisible: {
          method: "setVisible",
          parameter: { value: { name: "value", index: 0, type: "Boolean" } },
        },
        ShowTooltip: { method: "showTooltip" },
      },
      properties: {},
    },
  };
  if (s.classExtension) {
    classInfo.classExtension = s.classExtension;
  }
  if (e) {
    classInfo.classExtension = e;
  }
  return classInfo;
});
