/// <reference path="graphlib.d.ts"/>

/* tslint:disable */
declare namespace __Dagre {
	var graphlib: GraphLib;
	function layout(graph: __GraphLib.Graph): void;

	interface GraphLib {
		Graph: __GraphLib.Graph;
	}
}

declare module "dagre" {
	export = __Dagre;
}
/* tslint:enable */
