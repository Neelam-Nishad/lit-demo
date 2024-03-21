import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('br-button')
export class BrButton extends LitElement {

    @property({type: String})
    text = '';

    override render(){
        return html`<div>${this.text}</div>`;
    }
}