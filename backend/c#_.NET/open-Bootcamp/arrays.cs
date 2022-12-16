using System;

namespace ArraySpace{
    class Arrays {
        public int[] dooubleMethod(int[] arr) {
            int[] newArr = new int[arr.Length];
            for (int i = 0; i < arr.Length; i++) {
                newArr[i] = arr[i] * 2;
            }
            return newArr;
        }

        public int[,] MultiDimensional(int[] arr) {
            int[,] newArr = new int[2, arr.Length];
            for (int i = 0; i < 2; i++) {
                for (int j = 0; j < arr.Length; j++) {
                    if (i == 0) {
                        newArr[i, j] = arr[j];
                    } else {
                        newArr[i, j] = arr[j] * 2;
                    }

                }
            }
            return newArr;
        }
    }
}