// Hero.test.js
import { render, screen } from '@testing-library/react';
import Hero from '@/components/layout/Hero';


describe('Hero Component', () => {
  it('renders the correct content', () => {
    render(<Hero />);

    // Verifica que el texto esté presente en el componente
    expect(screen.getByText(/Everything is better with a Pizza!/i)).toBeInTheDocument();
    expect(screen.getByText(/Pizza is the missing piece that makes everyday complete/i)).toBeInTheDocument();

    // Verifica que los botones estén presentes
    expect(screen.getByText(/Order now/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn more/i)).toBeInTheDocument();

    // También puedes verificar la presencia de la imagen si es necesario
    // Puedes hacerlo verificando el alt o cualquier otro atributo
    expect(screen.getByAltText('Pizza!')).toBeInTheDocument();
  });
});