export type HTMLNodeName = 'a' | 'abbr' | 'address' | 'area' | 'article' | 'aside' | 'audio' | 'b' | 'base' | 'bdi' | 'bdo' | 'blockquote' | 'body' | 'br' | 'button' | 'canvas' | 'caption' | 'cite' | 'code' | 'col' | 'colgroup' | 'data' | 'datalist' | 'dd' | 'del' | 'details' | 'dfn' | 'dialog' | 'div' | 'dl' | 'dt' | 'em' | 'embed' | 'fieldset' | 'figcaption' | 'figure' | 'footer' | 'form' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'head' | 'header' | 'hgroup' | 'hr' | 'html' | 'i' | 'iframe' | 'img' | 'input' | 'ins' | 'kbd' | 'keygen' | 'label' | 'legend' | 'li' | 'link' | 'main' | 'map' | 'mark' | 'menu' | 'meta' | 'meter' | 'nav' | 'noscript' | 'object' | 'ol' | 'optgroup' | 'option' | 'output' | 'p' | 'param' | 'picture' | 'pre' | 'progress' | 'q' | 'rp' | 'rt' | 'ruby' | 's' | 'samp' | 'script' | 'section' | 'select' | 'slot' | 'small' | 'source' | 'span' | 'strong' | 'style' | 'sub' | 'summary' | 'sup' | 'table' | 'tbody' | 'td' | 'template' | 'textarea' | 'tfoot' | 'th' | 'thead' | 'time' | 'title' | 'tr' | 'track' | 'u' | 'ul' | 'var' | 'video' | 'wbr';
export type HTMLElementOptions = {
	accept?: string | boolean; 
	'accept-charset'?: string | boolean; 
	accesskey?: string | boolean; 
	action?: string | boolean; 
	align?: string | boolean; 
	allow?: string | boolean; 
	alt?: string | boolean; 
	async?: string | boolean; 
	autocapitalize?: string | boolean; 
	autocomplete?: string | boolean; 
	autofocus?: string | boolean; 
	autoplay?: string | boolean; 
	background?: string | boolean; 
	bgcolor?: string | boolean; 
	border?: string | boolean; 
	buffered?: string | boolean; 
	capture?: string | boolean; 
	challenge?: string | boolean; 
	charset?: string | boolean; 
	checked?: string | boolean; 
	cite?: string | boolean; 
	class?: string | boolean; 
	code?: string | boolean; 
	codebase?: string | boolean; 
	color?: string | boolean; 
	cols?: string | boolean; 
	colspan?: string | boolean; 
	content?: string | boolean; 
	contenteditable?: string | boolean; 
	controls?: string | boolean; 
	coords?: string | boolean; 
	crossorigin?: string | boolean; 
	csp?: string | boolean; 
	data?: string | boolean; 
	'data-*'?: string | boolean; 
	datetime?: string | boolean; 
	decoding?: string | boolean; 
	default?: string | boolean; 
	defer?: string | boolean; 
	dir?: string | boolean; 
	dirname?: string | boolean; 
	disabled?: string | boolean; 
	download?: string | boolean; 
	draggable?: string | boolean; 
	enctype?: string | boolean; 
	enterkeyhint?: string | boolean; 
	for?: string | boolean; 
	form?: string | boolean; 
	formaction?: string | boolean; 
	formenctype?: string | boolean; 
	formmethod?: string | boolean; 
	formnovalidate?: string | boolean; 
	formtarget?: string | boolean; 
	headers?: string | boolean; 
	height?: string | boolean; 
	hidden?: string | boolean; 
	high?: string | boolean; 
	href?: string | boolean; 
	hreflang?: string | boolean; 
	'http-equiv'?: string | boolean; 
	icon?: string | boolean; 
	id?: string | boolean; 
	importance?: string | boolean; 
	integrity?: string | boolean; 
	inputmode?: string | boolean; 
	ismap?: string | boolean; 
	itemprop?: string | boolean; 
	keytype?: string | boolean; 
	kind?: string | boolean; 
	label?: string | boolean; 
	lang?: string | boolean; 
	loading?: string | boolean; 
	list?: string | boolean; 
	loop?: string | boolean; 
	low?: string | boolean; 
	max?: string | boolean; 
	maxlength?: string | boolean; 
	minlength?: string | boolean; 
	media?: string | boolean; 
	method?: string | boolean; 
	min?: string | boolean; 
	multiple?: string | boolean; 
	muted?: string | boolean; 
	name?: string | boolean; 
	novalidate?: string | boolean; 
	open?: string | boolean; 
	optimum?: string | boolean; 
	pattern?: string | boolean; 
	ping?: string | boolean; 
	placeholder?: string | boolean; 
	poster?: string | boolean; 
	preload?: string | boolean; 
	radiogroup?: string | boolean; 
	readonly?: string | boolean; 
	referrerpolicy?: string | boolean; 
	rel?: string | boolean; 
	required?: string | boolean; 
	reversed?: string | boolean; 
	role?: string | boolean; 
	rows?: string | boolean; 
	rowspan?: string | boolean; 
	sandbox?: string | boolean; 
	scope?: string | boolean; 
	selected?: string | boolean; 
	shape?: string | boolean; 
	size?: string | boolean; 
	sizes?: string | boolean; 
	slot?: string | boolean; 
	span?: string | boolean; 
	spellcheck?: string | boolean; 
	src?: string | boolean; 
	srcdoc?: string | boolean; 
	srclang?: string | boolean; 
	srcset?: string | boolean; 
	start?: string | boolean; 
	step?: string | boolean; 
	style?: string | boolean; 
	tabindex?: string | boolean; 
	target?: string | boolean; 
	title?: string | boolean; 
	translate?: string | boolean; 
	type?: string | boolean; 
	usemap?: string | boolean; 
	value?: string | boolean; 
	width?: string | boolean; 
	wrap?: string | boolean;
	accessKey?: string | boolean; 
 contentEditable?: string | boolean; 
 contextMenu?: string | boolean; 
 inert?: string | boolean; 
 noModule?: string | boolean; 
 nonce?: string | boolean; 
 outerText?: string | boolean; 
	innerText?: string | boolean; 
 textContent?: string | boolean;
	tabIndex?: string | boolean;
	copy?: (event: ClipboardEvent) => void;
	cut?: (event: ClipboardEvent) => void;
	paste?: (event: ClipboardEvent) => void;
	invalid?: (event: Event) => void;
	animationcancel?: (event: Event) => void;
	animationend?: (event: Event) => void;
	animationiteration?: (event: Event) => void;
	animationstart?: (event: Event) => void;
	beforeinput?: (event: Event) => void;
	input?: (event: Event) => void;
	change?: (event: Event) => void;
	getpointercapture?: (event: Event) => void;
	lostpointercapture?: (event: Event) => void;
	pointercancel?: (event: Event) => void;
	pointerdown?: (event: Event) => void;
	pointerenter?: (event: Event) => void;
	pointerleave?: (event: Event) => void;
	pointermove?: (event: Event) => void;
	pointerout?: (event: Event) => void;
	pointerover?: (event: Event) => void;
	pointerup?: (event: Event) => void;
	transitioncancel?: (event: Event) => void;
	transitionend?: (event: Event) => void;
	transitionrun?: (event: Event) => void;
	transitionstart?: (event: Event) => void;
	blur?: (event: FocusEvent) => void;
	error?: (event: ErrorEvent) => void;
	focus?: (event: FocusEvent) => void;
	load?: (event: Event) => void;
	scroll?: (event: Event) => void;
	wheel?: (event: WheelEvent) => void;
	mouseenter?: (event: MouseEvent) => void;
	mouseleave?: (event: MouseEvent) => void;
	mousemove?: (event: MouseEvent) => void;
	mousedown?: (event: MouseEvent) => void;
	mouseup?: (event: MouseEvent) => void;
	click?: (event: MouseEvent) => void;
	dblclick?: (event: MouseEvent) => void;
	keydown?: (event: KeyboardEvent) => void;
	keypress?: (event: KeyboardEvent) => void;
	keyup?: (event: KeyboardEvent) => void;
	contextmenu?: (event: MouseEvent) => void;
	select?: (event: UIEvent) => void;
	pointerlockchange?: (event: Event) => void;
	pointerlockerror?: (event: Event) => void;
}