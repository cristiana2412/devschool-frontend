import { LitElement, html, css } from 'lit-element';

export class MyNote extends LitElement {
    static get styles(){
        return css`
            :host {

            }
            .note {
                float: left;
                display: block;
                position: relative;
                padding: 1em;
                width: 300px;
                min-height: 300px;
                margin: 0 30px 30px 0;
                background: linear-gradient(top, rgba(0,0,0,.05), rgba(0,0,0,.25));
                background-color: #FFFD75;
                box-shadow: 5px 5px 10px -2px rgba(33,33,33,.3);
                transform: rotate(2deg);
                transform: skew(-1deg,1deg);
                transition: transform .15s;
                z-index: 1;
            }
            textarea {
                background-color: transparent;
                border: none;
                resize: vertical;
                font-family: "Gloria Hallelujah", cursive;
                width: 100%;
                padding: 5px;
            }
            textarea:focus {
                outline: none;
                border: none;
                box-shadow: 0 0 5px 1px rgba(0,0,0,.2) inset;
            }
            .title {
                font-size: 30px;
                font-weight:bold;
                line-height: 1.2;
                color: #000000;
                height: 64px;
                margin-top: 20px;
            }
            .description {
                font-size: 24px;
                min-height: 200px;
            }
        `;
    }

    static get properties(){
        return {
            title: {type: String},
            description: {type: String},
            date: {type: Date}
        };
    }

    constructor() {
        super();
        this.title = 'New Note';
        this.description = 'Some description';
        console.log('I am constructed');
    }

    connectedCallback(){
        super.connectedCallback();
        console.log('I am connected');
    }

    render() {
        const noteDate = this.date ? this.date : new Date().toDateString();
        return html`
        <div class="note">
            <textarea class="title" placeholder=${this.title}></textarea>
            <textarea class="description" placeholder=${this.description}></textarea>
            <p>${noteDate}</p>
        </div>
        `;
    }

}