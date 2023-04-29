export type EmailTypeProps = {
	type_name: string;
}

export class EmailType {
	public readonly id: number;
	public props: Required<EmailTypeProps>;

	private constructor(props: EmailTypeProps, id?: number) {
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

	get type_name(): string {
		return this.type_name;
	}

	static create(props: EmailTypeProps, id?: number) {
		return new EmailType(props, id);
	}
}
