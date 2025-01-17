import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@ptsecurity/mosaic/core';


/**
 * @title validation-overview
 */
@Component({
    selector: 'validation-overview-example',
    templateUrl: 'validation-overview-example.html',
    styleUrls: ['validation-overview-example.css']
})
export class ValidationOverviewExample {
    themePalette = ThemePalette;

    feedbackForm: FormGroup;
    feedbackFormWithHints: FormGroup;

    constructor() {
        this.feedbackFormWithHints = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            thirdName: new FormControl(''),
            email: new FormControl('', [Validators.required, Validators.email]),
            reason: new FormControl('', [Validators.required]),
            rating: new FormControl('', [Validators.required]),
            comment: new FormControl('')
        });

        this.feedbackForm = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            thirdName: new FormControl(''),
            email: new FormControl('', [Validators.required, Validators.email]),
            reason: new FormControl('', [Validators.required]),
            rating: new FormControl('', [Validators.required]),
            comment: new FormControl('')
        });
    }
}
