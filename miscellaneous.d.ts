interface URLConstructor {
	hash: string;
	search: string;
	pathname: string;
	port: string;
	hostname: string;
	host: string;
	password: string;
	username: string;
	protocol: string;
	origin: string;
	href: string;
	toString: () => string;
}

interface URL {
	new (url: string, base?: string): URLConstructor;
}

/* tslint:disable:no-any */
interface Class<T> {
	new (...args: Array<any>): T;
}
/* tslint:enable:no-any */

interface GenClass<T> {
	New(): T;
}

interface ReactComponentClass<P, S> {
	new (props?: P, context?: {}): __React.Component<P, S>;
}

interface HasKind<T> {
	new (): T;
	Kind(): string;
}

interface ProtobufClass {
	serializeBinary(): ArrayBuffer;
}
