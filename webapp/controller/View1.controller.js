sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/Fragment",
		"sap/ui/model/resource/ResourceModel"

	],
	function (Controller, MessageToast, JSONModel, Fragment, ResourceModel) {
		"use strict";

		return Controller.extend("com.kpmg.Exercise2.controller.View1", {
			onInit: function () {
				var data = {
					recipient: {
						name: "World"
					}
				};
				var model = new JSONModel(data);
				this.getView().setModel(model);
				
				var i18nModel = new ResourceModel({
	            bundleName: "com.kpmg.Exercise2.i18n.i18n",
	            supportedLocales: [""],
	            fallbackLocale: ""
         });
         this.getView().setModel(i18nModel, "i18n");
			},
			onShowHello: function () {
				 var oBundle = this.getView().getModel("i18n").getResourceBundle();
		         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
		         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
		         MessageToast.show(sMsg);
			},
			onOpenDialog: function () {
				var oView = this.getView();

				// create dialog lazily
				if (!this.pDialog) {
					this.pDialog = Fragment.load({
						id: oView.getId(),
						name: "com.kpmg.Exercise2.view.HelloDialog"
					}).then(function (oDialog) {
						// connect dialog to the root view of this component (models, lifecycle)
						oView.addDependent(oDialog);
						return oDialog;
					});
				}
				this.pDialog.then(function (oDialog) {
					oDialog.open();
				});
			}
		});
	}
);