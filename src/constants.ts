export const FACTORY_ADDRESS = '0x3aA90F4b3581a38e98D30246Ee3c12865EdE08A5'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

// export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'
// TODO: This is what I got from parsing the code but may be wrong. Above is Uni's V3 one to try
// With new init fee added
export const POOL_INIT_CODE_HASH = '0x5892de6063b5d6cffe15c4e490934b0ddcaf8408ce5f76e57f3f3fb07de67322'

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
