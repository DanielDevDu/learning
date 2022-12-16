using System;

namespace Iterators {
    namespace ForEach {
        class ForEachExecutor {
            public void withArrays(int[]? args) {
                int[] numbers = args is not null? args: new int[] {1, 2, 3, 4, 5};
                foreach (int i in numbers) {
                    Console.WriteLine("i = {0}", i);
                    if (i == 3) {
                        goto mygoto;
                    }
                }
                mygoto: Console.WriteLine("I am in mygoto");
            }
        }
    }
    // namespace While {
    //     int num = 0;
    //     while (num < 5){
    //         Console.WriteLine("num = {0}", num);
    //         num++;
    //     }
    //     Console.WriteLine("do..while");
    //     do {
    //         Console.WriteLine("num = {0}", num);
    //         num++;
    //     } while (num < 5);
    // }
}