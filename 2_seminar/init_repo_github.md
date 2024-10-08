
## Steps to Initialize a Local Repository and Push to GitHub

1. **Initialize a Local Repository:**
   ```bash
   git init
   ```

2. **Add Files to the Repository:**
   ```bash
   git add .
   ```

3. **Commit the Changes:**
   ```bash
   git commit -m "Initial commit"
   ```

&emsp; <i>Authentification to Guthub could be requested at this step</i>

4. **Change the branch to main:**
   ```bash
   git branch -M main
   ```

5. **Connect the local repo to the Github repo:**
   ```bash
   git remote add origin <github_link>
   ```

6. **Connect the local repo to the Github repo:**
   ```bash
   git push
   ```
   &emsp; <i>SignIn with browser / authorise will be required for the first push</i>