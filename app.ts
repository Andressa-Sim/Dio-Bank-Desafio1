import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(`Saldo da conta de ${peopleAccount.getName()}: R$ ${peopleAccount.getBalance()}`)

const companyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.getLoan(500)
console.log(`Saldo da empresa: R$ ${companyAccount.getBalance()}`)

const bonusAccount = new BonusAccount('Conta Bônus', 30)
bonusAccount.deposit(100)
console.log(`Saldo da conta bônus: R$ ${bonusAccount.getBalance()}`)
