import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPensionerComponent } from './list-pensioner.component';

describe('ListPensionerComponent', () => {
  let component: ListPensionerComponent;
  let fixture: ComponentFixture<ListPensionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPensionerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
