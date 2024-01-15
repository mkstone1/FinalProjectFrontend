export async function getCardsFromCosmos() {
  const response = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/cards?code=ojWNyc8e2pMYLV_YX7d4R2hom4PTtMS82ux-irIHqUsZAzFuaeFKfg=="
  );
  const cardsFromDb = await response.json();
  return cardsFromDb;
}

export async function getCategoriesFromCosmos() {
  const response = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/categories?code=a47vnC39bKKr3LF7yhTVrilEgWE02ANjQ5TTzO0YP-9FAzFup25GUA=="
  );
  const categoriesFromDb = await response.json();
  return categoriesFromDb;
}

export async function getCardsWithCategoryIdFromCosmos(categoryId) {
  const response = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/cards?code=ojWNyc8e2pMYLV_YX7d4R2hom4PTtMS82ux-irIHqUsZAzFuaeFKfg==&categoryId=" +
      categoryId
  );
  const cardsFromDb = await response.json();
  return cardsFromDb;
}

export async function getCardWithCardIdFromCosmos(cardId) {
  const repsonse = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/cards?code=ojWNyc8e2pMYLV_YX7d4R2hom4PTtMS82ux-irIHqUsZAzFuaeFKfg==&cardId=" +
      cardId
  );
  const cardsFromDb = await repsonse.json();
  return cardsFromDb;
}

export async function getGameFromGameId(gameId) {
  const response = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/games?code=Sxw-ux5FCYEX2UD6ck5Yb3u-FP7BG_kCnwLQD2lUUC-uAzFuGBBiSQ==&gameId=" +
      gameId
  );
  const game = await response.json();
  return game;
}

export async function postQuickStartGame() {
  const gameInit = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/games/QuickStart?code=Ad-qZGMFnoezOIHxpz9rpQ8PffuXQCYap9f02Ee_QArBAzFuiOtB3g==",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const gameId = await gameInit.json();
  return gameId;
}

export async function postQuickStartGameRandom() {
  const gameInit = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/games/QuickStartRandom?code=KKiSLD18KkRrRAZb_T2q6vVi0T1WrvPns6K0vh4kFc3rAzFur2nvKg==",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const gameId = await gameInit.json();
  return gameId;
}

export async function putGameAfterRound(game) {
  const response = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/games?code=0pUSZhggjkGL9ZlM0WhTDNKudH5HfEuAgFmgPf2w-EliAzFuPq6vHQ==",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    }
  );
}

export async function postGame(gameData) {
  const response = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/games?code=EBMfzj1YwDMO3T9yMGmFaauNgINuOW3SjMuFRMcxkR9cAzFu6GOzAw==",
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    }
  );
  const gameId = await response.json();
  return gameId;
}

export async function getRandomCardsFromCosmos() {
  const response = await fetch(
    "https://finalprojectbackend.azurewebsites.net/api/cards/Random?code=NCuiwgGHPjvCMhCfE0faXhJ_ASFcW8IhNoW86sXSdYi2AzFuBwDy2A=="
  );
  const cardsFromDb = await response.json();
  return cardsFromDb;
}
