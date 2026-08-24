const _console = {
  info: console.info.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  debug: console.debug.bind(console),
};

export const logger = {
  info(message: string, ...args: unknown[]): void {
    _console.info(`[INFO] ${message}`, ...args);
  },
  warn(message: string, ...args: unknown[]): void {
    _console.warn(`[WARN] ${message}`, ...args);
  },
  error(message: string, ...args: unknown[]): void {
    _console.error(`[ERROR] ${message}`, ...args);
  },
  debug(message: string, ...args: unknown[]): void {
    if (import.meta.env.DEV) {
      _console.debug(`[DEBUG] ${message}`, ...args);
    }
  },
};
