sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/library' // library dependency
],  function(jQuery, library) {

	"use strict";

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "me.malfurion.camera",
		noLibraryCSS: true,
		version: "${version}",
		dependencies : ["sap.ui.core"],
		types: [],
		interfaces: [],
		controls: [
			"me.malfurion.camera.Camera"
		],
		elements: []
	});

	return openui5.camera;

}, /* bExport= */ false);
