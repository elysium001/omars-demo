import { LitElement, html, css } from 'lit';

export class Demo extends LitElement {

    // get attributes.
    static properties = {
        title: { attribute: 'title' },
        bgColor: { attribute: 'bg-color' }

    }

    // set :host styles.
    static styles = css`
        :host {
            display: block;
            padding: 1em;
            color: #fff;
        }
    `;

    constructor() {
        super();

        // set default values.
        this.title = 'Hello World!';
        this.bgColor = '#f00';
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    // render the component.
    render() {

        this.style.backgroundColor = this.bgColor;

        return html`
        <div>
            <h1>${this.title}</h1>
        </div>
        `;
    }
}

customElements.define('omars-demo', Demo);

console.log('Demo Web Component Loaded');