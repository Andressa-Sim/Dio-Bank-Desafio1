import { DioAccount } from './DioAccount'

export class BonusAccount extends DioAccount {
  deposit(value: number): void {
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error('O valor deve ser maior que zero.')
    }

    super.deposit(value + 10)
  }
}
