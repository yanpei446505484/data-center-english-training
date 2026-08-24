/**
 * Text Cleaning Skill
 *
 * Normalizes English text by:
 * - Stripping punctuation from word boundaries
 * - Converting to lowercase (except professional abbreviations)
 * - Removing extra whitespace
 * - Preserving data center abbreviations in original case
 */

// Professional abbreviations that should remain uppercase
const DC_ABBREVIATIONS = new Set([
  'UPS', 'BMS', 'CRAC', 'CRAH', 'PDU', 'STS', 'ATS', 'HVAC',
  'SLA', 'MTTR', 'MTBF', 'RCA', 'CAPA',
  'MOP', 'SOP', 'EOP', 'PTW',
  'DCIM', 'KPI', 'SLI', 'SLO',
  'AC', 'DC', 'IT', 'OT',
  'LAN', 'WAN', 'VLAN', 'IP', 'TCP', 'UDP', 'DNS', 'DHCP',
  'API', 'REST', 'JSON', 'XML', 'HTTP', 'HTTPS',
  'VM', 'VPS', 'IaaS', 'PaaS', 'SaaS',
  'RAID', 'SAN', 'NAS', 'SSD', 'HDD',
  'CPU', 'GPU', 'RAM', 'ROM',
  'BIOS', 'UEFI', 'PXE', 'iDRAC', 'iLO',
  'LED', 'LCD', 'OLED',
  'RFID', 'NFC',
  'CCTV', 'VMS',
  'SCADA', 'PLC', 'DCS',
  'N+1', '2N', '2N+1',
]);

// Punctuation to strip from word boundaries
const PUNCTUATION_REGEX = /^[.,;:!?'"()[\]{}<>]+|[.,;:!?'"()[\]{}<>]+$/g;

// Multiple whitespace normalization
const WHITESPACE_REGEX = /\s+/g;

/**
 * Clean and normalize English text
 *
 * @param text - Raw English text input
 * @returns Cleaned text with normalized case and punctuation removed
 *
 * @example
 * cleanText("The UPS transferred to bypass mode.")
 * // Returns: "The UPS transferred to bypass mode"
 *
 * @example
 * cleanText("Check the BMS alarm! It's critical.")
 * // Returns: "Check the BMS alarm It's critical"
 */
export function cleanText(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  // Normalize whitespace first
  let cleaned = text.trim().replace(WHITESPACE_REGEX, ' ');

  // Split into words, clean each, then rejoin
  const words = cleaned.split(' ').map(word => {
    if (!word) return '';

    // Check if it's a protected abbreviation (case-sensitive match)
    if (DC_ABBREVIATIONS.has(word)) {
      return word;
    }

    // Check if removing punctuation reveals a protected abbreviation
    const stripped = word.replace(PUNCTUATION_REGEX, '');
    if (DC_ABBREVIATIONS.has(stripped)) {
      return stripped;
    }

    // For regular words: strip punctuation and lowercase
    const normalized = stripped.toLowerCase();

    // Handle contractions (don't → don't, it's → it's)
    // But remove trailing punctuation
    return normalized.replace(/[.,;:!?()[\]{}<>]+$/, '');
  });

  // Filter empty strings and rejoin
  return words.filter(Boolean).join(' ');
}

/**
 * Extract individual tokens from cleaned text
 * Useful for tokenization after cleaning
 *
 * @param text - Already cleaned text
 * @returns Array of word tokens
 */
export function tokenize(text: string): string[] {
  const cleaned = cleanText(text);
  return cleaned.split(' ').filter(Boolean);
}

/**
 * Check if a word is a protected DC abbreviation
 *
 * @param word - Word to check (case-sensitive)
 * @returns True if it's a protected abbreviation
 */
export function isDCAbbreviation(word: string): boolean {
  return DC_ABBREVIATIONS.has(word);
}

/**
 * Get list of all protected DC abbreviations
 */
export function getDCAbbreviations(): string[] {
  return Array.from(DC_ABBREVIATIONS).sort();
}
