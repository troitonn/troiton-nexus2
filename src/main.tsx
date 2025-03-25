
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Error rendering the application:", error);
  // Display a visible error message in the DOM if rendering fails
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="color: red; padding: 20px; font-family: sans-serif;">
        <h2>Erro ao carregar a aplicação</h2>
        <p>${error instanceof Error ? error.message : 'Erro desconhecido'}</p>
      </div>
    `;
  }
}
