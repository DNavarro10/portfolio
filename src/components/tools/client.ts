/**
 * Small helpers shared by the tool scripts (runs in the browser).
 * Kept tiny on purpose: no libraries, so each tool page loads fast.
 */

/** Reads the translated strings a tool component put in `data-strings`. */
export function readStrings<T>(root: HTMLElement): T {
  return JSON.parse(root.dataset.strings ?? '{}') as T;
}

/** Replaces {placeholders} in a translated string: fill('DR {dr}', { dr: 40 }). */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/**
 * Copies text and briefly changes the button label to "Copied".
 * Falls back to selecting a text field when the Clipboard API is unavailable.
 */
export async function copyText(
  text: string,
  button: HTMLButtonElement,
  copiedLabel: string,
  fallbackField?: HTMLTextAreaElement | HTMLInputElement,
): Promise<void> {
  const original = button.textContent ?? '';
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    fallbackField?.select();
    document.execCommand('copy');
  }
  button.textContent = copiedLabel;
  window.setTimeout(() => {
    button.textContent = original;
  }, 1800);
}
