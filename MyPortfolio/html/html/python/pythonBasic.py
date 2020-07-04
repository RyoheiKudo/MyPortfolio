# 実行右クリック、Run Python File in Terminal

# 論理演算子
x = 10
y = 2
z = 10

# かつand またはor 等しい == 等しくない !=
print(x >= 5 and y >= 5)
print(x >= 5 or y >= 5)

# 条件分岐
age = x + z
if age >= 20:
    print("adult")
elif age == 0:
    print("baby")
else:
    print("child")

# 繰り返し処理のfor終了breakとスキップさせるcotinue
for i in range(5):
    print(1)

for i in range(5):
    if i == 3:
        break
    print(1)

for i in range(5):
    if i == 3:
        continue
    print(i)

# for文のネスト
for i in range(3):
    for j in range(3):
        print(i, j, sep="-")

# 関数


def say_hello(greeting):
    print(greeting)


hello = say_hello
hello("Good morning")

# 複数の引数を持つ場合


def div(a, b, c):
    return (a+b+c)/3


# ここまででは表示されないので
div_result = div(1, 3, 5)
print(div_result)

# クラス
# クラスの名前は頭文字が大文字が慣習
# 引数のはじめに、selfを入れるのが慣習


class Student:

    def _init_(self, name):
        self.name

    def avg(self, math, english):
        print((math + english)/2)


a001 = Student("kudo")
print(a001.name)

a002 = Student("ryohei")
print(a002.name)


class Student:

    def _init_(self, name):
        self.name

    def avg(self, date):
        sum = 0

        for num in date:
            sum += num

        avg = sum/len(date)
        return avg


def judge(self, avg):
    if (avg >= 60):
        result = "passed"
    else:
        result = "failed"
        return(result)


a001 = Student("kudo")
date = [70, 80, 65, 20, 90]
avg = a001.calculate_avg(date)
result = a001.judge(avg)

print(avg)
print(a001.name+""+result)
