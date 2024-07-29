import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ProductServiceService } from '../../services/product-service.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let taskService: ProductServiceService;

  beforeEach(async () => {
    const taskServiceSpy = jasmine.createSpyObj('TaskService', [
      'getTasks',
      'deleteTask',
    ]);
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: ProductServiceService, useValue: taskServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should load tasks', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('onTaskDelete should be called', () => {
    spyOn(component, 'onTaskDelete').and.callThrough();
    const taskIdToDelete = 1;

    component.onTaskDelete(taskIdToDelete);

    expect(component.onTaskDelete).toHaveBeenCalledWith(taskIdToDelete);
    expect(taskService.deleteTask).toHaveBeenCalledWith(taskIdToDelete);
  });
});
