/// <reference path="../../typings/globals/react/index.d.ts" />

declare module "react-widgets" {
	interface DropdownListProps<T> {
		value?: T;
		onChange?: (v: T) => void;
		onSelect?: (v: T) => void;
		data?: Array<T>;
		valueField?: string;
		textField?: string | ((v: T) => string);
		duration?: number;
		defaultValue?: T;
		placeholder?: string;

		// Still to define
		//
		// valueComponent: Class<React.Com
		// itemComponent
		// groupBy
	}

	// need to work out approach for generic components
	export class DropdownList extends __React.Component<DropdownListProps<Object>, {}> { }
}
