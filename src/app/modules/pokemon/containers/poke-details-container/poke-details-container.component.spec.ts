import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailsContainer } from './poke-details-container.component';

describe('PokeDetailsContainerComponent', () => {
  let component: PokeDetailsContainer;
  let fixture: ComponentFixture<PokeDetailsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeDetailsContainer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeDetailsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
