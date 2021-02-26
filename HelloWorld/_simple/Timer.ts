/// <amd-module name="HelloWorld/_simple/Timer" />

import { Control, TemplateFunction } from 'UI/Base';
import * as Template from 'wml!HelloWorld/_simple/Timer/Timer';

const INTERVAL: number = 500;
const FRACTION_LENGTH: number = 2;

export default class Timer extends Control {
    readonly _template: TemplateFunction = Template;
    text: string;
    private _interval: number;

    protected _beforeMount(): void {
        this.text = '';
    }

    protected _afterMount(): void {
        this._interval = window.setInterval(this._tick.bind(this), INTERVAL);
    }

    protected _beforeUnmount(): void {
        clearInterval(this._interval);
    }

    private _tick(): void {
        const time = new Date();
        this.text = `${addZero(time.getHours())} : ${addZero(time.getMinutes())} : ${addZero(time.getSeconds())}`;
    }

    static _styles: string[] = ['HelloWorld/Simple'];
}

function addZero(num: number): string {
    return ('0' + num).slice(-FRACTION_LENGTH);
}
