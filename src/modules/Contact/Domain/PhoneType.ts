export type PhoneTypeProps = {
  typeName: string;
};

export class PhoneType {
	public readonly id: number;
	public props: Required<PhoneTypeProps>;

	private constructor(props: PhoneTypeProps, id?: number) {
		this.id = id || Math.random();

		if (!props) {
			//@ts-expect-error used for ORM
			this.props = {};
			return;
		}

		this.props = {
			...props,
		};
	}

	static create(props: PhoneTypeProps, id?: number) {
		return new PhoneType(props, id);
	}
}
