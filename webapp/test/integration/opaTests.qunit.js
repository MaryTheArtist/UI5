/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kpmg/com/Exercise4BookStore/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});