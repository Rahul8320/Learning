import csv

with open("favorites.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        fav = row[1]
        print(fav)