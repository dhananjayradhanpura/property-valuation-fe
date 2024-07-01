import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvformComponent } from './pvform.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PVAppService } from '../../service/pvApp.service';
import { PVApplicationRequest } from '../../model/pvApplication-request.model';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { identity } from 'rxjs';

describe('PvformComponent', () => {
  let component: PvformComponent;
  let fixture: ComponentFixture<PvformComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PvformComponent],
      imports: [
        NoopAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatExpansionModule,
        MatFormFieldModule
      ],
      providers: [
        PVAppService
      ]
    })
      .compileComponents();
  });

  // it('test populatePvApplicationRequest', () => {
  //     const fixture = TestBed.createComponent(PvformComponent);
  //     const app = fixture.componentInstance;
  //     let req = new pvApplicationRequest();
  //     //app.pvForm.controls.username.setValue('1000');
  //     app.pvForm.value.username = "user";
  //     app.populatePvApplicationRequest(req);

  // });
  it('should create', () => {
    fixture = TestBed.createComponent(PvformComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('test onChangeFile function case true', () => {
    const fixture = TestBed.createComponent(PvformComponent);
    const component = fixture.componentInstance;
    let event: any = {
      target: {
        files: [{ 'name': "file" }]
      }
    };
    component.onChangeFile(event);
    expect(component.fileForUpload).toBeDefined();
  });

  it('test onChangeFile function case false', () => {
    const fixture = TestBed.createComponent(PvformComponent);
    const component = fixture.componentInstance;
    let event: any = {
      target: {
        files: []
      }
    };
    component.onChangeFile(event);
    expect(component.fileForUpload).toBeUndefined();
  });

  it('test deleteBorrower  case true', () => {
    const fixture = TestBed.createComponent(PvformComponent);
    const component = fixture.componentInstance;
    component.formarray = new FormArray([new FormControl('testcontrol')]);
    component.deleteBorrower(1);
    expect(component.formarray).toBeDefined();
  });

  it('test addBorrower  case true', () => {
    const fixture = TestBed.createComponent(PvformComponent);
    const component = fixture.componentInstance;
    component.formarray = new FormArray([new FormControl('testcontrol')]);
    component.addBorrower();
    expect(component.formarray).toBeDefined();
    expect(component.formarray.controls[0].value).toBe('testcontrol');
  });

  it('test addDocumentsForm  case true', () => {
    const fixture = TestBed.createComponent(PvformComponent);
    const component = fixture.componentInstance;
    expect(component.addDocumentsForm()).toBeDefined();
  });

  it('test addBorrowerForm  case true', () => {
    const fixture = TestBed.createComponent(PvformComponent);
    const component = fixture.componentInstance;
    expect(component.addBorrowerForm()).toBeDefined();
  });

  it('test addCommentsForm  case true', () => {
    const fixture = TestBed.createComponent(PvformComponent);
    const component = fixture.componentInstance;
    let val:any = component.addCommentsForm();
    expect(val).toBeDefined();
  });


});
