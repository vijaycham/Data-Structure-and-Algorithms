function totalWaviness(start, end) {
    function ones(len) {
        let result = 0;

        for (let i = -1; i < len; i++) {
            result = result * 10 + 1;
        }

        return result;
    }

    function buildSolver(limit) {
        if (limit < 100) {
            return () => 0;
        }

        const str = String(limit);
        const digits = [...str].map(Number);

        const length = digits.length;
        const lastPos = length - 1;

        const firstTwoDigits = digits[0] * 10 + digits[1];

        // dp[position][state][prevPrev][prev]
        const dp = Array.from({ length }, () =>
            Array.from({ length: 3 }, () =>
                Array.from({ length: 10 }, () => [])
            )
        );

        function dfs(pos, state, prevPrev, prev) {
            if (pos === length) {
                return 0;
            }

            if (dp[pos][state][prevPrev][prev] !== undefined) {
                return dp[pos][state][prevPrev][prev];
            }

            let answer = 0;

            const limitDigit = digits[pos];

            for (let digit = 0; digit <= 9; digit++) {
                let nextState = state;

                if (state === 1) {
                    if (digit < limitDigit) {
                        nextState = 0;
                    } else if (digit > limitDigit) {
                        nextState = 2;
                    }
                }

                let contribution = 0;

                const isPeak =
                    prev > prevPrev && prev > digit;

                const isValley =
                    prev < prevPrev && prev < digit;

                if (isPeak || isValley) {
                    const remaining = lastPos - pos;

                    if (nextState === 0) {
                        contribution = ones(remaining);
                    } else if (nextState === 1) {
                        contribution =
                            ones(remaining) -
                            (
                                10 ** remaining -
                                1 -
                                Number(str.slice(pos + 1))
                            );
                    } else {
                        contribution = ones(remaining - 1);
                    }
                }

                answer +=
                    contribution +
                    dfs(pos + 1, nextState, prev, digit);
            }

            dp[pos][state][prevPrev][prev] = answer;
            return answer;
        }

        return function () {
            let total = 0;

            for (let first = 1; first <= 9; first++) {
                for (let second = 0; second <= 9; second++) {
                    const prefix = first * 10 + second;

                    let state;

                    if (prefix < firstTwoDigits) {
                        state = 0;
                    } else if (prefix === firstTwoDigits) {
                        state = 1;
                    } else {
                        state = 2;
                    }

                    total += dfs(2, state, first, second);
                }
            }

            return total;
        };
    }

    return buildSolver(end)() - buildSolver(start - 1)();
}