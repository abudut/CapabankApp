import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerUserPage } from './ver-user.page';

describe('VerUserPage', () => {
  let component: VerUserPage;
  let fixture: ComponentFixture<VerUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
