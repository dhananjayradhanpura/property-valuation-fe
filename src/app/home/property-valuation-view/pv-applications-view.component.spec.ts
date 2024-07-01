import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PvApplicationsViewComponent } from './pv-applications-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

describe('PvApplicationsViewComponent', () => {
    let component: PvApplicationsViewComponent;
    let fixture: ComponentFixture<PvApplicationsViewComponent>;
    let router: Router;
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PvApplicationsViewComponent],
            imports: [
                HttpClientModule,
                MatFormFieldModule
            ]
        })
            .compileComponents();

    });

    it('should create', () => {
        fixture = TestBed.createComponent(PvApplicationsViewComponent);
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    // it('test createAppPage function', () => {
    //     fixture = TestBed.createComponent(PvApplicationsViewComponent);
    //     component = fixture.componentInstance;
    //     router = TestBed.inject(Router);

    //     component.createAppPage(); // call router.navigate
    //     const spy = router.navigate as jasmine.Spy; // create the navigate spy
    //     const navArgs = spy.calls.first().args[0]; // get the spy values
    //     expect(navArgs[0]).toBe('home/pvform');
    // });

    // it('test filterData function', () => {
    //     fixture = TestBed.createComponent(PvApplicationsViewComponent);
    //     component = fixture.componentInstance;
    //     let event:any = {
    //         target: {
    //             value:"random"
    //         }
    //     };
    //     component.appArr.push(item);
    //     component.filterData(event);
    // });

    // it('should test the table ', (done) => {
    //     //  expect(component.users).toEqual(testUsers);

    //     fixture.detectChanges();
    //     fixture.whenStable().then(() => {
    //         fixture.detectChanges();

    //         let tableRows = fixture.nativeElement.querySelectorAll('tr');


    //         // Header row
    //         let headerRow = tableRows[0];
    //         expect(headerRow.cells[0].innerHTML).toBe('Email');
    //         expect(headerRow.cells[1].innerHTML).toBe('Created');
    //         expect(headerRow.cells[2].innerHTML).toBe('Roles');

    //         // Data rows
    //         let row1 = tableRows[1];
    //         expect(row1.cells[0].innerHTML).toBe('dummy@mail.com');
    //         expect(row1.cells[1].innerHTML).toBe('01-01-2020');
    //         expect(row1.cells[2].innerHTML).toBe('admin,standard');

    //         // Test more rows here..

    //         done();
    //         expect(tableRows.length).toBe(4);
    //     });
    // });








});