import { useMemo } from 'react'

const sumOfDigits = (num: Number) => num.toString().split('').reduce((a, b) => a + +b, 0)

export function useDivisibleByThree(inputValue: number) {
    // Add the digits untill the sum is single digit and the number is divisible by 3 if the sum is 0 or 3 or 6 or 9
    const isEven = useMemo(() => {
        if (Number.isInteger(inputValue)) {
            let sum = inputValue;
            while (sum > 9) {
                sum = sumOfDigits(sum);
            }
            if (sum === 0 || sum === 3 || sum === 6 || sum === 9) return true;
        }
        return false;
    }, [])

    return isEven
}
