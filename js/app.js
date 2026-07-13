import { loadState, saveState } from './storage.js';
import { initPlanner } from './planner.js';

const state = loadState();

document.getElementById('app').innerHTML = `
  <h1>Budg V3 — Готов к работе!</h1>
  <p>Данные загружены. Скоро полный интерфейс.</p>
`;

console.log('Budg V3 запущен', state);
