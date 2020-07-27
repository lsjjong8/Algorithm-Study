/* import ... */
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        int max = 0;

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        sc.nextLine();

        if(n < 1 || n > 500) {
            System.out.println("잘못된 범위를 입력하셨습니다. (1<= n <= 500)");
            return;
        }

        int[][] input = new int[n][];
        int[][] dp = new int[n][];

        for (int i = 0; i < n; i++) {
            input[i] = new int[i+1];
            for (int j = 0; j < i+1; j++) {
                input[i][j] = sc.nextInt();
            }
            sc.nextLine();
        }

        dp[0] = new int[1];
        dp[0][0] = input[0][0];

        if(n == 1) {

            System.out.println(dp[0][0]);

        } else {
            int count = 0;

            for (int i = 1; i < n; i++) {
                dp[i] = new int[i*2];
                for (int j = 0; j < i*2; j++) {
                    if (count == 2) {
                        count = 0;
                    }
                    dp[i][j] = dp[i - 1][j / 2] + input[i][j / 2 + count];
                    count++;

                    if(i == n-1 && max < dp[i][j]) {
                        max = dp[i][j];
                    }
                }
            }
        }

        System.out.println(max);
    }
}
