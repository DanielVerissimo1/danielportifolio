import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container mx-auto px-4 py-6">
        <hr className="border-gray-200 dark:border-gray-700 mb-6" />
        
        <div className="flex flex-col items-center justify-center md:flex-row">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            © 2025 <Link href="/" className="hover:underline font-medium">Daniel Verissimo™</Link>. 
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}