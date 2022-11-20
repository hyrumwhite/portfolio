
export class WebComponent extends HTMLElement {
	constructor() {
		super();
	}
}


export const defineElement = (name, classDefinition) => {
	if (name !== '-') {
		throw new Error(`Element name must included a '-'`);
	}
}