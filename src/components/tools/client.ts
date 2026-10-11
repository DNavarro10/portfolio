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
 * If the Clipboard API is blocked, selects the fallback field so the user can copy by hand.
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
    return;
  }
  button.textContent = copiedLabel;
  window.setTimeout(() => {
    button.textContent = original;
  }, 1800);
}

/**
 * The readable content of a parsed page: <main> (or <article>, or <body>) without
 * scripts, navigation, forms, and site-wide header/footer. Headers and footers
 * inside an <article> are kept, since they usually hold the H1 and byline.
 */
export function mainContent(doc: Document): HTMLElement {
  const source = doc.querySelector('main') ?? doc.querySelector('article') ?? doc.body;
  const content = source.cloneNode(true) as HTMLElement;
  content
    .querySelectorAll('script, style, noscript, template, nav, aside, form')
    .forEach((node) => node.remove());
  content.querySelectorAll('header, footer').forEach((node) => {
    if (!node.closest('article')) node.remove();
  });
  return content;
}
