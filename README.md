# Projet SPA avec l'API Rick & Morty
Ce projet est une SPA (Single Page Application) qui utilise l'API Rick & Morty pour afficher les personnages de la série.
<br>
<br>

## Pré-requis

<div align="center">
  <table>
    <thead>
       <tr>
          <td>Package</td>
          <td>Version</td>
          <td>Documentation</td>
      </tr>
    </thead>
      <tbody align="center">
       <tr>
          <td><a href="https://github.com/npm/cli">npm</a></td>
          <td><a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a></td>
          <td><a href="https://docs.npmjs.com/">Doc</a></td>
      </tr>
      <tr>
          <td><a href="https://github.com/nodejs/node">NodeJs</a></td>
          <td><a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a></td>
          <td><a href="https://nodejs.org/en/docs/">Doc</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Installation

1. Cloner le projet à partir de Github.
2. Dans le dossier racine du projet, exécuter la commande ```npm install``` pour installer les dépendances.
3. Exécuter ```npm run dev``` pour lancer l'application en mode développement.

## Utilisation

Une fois l'application lancée, vous pouvez accéder à la page d'accueil à l'adresse ```http://localhost:5173```.
Vous verrez la liste des personnages de Rick & Morty, ainsi que des informations sur chaque personnage (nom, image, espèce, etc.).

## Déploiement

Pour déployer l'application, nous utilisons Docker et Kubernetes. Suivez ces étapes pour déployer l'application :
1. Installer Minikube et kubectl.
2. Exécuter minikube start pour démarrer le cluster.
3. Exécuter kubectl apply -f k8s/ pour déployer l'application.
4. Accéder à l'application en ouvrant l'adresse IP du cluster dans un navigateur.

## Tests

Les tests fonctionnels des requêtes vers l'API sont automatisés via GitHub Actions lors des <ins>Pull Request</ins> vers la branche "main".
Pour exécuter les tests localement, vous pouvez exécuter ```npm test```.
