/// <amd-module name="HelloWorld/Index" />

import { Control, TemplateFunction } from 'UI/Base';
import * as Template from 'wml!HelloWorld/_index/Index';

const INTERVAL: number = 500;
const FRACTION_LENGTH: number = 2;

export default class Index extends Control {
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

    static _styles: string[] = ['HelloWorld/_index/Index'];
}

function addZero(num: number): string {
    return ('0' + num).slice(-FRACTION_LENGTH);
}
