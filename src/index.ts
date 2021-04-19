export function isSup(msg: string): boolean {
  const pattern = new RegExp(/^sup\b/, 'gmi');
  return pattern.test(msg);
}
