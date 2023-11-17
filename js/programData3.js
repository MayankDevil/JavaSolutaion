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
                solution : `
import java.util.Scanner;

class Array1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of rows: ");
        int rows = scanner.nextInt();

        System.out.print("Enter the number of columns: ");
        int columns = scanner.nextInt();

        int[][] matrix = new int[rows][columns];

        System.out.println("Enter the elements of the matrix:");

        // Input matrix elements
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                matrix[i][j] = scanner.nextInt();
            }
        }

        System.out.println("The matrix is:");
        // Output matrix elements in matrix format
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println(); // Move to the next line after each row
        }

        scanner.close();
    }
}
                `,
                comeout : `2darray/2darray_1_7014.png`
            },
            {
                problem : `2. Program to Add Two Matrices`,
                solution : `
class AddMatrices {
    public static void main(String[] args) {
        int rows = 3, columns = 3;

        // Initialize two matrices
        int[][] matrix1 = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
        int[][] matrix2 = { {9, 8, 7}, {6, 5, 4}, {3, 2, 1} };

        // Create a result matrix to store the sum
        int[][] sum = new int[rows][columns];

        // Add the matrices
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                sum[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }

        // Display the result
        System.out.println("Sum of the matrices:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.print(sum[i][j] + " ");
            }
            System.out.println();
        }
    }
}
                `,
                comeout : `2darray/2Darray_2_7020.png`
            },
            {
                problem : `3. Program to Multiply Two Matrices`,
                solution : `
class MatrixMultiplication{
  
public static void main(String args[]){  


int a[][]={{1,1,1},{2,2,2},{3,3,3}};    
int b[][]={{1,1,1},{2,2,2},{3,3,3}};    
    
 
int c[][]=new int[3][3]; 
    
//multiplying and printing multiplication of 2 matrices    
for(int i=0;i<3;i++){    
for(int j=0;j<3;j++){    
c[i][j]=0;  

  
for(int k=0;k<3;k++)      
{      
c[i][j]+=a[i][k]*b[k][j];      
}//end of k loop  
System.out.print(c[i][j]+" ");  //printing matrix element  
}//end of j loop  
System.out.println();//new line    
}    
}}  
1
                `,
                comeout : `2darray/2darray_3_7007.png`
            },
            {
                problem : `4. Program to subtract the two matrices`,
                solution : `
class sub{
    public static void main(String[] args) {
        int rows = 3, columns = 3;

        // Initialize two matrices
        int[][] matrix1 = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
        int[][] matrix2 = { {9, 8, 7}, {6, 5, 4}, {3, 2, 1} };

        // Create a result matrix to store the difference
        int[][] difference = new int[rows][columns];

        // Subtract the matrices
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                difference[i][j] = matrix1[i][j] - matrix2[i][j];
            }
        }

        // Display the result
        System.out.println("Difference of the matrices:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.print(difference[i][j] + " ");
            }
            System.out.println();
        }
    }
}
                `,
                comeout : `2darray/2Darray_4_7006.png`
            },
            {
                problem : `5. Program to determine whether two matrices are equal`,
                solution : `
class MatrixEqualOrNot {
    public static void main(String[] args) {
        int[][] x = {{1, 2}, {3, 4}};
        int[][] y = {{1, 2}, {3, 4}};
        
        int i, j, isEqual = 1;
        
        for(i = 0; i < x.length; i++)
        {
            for(j = 0; j < x[0].length; j++)
            {
                if(x[i][j] != y[i][j]) {
                    isEqual = 0;
                    break;
                }
            }
        }
        if(isEqual == 1) {
            System.out.println("\nMatrix x is Equal to Matrix y");
        }
        else {
            System.out.println("\nMatrix x is Not Equal to Matrix y");
        }
    }
}
                `,
                comeout : `2darray/2Darray_5_7014.png`
            },
            {
                problem : `6. Program to display the lower triangular matrix`,
                solution : `
class  compareMatrix{
    public static void main(String[] args) {
        int[][] matrix1 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        int[][] matrix2 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        if (check(matrix1, matrix2)) {
            System.out.println("Matrices are equal.");
        } else {
            System.out.println("Matrices are not equal.");
        }
    }
    
    public static boolean check(int[][] matrix1, int[][] matrix2) {
        if (matrix1.length != matrix2.length || matrix1[0].length != matrix2[0].length) {
            return false; 
        }
        
        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix1[0].length; j++) {
                if (matrix1[i][j] != matrix2[i][j]) {
                    return false;
                }
            }
        }
        
        return true; 
    }
}
                `,
                comeout : `2darray/2Darray_6_7014.png`
            },
            {
                problem : `7. Program to display the upper triangular matrix`,
                solution : `
import java.util.Scanner;

class uppertriangularmatrix 
{
    public static void main(String[] a) {
                
        Scanner s = new Scanner(System.in);

        System.out.print("Enter the number of rows and columns for the square matrix: ");
        int n = s.nextInt();

        int[][] matrix = new int[n][n];

        System.out.println("Enter matrix elements:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = s.nextInt();
            }
        }

        System.out.println("Upper Triangular Matrix:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (j >= i) {
                    System.out.print(matrix[i][j] + " ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println(" ");
        } 

    }
}
                `,
                comeout : `2darray/2Darray_7_7003.png`
            },
            {
                problem : `8. Program to find the frequency of odd & even numbers in the given matrix`,
                solution : `
import java.util.Scanner;

// class TwoDArray8 {
    
    class MatrixFrequency {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the number of rows and columns for the matrix
        System.out.print("Enter the number of rows: ");
        int rows = scanner.nextInt();
        System.out.print("Enter the number of columns: ");
        int columns = scanner.nextInt();

        // Create the matrix
        int[][] matrix = new int[rows][columns];

        // Input elements into the matrix
        System.out.println("Enter the elements of the matrix:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.print("Matrix[" + i + "][" + j + "]: ");
                matrix[i][j] = scanner.nextInt();
            }
        }

        // Find the frequency of odd and even numbers
        int oddFrequency = 0;
        int evenFrequency = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                if (matrix[i][j] % 2 == 0) {
                    evenFrequency++;
                } else {
                    oddFrequency++;
                }
            }
        }

        // Display the result
        System.out.println("Frequency of even numbers: " + evenFrequency);
        System.out.println("Frequency of odd numbers: " + oddFrequency);

        // Close the scanner
        scanner.close();
    }
}                
                `,
                comeout : null
            },
            {
                problem : `9. Program to find the sum of each row and each column of a matrix`,
                solution : `
                import java.util.Scanner;

class sumrowcolumn {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int rows = s.nextInt();
        System.out.print("Enter number of columns: ");
        int columns = s.nextInt();

        int[][] matrix = new int[rows][columns];

        System.out.println("Enter elements of matrix:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                matrix[i][j] = s.nextInt();
            }
        }

        int[] rowSum = new int[rows];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                rowSum[i] += matrix[i][j];
            }
        }

        int[] columnSum = new int[columns];
        for (int j = 0; j < columns; j++) {
            for (int i = 0; i < rows; i++) {
                columnSum[j] += matrix[i][j];
            }
        }

        System.out.println("Matrix:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("Sum of each row:");
        for (int i = 0; i < rows; i++) {
            System.out.println("Row " + (i + 1) + ": " + rowSum[i]);
        }

        System.out.println("Sum of each column:");
        for (int j = 0; j < columns; j++) {
            System.out.println("Column " + (j + 1) + ": " + columnSum[j]);
        }

    }
}
                `,
                comeout : `2darray/2DArray_9_7012.java.png`
            },
            {
                problem : `10. Program to find the transpose of a given matrix`,
                solution : `
class Transpose {
    public static void main(String[] args) {
        int rows = 3, columns = 3;

        // Initialize a matrix
        int[][] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };

        // Create a matrix to store the transpose
        int[][] transpose = new int[columns][rows];

        // Find the transpose of the matrix
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }

        // Display the original matrix
        System.out.println("Original Matrix:");
        displayMatrix(matrix);

        // Display the transpose matrix
        System.out.println("\nTranspose of the Matrix:");
        displayMatrix(transpose);
    }

    // Helper method to display a matrix
    public static void displayMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
                `,
                comeout : `2darray/2Darray_10_7044.png`
            },
            {
                problem : `11. Program to determine whether a given matrix is an identity matrix`,
                solution : `
public class Identity
{    
    public static void main(String[] args) {    
        int rows, cols;    
        boolean flag = true;    
      
        int a[][] = {       
                        {1, 0, 0},    
                        {0, 1, 0},    
                        {0, 0, 1}    
                    };    
          rows = a.length;    
        cols = a[0].length;    
        if(rows != cols){    
            System.out.println("Matrix should be a square matrix");    
        }    
        else {    
             
            for(int i = 0; i < rows; i++){    
                for(int j = 0; j < cols; j++){    
                  if(i == j && a[i][j] != 1){    
                      flag = false;    
                      break;    
                  }    
                  if(i != j && a[i][j] != 0){    
                      flag = false;    
                      break;    
                  }    
                }    
            }    
                
            if(flag)    
                System.out.println("Given matrix is an identity matrix");    
            else    
                System.out.println("Given matrix is not an identity matrix");    
        }    
    }    
}    
                `,
                comeout : `2darray/2Darray_11_7057.png`
            },
            {
                problem : `12. Program to Transpose matrix`,
                solution : `
// Program to Transpose matrix
// Created by Aryan , Rollno 7070
// Note : In order to compile and run this program , rename it from "7070_2DArray12.java" to "Array12.java"

import java.util.Scanner;

public class Array12 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the dimensions of the matrix from the user
        System.out.print("Enter the number of rows: ");
        int rows = scanner.nextInt();

        System.out.print("Enter the number of columns: ");
        int columns = scanner.nextInt();

        // Initialize the matrix
        int[][] matrix = new int[rows][columns];

        // Get matrix elements from the user
        System.out.println("Enter the matrix elements:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.print("Enter element at position (" + (i + 1) + ", " + (j + 1) + "): ");
                matrix[i][j] = scanner.nextInt();
            }
        }

        // Display the original matrix
        System.out.println("Original Matrix:");
        displayMatrix(matrix);

        // Transpose the matrix
        int[][] transposedMatrix = transposeMatrix(matrix);

        // Display the transposed matrix
        System.out.println("Transposed Matrix:");
        displayMatrix(transposedMatrix);

        scanner.close();
    }

    private static int[][] transposeMatrix(int[][] matrix) {
        int rows = matrix.length;
        int columns = matrix[0].length;

        int[][] result = new int[columns][rows];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                result[j][i] = matrix[i][j];
            }
        }

        return result;
    }

    private static void displayMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
    }
}                
                `,
                comeout : null
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
                comeout : null
            },
        ]
    // programData3 : 2d array

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end