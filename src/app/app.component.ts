import { Component } from '@angular/core';
import { FieldType } from 'projects/core-framework/src/lib/models/fieldType';
import { FormConfig } from 'projects/core-framework/src/lib/models/formConfig';
import { FormField } from 'projects/core-framework/src/lib/models/formField';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my-editor-app';
    formConfiguration: FormConfig;
    
    constructor() {
        const myTextBox: FormField = {
            label: 'First Name',
            name: 'firstName',
            value:'',
            type: FieldType.TextBox
        };
        const lastName: FormField = {
            label: 'Last Name',
            name: 'lastName',
            value:'',
            type: FieldType.TextBox,
            disabled:true
        };
        const myEditor: FormField = {
            label: 'Description',
            name: 'desc',
            value:'',
            type: FieldType.Editor
        }
        const myList: FormField = {
            label: 'Categories',
            name: 'categories',
            value:'',
            type: FieldType.ListView,
            selectMultiple: true,
            options: ['Sunday','Monday','Tuesday']
        }
        const fileUpload: FormField = {
            label: 'ProfilePic',
            name: 'profilePic',
            value:'',
            type: FieldType.FileUpload,
        }

        this.formConfiguration = {
            formName: "Sample Form",
            fields: [myTextBox,lastName, fileUpload,myList,myEditor],
            actions: []
        }
    }
}
