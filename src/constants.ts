export const FACTORY_ADDRESS = '0xEf5793EDcCe5Aa0bbD416A22A6589e534934eA1F'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x7ed774f06f996c7ae326a8ef35e788a72bf0a49adb52e5f1c7067a8b9df041aa'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 80,
  LOW = 450,
  MEDIUM = 2500,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
