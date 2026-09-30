export function removeEmptyValues(obj = {}) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) => value !== undefined && value !== null && value !== ""
    )
  );
}
