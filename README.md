# Simple Compiler Project

This is a simple compiler project built with Node.js and Express, utilizing the `compilex` package. It allows users to compile programs written in Java, C, C++, and Python with or without input.

## Features

- Compile Java, C, C++, and Python programs.
- Support for compiling programs with and without input.
- Simple REST API for compiling programs.

## Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of JavaScript and Express.js.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/simple-compiler-project.git](https://github.com/webdeveloper-fresher32/Simple-GDB.git
    ```

2. Navigate to the project directory:

    ```bash
    cd simple-GDB
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node server.js
    nodemon index.js
    ```

## Usage

1. **Compiling a Program:**

    Send a POST request to `/compilecode` with the following JSON payload:

    ```json
    {
        "lang": "C",
        "code": "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
        "input": "",
        "inputRadio": "false"
    }
    ```

    - Replace `"lang"` with the desired programming language (`"C"`, `"C++"`, or `"Python"`).
    - Replace `"code"` with the code to compile.
    - Leave `"input"` empty if the program doesn't require input.
    - `"inputRadio"` should be `"true"` if input is provided, and `"false"` otherwise.

2. **Response:**

    Upon successful compilation, you'll receive the compiled output or any errors.

## Routes

- `POST /compilecode`: Compiles the provided code.
- `GET /fullStat`: Get compiler statistics.

## Contributors

- [Webdeveloper-fresher32](https://github.com/webdeveloper-fresher32)

## License

This project is licensed under the [MIT License](LICENSE).
