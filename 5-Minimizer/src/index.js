import 'normalize.css'
const data = '\\000026ST00012|Name=Рога и копыта|PersonalAcc=000000000000000|BankName=ОТДЕЛЕНИЕ БАНКА РОССИИ|BIC=00000000|CorrespAcc=000000000000000000|Sum=12300|Purpose=Плата за предоставление сведений из ЕГРН|PayeeINN=0000000000|PensAcc=000-000-000 00|KPP=0000000000|CBC=00000000000000000000|OKTMO=0000000|UIN=000000000000000000|LastName=Иванов|FirstName=Иван|MiddleName=Иванович|PayerAddress=ул Улица, д1, кв1, г Город, обл Какаято'

console.log(
    data.split(
        '|'
    ).reduce(
        (obj, item) => {
            const [key, value] = item.split('=')
            obj[key] = value

            return obj
        },
        {}
    )
)
