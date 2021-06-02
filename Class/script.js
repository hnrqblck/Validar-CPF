class Cpf {
    constructor(cpf){
        Object.defineProperty(this, 'cleanCpf', {
            enumerable: true,
            get: function() {
                return cpf.replace(/\D+/g, '');
            }
        })
    }

    get validate() {
        this.cleanCPF();
        this.getDigit();
        this.cpfArr.push(this.digit);
        this.getDigit();
        this.cpfArr.push(this.digit);

        const validation = this.cpfArr.join('') === this.cleanCpf;
        return validation ? `The cpf is valid!` :  `The cpf isn't valid.`;
    }

    cleanCPF () {
        this.cpfArr = Array.from(this.cleanCpf);
        this.cpfArr.splice(-2, 2);
        return this.cpfArr;
    }

    getDigit() {
        const cpfToDigit = [...this.cpfArr];
        const total = cpfToDigit.reverse().map((value, i) => {
            i += 2;
            value *= i;
            return value;
        })
        .reduce((acc, value) => acc += value, 0);
        this.digit = 11 - (total % 11);
        if (this.digit > 9) return this.digit = '0';
        return this.digit = String(this.digit);
    }
}

const cpf1 = new Cpf('705.484.450-52');
console.log(cpf1.validate);