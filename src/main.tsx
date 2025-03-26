
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Função para inicializar a aplicação
const initApp = () => {
  try {
    const rootElement = document.getElementById("root");
    if (!rootElement) throw new Error('Falha ao encontrar o elemento root');

    createRoot(rootElement).render(<App />);
    console.log('Aplicação inicializada com sucesso');
  } catch (error) {
    console.error('Erro ao inicializar a aplicação:', error);
    // Tenta recuperar exibindo uma mensagem de erro na página
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
          <h1>Ocorreu um erro ao carregar a aplicação</h1>
          <p>Por favor, tente novamente ou entre em contato com o suporte.</p>
        </div>
      `;
    }
  }
};

// Inicializa a aplicação
initApp();
