// eslint-disable-next-line import/no-cycle
import BigNumberInBase from './BigNumberInBase'
import BigNumber from './BigNumber'

export default class BigNumberInWei extends BigNumber {
  static make(number: BigNumber.Value): BigNumberInWei {
    return new BigNumberInWei(number)
  }

  minus(n: BigNumber.Value, base?: number): BigNumberInWei {
    return new BigNumberInWei(super.minus(n, base))
  }

  plus(n: BigNumber.Value, base?: number): BigNumberInWei {
    return new BigNumberInWei(super.plus(n, base))
  }

  dividedBy(n: BigNumber.Value, base?: number): BigNumberInWei {
    return new BigNumberInWei(super.dividedBy(n, base))
  }

  div(n: BigNumber.Value, base?: number): BigNumberInWei {
    return new BigNumberInWei(super.div(n, base))
  }

  multipliedBy(n: BigNumber.Value, base?: number): BigNumberInWei {
    return new BigNumberInWei(super.multipliedBy(n, base))
  }

  times(n: BigNumber.Value, base?: number): BigNumberInWei {
    return new BigNumberInWei(super.times(n, base))
  }

  pow(n: BigNumber.Value, base?: number): BigNumberInWei {
    return new BigNumberInWei(super.pow(n, base))
  }

  toBase(decimals = 18): BigNumberInBase {
    return new BigNumberInBase(super.dividedBy(new BigNumber(10).pow(decimals)))
  }
}
