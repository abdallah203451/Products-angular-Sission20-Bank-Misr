import { Injectable } from '@angular/core';
import { CartItem, Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private tasks: Product[] = [];
  private carts: CartItem[] = [];
  private nextId: number = 1;
  private nextIdCart: number = 1;

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.nextId = this.tasks.length
        ? Math.max(...this.tasks.map((t) => t.id)) + 1
        : 1;
    }
    const storedCarts = localStorage.getItem('carts');
    if (storedCarts) {
      this.carts = JSON.parse(storedCarts);
      this.nextIdCart = this.carts.length
        ? Math.max(...this.carts.map((t) => t.id)) + 1
        : 1;
    }
  }

  getTasks(): Product[] {
    return this.tasks;
  }

  getCarts(): CartItem[] {
    return this.carts;
  }

  getTask(id: number): Product | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(task: Product): void {
    task.id = this.nextId++;
    this.tasks.push(task);
    this.saveTasks();
  }

  addcart(task: CartItem): void {
    task.id = this.nextIdCart++;
    this.carts.push(task);
    this.savecarts();
  }

  updateTask(task: Product): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      this.saveTasks();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  deleteCart(id: number): void {
    this.carts = this.carts.filter((task) => task.id !== id);
    this.savecarts();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private savecarts(): void {
    localStorage.setItem('carts', JSON.stringify(this.carts));
  }
}
