/// <reference path="./graphlib.d.ts"/>

/* tslint:disable */
declare namespace __GraphLibDot {
	function read(input: string): __GraphLib.Graph;
}

declare module "graphlib-dot" {
	export = __GraphLibDot;
}
/* tslint:enable */
