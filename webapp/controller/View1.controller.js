sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("kpmg.com.Exercise4BookStore.controller.View1", {
		onInit: function () {

		},
		onListItemPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("details", {bookPath: window.encodeURIComponent(oItem.getBindingContext("bookstoreModel").getPath().substr(1))
			});
		}
		
	});
});