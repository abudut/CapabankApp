import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtransferenciaPage } from './addtransferencia.page';

describe('AddtransferenciaPage', () => {
  let component: AddtransferenciaPage;
  let fixture: ComponentFixture<AddtransferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtransferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
