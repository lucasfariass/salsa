import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFavoritesContainer } from './poke-favorites-container.component';

describe('PokeFavoritesContainerComponent', () => {
  let component: PokeFavoritesContainer;
  let fixture: ComponentFixture<PokeFavoritesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeFavoritesContainer]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeFavoritesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
