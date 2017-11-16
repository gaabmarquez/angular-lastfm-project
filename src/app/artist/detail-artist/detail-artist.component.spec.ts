import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtistComponent } from './detail-artist.component';

describe('DetailArtistComponent', () => {
  let component: DetailArtistComponent;
  let fixture: ComponentFixture<DetailArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
