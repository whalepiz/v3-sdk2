export const FACTORY_ADDRESS = '0x37690f55Bc721B4cA6b8DDfb6B7aFf490146635f'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

// export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'
// defiedge modded hash
export const POOL_INIT_CODE_HASH = '0x146a9a61ada215bdbc7346c169e030cf383f441b85d40c70970f98c8aa070cd4'

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
