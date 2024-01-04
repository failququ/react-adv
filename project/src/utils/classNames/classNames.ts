type OptionsData = Record<string, string | boolean>;

export function classNames(
  cls: string,
  options: OptionsData,
  additional: string[]
): string {
  return [
    cls,
    ...Object.entries(options)
      .filter(([option, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional,
  ].join(" ");
}
