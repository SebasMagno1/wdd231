const STORAGE_KEY = "favoriteCategory";

export function savePreference(category) {

    localStorage.setItem(
        STORAGE_KEY,
        category
    );

}

export function getPreference() {

    return localStorage.getItem(
        STORAGE_KEY
    );

}