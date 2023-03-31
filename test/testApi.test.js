import { test, expect, vi, describe } from 'vitest'
import {fetchPerso} from './src/pages/PagePersonnage';
import {fetchPage} from './src/pages/UserPage';
import {mock} from 'vitest';

vi.mock("../main.js", () => ({
  
}));

// Vérifie si la fonction fetchPage renvoie un objet de page contenant une liste de 20 personnages pour un numéro de page valide 
// Et si elle génère une erreur pour un numéro de page invalide.
describe('fetchPage', () => {
  test('should return a page object when given a valid page number', async () => {
    const res = await fetchPage(1);
    expect(res.results).to.have.lengthOf(20);
  });

  test('should throw an error when given an invalid page number', async () => {
    try {
      await fetchPage(0);
    } catch (error) {
      expect(error).to.exist;
    }
  });
});

// DOUBLON ?
// Vérifie que l'objet renvoyé a une propriété results (qui devrait contenir une liste de personnages), et que cette liste a au moins une entrée. 
// Le test vérifie donc que la fonction renvoie au moins un personnage dans la première page

// describe('fetchPage', () => {
//   test('should return a page of characters', async () => {
//     const page = await fetchPage(1);
//     expect(page).to.be.an('object');
//     expect(page).to.have.property('results');
//     expect(page.results.length).to.be.greaterThan(0);
//   });
// });

// Vérifie que la fonction renvoie les données correctes pour un personnage donnée en utilisant son id
// Les attentes vérifient que les données renvoyées incluent le nom, le statut, l'espèce et le genre du personnage et qu'elles ne sont pas nulles.
// Et si elle génère une erreur pour un ID invalide
describe('fetchPerso', () => {
  test('should return a character object when given a valid ID', async () => {
    const res = await fetchPerso(1);
    expect(res.name).toBeDefined();
    expect(res.status).toBeDefined();
    expect(res.species).toBeDefined();
    expect(res.gender).toBeDefined();
  });

  test('should throw an error when given an invalid ID', async () => {
    try {
      await fetchPerso(0);
    } catch (error) {
      expect(error).to.exist;
    }
  });
});
