import csv

with open("favorites.csv", "r") as file:
    # reader = csv.reader(file)
    reader = csv.DictReader(file)
    scratch, c, python = 0,0,0
    for row in reader:
        # fav = row[1]
        fav = row["language"]
        # print(fav)
        if fav == "scratch":
            scratch += 1
        elif fav == "c":
            c += 1
        elif fav == "python":
            python += 1

print(f"Scratch: {scratch}, C: {c}, Python: {python}")