# Dockerized Car Showcase Project

## Overview
This project is a web application showcasing various cars. Users can view details about each car, including make, model, year, and other specifications. The application is built using Next.js, React, and Tailwind CSS. Car images use a placeholder as the IMAGIN.studio API integration did not work as intended.

## Features
- **Car Listings**
  - Display a list of cars with details such as make, model, year, and specifications.
  - Each car listing includes a placeholder image due to the IMAGIN.studio API integration not being implemented.
  
- **Search Functionality**
  - Users can search for cars by make and model criteria using a search bar.

- **Filters**
  - Filters available for year and type of fuel to refine search results.

- **Car Details**
  - Clicking on a car from the listings displays detailed information.
  - Details include specifications like engine type, transmission, fuel type, and more.

- **Responsive Design**
  - Optimized for desktop, tablet, and mobile devices to provide a seamless user experience.
 
## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Khemu1/car-showcase
    cd dockerized-car-showcase
    ```

2. **Install Docker**:
```bash
sudo apt update
sudo apt install curl
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker.gpg
sudo add-apt-repository "deb [arch=$(dpkg --print-architecture)] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt -y install lsb-release gnupg apt-transport-https ca-certificates curl software-properties-common
sudo apt -y install docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-registry
sudo usermod -aG docker $USER
newgrp docker
```
    
3. **Start to build **:
    ```bash
   docker build -t carshowcase .
    ```
5. **start the server**:
    ```bash
    docker run --name carshowcase -p 3000:3000 -d carshowcase
    ```   
5. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.
