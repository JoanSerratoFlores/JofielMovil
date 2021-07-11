import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramformationPage } from './programformation.page';

describe('ProgramformationPage', () => {
  let component: ProgramformationPage;
  let fixture: ComponentFixture<ProgramformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
