import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CredencialesAcademicasPage } from './credenciales-academicas.page';

describe('CredencialesAcademicasPage', () => {
  let component: CredencialesAcademicasPage;
  let fixture: ComponentFixture<CredencialesAcademicasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CredencialesAcademicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CredencialesAcademicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
