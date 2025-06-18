<h3 align="center">
  Java PDV/POS INTRODUCING WEB PAGE
</h3>

<p align="center">🛒 POS (Point of Sale System) built with JAVA</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/cafenocodigo/Payments_System_POS_Web_Page">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/cafenocodigo/Payments_System_POS_Web_Page">

  <a href="https://github.com/cafenocodigo/sistema-pdv-pagamentos/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/cafenocodigo/Payments_System_POS_Web_Page">
  </a>

  <a href="https://github.com/cafenocodigo/sistema-pdv-pagamentos/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/cafenocodigo/Payments_System_POS_Web_Page">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/cafenocodigo/Payments_System_POS_Web_Page">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 🧭 About the project

- <p style="color: red;">🛒 POS (Point of Sale System) built with JAVA</p>
<p align="center">Payments_System_Web_Page (POS) is the official landing page and support website for the Java-based Point of Sale system. The website serves as a digital front door for the POS application, providing:
  
✔ An overview of the system and its features
Visuals and screenshots of the software
Download links and update instructions
User guides and documentation
Contact or support information

This site is ideal for promoting the POS system to potential users or clients.</p>

## 🚀 Technologies 

I used:

- [Java](https://www.java.com/en/)
- [Apache Maven](https://maven.apache.org/)
- [Maven Repository](https://mvnrepository.com/) for dependencies management
- [JavaFx](https://openjfx.io/) for the user interface
- [Java SDK 21+](https://www.oracle.com/java/technologies/javase/)
- Scene Builder for UI design
- MySQL for data persistence
- JDBC for database connectivity

## ✅ Core Features

- Product and inventory management
- Barcode/QR code generation and scanning
- Customer registration and history
- Sales and payment processing (cash, M-Pesa, card, etc.)
- Receipt generation and PDF export
- Daily cash register control (opening/closing of cash drawer)
- User authentication and access levels
- Multi-language support (EN, PT, ZH)

## 📦 Structure

- model – JavaBeans representing data structures (e.g., Product, Sale, Customer)
- dao – Data Access Objects for database operations
- controller – Handles UI logic (JavaFX)
- view – FXML files for the UI
- util – Utility classes (e.g., database connection)

## 💻 Getting started

### Requirements

**Clone the project and access the folder**

```bash
$ git clone https://github.com/cafenocodigo/sistema-pdv-pagamentos.git && cd sistema-pdv-pagamentos
```

**📌Follow the steps below**

1. Clone the repository
2. Import as a Maven project
	```bash
	# Install the dependencies
	$ mvn clean install
	
	#If you just need to download the dependencies
	$ mvn dependencies:resolve
	```
3. Configure your MySQL database connection in Conexao.java
4. Run the application from App.java or your launcher



## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official Way
# If you don't have the GitHub CLI, use the web site or Desktop App.

$ gh repo fork cafenocodigo/sistema-pdv-pagamentos
```

**Follow the steps below if you use the command line**

```bash
# Clone your fork
$ git clone your-fork-url && cd cafenocodigo/sistema-pdv-pagamentos

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Fabio 👋 [See my linkedin](https://www.linkedin.com/in/fabiao-chirindza-mainato/)
