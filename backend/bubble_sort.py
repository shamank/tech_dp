def bubble_sort(array):
    flag = True
    for i in range(len(array)):
        print(array)
        for j in range(len(array)-i-1):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
                flag = False

        if flag:
            break
        flag = True

a = [0,2,5,1,2,1, -1, 100, 0]

bubble_sort(a)
print(a)

