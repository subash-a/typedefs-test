// we have to redefine Karma-like interfaces here because of
// https://github.com/Microsoft/TypeScript/issues/4166
interface ClientConfig {
	args?: string[];
}

interface KarmaInterface {
	config: ClientConfig;
}

interface Window {
	__karma__: KarmaInterface;
}
