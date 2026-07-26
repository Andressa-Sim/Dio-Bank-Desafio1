export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  getAccountNumber(): number {
    return this.accountNumber
  }

  deposit(value: number): void {
    this.validateStatus()
    this.validateValue(value)

    this.balance += value
    console.log(`Depósito de R$ ${value} realizado com sucesso.`)
  }

  withdraw(value: number): void {
    this.validateStatus()
    this.validateValue(value)

    if (this.balance <= value) {
      throw new Error('Saldo insuficiente para realizar o saque.')
    }

    this.balance -= value
    console.log(`Saque de R$ ${value} realizado com sucesso.`)
  }

  getBalance(): number {
    return this.balance
  }

  private validateStatus(): void {
    if (!this.status) {
      throw new Error('Conta inválida.')
    }
  }

  private validateValue(value: number): void {
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error('O valor deve ser maior que zero.')
    }
  }
}
