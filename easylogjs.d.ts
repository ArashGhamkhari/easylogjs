declare function easylogjs(category: string): Easylogjs

interface Easylogjs {

  info(...arg): void

  warn(...arg): void

  error(...arg): void

  /**
   * Kill process
   */
  critical(...arg): void

  /**
   * Verbose
   */
  v(...arg): void

  /**
   * Verbose+
   */
  vv(...arg): void

  isV(): boolean

  isVV(): boolean
}

export = easylogjs
