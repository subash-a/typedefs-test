/* tslint:disable */
declare namespace jspb {
	export class ExtensionFieldInfo {
		binaryMessageDeserializeFn: Function;
		binaryMessageSerializeFn: Function;
		binaryReaderFn: Function;
		binaryWriterFn: Function;
		ctor: Function;
		fieldIndex: number;
		fieldName: Object;
		isPacked: boolean;
		isRepeated: number;
		toObjectFn: Function;

		constructor(fieldNumber: number, fieldName: Object, ctor: Function, toObjectFn: Function, isRepeated: number, opt_binaryReaderFn?: Function, opt_binaryWriterFn?: Function, opt_binaryMessageSerializeFn?: Function, opt_binaryMessageDeserializeFn?: Function, opt_isPacked?: boolean);

		isMessageType(): boolean;
	}

	export class Message {
		constructor();

		static messageSetExtensions(): Object;
		static array: Array<Object>;

		static bytesAsB64(value: string | Uint8Array): string;
		static bytesAsU8(value: string | Uint8Array): Uint8Array;
		static bytesListAsB64(value: Array<string> | Array<Uint8Array>): Array<string>;
		static bytesListAsU8(value: Array<string> | Array<Uint8Array>): Array<Uint8Array>;
		static clone(msg: jspb.Message): jspb.Message;
		static compareExtensions(extension1: Object, extension2: Object): boolean;
		static compareFields(field1: Object, field2: Object): boolean;
		static copyInto(fromMessage: jspb.Message, toMessage: jspb.Message): void;
		static difference(m1: jspb.Message, m2: jspb.Message): jspb.Message;
		static equals(m1: jspb.Message, m2: jspb.Message): boolean;
		static readBinaryExtension(msg: jspb.Message, reader: Object, extensions: Object, getExtensionFn: Function, setExtensionFn: Function): void;
		static registerMessageType(id: string, constructor: Function): void;
		static serializeBinaryExtensions(proto: jspb.Message, writer: Object, extensions: Object, getExtensionFn: Function): void;
		static toMap(field: Array<Object>, mapKeyGetterFn: Function, opt_toObjectFn: Function, opt_includeInstance: boolean): Object;
		static toObjectExtension(proto: jspb.Message, obj: Object, extensions: Object, getExtensionFn: Function, opt_includeInstance: boolean): void;
		static toObjectList(field: Array<Object>, toObjectFn: Function, opt_includeInstance: boolean): Array<Object>;

		protected static cloneMessage(msg: jspb.Message): jspb.Message;
		protected static computeOneofCase(msg: jspb.Message, oneof: Array<number>): number;
		protected static getField(msg: jspb.Message, fieldNumber: number): Object;
		protected static getFieldProto3(msg: jspb.Message, fieldNumber: number, defaultValue: Object): Object;
		protected static getOptionalFloatingPointField(msg: jspb.Message, fieldNumber: number): number;
		protected static getRepeatedFloatingPointField(msg: jspb.Message, fieldNumber: number): Array<number>;
		protected static getRepeatedWrapperField(msg: jspb.Message, ctor: Function, fieldNumber: number): Array<jspb.Message>;
		protected static getWrapperField(msg: jspb.Message, ctor: Function, fieldNumber: number, opt_requiredopt: number): jspb.Message;
		protected static initialize(msg: jspb.Message, data: Array<Object>, messageId: string | number, suggestedPivot: number, repeatedFields: Array<number>, opt_oneofFields: Array<Array<number>>): void;
		protected static setField(msg: jspb.Message, fieldNumber: number, value: string | number | boolean | Uint8Array | Array<Object>): void;
		protected static setOneofField(msg: jspb.Message, fieldNumber: number, oneof: Array<number>, value: string | number | boolean | Uint8Array | Array<Object>): void;
		protected static setOneofWrapperField(msg: jspb.Message, fieldNumber: number, oneof: Array<number>, value: jspb.Message): void;
		protected static setRepeatedWrapperField(msg: jspb.Message, fieldNumber: number, value: Array<jspb.Message>): void;
		protected static setWrapperField(msg: jspb.Message, fieldNumber: number, value: jspb.Message): void;

		getExtension(fieldInfo: jspb.ExtensionFieldInfo): Object;
		setExtension(fieldInfo: jspb.ExtensionFieldInfo, value: Object): void;
		getJsPbMessageId(): string;
		toArray(): Array<Object>;
		toString(): string;
	}
}

declare module "protobufjs" {
		export = jspb;
}
/* tslint:enable */
