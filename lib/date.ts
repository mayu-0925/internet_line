/** ビルド時の現在年を返す */
export function currentYear(): number {
  return new Date().getFullYear();
}

/** ビルド時の現在年月を「YYYY年M月」形式で返す */
export function currentYearMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}年${d.getMonth() + 1}月`;
}
