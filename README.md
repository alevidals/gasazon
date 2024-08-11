# Petrol Stations

<p>
Gazason is a web application that allows you to calculate the cheapest petrol station prices for a given number of liters.
</p>

<details>
<summary>Table of contents</summary>

- [Petrol Stations](#petrol-stations)
  - [To start](#to-start)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
      - [Back](#back)
      - [Front](#front)
    - [Tests](#tests)

</details>

## To start

### Prerequisites

- Node > 20 version. You can use [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to setup a node version manager

- Package manager
  - PNPM
    ```sh
    npm install -g pnpm
    ```

  - NPM
    ```sh
    npm install -g npm@latest
    ```

  - YARN
    ```sh
    npm install -g yarn
    ```

### Installation

At first clone the repository 

```sh
git clone https://github.com/alevidals/petrol-stations
```

#### Back

1. Move to the backend directory
    ```sh
    cd back
    ```

2. Install dependencies (You can use `npm` or `yarn` instead of `pnpm` if you like)
    ```sh
    pnpm install
    ```

3. Execute the project (You can use `npm` or `yarn` instead of `pnpm` if you like)
    ```sh
    pnpm run dev
    ```


#### Front

1. Move to the frontend directory
    ```sh
    cd front
    ```

2. Install dependencies (You can use `npm` or `yarn` instead of `pnpm` if you like)
    ```sh
    pnpm install
    ```

3. Execute the project (You can use `npm` or `yarn` instead of `pnpm` if you like)
    ```sh
    pnpm run dev
    ```

### Tests

To execute tests on the frontend execute the following script (You can use `npm` or `yarn` instead of `pnpm` if you like)
  ```sh
  pnpm test:unit
  ```