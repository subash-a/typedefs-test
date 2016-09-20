/// <reference path="../../typings/globals/d3/index.d.ts" />
/// <reference path="dagre.d.ts"/>

/* tslint:disable */
declare namespace __DagreD3 {
	var graphlib: GraphLib;
	var render: Render

	interface Render {
		new (): Render;
		(selection: __d3.Selection<any>, g: __GraphLib.Graph): void;
	}

	interface GraphLib {
		Graph: __GraphLib.Graph;
	}
}

declare module "dagre-d3" {
	export = __DagreD3
}
/* tslint:enable */
