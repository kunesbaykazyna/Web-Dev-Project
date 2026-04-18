import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBooks } from './genre-books';

describe('GenreBooks', () => {
  let component: GenreBooks;
  let fixture: ComponentFixture<GenreBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
