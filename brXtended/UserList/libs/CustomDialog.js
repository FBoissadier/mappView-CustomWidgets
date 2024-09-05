define(["brease/controller/libs/ContentHelper", "brease/enum/Enum"], function (
  ContentHelper,
  Enum
) {
  "use strict";

  /**
   * @class widgets.brXtended.UserList.libs.CustomDialog
   * @extends core.javascript.Object
   */

  var config = {
    roles: [],
    availableRoles: [],
    pwrules: [],
    dialogId: "",
    selectedRoles: [],
  };

  var CustomDialog = function CustomDialog(dialogId) {
      this.config = config;
      this.config.dialogId = dialogId;
    },
    p = CustomDialog.prototype;

  /**
   * @method openDialog
   * @public
   * @param {String} dialogId id of the dialog to open
   * @param {String} contentId id of the content loaded in the dialog
   * @param {brease.enum.MappTableConfigurationType} type which type of dialog should be instantiated
   */
  p.openDialog = function (type) {
    switch (type) {
      case Enum.MappTableConfigurationType.AddUser:
        _handleOpenDialogAddUser(contentId);
        break;
    }
  };

  p.getResultsForAddUser = function () {
    this.config.contentsToLoadInDialog = ContentHelper.contentsToLoadInDialog(
      this.config.dialogId
    );
    const widgetsId = _loadWidgetsInContent(this.config.contentsToLoadInDialog);
    this.getRolesFromWidgets(widgetsId);


    
  };

  p.configureRolesWidgets = function (widgetList) {
    

    // // Search all Checkbox that need to be disable because roles aren't available
    // var rolesAvailableCB = [];
    // for (var idxWidget = 0; idxWidget < rolesCB.length; idxWidget++) {
    //   const widgetId = rolesCB[idxWidget];
    //   for (
    //     let idxRoles = 0;
    //     idxRoles < this.config.availableRoles.length;
    //     idxRoles++
    //   ) {
    //     const role = this.config.availableRoles[idxRoles];
    //     if (widgetId == role + "CB") {
    //       rolesAvailableCB.push(widgetId);
    //     }
    //   }
    // }

    // var rolesDisableCB = rolesCB.filter(x => !rolesAvailableCB.includes(x));
    // console.log(rolesDisableCB);


  };

  p.getRolesFromWidgets = function (widgetList) {
    if ((this.config.roles.length = 0)) {
      this.loadRoles();
    }
    if ((this.config.availableRoles.length = 0)) {
      this.loadAvailableRoles();
    }

    // Search all Checkbox used in roles
    var rolesCB = [];
    for (var idxWidget = 0; idxWidget < widgetList.length; idxWidget++) {
      const widgetId = widgetList[idxWidget];
      for (let idxRoles = 0; idxRoles < this.config.roles.length; idxRoles++) {
        const role = this.config.roles[idxRoles];
        if (widgetId == role + "CB") {
          rolesCB.push(widgetId);
        }
      }
    }

    var selectedRoles = [];
    // Get value of each CheckBox of roles and update roles
    for (let idxWidget = 0; idxWidget < rolesCB.length; idxWidget++) {
      const role = rolesCB[idxWidget].replace("CB", "");
      const widgetId = this.config.contentsId + "_" + rolesCB[idxWidget];
      const widget = brease.uiController.callWidget(widgetId, "widget")
      if(widget.getValue()){
        selectedRoles.push(role);
      }
    }

    this.config.selectedRoles = selectedRoles;
  };

  p.loadRoles = function () {
    var widget = this;
    brease.user.loadUserRoles().then(
      function (roles) {
        widget.config.roles = roles;
        widget.loadPolicies();
      },
      function (status) {
        console.iatWarn("load roles for user.fail, status=", status);
      }
    );
  };

  p.loadAvailableRoles = function () {
    var widget = this;
    brease.user.loadAvailableRoles().then(
      function (roles) {
        widget.config.availableRoles = roles;
        widget.loadPolicies();
      },
      function (status) {
        console.iatWarn("load roles for user.fail, status=", status);
      }
    );
  };

  p.loadPolicies = function () {
    var widget = this;
    brease.user.loadPasswordPolicies().then(
      function (policies) {
        widget.config.policies = policies;
        widget.validator.setPolicies(policies);
        widget._initWidgets();
      },
      function (status) {
        console.iatWarn("loadPasswordPolicies.fail, status=", status);
      }
    );
  };

  p.loadUserNameMinLength = function () {
    var widget = this;
    brease.user.getUserSettingsFromMpUserX().then(
      function (response) {
        widget.config.userNameMinLength = response.UserNameMinLength;
      },
      function (status) {
        if (status) {
          console.iatWarn("getUserSettingsFromMpUserX.fail, status=", status);
        }
      }
    );
  };

  function _handleOpenDialogAddUser() {
    var widget = this;
    var contentsToLoadInDialog = ContentHelper.contentsToLoadInDialog(
      widget.config.dialogId
    );
    $.when(
      brease.dialogController.openDialog(
        this.config.dialogId,
        undefined,
        undefined,
        undefined,
        undefined,
        "",
        false,
        false
      )
    ).then(function (sucess) {
      var def = ContentHelper.activateFinished(contentsToLoadInDialog),
        abortedHandler = _handleDialogOpenAborted.bind(self, def);
      document.body.addEventListener(
        BreaseEvent.DIALOG_OPEN_ABORTED,
        abortedHandler
      );

      $.when(def).then(function (activateResult) {
        document.body.removeEventListener(
          BreaseEvent.DIALOG_OPEN_ABORTED,
          abortedHandler
        );
        var widgetId = "";
        // Handle change in the dialog
        this.el = $('[data-brease-pageid="' + widget.config.dialogId + '"]');
        this.el.on("ValueChanged", function (event) {
          console.log(event); // TODO : Change this to a function
          eventElemId = event.originalEvent.SrcElement.id; // {content_id}_{widget_id}
          widgetId = eventElemId.replace(contentsToLoadInDialog + "_", "");
        });
      });
    });
  }

  function _loadWidgetsInContent(contentId) {
    var listWidgetWithContentId =
      brease.uiController.widgetsController.getWidgetsOfContent(
        contentId,
        undefined
      );
    var listWidgetIds = [];
    for (let index = 0; index < listWidgetWithContentId.length; index++) {
      const widget_id = listWidgetWithContentId[index].replace(
        contentId + "_",
        ""
      );
      listWidgetIds.push(widget_id);
    }
    return listWidgetIds;
  }

  function _handleDialogOpenAborted(deferred) {
    ContentHelper.abort(deferred);
  }
});
