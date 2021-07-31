import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CredencialesLaboralesPage } from './credenciales-laborales.page';

describe('CredencialesLaboralesPage', () => {
  let component: CredencialesLaboralesPage;
  let fixture: ComponentFixture<CredencialesLaboralesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CredencialesLaboralesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CredencialesLaboralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
