Print matrix in diagonal pattern
Last Updated : 23 Jul, 2025
Given a matrix of n*n size, the task is to print its elements in a diagonal pattern. 



Input : mat[3][3] = {{1, 2, 3},
                     {4, 5, 6},
                     {7, 8, 9}}
Output : 1 2 4 7 5 3 6 8 9.
Explanation: Start from 1 
Then from upward to downward diagonally i.e. 2 and 4
Then from downward to upward diagonally i.e 7, 5, 3 
Then from up to down diagonally i.e  6, 8 
Then down to up i.e. end at 9.

Input :  mat[4][4] =  {{1,  2,  3,  10},
                      {4,  5,  6,  11},
                      {7,  8,  9,  12},
                      {13, 14, 15, 16}}
Output:  1 2 4 7 5 3 10 6 8 13 14 9 11 12 15 16 .
Explanation: Start from 1 
Then from upward to downward diagonally i.e. 2 and 4
Then from downward to upward diagonally i.e 7, 5, 3 
Then from upward to downward diagonally i.e. 10 6 8 13
Then from downward to upward diagonally i.e 14 9 11
Then from upward to downward diagonally i.e. 12 15
then end at 16