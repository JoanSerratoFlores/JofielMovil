import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterStepOnePage } from './registerStepOne.page';

describe('LoginPage', () => {
  let component: RegisterStepOnePage;
  let fixture: ComponentFixture<RegisterStepOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStepOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterStepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
