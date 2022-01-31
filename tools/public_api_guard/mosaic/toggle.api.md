## API Report File for "mosaic"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { CanColor } from '@ptsecurity/mosaic/core';
import { CanColorCtor } from '@ptsecurity/mosaic/core';
import { CanDisable } from '@ptsecurity/mosaic/core';
import { CanDisableCtor } from '@ptsecurity/mosaic/core';
import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { HasTabIndex } from '@ptsecurity/mosaic/core';
import { HasTabIndexCtor } from '@ptsecurity/mosaic/core';
import * as i0 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/cdk/a11y';
import * as i4 from '@ptsecurity/mosaic/core';

// @public (undocumented)
export class McToggleBase {
    constructor(_elementRef: ElementRef);
    // (undocumented)
    _elementRef: ElementRef;
}

// @public (undocumented)
export class McToggleChange {
    // (undocumented)
    checked: boolean;
    // (undocumented)
    source: McToggleComponent;
}

// @public (undocumented)
export class McToggleComponent extends McToggleMixinBase implements ControlValueAccessor, CanColor, CanDisable, HasTabIndex {
    constructor(_elementRef: ElementRef, _focusMonitor: FocusMonitor, _changeDetectorRef: ChangeDetectorRef);
    // (undocumented)
    ariaLabel: string;
    // (undocumented)
    ariaLabelledby: string | null;
    // (undocumented)
    readonly change: EventEmitter<McToggleChange>;
    // (undocumented)
    get checked(): boolean;
    set checked(value: boolean);
    // (undocumented)
    get disabled(): any;
    set disabled(value: any);
    // (undocumented)
    _elementRef: ElementRef;
    // (undocumented)
    focus(): void;
    // (undocumented)
    getAriaChecked(): boolean;
    // (undocumented)
    id: string;
    // (undocumented)
    inputElement: ElementRef;
    // (undocumented)
    get inputId(): string;
    // Warning: (ae-forgotten-export) The symbol "ToggleLabelPositionType" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    labelPosition: ToggleLabelPositionType;
    // (undocumented)
    name: string | null;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    onChangeEvent(event: Event): void;
    // (undocumented)
    onInputClick(event: MouseEvent): void;
    // (undocumented)
    onLabelTextChange(): void;
    // (undocumented)
    registerOnChange(fn: any): void;
    // (undocumented)
    registerOnTouched(fn: any): void;
    // (undocumented)
    setDisabledState(isDisabled: boolean): void;
    // (undocumented)
    value: string;
    // (undocumented)
    writeValue(value: any): void;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<McToggleComponent, "mc-toggle", ["mcToggle"], { "color": "color"; "tabIndex": "tabIndex"; "labelPosition": "labelPosition"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "id": "id"; "name": "name"; "value": "value"; "disabled": "disabled"; "checked": "checked"; }, { "change": "change"; }, never, ["*"]>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McToggleComponent, never>;
}

// @public (undocumented)
export const McToggleMixinBase: HasTabIndexCtor & CanDisableCtor & CanColorCtor & typeof McToggleBase;

// @public (undocumented)
export class McToggleModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<McToggleModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<McToggleModule>;
    // Warning: (ae-forgotten-export) The symbol "i1" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<McToggleModule, [typeof i1.McToggleComponent], [typeof i2.CommonModule, typeof i3.A11yModule, typeof i4.McCommonModule], [typeof i1.McToggleComponent]>;
}

// (No @packageDocumentation comment for this package)

```