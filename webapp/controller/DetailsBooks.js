sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";
	return Controller.extend("kpmg.com.Exercise4BookStore.controller.DetailsBooks", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("details").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.itemPath = "/" + window.decodeURIComponent(oEvent.getParameter("arguments").bookPath);
			this.getView().bindElement({ path: this.itemPath, model: "bookstoreModel" });
		}
	});
});