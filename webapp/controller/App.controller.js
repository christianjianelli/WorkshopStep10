sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("com.cgi.workshop.fiori.controller.App", {

		_actionPerformed: "",

		_getDialog: function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("com.cgi.workshop.fiori.view.ConfirmDialog", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},

		onOpenDialog: function () {
			this._getDialog().open();
		},

		onCloseDialog: function () {
			this._getDialog().close();
		},

		onRefresh: function () {
			this._actionPerformed = "refresh";
			this.onOpenDialog();
		},

		onDelete: function () {
			this._actionPerformed = "delete";
			this.onOpenDialog();
		},

		onConfirm: function () {

			this.onCloseDialog();
			
			var oBundle = this.getView().getModel("i18n").getResourceBundle();

			if (this._actionPerformed === "refresh") {
				MessageToast.show(oBundle.getText("refreshConfirmed"));
			}
			
			if (this._actionPerformed === "delete") {
				MessageToast.show(oBundle.getText("deleteConfirmed"));
			}
		}
	});
});