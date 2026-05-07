def main():
    print("Hello from cybersecurity!")

def define_env(env):
    @env.macro
    def hello():
        return "Hello from macros!"

if __name__ == "__main__":
    main()
