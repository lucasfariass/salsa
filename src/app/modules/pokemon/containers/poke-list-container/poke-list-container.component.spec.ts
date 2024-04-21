import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListContainer } from './poke-list-container.component';

describe('PokeListContainerComponent', () => {
  let component: PokeListContainer;
  let fixture: ComponentFixture<PokeListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeListContainer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
