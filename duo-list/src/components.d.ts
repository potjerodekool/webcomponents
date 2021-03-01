/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DuoListModel } from "./DuoListModel";
import { Option } from "./Option";
export namespace Components {
    interface DuoList {
        "size": number;
        "value": DuoListModel;
    }
}
declare global {
    interface HTMLDuoListElement extends Components.DuoList, HTMLStencilElement {
    }
    var HTMLDuoListElement: {
        prototype: HTMLDuoListElement;
        new (): HTMLDuoListElement;
    };
    interface HTMLElementTagNameMap {
        "duo-list": HTMLDuoListElement;
    }
}
declare namespace LocalJSX {
    interface DuoList {
        "onValue-change"?: (event: CustomEvent<DuoListModel>) => void;
        "size"?: number;
        "value"?: DuoListModel;
    }
    interface IntrinsicElements {
        "duo-list": DuoList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "duo-list": LocalJSX.DuoList & JSXBase.HTMLAttributes<HTMLDuoListElement>;
        }
    }
}