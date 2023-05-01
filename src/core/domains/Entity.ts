
export abstract class Entity<T> {
	protected readonly _id: number;
	public readonly props: T;

	get id() {
		return this._id;
	}

	constructor(props: T, id?: number) {
		this._id = id;
		this.props = props;
	}
}
