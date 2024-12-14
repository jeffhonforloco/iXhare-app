export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculateTotalPrice(basePrice: number, quantity: number): number {
  return basePrice * quantity;
}