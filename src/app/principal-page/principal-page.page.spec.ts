import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrincipalPagePage } from './principal-page.page';

describe('PrincipalPagePage', () => {
  let component: PrincipalPagePage;
  let fixture: ComponentFixture<PrincipalPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
