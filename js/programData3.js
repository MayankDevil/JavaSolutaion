/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData3.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData3 = [
            {
                problem : `1. Enter the Matrix of rows and columns entered by the user and print in matrix format`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `2. Program to Add Two Matrices`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `3. Program to Multiply Two Matrices`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `4. Program to subtract the two matrices`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `5. Program to determine whether two matrices are equal`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `6. Program to display the lower triangular matrix`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `7. Program to display the upper triangular matrix`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `8. Program to find the frequency of odd & even numbers in the given matrix`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `9. Program to find the sum of each row and each column of a matrix`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `10. Program to find the transpose of a given matrix`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `11. Program to determine whether a given matrix is an identity matrix`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `12. Program to Transpose matrix`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `13. Program to determine whether a given matrix is a sparse matrix `,
                solution : `
class Test
{
    // A sparse matrix is a matrix in which most of the elements are zero. 

    public static boolean matrix(int[][] matrix, double range)
    {
        int zeroElements = 0;
        int totalElements = matrix.length * matrix[0].length;
        
        if (matrix.length == 0 || matrix[0].length == 0)
            return false;

        for (int[] row : matrix)
            for (int element : row)
                if (element == 0)
                    zeroElements++;
                
        double zeroPercentage = (double) zeroElements / totalElements;

        return zeroPercentage >= range;
    }
    public static void main(String[] args)
    {
        int[][] matrix = {
            {0, 0, 0, 0},
            {0, 5, 0, 0},
            {0, 0, 0, 0}
        };
        double range = 0.9;

        if (matrix(matrix, range))
        {
            System.out.println("The matrix is sparse.");
        }
        else
        {
            System.out.println("The matrix is not sparse.");
        }
    }
}
            `,
                comeout : `The matrix is sparse.`
            },
        ]
    // programData3 : 2d array
}
catch (error)
{
    console.log(`${error}`)    
}
// the end