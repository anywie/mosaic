import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, NgModule, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ThemePalette } from '@ptsecurity/mosaic/core';

import { McProgressBarModule, ProgressBarMode } from '../../mosaic/progress-bar/';


const INTERVAL: number = 300;
const STEP: number = 4;
const MAX_PERCENT: number = 100;

@Component({
    selector: 'app',
    templateUrl: './template.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../main.scss', './styles.scss']
})
export class ProgressBarDemoComponent implements OnDestroy {
    themePalette = ThemePalette;
    mode: ProgressBarMode = 'determinate';
    percent: number = 0;
    intervalId: number;

    constructor() {
        setInterval(() => this.percent = (this.percent + STEP) % (MAX_PERCENT + STEP), INTERVAL);
    }

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
}


@NgModule({
    declarations: [
        ProgressBarDemoComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        McProgressBarModule,
        FormsModule
    ],
    bootstrap: [
        ProgressBarDemoComponent
    ]
})
export class DemoModule {}
