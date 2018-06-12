import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from './../members/member-edit/member-edit.component';
@Injectable()
export class PreventSaveChanges implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty) {
      return confirm(
        'Are you sure want to Continue? Any unsaved changes will be lost'
      );
    }
    return true;
  }
}