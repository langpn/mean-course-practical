import {NgModule} from "@angular/core";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@NgModule({
  imports: [
    MatToolbar,
    MatCard,
    MatAccordion,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatError,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelActionRow,
    MatExpansionPanelTitle,
    MatAnchor,
    MatProgressSpinner,
    MatPaginator,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  exports: [
    MatToolbar,
    MatCard,
    MatAccordion,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatError,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelActionRow,
    MatExpansionPanelTitle,
    MatAnchor,
    MatProgressSpinner,
    MatPaginator,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ]
})
export class AngularMaterialModule {

}
