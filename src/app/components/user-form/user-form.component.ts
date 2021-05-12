import { UserService } from './../../services/user.service';
import { UserState } from './../../state/user.state';
import { UserModel } from './../../core/models/user.model';
import { PhonePattern } from './../../core/utils/validator.handler';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailPattern } from 'src/app/core/utils/validator.handler';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  componentDestroyed$ = new Subject();
  isSuccess: boolean = false;

  user: Observable<UserModel>;
  constructor(
    private store: Store<UserState>,
    private readonly userService: UserService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  addUser(userPayload: UserModel) {
    this.store.dispatch({
      type: 'ADD_USER',
      payload: <UserModel>{
        firstName: userPayload.firstName,
        lastName: userPayload.lastName,
        email: userPayload.email,
        phone: userPayload.phone,
        budget: userPayload.budget,
      },
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(EmailPattern.emailRegex),
      ]),
      budget: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.required, Validators.pattern(PhonePattern.phoneRegex)]),
    });
  }

  submitForm() {
    this.addUser(this.userForm.value);
    this.userService
      .create(this.userForm.value)
      .pipe(
        takeUntil(this.componentDestroyed$),
        finalize(() => {
          this.isSuccess = true;
          this.userForm.reset();
        })
      )
      .subscribe(
        (response) => {},
        (error) => {}
      );
  }

  toggleSuccess(){
    this.isSuccess = false;
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    this.cdr.detach();
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }
}
