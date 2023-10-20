import { ChainId } from '@baseswapfi/sdk-core'

export const FACTORY_ADDRESS = '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B'

export const V3_FACTORY_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.BASE]: FACTORY_ADDRESS,
  [ChainId.SCROLL]: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720'
}

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'

export const POOL_INIT_CODE_HASH_MAP: { [chainId in ChainId]?: string } = {
  [ChainId.BASE]: POOL_INIT_CODE_HASH,
  [ChainId.SCROLL_SEPOLIA]: '0xe040f12c7cee3904b78f24f8fc395629c2e69525c2815da7a659f7483e378ecb', // fee update, new hash
  [ChainId.SCROLL]: '0xe040f12c7cee3904b78f24f8fc395629c2e69525c2815da7a659f7483e378ecb' // fee update, new hash
}

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
