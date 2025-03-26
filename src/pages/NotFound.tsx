
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4 text-troiton-purple">404</h1>
        <p className="text-xl text-gray-600 mb-6">Página não encontrada</p>
        <p className="text-gray-500 mb-8">
          A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
        </p>
        <Link 
          to="/" 
          className="bg-gradient-to-r from-troiton-blue to-troiton-purple text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 inline-block"
        >
          Voltar para Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
