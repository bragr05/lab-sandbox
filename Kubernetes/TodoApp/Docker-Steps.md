# Dockerizing and Pushing a Simple To-Do App to Azure ACR

This guide walks through the process of dockerizing a simple To-Do app, creating an image, and pushing it to Azure Container Registry (ACR). Below are the detailed steps:

### 📝 **1. Create `.dockerignore` File**

Create a `.dockerignore` file to exclude files that should not be uploaded to your image, such as `node_modules`. This helps reduce the image size and avoid unnecessary files from being included.

### 🐳 **2. Create `Dockerfile`**

Create a `Dockerfile` in the root of your project. This file contains the instructions for Docker to build your image.

### 🔨 **3. Build the Docker Image**

Build the Docker image with a tag. This command will create the image using the `Dockerfile` and label it with a version.

```bash
docker build -t bragr/simple-todo-app:v1 .
```

### 🚀 **4. Run the Image Locally**

Run the image locally to check if everything is working fine.

```bash
docker run -p 3000:3000 bragr/simple-todo-app:v1
```

Access the app at `http://localhost:3000`.

### 🔑 **5. Log in to Azure CLI**

Log in to your Azure account using the Azure CLI. This is necessary for accessing Azure resources.

```bash
az login
```

### 🔑 **6. Log in to Azure Container Registry (ACR)**

Log in to your Azure Container Registry (ACR) where you will push the image. Replace `bgrudemy` with your ACR's name.

```bash
az acr login --name bgrudemy
```

### 🏷️ **7. Tag the Image for ACR**

Tag your Docker image with the ACR registry URL, which includes the registry name and repository. This allows Docker to know where to push the image.

```bash
docker tag bragr/simple-todo-app:v1 bgrudemy.azurecr.io/simple-todo-app:v1
```

### ⬆️ **8. Push the Image to ACR**

Push the tagged image to your Azure Container Registry. This uploads the image to ACR, making it available for use in Azure services.

```bash
docker push bgrudemy.azurecr.io/simple-todo-app:v1
```

### ✅ **9. Verify the Image in ACR**

Check that your image has been successfully uploaded to the ACR by listing the repositories in your Azure Container Registry.

```bash
az acr repository list --name bgrudemy --output table
```
