export function isSup(msg: string): Boolean {
  const pattern = new RegExp(/^sup\b/, 'gmi');
  return pattern.test(msg);
}
