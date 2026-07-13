export function loadState() {
  const saved = localStorage.getItem('budg-v3');
  return saved ? JSON.parse(saved) : { version: 3, transactions: [], categories: ['Продукты', 'Транспорт', 'Другое'] };
}

export function saveState(state) {
  localStorage.setItem('budg-v3', JSON.stringify(state));
  return state;
}
