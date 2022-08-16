import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteruserdataComponent } from './registeruserdata.component';

describe('RegisteruserdataComponent', () => {
  let component: RegisteruserdataComponent;
  let fixture: ComponentFixture<RegisteruserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteruserdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteruserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
