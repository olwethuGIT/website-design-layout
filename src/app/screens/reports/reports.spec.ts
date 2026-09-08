import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reports } from './reports';

describe('Reports', () => {
  let component: Reports;
  let fixture: ComponentFixture<Reports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reports],
    }).compileComponents();

    fixture = TestBed.createComponent(Reports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a footer at the end of the scrollable body', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector('.screen-footer');

    expect(footer?.textContent).toContain('Footer content');
    expect(compiled.querySelector('.screen-body')?.lastElementChild).toBe(footer);
  });
});
