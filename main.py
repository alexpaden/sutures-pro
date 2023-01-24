import os
from dotenv import load_dotenv

def print_hello():
    print("Hello World!")
    print(os.getenv("OPENAI_API_KEY"))

if __name__ == "__main__":
    load_dotenv()
    print_hello()