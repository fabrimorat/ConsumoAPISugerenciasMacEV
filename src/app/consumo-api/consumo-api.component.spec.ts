import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoAPIComponent } from './consumo-api.component';

describe('ConsumoAPIComponent', () => {
  let component: ConsumoAPIComponent;
  let fixture: ComponentFixture<ConsumoAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumoAPIComponent]
    });
    fixture = TestBed.createComponent(ConsumoAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
