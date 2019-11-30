import { LitElement, html, css } from 'lit-element';

export class MyButton extends LitElement {
    static get styles(){
        return css`
            :host {

            }
            button {
                background: green;
                border: 0;
                border-radius: 5px;
                color: white;
                font-size: 1rem;
                padding 0.5rem;
            }
            button.primary {
                background: orangered;
            }
            button[disabled]{

            }
        `;
    }

    static get properties(){
        return {
            label: {type: String},
            primary: {type: Boolean},
            disabled: {type: Boolean}
        };
    }

    constructor() {
        super();
        this.label = 'Default';
        console.log('I am constructed');
    }

    connectedCallback(){
        super.connectedCallback();
        console.log('I am connected');
    }

    render() {
        const cls = this.primary ? 'primary' : '';
            return html`
            <button class=${cls} @click=${this.onClick}>
                ${this.label}
            </button>
            `;
    }

    onClick(event){
        console.log(event);
    }
}