const config = {
  apiKey: "AIzaSyC_ZhGLSMo8vX_18bSDnAwe7mw7qtxL4Qo",
  authDomain: "printopia-48a56.firebaseapp.com",
  projectId: "printopia-48a56",
  storageBucket: "printopia-48a56.appspot.com",
  messagingSenderId: "587237707405",
  appId: "1:587237707405:web:1725efa81a792e981d9cc4",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error("No Firebase configuration object provided.");
  } else {
    return config;
  }
}
