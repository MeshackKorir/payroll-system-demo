class Payroll {
    calculateEmployeePay(baseSalary, hoursWorked) {
        const hourlyRate = baseSalary / 40;
        let grossPay;

        if (hoursWorked <= 40) {
            grossPay = hourlyRate * hoursWorked;
        } else {
            const regularPay = hourlyRate * 40;
            const overtimePay = (hoursWorked - 40) * hourlyRate * 1.5;
            grossPay = regularPay + overtimePay;
        }

        const socialSecurity = grossPay * 0.062;
        const taxableIncome = grossPay - socialSecurity;

        let tax = 0;
        if (taxableIncome < 500) {
            tax = taxableIncome * 0.10;
        } else if (taxableIncome <= 1000) {
            tax = 500 * 0.10 + (taxableIncome - 500) * 0.20;
        } else {
            tax = 500 * 0.10 + 500 * 0.20 + (taxableIncome - 1000) * 0.30;
        }

        const netPay = taxableIncome - tax;

        return {
            grossPay: grossPay.toFixed(2),
            socialSecurity: socialSecurity.toFixed(2),
            tax: tax.toFixed(2),
            netPay: netPay.toFixed(2)
        };
    }
}

const payroll = new Payroll();
const result = payroll.calculateEmployeePay(800, 45);

console.log("Gross Pay: $" + result.grossPay);
console.log("Social Security Deduction: $" + result.socialSecurity);
console.log("Tax: $" + result.tax);
console.log("Net Pay: $" + result.netPay);
