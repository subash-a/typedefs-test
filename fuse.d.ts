// modified by modelogiq
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/fuse/fuse.d.ts
/* tslint:disable */

declare interface Fuse<T> {
	search(pattern: string): T[];
}

declare const Fuse: {
	new <T>(list: T[], options?: Options<T>): Fuse<T>;
}

declare interface SearchFnConstructor {
	new (pattern: string, options?: SearchOptions): SearchFn;
}

declare interface SearchFn {
	search(text: string): SearchResult;
}

declare interface SearchResult {
	readonly isMatch: boolean;
	readonly score: number;
}

declare interface Options<T> extends SearchOptions {
	caseSensitive?: boolean;
	includeScore?: boolean;
	shouldSort?: boolean;
	searchFn?: SearchFnConstructor;
	sortFn?: (a: { score: number }, b: { score: number }) => number;
	getFn?: (obj: T, path: string) => string;
	keys?: string[];
}

declare interface SearchOptions {
	location?: number;
	distance?: number;
	threshold?: number;
	maxPatternLength?: number;
}

declare module "fuse" {
		export = Fuse;
}
/* tslint:enable */
