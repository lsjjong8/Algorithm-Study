/* import ... */
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        sc.nextLine();

        int[] input = new int[n+1];
        int[] dp = new int[n+1];

        input[0] = 0;

        for (int i = 1; i <= n; i++) {
            input[i] = sc.nextInt();
        }

        dp[0] = input[0];
        dp[1] = dp[0] + input[1];
        dp[2] = dp[1] + input[2];

        for (int i = 3; i <= n; i++) {
            dp[i] = max(dp[i-3] + input[i-1] + input[i], dp[i-2] + input[i], dp[i-1]);
        }

        System.out.println(dp[n]);

        sc.close();
    }

    public static int max(int a, int b, int c) {
        return Math.max(a, Math.max(b, c));
    }
}
