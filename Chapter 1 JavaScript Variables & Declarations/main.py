# main.py
from typing import List

def greet(names: List[str]) -> None:
    for name in names:
        print(f"Hello {name}")

if __name__ == "__main__":
    greet(["Vaibhav", "Engineer"])