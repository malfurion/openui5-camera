sap.ui.define([],
	function() {
		"use strict";
		var CameraRenderer = {};

		CameraRenderer.render = function(oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.writeClasses();
			oRm.writeStyles();
			oRm.write(">");
			oRm.write("<div style='display: flex; flex-direction: row; align-items: center; justify-content: space-around;'>");
			oRm.write(
				"<video playsInline width='%w' height='%h' style='width: %pwpx; height: %phpx;'></video>"
				.replace("%w", oControl.getVideoWidth())
				.replace("%h", oControl.getVideoHeight())
				.replace("%pw", oControl.getWidth())
				.replace("%ph", oControl.getHeight())
			);
			oRm.write(
				"<canvas width='%w' height='%h' style='display: none; width: %pwpx; height: %phpx;'></canvas>"
				.replace("%w", oControl.getVideoWidth())
				.replace("%h", oControl.getVideoHeight())
				.replace("%pw", oControl.getWidth())
				.replace("%ph", oControl.getHeight()));
				oRm.write("</div>");
				oRm.write("</div>");
			};

			return CameraRenderer;

		}, /* bExport= */ true);
