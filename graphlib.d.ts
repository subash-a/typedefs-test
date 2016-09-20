/* tslint:disable */
declare namespace __GraphLib {

	interface OptionGraph {
		directed?: boolean;
		compound?: boolean;
		multigraph?: boolean
	}

	interface Graph {

		new (o?: OptionGraph): Graph;

		edges(): Edge[];

		nodes(): string[];

		node(id: any): any;

		graph(): Graph;

		isDirected(): boolean;

		isMultigraph(): boolean;

		isCompound(): boolean;

		setDefaultEdgeLabel(callback: () => void): Graph;

		setGraph(options: Label): Graph;

		setNode(id: string | number, node: Label): Graph;

		setNodes(id: string[], node: Label): Graph;

		nodeCount(): number;

		predecessors(id: string): string[];

		successors(id: string): string[];

		width: number;

		height: number;

		hasNode(id: string): boolean;

		setEdge(a: string | number, b: string | number): void;

		setEdge(a: string | number, b: string | number, l?: Label, n?: string): void;

		marginx: number;

		marginy: number;

		rankdir: string;

		edgeCount(): number;
	}

	interface Edge {
		v: string;
		w: string;
		name?: string
	}

	interface Children {
		[key: string]: Object;
	}

	interface Label {
		[key: string]: any;
	}
}

declare module "graphlib" {
	export = __GraphLib;
}
/* tslint:enable */
