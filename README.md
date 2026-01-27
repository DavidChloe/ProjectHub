# 🚀 ProjectHub

![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## 📋 À propos du projet

**ProjectHub** est une application web de gestion de tâches et de suivi de projets.

Conçue comme une alternative moderne aux outils de productivité classiques, elle permet aux utilisateurs de créer des espaces de travail, d'y organiser leurs tâches et de suivre leur avancement.

Ce projet met en œuvre une architecture **Serverless** grâce à **Supabase**, remplaçant un backend traditionnel pour gérer l'authentification, la base de données temps réel et la sécurité des données.

🔗 **URL du dépôt :** [https://github.com/DavidChloe/ProjectHub](https://github.com/DavidChloe/ProjectHub)

---

## ✨ Fonctionnalités Clés

* **🔐 Authentification Sécurisée :** Inscription et connexion via Email/Mot de passe (Géré par Supabase Auth).
* **📂 Gestion de Projets :** Création, modification et suppression d'espaces de projets distincts.
* **✅ Suivi des Tâches :**
    * Ajout de tâches.
    * Modification de l'état (À faire, En cours, Terminé).
    * Assignation de dates limites (Due dates).

---

## 🛠️ Stack Technique

* **Frontend :** React 18 (Hooks personnalisés, Context API, React Router v6).
* **Backend & BDD :** Supabase (PostgreSQL).
* **API Client :** `@supabase/supabase-js`.
* **Styling :** Tailwind CSS.

---

## 🚀 Installation et Configuration

Pour exécuter ProjectHub localement, vous devez configurer votre propre instance Supabase.

### 1. Cloner le dépôt
```bash
git clone [https://github.com/DavidChloe/ProjectHub.git](https://github.com/DavidChloe/ProjectHub.git)
cd ProjectHub

### 2. Installer les dépendances
```bash
npm install
